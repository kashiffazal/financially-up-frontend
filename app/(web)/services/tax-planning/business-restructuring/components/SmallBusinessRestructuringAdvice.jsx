"use client";

import React from "react";
import {
  SafetyCertificateOutlined,
  CompassOutlined,
  CheckCircleOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

/**
 * SmallBusinessRestructuringAdvice Component
 * ==========================================
 * Section 5: Technical statutory conditions for small business rollover relief,
 * genuine restructure testing, ultimate economic ownership, and full path planning.
 * Verbatim text from Page 11 of the Tax Planning document.
 */
export default function SmallBusinessRestructuringAdvice() {
  const criteria = [
    {
      title: "Nature of the Business",
      desc: "Aggregated turnover under $10 million threshold or satisfying the small business entity eligibility requirements.",
    },
    {
      title: "Eligible Asset Types",
      desc: "Active assets, trading stock, revenue assets, and depreciating assets used in the ongoing business.",
    },
    {
      title: "Residency Requirements",
      desc: "Both transferring and receiving entities must satisfy Australian tax residency conditions.",
    },
    {
      title: "Continuity of Economic Ownership",
      desc: "Ultimate economic ownership of the transferred assets must remain substantially unchanged across individuals.",
    },
    {
      title: "Genuine Restructure Test",
      desc: "Transaction must be genuinely part of restructuring an ongoing business, not an artificial divestment or tax avoidance scheme.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-zinc-900 border-b border-slate-100 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-primary/10 text-brand-primary dark:bg-emerald-500/10 dark:text-emerald-400 mb-4 border border-brand-primary/20 dark:border-emerald-500/20">
            Subdivision 328-G Rollover
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Small Business Restructuring Advice
          </h2>
        </div>

        {/* Verbatim Paragraph 1 */}
        <div className="max-w-4xl mx-auto mb-10 bg-slate-50 dark:bg-zinc-800/60 p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-zinc-700/80 text-slate-700 dark:text-zinc-300 text-base sm:text-lg leading-relaxed shadow-sm">
          For an eligible small business, tax restructuring advice may include reviewing whether the small business restructure roll-over or another roll-over is potentially relevant. The conditions are technical and can depend on matters such as the nature of the business, eligible assets, residency, ownership and whether the transaction is genuinely part of an ongoing business restructure.
        </div>

        {/* 5 Technical Criteria Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {criteria.map((item, idx) => (
            <div
              key={idx}
              className={`bg-slate-50 dark:bg-zinc-800/40 rounded-2xl p-6 border border-slate-200/70 dark:border-zinc-700/60 shadow-sm flex flex-col justify-between ${
                idx === 4 ? "md:col-span-2 lg:col-span-2 bg-brand-primary/5 dark:bg-emerald-950/20 border-brand-primary/20 dark:border-emerald-800/40" : ""
              }`}
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircleOutlined className="text-emerald-500 text-base" />
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Paragraph 2 on Full Implementation Path */}
        <div className="max-w-4xl mx-auto bg-amber-50/70 dark:bg-amber-950/20 rounded-2xl p-6 sm:p-7 border border-amber-200/80 dark:border-amber-800/50">
          <div className="flex items-start gap-4">
            <ExclamationCircleOutlined className="text-2xl text-amber-600 dark:text-amber-400 mt-1 shrink-0" />
            <div className="space-y-2 text-slate-700 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
              <h3 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg">
                Full Implementation Path vs Isolated Provisions
              </h3>
              <p>
                Even where income-tax roll-over relief is available, GST, duty, financing and legal consequences can remain. That is why small business restructuring advice should consider the full implementation path rather than a single tax provision in isolation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
