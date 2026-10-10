"use client";

import React from "react";
import { Tag } from "antd";
import {
  CheckCircleFilled,
  InfoCircleOutlined,
  CalendarOutlined,
  SyncOutlined,
  SwapOutlined,
  AimOutlined,
  CommentOutlined,
  FileDoneOutlined,
  CarryOutOutlined,
} from "@ant-design/icons";

/**
 * UsefulReportCharacteristics Component
 * =====================================
 * Section 6: What makes a useful management report? & Separate actuals, estimates and forecasts
 * Features 100% complete, verbatim content from client SEO document.
 */
export default function UsefulReportCharacteristics() {
  const principles = [
    {
      icon: <CalendarOutlined className="text-lg text-emerald-600 dark:text-emerald-400" />,
      title: "consistent reporting periods and definitions",
      desc: "Fixed monthly cut-offs and uniform accounting categories prevent distorted comparisons.",
    },
    {
      icon: <SyncOutlined className="text-lg text-teal-600 dark:text-teal-400" />,
      title: "reconciled and reasonably current source data",
      desc: "Reports rely on fully reconciled bank feeds, accounts receivable, and payroll entries.",
    },
    {
      icon: <SwapOutlined className="text-lg text-blue-600 dark:text-blue-400" />,
      title: "comparatives that add context, such as budget, prior month or prior year",
      desc: "Raw figures are benchmarked against historical precedents and approved operating targets.",
    },
    {
      icon: <AimOutlined className="text-lg text-indigo-600 dark:text-indigo-400" />,
      title: "KPIs linked to real business drivers",
      desc: "Metrics that measure operational capacity, gross margin health, and working capital efficiency.",
    },
    {
      icon: <CommentOutlined className="text-lg text-amber-600 dark:text-amber-400" />,
      title: "clear commentary on material movements",
      desc: "Concise executive narrative explaining why numbers shifted and what decisions are required.",
    },
    {
      icon: <FileDoneOutlined className="text-lg text-rose-600 dark:text-rose-400" />,
      title: "a concise format that management can review quickly",
      desc: "Executive summaries and clean tables that highlight exceptions without information overload.",
    },
    {
      icon: <CarryOutOutlined className="text-lg text-violet-600 dark:text-violet-400" />,
      title: "an agreed follow-up process for actions and unresolved items",
      desc: "Action logs that hold managers accountable for remediation between reporting cycles.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Quality Benchmark
          </Tag>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What makes a useful management report?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            To ensure internal reports drive sound commercial decisions rather than confusion, our reporting framework adheres to seven foundational characteristics:
          </p>
        </div>

        {/* 7 Characteristics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {principles.map((p, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-zinc-800 flex items-center justify-center mb-4">
                {p.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white capitalize mb-2 leading-snug">
                {p.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal m-0">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Verbatim Section: Separate actuals, estimates and forecasts */}
        <div className="p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm">
          <Tag color="blue" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Data Integrity Rule
          </Tag>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
            Separate actuals, estimates and forecasts
          </h3>
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal m-0">
            A useful pack identifies the reporting period and distinguishes recorded results from estimates and forward-looking forecasts. Material limitations, unreconciled balances or incomplete operational data should be disclosed before management relies on the report. This makes the commentary easier to challenge and reduces the risk of treating a provisional figure as final.
          </p>
        </div>
      </div>
    </section>
  );
}
