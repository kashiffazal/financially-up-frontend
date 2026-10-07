"use client";

import React from "react";
import {
  CalendarOutlined,
  CompassOutlined,
  FileSearchOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";

/**
 * WhatYearEndTaxPlanningInvolves Component
 * ========================================
 * Section 1: Detailed explanation of end-of-financial-year (EOFY) planning,
 * fact-based decision making, and advisory scope boundaries.
 * Verbatim text from Page 7 of the Tax Planning document.
 */
export default function WhatYearEndTaxPlanningInvolves() {
  const corePrinciples = [
    {
      icon: <FileSearchOutlined className="text-2xl text-brand-primary dark:text-emerald-400" />,
      title: "Fact-Based Foundation",
      description:
        "Effective end of financial year tax planning starts with the facts. The aim is not to manufacture deductions or bring forward transactions simply for tax reasons.",
    },
    {
      icon: <CompassOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
      title: "Commercially Sensible Choices",
      description:
        "It is to understand your likely tax position and make informed, commercially sensible decisions while there is still time to act where the law allows.",
    },
    {
      icon: <CalendarOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
      title: "Prospective vs Retrospective",
      description:
        "Some matters can only be addressed prospectively before 30 June, while others can be documented and dealt with when the tax return is prepared.",
    },
    {
      icon: <SafetyCertificateOutlined className="text-2xl text-purple-600 dark:text-purple-400" />,
      title: "Multi-Area Review Scope",
      description:
        "Reviews may consider expected income, deductible expenses, investments, property, CGT, PAYG instalments, super contributions, asset purchases and record quality.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-zinc-900 border-b border-slate-100 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-primary/10 text-brand-primary dark:bg-emerald-500/10 dark:text-emerald-400 mb-4 border border-brand-primary/20 dark:border-emerald-500/20">
            Advisory Scope &amp; Methodology
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            What Does Year End Tax Planning Involve?
          </h2>
        </div>

        {/* Verbatim Content Paragraphs */}
        <div className="max-w-4xl mx-auto mb-14 space-y-6 text-slate-700 dark:text-zinc-300 text-base sm:text-lg leading-relaxed">
          <p className="bg-slate-50 dark:bg-zinc-800/60 p-6 rounded-2xl border border-slate-200/80 dark:border-zinc-700/80 shadow-sm">
            Effective end of financial year tax planning starts with the facts. The aim is not to manufacture deductions or bring forward transactions simply for tax reasons. It is to understand your likely tax position and make informed, commercially sensible decisions while there is still time to act where the law allows.
          </p>
          <p className="bg-slate-50 dark:bg-zinc-800/60 p-6 rounded-2xl border border-slate-200/80 dark:border-zinc-700/80 shadow-sm">
            Depending on your circumstances, the review may consider expected income, deductible expenses, investment or property activity, capital gains and losses, PAYG instalments, superannuation contribution timing, asset purchases and the quality of your records. Some matters can only be addressed prospectively, while others can be documented and dealt with when the tax return is prepared.
          </p>
          <p className="bg-slate-50 dark:bg-zinc-800/60 p-6 rounded-2xl border border-slate-200/80 dark:border-zinc-700/80 shadow-sm">
            Financially Up can provide year-end tax planning for individuals and businesses. Where a matter requires financial product advice or an investment recommendation, an appropriately authorized financial adviser may be needed. Legal advice may require an appropriately qualified legal adviser.
          </p>
        </div>

        {/* Feature Cards Grid */}
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
