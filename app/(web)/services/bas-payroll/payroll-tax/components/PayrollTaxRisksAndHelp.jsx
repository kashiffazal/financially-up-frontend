"use client";

import React from "react";
import { Tag } from "antd";
import {
  WarningOutlined,
  CheckCircleOutlined,
  FolderOpenOutlined,
  SafetyCertificateOutlined,
  AuditOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

/**
 * PayrollTaxRisksAndHelp Component
 * Covers 'Common payroll tax risks', 'What information may be needed?',
 * and 'How Financially Up can help' from Page 9 of 5th Pillar BAS, GST & Payroll.docx.
 */
export default function PayrollTaxRisksAndHelp() {
  const commonRisks = [
    "Not registering when total Australian wages exceed a jurisdiction’s threshold.",
    "Using an incomplete wage base that excludes taxable allowances, bonuses, superannuation or fringe benefits.",
    "Assuming all contractor payments are automatically outside payroll tax.",
    "Failing to consider grouping rules for related entities.",
    "Allocating wages to the wrong jurisdiction.",
    "Allowing payroll tax returns, payroll reports and general ledger balances to drift out of reconciliation.",
  ];

  const recordsNeeded = [
    "Payroll reports by employee and work location",
    "General ledger wage accounts and clearing journals",
    "Superannuation contribution records and clearing ledgers",
    "Fringe benefits tax summaries and taxable component values",
    "Contractor payment schedules, contracts and invoices",
    "Entity ownership and corporate group structure diagrams",
    "Prior state payroll tax returns and registration notices",
    "Details of cross-border staff working across state lines",
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950/70 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Part 1: Common payroll tax risks */}
        <div className="mb-20">
          <div className="max-w-3xl mb-12">
            <Tag color="volcano" className="brand-section-tag font-bold tracking-wider uppercase text-xs mb-3">
              <WarningOutlined className="mr-1.5" />
              Risk Assessment
            </Tag>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              Common payroll tax risks
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              State revenue authorities regularly conduct data-matching against STP feeds and federal income tax returns. Proactive review avoids retroactive assessments and penalties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonRisks.map((risk, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex items-start gap-3.5"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <WarningOutlined className="text-sm" />
                </div>
                <p className="text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
                  {risk}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: Information Needed & How Financially Up Helps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Records needed */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                  <FolderOpenOutlined className="text-xl" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  What information may be needed?
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                A payroll tax review may require payroll reports by employee and location, general ledger wage accounts, superannuation records, fringe benefits information, contractor payment details, entity and group structure information, prior payroll tax returns and registrations, and details of employees working across state borders.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 italic">
                The records needed will depend on whether the engagement is a registration review, return preparation, historical clean-up or broader payroll tax advice.
              </p>

              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200 dark:border-zinc-700/80 space-y-2.5">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                  Review Documentation:
                </h4>
                <ul className="space-y-2">
                  {recordsNeeded.map((rec, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-zinc-300">
                      <CheckCircleOutlined className="text-purple-600 dark:text-purple-400 mt-0.5 shrink-0" />
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* How Financially Up can help */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <AuditOutlined className="text-xl" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  How Financially Up can help
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Financially Up can provide payroll tax compliance support from initial threshold review through to return preparation and annual reconciliation. We can also help a business understand which wage categories or transactions need further investigation before lodgement. We do not assume that one state’s payroll tax rules apply everywhere; the relevant jurisdiction is reviewed as part of the engagement.
              </p>

              <div className="p-6 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/70 dark:border-emerald-800/60 space-y-3">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  Multi-State Expertise:
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                  Whether your business operates in NSW, Victoria, Queensland, or multiple states simultaneously, we verify thresholds and grouping implications specifically against the relevant state or territory revenue legislation.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 dark:border-zinc-800 flex items-center gap-2.5 text-xs text-slate-500 dark:text-zinc-400 font-medium">
              <InfoCircleOutlined className="text-sm text-purple-600 dark:text-purple-400 shrink-0" />
              <span>Full compliance alignment between state revenue portals and internal general ledgers.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
