"use client";

import React from "react";
import {
  FileTextOutlined,
  FundOutlined,
  TeamOutlined,
  BankOutlined,
  AuditOutlined,
  RiseOutlined,
  UserSwitchOutlined,
  BookOutlined,
  SmileOutlined,
} from "@ant-design/icons";

/**
 * WhatInformationUsefulForReview Component
 * ========================================
 * Section 7: 8-point document and business information checklist
 * for existing businesses and new ventures.
 * Verbatim text from Page 6 of the Tax Planning document.
 */
export default function WhatInformationUsefulForReview() {
  const checklist = [
    {
      icon: <UserSwitchOutlined className="text-xl text-brand-primary dark:text-emerald-400" />,
      title: "Current Ownership Details",
      desc: "Names of owners, percentage shares, director appointments and trustee roles.",
    },
    {
      icon: <FileTextOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Financial Reports & Statements",
      desc: "Recent profit and loss statements, balance sheets or current management accounts.",
    },
    {
      icon: <FundOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Revenue & Profit Expectations",
      desc: "Historical turnover, current run-rates, and forward revenue and profit forecasts.",
    },
    {
      icon: <TeamOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Employee Arrangements",
      desc: "Staff count, contractor agreements, payroll summaries, and super obligations.",
    },
    {
      icon: <BankOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Major Assets & Liabilities",
      desc: "Plant, equipment, vehicles, commercial real estate, loan schedules, and creditor balances.",
    },
    {
      icon: <AuditOutlined className="text-xl text-cyan-600 dark:text-cyan-400" />,
      title: "Current Registrations",
      desc: "ABN, TFN, GST status, PAYG withholding branch, and business name registrations.",
    },
    {
      icon: <RiseOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Planned Investments & Changes",
      desc: "Capital expenditure, upcoming investor rounds, and proposed future ownership changes.",
    },
    {
      icon: <BookOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Governing Documents",
      desc: "Existing company constitution, partnership agreements, or discretionary/unit trust deeds.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-zinc-900 border-b border-slate-100 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-primary/10 text-brand-primary dark:bg-emerald-500/10 dark:text-emerald-400 mb-4 border border-brand-primary/20 dark:border-emerald-500/20">
            Preparation Checklist
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            What Information Is Useful for a Structure Review?
          </h2>
        </div>

        {/* Verbatim Lead Paragraph */}
        <div className="max-w-4xl mx-auto mb-12 bg-slate-50 dark:bg-zinc-800/60 p-6 sm:p-7 rounded-2xl border border-slate-200/80 dark:border-zinc-700/80 text-slate-700 dark:text-zinc-300 text-base sm:text-lg leading-relaxed shadow-sm">
          Useful information can include current ownership details, recent financial statements or management reports, expected revenue and profit, employee arrangements, major business assets and liabilities, current registrations, planned investments, future ownership changes and any existing company, partnership or trust documents. For a new business, estimates and a clear description of the proposed operations can be enough to begin the discussion.
        </div>

        {/* 8-Item Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {checklist.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 dark:bg-zinc-800/40 rounded-2xl p-6 border border-slate-200/70 dark:border-zinc-700/60 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 flex items-center justify-center mb-4 border border-slate-200/80 dark:border-zinc-700 shadow-xs">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* New Business Guidance Callout */}
        <div className="max-w-4xl mx-auto bg-brand-primary/5 dark:bg-emerald-950/20 border border-brand-primary/20 dark:border-emerald-800/40 rounded-2xl p-6 sm:p-7 flex items-start gap-4">
          <SmileOutlined className="text-2xl text-brand-primary dark:text-emerald-400 mt-1 shrink-0" />
          <div className="text-slate-700 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
            <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">
              Starting a Brand-New Venture?
            </h3>
            <p>
              You do not need historical records to begin. For a new business, realistic estimates and a clear description of the proposed commercial operations are sufficient to start comparing options.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
