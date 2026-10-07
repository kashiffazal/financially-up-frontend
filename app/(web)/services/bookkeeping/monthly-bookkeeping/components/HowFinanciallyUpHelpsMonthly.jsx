"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  BankOutlined,
  CheckCircleOutlined,
  QuestionCircleOutlined,
  TagsOutlined,
  FolderOpenOutlined,
  InteractionOutlined,
  ArrowRightOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

/**
 * HowFinanciallyUpHelpsMonthly Component
 * =====================================
 * Section 5: How Financially Up Can Help Each Month
 * Features 100% complete, verbatim content from Page 3 of client docx.
 */
export default function HowFinanciallyUpHelpsMonthly() {
  const serviceActions = [
    {
      icon: <BankOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Reconcile agreed bank and credit-card accounts",
      desc: "Balancing all designated business transaction feeds against official statement balances each month.",
    },
    {
      icon: <CheckCircleOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Process and review bookkeeping transactions within scope",
      desc: "Recording sales, operational bills, expense receipts, and recurring debtor payments accurately.",
    },
    {
      icon: <QuestionCircleOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Identify unclear or missing items for follow-up",
      desc: "Flagging unexplained withdrawals or missing tax invoices before the monthly close is finalized.",
    },
    {
      icon: <TagsOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Maintain more consistent coding across recurring transactions",
      desc: "Applying uniform chart-of-accounts rules and verified GST codes across regular suppliers and software subscriptions.",
    },
    {
      icon: <FolderOpenOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Organise the accounting file for ongoing reporting and compliance",
      desc: "Keeping accounts clean, structured, and auditable for executive management reviews and external parties.",
    },
    {
      icon: <InteractionOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Coordinate with separately scoped BAS, tax, payroll or accounting services where relevant",
      desc: "Ensuring your monthly bookkeeping forms a solid base for scheduled quarterly activity statements and annual tax returns.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Monthly Deliverables
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How Financially Up can help each month
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            We operate as your reliable virtual bookkeeping team, delivering steady maintenance and verified ledger balances.
          </p>
        </div>

        {/* 6 Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {serviceActions.map((action, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-lg hover:border-emerald-400/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center">
                    {action.icon}
                  </div>
                  <span className="text-[11px] font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest">
                    Step 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  {action.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {action.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Tailored Scope Note */}
        <div className="p-6 sm:p-7 rounded-2xl bg-slate-50 dark:bg-zinc-950 border border-slate-200/80 dark:border-zinc-800 flex items-start gap-3 sm:gap-4">
          <InfoCircleOutlined className="text-brand-primary dark:text-emerald-400 text-lg mt-0.5 shrink-0" />
          <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            <strong>Tailored to Your Operations:</strong> The service is tailored to the agreed scope. A low-volume sole trader may need a simpler process than a business with several accounts, employees and high transaction volume.
          </p>
        </div>
      </div>
    </section>
  );
}
