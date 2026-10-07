"use client";

/**
 * ============================================================================
 * Notification Center (`components/admin/NotificationCenter`)
 * ============================================================================
 * Header bell for staff notifications:
 *   - New application submissions (all client forms)
 *   - Status changes / decisions made by other staff
 *   - Website contact enquiries
 *
 * Behaviour:
 *   - Live: listens to `GET /notifications/stream` (Server-Sent Events); each new
 *     notification bumps the badge, shows a toast and is re-broadcast to open pages
 *     (see liveEvents.js) so module tables refresh without a page reload.
 *   - Fallback: polls `GET /notifications/unread-count` every 30s only while the
 *     live stream is down (plus on tab focus and right after a reconnect).
 *   - Clicking the bell opens a panel (All / Unread, grouped Today / Yesterday /
 *     Earlier) with "Mark all as read", "Clear all" and paging.
 *   - Clicking a notification opens the details drawer (marks it read).
 *   - Removing a notification only hides it from the current user's list (with Undo).
 */

import React, { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Popover, Badge, Segmented, Button, Tag, Popconfirm, Tooltip } from "antd";
import { BellOutlined, CheckOutlined, ArrowRightOutlined, ReloadOutlined, DeleteOutlined, ClearOutlined } from "@ant-design/icons";
import { HTTP, antdMsg, antdNotify, API_BASE_URL, GetToken } from "@/services";
import { statusTagColor } from "@/components/admin/GlobalSearch/searchConfig";
import NotificationDetails from "./NotificationDetails";
import { emitLiveNotification } from "./liveEvents";
import styles from "./NotificationCenter.module.css";
import { POLL_INTERVAL_MS, PAGE_SIZE, notificationVisual, relativeTime, groupByDay } from "./notificationConfig";

