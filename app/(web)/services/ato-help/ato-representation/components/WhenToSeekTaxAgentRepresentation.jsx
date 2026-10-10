"use client";

import React from "react";
import {
  MailOutlined,
  CalendarOutlined,
  BankOutlined,
  AuditOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";

/**
 * WhenToSeekTaxAgentRepresentation Component
 * ==========================================
 * Section 2: 5 key trigger scenarios where taxpayers seek registered agent representation:
 * unclear notices, multi-year backlogs, debt planning, audit defense, and adviser transitions.
 */
export default function WhenToSeekTaxAgentRepresentation() {
  const triggerScenarios = [
    {
      title: "ATO Letters & Secure Messages",
      desc: "ATO letters or secure messages that require a response or supporting information",
      icon: <MailOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
    },
    {
      title: "Overdue Returns & Registrations",
      desc: "outstanding returns, activity statements or tax registrations that need to be brought up to date",
      icon: <CalendarOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
    },
    {
      title: "Tax Debts & Payment Arrangements",
      desc: "tax debts, payment arrangements or account issues that need to be reviewed before contacting the ATO",
      icon: <BankOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
    },
    {
      title: "ATO Reviews & Audits",
      desc: "ATO reviews, audits or verification requests where accounting and tax records need to be organized",
      icon: <AuditOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
    },
    {
      title: "Adviser Transitions & Authorizations",
      desc: "changes of accountant or registered tax agent where ATO access and authorizations need to be established correctly.",
      icon: <UserSwitchOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-2">
            Engagement Scenarios
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            When might you want a tax agent to deal with the ATO?
          </h2>
          <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
            People commonly seek tax agent ATO assistance when a notice is unclear, several obligations are outstanding, tax debt is involved or an ATO query remains unresolved. Business owners may also want one contact point where bookkeeping, BAS, income tax, PAYG or company matters intersect.
          </p>
        </div>

        {/* 5 Scenarios Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {triggerScenarios.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 hover:border-emerald-500 dark:hover:border-emerald-500 shadow-sm transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between ${
                idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
