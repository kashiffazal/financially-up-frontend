"use client";

import React from "react";
import { Descriptions } from "antd";
import { PaperClipOutlined } from "@ant-design/icons";
import { getFileUrl } from "@/services";

/**
 * ============================================================================
 * Submitted Answers (View Details section)
 * ============================================================================
 * Renders `record.submissionData` — the complete public form submission saved by
 * the backend (formSubmission.service) — so answers without a dedicated table
 * column are still visible to staff. Tax File Numbers are masked.
 */

// Internal / anti-spam fields that are never shown
const HIDDEN_KEYS = new Set(["fu_contact_trap", "formElapsedMs"]);

/** Parse once if MySQL returned the JSON column as a string. */
export const parseSubmissionData = (value) => {
  if (!value) return null;
  if (typeof value === "object") return value;
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
};

/** "m1FirstName" → "Member 1 First Name", "trusteeAcnAbn" → "Trustee ACN ABN" */
const humanize = (key) =>
  String(key)
    .replace(/^m(\d+)(?=[A-Z])/, "Member $1 ")
    .replace(/^b(\d+)(?=[A-Z])/, "Beneficiary $1 ")
    .replace(/_/g, " ")
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/\b(Abn|Acn|Tfn|Dob|Id|Gst|Payg|Smsf|Esa)\b/gi, (m) => m.toUpperCase())
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^./, (c) => c.toUpperCase());

const isTfnKey = (key) => /tfn/i.test(key) && !/(reason|status|explanation|required)/i.test(key);

const maskTfn = (value) => {
  const digits = String(value).replace(/\D/g, "");
  return digits.length >= 8 ? `*** *** ${digits.slice(-3)}` : String(value);
};

const ISO_DATE = /^\d{4}-\d{2}-\d{2}(?:[T ]\d{2}:\d{2}(?::\d{2}(?:\.\d+)?)?(?:Z|[+-]\d{2}:?\d{2})?)?$/;

const formatValue = (key, value) => {
  if (value === null || value === undefined || value === "") return null;
  if (isTfnKey(key)) return <span className="font-mono">{maskTfn(value)}</span>;
  if (typeof value === "boolean") return value ? "Yes" : "No";
  if (Array.isArray(value)) {
    const items = value.filter((v) => v !== null && v !== undefined && v !== "");
    if (!items.length) return null;
    return items.map((v) => (typeof v === "object" ? Object.values(v).filter(Boolean).join(" ") : String(v))).join(", ");
  }
  if (typeof value === "object") {
    return Object.entries(value)
      .filter(([, v]) => v !== null && v !== undefined && v !== "")
      .map(([k, v]) => `${humanize(k)}: ${typeof v === "object" ? JSON.stringify(v) : v}`)
      .join(" · ");
  }
  if (typeof value === "string" && ISO_DATE.test(value)) {
    const d = new Date(value);
    if (!Number.isNaN(d.getTime())) return d.toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric" });
  }
  if (value === "true") return "Yes";
  if (value === "false") return "No";
  return String(value);
};

export default function SubmittedAnswers({ submissionData, layout = "horizontal" }) {
  const data = parseSubmissionData(submissionData);
  if (!data) return null;

  const answers = Object.entries(data.fields || {})
    .filter(([key]) => !HIDDEN_KEYS.has(key))
    .map(([key, value]) => ({ key, label: humanize(key), children: formatValue(key, value) }))
    .filter((item) => item.children !== null);

  const files = Object.entries(data.files || {}).flatMap(([field, list]) =>
    (Array.isArray(list) ? list : []).map((file, idx) => ({ ...file, field, idx }))
  );

  if (!answers.length && !files.length) return null;

  return (
    <div className="space-y-4">
      {answers.length > 0 && (
        <Descriptions
          bordered
          size="small"
          layout={layout}
          title={
            <span className="text-sm font-bold text-slate-800 dark:text-zinc-200">
              All Submitted Answers
              <span className="ml-2 text-[11px] font-normal text-slate-400">
                exactly as entered on the website form
                {data.submittedAt ? ` · ${new Date(data.submittedAt).toLocaleString("en-AU")}` : ""}
              </span>
            </span>
          }
          column={{ xs: 1, sm: 2, md: 3 }}
          items={answers}
        />
      )}

      {files.length > 0 && (
        <Descriptions
          bordered
          size="small"
          layout={layout}
          title={<span className="text-sm font-bold text-slate-800 dark:text-zinc-200">Uploaded Files ({files.length})</span>}
          column={1}
          items={files.map((file) => ({
            key: `${file.field}-${file.idx}`,
            label: humanize(file.field),
            children: (
              <a href={getFileUrl(file.filePath)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5">
                <PaperClipOutlined />
                {file.fileName || "Download file"}
                {file.size ? <span className="text-[11px] text-slate-400">({Math.max(1, Math.round(file.size / 1024))} KB)</span> : null}
              </a>
            ),
          }))}
        />
      )}
    </div>
  );
}