export default function NotificationCenter() {
  const router = useRouter();

  // Badge + polling
  const [unreadCount, setUnreadCount] = useState(0);
  const lastLatestIdRef = useRef(null);
  const streamConnectedRef = useRef(false); // interval polling pauses while the live stream is up

  // Panel
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState("all");
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [listState, setListState] = useState("idle"); // idle | loading | loadingMore | error | ready
  const [now, setNow] = useState(0); // timestamp of last fetch → relative times stay render-pure

  // Details drawer
  const [detailId, setDetailId] = useState(null);
  const [detail, setDetail] = useState(null);
  const [detailState, setDetailState] = useState("idle"); // loading | error | ready

  // --------------------------------------------------------------------------
  // Data loading
  // --------------------------------------------------------------------------
  const loadList = useCallback(async (nextFilter, before) => {
    setListState(before ? "loadingMore" : "loading");
    const res = await HTTP(
      "GET",
      "/notifications",
      { filter: nextFilter, limit: PAGE_SIZE, ...(before ? { before } : {}) },
      false,
      true
    );
    if (!res?.success) {
      setListState("error");
      return;
    }
    setNow(Date.now());
    setItems((prev) => (before ? [...prev, ...res.data.items] : res.data.items));
    setHasMore(res.data.hasMore);
    setUnreadCount(res.data.unreadCount);
    setListState("ready");
  }, []);

  const openDetails = useCallback(async (id) => {
    setDetailId(id);
    setDetail(null);
    setDetailState("loading");
    setOpen(false);
    const res = await HTTP("GET", `/notifications/${id}`, undefined, false, true);
    if (!res?.success) {
      setDetailState("error");
      return;
    }
    setNow(Date.now());
    setDetail(res.data);
    setDetailState("ready");
    setUnreadCount(res.data.unreadCount);
    setItems((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)));
  }, []);

  const showArrivalToast = useCallback(
    (latest) => {
      const visual = notificationVisual(latest);
      antdNotify.open({
        key: `notification-${latest.id}`,
        title: latest.title,
        description: latest.message,
        placement: "bottomRight",
        duration: 6,
        icon: <span style={{ color: visual.color }}>{visual.icon}</span>,
        className: styles.toast,
        onClick: () => openDetails(latest.id),
      });
    },
    [openDetails]
  );

  /** A notification arrived (live stream or poll): toast it and let open pages refresh. */
  const announceArrival = useCallback(
    (notification) => {
      showArrivalToast(notification);
      emitLiveNotification(notification);
    },
    [showArrivalToast]
  );

  const pollUnread = useCallback(async () => {
    const res = await HTTP("GET", "/notifications/unread-count", undefined, false, true);
    if (!res?.success) return;
    const { unreadCount: count, latest } = res.data;
    setUnreadCount(count);

    const latestId = latest?.id || 0;
    // Fallback path (stream down): announce only what arrived after the first poll of this session
    if (lastLatestIdRef.current !== null && latestId > lastLatestIdRef.current) {
      announceArrival(latest);
    }
    lastLatestIdRef.current = Math.max(lastLatestIdRef.current || 0, latestId);
  }, [announceArrival]);

  /** Real-time push from the SSE stream. */
  const handleLiveNotification = useCallback(
    (notification) => {
      if (!notification?.id) return;
      // Already seen (e.g. a poll got there first)
      if (lastLatestIdRef.current !== null && notification.id <= lastLatestIdRef.current) return;
      lastLatestIdRef.current = Math.max(lastLatestIdRef.current || 0, notification.id);

      setNow(Date.now());
      setUnreadCount((count) => count + 1);
      setItems((prev) => (prev.some((n) => n.id === notification.id) ? prev : [notification, ...prev]));
      announceArrival(notification);
    },
    [announceArrival]
  );

  // Live stream (Server-Sent Events over fetch so the Bearer token can be sent).
  // Reconnects with backoff; polling below remains the fallback.
  useEffect(() => {
    let cancelled = false;
    let controller = null;
    let retryTimer = null;
    let retryMs = 2000;

    const dispatchBlock = (block) => {
      const event = (block.match(/^event: ?(.*)$/m) || [])[1];
      const data = block
        .split("\n")
        .filter((line) => line.startsWith("data:"))
        .map((line) => line.replace(/^data: ?/, ""))
        .join("\n");
      if (event !== "notification" || !data) return;
      try {
        handleLiveNotification(JSON.parse(data));
      } catch {
        // ignore malformed event
      }
    };

    const connect = async () => {
      if (cancelled) return;
      controller = new AbortController();
      let stopRetrying = false;
      try {
        const token = GetToken();
        const response = await fetch(`${API_BASE_URL}/notifications/stream`, {
          headers: { Accept: "text/event-stream", ...(token ? { Authorization: `Bearer ${token}` } : {}) },
          credentials: "include",
          cache: "no-store",
          signal: controller.signal,
        });
        if (response.status === 401 || response.status === 403) stopRetrying = true;
        if (!response.ok || !response.body) throw new Error(`Stream unavailable (${response.status})`);

        retryMs = 2000;
        streamConnectedRef.current = true;
        // Catch up on anything that arrived while the stream was down
        pollUnread();
        const reader = response.body.pipeThrough(new TextDecoderStream()).getReader();
        let buffer = "";
        while (!cancelled) {
          const { value, done } = await reader.read();
          if (done) break;
          buffer += value.replace(/\r\n/g, "\n");
          let boundary;
          while ((boundary = buffer.indexOf("\n\n")) >= 0) {
            dispatchBlock(buffer.slice(0, boundary));
            buffer = buffer.slice(boundary + 2);
          }
        }
      } catch (error) {
        streamConnectedRef.current = false;
        if (cancelled || error?.name === "AbortError") return;
      }
      streamConnectedRef.current = false;
      if (!cancelled && !stopRetrying) {
        retryTimer = setTimeout(connect, retryMs);
        retryMs = Math.min(retryMs * 2, 30000);
      }
    };

    const start = setTimeout(connect, 0);
    return () => {
      cancelled = true;
      streamConnectedRef.current = false;
      clearTimeout(start);
      clearTimeout(retryTimer);
      controller?.abort();
    };
  }, [handleLiveNotification, pollUnread]);

  // Fallback polling: only while the live stream is down and the tab is visible.
  // Always refresh once on load and when the user returns to the tab.
  useEffect(() => {
    const firstPoll = setTimeout(pollUnread, 0);
    const timer = setInterval(() => {
      if (!streamConnectedRef.current && document.visibilityState === "visible") pollUnread();
    }, POLL_INTERVAL_MS);
    const onVisible = () => {
      if (document.visibilityState === "visible") pollUnread();
    };
    document.addEventListener("visibilitychange", onVisible);
    window.addEventListener("focus", onVisible);
    return () => {
      clearTimeout(firstPoll);
      clearInterval(timer);
      document.removeEventListener("visibilitychange", onVisible);
      window.removeEventListener("focus", onVisible);
    };
  }, [pollUnread]);

  // --------------------------------------------------------------------------
  // Actions
  // --------------------------------------------------------------------------
  const handleOpenChange = (next) => {
    setOpen(next);
    if (next) loadList(filter);
  };

  const handleFilterChange = (value) => {
    setFilter(value);
    loadList(value);
  };

  const markAllRead = async () => {
    const res = await HTTP("POST", "/notifications/read-all", {}, false, true);
    if (!res?.success) return;
    setUnreadCount(res.data.unreadCount);
    setItems((prev) => (filter === "unread" ? [] : prev.map((n) => ({ ...n, read: true }))));
  };

  /** Undo a removal: the notification comes back (as read) in its original position. */
  const restoreNotification = async (notification) => {
    const res = await HTTP("POST", `/notifications/${notification.id}/restore`, {}, false, true);
    if (!res?.success) {
      antdMsg.error("Couldn't restore the notification.");
      return;
    }
    setUnreadCount(res.data.unreadCount);
    if (filter === "all") {
      setItems((prev) =>
        prev.some((n) => n.id === notification.id)
          ? prev
          : [...prev, { ...notification, read: true }].sort((a, b) => b.id - a.id)
      );
    }
  };

  /** Remove one notification from MY list (colleagues keep theirs). Optimistic, with Undo. */
  const removeNotification = async (notification) => {
    setItems((prev) => prev.filter((n) => n.id !== notification.id));
    if (!notification.read) setUnreadCount((count) => Math.max(0, count - 1));
    if (detailId === notification.id) setDetailId(null);

    const res = await HTTP("DELETE", `/notifications/${notification.id}`, undefined, false, true);
    if (!res?.success) {
      antdMsg.error("Couldn't remove the notification.");
      loadList(filter);
      return;
    }
    setUnreadCount(res.data.unreadCount);

    let hide = null;
    hide = antdMsg.success(
      <span>
        Notification removed
        <button
          type="button"
          className="ml-3 cursor-pointer font-semibold text-brand-primary hover:underline dark:text-emerald-400"
          onClick={() => {
            hide?.();
            restoreNotification(notification);
          }}
        >
          Undo
        </button>
      </span>,
      5
    );
  };

  /** "Clear all" (or "Clear unread" on the Unread tab) for MY list. */
  const clearAll = async () => {
    const res = await HTTP("DELETE", "/notifications", { filter }, false, true);
    if (!res?.success) {
      antdMsg.error("Couldn't clear notifications.");
      return;
    }
    setItems([]);
    setHasMore(false);
    setUnreadCount(res.data.unreadCount);
    antdMsg.success(
      res.data.removed === 1 ? "1 notification cleared" : `${res.data.removed} notifications cleared`
    );
  };

  const navigateTo = (url) => {
    setDetailId(null);
    setOpen(false);
    router.push(url);
  };

  // --------------------------------------------------------------------------
  // Render helpers
  // --------------------------------------------------------------------------
  const renderItem = (n) => {
    const visual = notificationVisual(n);
    return (
      <li key={n.id} className={`${styles.row} group relative`}>
        <button
          type="button"
          onClick={() => openDetails(n.id)}
          className={`${styles.item} ${n.read ? "" : styles.unread} flex w-full items-start gap-3 rounded-xl py-2.5 pl-3 pr-9 text-left cursor-pointer`}
        >
          <span
            className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-[15px]"
            style={{ backgroundColor: `${visual.color}1a`, color: visual.color }}
          >
            {visual.icon}
          </span>
          <span className="min-w-0 flex-1">
            <span
              className={`block truncate text-[13px] ${
                n.read ? "font-medium text-slate-700 dark:text-zinc-300" : "font-semibold text-slate-900 dark:text-zinc-50"
              }`}
            >
              {n.title}
            </span>
            {n.type === "status_change" && n.meta?.toStatus ? (
              <span className="mt-1 flex flex-wrap items-center gap-1.5">
                <Tag color={statusTagColor(n.meta.fromStatus)} className="!m-0 !text-[10px] !leading-4 !px-1.5">
                  {n.meta.fromStatus || "—"}
                </Tag>
                <ArrowRightOutlined className="text-[9px] text-slate-400" />
                <Tag color={statusTagColor(n.meta.toStatus)} className="!m-0 !text-[10px] !leading-4 !px-1.5">
                  {n.meta.toStatus}
                </Tag>
                {n.actorName && <span className="text-[11px] text-slate-500 dark:text-zinc-400">by {n.actorName}</span>}
              </span>
            ) : (
              <span className={`${styles.clamp2} mt-0.5 text-[12px] leading-snug text-slate-500 dark:text-zinc-400`}>
                {n.message}
              </span>
            )}
            <span className="mt-1 block text-[11px] text-slate-400 dark:text-zinc-500">
              {n.moduleName ? `${n.moduleName} · ` : ""}
              {relativeTime(n.createdAt, now)}
            </span>
          </span>
          {!n.read && (
            <span
              className={`${styles.dot} absolute right-3.5 top-4 transition-opacity group-hover:opacity-0 group-focus-within:opacity-0`}
              aria-label="Unread"
            />
          )}
        </button>
        <Tooltip title="Remove" placement="left" mouseEnterDelay={0.4}>
          <button
            type="button"
            onClick={() => removeNotification(n)}
            aria-label={`Remove notification: ${n.title}`}
            className="absolute right-1.5 top-2 flex h-7 w-7 items-center justify-center rounded-lg text-[13px] text-slate-400 opacity-0 transition-all hover:bg-red-50 hover:text-red-600 focus-visible:opacity-100 group-hover:opacity-100 dark:text-zinc-500 dark:hover:bg-red-950/40 dark:hover:text-red-400 cursor-pointer"
          >
            <DeleteOutlined />
          </button>
        </Tooltip>
      </li>
    );
  };

  const renderList = () => {
    if (listState === "loading") {
      return (
        <div className="space-y-3 px-4 py-3 animate-pulse" aria-busy="true">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="h-9 w-9 shrink-0 rounded-xl bg-slate-100 dark:bg-zinc-800" />
              <span className="flex-1 space-y-2 pt-1">
                <span className="block h-3 w-3/4 rounded bg-slate-100 dark:bg-zinc-800" />
                <span className="block h-2.5 w-1/2 rounded bg-slate-100 dark:bg-zinc-800" />
              </span>
            </div>
          ))}
        </div>
      );
    }
    if (listState === "error") {
      return (
        <div className="flex flex-col items-center px-6 py-10 text-center">
          <p className="m-0 text-[13px] font-semibold text-slate-800 dark:text-zinc-100">Couldn&apos;t load notifications</p>
          <Button size="small" icon={<ReloadOutlined />} className="mt-3" onClick={() => loadList(filter)}>
            Retry
          </Button>
        </div>
      );
    }
    if (!items.length) {
      return (
        <div className="flex flex-col items-center px-6 py-10 text-center">
          <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-primary-soft text-xl text-brand-primary dark:bg-emerald-950/50 dark:text-emerald-400">
            <CheckOutlined />
          </span>
          <p className="m-0 text-[14px] font-semibold text-slate-800 dark:text-zinc-100">You&apos;re all caught up</p>
          <p className="m-0 mt-1 max-w-[260px] text-[12px] text-slate-500 dark:text-zinc-400">
            {filter === "unread"
              ? "No unread notifications. New submissions and status updates will appear here."
              : "New submissions, status updates and website enquiries will appear here."}
          </p>
        </div>
      );
    }

    return (
      <div className="pb-2">
        {groupByDay(items, now).map((group) => (
          <section key={group.key}>
            <h5 className="m-0 px-4 pt-3 pb-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
              {group.label}
            </h5>
            <ul className="m-0 list-none space-y-0.5 px-1.5 p-0">{group.items.map(renderItem)}</ul>
          </section>
        ))}
        {hasMore && (
          <div className="px-4 pt-2">
            <Button
              block
              size="small"
              loading={listState === "loadingMore"}
              onClick={() => loadList(filter, items[items.length - 1]?.id)}
            >
              Load older notifications
            </Button>
          </div>
        )}
      </div>
    );
  };

  const panel = (
    <div className="w-[min(400px,calc(100vw-1.5rem))]">
      <div className="flex items-center justify-between gap-3 px-4 pt-3.5 pb-2.5">
        <div className="flex items-center gap-2">
          <h4 className="m-0 text-[15px] font-bold text-slate-900 dark:text-zinc-50">Notifications</h4>
          {unreadCount > 0 && (
            <span className="rounded-pill bg-brand-primary px-1.5 text-[11px] font-semibold text-white">{unreadCount}</span>
          )}
        </div>
        <div className="flex items-center gap-0.5">
          <button
            type="button"
            disabled={unreadCount === 0}
            onClick={markAllRead}
            className="flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[12px] font-semibold text-brand-primary hover:bg-brand-primary-soft disabled:cursor-not-allowed disabled:text-slate-300 disabled:hover:bg-transparent dark:text-emerald-400 dark:disabled:text-zinc-600 cursor-pointer"
          >
            <CheckOutlined className="text-[11px]" /> Mark all as read
          </button>
          <Popconfirm
            title={filter === "unread" ? "Clear all unread notifications?" : "Clear all notifications?"}
            description="They're removed from your list only. Colleagues keep theirs."
            okText="Clear"
            okButtonProps={{ danger: true }}
            cancelText="Cancel"
            placement="bottomRight"
            onConfirm={clearAll}
            disabled={!items.length}
          >
            <Tooltip title={filter === "unread" ? "Clear unread" : "Clear all"} mouseEnterDelay={0.4}>
              <button
                type="button"
                disabled={!items.length}
                aria-label={filter === "unread" ? "Clear unread notifications" : "Clear all notifications"}
                className="flex h-6 w-6 items-center justify-center rounded-md text-[12px] text-slate-400 hover:bg-red-50 hover:text-red-600 disabled:cursor-not-allowed disabled:text-slate-300 disabled:hover:bg-transparent dark:text-zinc-500 dark:hover:bg-red-950/40 dark:hover:text-red-400 dark:disabled:text-zinc-700 cursor-pointer"
              >
                <ClearOutlined />
              </button>
            </Tooltip>
          </Popconfirm>
        </div>
      </div>
      <div className="px-4 pb-2">
        <Segmented
          block
          size="small"
          className={styles.segmented}
          value={filter}
          onChange={handleFilterChange}
          options={[
            { label: "All", value: "all" },
            { label: unreadCount > 0 ? `Unread (${unreadCount})` : "Unread", value: "unread" },
          ]}
        />
      </div>
      <div className={`${styles.scroll} max-h-[min(65vh,480px)] overflow-y-auto border-t border-slate-100 dark:border-zinc-800`}>
        {renderList()}
      </div>
    </div>
  );

  return (
    <>
      <Popover
        open={open}
        onOpenChange={handleOpenChange}
        trigger="click"
        placement="bottomRight"
        arrow={false}
        content={panel}
        rootClassName={styles.popover}
      >
        <button
          type="button"
          className="p-2 rounded-xl text-slate-500 hover:text-slate-800 dark:text-zinc-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800 relative transition-all cursor-pointer"
          aria-label={unreadCount ? `Notifications, ${unreadCount} unread` : "Notifications"}
          aria-haspopup="dialog"
          aria-expanded={open}
        >
          <Badge count={unreadCount} overflowCount={99} size="small" color="#008043" offset={[-2, 2]}>
            <BellOutlined className={`text-base text-slate-600 dark:text-zinc-400 ${unreadCount ? styles.ring : ""}`} />
          </Badge>
        </button>
      </Popover>

      <NotificationDetails
        open={detailId !== null}
        loading={detailState === "loading"}
        error={detailState === "error"}
        detail={detail}
        now={now}
        onClose={() => setDetailId(null)}
        onNavigate={navigateTo}
        onRetry={() => detailId !== null && openDetails(detailId)}
        onRemove={removeNotification}
      />
    </>
  );
}
