"use client";

/**
 * ============================================================================
 * Global Search (`components/admin/GlobalSearch`)
 * ============================================================================
 * Header type-ahead that searches every application module by name, email,
 * phone, ABN/ACN or reference (`GET /api/search`).
 *
 * UX:
 * - Ctrl+K / ⌘K focuses the search from anywhere (opens a modal on mobile).
 * - Empty focus → recent searches + "Jump to" module shortcuts.
 * - Results grouped by module with highlighted matches, the field that matched,
 *   status tag and submitted date.
 * - ↑ ↓ to move, ↵ to open, Esc to close. Selecting a result navigates to the
 *   module page with `?open=<id>`, which opens that record's details modal.
 */

import React, { useCallback, useEffect, useId, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { useRouter } from "next/navigation";
import { Input, Modal, Button } from "antd";
import {
  SearchOutlined,
  LoadingOutlined,
  CloseCircleFilled,
  HistoryOutlined,
  ArrowRightOutlined,
  ExclamationCircleOutlined,
  FileSearchOutlined,
} from "@ant-design/icons";
import { canAccessAdminPath } from "@/lib/adminAccess";
import { useAuth } from "@/context/AuthContext";
import useGlobalSearch from "./useGlobalSearch";
import SearchResultItem from "./SearchResultItem";
import styles from "./GlobalSearch.module.css";
import {
  MODULE_META,
  QUICK_LINKS,
  MIN_QUERY_LENGTH,
  MAX_QUERY_LENGTH,
  MAX_RECENT_SEARCHES,
  readRecentSearches,
  writeRecentSearches,
} from "./searchConfig";

const noopSubscribe = () => () => {};
const detectMac = () => /Mac|iPhone|iPad|iPod/i.test(navigator.platform || navigator.userAgent || "");

// ============================================================================
// Search box + results panel (used inline in the header and inside the mobile modal)
// ============================================================================
function SearchBox({ variant = "dropdown", inputRef, shortcutLabel, onNavigate }) {
  const router = useRouter();
  const { user, hasRole } = useAuth();
  const listboxId = useId();
  const containerRef = useRef(null);
  const isInline = variant === "inline";

  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [recent, setRecent] = useState(readRecentSearches);

  const { term, status, data, retry, resetCache } = useGlobalSearch(query);
  const panelOpen = isInline || open;

  // --------------------------------------------------------------------------
  // Navigable items (drives keyboard navigation + aria-activedescendant)
  // --------------------------------------------------------------------------
  const quickLinks = useMemo(() => {
    const isSuperAdmin = hasRole("administrator");
    // Same rules as the sidebar / page guard (lib/adminAccess.js)
    return QUICK_LINKS.filter((l) => canAccessAdminPath(user, isSuperAdmin, l.href));
  }, [user, hasRole]);

  const groups = useMemo(() => {
    const raw = status === "success" ? data?.groups || [] : [];
    return raw.map((g, i) => ({
      ...g,
      offset: raw.slice(0, i).reduce((sum, prev) => sum + prev.results.length, 0),
    }));
  }, [status, data]);

  const navItems = useMemo(() => {
    if (!term) {
      return [
        ...recent.map((value) => ({ type: "recent", value })),
        ...quickLinks.map((link) => ({ type: "module", link })),
      ];
    }
    return groups.flatMap((group) => group.results.map((item) => ({ type: "result", item, group })));
  }, [term, recent, quickLinks, groups]);

  // Reset the highlighted row whenever the list changes (adjusted during render)
  const navSignature = `${term}|${status}|${navItems.length}`;
  const [lastNavSignature, setLastNavSignature] = useState(navSignature);
  if (navSignature !== lastNavSignature) {
    setLastNavSignature(navSignature);
    setActiveIndex(0);
  }

  const optionId = (index) => `${listboxId}-opt-${index}`;

  // Keep the highlighted row in view while arrowing through results
  useEffect(() => {
    if (!panelOpen) return;
    document.getElementById(optionId(activeIndex))?.scrollIntoView({ block: "nearest" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, panelOpen]);

  // Close the dropdown when clicking outside of it
  useEffect(() => {
    if (isInline || !open) return undefined;
    const onPointerDown = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [isInline, open]);

  // --------------------------------------------------------------------------
  // Actions
  // --------------------------------------------------------------------------
  const rememberSearch = useCallback(
    (value) => {
      const next = [value, ...recent.filter((r) => r.toLowerCase() !== value.toLowerCase())].slice(
        0,
        MAX_RECENT_SEARCHES
      );
      setRecent(next);
      writeRecentSearches(next);
    },
    [recent]
  );

  const clearRecent = () => {
    setRecent([]);
    writeRecentSearches([]);
  };

  const navigate = (url) => {
    setOpen(false);
    inputRef?.current?.blur();
    if (typeof onNavigate === "function") onNavigate();
    router.push(url);
  };

  const selectItem = (navItem) => {
    if (!navItem) return;
    if (navItem.type === "recent") {
      setQuery(navItem.value);
      inputRef?.current?.focus();
    } else if (navItem.type === "module") {
      navigate(navItem.link.href);
    } else if (navItem.type === "result") {
      rememberSearch(term);
      navigate(navItem.item.url);
    }
  };

  const handleFocus = () => {
    if (!open) {
      resetCache(); // fresh statuses for each search session
      setOpen(true);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      if (!panelOpen) setOpen(true);
      if (!navItems.length) return;
      const delta = e.key === "ArrowDown" ? 1 : -1;
      setActiveIndex((i) => (i + delta + navItems.length) % navItems.length);
    } else if (e.key === "Enter") {
      if (!panelOpen || !navItems.length) return;
      e.preventDefault();
      selectItem(navItems[activeIndex]);
    } else if (e.key === "Escape") {
      if (isInline) {
        if (query) setQuery("");
        else if (typeof onNavigate === "function") onNavigate();
        return;
      }
      setOpen(false);
      inputRef?.current?.blur();
    }
  };

  // --------------------------------------------------------------------------
  // Render helpers
  // --------------------------------------------------------------------------
  const sectionTitle = (label, action) => (
    <div className="flex items-center justify-between px-4 pt-3 pb-1.5">
      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500">{label}</span>
      {action}
    </div>
  );

  const renderIdle = () => (
    <>
      {recent.length > 0 && (
        <>
          {sectionTitle(
            "Recent searches",
            <button
              type="button"
              onMouseDown={(e) => e.preventDefault()}
              onClick={clearRecent}
              className="text-[11px] font-medium text-slate-400 hover:text-brand-primary dark:hover:text-emerald-400 cursor-pointer"
            >
              Clear
            </button>
          )}
          <ul className="pb-1">
            {recent.map((value, idx) => (
              <li
                key={value}
                id={optionId(idx)}
                role="option"
                aria-selected={activeIndex === idx}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => selectItem({ type: "recent", value })}
                onMouseMove={() => setActiveIndex(idx)}
                className={`${styles.item} flex items-center gap-3 px-3 py-2 mx-1.5 rounded-xl cursor-pointer text-[13px] text-slate-700 dark:text-zinc-200 ${
                  activeIndex === idx ? "bg-brand-primary-soft dark:bg-emerald-950/40" : ""
                }`}
              >
                <HistoryOutlined className="text-slate-400" />
                <span className="truncate">{value}</span>
              </li>
            ))}
          </ul>
        </>
      )}

      {quickLinks.length > 0 && (
        <>
          {sectionTitle("Jump to")}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-0.5 px-1.5 pb-2">
            {quickLinks.map((link, i) => {
              const idx = recent.length + i;
              const meta = MODULE_META[link.key] || {};
              return (
                <li
                  key={link.key}
                  id={optionId(idx)}
                  role="option"
                  aria-selected={activeIndex === idx}
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => selectItem({ type: "module", link })}
                  onMouseMove={() => setActiveIndex(idx)}
                  className={`${styles.item} flex items-center gap-2.5 px-2.5 py-2 rounded-xl cursor-pointer ${
                    activeIndex === idx ? "bg-brand-primary-soft dark:bg-emerald-950/40" : ""
                  }`}
                >
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[13px]"
                    style={{ backgroundColor: `${link.color}1a`, color: link.color }}
                  >
                    {meta.icon}
                  </span>
                  <span className="truncate text-[12px] font-medium text-slate-700 dark:text-zinc-200">{meta.label}</span>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </>
  );

  const renderLoading = () => (
    <div className="px-4 py-3 space-y-4 animate-pulse" aria-live="polite" aria-busy="true">
      <span className="sr-only">Searching…</span>
      {[0, 1, 2].map((i) => (
        <div key={i} className="flex items-center gap-3">
          <span className="h-8 w-8 shrink-0 rounded-lg bg-slate-100 dark:bg-zinc-800" />
          <span className="flex-1 space-y-2">
            <span className="block h-3 rounded bg-slate-100 dark:bg-zinc-800" style={{ width: `${55 - i * 8}%` }} />
            <span className="block h-2.5 rounded bg-slate-100/80 dark:bg-zinc-800/70" style={{ width: `${78 - i * 6}%` }} />
          </span>
          <span className="h-4 w-14 rounded bg-slate-100 dark:bg-zinc-800" />
        </div>
      ))}
    </div>
  );

  const renderMessage = (icon, title, body, action) => (
    <div className="flex flex-col items-center text-center px-6 py-8" aria-live="polite">
      <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 dark:bg-zinc-800 text-lg text-slate-400 dark:text-zinc-500">
        {icon}
      </span>
      <p className="text-[13px] font-semibold text-slate-800 dark:text-zinc-100">{title}</p>
      {body && <p className="mt-1 max-w-xs text-[12px] leading-relaxed text-slate-500 dark:text-zinc-400">{body}</p>}
      {action}
    </div>
  );

  const renderResults = () => (
    <div className="pb-1.5">
      {groups.map((group) => (
        <section key={group.moduleKey} aria-label={group.moduleName}>
          <div className="flex items-center justify-between gap-2 px-4 pt-3 pb-1.5">
            <span className="flex items-center gap-2 min-w-0">
              <span className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: group.color }} />
              <span className="truncate text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                {group.moduleName}
              </span>
              <span className="shrink-0 text-[10px] font-mono px-1.5 rounded-pill bg-slate-100 dark:bg-zinc-800 text-slate-500 dark:text-zinc-400">
                {group.count > group.results.length ? `${group.results.length} of ${group.count}` : group.count}
              </span>
            </span>
            {/* Only when matches are hidden: opens the module filtered to exactly these IDs */}
            {group.count > group.results.length && (
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => {
                  rememberSearch(term);
                  navigate(
                    group.matchIds?.length
                      ? `${group.route}?ids=${group.matchIds.join(",")}&q=${encodeURIComponent(term)}`
                      : group.route
                  );
                }}
                className="shrink-0 flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[11px] font-semibold text-brand-primary dark:text-emerald-400 hover:bg-brand-primary-soft dark:hover:bg-emerald-950/40 cursor-pointer"
              >
                View all {group.count} <ArrowRightOutlined className="text-[9px]" />
              </button>
            )}
          </div>
          <ul>
            {group.results.map((item, i) => {
              const idx = group.offset + i;
              return (
                <SearchResultItem
                  key={`${group.moduleKey}-${item.id}`}
                  id={optionId(idx)}
                  item={item}
                  group={group}
                  query={term}
                  active={activeIndex === idx}
                  onSelect={() => selectItem({ type: "result", item, group })}
                  onHover={() => setActiveIndex(idx)}
                />
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );

  const renderBody = () => {
    if (!term) return renderIdle();
    if (status === "short") {
      return renderMessage(
        <SearchOutlined />,
        "Keep typing…",
        `Enter at least ${MIN_QUERY_LENGTH} characters. Search by name, email, phone, ABN/ACN or reference.`
      );
    }
    if (status === "loading") return renderLoading();
    if (status === "error") {
      return renderMessage(
        <ExclamationCircleOutlined />,
        "Search is unavailable right now",
        "Check your connection and try again.",
        <Button size="small" className="mt-3" onMouseDown={(e) => e.preventDefault()} onClick={retry}>
          Retry
        </Button>
      );
    }
    if (!groups.length) {
      return renderMessage(
        <FileSearchOutlined />,
        <>No applications match &ldquo;{term}&rdquo;</>,
        "Try a reference like GST-12 or CREG-2026-…, a full email address, or the last digits of a phone number."
      );
    }
    return renderResults();
  };

  const totalModules = groups.length;
  const total = data?.total || 0;
  const loading = status === "loading";

  // --------------------------------------------------------------------------
  // Render
  // --------------------------------------------------------------------------
  return (
    <div ref={containerRef} className="relative w-full">
      <Input
        ref={inputRef}
        value={query}
        maxLength={MAX_QUERY_LENGTH}
        onChange={(e) => {
          setQuery(e.target.value);
          if (!open) setOpen(true);
        }}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
        placeholder="Search name, email, phone, ABN or reference…"
        autoComplete="off"
        spellCheck={false}
        role="combobox"
        aria-label="Search applications"
        aria-expanded={panelOpen}
        aria-controls={listboxId}
        aria-autocomplete="list"
        aria-activedescendant={panelOpen && navItems.length ? optionId(activeIndex) : undefined}
        prefix={
          loading ? (
            <LoadingOutlined className="text-brand-primary mr-1.5" />
          ) : (
            <SearchOutlined className="text-slate-400 mr-1.5" />
          )
        }
        suffix={
          query ? (
            <button
              type="button"
              aria-label="Clear search"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => {
                setQuery("");
                inputRef?.current?.focus();
              }}
              className="flex items-center text-slate-300 hover:text-slate-500 dark:text-zinc-600 dark:hover:text-zinc-400 cursor-pointer"
            >
              <CloseCircleFilled />
            </button>
          ) : shortcutLabel ? (
            <span className={`${styles.kbd} hidden md:inline-flex !h-5 !px-1.5`}>{shortcutLabel}</span>
          ) : null
        }
        className={`h-9 border-slate-200 dark:border-zinc-800 dark:bg-zinc-800/40 text-xs font-medium dark:text-zinc-200 ${
          isInline ? "rounded-xl !h-11 !text-sm" : "rounded-full"
        }`}
      />

      {panelOpen && (
        <div
          className={
            isInline
              ? "mt-3 overflow-hidden"
              : `${styles.panel} absolute left-0 top-[calc(100%+8px)] z-50 w-[min(580px,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-slate-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900`
          }
        >
          <div
            id={listboxId}
            role="listbox"
            aria-label="Search results"
            className={`${styles.scroll} overflow-y-auto ${isInline ? "max-h-[65vh]" : "max-h-[min(70vh,520px)]"}`}
          >
            {renderBody()}
          </div>

          {/* Footer: keyboard hints + result summary */}
          <div className="hidden sm:flex items-center justify-between gap-3 border-t border-slate-100 dark:border-zinc-800 bg-slate-50/70 dark:bg-zinc-900/60 px-4 py-2 text-[11px] text-slate-400 dark:text-zinc-500">
            <span className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <kbd className={styles.kbd}>↑</kbd>
                <kbd className={styles.kbd}>↓</kbd> navigate
              </span>
              <span className="flex items-center gap-1">
                <kbd className={styles.kbd}>↵</kbd> open
              </span>
              <span className="flex items-center gap-1">
                <kbd className={styles.kbd}>esc</kbd> close
              </span>
            </span>
            {status === "success" && total > 0 && (
              <span className="truncate">
                {total} result{total === 1 ? "" : "s"} across {totalModules} module{totalModules === 1 ? "" : "s"}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================================================
// Public component: desktop inline search + mobile modal + Ctrl/⌘+K shortcut
// ============================================================================
export default function GlobalSearch() {
  const desktopInputRef = useRef(null);
  const mobileInputRef = useRef(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMac = useSyncExternalStore(noopSubscribe, detectMac, () => false);

  useEffect(() => {
    const onKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        const desktopInput = desktopInputRef.current?.input;
        if (desktopInput && desktopInput.offsetParent !== null) {
          desktopInputRef.current.focus();
        } else {
          setMobileOpen(true);
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      {/* Desktop / tablet */}
      <div className="relative w-full max-w-xs md:max-w-md hidden sm:block">
        <SearchBox variant="dropdown" inputRef={desktopInputRef} shortcutLabel={isMac ? "⌘K" : "Ctrl K"} />
      </div>

      {/* Mobile trigger */}
      <button
        type="button"
        onClick={() => setMobileOpen(true)}
        className="sm:hidden p-2 text-slate-500 hover:text-slate-800 dark:text-zinc-400 dark:hover:text-white rounded-xl hover:bg-slate-100 dark:hover:bg-zinc-800 transition-all cursor-pointer"
        aria-label="Search applications"
      >
        <SearchOutlined className="text-base" />
      </button>

      <Modal
        open={mobileOpen}
        onCancel={() => setMobileOpen(false)}
        afterOpenChange={(visible) => visible && mobileInputRef.current?.focus()}
        footer={null}
        closable={false}
        destroyOnHidden
        width="calc(100vw - 24px)"
        style={{ top: 12, maxWidth: 640 }}
        rootClassName={styles.mobileModal}
      >
        <SearchBox variant="inline" inputRef={mobileInputRef} onNavigate={() => setMobileOpen(false)} />
      </Modal>
    </>
  );
}
