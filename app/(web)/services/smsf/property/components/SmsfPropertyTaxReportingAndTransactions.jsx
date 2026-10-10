"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  DollarOutlined,
  SwapOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
  FileTextOutlined,
} from "@ant-design/icons";

/**
 * SmsfPropertyTaxReportingAndTransactions Component
 * =================================================
 * Implements verbatim SEO content from Page 4 of 9th Pillar SMSF.docx:
 * - How is SMSF property reported for tax? (integrated SAR treatment, ECPI interaction)
 * - Buying, selling or changing an SMSF property (acquisition, disposal, cross-links)
 */
export default function SmsfPropertyTaxReportingAndTransactions() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="blue" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Tax Return Integration
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How is SMSF property reported for tax?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            There is no separate SMSF property tax return. Rental income, deductions, capital gains or losses and other relevant amounts are included in the fund&apos;s SMSF annual return as part of the fund&apos;s overall tax position.
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Property costs do not all receive the same treatment. Repairs, improvements, borrowing expenses, capital works, depreciating assets and disposal costs may be deductible immediately, deductible over time, capitalized or relevant to the property&apos;s cost base. The fund&apos;s pension position and any exempt current pension income may also affect the tax calculation and expense treatment. These matters need to be considered with the fund as a whole, not as a standalone rental schedule.
          </p>
        </div>

        {/* 2 Feature Cards: Expense Distinction & Lifecycle Transactions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Nuanced Expense Classification */}
          <div className="bg-slate-50/80 dark:bg-zinc-900/60 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/40 flex items-center justify-center mb-6">
                <DollarOutlined className="text-2xl text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                Property Costs & Deduction Classification
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-6 font-normal">
                Property outgoings require precise tax characterization under ATO superannuation legislation:
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-blue-500 text-sm mt-0.5 shrink-0" />
                  <span>Immediate deductions: routine repairs, rates, tenancy costs, and insurance</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-blue-500 text-sm mt-0.5 shrink-0" />
                  <span>Deductions over time: loan borrowing costs (5-year write-off) & Division 40 depreciation</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-blue-500 text-sm mt-0.5 shrink-0" />
                  <span>Capitalized items: structural improvements (Division 43) added to property cost base</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-blue-500 text-sm mt-0.5 shrink-0" />
                  <span>Pension phase interaction: Exempt Current Pension Income (ECPI) apportionment</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400">
              Evaluated holistically as part of the total fund return.
            </div>
          </div>

          {/* Card 2: Buying, Selling or Changing an SMSF Property */}
          <div className="bg-slate-50/80 dark:bg-zinc-900/60 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/40 flex items-center justify-center mb-6">
                <SwapOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                Buying, selling or changing an SMSF property
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-6 font-normal">
                Before acquisition or settlement, trustees may need to check ownership details, the trust and borrowing structure, related-party rules, GST implications and audit records. On sale, complete acquisition, improvement and disposal records are needed to support the capital gain or loss calculation.
              </p>
              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl bg-white dark:bg-zinc-950 border border-slate-200/80 dark:border-zinc-800 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white block">Setting up a new fund for property?</span>
                    <span className="text-xs text-slate-500 dark:text-zinc-400">Establish trustee structure before contracts</span>
                  </div>
                  <Link href="/services/smsf/establishment">
                    <Button type="link" size="small" className="text-emerald-600 dark:text-emerald-400 p-0 font-semibold" icon={<ArrowRightOutlined />} iconPlacement="end">
                      SMSF Setup
                    </Button>
                  </Link>
                </div>
                <div className="p-4 rounded-xl bg-white dark:bg-zinc-950 border border-slate-200/80 dark:border-zinc-800 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white block">Annual returns & accounting?</span>
                    <span className="text-xs text-slate-500 dark:text-zinc-400">Comprehensive financial statements & SAR</span>
                  </div>
                  <Link href="/services/smsf/accounting">
                    <Button type="link" size="small" className="text-emerald-600 dark:text-emerald-400 p-0 font-semibold" icon={<ArrowRightOutlined />} iconPlacement="end">
                      SMSF Accounting
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400">
              Complete historical record maintenance avoids CGT discrepancies upon disposal.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
