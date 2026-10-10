"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  LineChartOutlined,
  CalendarOutlined,
  ArrowRightOutlined,
  ClockCircleOutlined,
  WarningOutlined,
  CheckCircleOutlined,
  DollarOutlined,
  SwapOutlined,
} from "@ant-design/icons";

/**
 * WhatIsCashFlowForecasting Component
 * ===================================
 * Section 1: What is cash flow forecasting?
 * Source: 12th Pillar Business Advisory.docx (Page 2: Cash Flow Management)
 *
 * Implements 100% complete, verbatim SEO text explaining cash flow forecasting,
 * why timing creates a gap between accounting profit and actual liquidity,
 * and how payment visibility prevents cash shortfalls.
 */
export default function WhatIsCashFlowForecasting() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Core Concept &amp; Liquidity Timing
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What is Cash Flow Forecasting?
          </h2>
        </div>

        {/* 2 Primary Verbatim Text Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mb-12">
          {/* Card 1: Forward Estimations vs P&L */}
          <div className="bg-slate-50/80 dark:bg-zinc-950/80 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-4">
                <LineChartOutlined className="text-base" />
                <span>Forward Money Movement &amp; Bank Balances</span>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
                A cash flow forecast estimates when cash is expected to enter
                and leave the business over a future period. Business.gov.au
                explains that forecasting helps a business assess whether
                expected income will cover its costs and identify possible
                shortages or surpluses. Unlike a profit and loss report, the
                forecast focuses on payment timing and the resulting cash
                balance.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-200 dark:border-zinc-800 flex items-center gap-3 text-xs text-slate-500 dark:text-zinc-400">
              <ClockCircleOutlined className="text-emerald-600 dark:text-emerald-400" />
              <span>Focuses on actual receipt and disbursement dates, not invoice dates.</span>
            </div>
          </div>

          {/* Card 2: The Profit vs Cash Disconnect */}
          <div className="bg-slate-50/80 dark:bg-zinc-950/80 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 mb-4">
                <SwapOutlined className="text-base" />
                <span>Why Profit and Cash Are Not the Same</span>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
                That timing matters because a business can report an accounting
                profit while still struggling to meet bills. Sales made on
                credit, slow-paying customers, inventory purchases, GST and PAYG
                obligations, loan repayments, equipment purchases and seasonal
                costs can all create a gap between profit and available cash.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-200 dark:border-zinc-800 flex items-center gap-3 text-xs text-slate-500 dark:text-zinc-400">
              <WarningOutlined className="text-amber-600 dark:text-amber-400" />
              <span>Accounting profit does not guarantee bank liquidity on payroll day.</span>
            </div>
          </div>
        </div>

        {/* Visual Diagnostic Strip: 4 Friction Points that Cause Cash Pressure */}
        <div className="bg-gradient-to-r from-emerald-500/5 via-teal-500/5 to-cyan-500/5 dark:from-emerald-950/20 dark:via-zinc-900/40 dark:to-teal-950/20 rounded-2xl p-6 sm:p-8 border border-emerald-500/20 dark:border-emerald-500/20">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 mb-4">
            <CheckCircleOutlined />
            <span>Key Factors Driving The Timing Gap</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-2xs">
              <div className="text-xs font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-2">
                <CalendarOutlined className="text-emerald-600 dark:text-emerald-400" />
                <span>Debtor Payment Lag</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed m-0">
                Sales invoiced on credit today may not convert to cleared bank funds for 30, 60 or 90 days.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-2xs">
              <div className="text-xs font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-2">
                <DollarOutlined className="text-teal-600 dark:text-teal-400" />
                <span>Inventory &amp; Work in Progress</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed m-0">
                Stock purchases and labour outlays tie up working capital long before revenue is realized.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-2xs">
              <div className="text-xs font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-2">
                <ClockCircleOutlined className="text-blue-600 dark:text-blue-400" />
                <span>Statutory Tax &amp; Super</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed m-0">
                Quarterly BAS, PAYG instalments and payroll superannuation accumulate as large fixed liabilities.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-2xs">
              <div className="text-xs font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-2">
                <LineChartOutlined className="text-amber-600 dark:text-amber-400" />
                <span>Debt Principal &amp; Capex</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed m-0">
                Equipment purchases and loan principal repayments consume bank funds without reducing taxable profit.
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
              Book a Cash Flow Diagnostic
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
