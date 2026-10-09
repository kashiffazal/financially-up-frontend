"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  FileTextOutlined,
  CheckCircleOutlined,
  InfoCircleOutlined,
  ArrowRightOutlined,
  DollarOutlined,
  HomeOutlined,
  LineChartOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

/**
 * WhatYouNeedToProvide Component
 * ==============================
 * Section 5: What You May Need to Provide.
 * Features 100% complete, verbatim content from Page 2 of client docx.
 * Always utilizes Ant Design Button components for interactive actions.
 */
export default function WhatYouNeedToProvide() {
  const commonRecords = [
    {
      icon: (
        <FileTextOutlined className="text-lg text-emerald-600 dark:text-emerald-400" />
      ),
      label: "Income & Employment Statements",
      detail: "Income statements, salary summaries & allowances",
    },
    {
      icon: (
        <DollarOutlined className="text-lg text-teal-600 dark:text-teal-400" />
      ),
      label: "Bank Interest & Dividends",
      detail:
        "Bank interest certificates & managed fund distribution statements",
    },
    {
      icon: (
        <FileTextOutlined className="text-lg text-cyan-600 dark:text-cyan-400" />
      ),
      label: "Private Health Insurance",
      detail: "Private health insurance annual tax statements",
    },
    {
      icon: (
        <DollarOutlined className="text-lg text-blue-600 dark:text-blue-400" />
      ),
      label: "Work-Related Expense Records",
      detail: "Receipts, vehicle logbooks & home office diaries",
    },
    {
      icon: (
        <HomeOutlined className="text-lg text-indigo-600 dark:text-indigo-400" />
      ),
      label: "Investment Property Records",
      detail: "Rental property income and expense summaries",
    },
    {
      icon: (
        <LineChartOutlined className="text-lg text-purple-600 dark:text-purple-400" />
      ),
      label: "Capital Gains & Asset Sales",
      detail: "CGT calculations, share purchase and sale contract notes",
    },
    {
      icon: (
        <LineChartOutlined className="text-lg text-amber-600 dark:text-amber-400" />
      ),
      label: "Crypto Asset Transaction Reports",
      detail: "Cryptocurrency exchange reports and disposal logs",
    },
    {
      icon: (
        <GlobalOutlined className="text-lg text-sky-600 dark:text-sky-400" />
      ),
      label: "Foreign Income & Earlier Years",
      detail: "Foreign income information and documents from earlier tax years",
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
            Documentation Checklist
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What You May Need to Provide
          </h2>
        </div>

        {/* Verbatim Paragraph 1 Card */}
        <div className="w-full bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs mb-8">
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            The documents required depend on your tax situation. Common records
            include income statements, bank interest, dividend and managed fund
            statements, private health insurance information, work-related
            expense records, investment property income and expenses, capital
            gains calculations or purchase and sale records, crypto asset
            reports, foreign income information and documents from earlier tax
            years.
          </p>
        </div>

        {/* Visual Record Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mb-8">
          {commonRecords.map((rec, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-2xs flex items-start gap-3"
            >
              <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 shrink-0">
                {rec.icon}
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold text-slate-900 dark:text-white leading-snug">
                  {rec.label}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-zinc-400 leading-tight mt-1">
                  {rec.detail}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Paragraph 2 Guidance Box */}
        <div className="w-full rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800/60 p-6 sm:p-7 flex items-start gap-4 mb-10">
          <InfoCircleOutlined className="text-emerald-700 dark:text-emerald-400 text-xl mt-0.5 shrink-0" />
          <p className="text-xs sm:text-sm text-emerald-950 dark:text-emerald-200 leading-relaxed font-normal">
            Information shown in ATO systems may not contain everything needed
            to support your return or deductions. Keep the relevant records and
            provide any information Financially Up requests. You do not need to
            identify every document before booking; we will guide you based on
            your circumstances.
          </p>
        </div>

        {/* CTA Action */}
        <div className="text-center">
          <Link href="/book-an-appointment">
            <Button
              type="primary"
              size="large"
              icon={<ArrowRightOutlined />}
              iconPlacement="end"
              className="rounded-xl font-semibold px-7 shadow-md"
            >
              Book an Appointment
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
