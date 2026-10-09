"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  ShopOutlined,
  CalendarOutlined,
  CheckCircleOutlined,
  InfoCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * AssetPurchasesAndYearEndPlanning Component
 * ==========================================
 * Sections 6 & 7: Asset Purchases and Major Business Decisions & Year-End Business Tax Planning.
 * Verbatim text from Page 2 of '3rd Pillar Tax Planning & Advisory Final Content Pages 1-12.docx'.
 *
 * Explains capital asset depreciation, transaction timing before contracts are signed,
 * and pre-30 June statutory milestones.
 */
export default function AssetPurchasesAndYearEndPlanning() {
  const yearEndFocusItems = [
    "Expected profit & trading performance projections",
    "Incomplete bookkeeping reconciliation & ledger adjustments",
    "Eligible business expenses & substantiated prepayments",
    "Asset transactions & instant asset write-off thresholds",
    "PAYG instalments & quarterly cash-outflow forecasts",
    "GST positions & quarterly business activity statements",
    "Owner-related transactions, drawings & shareholder balances",
    "Matters requiring legal action or documentation before year end",
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
            Transactions &amp; Year-End Milestones
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Asset Purchases, Major Decisions &amp; Year-End Planning
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Before acquiring equipment, selling a business asset, changing
            ownership or restructuring, it is useful to understand the tax
            treatment and timing. Deductions, depreciation, capital gains
            treatment and GST consequences can vary by asset and transaction. A
            purchase should not be accelerated solely because someone expects an
            immediate deduction.
          </p>
          <p className="mt-3 text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
            Similarly, a proposed sale or restructure can involve tax
            consequences that are difficult to change after contracts are
            signed. Where legal documents, valuations or financial product
            advice are required, those matters may need separate legal,
            valuation or licensed financial advice.
          </p>
        </div>

        {/* Year-End Business Tax Planning Deep-Dive Card */}
        <div className="rounded-2xl bg-slate-50/80 dark:bg-zinc-950/80 border border-slate-200/80 dark:border-zinc-800 p-7 sm:p-10 mb-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8 pb-6 border-b border-slate-200/80 dark:border-zinc-800">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-bold text-brand-primary dark:text-emerald-400 uppercase tracking-wider">
                Pre-30 June Strategy
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Year-End Business Tax Planning
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                A year-end review usually focuses on the information available
                before the close of the financial year. It may include expected
                profit, incomplete bookkeeping, business expenses, asset
                transactions, PAYG instalments, GST positions, owner-related
                transactions and matters that require action or documentation
                before year end.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                The goal is to understand the likely position, consider
                legitimate timing or structural issues where relevant, and keep
                the documentation needed for later compliance work.
              </p>
            </div>
            <div className="shrink-0 w-full lg:w-auto">
              <Link href="/services/tax-planning/year-end-planning">
                <Button
                  type="primary"
                  size="large"
                  icon={<ArrowRightOutlined />}
                  iconPlacement="end"
                  className="w-full lg:w-auto rounded-xl font-bold bg-brand-primary dark:bg-emerald-500 text-white hover:bg-brand-primary/90 h-11 px-6"
                >
                  Explore Year-End Planning
                </Button>
              </Link>
            </div>
          </div>

          {/* 8 Year-End Checklist Focus Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {yearEndFocusItems.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800/90 flex items-start gap-3 hover:border-emerald-400/60 transition-colors"
              >
                <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-sm mt-0.5 shrink-0" />
                <span className="text-xs font-medium text-slate-700 dark:text-zinc-300 leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Advisory Boundaries Notice */}
        <div className="rounded-2xl bg-blue-50/80 dark:bg-blue-950/30 border border-blue-200/80 dark:border-blue-800/50 p-5 sm:p-6 flex items-start gap-3.5 w-full">
          <InfoCircleOutlined className="text-blue-600 dark:text-blue-400 text-lg mt-0.5 shrink-0" />
          <p className="text-xs sm:text-sm text-blue-900 dark:text-blue-200 leading-relaxed font-normal">
            <strong>Advisory Scope Note:</strong> Financially Up provides
            registered tax agent advisory. Where commercial valuations, formal
            legal conveyance documents, or Australian Financial Services (AFS)
            product advice are required, those services are scoped separately
            with appropriate qualified specialists.
          </p>
        </div>
      </div>
    </section>
  );
}
