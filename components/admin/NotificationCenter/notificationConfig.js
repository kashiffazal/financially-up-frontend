import React from "react";
import {
  FileAddOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  PauseCircleOutlined,
  SyncOutlined,
  MailOutlined,
  NotificationOutlined,
  BellOutlined,
} from "@ant-design/icons";
import { MODULE_META, statusTagColor } from "@/components/admin/GlobalSearch/searchConfig";

/**
 * Notification Center — presentation helpers.
 * Module names/colours come from the API (backend search registry).
 */

export const POLL_INTERVAL_MS = 30000;
export const PAGE_SIZE = 20;

export const TYPE_LABELS = {
  submission: "New submission",
  status_change: "Status update",
  contact_enquiry: "Website enquiry",
  newsletter_subscriber: "Newsletter sign-up",
};

/** Icon for a status change, based on the new status. */
const statusIcon = (status) => {
  const tone = statusTagColor(status);
  if (tone === "success") return <CheckCircleOutlined />;
  if (tone === "error") return <CloseCircleOutlined />;
  if (tone === "purple") return <PauseCircleOutlined />;
  return <SyncOutlined />;
};

const TONE_COLORS = {
  success: "#16a34a",
  error: "#dc2626",
  orange: "#ea580c",
  purple: "#7c3aed",
  warning: "#d97706",
  processing: "#2563eb",
  default: "#64748b",
};

/** { icon, color } for a notification's leading chip. */
export const notificationVisual = (n) => {
  if (n.type === "contact_enquiry") return { icon: <MailOutlined />, color: n.color || "#0ea5e9" };
  if (n.type === "newsletter_subscriber") return { icon: <NotificationOutlined />, color: n.color || "#8b5cf6" };
  if (n.type === "status_change") {
    return { icon: statusIcon(n.meta?.toStatus), color: TONE_COLORS[statusTagColor(n.meta?.toStatus)] || n.color };
  }
  if (n.type === "submission") {
    return { icon: MODULE_META[n.moduleKey]?.icon || <FileAddOutlined />, color: n.color || "#008043" };
  }
  return { icon: <BellOutlined />, color: "#64748b" };
};

// ============================
// Time helpers (all take an explicit `now` so render stays pure)
// ============================

const rtf = typeof Intl !== "undefined" ? new Intl.RelativeTimeFormat("en-AU", { numeric: "auto" }) : null;

export const relativeTime = (value, now) => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  if (!now || !rtf) return formatDateTime(value);
  const seconds = Math.round((date.getTime() - now) / 1000);
  const abs = Math.abs(seconds);
  if (abs < 45) return "just now";
  if (abs < 3600) return rtf.format(Math.round(seconds / 60), "minute");
  if (abs < 86400) return rtf.format(Math.round(seconds / 3600), "hour");
  if (abs < 7 * 86400) return rtf.format(Math.round(seconds / 86400), "day");
  return date.toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric" });
};

export const formatDateTime = (value) => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleString("en-AU", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
};

const startOfDay = (ts) => {
  const d = new Date(ts);
  d.setHours(0, 0, 0, 0);
  return d.getTime();
};

/** Split notifications into Today / Yesterday / Earlier sections. */
export const groupByDay = (items, now) => {
  const today = startOfDay(now || 0);
  const yesterday = today - 86400000;
  const groups = [
    { key: "today", label: "Today", items: [] },
    { key: "yesterday", label: "Yesterday", items: [] },
    { key: "earlier", label: "Earlier", items: [] },
  ];
  items.forEach((n) => {
    const t = new Date(n.createdAt).getTime();
    if (now && t >= today) groups[0].items.push(n);
    else if (now && t >= yesterday) groups[1].items.push(n);
    else groups[2].items.push(n);
  });
  return groups.filter((g) => g.items.length);
};
