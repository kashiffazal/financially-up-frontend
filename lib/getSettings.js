/**
 * Server-side Global Settings Loader
 * ===================================
 * Fetches the global variables once per render pass on the server so both the
 * public website and the Admin Portal receive them in the initial HTML (no
 * placeholder flash).
 *
 * Cached for 5 minutes; `revalidateTag("settings")` refreshes it on demand after
 * an admin saves new values.
 *
 * Resilience (build + runtime):
 *   - Every request times out after 4s, so an unreachable API can never stall
 *     `next build` (each page has a 60s generation limit) or a page request.
 *   - Concurrent callers share one in-flight request (one fetch per build worker
 *     instead of one per pre-rendered page).
 *   - After a failure, defaults are served for 30s before trying again, and the
 *     warning is logged once per failure window instead of once per page.
 */

import { COMPANY_DEFAULTS } from "./companyDefaults";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export const SETTINGS_CACHE_TAG = "settings";

const REQUEST_TIMEOUT_MS = 4000;
const FAILURE_BACKOFF_MS = 30000;

let inFlight = null; // shared promise while a request is running
let failedUntil = 0; // serve defaults without retrying until this timestamp

async function requestSettings() {
  try {
    const res = await fetch(`${API_BASE_URL.replace(/\/+$/, "")}/settings`, {
      cache: "force-cache",
      next: { revalidate: 300, tags: [SETTINGS_CACHE_TAG] },
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    });

    if (!res.ok) throw new Error(`responded ${res.status}`);

    const data = await res.json();
    if (data?.success && data.settings && typeof data.settings === "object") {
      // Defaults first so a newly added key never renders as empty
      return { ...COMPANY_DEFAULTS, ...data.settings };
    }
    return COMPANY_DEFAULTS;
  } catch (error) {
    failedUntil = Date.now() + FAILURE_BACKOFF_MS;
    const reason = error?.name === "TimeoutError" ? `no response within ${REQUEST_TIMEOUT_MS / 1000}s` : error?.message;
    console.warn(`Settings API unreachable (${API_BASE_URL}); using defaults for ${FAILURE_BACKOFF_MS / 1000}s: ${reason}`);
    return COMPANY_DEFAULTS;
  }
}

export async function getSettings() {
  if (Date.now() < failedUntil) return COMPANY_DEFAULTS;
  if (!inFlight) {
    inFlight = requestSettings().finally(() => {
      inFlight = null;
    });
  }
  return inFlight;
}
