"use client";

import React from "react";
import {
  LineChartOutlined,
  CompassOutlined,
  SafetyCertificateOutlined,
  WarningOutlined,
} from "@ant-design/icons";

/**
 * WhatInvestmentTaxAdviceCovers Component
 * =======================================
 * Section 1: Advisory scope, tax law application to investor transactions,
 * tax as one factor, and clear boundary from financial product advice.
 * Verbatim text from Page 12 of the Tax Planning document.
 */
export default function WhatInvestmentTaxAdviceCovers() {
  const corePrinciples = [
    {
      icon: <LineChartOutlined className="text-2xl text-brand-primary dark:text-emerald-400" />,
      title: "Transaction Tax Application",
      description:
        "Investment tax advice considers how the tax law applies to an investor’s actual or proposed transactions. The scope can include investment income, CGT, capital losses, cost-base records, ownership and timing.",
    },
    {
      icon: <CompassOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
      title: "Commercial Reality Beyond Tax",
      description:
        "Tax is only one factor in an investment decision. A lower-tax outcome is not automatically a better financial decision.",
    },
    {
      icon: <SafetyCertificateOutlined className="text-2xl text-purple-600 dark:text-purple-400" />,
      title: "Strict Tax Scope",
      description:
        "Financially Up’s service is limited to tax advice and does not include recommendations to buy, sell or hold specific financial products.",
    },
    {
      icon: <WarningOutlined className="text-2xl text-amber-600 dark:text-amber-400" />,
      title: "Licensed Adviser Boundaries",
      description:
        "Where financial product advice is needed, an appropriately authorised financial adviser may be required.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-zinc-900 border-b border-slate-100 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-primary/10 text-brand-primary dark:bg-emerald-500/10 dark:text-emerald-400 mb-4 border border-brand-primary/20 dark:border-emerald-500/20">
            Advisory Scope &amp; Foundations
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            What Does Investment Tax Advice Cover?
          </h2>
        </div>

        {/* Verbatim Content Paragraphs */}
        <div className="max-w-4xl mx-auto mb-14 space-y-6 text-slate-700 dark:text-zinc-300 text-base sm:text-lg leading-relaxed">
          <p className="bg-slate-50 dark:bg-zinc-800/60 p-6 sm:p-7 rounded-2xl border border-slate-200/80 dark:border-zinc-700/80 shadow-sm">
            Investment tax advice considers how the tax law applies to an investor’s actual or proposed transactions. The scope can include investment income, CGT, capital losses, cost-base records, ownership and the timing of transactions where timing is genuinely relevant to the tax outcome.
          </p>
          <p className="bg-slate-50 dark:bg-zinc-800/60 p-6 sm:p-7 rounded-2xl border border-slate-200/80 dark:border-zinc-700/80 shadow-sm">
            Tax is only one factor in an investment decision. A lower-tax outcome is not automatically a better financial decision. Financially Up’s service is limited to tax advice and does not include recommendations to buy, sell or hold specific financial products. Where financial product advice is needed, an appropriately authorised financial adviser may be required.
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
