"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  FolderOpenOutlined,
  EyeOutlined,
  ArrowRightOutlined,
  InfoCircleOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";

/**
 * WhatReportingHelpsYouSeeAndInfoNeeded Component
 * Covers 'What information may be needed?' (with clean-up link)
 * and 'What management reporting can help you see'
 * from Page 9 of 4th Pillar Bookkeeping.docx.
 */
export default function WhatReportingHelpsYouSeeAndInfoNeeded() {
  const infoRequirements = [
    "Access to your cloud accounting software (Xero, MYOB, or QBO)",
    "Current bank reconciliations & credit-card balances",
    "Accounts receivable and accounts payable ledger records",
    "Payroll summaries & employee superannuation records where relevant",
    "Commercial loan agreements & financing schedules",
    "Fixed asset registers & capital expenditure records",
    "Annual operating budgets or prior-period financial reports",
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Part 1: What information may be needed? */}
          <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <FolderOpenOutlined className="text-2xl" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                What information may be needed?
              </h2>

              <p className="text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                For outsourced financial reporting, we may need access to your accounting software, bank reconciliations, accounts receivable and payable records, payroll summaries where relevant, loan information, asset records, budgets or prior-period reports. The exact requirements depend on the report set and the quality of the existing bookkeeping data.
              </p>

              <p className="text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Where records are incomplete, we can identify what needs to be corrected before relying on the reports. If the file requires significant historical work, bookkeeping clean-up services may need to be completed first.
              </p>

              <div className="space-y-2.5 pt-2">
                {infoRequirements.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-zinc-800">
              <Link
                href="/services/bookkeeping/bookkeeping-clean-up"
                className="inline-flex items-center gap-2 text-brand-primary dark:text-emerald-400 hover:underline font-semibold text-sm group"
              >
                Incomplete books? Explore Bookkeeping Clean-Up Services
                <ArrowRightOutlined className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Part 2: What management reporting can help you see */}
          <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                <EyeOutlined className="text-2xl" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                What management reporting can help you see
              </h2>

              <p className="text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Good reporting does not make the decision for the business owner. It provides a clearer factual basis for decisions. Depending on the reports used, management may be able to see whether revenue is growing, which costs are changing, whether receivables are increasing, how liabilities are moving and whether actual results differ materially from expectations.
              </p>

              <p className="text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Interpretation still depends on context. A temporary increase in expenses may reflect investment in growth rather than poor performance, and a profitable month does not necessarily mean cash is available. Where deeper business advisory or forecasting is required, that work can be separately scoped.
              </p>

              <div className="p-5 rounded-xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200 dark:border-zinc-700/80 space-y-3">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
                  <ThunderboltOutlined className="text-emerald-600 dark:text-emerald-400" />
                  Key Questions Answered
                </div>
                <ul className="text-xs text-slate-600 dark:text-zinc-300 space-y-2">
                  <li>• Are customer receivables growing faster than revenue?</li>
                  <li>• Which overhead categories are inflating margins?</li>
                  <li>• Why did a profitable quarter generate negative bank cash?</li>
                  <li>• What is the true tax debt and superannuation liability today?</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-zinc-800 flex items-center gap-3 text-xs text-slate-500 dark:text-zinc-400">
              <InfoCircleOutlined className="text-brand-primary shrink-0" />
              <span>Forward-looking financial forecasts &amp; cash modeling available under separate advisory engagements.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
