"use client";

import React from "react";
import { GlobalOutlined } from "@ant-design/icons";
import { AntInput } from "@/services/antdFields";

export default function Section6SanctionsReview() {
  return (
    <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm p-6 space-y-4 hover:border-brand-primary/40 transition-all">
      <h4 className="text-sm font-extrabold text-slate-900 dark:text-zinc-100 flex items-center gap-2 text-brand-primary dark:text-emerald-400">
        <GlobalOutlined className="text-brand-primary" /> Section 6: Sanctions Screening Review
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <AntInput
          type="radio"
          name="sanctionsOverseasActivityCheck"
          label={<span className="font-bold text-slate-800 dark:text-zinc-200">Overseas Activity Check</span>}
          radioOptions={[
            { value: "Pass", label: "Pass" },
            { value: "Flagged", label: "Flagged" },
          ]}
          reqMsg="Select status."
        />

        <AntInput
          type="radio"
          name="sanctionsHighRiskJurisdictionCheck"
          label={<span className="font-bold text-slate-800 dark:text-zinc-200">High-Risk Jurisdiction Check</span>}
          radioOptions={[
            { value: "Pass", label: "Pass" },
            { value: "Flagged", label: "Flagged" },
          ]}
          reqMsg="Select status."
        />

        <AntInput
          type="radio"
          name="sanctionsNameMatchCheck"
          label={<span className="font-bold text-slate-800 dark:text-zinc-200">Sanctions List Name Match</span>}
          radioOptions={[
            { value: "Clear - No Match", label: "Clear - No Match" },
            { value: "Potential Match - Escalate", label: "Potential Match" },
          ]}
          reqMsg="Select status."
        />
      </div>
    </div>
  );
}
