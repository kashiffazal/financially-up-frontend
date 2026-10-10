"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileSearchOutlined,
  DollarOutlined,
  PieChartOutlined,
  ClockCircleOutlined,
  ShoppingCartOutlined,
  SyncOutlined,
  AuditOutlined,
  UsergroupAddOutlined,
  WarningOutlined,
} from "@ant-design/icons";

/**
 * FindingWhatDrivesProfit Component
 * ==================================
 * Section 2: How do you find what drives profit?
 * Source: 12th Pillar Business Advisory.docx (Lines 406-409)
 *
 * Implements 100% complete, verbatim SEO text detailing gross vs net profit definitions,
 * 8 profitability investigation vectors, job-level variance, data gap triage, and budget vs actual comparisons.
 */
export default function FindingWhatDrivesProfit() {
  const analysisVectors = [
    {
      icon: <DollarOutlined className="text-emerald-600 dark:text-emerald-400" />,
      title: "Price Realization",
      desc: "Discounting habits, quotation accuracy, and effective realized rates.",
    },
    {
      icon: <PieChartOutlined className="text-teal-600 dark:text-teal-400" />,
      title: "Product & Service Mix",
      desc: "High-margin offerings versus volume products absorbing overhead.",
    },
    {
      icon: <ClockCircleOutlined className="text-blue-600 dark:text-blue-400" />,
      title: "Direct Labour Time",
      desc: "True productive staff hours expended versus quoted baseline estimates.",
    },
    {
      icon: <ShoppingCartOutlined className="text-amber-600 dark:text-amber-400" />,
      title: "Purchasing & Materials",
      desc: "Supplier pricing, batch quantities, freight, and procurement leakage.",
    },
    {
      icon: <SyncOutlined className="text-purple-600 dark:text-purple-400" />,
      title: "Rework & Quality Defects",
      desc: "Unbilled rectifications, warranty costs, and repetitive operational waste.",
    },
    {
      icon: <AuditOutlined className="text-rose-600 dark:text-rose-400" />,
      title: "Operating Overhead",
      desc: "Fixed administrative, software, and occupancy costs creeping upward.",
    },
    {
      icon: <UsergroupAddOutlined className="text-indigo-600 dark:text-indigo-400" />,
      title: "Customer Concentration",
      desc: "Revenue dependency and disproportionate service demands across major clients.",
    },
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
            Diagnostic Methodology
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How Do You Find What Drives Profit?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            We examine revenue and costs at a level your records can support.
            Gross profit shows what remains after relevant direct costs; net
            profit reflects further operating costs. The classification of those
            costs needs to be consistent before periods or activities can be
            compared.
          </p>
        </div>

        {/* 7 Analysis Vectors Grid */}
        <div className="mb-12">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 text-center">
            Key Variables Evaluated in Profitability Analysis
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {analysisVectors.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-2xs hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-zinc-800 border border-slate-200/70 dark:border-zinc-700 flex items-center justify-center mb-3 text-lg">
                  {item.icon}
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-zinc-400 m-0 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}

            {/* Explanatory Case Study Card */}
            <div className="p-5 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-800/50 flex flex-col justify-center">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400 mb-1">
                Practical Insight
              </span>
              <p className="text-xs text-slate-700 dark:text-zinc-300 leading-relaxed m-0 font-normal">
                Two jobs with the same invoice value may have very different
                outcomes when one requires more staff hours or follow-up work.
              </p>
            </div>
          </div>
        </div>

        {/* Missing Records & Period Comparison Dual Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-2xs">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/60 border border-amber-100 dark:border-amber-800/40 flex items-center justify-center text-amber-600 dark:text-amber-400">
                <WarningOutlined className="text-xl" />
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0">
                Triage for Missing Records
              </h3>
            </div>
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal m-0">
              Where time or cost records are missing, we can flag the
              uncertainty and help establish a better way to capture it. We don&apos;t
              guess; we implement sensible record-keeping so subsequent analysis is rock-solid.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-2xs">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-800/40 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <FileSearchOutlined className="text-xl" />
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0">
                Budget vs Actual &amp; Period Trends
              </h3>
            </div>
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal m-0">
              We may also compare budget with actual performance and look at
              changes across periods. A one-off expense, seasonal demand or a
              changed supplier arrangement can distort a simple comparison. The
              aim is to understand causes before choosing a response.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
