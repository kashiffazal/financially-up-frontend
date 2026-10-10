"use client";

import React from "react";
import { Tag } from "antd";
import {
  LineChartOutlined,
  DollarCircleOutlined,
  CalendarOutlined,
  CheckCircleOutlined,
  PieChartOutlined,
  FieldTimeOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

/**
 * WhatBelongsOnUsefulDashboard Component
 * ======================================
 * Section 2: What belongs on a useful dashboard?
 * Features 100% complete, verbatim content from client SEO document.
 */
export default function WhatBelongsOnUsefulDashboard() {
  const coreMetrics = [
    {
      title: "Revenue and gross margin by period or business unit",
      desc: "Tracking top-line turnover and product/department margin health across comparative intervals.",
    },
    {
      title: "Operating costs against an agreed budget",
      desc: "Monitoring fixed overheads and discretionary operational spending against approved allowances.",
    },
    {
      title: "Cash balance and near-term obligations",
      desc: "Live bank liquidity benchmarked against upcoming payroll, superannuation, and supplier runs.",
    },
    {
      title: "Debtor ageing and collection trends",
      desc: "Days sales outstanding (DSO) and aged invoice buckets (current, 30, 60, 90+ days).",
    },
    {
      title: "Selected operational drivers, such as work completed or capacity used",
      desc: "Billable utilisation, project milestones completed, factory machine hours, or customer tickets.",
    },
    {
      title: "Brief explanations for unusual movements or missing information",
      desc: "Short explanatory narrative that clarifies one-off spikes rather than leaving figures open to guesswork.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <Tag color="blue" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Metric Selection
          </Tag>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What belongs on a useful dashboard?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Start with the question, not the chart. A dashboard should contain a manageable number of measures with a clear owner, calculation and source. Depending on the business and its systems, these may include:
          </p>
        </div>

        {/* 6 Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {coreMetrics.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-mono font-bold text-blue-600 dark:text-blue-400 block mb-2">
                  Metric Category 0{idx + 1}
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white capitalize mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal m-0">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Business.gov.au & Fair Comparisons Callouts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm">
            <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
              Government Business Guidance
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed m-0 font-normal">
              Business.gov.au recommends reviewing profit and loss, balance sheet, cash flow and budget information to assess financial health. A dashboard can summarize selected points from those reports, but it cannot replace accurate accounts or explain an unexpected change on its own.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm">
            <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
              Fair Comparisons & Contextual Indicators
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed m-0 font-normal">
              Comparisons must be fair. A prior month may have a different number of trading days, a seasonal peak or a one-off transaction. We can show an appropriate prior period or budget, identify the limitation and discuss whether an apparent improvement is sustainable. A colour indicator without context can be more distracting than helpful.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
