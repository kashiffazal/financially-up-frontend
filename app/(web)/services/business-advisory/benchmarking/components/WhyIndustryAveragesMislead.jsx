"use client";

import React from "react";
import { Tag } from "antd";
import {
  WarningOutlined,
  CoffeeOutlined,
  ShopOutlined,
  InfoCircleOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * WhyIndustryAveragesMislead Component
 * =====================================
 * Section 2: Why can industry averages mislead?
 * Source: 12th Pillar Business Advisory.docx (Lines 460-463)
 *
 * Implements 100% complete, verbatim SEO text explaining why generic averages
 * overlook operational nuances, wage ratios vs capacity, unremunerated owner hours,
 * dataset limitations, and the practical café service vs takeaway case study.
 */
export default function WhyIndustryAveragesMislead() {
  const confoundingFactors = [
    "Product quality & specialization",
    "Geographic location & foot traffic",
    "Pricing power & market positioning",
    "Operating hours & trading cycles",
    "Staffing structures & seniority",
    "Entity scale & operating size",
    "Customer segments served",
    "Internal accounting classifications",
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950/60 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Contextual Rigour
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why Can Industry Averages Mislead?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Two businesses in the same sector may have different products,
            locations, pricing, hours, staffing, size, customer types and
            accounting treatments. A higher wage ratio could reflect a more
            labour-intensive service or an intentional investment in capacity. A
            lower expense ratio may mask work performed by an owner without
            comparable pay.
          </p>
        </div>

        {/* 8 Confounding Factors Pills */}
        <div className="mb-12">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider text-center mb-4">
            Operational Differences Within the Same Sector
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
            {confoundingFactors.map((factor, i) => (
              <span
                key={i}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 shadow-2xs"
              >
                {factor}
              </span>
            ))}
          </div>
        </div>

        {/* Dataset Variance & Transparent Disclosure Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-2xs mb-10">
          <div className="flex items-start gap-4">
            <span className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/60 border border-amber-100 dark:border-amber-800/40 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0 mt-0.5">
              <InfoCircleOutlined className="text-xl" />
            </span>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                Sample Limitations &amp; Ethical Disclosure
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal m-0">
                Published figures also vary in sample, age and definition. Some
                datasets cover only particular business sizes or industries.
                Industry benchmarking services should therefore name the source,
                period and measure used and explain material limits. We do not
                present an average as a compulsory target or evidence that a
                business has underperformed.
              </p>
            </div>
          </div>
        </div>

        {/* Case Study Card: Table Service vs Takeaway Café */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-emerald-50/60 via-slate-50/40 to-white dark:from-emerald-950/20 dark:via-zinc-900 dark:to-zinc-950/40 border border-emerald-200/80 dark:border-emerald-800/50">
          <div className="flex items-start gap-4">
            <span className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-700 dark:text-emerald-300 shrink-0 mt-0.5">
              <CoffeeOutlined className="text-xl" />
            </span>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                Practical Sector Case Study: Service Model Divergence
              </h3>
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal m-0">
                For example, a café with table service and one focused on
                takeaway may report different labour and premises costs despite
                being grouped within a similar broad industry category. The
                difference may be commercially sensible. A useful comparison
                asks whether pricing, service model and customer demand explain
                the result.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
