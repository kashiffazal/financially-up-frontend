"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  LineChartOutlined,
  BankOutlined,
  SwapOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  InfoCircleOutlined,
  SlidersOutlined,
} from "@ant-design/icons";

/**
 * HowIsABusinessValued Component
 * ==============================
 * Section 2: How is a business valued?
 * Source: 12th Pillar Business Advisory.docx (Page 5: Business Valuations)
 *
 * Implements 100% complete, verbatim SEO text detailing common methodology approaches
 * (earnings/cash flow, net assets, comparable transactions), normalized earnings adjustments,
 * and Australian Government guidance.
 */
export default function HowIsABusinessValued() {
  const valuationApproaches = [
    {
      icon: <LineChartOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
      title: "1. Earnings & Cash Flow Approach",
      subtitle: "Capitalisation of Maintainable Earnings (EBIT/EBITDA) & DCF",
      detail:
        "An earnings approach may require adjustments for unusual items, owner remuneration, related-party transactions and costs a buyer would actually incur. A cash flow approach depends on supportable forecasts and the risks attached to them.",
      tag: "Most Common",
    },
    {
      icon: <BankOutlined className="text-2xl text-teal-600 dark:text-teal-400" />,
      title: "2. Net Assets-Based Approach",
      subtitle: "Adjusted Net Tangible Asset Value (ANTA)",
      detail:
        "An asset-based approach may be more relevant where significant assets underpin the business or trading earnings do not represent its value, such as asset-rich holding entities or capital-intensive operations.",
      tag: "Asset Heavy",
    },
    {
      icon: <SwapOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
      title: "3. Comparable Transactions Approach",
      subtitle: "Market Evidence & Industry Multiples",
      detail:
        "Comparable sale information can be useful, but the businesses and transaction terms must genuinely be comparable in scale, geography, deal structure, and customer quality.",
      tag: "Market Check",
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
            Methodology &amp; Normalisation
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How is a Business Valued?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            There is no one calculation suitable for every business. Common
            approaches consider earnings or cash flow, the value of net assets,
            or evidence from comparable transactions. The method and
            assumptions need to fit the business, its industry and the quality of
            the available information.
          </p>
        </div>

        {/* 3 Approach Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {valuationApproaches.map((appr, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-7 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-800 flex items-center justify-center">
                    {appr.icon}
                  </div>
                  <Tag color="green" className="text-[11px] font-semibold m-0">
                    {appr.tag}
                  </Tag>
                </div>

                <div className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider mb-1">
                  {appr.subtitle}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-3">
                  {appr.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal m-0">
                  {appr.detail}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800/80 flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-zinc-400">
                <CheckCircleOutlined className="text-emerald-500 dark:text-emerald-400" />
                <span>Adjusted to business reality</span>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Paragraph 3 Feature Banner: No Automatic Formula */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-center shrink-0 mt-0.5">
              <InfoCircleOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                Australian Government Valuation Guidance
              </h4>
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed m-0 font-normal">
                No formula automatically converts annual profit into sale
                price. The Australian Government advises gathering business
                information and considering a suitable valuation method before
                relying on a figure.
              </p>
            </div>
          </div>
        </div>

        {/* Action Row */}
        <div className="mt-12 text-center">
          <Link href="/book-an-appointment">
            <Button
              type="primary"
              size="large"
              icon={<ArrowRightOutlined />}
              iconPlacement="end"
              className="rounded-xl font-bold px-7 h-12 shadow-md shadow-brand-primary/20"
            >
              Evaluate Valuation Methodology
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
