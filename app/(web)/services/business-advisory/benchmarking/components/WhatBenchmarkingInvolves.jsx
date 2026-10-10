"use client";

import React from "react";
import { Tag } from "antd";
import {
  CompassOutlined,
  DollarOutlined,
  DashboardOutlined,
  BankOutlined,
  CheckCircleOutlined,
  ApartmentOutlined,
} from "@ant-design/icons";

/**
 * WhatBenchmarkingInvolves Component
 * ===================================
 * Section 1: What does business performance benchmarking involve?
 * Source: 12th Pillar Business Advisory.docx (Lines 456-459)
 *
 * Implements 100% complete, verbatim SEO text explaining decision-led benchmarking,
 * internal vs external reference points, financial vs operational measures,
 * and Australian Government business review guidance.
 */
export default function WhatBenchmarkingInvolves() {
  const comparisonTypes = [
    {
      icon: <ApartmentOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Internal Benchmarks",
      desc: "Comparing current results with prior-year performance, approved budgets, regional branches, or distinct product lines.",
    },
    {
      icon: <CompassOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "External Benchmarks",
      desc: "Referencing published industry data where reliable, relevant, and properly standardized definitions exist.",
    },
    {
      icon: <DollarOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Financial Benchmarks",
      desc: "Evaluating gross margin percentages, wage-to-turnover ratios, overhead shares, and debtor collection days.",
    },
    {
      icon: <DashboardOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Operational Measures",
      desc: "Assessing labour hours expended, billable milestones completed, and inventory stock velocity.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Comparative Foundations
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Does Business Performance Benchmarking Involve?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Benchmarking begins by deciding which decision the comparison
            should inform. An internal benchmark may compare current results
            with the previous year, budget, another location or another product
            line. External benchmarks may use published industry data where
            relevant and available. Both approaches need consistent definitions
            and a clear period.
          </p>
        </div>

        {/* 4 Comparison Types Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {comparisonTypes.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-950/70 border border-slate-200/80 dark:border-zinc-800 shadow-2xs hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal m-0">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Financial & Operational Scope Narrative */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-2xs mb-8">
          <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal mb-4">
            Financial benchmarking services may look at gross margin, wage
            costs, overhead ratios, debtor collection or other financial
            measures. An operational comparison may consider labour hours, jobs
            completed or stock movement. The right set is small enough to
            discuss and closely linked to an action you could take.
          </p>
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-700 dark:text-emerald-400">
            <CheckCircleOutlined />
            <span>
              Action-driven metrics: selected indicators directly inform commercial next steps.
            </span>
          </div>
        </div>

        {/* Australian Government Guidance Callout */}
        <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-zinc-950/70 border border-slate-200/80 dark:border-zinc-800 flex items-start gap-4">
          <BankOutlined className="text-2xl text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-1">
              Australian Government Business Review Guidance
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal m-0">
              The Australian Government&apos;s business guidance encourages
              regular review of the profit and loss statement, balance sheet,
              cash flow and budget to identify unusual trends. Benchmarking
              builds on that review by making a deliberate comparison, then
              asking what accounts for any difference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
