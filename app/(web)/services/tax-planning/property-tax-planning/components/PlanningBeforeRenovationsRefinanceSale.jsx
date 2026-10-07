"use client";

import React from "react";
import { Tag } from "antd";
import {
  SwapOutlined,
  ToolOutlined,
  DollarOutlined,
  AuditOutlined,
  CheckCircleOutlined,
  WarningOutlined,
} from "@ant-design/icons";

/**
 * PlanningBeforeRenovationsRefinanceSale Component
 * ===============================================
 * Section 6: Planning before renovations, refinancing or a sale.
 * Verbatim text from Page 5 of '3rd Pillar Tax Planning & Advisory Final Content Pages 1-12.docx'.
 *
 * Explains why seeking tax advice before contracts are signed or loan funds are drawn
 * protects debt deductibility and avoids irreversible stamp duty and CGT liabilities.
 */
export default function PlanningBeforeRenovationsRefinanceSale() {
  const transactionTriggers = [
    {
      title: "Refinancing & Equity Redraws",
      desc: "Establishing dedicated sub-accounts to prevent mingling private debt with tax-deductible property borrowings.",
      icon: <DollarOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
    },
    {
      title: "Substantial Renovations & Additions",
      desc: "Distinguishing between immediate repairs, capital works (Division 43), and plant depreciation before works commence.",
      icon: <ToolOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
    },
    {
      title: "Ownership Interest Transfers",
      desc: "Evaluating stamp duty, legal conveyance, lending covenants, and market-value CGT events prior to changing title.",
      icon: <SwapOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
    },
    {
      title: "Moving In or Converting Usage",
      desc: "Obtaining formal valuations to set new CGT cost-base baselines and assessing 6-year temporary absence rules.",
      icon: <AuditOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Transaction Timing
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Planning Before Renovations, Refinancing or a Sale
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Tax advice for property investors is often most useful before a transaction. Refinancing, drawing down additional funds, renovating, moving into a rental property or transferring an ownership interest can affect tax treatment, future records and calculations. An ownership transfer may itself have CGT, duty, legal and lending consequences, depending on the facts and jurisdiction.
          </p>
          <p className="mt-3 text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
            A planning review can help separate private and investment borrowing, identify documentation to retain and flag matters that should be clarified before contracts are signed or funds are moved. It cannot guarantee a tax saving, and tax should be considered alongside commercial, lending and legal factors.
          </p>
        </div>

        {/* 4 Transaction Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10">
          {transactionTriggers.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:border-emerald-400/60 transition-colors flex items-start gap-4"
            >
              <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center shrink-0">
                {item.icon}
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

        {/* Commercial Balance Warning Box */}
        <div className="rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/50 p-5 sm:p-6 flex items-start gap-3.5 w-full">
          <WarningOutlined className="text-amber-600 dark:text-amber-400 text-lg mt-0.5 shrink-0" />
          <p className="text-xs sm:text-sm text-amber-900 dark:text-amber-200 leading-relaxed font-normal">
            <strong>Commercial &amp; Legal Prudence:</strong> Tax planning cannot guarantee a tax saving, and tax outcomes must always be evaluated alongside commercial feasibility, lending borrowing capacity, and legal property title requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
