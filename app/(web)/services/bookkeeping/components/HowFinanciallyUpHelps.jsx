"use client";

import React from "react";
import {
  FileTextOutlined,
  SyncOutlined,
  ClearOutlined,
  UsergroupAddOutlined,
  FileDoneOutlined,
  InteractionOutlined,
  ToolOutlined,
} from "@ant-design/icons";

/**
 * HowFinanciallyUpHelps Component
 * ===============================
 * Section 6: How Financially Up Can Help.
 * Outlines the 6 practical operational pillars of our bookkeeping services.
 * Background: Clean White.
 */
export default function HowFinanciallyUpHelps() {
  const servicePillars = [
    {
      icon: <SyncOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Day-to-Day Transaction Recording",
      description:
        "Consistent recording and classification of business sales, operating expenses, asset purchases, and bank fees within your agreed service scope.",
    },
    {
      icon: <FileTextOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Bank & Credit-Card Reconciliations",
      description:
        "Matching your live bank, credit-card, and merchant transactions against bank statements to ensure zero unaccounted-for differences.",
    },
    {
      icon: <ClearOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Review & File Clean-Up",
      description:
        "Investigating older suspense accounts, clearing uncleared cheques, fixing historical coding errors, and reconciling opening balances.",
    },
    {
      icon: <UsergroupAddOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Supplier & Customer Accounts (AP/AR)",
      description:
        "Assisting with accounts payable bill processing, supplier statement reconciliation, customer invoicing, and debtor aging reports.",
    },
    {
      icon: <FileDoneOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Preparation for BAS & Tax Work",
      description:
        "Structuring accounts and organizing source documentation so your accountant can lodge BAS and year-end tax returns without delays.",
    },
    {
      icon: <InteractionOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Coordinated Compliance Services",
      description:
        "Smooth integration with our separately scoped payroll, Single Touch Payroll (STP), BAS lodgement, and tax compliance offerings.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-800/60 mb-4">
            <ToolOutlined className="text-teal-600 dark:text-teal-400 text-xs sm:text-sm" />
            <span className="text-xs font-semibold text-teal-800 dark:text-teal-300 tracking-wide uppercase">
              Practical Support
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How Financially Up Can Help
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
            We review your current bookkeeping setup, identify areas that need clean-up, and agree on a practical scope for ongoing support. We work with the records you already have to establish a consistent, reliable financial workflow.
          </p>
        </div>

        {/* 6 Practical Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicePillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-slate-50/80 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-500/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-800 shadow-sm flex items-center justify-center mb-4">
                  {pillar.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
