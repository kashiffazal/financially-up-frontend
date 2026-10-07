"use client";

import React from "react";
import {
  PercentageOutlined,
  DollarCircleOutlined,
  FileProtectOutlined,
  ExclamationCircleOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * StreamingCapitalGainsAndFrankedDistributions Component
 * =======================================================
 * Section 4: Specific entitlement statutory rules (Subdivisions 115-C and 207-B),
 * trust deed permissions, character retention, and separate CGT analysis.
 * Verbatim text from Page 10 of the Tax Planning document.
 */
export default function StreamingCapitalGainsAndFrankedDistributions() {
  const streamingRules = [
    {
      icon: <FileProtectOutlined className="text-xl text-brand-primary dark:text-emerald-400" />,
      title: "Trust Deed Authorization",
      desc: "The trust deed must explicitly permit the streaming of specific classes of income and capital gains to separate beneficiaries.",
    },
    {
      icon: <PercentageOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Specific Entitlement Documentation",
      desc: "Statutory requirements for specific entitlement must be strictly satisfied and documented in the trustee resolution before 30 June (or deed deadline).",
    },
    {
      icon: <DollarCircleOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Financial Benefit Alignment",
      desc: "The net financial benefit must be genuinely allocated to the beneficiary receiving the capital gain or franked dividend for tax purposes.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-primary/10 text-brand-primary dark:bg-emerald-500/10 dark:text-emerald-400 mb-4 border border-brand-primary/20 dark:border-emerald-500/20">
            Streaming Rules &amp; Specific Entitlement
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Streaming Capital Gains and Franked Distributions
          </h2>
        </div>

        {/* Verbatim Paragraph 1 */}
        <div className="max-w-4xl mx-auto mb-10 bg-white dark:bg-zinc-900 p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 text-base sm:text-lg leading-relaxed shadow-sm">
          Capital gains and franked distributions can sometimes be streamed to particular beneficiaries for tax purposes, but this is not automatic. The trust deed must permit the relevant treatment and the statutory requirements for specific entitlement must be satisfied and properly recorded.
        </div>

        {/* 3 Criteria Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {streamingRules.map((rule, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-slate-200/70 dark:border-zinc-800 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-zinc-800 flex items-center justify-center mb-4 border border-slate-200/80 dark:border-zinc-700 shadow-xs">
                  {rule.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {rule.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                  {rule.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Paragraph 2 on Character Retention */}
        <div className="max-w-4xl mx-auto mb-8 bg-white dark:bg-zinc-900 p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 text-base sm:text-lg leading-relaxed shadow-sm">
          Other categories of trust income do not necessarily retain their character in the same way. Before relying on streaming, the trustee should review the deed, the financial benefit allocated to the beneficiary and the timing and documentation requirements that apply.
        </div>

        {/* Verbatim Paragraph 3 on Material Capital Gains */}
        <div className="max-w-4xl mx-auto bg-amber-50/70 dark:bg-amber-950/20 rounded-2xl p-6 sm:p-7 border border-amber-200/80 dark:border-amber-800/50">
          <div className="flex items-start gap-4">
            <ExclamationCircleOutlined className="text-2xl text-amber-600 dark:text-amber-400 mt-1 shrink-0" />
            <div className="space-y-2 text-slate-700 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
              <h3 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg">
                Material Capital Gains Require Separate Analysis
              </h3>
              <p>
                If the trust has material capital gains, the tax consequences may also need separate capital gains tax analysis rather than being treated as a routine distribution decision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
