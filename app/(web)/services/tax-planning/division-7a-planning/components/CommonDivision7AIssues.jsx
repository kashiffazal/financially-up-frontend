"use client";

import React from "react";
import {
  ShoppingOutlined,
  CalendarOutlined,
  FileProtectOutlined,
  CalculatorOutlined,
  FileDoneOutlined,
  CarOutlined,
  ApartmentOutlined,
  HistoryOutlined,
} from "@ant-design/icons";

/**
 * CommonDivision7AIssues Component
 * =================================
 * Section 5: 8 recurring Division 7A compliance issues identified during
 * ledger audits and year-end tax planning reviews.
 * Verbatim text from Page 9 of the Tax Planning document.
 */
export default function CommonDivision7AIssues() {
  const issues = [
    {
      number: "01",
      icon: <ShoppingOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Private Expenses Paid by Company",
      text: "Private company payments made for a shareholder’s or associate’s private expenses.",
    },
    {
      number: "02",
      icon: <CalendarOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Unrepaid Loans at Lodgement Date",
      text: "Loan balances that have not been fully repaid by the relevant lodgement date.",
    },
    {
      number: "03",
      icon: <FileProtectOutlined className="text-xl text-brand-primary dark:text-emerald-400" />,
      title: "Agreement Timing & Statutory Terms",
      text: "Whether a written loan agreement was entered into on time and meets the statutory requirements.",
    },
    {
      number: "04",
      icon: <CalculatorOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Minimum Yearly Repayments Verification",
      text: "Whether minimum yearly repayments have actually been made and correctly recorded.",
    },
    {
      number: "05",
      icon: <FileDoneOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Non-Cash Journal Entries",
      text: "Journal entries that do not reflect a genuine repayment or cash movement.",
    },
    {
      number: "06",
      icon: <CarOutlined className="text-xl text-cyan-600 dark:text-cyan-400" />,
      title: "Company Assets Used Privately",
      text: "Use of company-owned assets for private purposes.",
    },
    {
      number: "07",
      icon: <ApartmentOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Interposed Entities & Trust Structures",
      text: "Interposed entity or trust arrangements that require more detailed review.",
    },
    {
      number: "08",
      icon: <HistoryOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Older Unreconciled Loan Accounts",
      text: "Older loan accounts where the underlying transactions are unclear.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-zinc-900 border-b border-slate-100 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-primary/10 text-brand-primary dark:bg-emerald-500/10 dark:text-emerald-400 mb-4 border border-brand-primary/20 dark:border-emerald-500/20">
            Compliance Checklist
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Common Division 7A Issues to Review
          </h2>
        </div>

        {/* 8 Issues Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {issues.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 dark:bg-zinc-800/40 rounded-2xl p-6 border border-slate-200/80 dark:border-zinc-700/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 flex items-center justify-center border border-slate-200/80 dark:border-zinc-700 shadow-xs">
                    {item.icon}
                  </div>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-slate-200/70 dark:bg-zinc-700 text-slate-700 dark:text-zinc-300">
                    {item.number}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
