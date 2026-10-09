/**
 * Production build for Hostinger (used by `npm run build`)
 * =========================================================
 * Runs `next build` (arguments are passed through, e.g. `--webpack`) and:
 *
 *   1. Prints a short "[diag]" summary of the build server first (Node, CPUs,
 *      memory) plus quick checks (child process, worker thread, localhost TCP,
 *      HTTPS to the npm registry and the API). Failed checks are listed in full.
 *   2. Watchdog: stops the build after BUILD_WATCHDOG_MINUTES (default 12) with
 *      a clear message, instead of Hostinger silently killing it at ~15 min.
 *   3. After a successful build, copies public/ and .next/static into
 *      .next/standalone, so the standalone server.js (`output: "standalone"`,
 *      required by Hostinger) also serves images, CSS and JS.
 *
 * Why webpack (`--webpack`): Hostinger's build servers refuse localhost TCP
 * connections, which Turbopack's helper processes need, so Turbopack hangs
 * there forever with no error. Webpack doesn't use localhost connections.
 */

import { spawn, spawnSync } from "node:child_process";
import { createRequire } from "node:module";
import { Worker } from "node:worker_threads";
import fs from "node:fs";
import net from "node:net";
import os from "node:os";
import path from "node:path";

const require = createRequire(import.meta.url);
const NEXT_BIN = require.resolve("next/dist/bin/next");
const NEXT_ARGS = ["build", ...process.argv.slice(2)];
const CHECK_TIMEOUT_MS = 5_000;
const WATCHDOG_MS = (Number(process.env.BUILD_WATCHDOG_MINUTES) || 12) * 60_000;

const log = (msg) => console.log(`[diag] ${msg}`);
const mb = (bytes) => `${Math.round(bytes / 1024 / 1024)} MB`;
const withTimeout = (promise) =>
  Promise.race([
    promise,
    new Promise((_, reject) => setTimeout(() => reject(new Error(`no result within ${CHECK_TIMEOUT_MS / 1000}s`)), CHECK_TIMEOUT_MS)),
  ]);

// ---------------------------------------------------------------------------
// 1. Short environment summary + quick checks
// ---------------------------------------------------------------------------

const apiSettingsUrl = process.env.NEXT_PUBLIC_API_URL
  ? `${process.env.NEXT_PUBLIC_API_URL.replace(/\/+$/, "")}/settings`
  : null;

const httpsCheck = (url) => async () => {
  const res = await fetch(url, { signal: AbortSignal.timeout(CHECK_TIMEOUT_MS) });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
};

const checks = {
  "child process": () =>
    new Promise((resolve, reject) => {
      const child = spawn(process.execPath, ["-e", "0"], { stdio: "ignore" });
      child.on("error", reject);
      child.on("exit", (code) => (code === 0 ? resolve() : reject(new Error(`exit code ${code}`))));
    }),

  "worker thread": () =>
    new Promise((resolve, reject) => {
      const worker = new Worker("require('node:worker_threads').parentPort.postMessage(1)", { eval: true });
      worker.once("message", () => worker.terminate().then(() => resolve()));
      worker.once("error", reject);
    }),

  // Turbopack needs this; it fails on Hostinger (the reason we build with webpack)
  "localhost TCP": () =>
    new Promise((resolve, reject) => {
      const server = net.createServer((socket) => socket.end("ok"));
      server.on("error", reject);
      server.listen(0, "127.0.0.1", () => {
        const client = net.connect(server.address().port, "127.0.0.1");
        client.on("error", (error) => {
          server.close();
          reject(error);
        });
        client.on("data", () => {
          client.destroy();
          server.close();
          resolve();
        });
      });
    }),

  "npm registry": httpsCheck("https://registry.npmjs.org/"),
  ...(apiSettingsUrl ? { "API settings": httpsCheck(apiSettingsUrl) } : {}),
};

