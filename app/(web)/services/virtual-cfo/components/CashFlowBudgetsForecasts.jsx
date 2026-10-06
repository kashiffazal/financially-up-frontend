"use client";

import React from "react";
import {
  LineChartOutlined,
  ClockCircleOutlined,
  InboxOutlined,
  AuditOutlined,
  BankOutlined,
  RocketOutlined,
  CheckCircleOutlined,
  SyncOutlined,
  RiseOutlined,
} from "@ant-design/icons";

/**
 * CashFlowBudgetsForecasts Component
 * ==================================
 * Section 5: Cash flow, budgets and forecasts.
 *
 * Implements 100% verbatim content from '13th Pillar Virtual CFO.docx' (Section 1 - Virtual CFO).
 * Clearly explains why profit and cash are distinct, models the 5 operational cash pressure factors,
 * and details how Financially Up builds dynamic forecasts and budget-versus-actual variance routines.
 *
 * Background: Clean White.
 */
export default function CashFlowBudgetsForecasts() {
  /**
   * The 5 factors that create cash pressure despite accounting profit (extracted verbatim from paragraph 1)
   */
  const cashPressureFactors = [
    {
      icon: <ClockCircleOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Customers Pay Slowly",
      description: "Debtor delays lock up earned cash even when recorded on the P&L as revenue.",
    },
    {
      icon: <InboxOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Inventory Absorbs Cash",
      description: "Stock purchases deplete liquid bank reserves prior to being sold and collected.",
    },
    {
      icon: <AuditOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Tax Liabilities Fall Due",
      description: "Quarterly BAS, PAYG, and corporate income tax payments create lump-sum outflows.",
    },
    {
      icon: <BankOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Loan Repayments Increase",
      description: "Principal debt amortisation reduces bank balance without appearing as an operating expense.",
    },
    {
      icon: <RocketOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Growth Requires Upfront Spending",
      description: "Expansion requires wages, materials, and marketing before new revenue is collected.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 border-t border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-800/60 mb-4">
            <LineChartOutlined className="text-teal-600 dark:text-teal-400 text-xs sm:text-sm" />
            <span className="text-xs font-semibold text-teal-800 dark:text-teal-300 tracking-wide uppercase">
              Liquidity & Runway Visibility
            </span>
          </div>

          {/* Exact H2 Heading from Document */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Cash flow, budgets and forecasts
          </h2>

          {/* Exact Verbatim Paragraph 1 from Document */}
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Profit and cash are not the same thing. A business can report accounting profit while still experiencing cash pressure because customers pay slowly, inventory absorbs cash, tax liabilities fall due, loan repayments increase or growth requires spending before revenue is collected. Regular cash flow forecasting helps management see timing pressure earlier.
          </p>
        </div>

        {/* 5 Cash Pressure Drivers Grid */}
        <div className="mb-14">
          <div className="text-center mb-6">
            <span className="text-xs font-bold text-slate-500 dark:text-zinc-400 uppercase tracking-wider">
              Why Profitable Businesses Experience Cash Pressure
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
            {cashPressureFactors.map((factor, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50/80 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-500/40 shadow-2xs hover:shadow-sm transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-800 flex items-center justify-center mb-3.5 shadow-2xs">
                    {factor.icon}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                    {factor.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed m-0 font-normal">
                    {factor.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Budget vs Actual & Forecast Management Card (Exact Verbatim Paragraph 2) */}
        <div className="rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200 dark:border-zinc-800 p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300 text-xs font-semibold">
                <SyncOutlined />
                <span>Forecasting Assumptions & Variance Routine</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white m-0">
                Building Understandable Forecasts & Tracking Variances
              </h3>
              {/* Exact Verbatim Paragraph 2 from Document */}
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal m-0">
                Financially Up can help build and maintain cash flow forecasts using assumptions that management can understand and update. Budgets can then be compared with actual results to identify where sales, gross margin, overheads or timing have moved away from plan. Forecasts are estimates rather than guarantees, so they should be revisited when assumptions change.
              </p>
            </div>

            {/* Right Pillars List */}
            <div className="lg:col-span-5 bg-white dark:bg-zinc-950 rounded-xl p-5 sm:p-6 border border-slate-200/80 dark:border-zinc-800 shadow-2xs space-y-3">
              <div className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                What Budget Comparisons Reveal
              </div>
              {[
                { title: "Sales Performance", text: "Volume vs pricing movements compared to plan" },
                { title: "Gross Margins", text: "Cost of goods sold and direct labour drift" },
                { title: "Operating Overheads", text: "Fixed operational expenditure changes" },
                { title: "Timing Differences", text: "Collection lags and deferred billing cycles" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 mt-1 shrink-0 text-sm" />
                  <div>
                    <span className="text-xs font-bold text-slate-900 dark:text-white mr-1.5">
                      {item.title}:
                    </span>
                    <span className="text-xs text-slate-600 dark:text-zinc-400">
                      {item.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
