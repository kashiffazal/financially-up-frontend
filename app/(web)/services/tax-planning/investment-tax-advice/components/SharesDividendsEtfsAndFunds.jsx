"use client";

import React from "react";
import Link from "next/link";
import {
  PieChartOutlined,
  FileDoneOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * SharesDividendsEtfsAndFunds Component
 * =====================================
 * Section 3: Shares, franked dividends, ETF and managed fund distributions,
 * AMMA statements, cost-base adjustments and cross-link to Share Trading service.
 * Verbatim text from Page 12 of the Tax Planning document.
 */
export default function SharesDividendsEtfsAndFunds() {
  const assetTypes = [
    {
      title: "Direct Shares & Dividend Franking",
      icon: <PieChartOutlined className="text-2xl text-brand-primary dark:text-emerald-400" />,
      text: "Investment income can be reported differently depending on the asset. Dividends may be franked, partly franked or unfranked. Where franking credits are attached, the dividend and credit are generally taken into account in the tax return, subject to the relevant rules and eligibility requirements.",
      tags: ["Franking Credits", "Unfranked Dividends", "Tax Offsets", "Dividend Imputation"],
    },
    {
      title: "ETFs & Managed Fund Distributions",
      icon: <FileDoneOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
      text: "ETFs and managed funds can distribute several tax components in one year, including ordinary income, capital gains, foreign income and franking credits. Annual tax statements or AMMA statements can also contain cost-base adjustment information that affects a later disposal.",
      tags: ["AMMA Statements", "Capital Gain Components", "Foreign Income", "Cost-Base Adjustments"],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-zinc-900 border-b border-slate-100 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-primary/10 text-brand-primary dark:bg-emerald-500/10 dark:text-emerald-400 mb-4 border border-brand-primary/20 dark:border-emerald-500/20">
            Equities &amp; Managed Investments
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Shares, Dividends, ETFs and Managed Funds
          </h2>
        </div>

        {/* 2 Main Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {assetTypes.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50 dark:bg-zinc-800/50 rounded-2xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-700/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 flex items-center justify-center mb-6 border border-slate-200/80 dark:border-zinc-700 shadow-xs">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-zinc-300 text-base leading-relaxed mb-6">
                  {item.text}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200/60 dark:border-zinc-700/60">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-md bg-white dark:bg-zinc-900 text-slate-700 dark:text-zinc-300 border border-slate-200 dark:border-zinc-700"
                    >
                      <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 mr-1.5" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cross-Service Callout Banner */}
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-zinc-800/80 dark:to-zinc-800/50 rounded-2xl p-6 sm:p-8 border border-emerald-200 dark:border-emerald-800/40 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-primary dark:text-emerald-400 block mb-1">
                Annual Tax-Return Compliance
              </span>
              <p className="text-slate-700 dark:text-zinc-200 text-base font-medium leading-relaxed">
                If your main need is annual tax-return preparation for shares and investment income, our Share Trading &amp; Investment Accountant service covers that reporting work in more detail.
              </p>
            </div>
            <Link
              href="/services/individual-tax/share-trading-investment-accountant"
              className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-brand-primary hover:bg-brand-secondary text-white font-semibold text-sm transition-all shadow-sm hover:shadow shrink-0 group"
            >
              Share Trading Service
              <ArrowRightOutlined className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
