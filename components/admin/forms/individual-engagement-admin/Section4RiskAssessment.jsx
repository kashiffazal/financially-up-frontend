"use client";

import React from "react";
import { WarningOutlined } from "@ant-design/icons";
import { AntInput } from "@/services/antdFields";

const RISK_LEVEL_OPTIONS = [
  {
    value: "Low",
    label: "Low Risk - Verified identity & standard tax return (Normal review)",
  },
  {
    value: "Medium",
    label:
      "Medium Risk - Foreign income, crypto, or overdue lodgements (Senior review)",
  },
  {
    value: "High",
    label:
      "High Risk - Identity concerns or major inconsistencies (Enhanced review)",
  },
  {
    value: "Unacceptable",
    label:
      "Unacceptable Risk - False identity or fraudulent documents (Decline)",
  },
];

export default function Section4RiskAssessment() {
  return (
    <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm p-6 space-y-4 hover:border-brand-primary/40 transition-all">
      <h4 className="text-sm font-extrabold text-amber-600 dark:text-amber-400 flex items-center gap-2">
        <WarningOutlined className="text-amber-500" /> Section 4: Engagement
        Risk Assessment Level
      </h4>

      <AntInput
        type="radio"
        name="riskLevel"
        label={
          <span className="font-bold text-slate-800 dark:text-zinc-200">
            Risk Assessment Classification
          </span>
        }
        radioOptions={RISK_LEVEL_OPTIONS}
        vertical={true}
        reqMsg="Please select risk level."
      />

      <AntInput
        type="textarea"
        name="riskRationale"
        label={
          <span className="font-bold text-slate-800 dark:text-zinc-200">
            Risk Evaluation Notes / Rationale
          </span>
        }
        placeholder="Enter details regarding foreign income, crypto, or identity verification observations..."
        rows={2}
        className="rounded-xl"
        noRequired={true}
      />
    </div>
  );
}
