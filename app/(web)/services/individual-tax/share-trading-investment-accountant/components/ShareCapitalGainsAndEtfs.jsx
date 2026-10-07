"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  LineChartOutlined,
  FileTextOutlined,
  SwapOutlined,
  FallOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * ShareCapitalGainsAndEtfs Component
 * =================================
 * Section 3 & 4: Capital Gains and Losses from Shares & ETFs Managed Funds.
 * Features 100% complete, verbatim content from Page 7 of the client document.
 */
export default function ShareCapitalGainsAndEtfs() {
  const statementTypes = [
    "Annual Tax Statement",
    "Standard Distribution Statement (SDS)",
    "Attribution Managed Investment Trust (AMIT) Member Annual Statement",
  ];

  const statementComponents = [
    "Trust distributions (taxable income)",
    "Discounted & non-discounted capital gains",
    "Franking credits & franked dividends",
    "Foreign income & foreign income tax offsets (FITO)",
    "AMIT cost-base increase or decrease adjustments",
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Disposals &amp; Fund Structures
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Share Capital Gains, ETFs and Managed Funds
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Managing share parcel cost bases, capital loss offsets, 12-month discounts, and the intricate tax components of exchange-traded funds and managed investments.
          </p>
        </div>

        {/* 2-Column Equal Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-12">
          {/* Left Column: Capital Gains & Losses from Shares */}
          <div className="flex flex-col justify-between bg-slate-50/70 dark:bg-zinc-800/60 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-700/80 shadow-xs">
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <LineChartOutlined className="text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Capital Gains and Losses from Shares
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-zinc-400">
                    Parcel Tracking &amp; CGT Discounts
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                <p>
                  When an investor disposes of shares, the calculation generally considers the capital proceeds, acquisition cost and eligible incidental costs such as brokerage. Accurate parcel records are important where the same shares were purchased at different times and prices.
                </p>

                <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 space-y-2">
                  <span className="font-bold text-slate-900 dark:text-white block text-xs uppercase tracking-wider">
                    Loss Quarantining &amp; 50% Concession:
                  </span>
                  <p>
                    Capital losses can generally be applied against capital gains, but not against salary, dividends or other ordinary income. Unused net capital losses may generally be carried forward. An eligible individual may be able to apply the CGT discount to shares held for at least 12 months, after applying relevant capital losses.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-zinc-700/60 flex items-center justify-between">
              <span className="text-2xs text-slate-500 dark:text-zinc-400">
                Broader CGT disposals supported
              </span>
              <Link href="/services/individual-tax/capital-gains-tax">
                <Button
                  type="link"
                  className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1 h-auto text-xs"
                  icon={<ArrowRightOutlined className="text-xs" />}
                  iconPosition="end"
                >
                  View Capital Gains Tax Service
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: ETFs & Managed Funds */}
          <div className="flex flex-col justify-between bg-slate-50/70 dark:bg-zinc-800/60 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-700/80 shadow-xs">
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/60 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <FileTextOutlined className="text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    ETFs, Managed Funds &amp; Statements
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-zinc-400">
                    AMIT Statements &amp; Cost-Base Adjustments
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                <p>
                  ETFs and managed funds do not all have identical tax treatment. Depending on the investment structure, an investor may receive an annual tax statement, Standard Distribution Statement or Attribution Managed Investment Trust Member Annual statement.
                </p>

                <div className="space-y-1.5 p-3.5 rounded-2xl bg-white dark:bg-zinc-900 border border-blue-100 dark:border-zinc-700">
                  <span className="font-bold text-slate-900 dark:text-white block text-2xs uppercase tracking-wider mb-1">
                    Complex Statement Components:
                  </span>
                  {statementComponents.map((comp, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-zinc-300">
                      <CheckCircleOutlined className="text-blue-500 text-xs shrink-0" />
                      <span>{comp}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3.5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/40 text-xs text-amber-950 dark:text-amber-200">
                  <span className="font-bold block mb-1">
                    Cash vs Taxable Income:
                  </span>
                  The amounts reported for tax may differ from the cash received. Financially Up can review the relevant statement components, including investments held through multiple funds or platforms.
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-zinc-700/60 text-2xs text-slate-500 dark:text-zinc-400">
              Vanguard, Betashares, VanEck &amp; managed fund statements verified
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
