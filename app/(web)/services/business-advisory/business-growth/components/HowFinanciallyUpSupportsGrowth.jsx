"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  FileSearchOutlined,
  CommentOutlined,
  LineChartOutlined,
  CalendarOutlined,
  SafetyCertificateOutlined,
  ShopOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * HowFinanciallyUpSupportsGrowth Component
 * ========================================
 * Section 5: How Financially Up supports the decision.
 * Source: 12th Pillar Business Advisory.docx (Page 4: Business Growth)
 *
 * Implements 100% complete, verbatim SEO text detailing our 4-point advisory support process,
 * commercial decision ownership, and distinct scopes for valuations and M&A acquisitions.
 */
export default function HowFinanciallyUpSupportsGrowth() {
  const supportSteps = [
    {
      icon: <FileSearchOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Reviewing Financial Statements",
      desc: "Analyzing historical profitability, margin stability, and working capital lines to understand current baseline strength.",
    },
    {
      icon: <CommentOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Discussing the Proposed Opportunity",
      desc: "Talking through the expansion goals, commercial assumptions, competitive environment, and resource requirements.",
    },
    {
      icon: <LineChartOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Preparing Budgets or Cash Flow Forecasts",
      desc: "Building financial models to stress-test timing differences, funding needs, and down-side operational scenarios.",
    },
    {
      icon: <CalendarOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Meeting to Assess Actual Performance",
      desc: "Convening regular review meetings to track actual performance against the growth plan and adjust assumptions.",
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
            Advisory Partnership &amp; Boundaries
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How Financially Up Supports the Decision
          </h2>
        </div>

        {/* Verbatim Paragraph 1 Card: 4-Point Support Process */}
        <div className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs mb-12">
          <div className="max-w-3xl mb-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-2">
              <CheckCircleOutlined />
              <span>Evidence-Based Decision Support</span>
            </div>
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal m-0">
              Our business growth services can include reviewing your financial
              statements, discussing the proposed opportunity, preparing budgets
              or cash flow forecasts, and meeting to assess actual performance
              against the plan. We explain the assumptions and where more
              evidence is needed. You remain responsible for commercial
              decisions; a forecast is a tool for testing them, not a guaranteed
              result.
            </p>
          </div>

          {/* 4 Step Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t border-slate-200 dark:border-zinc-800">
            {supportSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-zinc-900 p-5 rounded-xl border border-slate-200/80 dark:border-zinc-800 shadow-2xs"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-50 dark:bg-zinc-800 flex items-center justify-center mb-3">
                  {step.icon}
                </div>
                <div className="text-xs font-bold uppercase text-emerald-700 dark:text-emerald-400 mb-1">
                  Step 0{idx + 1}
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed m-0 font-normal">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Verbatim Paragraph 2 Cross-Link Banner: Valuations & Acquisitions Scope */}
        <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-slate-50 dark:from-emerald-950/30 dark:via-zinc-950 dark:to-zinc-900 rounded-2xl p-7 sm:p-9 border border-emerald-200/80 dark:border-emerald-800/40 shadow-xs">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                <SafetyCertificateOutlined />
                <span>Investor Influx, Acquisitions &amp; Exit Due Diligence</span>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed m-0 font-normal">
                If growth involves bringing in an investor, acquiring a
                competitor or deciding what a business is worth, our{" "}
                <Link
                  href="/services/business-advisory/business-valuations"
                  className="font-semibold text-brand-primary dark:text-emerald-400 hover:underline"
                >
                  business valuation services
                </Link>{" "}
                address a different question. A planned acquisition or exit has
                its own due diligence and tax issues, covered by our{" "}
                <Link
                  href="/services/business-advisory/buying-selling-business"
                  className="font-semibold text-brand-primary dark:text-emerald-400 hover:underline"
                >
                  buying and selling a business service
                </Link>
                .
              </p>
            </div>

            <div className="shrink-0 flex flex-wrap gap-3">
              <Link href="/services/business-advisory/business-valuations">
                <Button
                  className="rounded-xl font-bold px-5 h-11 bg-white dark:bg-zinc-900 border-slate-200 dark:border-zinc-700 text-slate-800 dark:text-white"
                  icon={<SafetyCertificateOutlined />}
                >
                  Business Valuations
                </Button>
              </Link>
              <Link href="/services/business-advisory/buying-selling-business">
                <Button
                  type="primary"
                  icon={<ShopOutlined />}
                  className="rounded-xl font-bold px-5 h-11 shadow-sm"
                >
                  M&amp;A Advisory
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
