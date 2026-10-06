import React from "react";
import {
  BankOutlined,
  UserOutlined,
  TeamOutlined,
  FormOutlined,
  FileProtectOutlined,
  SafetyCertificateOutlined,
  ApartmentOutlined,
  AuditOutlined,
  ShopOutlined,
  IdcardOutlined,
} from "@ant-design/icons";

/**
 * Global Search — module presentation config.
 * Keys match `moduleKey` returned by `GET /api/search` (backend SEARCH_REGISTRY).
 */
export const MODULE_META = {
  "new-company": { icon: <BankOutlined />, label: "Company Registration" },
  "new-individual": { icon: <UserOutlined />, label: "Individual Engagement" },
  "legacy-company": { icon: <BankOutlined />, label: "Company Registration (Legacy)" },
  "legacy-individual": { icon: <UserOutlined />, label: "Individual Engagement (Legacy)" },
  "entity-engagements": { icon: <TeamOutlined />, label: "Entity Engagements" },
  "changes-company": { icon: <FormOutlined />, label: "Changes to Company Details" },
  gst: { icon: <FileProtectOutlined />, label: "GST Registrations" },
  medicare: { icon: <SafetyCertificateOutlined />, label: "Medicare Claims" },
  trust: { icon: <ApartmentOutlined />, label: "Trust Registrations" },
  smsf: { icon: <AuditOutlined />, label: "SMSF Registrations" },
  "business-names": { icon: <ShopOutlined />, label: "Business Name Registrations" },
  "apply-tfn": { icon: <IdcardOutlined />, label: "Apply TFN / ABNs" },
};

/**
 * "Jump to" shortcuts shown when the search box is focused but empty.
 * `permission` mirrors the Sidebar navigation gating.
 */
export const QUICK_LINKS = [
  { key: "new-company", href: "/admin/company-registration-new", color: "#008043", permission: "company.registration.view" },
  { key: "new-individual", href: "/admin/individual-engagement-new", color: "#10b981", permission: "individual.engagement.view" },
  { key: "gst", href: "/admin/gst-registrations", color: "#f59e0b", permission: "gst.registration.view" },
  { key: "medicare", href: "/admin/medicare", color: "#ef4444", permission: "gst.registration.view" },
  { key: "trust", href: "/admin/trust-registrations", color: "#06b6d4", permission: "gst.registration.view" },
  { key: "smsf", href: "/admin/smsf-registrations", color: "#8b5cf6", permission: "gst.registration.view" },
  { key: "business-names", href: "/admin/business-name-registrations", color: "#ec4899", permission: "gst.registration.view" },
  { key: "apply-tfn", href: "/admin/apply-tfn-abns", color: "#6366f1", permission: "gst.registration.view" },
  { key: "entity-engagements", href: "/admin/entity-engagements", color: "#3b82f6", permission: "individual.engagement.view" },
  { key: "changes-company", href: "/admin/changes-to-company-details", color: "#14b8a6", permission: "company.registration.view" },
];

export const MIN_QUERY_LENGTH = 2;
export const MAX_QUERY_LENGTH = 100;
export const DEBOUNCE_MS = 250;
export const RESULTS_PER_MODULE = 5;
export const MAX_RECENT_SEARCHES = 5;
export const RECENT_SEARCHES_KEY = "fu_recent_searches";

/** Map any module's status wording onto an antd Tag colour. */
export const statusTagColor = (status) => {
  const s = String(status || "").toLowerCase();
  if (!s) return "default";
  if (s.includes("draft")) return "default";
  if (s.includes("disapprove") || s.includes("decline") || s.includes("reject") || s.includes("escalate")) return "error";
  if (s.includes("condition")) return "orange";
  if (s.includes("approve") || s.includes("accept") || s.includes("complete") || s.includes("lodged")) return "success";
  if (s.includes("hold")) return "purple";
  if (s.includes("pending") || s.includes("information") || s.includes("submitted")) return "warning";
  return "processing";
};

/** "7 Oct 2026" — matches the dashboard's en-AU date style. */
export const formatDate = (value) => {
  if (!value) return "";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric" });
};

// ============================
// Recent searches (per-browser convenience; never required)
// ============================

export const readRecentSearches = () => {
  if (typeof window === "undefined") return [];
  try {
    const parsed = JSON.parse(window.localStorage.getItem(RECENT_SEARCHES_KEY) || "[]");
    return Array.isArray(parsed) ? parsed.filter((v) => typeof v === "string").slice(0, MAX_RECENT_SEARCHES) : [];
  } catch {
    return [];
  }
};

export const writeRecentSearches = (list) => {
  try {
    window.localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(list.slice(0, MAX_RECENT_SEARCHES)));
  } catch {
    // Storage unavailable (private mode / blocked) — recent searches are optional.
  }
};
