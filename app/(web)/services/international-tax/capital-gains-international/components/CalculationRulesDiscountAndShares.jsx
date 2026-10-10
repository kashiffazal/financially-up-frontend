"use client";

import React from "react";
import {
  CalculatorOutlined,
  HomeOutlined,
  LineChartOutlined,
  CheckCircleFilled,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

/**
 * CalculationRulesDiscountAndShares Component
 * ============================================
 * Section 3: How is the Australian gain calculated? Foreign homes, CGT discount & foreign shares
 * Exact verbatim content from Client Document (Page 7).
 */
export default function CalculationRulesDiscountAndShares() {
  return (
    <section className="py-16 md:py-20 bg-slate-50 dark:bg-zinc-900/60 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-teal-100 text-teal-800 dark:bg-teal-950/80 dark:text-teal-300 border border-teal-200 dark:border-teal-800/80 mb-4">
            <CalculatorOutlined /> Gain Formulation & Rules
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            How Is the Australian Gain Calculated?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            We identify the CGT event and relevant dates, proceeds, cost base, ownership share and any applicable adjustments. Purchase and sale costs, improvements, capital works deductions and other items may require review. Amounts denominated in foreign currency need to be converted under the applicable Australian rules; a gain measured in local currency is not necessarily the Australian dollar gain.
          </p>
        </div>

        {/* 2-Column Split: Foreign Homes & Discount Apportionment vs Foreign Shares */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Card 1: Foreign Homes & CGT Discount Reduction */}
          <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/50 flex items-center justify-center text-amber-600 dark:text-amber-400 text-2xl mb-5">
                <HomeOutlined />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Overseas Homes & CGT Discount Apportionment
              </h3>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                A property used as a home overseas is not automatically exempt from Australian CGT. Main residence treatment requires review of the Australian eligibility rules, periods of occupation and absence, other homes and tax residency.
              </p>
              <div className="p-4 rounded-xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/60">
                <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
                  The CGT discount also depends on the asset, holding period and residency history. Foreign or temporary resident periods after 8 May 2012 can reduce the discount available, so the full 50% individual discount should not be assumed.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800 text-xs font-semibold text-slate-500 dark:text-zinc-400">
              Statutory discount apportionment formula under Subdivision 115-B ITAA 1997.
            </div>
          </div>

          {/* Card 2: Foreign Shares & Portfolio Disposals */}
          <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center text-blue-600 dark:text-blue-400 text-2xl mb-5">
                <LineChartOutlined />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                CGT on Foreign Shares in Australia
              </h3>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                CGT on foreign shares in Australia also requires careful records. Dividend income is a separate question from the gain or loss when shares are sold. Corporate actions, reinvested dividends and the acquisition history can affect the calculation.
              </p>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-800/70 border border-slate-200/80 dark:border-zinc-700/80">
                <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
                  The scope of foreign asset CGT advice in Australia is therefore determined by the assets and records involved, not a fixed percentage of a sale price.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800 text-xs font-semibold text-slate-500 dark:text-zinc-400">
              Accurate cost base reconstruction across foreign dividend reinvestment and corporate spin-offs.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
