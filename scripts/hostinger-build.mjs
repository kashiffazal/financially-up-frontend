/**
 * Build with diagnostics (used by `npm run build`)
 * =================================================
 * Runs `next build` exactly as before, and additionally writes a report into
 * the build log so a hosting build that hangs with no error (as on Hostinger)
 * explains itself:
 *
 *   1. Before the build: Node / CPU / memory / process limits of the server, and
 *      quick checks (child processes, worker threads, localhost networking,
 *      DNS + HTTPS to npm, Google and the API) — each limited to a few seconds.
 *   2. During the build, every 30s: CPU and memory of every build process, and
 *      any network connections they are waiting on (Linux only).
 *   3. If the build looks frozen, the kernel state of each build process.
 *   4. Watchdog: after BUILD_WATCHDOG_MINUTES (default 12) the build is stopped
 *      with a final report, so the host's own time limit can't hide it.
 *
 * Any arguments are passed to `next build` (e.g. `--webpack`).
 * Lines written by this script start with "[diag]".
 */

import { spawn, spawnSync } from "node:child_process";
import { createRequire } from "node:module";
import { Worker } from "node:worker_threads";
import dns from "node:dns/promises";
import fs from "node:fs";
import net from "node:net";
import os from "node:os";

const require = createRequire(import.meta.url);
const IS_LINUX = process.platform === "linux";
const HEARTBEAT_MS = 30_000;
const CHECK_TIMEOUT_MS = 5_000;
const WATCHDOG_MS = (Number(process.env.BUILD_WATCHDOG_MINUTES) || 12) * 60_000;
const FROZEN_CPU_PERCENT = 2; // whole build tree below this for...
const FROZEN_HEARTBEATS = 3; // ...this many heartbeats in a row = frozen

const log = (msg = "") => console.log(`[diag] ${msg}`);
const mb = (bytes) => (Number.isFinite(bytes) ? `${Math.round(bytes / 1024 / 1024)} MB` : "n/a");
const readText = (file) => {
  try {
    return fs.readFileSync(file, "utf8").trim();
  } catch {
    return null;
  }
};
const withTimeout = (promise, ms = CHECK_TIMEOUT_MS) =>
  Promise.race([promise, new Promise((_, reject) => setTimeout(() => reject(new Error(`no result within ${ms / 1000}s`)), ms))]);

// ---------------------------------------------------------------------------
// 1. Environment report
// ---------------------------------------------------------------------------

/** cgroup v2 (or v1) limits for this process: the real memory / process caps of a container. */
const cgroupInfo = () => {
  if (!IS_LINUX) return {};
  const rel = (readText("/proc/self/cgroup") || "").split("\n").find((l) => l.startsWith("0::"))?.slice(3) || "";
  const v2 = (name) => readText(`/sys/fs/cgroup${rel}/${name}`) ?? readText(`/sys/fs/cgroup/${name}`);
  return {
    memoryMax: v2("memory.max") ?? readText("/sys/fs/cgroup/memory/memory.limit_in_bytes"),
    memoryCurrent: v2("memory.current") ?? readText("/sys/fs/cgroup/memory/memory.usage_in_bytes"),
    pidsMax: v2("pids.max") ?? readText("/sys/fs/cgroup/pids/pids.max"),
    pidsCurrent: v2("pids.current") ?? readText("/sys/fs/cgroup/pids/pids.current"),
    cpuMax: v2("cpu.max"),
  };
};

const formatLimit = (value) => (value && /^\d+$/.test(value) ? mb(Number(value)) : value || "n/a");

