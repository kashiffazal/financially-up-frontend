"use client";

import React from "react";
import {
  SwapOutlined,
  SafetyCertificateOutlined,
  ExclamationCircleOutlined,
  CalculatorOutlined,
  AuditOutlined,
} from "@ant-design/icons";

/**
 * TaxImplicationsOfRestructuring Component
 * ========================================
 * Section 2: Asset transfer tax triggers (CGT, balancing adjustments, trading stock, GST),
 * Small Business Restructure Rollover (SBRR) eligibility, and state duty variations.
 * Verbatim text from Page 11 of the Tax Planning document.
 */
export default function TaxImplicationsOfRestructuring() {
  const taxTriggers = [
    {
      icon: <CalculatorOutlined className="text-xl text-brand-primary dark:text-emerald-400" />,
      title: "CGT Events on Transfer",
      desc: "Transferring active assets, goodwill, or shares from one entity to another triggers CGT events A1 or other disposals.",
    },
    {
      icon: <AuditOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Depreciating Assets & Stock",
      desc: "Balancing adjustments on plant and equipment depreciation, plus trading-stock transfer valuations.",
    },
    {
      icon: <SwapOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "GST & Going Concern Status",
      desc: "Determining whether asset sales constitute a GST-free supply of a going concern or attract GST liabilities.",
    },
    {
      icon: <SafetyCertificateOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "State & Territory Duties",
      desc: "Stamp duty on real estate, business assets, and vehicle transfers varies substantially across Australian states.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-primary/10 text-brand-primary dark:bg-emerald-500/10 dark:text-emerald-400 mb-4 border border-brand-primary/20 dark:border-emerald-500/20">
            Tax &amp; Duty Frameworks
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            What Are the Tax Implications of Restructuring?
          </h2>
        </div>

        {/* Verbatim Paragraph 1 */}
        <div className="max-w-4xl mx-auto mb-10 bg-white dark:bg-zinc-900 p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 text-base sm:text-lg leading-relaxed shadow-sm">
          A restructure can involve the transfer of business assets or interests from one taxpayer to another. Depending on the facts, that can trigger CGT events, balancing adjustments for depreciating assets, trading-stock consequences, GST issues and state or territory duties.
        </div>

        {/* 4 Tax Triggers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-10">
          {taxTriggers.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-slate-200/70 dark:border-zinc-800 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-zinc-800 flex items-center justify-center mb-4 border border-slate-200/80 dark:border-zinc-700 shadow-xs">
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

        {/* Verbatim Paragraph 2 on Small Business Restructure Roll-Over (SBRR) */}
        <div className="max-w-4xl mx-auto mb-8 bg-emerald-50/60 dark:bg-emerald-950/20 rounded-2xl p-6 sm:p-8 border border-emerald-200/80 dark:border-emerald-800/40 text-slate-700 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
          <h3 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg mb-2">
            Small Business Restructure Roll-Over (Subdivision 328-G)
          </h3>
          <p>
            Some restructures may qualify for a roll-over or other relief if the relevant statutory conditions are met. For example, the small business restructure roll-over may apply to eligible transfers of certain CGT assets, trading stock, revenue assets and depreciating assets as part of a genuine restructure of an ongoing business. Eligibility depends on all applicable conditions, including the small-business requirements, asset eligibility and continuity of ultimate economic ownership. It is not automatic, and a transaction should not be implemented on the assumption that roll-over relief will apply.
          </p>
        </div>

        {/* Verbatim Paragraph 3 on Stamp Duty & Legal Documentation Warning */}
        <div className="max-w-4xl mx-auto bg-amber-50/70 dark:bg-amber-950/20 rounded-2xl p-6 sm:p-7 border border-amber-200/80 dark:border-amber-800/50">
          <div className="flex items-start gap-4">
            <ExclamationCircleOutlined className="text-2xl text-amber-600 dark:text-amber-400 mt-1 shrink-0" />
            <div className="space-y-2 text-slate-700 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
              <h3 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg">
                State Stamp Duties &amp; Legal Documentation
              </h3>
              <p>
                Stamp duty and other state taxes are separate from federal income tax and vary by jurisdiction. Legal documentation may also be required. These matters should be checked before assets or ownership interests are transferred.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
