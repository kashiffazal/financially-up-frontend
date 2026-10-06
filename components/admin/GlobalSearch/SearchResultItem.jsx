"use client";

import React from "react";
import { Tag } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  NumberOutlined,
  UserOutlined,
  TagOutlined,
  EnterOutlined,
} from "@ant-design/icons";
import styles from "./GlobalSearch.module.css";
import { MODULE_META, statusTagColor, formatDate } from "./searchConfig";

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/**
 * Wrap every occurrence of the query (and of each query word) in <mark>.
 * Text is rendered as React children, so no HTML is ever injected.
 */
export function Highlight({ text, query }) {
  const value = String(text ?? "");
  const words = String(query || "")
    .trim()
    .split(/\s+/)
    .filter((w) => w.length > 0);
  if (!value || !words.length) return value;

  const pattern = new RegExp(`(${[query.trim(), ...words].map(escapeRegExp).join("|")})`, "gi");
  const parts = value.split(pattern);
  const lowered = new Set([query.trim(), ...words].map((w) => w.toLowerCase()));

  return parts.map((part, idx) =>
    lowered.has(part.toLowerCase()) ? (
      <mark key={idx} className={styles.mark}>
        {part}
      </mark>
    ) : (
      <React.Fragment key={idx}>{part}</React.Fragment>
    )
  );
}

const matchIcon = (field, label) => {
  const f = `${field || ""} ${label || ""}`.toLowerCase();
  if (f.includes("email")) return <MailOutlined />;
  if (f.includes("phone") || f.includes("mobile")) return <PhoneOutlined />;
  if (f.includes("reference")) return <TagOutlined />;
  if (f.includes("abn") || f.includes("acn")) return <NumberOutlined />;
  return <UserOutlined />;
};

/**
 * One application row inside the Global Search dropdown.
 */
export default function SearchResultItem({ id, item, group, query, active, onSelect, onHover }) {
  const meta = MODULE_META[group.moduleKey] || {};
  const showMatchLine =
    item.matchedValue &&
    item.matchedField !== "reference" &&
    String(item.matchedValue).toLowerCase() !== String(item.title).toLowerCase();

  return (
    <li
      id={id}
      role="option"
      aria-selected={active}
      onMouseDown={(e) => e.preventDefault()} // keep input focus
      onClick={onSelect}
      onMouseMove={onHover}
      className={`${styles.item} group flex items-start gap-3 px-3 py-2.5 mx-1.5 rounded-xl cursor-pointer transition-colors ${
        active ? "bg-brand-primary-soft dark:bg-emerald-950/40" : "hover:bg-slate-50 dark:hover:bg-zinc-800/60"
      }`}
    >
      {/* Module icon chip */}
      <span
        className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm"
        style={{ backgroundColor: `${group.color}1a`, color: group.color }}
        aria-hidden
      >
        {meta.icon}
      </span>

      <span className="min-w-0 flex-1">
        <span className="flex items-center gap-2 min-w-0">
          <span className="truncate text-[13px] font-semibold text-slate-800 dark:text-zinc-100">
            <Highlight text={item.title} query={query} />
          </span>
          <span className="shrink-0 font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded-pill bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300">
            <Highlight text={item.reference} query={query} />
          </span>
        </span>

        {showMatchLine ? (
          <span className="mt-0.5 flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-zinc-400 min-w-0">
            <span className="shrink-0 text-slate-400 dark:text-zinc-500">{matchIcon(item.matchedField, item.matchedLabel)}</span>
            <span className="shrink-0 font-medium">{item.matchedLabel}:</span>
            <span className="truncate">
              <Highlight text={item.matchedValue} query={query} />
            </span>
          </span>
        ) : (
          <span className="mt-0.5 block truncate text-[11px] text-slate-500 dark:text-zinc-400">{item.subtitle}</span>
        )}
      </span>

      <span className="flex shrink-0 flex-col items-end gap-1">
        {item.status && (
          <Tag color={statusTagColor(item.status)} className="!m-0 !text-[10px] !leading-4 !px-1.5">
            {item.status}
          </Tag>
        )}
        <span className="flex items-center gap-1 text-[10px] text-slate-400 dark:text-zinc-500">
          {formatDate(item.createdAt)}
          <EnterOutlined className={`${styles.enterHint} ${active ? styles.enterHintVisible : ""}`} />
        </span>
      </span>
    </li>
  );
}