const reportEnvironment = () => {
  log("================ BUILD ENVIRONMENT ================");
  log(`node ${process.version} | ${process.platform} ${process.arch} | ${os.release()}`);
  log(`cpus: ${os.cpus().length} (available parallelism ${os.availableParallelism?.() ?? "n/a"})`);
  log(`memory: total ${mb(os.totalmem())}, free ${mb(os.freemem())}`);
  if (IS_LINUX) {
    const meminfo = readText("/proc/meminfo") || "";
    const available = Number(meminfo.match(/MemAvailable:\s+(\d+)/)?.[1]) * 1024;
    log(`memory available (kernel): ${mb(available)}`);
    const cg = cgroupInfo();
    log(`container limits: memory ${formatLimit(cg.memoryMax)} (using ${formatLimit(cg.memoryCurrent)}), processes/threads ${cg.pidsMax ?? "n/a"} (using ${cg.pidsCurrent ?? "n/a"}), cpu ${cg.cpuMax ?? "n/a"}`);
    const limits = readText("/proc/self/limits") || "";
    ["Max processes", "Max open files", "Max address space", "Max resident set"].forEach((name) => {
      const line = limits.split("\n").find((l) => l.startsWith(name));
      if (line) log(`ulimit ${line.replace(/\s{2,}/g, " | ")}`);
    });
  }
  try {
    const st = fs.statfsSync(process.cwd());
    log(`disk free here: ${mb(st.bavail * st.bsize)}`);
  } catch {
    /* statfs not available */
  }
  const proxies = ["HTTPS_PROXY", "HTTP_PROXY", "ALL_PROXY", "https_proxy", "http_proxy", "all_proxy"].filter((k) => process.env[k]);
  log(`NEXT_PUBLIC_API_URL: ${process.env.NEXT_PUBLIC_API_URL || "(not set)"}`);
  log(`NODE_OPTIONS: ${process.env.NODE_OPTIONS || "(not set)"} | proxy env vars: ${proxies.length ? proxies.join(", ") : "none"} | CI: ${process.env.CI || "(not set)"}`);
};

// ---------------------------------------------------------------------------
// 2. Quick capability checks (each limited to a few seconds)
// ---------------------------------------------------------------------------

