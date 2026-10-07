"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileTextOutlined,
  CheckCircleOutlined,
  DollarOutlined,
  CalculatorOutlined,
  WarningOutlined,
} from "@ant-design/icons";

/**
 * HighIncomeDeductionsAndRecords Component
 * ========================================
 * Section 3: Income, deductions and records.
 * Verbatim text from Page 4 of '3rd Pillar Tax Planning & Advisory Final Content Pages 1-12.docx'.
 *
 * Emphasizes direct employment nexus, non-reimbursement rules, timing, documentation,
 * and separate specialized calculations for CGT, foreign income, and ESS.
 */
export default function HighIncomeDeductionsAndRecords() {
  const specializedCalculations = [
    {
      title: "Employee Share Schemes (ESS)",
      desc: "Distinguishing between taxing point discounts, market valuations, and subsequent CGT cost bases upon disposal.",
    },
    {
      title: "Foreign Income & Tax Offsets",
      desc: "Navigating foreign employment income, offshore investment returns, Double Tax Agreements, and foreign tax credits (FITO).",
    },
    {
      title: "Capital Gains Tax Events",
      desc: "Reconciling contract signing dates, incidental costs, indexation or discount methods, and carried-forward losses.",
    },
    {
      title: "Multi-Source Withholding Interactions",
      desc: "Evaluating whether PAYG withholding across concurrent salary, bonuses, and investment yields leaves a shortfall.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Documentation &amp; Interaction
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Income, Deductions and Records
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            For employees, deductions generally need a direct connection to earning employment income, must not have been reimbursed and need appropriate records. Planning is therefore as much about documentation and timing as it is about identifying possible deductions.
          </p>
          <p className="mt-3 text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
            Where income comes from several sources, we can review how those amounts may interact in the tax return and what records should be retained. A high income tax adviser can also help identify items that require separate calculations, such as capital gains, foreign income or employee share scheme amounts.
          </p>
        </div>

        {/* 4 Specialized Calculation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10">
          {specializedCalculations.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:border-emerald-400/60 transition-colors flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center shrink-0">
                <CalculatorOutlined className="text-brand-primary dark:text-emerald-400 text-lg" />
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

        {/* Substantiation Principle Notice */}
        <div className="rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/50 p-5 sm:p-6 flex items-start gap-3.5 w-full">
          <WarningOutlined className="text-amber-600 dark:text-amber-400 text-lg mt-0.5 shrink-0" />
          <p className="text-xs sm:text-sm text-amber-900 dark:text-amber-200 leading-relaxed font-normal">
            <strong>Substantiation Notice for Executives:</strong> Reimbursed corporate expenses cannot be claimed as individual deductions. All occupational, self-education, home office, and travel claims must demonstrate a direct income nexus and be substantiated with compliant tax receipts and logbooks.
          </p>
        </div>
      </div>
    </section>
  );
}
