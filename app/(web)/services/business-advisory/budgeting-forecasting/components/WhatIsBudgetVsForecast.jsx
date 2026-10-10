"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  CompassOutlined,
  LineChartOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  InfoCircleOutlined,
  SyncOutlined,
  BulbOutlined,
} from "@ant-design/icons";

/**
 * WhatIsBudgetVsForecast Component
 * ================================
 * Section 1: What is the difference between a budget and a forecast?
 * Source: 12th Pillar Business Advisory.docx (Page 3: Budgeting & Forecasting)
 *
 * Implements 100% complete, verbatim SEO text explaining the distinct roles
 * of budgets (the plan/targets) and forecasts (the updated reality), referencing Business.gov.au.
 */
export default function WhatIsBudgetVsForecast() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Core Definitions &amp; Strategic Value
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What is the Difference Between a Budget and a Forecast?
          </h2>
        </div>

        {/* 2 Primary Verbatim Text Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mb-12">
          {/* Card 1: The Budget */}
          <div className="bg-slate-50/80 dark:bg-zinc-950/80 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
                  <CompassOutlined className="text-base" />
                  <span>The Defined Target</span>
                </div>
                <Tag color="cyan">Goal Setting</Tag>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                The Financial Budget
              </h3>

              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
                A budget is the financial plan for what the business wants or
                expects to achieve over a defined period. A forecast uses
                current financial data, recent trends and updated assumptions to
                estimate what is now likely to happen.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-200 dark:border-zinc-800 flex items-center gap-2 text-xs text-slate-500 dark:text-zinc-400">
              <CheckCircleOutlined className="text-teal-600 dark:text-teal-400" />
              <span>Sets the benchmarks and directs resources for the period ahead.</span>
            </div>
          </div>

          {/* Card 2: Business.gov.au Official Distinction */}
          <div className="bg-slate-50/80 dark:bg-zinc-950/80 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                  <LineChartOutlined className="text-base" />
                  <span>The Dynamic Reality</span>
                </div>
                <Tag color="green">Monitoring &amp; Adjustment</Tag>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                The Dynamic Forecast
              </h3>

              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
                Business.gov.au makes the same distinction: a budget helps set
                goals and direct money, while a forecast helps monitor
                performance and adjust plans as circumstances change. Used
                together, they are more useful than preparing a budget once and
                leaving it untouched.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-200 dark:border-zinc-800 flex items-center gap-2 text-xs text-slate-500 dark:text-zinc-400">
              <SyncOutlined className="text-emerald-600 dark:text-emerald-400" />
              <span>Living model continually updated with live trading results.</span>
            </div>
          </div>
        </div>

        {/* Strategic Value Proposition Strip */}
        <div className="bg-gradient-to-r from-emerald-500/5 via-teal-500/5 to-cyan-500/5 dark:from-emerald-950/20 dark:via-zinc-900/40 dark:to-teal-950/20 rounded-2xl p-6 sm:p-8 border border-emerald-500/20 dark:border-emerald-500/20">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 mb-4">
            <BulbOutlined />
            <span>Why Combining Budget &amp; Forecast Unlocks Growth</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-2xs">
              <div className="text-xs font-bold text-slate-900 dark:text-white mb-1">
                1. Set Clear Objectives
              </div>
              <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed m-0">
                Establish revenue targets, gross margin expectations, and operational expense limits for the team.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-2xs">
              <div className="text-xs font-bold text-slate-900 dark:text-white mb-1">
                2. Measure Variances Early
              </div>
              <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed m-0">
                Spot divergence between actual performance and plans weeks before it affects cash flow.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-2xs">
              <div className="text-xs font-bold text-slate-900 dark:text-white mb-1">
                3. Adapt Confidently
              </div>
              <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed m-0">
                Adjust assumptions, spending, and pricing quickly rather than waiting for year-end accounts.
              </p>
            </div>
          </div>
        </div>

        {/* Section Action Button */}
        <div className="mt-12 text-center">
          <Link href="/book-an-appointment">
            <Button
              type="primary"
              size="large"
              icon={<ArrowRightOutlined />}
              iconPlacement="end"
              className="rounded-xl font-bold px-7 h-12 shadow-md shadow-brand-primary/20"
            >
              Discuss Your Budgeting Strategy
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
