"use client";

import { useCallback, useEffect, useState } from "react";
import { HTTP } from "@/services";
import { DEBOUNCE_MS, MIN_QUERY_LENGTH, RESULTS_PER_MODULE } from "./searchConfig";

const MAX_CACHED_TERMS = 20;

/**
 * useGlobalSearch(query)
 * ======================
 * Debounced type-ahead search against `GET /api/search`.
 * - Waits DEBOUNCE_MS after the last keystroke before calling the API.
 * - Aborts in-flight requests when the term changes or the component unmounts.
 * - Keeps results per term (last 20) so backspacing is instant; `resetCache()`
 *   clears them so each new search session shows fresh statuses.
 *
 * @returns {{ term, status: "idle"|"short"|"loading"|"success"|"error", data, retry, resetCache }}
 */
export default function useGlobalSearch(query) {
  const term = String(query || "").trim().replace(/\s+/g, " ");
  const isSearchable = term.length >= MIN_QUERY_LENGTH;

  // { [term]: { data } | { error: true } }
  const [entries, setEntries] = useState({});
  const entry = isSearchable ? entries[term] : undefined;

  useEffect(() => {
    if (!isSearchable || entry) return undefined;

    const controller = new AbortController();
    const timer = setTimeout(async () => {
      const res = await HTTP(
        "GET",
        "/search",
        { q: term, limit: RESULTS_PER_MODULE },
        false,
        true, // inline error state instead of global notifications
        false,
        { signal: controller.signal }
      );
      if (controller.signal.aborted) return;

      setEntries((prev) => {
        const next = { ...prev, [term]: res?.success ? { data: res.data } : { error: true } };
        const keys = Object.keys(next);
        if (keys.length > MAX_CACHED_TERMS) delete next[keys[0]];
        return next;
      });
    }, DEBOUNCE_MS);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [term, isSearchable, entry]);

  const retry = useCallback(() => {
    setEntries((prev) => {
      const next = { ...prev };
      delete next[term];
      return next;
    });
  }, [term]);

  const resetCache = useCallback(() => setEntries({}), []);

  let status = "idle";
  if (term.length > 0 && !isSearchable) status = "short";
  else if (isSearchable && !entry) status = "loading";
  else if (entry?.error) status = "error";
  else if (entry?.data) status = "success";

  return { term, status, data: entry?.data || null, retry, resetCache };
}
