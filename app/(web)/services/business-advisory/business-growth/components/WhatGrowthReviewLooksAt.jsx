"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  LineChartOutlined,
  PercentageOutlined,
  TeamOutlined,
  SwapOutlined,
  FileProtectOutlined,
  SlidersOutlined,
  FundViewOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  WarningOutlined,
} from "@ant-design/icons";

/**
 * WhatGrowthReviewLooksAt Component
 * =================================
 * Section 4: What might a growth review look at?
 * Source: 12th Pillar Business Advisory.docx (Page 4: Business Growth)
 *
 * Implements 100% complete, verbatim SEO text detailing the 7 analytical focus areas
 * examined in a commercial growth diagnostic, plus the cautionary note on external benchmarks.
 */
export default function WhatGrowthReviewLooksAt() {
  const reviewDimensions = [
    {
      icon: <LineChartOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Trends by service, product, customer or location, where the data supports that detail",
      category: "Revenue & Segment Trends",
      detail:
        "Granular performance breakdowns identifying which business units generate sustainable margins vs those draining resources.",
    },
    {
      icon: <PercentageOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Gross margin, pricing and the effect of rising input costs",
      category: "Margin & Pricing Health",
      detail:
        "Examining cost creep across materials, subcontractors, and direct labor to ensure price schedules protect profitability.",
    },
    {
      icon: <TeamOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Staff, contractor and equipment capacity",
      category: "Delivery Bandwidth",
      detail:
        "Assessing internal productivity, utilization rates, and machinery bottlenecks before committing to new sales targets.",
    },
    {
      icon: <SwapOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Debtors, inventory, working capital and cash conversion",
      category: "Working Capital Cycle",
      detail:
        "Evaluating customer debtor days, stock holding turns, and supplier payment cycles to quantify required cash buffers.",
    },
    {
      icon: <FileProtectOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Upcoming tax, superannuation, loan and lease payments",
      category: "Fixed Commitments",
      detail:
        "Mapping BAS lodgements, superannuation guarantee deadlines, and commercial financing obligations alongside expansion outlays.",
    },
    {
      icon: <SlidersOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Scenarios for slower sales, delayed customers or higher costs",
      category: "Stress Sensitivity",
      detail:
        "Modeling down-side assumptions to determine how resilient the business balance sheet remains under unexpected delays.",
    },
    {
      icon: <FundViewOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "A few useful measures to review after implementation",
      category: "Execution Tracking",
      detail:
        "Defining a concise scorecard of operational KPIs to monitor whether the expansion is achieving target commercial returns.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50/70 dark:bg-zinc-950/70 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Diagnostic Scope &amp; Focus Areas
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Might a Growth Review Look At?
          </h2>
        </div>

        {/* 7 Review Dimension Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {reviewDimensions.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-between bg-white dark:bg-zinc-900 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-lg hover:border-emerald-400/60 transition-all duration-300 group ${
                idx === 6 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100/80 dark:bg-zinc-800/80 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <Tag
                    color="green"
                    className="text-[11px] font-semibold border-emerald-200 dark:border-emerald-800 m-0"
                  >
                    Area 0{idx + 1}
                  </Tag>
                </div>

                <div className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider mb-2">
                  {item.category}
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white capitalize group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors mb-3 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.detail}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-zinc-800/80 flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-zinc-400">
                <CheckCircleOutlined className="text-emerald-500 dark:text-emerald-400" />
                <span>Reviewed within growth diagnostic scope</span>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Cautionary Note: Avoiding Blind Benchmark Faith */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs mb-12">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-amber-50 dark:bg-amber-950/70 border border-amber-200 dark:border-amber-800/60 flex items-center justify-center shrink-0 mt-0.5">
              <WarningOutlined className="text-xl text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                Tailored Realities vs Generic Benchmarks
              </h4>
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed m-0 font-normal">
                The right measures depend on the business. We avoid treating a
                benchmark or target as proof that a particular expansion will
                succeed.
              </p>
            </div>
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
              Request a Growth Review
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
