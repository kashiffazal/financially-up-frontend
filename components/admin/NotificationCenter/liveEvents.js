"use client";

import { useEffect, useRef } from "react";

/**
 * Live notification events (admin portal).
 * The header NotificationCenter receives notifications in real time (SSE stream,
 * with polling as a fallback) and re-broadcasts each one as a window event so any
 * page can react — e.g. a module log refetches when a new submission for its
 * module arrives, without a page refresh.
 */

export const LIVE_NOTIFICATION_EVENT = "fu:live-notification";

/** Broadcast a notification object to every listening page. */
export const emitLiveNotification = (notification) => {
  if (typeof window === "undefined" || !notification) return;
  window.dispatchEvent(new CustomEvent(LIVE_NOTIFICATION_EVENT, { detail: notification }));
};

/**
 * Subscribe to live notifications.
 * @param {(notification: object) => void} handler - latest handler is always used
 */
export function useLiveNotifications(handler) {
  const handlerRef = useRef(handler);

  useEffect(() => {
    handlerRef.current = handler;
  }, [handler]);

  useEffect(() => {
    const listener = (event) => handlerRef.current?.(event.detail);
    window.addEventListener(LIVE_NOTIFICATION_EVENT, listener);
    return () => window.removeEventListener(LIVE_NOTIFICATION_EVENT, listener);
  }, []);
}

/** Module key a log endpoint belongs to (matches the backend search registry keys). */
export const ENDPOINT_MODULE_KEYS = {
  "/new-company-registrations": "new-company",
  "/new-individual-engagements": "new-individual",
  "/company-registrations": "legacy-company",
  "/individual-engagement": "legacy-individual",
  "/entity-engagements": "entity-engagements",
  "/changes-to-company-details": "changes-company",
  "/gst-registrations": "gst",
  "/medicare": "medicare",
  "/trust-registrations": "trust",
  "/smsf-registrations": "smsf",
  "/business-name-registrations": "business-names",
  "/apply-tfn-abns": "apply-tfn",
  "/contact-enquiries": "enquiries",
  "/newsletter-subscribers": "newsletter",
};

/** How long a newly arrived row stays highlighted. */
export const FRESH_ROW_MS = 12000;

/**
 * Insert or replace ONE record in a log's `{ All: [...], <status>: [...] }` map
 * (used by live updates instead of reloading the whole list).
 * - "All" and the record's status tab: replaced in place, or prepended if new
 * - every other status tab: the record is removed (its status changed)
 */
export const upsertIntoStatusMap = (statusMap, record, defaultStatus) => {
  const key = String(record.key);
  const status = record.status || defaultStatus;
  const next = {};
  Object.entries(statusMap).forEach(([bucket, rows]) => {
    if (bucket === "All" || bucket === status) {
      const index = rows.findIndex((r) => String(r.key) === key);
      next[bucket] = index >= 0 ? rows.map((r, i) => (i === index ? record : r)) : [record, ...rows];
    } else {
      next[bucket] = rows.filter((r) => String(r.key) !== key);
    }
  });
  if (!next[status]) next[status] = [record];
  return next;
};
