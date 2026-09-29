/**
 * Server-side Global Settings Loader
 * ===================================
 * Fetches the global variables once per render pass on the server so both the
 * public website and the Admin Portal receive them in the initial HTML (no
 * placeholder flash).
 *
 * Cached for 5 minutes; `revalidateTag("settings")` refreshes it on demand after
 * an admin saves new values.
 */

import { COMPANY_DEFAULTS } from "./companyDefaults";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export const SETTINGS_CACHE_TAG = "settings";

export async function getSettings() {
  try {
    const res = await fetch(`${API_BASE_URL.replace(/\/+$/, "")}/settings`, {
      cache: "force-cache",
      next: { revalidate: 300, tags: [SETTINGS_CACHE_TAG] },
    });

    if (!res.ok) {
      console.warn(`Settings API responded ${res.status}; using defaults.`);
      return COMPANY_DEFAULTS;
    }

    const data = await res.json();
    if (data?.success && data.settings && typeof data.settings === "object") {
      // Defaults first so a newly added key never renders as empty
      return { ...COMPANY_DEFAULTS, ...data.settings };
    }
    return COMPANY_DEFAULTS;
  } catch (error) {
    console.warn("Settings API unreachable; using defaults:", error.message);
    return COMPANY_DEFAULTS;
  }
}