const checks = {
  "start a child process": () =>
    new Promise((resolve, reject) => {
      const child = spawn(process.execPath, ["-e", "0"], { stdio: "ignore" });
      child.on("error", reject);
      child.on("exit", (code) => (code === 0 ? resolve() : reject(new Error(`exit code ${code}`))));
    }),

  "start a worker thread": () =>
    new Promise((resolve, reject) => {
      const worker = new Worker("require('node:worker_threads').parentPort.postMessage(1)", { eval: true });
      worker.once("message", () => worker.terminate().then(() => resolve()));
      worker.once("error", reject);
    }),

  "localhost TCP connection": () =>
    new Promise((resolve, reject) => {
      const server = net.createServer((socket) => socket.end("ok"));
      server.on("error", reject);
      server.listen(0, "127.0.0.1", () => {
        const { port } = server.address();
        const client = net.connect(port, "127.0.0.1");
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
};

const httpsTargets = [
  ["npm registry", "https://registry.npmjs.org/"],
  ["Google Fonts", "https://fonts.googleapis.com/css2?family=Geist"],
  ["API settings", process.env.NEXT_PUBLIC_API_URL ? `${process.env.NEXT_PUBLIC_API_URL.replace(/\/+$/, "")}/settings` : null],
];

const runChecks = async () => {
  log("================ QUICK CHECKS ================");
  for (const [name, fn] of Object.entries(checks)) {
    const t0 = Date.now();
    try {
      await withTimeout(fn());
      log(`OK    ${name} (${Date.now() - t0} ms)`);
    } catch (error) {
      log(`FAIL  ${name}: ${error.message}`);
    }
  }
  for (const [name, url] of httpsTargets) {
    if (!url) continue;
    const { hostname } = new URL(url);
    let t0 = Date.now();
    try {
      const addresses = await withTimeout(dns.lookup(hostname, { all: true }));
      log(`OK    DNS ${hostname} -> ${addresses.map((a) => a.address).join(", ")} (${Date.now() - t0} ms)`);
    } catch (error) {
      log(`FAIL  DNS ${hostname}: ${error.message}`);
      continue;
    }
    t0 = Date.now();
    try {
      const res = await fetch(url, { method: "GET", signal: AbortSignal.timeout(CHECK_TIMEOUT_MS) });
      log(`OK    HTTPS ${name}: HTTP ${res.status} (${Date.now() - t0} ms)`);
    } catch (error) {
      log(`FAIL  HTTPS ${name}: ${error.name === "TimeoutError" ? `no response within ${CHECK_TIMEOUT_MS / 1000}s` : error.cause?.code || error.message}`);
    }
  }
};

// ---------------------------------------------------------------------------
// 3. Watching the build (Linux /proc)
// ---------------------------------------------------------------------------

const CLK_TCK = 100;

/** Every process in the build's tree: pid -> { name, state, cpuTicks, rss, threads } */
const processTree = (rootPid) => {
  const all = new Map();
  for (const entry of fs.readdirSync("/proc")) {
    if (!/^\d+$/.test(entry)) continue;
    const stat = readText(`/proc/${entry}/stat`);
    if (!stat) continue;
    const close = stat.lastIndexOf(")");
    const fields = stat.slice(close + 2).split(" ");
    all.set(Number(entry), {
      pid: Number(entry),
      name: stat.slice(stat.indexOf("(") + 1, close),
      state: fields[0],
      ppid: Number(fields[1]),
      cpuTicks: Number(fields[11]) + Number(fields[12]),
      threads: Number(fields[17]),
      rss: Number(fields[21]) * 4096,
    });
  }
  const tree = new Map();
  const queue = [rootPid];
  while (queue.length) {
    const pid = queue.shift();
    const proc = all.get(pid);
    if (!proc || tree.has(pid)) continue;
    const cmd = (readText(`/proc/${pid}/cmdline`) || "").replace(/\0/g, " ").replace(/\S*node_modules\//g, "").trim();
    tree.set(pid, { ...proc, cmd: cmd.slice(0, 90) || proc.name });
    for (const child of all.values()) if (child.ppid === pid) queue.push(child.pid);
  }
  return tree;
};

const TCP_STATES = { "01": "ESTABLISHED", "02": "SYN_SENT", "03": "SYN_RECV", "04": "FIN_WAIT1", "05": "FIN_WAIT2", "06": "TIME_WAIT", "08": "CLOSE_WAIT", "09": "LAST_ACK", "0A": "LISTEN" };

const decodeAddress = (hex) => {
  const [ip, port] = hex.split(":");
  let address;
  if (ip.length === 8) {
    address = ip.match(/../g).reverse().map((b) => parseInt(b, 16)).join(".");
  } else {
    const words = ip.match(/.{8}/g).map((w) => w.match(/../g).reverse().join(""));
    const full = words.join("");
    address = full.startsWith("00000000000000000000FFFF")
      ? full.slice(24).match(/../g).map((b) => parseInt(b, 16)).join(".")
      : full.toLowerCase().match(/.{4}/g).join(":");
  }
  return `${address}:${parseInt(port, 16)}`;
};

/** Network connections owned by the build processes (remote address + state). */
const buildConnections = (tree) => {
  const inodes = new Map();
  for (const proc of tree.values()) {
    let fds = [];
    try {
      fds = fs.readdirSync(`/proc/${proc.pid}/fd`);
    } catch {
      continue;
    }
    for (const fd of fds) {
      try {
        const target = fs.readlinkSync(`/proc/${proc.pid}/fd/${fd}`);
        const inode = target.match(/^socket:\[(\d+)\]$/)?.[1];
        if (inode) inodes.set(inode, proc.pid);
      } catch {
        /* fd closed meanwhile */
      }
    }
  }
  const connections = [];
  for (const file of ["/proc/net/tcp", "/proc/net/tcp6"]) {
    for (const line of (readText(file) || "").split("\n").slice(1)) {
      const parts = line.trim().split(/\s+/);
      const pid = inodes.get(parts[9]);
      if (!pid || parts[3] === "0A") continue; // skip listening sockets
      connections.push(`pid ${pid} -> ${decodeAddress(parts[2])} ${TCP_STATES[parts[3]] || parts[3]}`);
    }
  }
  return connections;
};

let previousTicks = new Map();
let lowCpuStreak = 0;

const heartbeat = (rootPid, startedAt, { detailed = false } = {}) => {
  const elapsed = Math.round((Date.now() - startedAt) / 1000);
  if (!IS_LINUX) {
    log(`still building... ${elapsed}s, memory free ${mb(os.freemem())}`);
    return;
  }
  const tree = processTree(rootPid);
  const seconds = HEARTBEAT_MS / 1000;
  let totalCpu = 0;
  let totalRss = 0;
  const lines = [];
  for (const proc of tree.values()) {
    const cpu = ((proc.cpuTicks - (previousTicks.get(proc.pid) ?? proc.cpuTicks)) / CLK_TCK / seconds) * 100;
    totalCpu += cpu;
    totalRss += proc.rss;
    lines.push(`   pid ${proc.pid} [${proc.state}] cpu ${cpu.toFixed(0)}% rss ${mb(proc.rss)} threads ${proc.threads} - ${proc.cmd}`);
  }
  previousTicks = new Map([...tree.values()].map((p) => [p.pid, p.cpuTicks]));
  const cg = cgroupInfo();
  log(`---- ${elapsed}s: ${tree.size} build processes, cpu ${totalCpu.toFixed(0)}%, memory ${mb(totalRss)} (container ${formatLimit(cg.memoryCurrent)} of ${formatLimit(cg.memoryMax)}, processes ${cg.pidsCurrent ?? "?"}/${cg.pidsMax ?? "?"})`);
  lines.forEach((l) => log(l));

  const connections = buildConnections(tree);
  if (connections.length) connections.forEach((c) => log(`   net: ${c}`));

  lowCpuStreak = totalCpu < FROZEN_CPU_PERCENT ? lowCpuStreak + 1 : 0;
  if (detailed || lowCpuStreak === FROZEN_HEARTBEATS) {
    log(detailed ? "   ---- final state of every build process ----" : "   !!!! BUILD LOOKS FROZEN (no CPU use) - what each process is waiting on:");
    for (const proc of tree.values()) {
      const wchan = readText(`/proc/${proc.pid}/wchan`) || "?";
      const syscall = (readText(`/proc/${proc.pid}/syscall`) || "?").split(" ")[0];
      log(`   pid ${proc.pid} state ${proc.state} waiting in "${wchan}" (syscall ${syscall}) - ${proc.cmd}`);
    }
  }
};

// ---------------------------------------------------------------------------
// 4. Run next build
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
  reportEnvironment();
  await runChecks();

  const args = ["build", ...process.argv.slice(2)];
  log("================ NEXT BUILD ================");
  log(`running: next ${args.join(" ")} (watchdog ${WATCHDOG_MS / 60_000} min)`);

  const startedAt = Date.now();
  const child = spawn(process.execPath, [require.resolve("next/dist/bin/next"), ...args], {
    stdio: "inherit",
    env: process.env,
    detached: process.platform !== "win32", // own process group, so the watchdog can stop all of it
  });

  const timer = setInterval(() => {
    try {
      heartbeat(child.pid, startedAt);
    } catch (error) {
      log(`heartbeat error: ${error.message}`);
    }
  }, HEARTBEAT_MS);

  const watchdog = setTimeout(() => {
    log(`!!!! WATCHDOG: build still running after ${WATCHDOG_MS / 60_000} minutes - stopping it.`);
    try {
      heartbeat(child.pid, startedAt, { detailed: true });
    } catch (error) {
      log(`final report error: ${error.message}`);
    }
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
    clearInterval(timer);
    clearTimeout(watchdog);
    const seconds = Math.round((Date.now() - startedAt) / 1000);
    log(`next build finished in ${seconds}s with ${signal ? `signal ${signal}` : `exit code ${code}`}`);
    process.exit(code ?? 1);
  });
};

main().catch((error) => {
  log(`diagnostics failed: ${error.stack || error.message} - running plain next build`);
  const result = spawnSync(process.execPath, [require.resolve("next/dist/bin/next"), "build", ...process.argv.slice(2)], { stdio: "inherit" });
  process.exit(result.status ?? 1);
});
