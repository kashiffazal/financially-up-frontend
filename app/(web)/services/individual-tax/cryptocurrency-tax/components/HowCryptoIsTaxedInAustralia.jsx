"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  SafetyCertificateOutlined,
  StockOutlined,
  ShopOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * HowCryptoIsTaxedInAustralia Component
 * =====================================
 * Section 1: How is cryptocurrency taxed in Australia?
 * Features 100% complete, verbatim content from Page 8 of the client document.
 */
export default function HowCryptoIsTaxedInAustralia() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            ATO Regulatory Framework
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How Is Cryptocurrency Taxed in Australia?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            For many Australian individuals holding crypto as an investment, cryptocurrency is generally a CGT asset. A capital gain or capital loss may arise when a CGT event happens. Different treatment may apply when crypto is received as income or held as part of a business.
          </p>
        </div>

        {/* 2-Column Framework Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-12">
          {/* Card 1: Crypto as a CGT Asset */}
          <div className="flex flex-col justify-between bg-slate-50/70 dark:bg-zinc-800/60 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-700/80 shadow-xs">
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <StockOutlined className="text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Crypto as an Investment (CGT Asset)
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-zinc-400">
                    Capital Gains Tax Regime
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                <p>
                  For an investor, holding Bitcoin, Ethereum, Solana or other digital tokens is treated under the Capital Gains Tax provisions of the Australian tax legislation.
                </p>
                <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-emerald-100 dark:border-zinc-700 space-y-2">
                  <span className="font-bold text-slate-900 dark:text-white block text-xs uppercase tracking-wider">
                    Core Principles:
                  </span>
                  <p>
                    Every sale, crypto-to-crypto swap or commercial spend triggers a CGT event. Holdings held longer than 12 months may qualify for a 50% CGT discount.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-zinc-700/60 text-2xs text-slate-500 dark:text-zinc-400">
              Applicable to the vast majority of individual holders
            </div>
          </div>

          {/* Card 2: Business & Trading Stock Classification */}
          <div className="flex flex-col justify-between bg-slate-50/70 dark:bg-zinc-800/60 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-700/80 shadow-xs">
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/60 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <ShopOutlined className="text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Crypto Trading Business
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-zinc-400">
                    Ordinary Income &amp; Trading Stock
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                <p>
                  Frequent transactions or a large portfolio do not, by themselves, establish a crypto-trading business. Classification depends on your purpose, organization, repetition and the commercial nature of the activity. Where a business is carried on, crypto may be trading stock and gains may be ordinary income.
                </p>
                <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-blue-100 dark:border-zinc-700 space-y-2">
                  <span className="font-bold text-slate-900 dark:text-white block text-xs uppercase tracking-wider">
                    Business Indicators:
                  </span>
                  <p>
                    Significant capital commitment, business plan, systematic charting/bots, dedicated commercial premises, and active inventory management.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-zinc-700/60 text-2xs text-slate-500 dark:text-zinc-400">
              Does not receive 50% CGT discount; profits taxed as ordinary revenue
            </div>
          </div>
        </div>

        {/* Section Cross-Link Strip */}
        <div className="p-4 sm:p-6 rounded-2xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-200/70 dark:border-zinc-700/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-600 dark:text-zinc-300">
          <span>This page focuses on crypto-specific reporting. Looking for comprehensive personal income returns?</span>
          <Link
            href="/services/individual-tax"
            className="text-brand-primary dark:text-emerald-400 font-bold hover:underline inline-flex items-center gap-1 shrink-0"
          >
            Explore Individual Tax Services <ArrowRightOutlined className="text-xs" />
          </Link>
        </div>
      </div>
    </section>
  );
}
