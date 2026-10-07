"use client";

import React from "react";
import {
  CalculatorOutlined,
  CalendarOutlined,
  SafetyCertificateOutlined,
  CompassOutlined,
} from "@ant-design/icons";

/**
 * WhatCgtPlanningInvolves Component
 * =================================
 * Section 1: Pre-transaction evaluation, event identification, cost-base
 * determination, discounts, concessions, and asset-specific rules.
 * Verbatim text from Page 8 of the Tax Planning document.
 */
export default function WhatCgtPlanningInvolves() {
  const corePrinciples = [
    {
      icon: <CompassOutlined className="text-2xl text-brand-primary dark:text-emerald-400" />,
      title: "Pre-Return Transaction Review",
      description:
        "CGT planning looks at a proposed or recent transaction before the final tax return calculation.",
    },
    {
      icon: <CalendarOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
      title: "Event & Timing Verification",
      description:
        "The review may consider whether a CGT event is expected, when it occurs, and how timing affects reporting.",
    },
    {
      icon: <CalculatorOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
      title: "Proceeds & Cost Base Modeling",
      description:
        "Determining capital proceeds and cost base elements, including whether capital losses are available to offset gains.",
    },
    {
      icon: <SafetyCertificateOutlined className="text-2xl text-purple-600 dark:text-purple-400" />,
      title: "Concessions & Discounts",
      description:
        "Assessing whether statutory exemptions, the 50% general discount, or small business concessions apply to the transaction.",
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
            What Does CGT Planning Involve?
          </h2>
        </div>

        {/* Verbatim Content Paragraphs */}
        <div className="max-w-4xl mx-auto mb-14 space-y-6 text-slate-700 dark:text-zinc-300 text-base sm:text-lg leading-relaxed">
          <p className="bg-slate-50 dark:bg-zinc-800/60 p-6 rounded-2xl border border-slate-200/80 dark:border-zinc-700/80 shadow-sm">
            CGT planning looks at a proposed or recent transaction before the final tax return calculation. The review may consider whether a CGT event is expected, when it occurs, how capital proceeds and the cost base may be determined, whether capital losses are available and whether an exemption, discount or concession may apply.
          </p>
          <p className="bg-slate-50 dark:bg-zinc-800/60 p-6 rounded-2xl border border-slate-200/80 dark:border-zinc-700/80 shadow-sm">
            The tax outcome depends on the asset, ownership, dates, taxpayer type, residency and other facts. For example, rules can differ for a home, rental property, listed shares and business assets. The review should therefore be based on the actual transaction and supporting documents rather than a general formula.
          </p>
        </div>

        {/* 4 Feature Cards */}
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
