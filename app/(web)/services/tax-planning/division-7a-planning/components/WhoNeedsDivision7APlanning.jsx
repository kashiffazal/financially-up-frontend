"use client";

import React from "react";
import {
  BankOutlined,
  ShoppingOutlined,
  DollarCircleOutlined,
  CarOutlined,
  FileDoneOutlined,
  ApartmentOutlined,
  HistoryOutlined,
  CheckCircleFilled,
} from "@ant-design/icons";

/**
 * WhoNeedsDivision7APlanning Component
 * ====================================
 * Section 2: 7 trigger scenarios indicating when Division 7A planning
 * is essential for private companies, shareholders, and trusts.
 * Verbatim text from Page 9 of the Tax Planning document.
 */
export default function WhoNeedsDivision7APlanning() {
  const triggerScenarios = [
    {
      icon: <BankOutlined className="text-xl text-brand-primary dark:text-emerald-400" />,
      title: "Company Money Borrowed",
      text: "A shareholder or associate has borrowed money from a private company.",
    },
    {
      icon: <ShoppingOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Private Expenses Paid by Company",
      text: "Company funds have been used to pay private expenses.",
    },
    {
      icon: <DollarCircleOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Debit Balance Loan Accounts",
      text: "A director or shareholder loan account has a debit balance.",
    },
    {
      icon: <CarOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Company Assets for Private Use",
      text: "The company has provided an asset or other benefit for private use.",
    },
    {
      icon: <FileDoneOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Existing Loan Agreements & Repayments",
      text: "A Division 7A loan agreement already exists and minimum yearly repayments need to be reviewed.",
    },
    {
      icon: <ApartmentOutlined className="text-xl text-cyan-600 dark:text-cyan-400" />,
      title: "Trust & Corporate Beneficiary Interactions",
      text: "There are transactions between a trust and a private company beneficiary.",
    },
    {
      icon: <HistoryOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Unreconciled Prior-Year Balances",
      text: "Prior-year balances or journal entries need to be reconciled before deciding how Division 7A applies.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-primary/10 text-brand-primary dark:bg-emerald-500/10 dark:text-emerald-400 mb-4 border border-brand-primary/20 dark:border-emerald-500/20">
            Risk &amp; Trigger Assessment
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Who May Need Division 7A Planning?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
            Division 7A planning can be relevant where company funds or assets are used outside ordinary business transactions, or where loan balances with directors, shareholders or associates are building up.
          </p>
        </div>

        {/* 7 Scenario Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {triggerScenarios.map((item, idx) => (
            <div
              key={idx}
              className={`bg-white dark:bg-zinc-900 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between ${
                idx === 6 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-50 dark:bg-zinc-800 flex items-center justify-center border border-slate-200/80 dark:border-zinc-700 shadow-xs">
                    {item.icon}
                  </div>
                  <CheckCircleFilled className="text-emerald-500 text-lg" />
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
