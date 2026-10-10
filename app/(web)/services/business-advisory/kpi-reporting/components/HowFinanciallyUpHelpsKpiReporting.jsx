"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  FileSearchOutlined,
  SlidersOutlined,
  LayoutOutlined,
  SyncOutlined,
  LineChartOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * HowFinanciallyUpHelpsKpiReporting Component
 * ===========================================
 * Section 5: How Financially Up can help
 * Source: 12th Pillar Business Advisory.docx (Lines 370-372)
 *
 * Implements 100% complete, verbatim SEO text explaining accounting integration,
 * review cadence, and interconnected advisory pathways (profitability, growth, benchmarking).
 */
export default function HowFinanciallyUpHelpsKpiReporting() {
  const advisorySteps = [
    {
      icon: <FileSearchOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Review Source Records",
      desc: "Examining general ledger integrity, reconciliations, and bookkeeping classification consistency.",
    },
    {
      icon: <SlidersOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Select Relevant KPIs",
      desc: "Collaborating with owners and managers to isolate high-impact commercial indicators.",
    },
    {
      icon: <LayoutOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Design Reporting Format",
      desc: "Crafting intuitive executive dashboards tailored to your management team and cadence.",
    },
    {
      icon: <SyncOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Establish Review Cycle",
      desc: "Setting up a regular monthly or quarterly rhythm to interrogate variances and trends.",
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
            Advisory Scope &amp; Accounting Foundation
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How Financially Up Can Help
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Our work can include reviewing source records, selecting KPIs with
            you, designing a reporting format, establishing a review cycle and
            discussing variances. As a KPI reporting accountant, we can connect
            management reporting to the underlying accounts and explain where
            bookkeeping classifications or timing affect the result. The agreed
            scope may cover a one-off design or ongoing review.
          </p>
        </div>

        {/* 4 Step Service Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {advisorySteps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-950/70 border border-slate-200/80 dark:border-zinc-800 shadow-2xs hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center mb-4">
                {step.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal m-0">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Interconnected Advisory Pathways Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-emerald-50/60 via-slate-50/50 to-white dark:from-emerald-950/20 dark:via-zinc-900 dark:to-zinc-950/40 border border-emerald-200/80 dark:border-emerald-800/50">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
            Translating Findings into Strategic Action
          </h3>
          <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal mb-6">
            A report may reveal that a product&apos;s margin has fallen; the next
            step might be a deeper profitability analysis. If you are using the
            measures to guide an expansion, our business growth planning focuses
            on the broader decision and its cash needs. For comparisons with
            other businesses, see our business benchmarking services.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link href="/services/business-advisory/profitability">
              <Button
                type="default"
                icon={<LineChartOutlined />}
                className="rounded-xl font-semibold bg-white dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 text-xs sm:text-sm"
              >
                Explore Profitability Analysis
              </Button>
            </Link>

            <Link href="/services/business-advisory/business-growth">
              <Button
                type="default"
                icon={<ArrowRightOutlined />}
                className="rounded-xl font-semibold bg-white dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 text-xs sm:text-sm"
              >
                Business Growth Planning
              </Button>
            </Link>

            <Link href="/services/business-advisory/benchmarking">
              <Button
                type="default"
                icon={<ArrowRightOutlined />}
                className="rounded-xl font-semibold bg-white dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 text-xs sm:text-sm"
              >
                Business Benchmarking Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
