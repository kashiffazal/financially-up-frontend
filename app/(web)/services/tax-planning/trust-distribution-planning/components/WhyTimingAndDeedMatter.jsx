"use client";

import React from "react";
import {
  BookOutlined,
  CalendarOutlined,
  DollarOutlined,
  ExclamationCircleOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * WhyTimingAndDeedMatter Component
 * ================================
 * Section 2: Trustee authority derived from the trust deed, strict 30 June
 * resolution deadlines, and the crucial distinction between present entitlement
 * and physical cash distribution.
 * Verbatim text from Page 10 of the Tax Planning document.
 */
export default function WhyTimingAndDeedMatter() {
  const coreFactors = [
    {
      icon: <BookOutlined className="text-xl text-brand-primary dark:text-emerald-400" />,
      title: "Trust Deed Authority",
      desc: "The trustee’s legal authority comes from the trust deed. Distribution decisions must strictly conform to the definitions of income and powers specified within the deed.",
    },
    {
      icon: <CalendarOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Pre-30 June Resolution Deadline",
      desc: "For many discretionary trusts, written resolutions creating present entitlement must be executed by 30 June, though the deed may specify an earlier date.",
    },
    {
      icon: <DollarOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Entitlement vs Cash Payment",
      desc: "Creating present entitlement does not require an immediate physical cash payment. Beneficiaries can become entitled even where funds remain unpaid as a credit balance.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-primary/10 text-brand-primary dark:bg-emerald-500/10 dark:text-emerald-400 mb-4 border border-brand-primary/20 dark:border-emerald-500/20">
            Legal Authority &amp; Timing
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Why Timing and the Trust Deed Matter
          </h2>
        </div>

        {/* Verbatim Paragraph 1 */}
        <div className="max-w-4xl mx-auto mb-10 bg-white dark:bg-zinc-900 p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 text-base sm:text-lg leading-relaxed shadow-sm">
          The trustee’s authority comes from the trust deed, so distribution decisions must be made in accordance with its terms. For many discretionary trusts, resolutions affecting present entitlement for an income year generally need to be made by the end of that income year, but the deed may require earlier action or impose additional conditions. Some specific entitlement rules have their own recording requirements.
        </div>

        {/* 3 Core Factors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {coreFactors.map((item, idx) => (
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

        {/* Verbatim Paragraph 2 on Pre-Year-End Documentation */}
        <div className="max-w-4xl mx-auto mb-6 bg-white dark:bg-zinc-900 p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 text-base sm:text-lg leading-relaxed shadow-sm">
          This is why family trust distribution advice is most useful before the relevant decision deadline. Waiting until after year-end can limit what can validly be changed. The trustee should also keep evidence of the resolution and the information used to make it.
        </div>

        {/* Verbatim Paragraph 3 on Present Entitlement vs Cash Payment */}
        <div className="max-w-4xl mx-auto bg-amber-50/70 dark:bg-amber-950/20 rounded-2xl p-6 sm:p-7 border border-amber-200/80 dark:border-amber-800/50">
          <div className="flex items-start gap-4">
            <ExclamationCircleOutlined className="text-2xl text-amber-600 dark:text-amber-400 mt-1 shrink-0" />
            <div className="space-y-2 text-slate-700 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
              <h3 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg">
                Cash Payment vs Present Entitlement
              </h3>
              <p>
                A distribution decision is not the same as physically paying cash to a beneficiary. A beneficiary can become presently entitled to trust income even where the amount remains unpaid, depending on the deed, resolution and circumstances. That distinction can affect both tax reporting and later trust-company transactions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
