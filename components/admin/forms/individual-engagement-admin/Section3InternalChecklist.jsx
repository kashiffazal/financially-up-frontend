"use client";

import React from "react";
import { FileProtectOutlined } from "@ant-design/icons";
import { AntInput } from "@/services/antdFields";

const ADM_CHECKLIST_ITEMS = [
  { value: "ADM-001", label: "ADM-001: Mandatory fields complete" },
  { value: "ADM-002", label: "ADM-002: Identity verified" },
  { value: "ADM-003", label: "ADM-003: Representative authority verified" },
  { value: "ADM-004", label: "ADM-004: Engagement Schedule complete" },
  { value: "ADM-005", label: "ADM-005: Conflict check completed" },
  { value: "ADM-006", label: "ADM-006: Previous adviser reviewed" },
  { value: "ADM-007", label: "ADM-007: Risk assessment completed" },
  { value: "ADM-008", label: "ADM-008: TPB disclosure current" },
  { value: "ADM-009", label: "ADM-009: AML/CTF review (if applicable)" },
  { value: "ADM-010", label: "ADM-010: Sanctions review (if applicable)" },
];

export default function Section3InternalChecklist() {
  return (
    <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm p-6 space-y-4 hover:border-brand-primary/40 transition-all">
      <h4 className="text-sm font-extrabold text-slate-900 dark:text-zinc-100 flex items-center gap-2 text-brand-primary dark:text-emerald-400">
        <FileProtectOutlined className="text-brand-primary" /> Section 3: Internal Review Checklist (ADM-001 to ADM-010)
      </h4>

      <AntInput
        type="checkbox"
        name="admChecklist"
        label={<span className="font-bold text-slate-800 dark:text-zinc-200">Confirm Mandatory Compliance & Operational Verification Checks</span>}
        group={ADM_CHECKLIST_ITEMS}
        gridClassName="grid grid-flow-row sm:grid-flow-col sm:grid-rows-5 gap-x-6 gap-y-2.5 w-full"
        noRequired={true}
      />
    </div>
  );
}
