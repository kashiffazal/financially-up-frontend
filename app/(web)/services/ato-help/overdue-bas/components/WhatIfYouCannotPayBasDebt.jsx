"use client";

import React from "react";
import Link from "next/link";
import {
  DollarOutlined,
  ReconciliationOutlined,
  CalendarOutlined,
  ArrowRightOutlined,
  WarningOutlined,
} from "@ant-design/icons";

/**
 * WhatIfYouCannotPayBasDebt Component
 * ===================================
 * Section 5: Uncoupling lodgment obligations from immediate cash flow constraints,
 * GIC accrual consequences, and establishing structured ATO debt payment arrangements.
 */
export default function WhatIfYouCannotPayBasDebt() {
  const principles = [
    {
      title: "Lodgement vs Payment Separation",
      description:
        "Lodgment and payment are separate obligations. It can still be important to lodge an accurate BAS even when the full amount cannot be paid immediately. Once the activity statements are up to date, the actual account balance is clearer and payment options can be considered on the correct figures.",
      icon: <ReconciliationOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
    },
    {
      title: "Daily Compounding Interest (GIC)",
      description:
        "Amounts that remain unpaid after their due date generally attract general interest charge, calculated daily on a compounding basis. (Note: from 1 July 2025, newly incurred GIC is no longer tax deductible).",
      icon: <DollarOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
    },
    {
      title: "Ongoing Compliance Conditions",
      description:
        "A standard payment plan does not stop GIC from accruing and does not remove the need to keep future lodgments and payments current. New quarterly BAS liabilities must be funded separately.",
      icon: <CalendarOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-2">
            Debt & Cash-Flow Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            What if you cannot pay the BAS debt?
          </h2>
          <div className="mt-6 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed space-y-4">
            <p>
              Lodgment and payment are separate obligations. It can still be important to lodge an accurate BAS even when the full amount cannot be paid immediately. Once the activity statements are up to date, the actual account balance is clearer and payment options can be considered on the correct figures.
            </p>
            <p>
              Amounts that remain unpaid after their due date generally attract general interest charge, calculated daily on a compounding basis. If overdue BAS has created or increased an ATO debt, our ATO debt service can address the debt and payment side separately. A standard payment plan does not stop GIC from accruing and does not remove the need to keep future lodgments and payments current.
            </p>
          </div>
        </div>

        {/* 3 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {principles.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 hover:border-emerald-500 dark:hover:border-emerald-500 shadow-sm transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Debt Help Practice Link */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-blue-500/10 border border-emerald-500/20 dark:border-emerald-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3">
            <WarningOutlined className="text-2xl text-emerald-600 dark:text-emerald-400 mt-1 sm:mt-0 flex-shrink-0" />
            <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-200">
              Need to negotiate an instalment plan for accumulated BAS liabilities? Visit our dedicated{" "}
              <strong className="text-slate-900 dark:text-white font-semibold">ATO Payment Plan Help practice</strong>{" "}
              for sustainable cash-flow proposals.
            </p>
          </div>
          <Link
            href="/services/ato-help/payment-plans"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 whitespace-nowrap self-start sm:self-auto"
          >
            Review Payment Plans Practice <ArrowRightOutlined />
          </Link>
        </div>
      </div>
    </section>
  );
}
