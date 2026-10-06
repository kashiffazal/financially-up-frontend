"use client";

import { Suspense, useEffect, useRef } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { antdMsg } from "@/services";

/**
 * ============================================================================
 * Open Record From URL (`components/admin/OpenRecordFromUrl`)
 * ============================================================================
 * Invisible helper mounted inside a module log container. When the page URL
 * carries `?open=<id>` (e.g. from the header Global Search), it:
 *   1. Waits until the module's records have loaded (`ready`).
 *   2. Finds the record in `records`, or falls back to `fetchById(id)` for
 *      records outside the loaded page.
 *   3. Calls `onOpen(record)` so the container can open its details modal.
 *   4. Removes `?open=` from the URL so a refresh does not reopen it.
 *
 * It also reports the Global Search "View all" filter (`?ids=1,2,3&q=term`)
 * through `onFilter({ ids, query })` / `onFilter(null)`. That one stays in the
 * URL, so refresh and the Back button keep the filtered list.
 *
 * Wrapped in its own <Suspense> boundary because `useSearchParams` requires
 * one for prerendered routes in Next 16.
 */
function OpenRecordListener({ records = [], ready = false, fetchById, onOpen, onFilter }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const openId = searchParams.get("open");
  const idsParam = searchParams.get("ids");
  const queryParam = searchParams.get("q");
  const handledIdRef = useRef(null);

  // "View all" filter: ?ids=1,2,3&q=term
  useEffect(() => {
    if (typeof onFilter !== "function") return;
    const ids = (idsParam || "")
      .split(",")
      .map((v) => v.trim())
      .filter((v) => /^\d+$/.test(v));
    onFilter(ids.length ? { ids, query: queryParam || "" } : null);
  }, [idsParam, queryParam, onFilter]);

  useEffect(() => {
    if (!openId) {
      handledIdRef.current = null;
      return;
    }
    if (!ready || handledIdRef.current === openId) return;
    handledIdRef.current = openId;

    const clearParam = () => router.replace(pathname, { scroll: false });

    const found = records.find((r) => String(r.id) === String(openId));
    if (found) {
      onOpen(found);
      clearParam();
      return;
    }

    (async () => {
      try {
        const record = typeof fetchById === "function" ? await fetchById(openId) : null;
        if (record) {
          onOpen(record);
        } else {
          antdMsg.warning("Application not found or was deleted.");
        }
      } catch {
        antdMsg.warning("Application not found or was deleted.");
      } finally {
        clearParam();
      }
    })();
  }, [openId, ready, records, fetchById, onOpen, router, pathname]);

  return null;
}

export default function OpenRecordFromUrl(props) {
  return (
    <Suspense fallback={null}>
      <OpenRecordListener {...props} />
    </Suspense>
  );
}
