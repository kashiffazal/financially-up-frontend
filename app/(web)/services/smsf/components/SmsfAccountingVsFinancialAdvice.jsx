"use client";

import React from "react";
import { Button, Tag } from "antd";
import {
  FileTextOutlined,
  DollarOutlined,
  CheckCircleOutlined,
  SafetyCertificateOutlined,
  ArrowRightOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import Link from "next/link";

/**
 * SmsfAccountingVsFinancialAdvice Component
 * =========================================
 * Section 7: SMSF accounting is different from investment advice.
 *
 * Implements 100% exact copy from "SMSF accounting is different from investment advice"
 * in 9th Pillar SMSF.docx.
 *
 * Features:
 * - Verbatim paragraphs explaining the boundary between accounting/tax reporting
 *   and regulated financial product advice.
 * - Clear 2-column comparison matrix contrasting Accounting Scope vs Regulated Advice Scope.
 * - Trustee statutory responsibility reminder.
 *
 * Background: Clean White.
 */
export default function SmsfAccountingVsFinancialAdvice() {
  const accountingDuties = [
    "Recording fund transactions and bank reconciliations",
    "Preparing annual financial statements (operating statement & balance sheet)",
    "SMSF tax reporting and annual return lodgement",
    "Explaining accounting or tax consequences within scope",
  ];

  const financialAdviceDuties = [
    "Recommending that you establish an SMSF",
    "Choosing a particular investment strategy or asset allocation",
    "Recommending to buy or sell an asset",
    "Selecting a specific financial product or personal insurance",
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Exact Copy */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="green" className="brand-section-tag">
            Regulatory Scope & Boundaries
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            SMSF accounting is different from investment advice
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
            Accounting for an SMSF involves recording transactions, preparing financial statements, tax reporting and explaining accounting or tax consequences within scope. It does not mean recommending that you establish an SMSF, choose a particular investment, buy or sell an asset, or select a financial product.
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed">
            Where a decision requires regulated financial product advice, an appropriately authorized financial adviser may be required. Trustees remain responsible for the SMSF and its investment decisions even when accountants, administrators or other professionals assist with parts of the work.
          </p>
        </div>

        {/* 2-Column Comparison Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left: SMSF Accounting Scope */}
          <div className="p-7 sm:p-8 rounded-2xl bg-slate-50/70 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/50 flex items-center justify-center">
                    <FileTextOutlined className="text-teal-600 dark:text-teal-400 text-lg" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-teal-600 dark:text-teal-400 tracking-wider uppercase">
                      Accounting & Tax Practice
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0">
                      Financially Up Scope
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-300">
                  Registered Tax Agent
                </span>
              </div>

              <ul className="space-y-3.5 mb-6">
                {accountingDuties.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                    <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-200/80 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400">
              Focus: Accurate annual accounts, tax compliance, and coordinated independent audit support.
            </div>
          </div>

          {/* Right: Regulated Financial Advice Scope */}
          <div className="p-7 sm:p-8 rounded-2xl bg-slate-50/70 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 flex items-center justify-center">
                    <DollarOutlined className="text-emerald-600 dark:text-emerald-400 text-lg" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase">
                      Financial Product Advice
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0">
                      Licensed Financial Adviser Scope
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-300">
                  AFSL Licensed
                </span>
              </div>

              <ul className="space-y-3.5 mb-6">
                {financialAdviceDuties.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                    <InfoCircleOutlined className="text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-200/80 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400">
              Focus: Personal financial product recommendations, investment suitability, and product selection.
            </div>
          </div>
        </div>

        {/* Trustee Governance Notice */}
        <div className="rounded-2xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0 text-xl">
              <SafetyCertificateOutlined />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white m-0">
                Trustee Decision-Making Responsibility
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 m-0 mt-1 max-w-2xl leading-relaxed">
                Trustees remain responsible for the SMSF and its investment decisions even when accountants, administrators or other professionals assist with parts of the work.
              </p>
            </div>
          </div>

          <Link href="/book-an-appointment" className="shrink-0">
            <Button
              type="primary"
              size="large"
              icon={<ArrowRightOutlined />}
              iconPlacement="end"
              className="h-11 px-6 rounded-xl font-semibold shadow-md shadow-brand-primary/20 hover:scale-[1.02] active:scale-[0.99] transition-all"
            >
              Discuss Your Fund
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
