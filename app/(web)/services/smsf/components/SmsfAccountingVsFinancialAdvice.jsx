"use client";

import React from "react";
import { Button } from "antd";
import {
  FileTextOutlined,
  DollarOutlined,
  CheckCircleOutlined,
  SyncOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import Link from "next/link";

/**
 * SmsfAccountingVsFinancialAdvice Component
 * =========================================
 * Section 5: SMSF Accounting vs Regulated Financial Advice.
 *
 * Clearly defines the distinction between accounting/tax reporting
 * and regulated financial product advice (AFSL requirement).
 *
 * Background: Lite Brand Gradient.
 */
export default function SmsfAccountingVsFinancialAdvice() {
  const accountingFeatures = [
    "Compiling annual financial statements, balance sheets, and operating reports",
    "Calculating fund taxable income, allowable deductions, and tax payable (15% rate)",
    "Monitoring concessional and non-concessional member contribution caps",
    "Preparing transfer balance cap (TBAR) lodgements and pension drawdown schedules",
    "Facilitating independent audits and answering auditor workpaper queries",
  ];

  const financialAdviceFeatures = [
    "Recommending whether establishing an SMSF is suitable for your personal situation",
    "Selecting specific shares, managed funds, ETFs, or commercial properties to buy or sell",
    "Advising on personal life, TPD, or income protection insurance product selection",
    "Providing asset allocation recommendations or financial product comparisons",
    "Regulated strictly under an Australian Financial Services Licence (AFSL)",
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-800/60 mb-4">
            <SyncOutlined className="text-teal-600 dark:text-teal-400 text-xs sm:text-sm" />
            <span className="text-xs font-semibold text-teal-800 dark:text-teal-300 tracking-wide uppercase">
              Regulatory Scope
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            SMSF Accounting vs Financial Product Advice
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
            Accounting for an SMSF involves recording fund transactions, preparing financial statements, and lodging tax returns. It is distinct from recommending specific investments or advising you to establish a fund.
          </p>
        </div>

        {/* 2-Column Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left: SMSF Accounting Scope */}
          <div className="p-7 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/50 flex items-center justify-center">
                    <FileTextOutlined className="text-teal-600 dark:text-teal-400 text-lg" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-teal-600 dark:text-teal-400 tracking-wider uppercase">
                      Tax & Compliance
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0">
                      SMSF Accounting & Tax Practice
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300">
                  Financially Up
                </span>
              </div>

              <ul className="space-y-3.5 mb-6">
                {accountingFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                    <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400">
              Focus: Financial records, market valuation adherence, tax lodgements & independent audit files.
            </div>
          </div>

          {/* Right: Regulated Financial Advice */}
          <div className="p-7 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 flex items-center justify-center">
                    <DollarOutlined className="text-emerald-600 dark:text-emerald-400 text-lg" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase">
                      Investment Strategy
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0">
                      Regulated Financial Advice
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300">
                  AFSL Licensed
                </span>
              </div>

              <ul className="space-y-3.5 mb-6">
                {financialAdviceFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                    <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400">
              Focus: Personal risk profiling, product recommendations & investment selection.
            </div>
          </div>
        </div>

        {/* Integration Callout */}
        <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
          <div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white m-0">
              Clear Boundaries Guarantee Objective Compliance
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 m-0 mt-1">
              Financially Up works cooperatively alongside your licensed financial adviser, stockbroker, and bank to ensure all fund data is reconciled and compliant under Australian superannuation law.
            </p>
          </div>
          <Link href="/book-an-appointment" className="shrink-0">
            <Button
              type="primary"
              size="large"
              icon={<ArrowRightOutlined />}
              iconPosition="end"
              className="h-11 px-6 rounded-xl font-semibold shadow-md shadow-brand-primary/20"
            >
              Discuss SMSF Scope
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
