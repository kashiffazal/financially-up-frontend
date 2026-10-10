"use client";

import React from "react";
import {
  HistoryOutlined,
  ReconciliationOutlined,
  AuditOutlined,
  FileDoneOutlined,
  CloudUploadOutlined,
  BankOutlined,
} from "@ant-design/icons";

/**
 * HowBasCatchUpServiceWorks Component
 * ===================================
 * Section 3: 6-stage sequential process for clearing overdue business activity statements:
 * history confirmation, bookkeeping catch-up, GST audit, approval, lodgement, and debt resolution.
 */
export default function HowBasCatchUpServiceWorks() {
  const processSteps = [
    {
      num: "1",
      title: "Audit Lodgement History",
      desc: "confirm which activity statements are outstanding and whether any periods have already been lodged or ATO-finalized",
      icon: <HistoryOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
    },
    {
      num: "2",
      title: "Reconcile Bookkeeping",
      desc: "bring bookkeeping and reconciliations up to date where necessary",
      icon: <ReconciliationOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
    },
    {
      num: "3",
      title: "Technical Tax & GST Review",
      desc: "review GST coding, sales, purchases, payroll and other BAS labels relevant to the business",
      icon: <AuditOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
    },
    {
      num: "4",
      title: "Preparation & Client Approval",
      desc: "prepare each overdue BAS using the available records and obtain client approval for lodgment",
      icon: <FileDoneOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
    },
    {
      num: "5",
      title: "Sequential Lodgement",
      desc: "lodge the outstanding statements and review the resulting ATO account position",
      icon: <CloudUploadOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
    },
    {
      num: "6",
      title: "Debt & Penalty Separation",
      desc: "identify any further debt, penalty, payment-plan or registration work that should be handled separately.",
      icon: <BankOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-2">
            Structured Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            How does a BAS catch up service work?
          </h2>
          <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
            A catch-up engagement is normally handled in stages so the figures remain traceable and later periods are not built on incorrect opening balances. Financially Up may first review the ATO activity statement history, accounting file, bank reconciliations and payroll records. We then identify the missing work and prepare the overdue periods in sequence.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 hover:border-emerald-500 dark:hover:border-emerald-500 shadow-sm transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <span className="text-sm font-black text-slate-300 dark:text-zinc-700 font-mono">
                    Step 0{step.num}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
