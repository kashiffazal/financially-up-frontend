"use client";

import React from "react";
import { Tag, Button, Dropdown, Space, Tooltip } from "antd";
import {
  FilePdfOutlined,
  FileImageOutlined,
  FileTextOutlined,
  ExportOutlined,
  DownOutlined,
  CopyOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { getFileUrl, antdMsg } from "@/services";
import styles from "./ViewDetailsKit.module.css";

/**
 * ============================================================================
 * View Details Kit (`components/admin/ViewDetailsKit`)
 * ============================================================================
 * Shared design of the application "View Details" modals (first built for
 * Individual Engagement): gradient header with avatar, copyable reference and
 * status tags; quick-fact cards; tabs of titled section cards with a label/value
 * grid; file tiles; a footer with the PDF split-button.
 *
 *   <Modal rootClassName={styles.modal} title={<DetailsHeader ... />} footer={...}>
 *     <div className={`${styles.body} modal-flush`}> ... <Section .../> ... </div>
 *   </Modal>
 */

export { styles };

// ----------------------------------------------------------------------------
// VALUE HELPERS
// ----------------------------------------------------------------------------
export const isEmpty = (v) =>
  v === null ||
  v === undefined ||
  v === "" ||
  v === false ||
  (Array.isArray(v) && v.length === 0);

export const parseJson = (val) => {
  if (!val) return null;
  if (typeof val === "object") return val;
  if (typeof val !== "string" || !/^[[{]/.test(val.trim())) return null;
  try {
    return JSON.parse(val);
  } catch {
    return null;
  }
};

export const formatDate = (val, withTime = false) => {
  if (!val) return null;
  const d = new Date(val);
  if (Number.isNaN(d.getTime())) return String(val);
  return withTime
    ? d.toLocaleString("en-AU", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
      })
    : d.toLocaleDateString("en-AU", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
};

export const yesNo = (val) => {
  if (val === null || val === undefined || val === "") return null;
  if (val === true || val === 1 || val === "1") return "Yes";
  if (val === false || val === 0 || val === "0") return "No";
  return String(val);
};

export const toList = (val) => {
  const parsed = Array.isArray(val) ? val : parseJson(val);
  if (!Array.isArray(parsed)) return [];
  return parsed
    .filter((v) => !isEmpty(v))
    .map((v) =>
      typeof v === "object"
        ? Object.values(v).filter(Boolean).join(" ")
        : String(v),
    );
};

export const tagList = (val) => {
  const items = toList(val);
  if (!items.length) return null;
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((v, i) => (
        <Tag
          key={i}
          className="!m-0 !rounded-md !border-slate-200 !bg-slate-50 dark:!border-zinc-700 dark:!bg-zinc-800"
        >
          {v}
        </Tag>
      ))}
    </div>
  );
};

export const textValue = (val) => {
  const parsed = parseJson(val);
  if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
    return (
      Object.values(parsed)
        .filter((v) => !isEmpty(v))
        .join(", ") || null
    );
  }
  return isEmpty(val) ? null : String(val);
};

export const maskAccount = (val) => {
  if (isEmpty(val)) return null;
  const s = String(val).replace(/\s/g, "");
  return s.length > 3 ? `${"•".repeat(s.length - 3)}${s.slice(-3)}` : s;
};

export const riskColor = (risk) => {
  const r = String(risk || "").toLowerCase();
  if (r.includes("high")) return "error";
  if (r.includes("medium")) return "warning";
  return "success";
};

export const initialsOf = (name, fallback = "?") =>
  String(name || "")
    .split(/\s+/)
    .filter((p) => /^[a-z]/i.test(p))
    .slice(0, 2)
    .map((p) => p[0].toUpperCase())
    .join("") || fallback;

export const fileIcon = (path) => {
  const p = String(path || "").toLowerCase();
  if (p.endsWith(".pdf")) return <FilePdfOutlined className="text-red-500" />;
  if (/\.(png|jpe?g|gif|webp|heic)$/.test(p))
    return <FileImageOutlined className="text-sky-500" />;
  return <FileTextOutlined className="text-slate-500" />;
};

// ----------------------------------------------------------------------------
// PRESENTATIONAL BUILDING BLOCKS
// ----------------------------------------------------------------------------

