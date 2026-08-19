"use client";

import React from "react";
import { Tag } from "antd";
import { SafetyCertificateOutlined } from "@ant-design/icons";
import { AntInput } from "@/services/antdFields";

export default function Step4ConsentDeclaration() {
  return (
    <div className="space-y-3.5 animate-fadeIn">
      {/* Header */}
      <div className="border-b border-slate-100 dark:border-zinc-800 pb-3">
        <div className="flex items-center gap-2 mb-1">
          <Tag
            color="green"
            className="font-extrabold uppercase text-[10px] px-2.5 py-0.5 rounded-full border-none"
          >
            Step 4 of 4
          </Tag>
          <span className="text-xs font-semibold text-slate-400 dark:text-zinc-500">
            Declaration & Consent
          </span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
          Tax Agent Authorisation & Statutory Declaration
        </h2>
        <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
          Authorise Financially Up to lodge Form MS015 with Services Australia
          (Medicare).
        </p>
      </div>

      {/* Declaration Callout Box */}
      <div className="p-4 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-3">
        <div className="flex items-center gap-2 mb-1">
          <SafetyCertificateOutlined className="text-brand-primary text-sm" />
          <span className="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-zinc-200">
            Services Australia Medicare Entitlement Declaration
          </span>
        </div>

        <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed">
          I declare that I was not entitled to Medicare benefits for the period
          claimed above, and the information given on this form and supporting
          documents is complete and correct. I authorise Financially Up
          (Registered Tax Agent) to lodge and receive the Medicare Entitlement
          Statement (MES) certificate on my behalf.
        </p>

        <AntInput
          type="radio"
          name="privacyNotice"
          label={
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              Do you agree to the Medicare Entitlement Statement declaration and
              tax agent authorisation?
            </span>
          }
          reqMsg="You must confirm the statutory declaration"
          radioOptions={[
            {
              value: "Yes",
              label:
                "I Agree & Authorise Financially Up to lodge my Medicare Exemption",
            },
          ]}
          containerClassName="!mb-0"
        />
      </div>
    </div>
  );
}
