"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  SyncOutlined,
  FundViewOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
  BarChartOutlined,
  PieChartOutlined,
  DollarOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";

/**
 * DynamicForecastingAndVarianceAnalysis Component
 * ===============================================
 * Sections 4 & 5: Dynamic Forecasting & Budget-versus-Actual Variance Reporting.
 * Source: 12th Pillar Business Advisory.docx (Page 3: Budgeting & Forecasting)
 *
 * Implements 100% complete, verbatim SEO text explaining why forecasts must evolve
 * as live trading unfolds, and how structured variance reporting focuses management
 * attention on the core levers that drive profit and liquidity.
 */
export default function DynamicForecastingAndVarianceAnalysis() {
  const varianceDrivers = [
    {
      icon: <DollarOutlined className="text-emerald-600 dark:text-emerald-400" />,
      title: "Revenue & Sales Volume",
      desc: "Distinguishing pricing variances from delivery volume or customer churn.",
    },
    {
      icon: <BarChartOutlined className="text-teal-600 dark:text-teal-400" />,
      title: "Gross Margin & Input Costs",
      desc: "Spotting cost inflation in materials or subcontractor fees early.",
    },
    {
      icon: <PieChartOutlined className="text-blue-600 dark:text-blue-400" />,
      title: "Labour & Capacity Utilization",
      desc: "Comparing actual wage spend against productive output and recovery rates.",
    },
    {
      icon: <ClockCircleOutlined className="text-indigo-600 dark:text-indigo-400" />,
      title: "Overheads & Cash Timing",
      desc: "Tracking fixed expense drift, debtor collections, and available bank buffers.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50/70 dark:bg-zinc-950/70 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 1: Financial Forecasting Updated as Circumstances Change */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Adaptive Planning
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Financial Forecasting Should be Updated as Circumstances Change
          </h2>
        </div>

        {/* 2 Verbatim Text Cards (Forecasting as an Estimate & The Revenue Diagnostic) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Card 1: Not a Fixed Promise */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-4">
                <SyncOutlined />
                <span>Estimate Based on Available Information</span>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
                A forecast should not be treated as a fixed promise. It is an
                estimate based on available information. As actual results come
                in, assumptions should be reviewed and the expected outcome
                updated. This helps owners distinguish between a temporary
                timing difference and a genuine change in performance.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-100 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400">
              Isolates temporary delays from structural performance shifts.
            </div>
          </div>

          {/* Card 2: The Practical Diagnostic Example */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 mb-4">
                <FundViewOutlined />
                <span>Root-Cause Variance Questioning</span>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
                For example, if revenue is below budget, the next question is
                why. The cause may be lower sales volume, delayed invoicing,
                pricing, customer mix, capacity or seasonality. A forecast can
                then reflect the updated position and show the expected effect
                on profit and cash.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-100 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400">
              Immediate impact visibility across bottom-line profit and bank balances.
            </div>
          </div>
        </div>

        {/* Section 2: Budget-Versus-Actual Reporting Makes the Plan Useful */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-10 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
          <div className="max-w-3xl mb-8">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-2">
              <BarChartOutlined />
              <span>Decision-Focused Management Reporting</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Budget-Versus-Actual Reporting Makes the Plan Useful
            </h3>
            <p className="mt-4 text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
              A budget becomes more valuable when actual results are compared
              against it. Variance analysis can identify where performance is
              ahead or behind plan and help management focus on the areas that
              need explanation.
            </p>
            <p className="mt-3 text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
              Financially Up can help structure budget-versus-actual reviews
              around the key drivers of the business. This may include revenue,
              gross margin, labour costs, overheads, debtor collections, cash
              and selected operational measures. The aim is to make management
              reporting decision-focused rather than producing a long report
              that no one uses.
            </p>
          </div>

          {/* 4 Key Variance Driver Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t border-slate-100 dark:border-zinc-800">
            {varianceDrivers.map((driver, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200/70 dark:border-zinc-800/80"
              >
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white mb-1.5">
                  <span className="text-base">{driver.icon}</span>
                  <span>{driver.title}</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed m-0 font-normal">
                  {driver.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Action Row */}
          <div className="mt-8 pt-6 border-t border-slate-100 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-zinc-400">
              <CheckCircleOutlined className="text-emerald-500" />
              <span>Replaces lengthy unread spreadsheets with actionable monthly insight.</span>
            </div>
            <Link href="/book-an-appointment">
              <Button
                type="primary"
                icon={<ArrowRightOutlined />}
                iconPlacement="end"
                className="rounded-xl font-bold px-6 h-11 shadow-sm"
              >
                Set Up Variance Reporting
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
