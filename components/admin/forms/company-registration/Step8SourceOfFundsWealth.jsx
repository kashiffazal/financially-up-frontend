"use client";

import React from "react";
import { Tag, Form } from "antd";
import {
  DollarOutlined,
  GlobalOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { AntInput, AntFileUpload } from "@/services/antdFields";

export default function Step8SourceOfFundsWealth({ form }) {
  const hasOffshore = Form.useWatch("hasOffshoreFunding", form);
  const hasCashOver10k = Form.useWatch("hasCashOver10k", form);

  return (
    <div className="space-y-4 animate-fadeIn">
      {/* Header */}
      <div className="border-b border-slate-100 dark:border-zinc-800 pb-3">
        <div className="flex items-center gap-2 mb-1">
          <Tag
            color="green"
            className="font-extrabold uppercase text-[10px] px-2.5 py-0.5 rounded-full border-none"
          >
            Step 8 of 12
          </Tag>
          <span className="text-xs font-semibold text-slate-400 dark:text-zinc-500">
            Funds & Wealth Verification
          </span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
          Source of Funds & Source of Wealth
        </h2>
        <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
          Verify the origin of initial capital contributions and ongoing funding under Australian AML/CTF rules.
        </p>
      </div>

      {/* Initial Capital Contribution */}
      <div className="p-5 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-4">

        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/60 dark:border-zinc-800 pb-2">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-bold text-slate-900 dark:text-zinc-100 m-0">
              Initial Capital Contribution & Setup Funding
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <AntInput
            type="text"
            name="initialCapitalAmount"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">Initial Capital Amount (AUD) *</span>}
            placeholder="e.g. $100.00 or $10,000.00"
            reqMsg="Initial capital amount is required"
            preIconAnt={<DollarOutlined className="text-slate-400" />}
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />

          <AntInput
            type="text"
            name="initialCapitalPaidBy"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">Paid By (Person / Entity Name) *</span>}
            placeholder="e.g. Founding Directors / Shareholders"
            reqMsg="Paid by name is required"
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />

          <AntInput
            type="select"
            name="initialCapitalSource"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">Source of Initial Setup Funds</span>}
            options={[
              "Personal savings from employment",
              "Retained business earnings",
              "Bank loan / credit facility",
              "Investor equity / venture capital",
              "Intercompany loan / transfer",
              "Other legitimate source",
            ]}
            emptyFirstVal="- Select Source -"
            reqMsg="Initial funding source is required"
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
          <AntInput
            type="text"
            name="expected12MonthFundingAmount"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">Expected First 12 Months Funding (AUD)</span>}
            placeholder="e.g. $50,000 - $200,000"
            reqMsg="Expected funding is required"
            preIconAnt={<DollarOutlined className="text-slate-400" />}
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />

          <AntInput
            type="text"
            name="expectedFundingFunder"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">Primary Funder / Bank of Origin</span>}
            placeholder="e.g. Australian commercial trading revenue / Commonwealth Bank"
            reqMsg="Funder/bank details required"
            size="large"
            className="rounded-xl"
            containerClassName="!mb-0"
          />
        </div>

        <AntInput
          type="textarea"
          name="beneficialOwnerWealthSummary"
          label={<span className="font-bold text-slate-800 dark:text-zinc-200">Beneficial Owner Source of Wealth Summary *</span>}
          placeholder="Summarize how the founders/owners generated their overall wealth (e.g. Accumulated earnings from 10+ years in executive software engineering)."
          reqMsg="Source of wealth summary is required"
          rows={2}
          className="rounded-xl"
          containerClassName="!mb-0"
        />
      </div>

      {/* Offshore & Cash Declarations */}
      <div className="p-5 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-4">

        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/60 dark:border-zinc-800 pb-2">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-bold text-slate-900 dark:text-zinc-100 m-0">
              Offshore Funding & Significant Cash Declarations
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <AntInput
            type="radio"
            name="hasOffshoreFunding"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">Any offshore source of funds or wealth?</span>}
            reqMsg="Please answer offshore funds question"
            radioOptions={[{ value: "No", label: "No (100% Australian sourced)" }, { value: "Yes", label: "Yes (Foreign funds involved)" }]}
            containerClassName="!mb-0"
          />

          <AntInput
            type="radio"
            name="hasCashOver10k"
            label={<span className="font-bold text-slate-800 dark:text-zinc-200">Any physical cash contribution of AUD $10,000 or more?</span>}
            reqMsg="Please answer cash threshold question"
            radioOptions={[{ value: "No", label: "No (Bank transfer / EFT)" }, { value: "Yes", label: "Yes ($10k+ physical cash)" }]}
            containerClassName="!mb-0"
          />
        </div>

        {hasOffshore === "Yes" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-slate-200/60 dark:border-zinc-800">
            <AntInput
              type="text"
              name="offshoreCountries"
              label={<span className="font-bold text-slate-800 dark:text-zinc-200">Foreign Countries & Banks Involved</span>}
              placeholder="e.g. Singapore (DBS Bank), United Kingdom (HSBC)"
              reqMsg="Offshore countries and banks required"
              preIconAnt={<GlobalOutlined className="text-slate-400" />}
              size="large"
              className="rounded-xl"
              containerClassName="!mb-0"
            />

            <AntInput
              type="text"
              name="offshoreExplanation"
              label={<span className="font-bold text-slate-800 dark:text-zinc-200">Explanation of Offshore Transfer</span>}
              placeholder="e.g. Personal capital repatriation"
              reqMsg="Explanation is required"
              size="large"
              className="rounded-xl"
              containerClassName="!mb-0"
            />
          </div>
        )}

        {hasCashOver10k === "Yes" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-slate-200/60 dark:border-zinc-800">
            <AntInput
              type="text"
              name="cashAmountAndPayer"
              label={<span className="font-bold text-slate-800 dark:text-zinc-200">Cash Amount & Payer Details</span>}
              placeholder="e.g. $15,000 AUD deposited by J. Smith"
              reqMsg="Cash details required"
              size="large"
              className="rounded-xl"
              containerClassName="!mb-0"
            />

            <AntFileUpload
              name="cashBankingEvidence"
              label={<span className="font-bold text-slate-800 dark:text-zinc-200">Upload Bank Deposit Evidence / Withdrawal Slip</span>}
              heading="Click or drag deposit receipt"
              para="Official bank receipt showing cash deposit"
              maxCount={1}
              noRequired={true}
              icon={<UploadOutlined className="text-3xl text-brand-primary mb-2" />}
            />
          </div>
        )}
      </div>
    </div>
  );
}
