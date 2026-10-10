"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  DollarOutlined,
  PercentageOutlined,
  TeamOutlined,
  HomeOutlined,
  BankOutlined,
  ToolOutlined,
  AuditOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  FileTextOutlined,
} from "@ant-design/icons";

/**
 * WhatSmallBusinessBudgetIncludes Component
 * =========================================
 * Section 3: What should a small business budget include?
 * Source: 12th Pillar Business Advisory.docx (Page 3: Budgeting & Forecasting)
 *
 * Implements 100% complete, verbatim SEO text detailing both the quantitative line items
 * and the critical operational assumptions that underpin a credible business budget.
 */
export default function WhatSmallBusinessBudgetIncludes() {
  const budgetLineItems = [
    {
      icon: <DollarOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Expected Revenue",
      tag: "Top Line",
      detail: "Revenue forecasts modeled by volume, unit prices, product mix, and seasonality.",
    },
    {
      icon: <PercentageOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Direct Costs & Gross Profit",
      tag: "Unit Economics",
      detail: "Cost of goods sold, direct materials, and subcontractor expenses to establish true gross margins.",
    },
    {
      icon: <TeamOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Employment Costs",
      tag: "Labour & On-Costs",
      detail: "Salaries, wages, overtime, superannuation guarantee, workers' compensation, and payroll tax.",
    },
    {
      icon: <HomeOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Overheads & Operating Expenses",
      tag: "Fixed Base",
      detail: "Premises rent, software subscriptions, insurance premiums, utilities, and marketing outlays.",
    },
    {
      icon: <BankOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Financing Costs",
      tag: "Debt Service",
      detail: "Loan interest, overdraft fees, commercial hire purchases, and principal repayment commitments.",
    },
    {
      icon: <ToolOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Capital Expenditure & Cash Flow",
      tag: "Balance Sheet",
      detail: "Equipment acquisitions, tech investments, and cash-flow implications relevant to planning.",
    },
  ];

  const assumptionDrivers = [
    {
      category: "Revenue Drivers",
      points: [
        "Sales volume expectations and delivery capacity",
        "Price points, fee structures, and discount policies",
        "Customer retention rates and churn assumptions",
        "Seasonal peaks, quiet trading periods, and ramp-ups",
      ],
    },
    {
      category: "Payroll & Labour Drivers",
      points: [
        "Headcount changes and phased recruitment timelines",
        "Productive billable hours vs administrative overhead",
        "Scheduled salary reviews and award rate increases",
        "Superannuation guarantee adjustments and payroll on-costs",
      ],
    },
    {
      category: "Overheads & Timing Drivers",
      points: [
        "Commercial lease renewal dates and fixed rent escalations",
        "Software licence expansions and technology renewals",
        "Annual insurance policy adjustments and utility indexing",
        "Marketing campaigns tied to expected customer acquisition",
      ],
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
            Structure &amp; Underlying Drivers
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Should a Small Business Budget Include?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            The structure depends on the business, but a practical budget will
            usually cover expected revenue, direct costs, gross profit,
            employment costs, overheads and other operating expenses. It may
            also include financing costs, capital expenditure and cash-flow
            implications where these are relevant to the planning decision.
          </p>
        </div>

        {/* 6 Line Item Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {budgetLineItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between hover:shadow-md hover:border-emerald-400/50 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <Tag color="green" className="text-[11px] font-semibold m-0">
                    {item.tag}
                  </Tag>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed m-0 font-normal">
                  {item.detail}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200 dark:border-zinc-800 flex items-center gap-2 text-xs text-slate-500 dark:text-zinc-400">
                <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400" />
                <span>Integrated into the financial model</span>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Paragraph 2 Feature Card: The Assumptions are Just as Important */}
        <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-slate-50 dark:from-emerald-950/30 dark:via-zinc-950 dark:to-zinc-900 rounded-2xl p-7 sm:p-10 border border-emerald-200/80 dark:border-emerald-800/40 shadow-xs mb-12">
          <div className="max-w-3xl mb-8">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 mb-2">
              <FileTextOutlined />
              <span>Transparent Commercial Logic</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              Assumptions: The True Foundation of a Credible Budget
            </h3>
            <p className="mt-3 text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
              The assumptions are just as important as the numbers. Revenue may
              depend on volumes, prices, capacity, customer retention or
              seasonality. Wages may depend on headcount, hours, salary reviews
              and payroll on-costs. Rent, software, insurance and other
              overheads may change at different dates. A credible budget
              documents these assumptions rather than hiding them inside a
              spreadsheet.
            </p>
          </div>

          {/* 3 Driver Category Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {assumptionDrivers.map((driver, dIdx) => (
              <div
                key={dIdx}
                className="bg-white dark:bg-zinc-900 rounded-xl p-5 border border-slate-200/80 dark:border-zinc-800 shadow-2xs"
              >
                <div className="text-xs font-bold uppercase text-emerald-700 dark:text-emerald-400 tracking-wider mb-3">
                  {driver.category}
                </div>
                <ul className="space-y-2 m-0 p-0 list-none">
                  {driver.points.map((pt, pIdx) => (
                    <li
                      key={pIdx}
                      className="text-xs text-slate-600 dark:text-zinc-300 flex items-start gap-2"
                    >
                      <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Section Action Row */}
        <div className="text-center">
          <Link href="/book-an-appointment">
            <Button
              type="primary"
              size="large"
              icon={<ArrowRightOutlined />}
              iconPlacement="end"
              className="rounded-xl font-bold px-7 h-12 shadow-md shadow-brand-primary/20"
            >
              Build an Assumption-Backed Budget
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
