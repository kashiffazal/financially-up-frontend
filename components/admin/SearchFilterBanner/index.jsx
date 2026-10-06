"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { FilterOutlined, CloseOutlined } from "@ant-design/icons";
import styles from "./SearchFilterBanner.module.css";

/**
 * Narrow a `{ All: [...], <status>: [...] }` bucket map to the given record IDs.
 * Returns the original map when there is no active filter.
 */
export const filterStatusMapByIds = (statusMap, ids) => {
  if (!ids) return statusMap;
  const allowed = new Set(ids.map(String));
  return Object.fromEntries(
    Object.entries(statusMap).map(([key, list]) => [
      key,
      Array.isArray(list) ? list.filter((r) => allowed.has(String(r.id))) : list,
    ])
  );
};

/**
 * ============================================================================
 * Search Filter Banner (`components/admin/SearchFilterBanner`)
 * ============================================================================
 * Shown above a module's status tabs when it was opened from Global Search
 * "View all" (`?ids=1,2,3&q=term`). Explains why the list is narrowed and
 * offers a one-click way back to every record.
 */
export default function SearchFilterBanner({ filter, shownCount }) {
  const router = useRouter();
  const pathname = usePathname();

  if (!filter) return null;

  return (
    <div
      role="status"
      className={`${styles.banner} mb-4 flex flex-wrap items-center justify-between gap-3 rounded-xl px-4 py-2.5`}
    >
      <span className="flex items-center gap-2.5 min-w-0 text-[13px] text-slate-700 dark:text-zinc-200">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/80 dark:bg-zinc-900/60 text-brand-primary dark:text-emerald-400">
          <FilterOutlined />
        </span>
        <span className="min-w-0">
          Showing <strong>{shownCount}</strong> application{shownCount === 1 ? "" : "s"} matching{" "}
          {filter.query ? <strong className="break-all">&ldquo;{filter.query}&rdquo;</strong> : "your search"}
          <span className="text-slate-500 dark:text-zinc-400"> from Global Search</span>
        </span>
      </span>
      <button
        type="button"
        onClick={() => router.replace(pathname, { scroll: false })}
        className="flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-[12px] font-semibold text-brand-primary dark:text-emerald-400 hover:bg-white/70 dark:hover:bg-zinc-900/60 transition-colors cursor-pointer"
      >
        <CloseOutlined className="text-[10px]" /> Show all records
      </button>
    </div>
  );
}
