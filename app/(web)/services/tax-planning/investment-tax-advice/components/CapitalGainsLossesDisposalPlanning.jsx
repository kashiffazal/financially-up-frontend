"use client";

import React from "react";
import Link from "next/link";
import {
  SafetyOutlined,
  CalculatorOutlined,
  HistoryOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * CapitalGainsLossesDisposalPlanning Component
 * ============================================
 * Section 4: Capital gains, capital losses, disposal planning, loss quarantining,
 * 50% discount conditions, and cross-link to Capital Gains Tax service.
 * Verbatim text from Page 12 of the Tax Planning document.
 */
export default function CapitalGainsLossesDisposalPlanning() {
  const cgtCards = [
    {
      title: "CGT Events & Cost Base Calculation",
      icon: <CalculatorOutlined className="text-2xl text-brand-primary dark:text-emerald-400" />,
      text: "A sale or other disposal of an investment can trigger a CGT event. The resulting capital gain or loss depends on matters such as capital proceeds, cost base, ownership, acquisition history and the specific CGT rules that apply.",
    },
    {
      title: "Loss Quarantining & Discount Eligibility",
      icon: <SafetyOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
      text: "Capital losses are generally applied against capital gains rather than salary or other ordinary income. Individuals and some trusts may be eligible for the CGT discount for qualifying assets held for at least 12 months, but eligibility depends on the taxpayer, asset and circumstances.",
    },
    {
      title: "Pre-Disposal Strategy & Record Review",
      icon: <HistoryOutlined className="text-2xl text-purple-600 dark:text-purple-400" />,
      text: "Planning before a disposal can help identify missing cost-base records, carried-forward capital losses and other issues before the transaction is completed.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-100 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-primary/10 text-brand-primary dark:bg-emerald-500/10 dark:text-emerald-400 mb-4 border border-brand-primary/20 dark:border-emerald-500/20">
            Capital Gains Tax &amp; Disposals
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Capital Gains, Capital Losses and Disposal Planning
          </h2>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {cgtCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-800 flex items-center justify-center mb-5 border border-slate-100 dark:border-zinc-700">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-slate-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Cross-Service Banner */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-zinc-900 dark:to-zinc-800/80 rounded-2xl p-6 sm:p-8 border border-blue-200 dark:border-blue-800/40 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 block mb-1">
                CGT Calculation &amp; Compliance
              </span>
              <p className="text-slate-700 dark:text-zinc-200 text-base font-medium leading-relaxed">
                Planning before a disposal can help identify missing cost-base records, carried-forward capital losses and other issues before the transaction is completed. For detailed CGT calculation and reporting, see our Capital Gains Tax service.
              </p>
            </div>
            <Link
              href="/services/individual-tax/capital-gains-tax"
              className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-sm hover:shadow shrink-0 group"
            >
              Capital Gains Tax Service
              <ArrowRightOutlined className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
