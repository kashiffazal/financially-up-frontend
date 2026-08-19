"use client";

import React from "react";
import { Tag } from "antd";
import { SafetyCertificateOutlined } from "@ant-design/icons";
import { AntInput } from "@/services/antdFields";

export default function Step7CddAmlQuestions() {
  return (
    <div className="space-y-4 animate-fadeIn">
      {/* Header */}
      <div className="border-b border-slate-100 dark:border-zinc-800 pb-3">
        <div className="flex items-center gap-2 mb-1">
          <Tag
            color="green"
            className="font-extrabold uppercase text-[10px] px-2.5 py-0.5 rounded-full border-none"
          >
            Step 7 of 12
          </Tag>
          <span className="text-xs font-semibold text-slate-400 dark:text-zinc-500">
            Customer Due Diligence
          </span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
          AML/CTF Customer Due Diligence (CDD) Assessment
        </h2>
        <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
          Statutory questions required under the Anti-Money Laundering and Counter-Terrorism Financing Act 2006 (AML/CTF Act).
        </p>
      </div>

      {/* 10 CDD Questions */}
      <div className="p-5 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-4">

        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/60 dark:border-zinc-800 pb-2">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-bold text-slate-900 dark:text-zinc-100 m-0">
              <SafetyCertificateOutlined className="text-brand-primary text-sm" /> Mandatory Due Diligence Evaluation
            </h3>
          </div>
        </div>

        <div className="space-y-4">
          <AntInput
            type="textarea"
            name="cddQ1"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">1. Commercial Rationale: What is the commercial purpose for creating this company now? *</span>}
            placeholder="Describe the business model, commercial objectives, or transaction prompting registration."
            reqMsg="Commercial reason is required"
            rows={2}
            className="rounded-xl"
            containerClassName="!mb-4"
          />

          <AntInput
            type="textarea"
            name="cddQ2"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">2. Counterparties: Describe expected customers, suppliers, assets, and countries connected. *</span>}
            placeholder="e.g. Australian corporate clients, local suppliers, software intellectual property, cloud hosting in USA."
            reqMsg="Counterparties description is required"
            rows={2}
            className="rounded-xl"
            containerClassName="!mb-4"
          />

          <AntInput
            type="textarea"
            name="cddQ3"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">3. Products & Services: What specific products or services will the company provide? *</span>}
            placeholder="e.g. Digital consulting, software engineering, wholesale goods distribution."
            reqMsg="Products/services description is required"
            rows={2}
            className="rounded-xl"
            containerClassName="!mb-4"
          />

          <AntInput
            type="radio"
            name="cddQ4"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">4. Will the company receive or send international cross-border payments?</span>}
            reqMsg="Please answer Question 4"
            radioOptions={[{ value: "No", label: "No (Domestic Australian transactions only)" }, { value: "Yes", label: "Yes (Cross-border foreign currency flows)" }]}
            containerClassName="!mb-4"
          />

          <AntInput
            type="radio"
            name="cddQ5"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">5. Will the company deal with cash, high-value goods, crypto/virtual assets, remittance, gambling, loans, or import/export?</span>}
            reqMsg="Please answer Question 5"
            radioOptions={[{ value: "No", label: "No" }, { value: "Yes", label: "Yes" }]}
            containerClassName="!mb-4"
          />

          <AntInput
            type="radio"
            name="cddQ6"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">6. Will any director, shareholder, or controller be a Politically Exposed Person (PEP) or close associate?</span>}
            reqMsg="Please answer Question 6"
            radioOptions={[{ value: "No", label: "No" }, { value: "Yes", label: "Yes" }]}
            containerClassName="!mb-4"
          />

          <AntInput
            type="radio"
            name="cddQ7"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">7. Is any director, shareholder, or controller subject to sanctions, adverse media, or bankruptcy restrictions?</span>}
            reqMsg="Please answer Question 7"
            radioOptions={[{ value: "No", label: "No" }, { value: "Yes", label: "Yes" }]}
            containerClassName="!mb-4"
          />

          <AntInput
            type="radio"
            name="cddQ8"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">8. Will the company use third-party funds, loans, gifts, or offshore funding?</span>}
            reqMsg="Please answer Question 8"
            radioOptions={[{ value: "No", label: "No" }, { value: "Yes", label: "Yes" }]}
            containerClassName="!mb-4"
          />

          <AntInput
            type="radio"
            name="cddQ9"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">9. Has the client been asked or instructed to create this company by another person?</span>}
            reqMsg="Please answer Question 9"
            radioOptions={[{ value: "No", label: "No (Acting on own initiative)" }, { value: "Yes", label: "Yes (Instructed by third party)" }]}
            containerClassName="!mb-4"
          />

          <AntInput
            type="radio"
            name="cddQ10"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">10. Is the structure intended to conceal ownership, hold assets for others, or separate legal from beneficial ownership?</span>}
            reqMsg="Please answer Question 10"
            radioOptions={[{ value: "No", label: "No" }, { value: "Yes", label: "Yes" }]}
            containerClassName="!mb-0"
          />
        </div>
      </div>
    </div>
  );
}
