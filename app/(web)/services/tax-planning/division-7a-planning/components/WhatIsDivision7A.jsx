"use client";

import React from "react";
import {
  BankOutlined,
  AuditOutlined,
  ExclamationCircleOutlined,
  CompassOutlined,
} from "@ant-design/icons";

/**
 * WhatIsDivision7A Component
 * ==========================
 * Section 1: Statutory definition of the Division 7A regime under ITAA 1936,
 * deemed unfranked dividends, distributable surplus caps, and ledger analysis.
 * Verbatim text from Page 9 of the Tax Planning document.
 */
export default function WhatIsDivision7A() {
  const corePrinciples = [
    {
      icon: <AuditOutlined className="text-2xl text-brand-primary dark:text-emerald-400" />,
      title: "Integrity Regime (ITAA 1936)",
      description:
        "Division 7A is an integrity regime in the Income Tax Assessment Act 1936.",
    },
    {
      icon: <ExclamationCircleOutlined className="text-2xl text-amber-600 dark:text-amber-400" />,
      title: "Deemed Unfranked Dividends",
      description:
        "In broad terms, it can treat certain private company payments, loans and forgiven debts to shareholders or their associates as unfranked dividends unless an exclusion or complying arrangement applies.",
    },
    {
      icon: <BankOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
      title: "Distributable Surplus Cap",
      description:
        "Any deemed dividend is generally limited by the private company’s distributable surplus.",
    },
    {
      icon: <CompassOutlined className="text-2xl text-purple-600 dark:text-purple-400" />,
      title: "Fact-Specific Ledger Review",
      description:
        "Not every transaction is a deemed dividend. The outcome depends on parties, timing, documentation, repayments, and actual cash movements.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-zinc-900 border-b border-slate-100 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-primary/10 text-brand-primary dark:bg-emerald-500/10 dark:text-emerald-400 mb-4 border border-brand-primary/20 dark:border-emerald-500/20">
            Regime Foundations
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            What Is Division 7A?
          </h2>
        </div>

        {/* Verbatim Content Paragraphs */}
        <div className="max-w-4xl mx-auto mb-14 space-y-6 text-slate-700 dark:text-zinc-300 text-base sm:text-lg leading-relaxed">
          <p className="bg-slate-50 dark:bg-zinc-800/60 p-6 sm:p-7 rounded-2xl border border-slate-200/80 dark:border-zinc-700/80 shadow-sm">
            Division 7A is an integrity regime in the Income Tax Assessment Act 1936. In broad terms, it can treat certain private company payments, loans and forgiven debts to shareholders or their associates as unfranked dividends unless an exclusion or complying arrangement applies. Any deemed dividend is generally limited by the private company’s distributable surplus.
          </p>
          <p className="bg-slate-50 dark:bg-zinc-800/60 p-6 sm:p-7 rounded-2xl border border-slate-200/80 dark:border-zinc-700/80 shadow-sm">
            Not every company-shareholder transaction is a Division 7A dividend. The outcome depends on the transaction, parties, timing, documentation, repayments and other provisions, so the actual ledger, agreements and cash movements need to be reviewed.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {corePrinciples.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50 dark:bg-zinc-800/50 rounded-2xl p-6 border border-slate-200/70 dark:border-zinc-700/60 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 flex items-center justify-center mb-5 border border-slate-200/80 dark:border-zinc-700/80 shadow-xs">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
