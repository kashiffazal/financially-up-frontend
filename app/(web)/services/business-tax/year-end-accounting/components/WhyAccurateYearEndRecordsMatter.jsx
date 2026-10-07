"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  SafetyCertificateOutlined,
  AlertOutlined,
  FileSyncOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * WhyAccurateYearEndRecordsMatter Component
 * =========================================
 * Section: Why Accurate Year-End Records Matter
 * Features 100% complete, verbatim content from Page 7 of client docx.
 * Covers forward-flowing tax impacts and ASIC corporate record obligations.
 */
export default function WhyAccurateYearEndRecordsMatter() {
  const commonPitfalls = [
    "Unresolved bank differences carried forward indefinitely",
    "Old uncollectible receivables distorting current asset valuations",
    "Duplicated or obsolete accounts payable liabilities",
    "Incorrect asset registers and inaccurate depreciation claims",
    "Misclassified private drawings causing tax and Division 7A complications",
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="orange" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Commercial Integrity
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why Accurate Year-End Records Matter
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Year-end balances flow into tax returns and often become the opening balances for the next financial year. Unresolved bank differences, old receivables, duplicated liabilities, incorrect asset balances or misclassified private transactions can therefore create problems beyond a single reporting period.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          {/* Left Column: Pitfalls of Unresolved Balances */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 shadow-sm">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <AlertOutlined className="text-amber-600 dark:text-amber-400" />
                Preventing Multi-Year Compounding Errors
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                When errors are not identified and corrected at year end, they flow into statutory returns and contaminate future opening balances:
              </p>
              <ul className="space-y-2.5">
                {commonPitfalls.map((pitfall, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                    <span>{pitfall}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: ASIC Corporate Responsibility */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-brand-bg-lighter via-white to-slate-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border border-slate-200 dark:border-zinc-800 shadow-sm space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0 mt-0.5">
                  <SafetyCertificateOutlined className="text-xl" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    Ongoing Corporate Responsibility under ASIC
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                    For companies, proper financial records are also an ongoing corporate responsibility. ASIC states that companies must keep financial records that correctly record and explain transactions and the company&apos;s financial position and performance.
                  </p>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                    The reporting obligations that apply to a particular company depend on its type and circumstances; not every small proprietary company is required to lodge an annual financial report with ASIC.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
