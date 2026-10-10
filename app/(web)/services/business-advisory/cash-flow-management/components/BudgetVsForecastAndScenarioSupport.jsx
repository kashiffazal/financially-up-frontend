"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  CompassOutlined,
  LineChartOutlined,
  ExperimentOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
  SlidersOutlined,
  AlertOutlined,
} from "@ant-design/icons";

/**
 * BudgetVsForecastAndScenarioSupport Component
 * ============================================
 * Sections 4 & 5: Cash flow forecasting vs Budget & Scenario Decision Support.
 * Source: 12th Pillar Business Advisory.docx (Page 2: Cash Flow Management)
 *
 * Implements 100% complete, verbatim SEO text explaining why budgets and forecasts
 * fulfill different roles, and how scenario analysis tests key commercial assumptions.
 */
export default function BudgetVsForecastAndScenarioSupport() {
  const scenarioExamples = [
    {
      title: "Slower Customer Collections",
      desc: "Simulating debtor delays of 15 to 45 days to test minimum bank reserve thresholds.",
    },
    {
      title: "Revenue & Sales Fluctuations",
      desc: "Modeling a 10-20% shift in sales to measure the direct impact on working capital.",
    },
    {
      title: "New Headcount & Payroll Growth",
      desc: "Checking cash sufficiency for new wages, superannuation, and equipment before hiring.",
    },
    {
      title: "Capex & Supplier Payment Terms",
      desc: "Testing equipment acquisitions or compressed supplier terms against cash reserves.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50/70 dark:bg-zinc-950/70 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 1: Budget vs Forecast Difference */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Planning Distinction
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Cash Flow Forecasting is Different from a Budget
          </h2>
        </div>

        {/* 2 Comparison Cards (Budget vs Forecast) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Budget Card */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
                  <CompassOutlined className="text-base" />
                  <span>The Financial Plan</span>
                </div>
                <Tag color="cyan">Goal Setting</Tag>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                The Business Budget
              </h3>

              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
                A budget sets targets for what the business intends to earn and
                spend. A forecast uses current data, recent trends and updated
                assumptions to estimate what is likely to happen next.
                Business.gov.au recommends using the budget to set goals and the
                forecast to monitor performance and respond to changes.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100 dark:border-zinc-800">
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed m-0 font-normal">
                If your business needs a full planning model covering revenue,
                costs and performance targets, our{" "}
                <Link
                  href="/services/business-advisory/budgeting-forecasting"
                  className="font-semibold text-brand-primary dark:text-emerald-400 hover:underline"
                >
                  budgeting and forecasting service
                </Link>{" "}
                is the more appropriate page. Cash flow forecasting focuses
                specifically on the timing and availability of cash.
              </p>
            </div>
          </div>

          {/* Forecast Card */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                  <LineChartOutlined className="text-base" />
                  <span>The Dynamic Reality</span>
                </div>
                <Tag color="green">Cash Availability</Tag>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                The Cash Flow Forecast
              </h3>

              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
                Cash flow forecasting focuses specifically on the timing and
                availability of cash. As actual debtor receipts and creditor
                disbursements arrive, assumptions are continuously refreshed to
                anticipate exact liquidity movements over the coming weeks and
                months.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100 dark:border-zinc-800 flex items-center justify-between">
              <span className="text-xs text-slate-500 dark:text-zinc-400">
                Tracks timing, not accounting profit
              </span>
              <Link
                href="/services/business-advisory/budgeting-forecasting"
                className="text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
              >
                <span>Explore Budgeting Services</span>
                <ArrowRightOutlined className="text-[10px]" />
              </Link>
            </div>
          </div>
        </div>

        {/* Section 2: How Cash Flow Advisory Can Support Decisions */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-10 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
          <div className="max-w-3xl mb-8">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-2">
              <ExperimentOutlined />
              <span>Sensitivity Analysis &amp; Stress Testing</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              How Cash Flow Advisory Can Support Decisions
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4 text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
              <p>
                A forecast becomes more useful when it is used to test decisions
                rather than simply record numbers. Financially Up can model
                different assumptions, such as slower customer collections, a
                change in sales, a new employee, a major purchase or revised
                supplier terms. Scenario analysis can show how sensitive the
                cash position is to those assumptions.
              </p>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
              <p>
                This does not predict the future with certainty. Forecasts
                depend on the quality of the underlying data and assumptions.
                The practical value comes from making those assumptions visible,
                monitoring actual results and updating the forecast when
                circumstances change.
              </p>
            </div>
          </div>

          {/* Scenario Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t border-slate-100 dark:border-zinc-800">
            {scenarioExamples.map((sc, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200/60 dark:border-zinc-800/80"
              >
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white mb-1.5">
                  <SlidersOutlined className="text-emerald-600 dark:text-emerald-400" />
                  <span>{sc.title}</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed m-0 font-normal">
                  {sc.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Action Row */}
          <div className="mt-8 pt-6 border-t border-slate-100 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-zinc-400">
              <AlertOutlined className="text-amber-500" />
              <span>Visible assumptions allow proactive operational corrections.</span>
            </div>
            <Link href="/book-an-appointment">
              <Button
                type="primary"
                icon={<ArrowRightOutlined />}
                iconPlacement="end"
                className="rounded-xl font-bold px-6 h-11 shadow-sm"
              >
                Test Your Scenarios
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
