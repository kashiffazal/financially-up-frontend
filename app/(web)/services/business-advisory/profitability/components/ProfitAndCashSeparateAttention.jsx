"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  DollarOutlined,
  SyncOutlined,
  BankOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

/**
 * ProfitAndCashSeparateAttention Component
 * =========================================
 * Section 3: Profit and cash need separate attention
 * Source: 12th Pillar Business Advisory.docx (Lines 410-412)
 *
 * Implements 100% complete, verbatim SEO text explaining why accounting profit
 * differs from cash availability, debtor/inventory working capital friction,
 * and business.gov.au statutory integration guidelines.
 */
export default function ProfitAndCashSeparateAttention() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Cash vs Accruals
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Profit and Cash Need Separate Attention
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Profit reflects income and expenses recorded for a period; cash
            depends on when customers pay and obligations fall due. Improving
            margin can help but may not immediately fix a cash shortage. Slower
            debtor collection or stock purchases may place pressure on cash even
            when a profit and loss statement shows a positive result.
          </p>
        </div>

        {/* Comparative Dual Cards: Accounting Profit vs Bank Cash Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Accounting Profit */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-50/70 dark:bg-zinc-950/70 border border-slate-200/80 dark:border-zinc-800">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <DollarOutlined className="text-xl" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0">
                  Accounting Profit (P&amp;L)
                </h3>
                <p className="text-xs text-slate-500 dark:text-zinc-400 m-0">
                  Accrual revenue minus matched operational costs
                </p>
              </div>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 mt-1 shrink-0" />
                <span>Reflects invoices billed and expenses incurred within the financial period.</span>
              </li>
              <li className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 mt-1 shrink-0" />
                <span>Shows whether your pricing structure inherently covers direct costs and overhead.</span>
              </li>
              <li className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                <ExclamationCircleOutlined className="text-amber-500 mt-1 shrink-0" />
                <span>Does not guarantee immediate liquid cash in the commercial bank account.</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Operating Cash Flow */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-50/70 dark:bg-zinc-950/70 border border-slate-200/80 dark:border-zinc-800">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-800/40 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <SyncOutlined className="text-xl" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0">
                  Operating Cash Flow (Bank Balance)
                </h3>
                <p className="text-xs text-slate-500 dark:text-zinc-400 m-0">
                  Timing of receipts minus actual cash disbursements
                </p>
              </div>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                <CheckCircleOutlined className="text-blue-600 dark:text-blue-400 mt-1 shrink-0" />
                <span>Determined by debtor collection cycles and when customer funds clear.</span>
              </li>
              <li className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                <CheckCircleOutlined className="text-blue-600 dark:text-blue-400 mt-1 shrink-0" />
                <span>Constrained by inventory holding, loan principal, and tax payment schedules.</span>
              </li>
              <li className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                <ExclamationCircleOutlined className="text-amber-500 mt-1 shrink-0" />
                <span>Slower collections can produce cash crunches despite strong P&amp;L margins.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Business.gov.au Framework Callout & Cash Flow Integration */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-emerald-50/60 via-slate-50/40 to-white dark:from-emerald-950/20 dark:via-zinc-900 dark:to-zinc-950/40 border border-emerald-200/80 dark:border-emerald-800/50">
          <div className="flex items-start gap-4">
            <BankOutlined className="text-2xl sm:text-3xl text-emerald-600 dark:text-emerald-400 shrink-0 mt-1" />
            <div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                Unified Financial Statement Review (business.gov.au Guidance)
              </h4>
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                Business.gov.au recommends reviewing financial statements and
                budgets together when assessing a business&apos;s financial
                health. Our profitability analysis services can connect those
                reports with practical operating questions, while a cash flow
                forecast can help test the timing of a proposed change.
              </p>

              <Link href="/services/business-advisory/cash-flow-management">
                <Button
                  type="default"
                  icon={<ArrowRightOutlined />}
                  className="rounded-xl font-semibold bg-white dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 text-xs sm:text-sm"
                >
                  Explore Cash Flow Management Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
