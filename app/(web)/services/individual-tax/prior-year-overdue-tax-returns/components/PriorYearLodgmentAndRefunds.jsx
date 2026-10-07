"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  DollarOutlined,
  SendOutlined,
  AuditOutlined,
  WarningOutlined,
} from "@ant-design/icons";

/**
 * PriorYearLodgmentAndRefunds Component
 * ====================================
 * Section 3: Can prior-year tax returns still be lodged?
 * Features 100% complete, verbatim content from Page 11 of the client document.
 */
export default function PriorYearLodgmentAndRefunds() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Electronic Lodgment &amp; Assessment Outcomes
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Can Prior-Year Tax Returns Still Be Lodged?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Yes. Prior-year returns can generally still be lodged. The available method depends on the income year and may include electronic lodgment through a registered tax agent or another ATO-approved method.
          </p>
        </div>

        {/* 2 Key Realities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-12">
          {/* Card 1: Registered Tax Agent Portal Lodgment */}
          <div className="p-7 sm:p-9 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <SendOutlined className="text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Electronic Lodgment Systems
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-zinc-400">
                    Direct ATO Portal Integration
                  </span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-4">
                Prior-year returns can generally still be lodged. The available method depends on the income year and may include electronic lodgment through a registered tax agent or another ATO-approved method.
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-zinc-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-emerald-500 mt-1 shrink-0 text-xs" />
                  <span>Access to multi-year historical ATO pre-fill data and payment summaries</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-emerald-500 mt-1 shrink-0 text-xs" />
                  <span>Electronic validation reducing manual paperwork and correspondence delays</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-emerald-500 mt-1 shrink-0 text-xs" />
                  <span>Immediate digital lodgment confirmation receipt from the ATO</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-5 border-t border-slate-100 dark:border-zinc-800">
              <span className="text-2xs font-semibold text-slate-500 dark:text-zinc-400 uppercase tracking-wider block">
                Agent Status: TPB Registered Tax Agent #26242127
              </span>
            </div>
          </div>

          {/* Card 2: Lodging Late Does Not Automatically Mean Owing Tax */}
          <div className="p-7 sm:p-9 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/60 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <DollarOutlined className="text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Assessment Outcomes &amp; Potential Refunds
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-zinc-400">
                    Refund, Payable or Nil Position
                  </span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-4">
                Lodging late does not automatically mean that you owe tax. Depending on the information for that year, the assessment may result in a refund, an amount payable or no further amount payable.
              </p>
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-200/60 dark:border-zinc-700/60 text-xs text-slate-600 dark:text-zinc-300 leading-relaxed mb-4">
                <span className="font-bold text-slate-900 dark:text-white block mb-1">
                  Debt Offsetting Rule:
                </span>
                Any refund remains subject to ATO processing and may be applied against existing tax or other eligible government debts.
              </div>
              <p className="text-xs text-slate-500 dark:text-zinc-400 italic leading-relaxed">
                A late tax return accountant can help identify the relevant records, but cannot determine or guarantee the outcome before the return is properly prepared.
              </p>
            </div>
            <div className="mt-6 pt-5 border-t border-slate-100 dark:border-zinc-800">
              <span className="text-2xs font-semibold text-slate-500 dark:text-zinc-400 uppercase tracking-wider block">
                Ethical Practice: Transparent Assessments Without Speculation
              </span>
            </div>
          </div>
        </div>

        {/* 3 Possible Outcomes Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/70 dark:border-zinc-800 text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold mb-2">
              Outcome A
            </span>
            <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-1">
              A Tax Refund
            </h4>
            <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed">
              If more tax was withheld than your assessed liability, subject to any existing debts.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/70 dark:border-zinc-800 text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-800 dark:text-zinc-300 text-xs font-bold mb-2">
              Outcome B
            </span>
            <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-1">
              No Further Amount Payable
            </h4>
            <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed">
              A nil balance where withheld tax exactly matched your calculated liability.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/70 dark:border-zinc-800 text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 text-xs font-bold mb-2">
              Outcome C
            </span>
            <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-1">
              An Amount Payable
            </h4>
            <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed">
              A remaining tax liability where tax withheld was insufficient to cover taxable income.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
