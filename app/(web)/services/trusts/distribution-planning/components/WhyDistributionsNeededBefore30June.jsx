"use client";

import React from "react";
import { Tag } from "antd";
import {
  CalendarOutlined,
  AlertOutlined,
  FileProtectOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * WhyDistributionsNeededBefore30June Component
 * ============================================
 * Section: Why trust distributions need to be considered before 30 June
 * Verbatim text from Page 11 of client docx (8th Pillar Trust Services.docx).
 * Explains present entitlement timing, 30 June resolution requirements,
 * trustee top-marginal-rate assessment risks under Section 99A, and deed deadlines.
 */
export default function WhyDistributionsNeededBefore30June() {
  const cards = [
    {
      icon: <CalendarOutlined className="text-2xl text-teal-600 dark:text-teal-400" />,
      badge: "Deed Deadlines",
      title: "End of Income Year Requirement",
      desc: "For many discretionary trusts, a valid trustee resolution is needed by the end of the income year to make one or more beneficiaries presently entitled to trust income.",
      detail:
        "The ATO notes that the trust deed may require a resolution before 30 June, so the deed should be checked rather than assuming every trust has the same deadline.",
    },
    {
      icon: <AlertOutlined className="text-2xl text-amber-600 dark:text-amber-400" />,
      badge: "Default Taxation Risk",
      title: "Trustee Assessed at Top Rates",
      desc: "If no beneficiary is presently entitled to trust income at year end, the tax outcome can be materially different and the trustee may be assessed on part or all of the trust's taxable income.",
      detail:
        "That is why trust distribution before 30 June is not simply a year-end bookkeeping entry made after the fact.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Critical Timing Rules
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why trust distributions need to be considered before 30 June
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            For many discretionary trusts, a valid trustee resolution is needed by the end of the income year to make
            one or more beneficiaries presently entitled to trust income. The ATO notes that the trust deed may require
            a resolution before 30 June, so the deed should be checked rather than assuming every trust has the same
            deadline.
          </p>
        </div>

        {/* 2 Key Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {cards.map((card, idx) => (
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

        {/* Verbatim No Retrospective Entries Callout */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-brand-bg-lighter via-white to-slate-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border border-slate-200 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row items-start md:items-center gap-5">
          <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 flex items-center justify-center shrink-0">
            <FileProtectOutlined className="text-xl text-teal-600 dark:text-teal-400" />
          </div>
          <div className="space-y-1">
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              Not a Post-Year-End Bookkeeping Entry
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              If no beneficiary is presently entitled to trust income at year end, the tax outcome can be materially
              different and the trustee may be assessed on part or all of the trust&apos;s taxable income. That is why
              trust distribution before 30 June is not simply a year-end bookkeeping entry made after the fact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
