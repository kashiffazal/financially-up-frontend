"use client";

import React from "react";
import { Tag, Button } from "antd";
import {
  EyeOutlined,
  DollarOutlined,
  ShoppingOutlined,
  ClockCircleOutlined,
  AlertOutlined,
  ArrowRightOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import Link from "next/link";

/**
 * WhatGoodBookkeepingHelpsYouSee Component
 * ========================================
 * Section 6: What good bookkeeping helps you see.
 *
 * Content is 100% VERBATIM from the professional SEO specialist document:
 * '4th Pillar Bookkeeping.docx' (Page 1).
 * Background: Clean White.
 */
export default function WhatGoodBookkeepingHelpsYouSee() {
  /**
   * 4 Visual Visibility Dimensions directly from Paragraph 1
   */
  const visibilityDimensions = [
    {
      icon: <DollarOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "What the business has earned",
      description:
        "Clear records of trading revenue, service fees, sales channels, and incoming cash flows.",
      tag: "Revenue Visibility",
    },
    {
      icon: <ShoppingOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "What it has spent",
      description:
        "Accurate classification of supplier costs, operating expenses, wages, and commercial overheads.",
      tag: "Expense Tracking",
    },
    {
      icon: <ClockCircleOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Which accounts are outstanding",
      description:
        "Current balances of unpaid customer invoices (receivables) and supplier bills (payables).",
      tag: "Outstanding Items",
    },
    {
      icon: <AlertOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Whether unusual transactions need attention",
      description:
        "Prompt identification of variances, duplicate entries, suspense items, and unallocated amounts.",
      tag: "Anomaly Detection",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <Tag color="green" className="brand-section-tag">
            <EyeOutlined className="mr-1" /> Financial Clarity
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What good bookkeeping helps you see
          </h2>
          {/* Document Paragraph 1 - Verbatim */}
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            Well-maintained records can make it easier to understand what the
            business has earned, what it has spent, which accounts are
            outstanding and whether unusual transactions need attention.
            Bookkeeping data can also support financial statements, cash-flow
            discussions and tax work, although those services involve separate
            accounting or advisory work where required.
          </p>
        </div>

        {/* 4 Visibility Dimension Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {visibilityDimensions.map((dim, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50/80 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-500/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-white dark:bg-zinc-800 shadow-sm flex items-center justify-center">
                    {dim.icon}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-300">
                    {dim.tag}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {dim.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed m-0 font-normal">
                  {dim.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Document Paragraph 2 Callout Box - Verbatim Monthly Bookkeeping Pathway */}
        <div className="rounded-2xl bg-gradient-to-r from-teal-50/80 via-emerald-50/40 to-white dark:from-zinc-900 dark:via-zinc-900/80 dark:to-zinc-950 border border-teal-200/80 dark:border-zinc-800 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-teal-800 dark:text-teal-400 uppercase tracking-wider">
              <CalendarOutlined />
              <span>Recurring Monthly Cadence</span>
            </div>
            {/* Document Paragraph 2 - Verbatim */}
            <p className="text-sm sm:text-base text-slate-800 dark:text-zinc-200 leading-relaxed m-0 font-medium">
              For businesses that want a consistent recurring process rather
              than ad hoc catch-up work, monthly bookkeeping services may be a
              better fit.
            </p>
          </div>
          <Link href="/services/bookkeeping/monthly-bookkeeping" className="shrink-0">
            <Button
              type="primary"
              size="large"
              icon={<ArrowRightOutlined />}
              iconPlacement="end"
              className="h-11 px-6 rounded-xl font-semibold shadow-md shadow-brand-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Explore Monthly Bookkeeping
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