const reportEnvironment = async () => {
  log(
    `node ${process.version} ${process.platform}/${process.arch} | cpus ${os.cpus().length} | ` +
      `memory ${mb(os.freemem())} free of ${mb(os.totalmem())} | API ${process.env.NEXT_PUBLIC_API_URL || "(not set)"}`
  );
  const passed = [];
  for (const [name, check] of Object.entries(checks)) {
    try {
      await withTimeout(check());
      passed.push(name);
    } catch (error) {
      log(`FAIL ${name}: ${error.name === "TimeoutError" ? `no response within ${CHECK_TIMEOUT_MS / 1000}s` : error.cause?.code || error.message}`);
    }
  }
  log(`OK: ${passed.join(", ") || "none"}`);
};

// ---------------------------------------------------------------------------
// 2. Standalone server completion
// ---------------------------------------------------------------------------

/**
 * `output: "standalone"` builds a self-contained server in .next/standalone, but
 * Next.js leaves out public/ and .next/static (they are meant for a CDN). Copy
 * them in so server.js also serves images, CSS and JS.
 */
const completeStandalone = () => {
  const standalone = path.join(process.cwd(), ".next", "standalone");
  if (!fs.existsSync(path.join(standalone, "server.js"))) return; // not a standalone build
  const copies = [
    ["public", path.join(standalone, "public")],
    [path.join(".next", "static"), path.join(standalone, ".next", "static")],
  ];
  for (const [from, to] of copies) {
    if (!fs.existsSync(from)) continue;
    fs.rmSync(to, { recursive: true, force: true });
    fs.cpSync(from, to, { recursive: true });
    log(`copied ${from} -> ${path.relative(process.cwd(), to)}`);
  }
};

// ---------------------------------------------------------------------------
// 3. Run next build
// ---------------------------------------------------------------------------

const killTree = (child) => {
  if (process.platform === "win32") {
    spawnSync("taskkill", ["/T", "/F", "/PID", String(child.pid)], { stdio: "ignore" });
  } else {
    try {
      process.kill(-child.pid, "SIGKILL"); // whole process group
    } catch {
      child.kill("SIGKILL");
    }
  }
};

const main = async () => {
  await reportEnvironment();

  const startedAt = Date.now();
  const child = spawn(process.execPath, [NEXT_BIN, ...NEXT_ARGS], {
    stdio: "inherit",
    env: process.env,
    detached: process.platform !== "win32", // own process group, so the watchdog can stop all of it
  });

  const watchdog = setTimeout(() => {
    log(
      `WATCHDOG: build still running after ${WATCHDOG_MS / 60_000} minutes - stopping it. ` +
        `If it never got past "Creating an optimized production build", check the FAIL lines above ` +
        `(Turbopack hangs when "localhost TCP" fails - keep --webpack in package.json).`
    );
    killTree(child);
  }, WATCHDOG_MS);

  // The build runs in its own process group, so stop it too when we are stopped
  const stop = () => {
    killTree(child);
    process.exit(1);
  };
  process.on("SIGINT", stop);
  process.on("SIGTERM", stop);

  child.on("exit", (code, signal) => {
    clearTimeout(watchdog);
    const seconds = Math.round((Date.now() - startedAt) / 1000);
    log(`next build finished in ${seconds}s with ${signal ? `signal ${signal}` : `exit code ${code}`}`);
    if (code === 0) {
      try {
        completeStandalone();
      } catch (error) {
        log(`FAIL standalone copy: ${error.message}`);
        process.exit(1);
      }
    }
    process.exit(code ?? 1);
  });
};

main().catch((error) => {
  log(`build wrapper failed: ${error.stack || error.message} - running plain next build`);
  const result = spawnSync(process.execPath, [NEXT_BIN, ...NEXT_ARGS], { stdio: "inherit" });
  if (result.status === 0) completeStandalone();
  process.exit(result.status ?? 1);
});
