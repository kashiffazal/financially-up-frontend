"use client";

import React from "react";
import { Tag } from "antd";
import {
  CalendarOutlined,
  ClockCircleOutlined,
  WarningOutlined,
  CheckCircleOutlined,
  FileTextOutlined,
} from "@ant-design/icons";

/**
 * PlanningBeforeYearEnd Component
 * ===============================
 * Section 3: Planning Before the End of the Financial Year.
 * Verbatim text from Page 3 of '3rd Pillar Tax Planning & Advisory Final Content Pages 1-12.docx'.
 *
 * Explains the reality of timing around 30 June, emphasizing legitimate transactions,
 * contract dates, and avoiding artificial expenses solely to create deductions.
 */
export default function PlanningBeforeYearEnd() {
  const timingPoints = [
    {
      title: "Expense Incurrence & Deduction Timing",
      desc: "Certain deductions require the expense to be genuinely incurred before 30 June with supporting receipts.",
    },
    {
      title: "Contract Date vs Settlement Timing",
      desc: "For property and shares, CGT event dates are determined by the contract signing date, not final settlement.",
    },
    {
      title: "Income Derivation & Bonus Timing",
      desc: "Understanding whether employment earnings, distributions, or interest are assessable in the current income year.",
    },
    {
      title: "Statutory Documentation Deadlines",
      desc: "Elections, trustee resolutions, and notices of intent have strict legal deadlines that cannot be backdated.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Year-End Strategy
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Planning Before the End of the Financial Year
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A pre-year-end review can be useful because some tax outcomes depend on when an expense is incurred, when income is derived, when a contract is entered into or whether required documentation is completed in time. However, 30 June is not the only relevant date, and the correct timing depends on the transaction.
          </p>
          <p className="mt-3 text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
            Income tax planning should therefore focus on real transactions and current evidence, not on creating expenses solely for a deduction. Financially Up can review the expected position and explain which matters may need action, documentation or separate advice.
          </p>
        </div>

        {/* 4 Timing Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10">
          {timingPoints.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:border-emerald-400/60 transition-colors flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center shrink-0">
                <CalendarOutlined className="text-brand-primary dark:text-emerald-400 text-lg" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 font-normal leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Warning Callout Box */}
        <div className="rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/50 p-5 sm:p-6 flex items-start gap-3.5 w-full">
          <WarningOutlined className="text-amber-600 dark:text-amber-400 text-lg mt-0.5 shrink-0" />
          <p className="text-xs sm:text-sm text-amber-900 dark:text-amber-200 leading-relaxed font-normal">
            <strong>Substance Over Artificial Deductions:</strong> Australian tax law requires expenses to reflect genuine commercial reality. Tax planning focuses on legitimate timing, compliant documentation, and existing evidence—not on generating artificial expenses purely to reduce tax.
          </p>
        </div>
      </div>
    </section>
  );
}
