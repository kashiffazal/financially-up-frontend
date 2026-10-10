"use client";

import React from "react";
import { Tag } from "antd";
import {
  IdcardOutlined,
  ShopOutlined,
  ApartmentOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * DoesEveryTrustNeedAbnAndTfn Component
 * =====================================
 * Section: Does every trust need an ABN and TFN?
 * Verbatim text from Page 10 of client docx (8th Pillar Trust Services.docx).
 * Explains the distinction between a trust's tax administration identifier (TFN)
 * and business enterprise identifier (ABN), plus entity separation from trustee identifiers.
 */
export default function DoesEveryTrustNeedAbnAndTfn() {
  const comparisonCards = [
    {
      icon: <IdcardOutlined className="text-2xl text-teal-600 dark:text-teal-400" />,
      badge: "Tax Administration",
      title: "Trust Tax File Number (TFN)",
      desc: "A trust is identified separately for tax administration purposes. Even where a trust is not carrying on an enterprise, it may still require a TFN for its income tax affairs and annual tax reporting.",
      detail:
        "Used specifically for the trust's tax administration and should not be confused with the personal TFN of an individual trustee or the TFN of a corporate trustee.",
    },
    {
      icon: <ShopOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
      badge: "Enterprise Entitlement",
      title: "Australian Business Number (ABN)",
      desc: "The Australian Business Register states that a trust carrying on an enterprise is entitled to an ABN. A trust that is not carrying on an enterprise may not be entitled to an ABN.",
      detail:
        "The ABN recorded for the trust's enterprise is not simply the trustee's existing ABN. Applications should identify the trust correctly and record the trustee acting in that capacity.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Registration Fundamentals
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Does every trust need an ABN and TFN?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            No. A trust is not a separate legal person from its trustee, but it is identified separately for tax and
            business-registration purposes. The registrations required depend on what the trust is doing. The
            Australian Business Register states that a trust carrying on an enterprise is entitled to an ABN. A trust
            that is not carrying on an enterprise may not be entitled to an ABN, even though it may still require a TFN
            for its income tax affairs.
          </p>
        </div>

        {/* 2 Identifier Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {comparisonCards.map((card, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center">
                    {card.icon}
                  </div>
                  <Tag color="blue" className="font-semibold text-xs rounded-full px-3 py-0.5">
                    {card.badge}
                  </Tag>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                  {card.desc}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white dark:bg-zinc-900/80 border border-slate-200/60 dark:border-zinc-700/60">
                <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed">
                  {card.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Trustee Identifier Separation Callout */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-brand-bg-lighter via-white to-slate-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border border-slate-200 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row items-start md:items-center gap-5">
          <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 flex items-center justify-center shrink-0">
            <ApartmentOutlined className="text-xl text-teal-600 dark:text-teal-400" />
          </div>
          <div className="space-y-1">
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              Crucial Entity & Identifier Separation
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              A trust TFN is used for the trust&apos;s tax administration and should not be confused with the personal
              TFN of an individual trustee or the TFN of a corporate trustee. Likewise, the ABN recorded for the
              trust&apos;s enterprise is not simply the trustee&apos;s existing ABN. Applications should identify the
              trust correctly and record the trustee acting in that capacity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
