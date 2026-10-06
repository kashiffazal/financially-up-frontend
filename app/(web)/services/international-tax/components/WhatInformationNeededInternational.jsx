"use client";

import React from "react";
import { Tag, Button } from "antd";
import {
  FileTextOutlined,
  CheckCircleOutlined,
  SyncOutlined,
  ArrowRightOutlined,
  DollarOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";
import Link from "next/link";

/**
 * WhatInformationNeededInternational Component
 * ============================================
 * Section 8: Currency Conversion and Record Keeping
 *
 * Implements the exact copy from Section 1 of the SEO document:
 * - Requirements for converting foreign amounts into Australian dollars
 * - Use of ATO exchange-rate information and accepted conversion methods
 * - The 12 useful cross-border records checklist
 *
 * Background: Lite Brand Gradient
 */
export default function WhatInformationNeededInternational() {
  /**
   * The 12 useful records from Section 1 of the document (Verbatim)
   */
  const usefulRecords = [
    {
      title: "Overseas tax returns",
      category: "Tax Documents",
    },
    {
      title: "Foreign tax assessments",
      category: "Tax Documents",
    },
    {
      title: "Payslips and employment summaries",
      category: "Employment",
    },
    {
      title: "Foreign bank statements",
      category: "Banking",
    },
    {
      title: "Dividend statements",
      category: "Investments",
    },
    {
      title: "Investment reports",
      category: "Investments",
    },
    {
      title: "Rental property statements",
      category: "Property",
    },
    {
      title: "Purchase and sale documents",
      category: "Property / CGT",
    },
    {
      title: "Pension statements",
      category: "Superannuation",
    },
    {
      title: "Evidence of foreign tax paid",
      category: "FITO Relief",
    },
    {
      title: "Travel records and residency information",
      category: "Residency",
    },
    {
      title: "Documents showing the dates you moved between countries",
      category: "Residency",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-800/60 mb-4">
            <SyncOutlined className="text-teal-600 dark:text-teal-400 text-xs sm:text-sm" />
            <span className="text-xs font-semibold text-teal-800 dark:text-teal-300 tracking-wide uppercase">
              Currency Conversion & Records
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Currency Conversion and Record Keeping
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
            Foreign amounts generally need to be converted into Australian dollars when preparing Australian tax information. The appropriate exchange rate can depend on the type of amount and the circumstances. ATO exchange-rate information and accepted conversion methods should be used where applicable.
          </p>
        </div>

        {/* Currency Conversion Context Banner */}
        <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 p-6 sm:p-8 mb-12 shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/50 flex items-center justify-center shrink-0">
                <DollarOutlined className="text-teal-600 dark:text-teal-400 text-xl" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white m-0">
                  ATO Prescribed Conversion Methods
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed m-0">
                  Depending on whether your foreign income consists of periodic salary, sporadic dividends, or real estate capital transactions, conversion into AUD requires either transaction-date spot rates or approved ATO annual average exchange rates.
                </p>
              </div>
            </div>
            <Link href="/book-an-appointment" className="shrink-0">
              <Button
                type="primary"
                icon={<ArrowRightOutlined />}
                iconPlacement="end"
                className="font-semibold h-10 px-5 rounded-xl shadow-xs"
              >
                Book Review
              </Button>
            </Link>
          </div>
        </div>

        {/* The 12 Useful Records Checklist */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-6">
            <FileDoneOutlined className="text-teal-600 dark:text-teal-400 text-lg" />
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white m-0">
              Useful records may include:
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {usefulRecords.map((record, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-2xs hover:border-teal-500/40 hover:shadow-sm transition-all flex items-start gap-3.5"
              >
                <div className="w-8 h-8 rounded-lg bg-teal-50 dark:bg-teal-950/50 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 text-sm" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-semibold text-slate-400 dark:text-zinc-500 uppercase tracking-wider block">
                    {record.category}
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-zinc-200 m-0 leading-snug">
                    {record.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