/** Titled card with a responsive label/value grid. Hidden when nothing to show. */
export function Section({ icon, title, fields = [], children }) {
  const visible = fields.filter(([, value]) => !isEmpty(value));
  if (!visible.length && !children) return null;

  return (
    <section className={`${styles.section} overflow-hidden`}>
      <header
        className={`${styles.sectionHeader} flex items-center gap-2 px-4 py-2.5`}
      >
        <span className="text-brand-primary dark:text-emerald-400">{icon}</span>
        <h4 className="m-0 text-[13px] font-semibold text-slate-800 dark:text-zinc-100">
          {title}
        </h4>
      </header>
      {visible.length > 0 && (
        <dl className="m-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 p-4">
          {visible.map(([label, value, full]) => (
            <div
              key={label}
              className={`min-w-0 ${full ? "sm:col-span-2 lg:col-span-3" : ""}`}
            >
              <dt className={styles.fieldLabel}>{label}</dt>
              <dd className="m-0 mt-1 text-[13px] leading-relaxed text-slate-800 dark:text-zinc-100 break-words">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      )}
      {children && <div className="p-4 pt-3">{children}</div>}
    </section>
  );
}

/** Quick-glance fact card under the header. */
export function Fact({ icon, label, value, href }) {
  if (isEmpty(value)) return null;
  const content = (
    <>
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-primary-soft text-brand-primary dark:bg-emerald-950/50 dark:text-emerald-400">
        {icon}
      </span>
      <span className="min-w-0">
        <span className={`${styles.fieldLabel} block`}>{label}</span>
        <span className="block truncate text-[13px] font-medium text-slate-800 dark:text-zinc-100">
          {value}
        </span>
      </span>
    </>
  );
  return href ? (
    <a
      href={href}
      className={`${styles.fact} flex items-center gap-3 px-3 py-2.5 min-w-0 hover:!border-brand-primary/40`}
    >
      {content}
    </a>
  ) : (
    <div
      className={`${styles.fact} flex items-center gap-3 px-3 py-2.5 min-w-0`}
    >
      {content}
    </div>
  );
}

/** Clickable file tile (opens in a new tab). */
export function FileTile({ icon, title, subtitle, url }) {
  return (
    <a
      href={getFileUrl(url)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.tile} flex items-center gap-3 px-3 py-3 min-w-0`}
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-50 dark:bg-zinc-800 text-lg">
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate text-[13px] font-semibold text-slate-800 dark:text-zinc-100">
          {title}
        </span>
        {subtitle && (
          <span className="block truncate text-[11px] text-slate-500 dark:text-zinc-400">
            {subtitle}
          </span>
        )}
      </span>
      <ExportOutlined
        className={`${styles.tileAction} text-brand-primary dark:text-emerald-400`}
      />
    </a>
  );
}

export function EmptyState({ icon, title, description, action }) {
  return (
    <div className="flex flex-col items-center px-6 py-12 text-center">
      <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 dark:bg-zinc-800 text-xl text-slate-400 dark:text-zinc-500">
        {icon}
      </span>
      <p className="m-0 text-[14px] font-semibold text-slate-800 dark:text-zinc-100">
        {title}
      </p>
      {description && (
        <p className="m-0 mt-1 max-w-sm text-[12px] text-slate-500 dark:text-zinc-400">
          {description}
        </p>
      )}
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}

export const tabLabel = (icon, text, count, pending = false) => (
  <span className="flex items-center gap-1.5 text-[13px] font-medium">
    {icon}
    {text}
    {typeof count === "number" && (
      <span className="rounded-pill bg-slate-100 dark:bg-zinc-800 px-1.5 font-mono text-[10px] text-slate-500 dark:text-zinc-400">
        {count}
      </span>
    )}
    {pending && (
      <span className="rounded-pill bg-amber-50 px-1.5 text-[10px] font-semibold text-amber-700 dark:bg-amber-950/40 dark:text-amber-300">
        Pending
      </span>
    )}
  </span>
);

/**
 * Modal title: avatar initials, name, copyable reference, tags, submitted date.
 * @param {string} name
 * @param {string} reference
 * @param {React.ReactNode} [tags] - status / risk tags
 * @param {string|Date} [submittedAt]
 * @param {React.ReactNode} [avatar] - replaces the initials (e.g. an icon)
 */
export function DetailsHeader({
  name,
  reference,
  tags,
  submittedAt,
  avatar,
  fallbackInitials = "?",
}) {
  const copyReference = async () => {
    try {
      await navigator.clipboard.writeText(reference);
      antdMsg.success("Reference copied");
    } catch {
      antdMsg.error("Could not copy the reference");
    }
  };
  return (
    <div className="flex items-start gap-4 pr-8">
      <span
        className={`${styles.avatar} flex h-12 w-12 shrink-0 items-center justify-center rounded-lg text-base font-bold text-white`}
      >
        {avatar || initialsOf(name, fallbackInitials)}
      </span>
      <div className="min-w-0 flex-1">
        <h3 className="m-0 truncate text-[18px] font-bold leading-tight text-slate-900 dark:text-zinc-50">
          {name}
        </h3>
        <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[12px] font-normal">
          {reference && (
            <button
              type="button"
              onClick={copyReference}
              title="Copy reference"
              className="group flex items-center gap-1.5 rounded-md bg-white/80 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 px-2 py-0.5 font-mono text-[11px] font-semibold text-slate-600 dark:text-zinc-300 hover:border-brand-primary/40 cursor-pointer"
            >
              {reference}
              <CopyOutlined className="text-slate-400 group-hover:text-brand-primary" />
            </button>
          )}
          {tags}
          {submittedAt && (
            <span className="flex items-center gap-1 text-slate-500 dark:text-zinc-400">
              <CalendarOutlined /> Submitted {formatDate(submittedAt, true)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * Footer PDF split-button: the first PDF as a button, the others in a menu.
 * @param {{ key: string, label: string, url: string }[]} pdfs
 */
export function PdfSplitButton({ pdfs = [] }) {
  const [mainPdf, ...otherPdfs] = pdfs;
  if (!mainPdf) return null;
  const openPdf = (url) =>
    window.open(getFileUrl(url), "_blank", "noopener,noreferrer");
  return (
    <Space.Compact>
      <Button
        icon={<FilePdfOutlined className="text-red-500" />}
        onClick={() => openPdf(mainPdf.url)}
      >
        {mainPdf.label} PDF
      </Button>
      {otherPdfs.length > 0 && (
        <Dropdown
          trigger={["click"]}
          placement="topRight"
          menu={{
            items: otherPdfs.map((pdf) => ({
              key: pdf.key,
              icon: <FilePdfOutlined className="text-red-500" />,
              label: pdf.label,
              onClick: () => openPdf(pdf.url),
            })),
          }}
        >
          <Tooltip
            title={`${otherPdfs.length} more PDF${otherPdfs.length === 1 ? "" : "s"}`}
          >
            <Button
              icon={<DownOutlined className="text-[10px]" />}
              aria-label="More PDFs"
            />
          </Tooltip>
        </Dropdown>
      )}
    </Space.Compact>
  );
}
