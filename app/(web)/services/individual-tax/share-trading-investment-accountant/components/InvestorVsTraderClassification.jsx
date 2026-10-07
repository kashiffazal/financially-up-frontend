"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  StockOutlined,
  ShopOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

/**
 * InvestorVsTraderClassification Component
 * ========================================
 * Section 1: Share Investor or Share Trader.
 * Features 100% complete, verbatim content from Page 7 of the client document.
 */
export default function InvestorVsTraderClassification() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Tax Classification
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Share Investor or Share Trader
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            The Australian tax treatment of your share market activities depends fundamentally on whether your trading constitutes passive investing or carrying on a business.
          </p>
        </div>

        {/* 2-Column Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-12">
          {/* Card 1: Share Investor */}
          <div className="flex flex-col justify-between bg-slate-50/70 dark:bg-zinc-800/60 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-700/80 shadow-xs">
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <StockOutlined className="text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Share Investor
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-zinc-400">
                    Capital Gains Tax (CGT) Framework
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                <p>
                  A share investor generally buys and holds shares or units as investments. Shares are usually CGT assets, so a disposal may result in a capital gain or capital loss.
                </p>
                <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-emerald-100 dark:border-zinc-700 space-y-2">
                  <span className="font-bold text-slate-900 dark:text-white block text-xs uppercase tracking-wider">
                    Key Tax Characteristics:
                  </span>
                  <p>
                    Longer holding periods, dividend income focus, 50% CGT discount eligibility for shares held 12+ months, and capital losses quarantined against capital gains.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-zinc-700/60 text-2xs text-slate-500 dark:text-zinc-400">
              Most individual retail market participants fall into this category
            </div>
          </div>

          {/* Card 2: Share Trader */}
          <div className="flex flex-col justify-between bg-slate-50/70 dark:bg-zinc-800/60 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-700/80 shadow-xs">
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/60 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <ShopOutlined className="text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Share Trader
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-zinc-400">
                    Business Income &amp; Trading Stock
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                <p>
                  A share trader may be carrying on a business of share trading. Where that applies, shares may be treated as trading stock and sales, purchases and stock on hand may be dealt with under ordinary income and trading stock rules rather than the CGT rules applying to an investor.
                </p>
                <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-blue-100 dark:border-zinc-700 space-y-2">
                  <span className="font-bold text-slate-900 dark:text-white block text-xs uppercase tracking-wider">
                    Key Tax Characteristics:
                  </span>
                  <p>
                    Profits taxed as ordinary business income, trading losses generally deductible against ordinary income, and the 50% CGT discount is NOT available.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-zinc-700/60 text-2xs text-slate-500 dark:text-zinc-400">
              Requires business-like conduct, trading system and regular volume
            </div>
          </div>
        </div>

        {/* ATO Classification Criteria Callout */}
        <div className="p-6 sm:p-8 rounded-3xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/40 text-xs sm:text-sm text-amber-950 dark:text-amber-200 leading-relaxed shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="font-bold text-sm sm:text-base text-amber-900 dark:text-amber-100 block">
              ATO Multi-Factor Business Test:
            </span>
            <p className="m-0">
              Frequent transactions, a large portfolio or active market participation do not automatically make someone a share trader. The classification depends on the overall circumstances, including the nature, scale, repetition and organization of the activity, the intention behind it and whether it is conducted in a business-like manner.
            </p>
          </div>
          <Link href="/book-an-appointment" className="shrink-0">
            <Button
              type="primary"
              className="brand-btn-primary font-bold text-xs h-10 px-5 shadow-xs"
              icon={<ArrowRightOutlined />}
              iconPosition="end"
            >
              Assess Your Classification
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
