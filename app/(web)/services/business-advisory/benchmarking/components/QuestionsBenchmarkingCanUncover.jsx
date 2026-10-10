"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  QuestionCircleOutlined,
  DollarOutlined,
  TeamOutlined,
  ShopOutlined,
  ClockCircleOutlined,
  AuditOutlined,
  ArrowRightOutlined,
  LineChartOutlined,
} from "@ant-design/icons";

/**
 * QuestionsBenchmarkingCanUncover Component
 * ==========================================
 * Section 5: What questions can benchmarking uncover?
 * Source: 12th Pillar Business Advisory.docx (Lines 471-477)
 *
 * Implements 100% complete, verbatim SEO text detailing the 5 investigative questions
 * and direct links to profitability consulting, KPI reporting, and growth consulting.
 */
export default function QuestionsBenchmarkingCanUncover() {
  const diagnosticQuestions = [
    {
      icon: <DollarOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      question: "Has gross margin changed because of pricing, cost or product mix?",
      subtitle: "Pricing vs Inflation Diagnostics",
    },
    {
      icon: <TeamOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      question: "Are staffing costs rising with productive activity or ahead of demand?",
      subtitle: "Headcount & Capacity Productivity",
    },
    {
      icon: <ShopOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      question: "Does one site perform differently because its customers or expenses differ?",
      subtitle: "Location & Branch Variance",
    },
    {
      icon: <ClockCircleOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      question: "Are debtors taking longer to pay than in prior periods?",
      subtitle: "Working Capital & Cash Flow Drag",
    },
    {
      icon: <AuditOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      question: "Has an apparent improvement come from a one-off event or a changed accounting classification?",
      subtitle: "Data Integrity & Normalized Earnings",
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
            Diagnostic Inquiry
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Questions Can Benchmarking Uncover?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A meaningful benchmark exposes the underlying operational questions
            that traditional financial statements cannot answer alone:
          </p>
        </div>

        {/* 5 Questions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {diagnosticQuestions.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-950/70 border border-slate-200/80 dark:border-zinc-800 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between ${
                idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <Tag color="cyan" className="text-2xs font-semibold mb-2">
                  {item.subtitle}
                </Tag>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug m-0">
                  {item.question}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Action Pathways Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-emerald-50/60 via-slate-50/40 to-white dark:from-emerald-950/20 dark:via-zinc-900 dark:to-zinc-950/40 border border-emerald-200/80 dark:border-emerald-800/50">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
            Translating Comparative Gaps into Tailored Action
          </h3>
          <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal mb-6">
            Where a comparison points to a margin issue, our profitability
            consulting can examine the underlying drivers. If you need regular
            measures after the review, KPI reporting focuses on repeatable
            management information. For an expansion decision, business growth
            consulting brings the comparison into a wider plan.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link href="/services/business-advisory/profitability">
              <Button
                type="default"
                icon={<DollarOutlined />}
                className="rounded-xl font-semibold bg-white dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 text-xs sm:text-sm"
              >
                Profitability Consulting
              </Button>
            </Link>

            <Link href="/services/business-advisory/kpi-reporting">
              <Button
                type="default"
                icon={<LineChartOutlined />}
                className="rounded-xl font-semibold bg-white dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 text-xs sm:text-sm"
              >
                KPI Reporting
              </Button>
            </Link>

            <Link href="/services/business-advisory/business-growth">
              <Button
                type="default"
                icon={<ArrowRightOutlined />}
                className="rounded-xl font-semibold bg-white dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 text-xs sm:text-sm"
              >
                Business Growth Consulting
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
