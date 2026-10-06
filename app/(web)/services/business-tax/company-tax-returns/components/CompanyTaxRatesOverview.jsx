"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  PercentageOutlined,
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  InfoCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * CompanyTaxRatesOverview Component
 * =================================
 * Section: Company Tax Rates and Taxable Income
 * Features 100% complete, verbatim content from Page 2 of client docx.
 * Explains Base Rate Entity eligibility (aggregated turnover & passive income ratio) vs General Company Rate.
 */
export default function CompanyTaxRatesOverview() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Tax Rates & Assessment
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Company Tax Rates and Taxable Income
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Australian companies are taxed under company tax rules, and the applicable rate can depend on whether the company qualifies as a base rate entity or falls under the general company rate.
          </p>
        </div>

        {/* 2-Tier Tax Comparison Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Card 1: Base Rate Entity */}
          <div className="bg-emerald-50/60 dark:bg-emerald-950/20 rounded-2xl p-7 sm:p-9 border-2 border-emerald-400/40 dark:border-emerald-700/40 shadow-xs relative flex flex-col justify-between">
            <div className="absolute -top-3 right-6 bg-brand-primary text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-full tracking-wider shadow-xs">
              Concessional Rate
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-center text-brand-primary dark:text-emerald-400 font-extrabold text-xl">
                  25%
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Base Rate Entity
                  </h3>
                  <span className="text-xs text-emerald-700 dark:text-emerald-400 font-medium">
                    Applicable to qualifying small-to-medium businesses
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-5">
                Base rate entity eligibility depends on the relevant aggregated-turnover requirement and the proportion of the company’s assessable income that is base rate entity passive income, not simply whether the company considers itself small.
              </p>

              <div className="space-y-3 bg-white/80 dark:bg-zinc-900/80 rounded-xl p-4 border border-emerald-200/60 dark:border-emerald-800/40">
                <div className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 text-sm mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                    <strong>Aggregated Turnover Test:</strong> Turnover of company plus connected entities must sit under the statutory threshold (currently $50 million).
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 text-sm mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                    <strong>Passive Income Ratio:</strong> 80% or less of assessable income is base rate entity passive income (such as rent, royalties, dividends, or interest).
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-emerald-200/60 dark:border-emerald-800/40 text-xs text-slate-600 dark:text-zinc-400">
              Assessed annually based on full-year activity and connected entity revenue.
            </div>
          </div>

          {/* Card 2: General Company Rate */}
          <div className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 flex items-center justify-center text-slate-700 dark:text-zinc-300 font-extrabold text-xl">
                  30%
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    General Company Tax Rate
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-zinc-400 font-medium">
                    Standard corporate tax rate
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-5">
                Companies that do not meet the base rate entity criteria—such as corporate investment vehicles where passive income exceeds 80%, or large entities exceeding turnover thresholds—are taxed at the standard 30% rate.
              </p>

              <div className="space-y-3 bg-white dark:bg-zinc-900 rounded-xl p-4 border border-slate-200/80 dark:border-zinc-800">
                <div className="flex items-start gap-2.5">
                  <InfoCircleOutlined className="text-blue-500 text-sm mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                    <strong>Corporate Beneficiaries & Passive Companies:</strong> Buckets companies or entities primarily holding shares, interest, or passive rentals.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <InfoCircleOutlined className="text-blue-500 text-sm mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                    <strong>Franking Account Credit Rate:</strong> Governs maximum franking credit allocations on dividend payments to shareholders.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-zinc-800 text-xs text-slate-600 dark:text-zinc-400">
              Ensures franking credits and corporate tax distributions are mathematically compliant.
            </div>
          </div>
        </div>

        {/* Verbatim Methodological Callout Card */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-950 text-white rounded-2xl p-7 sm:p-9 shadow-md">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-400">
                <SafetyCertificateOutlined /> Our Assessment Methodology
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Verifying Your Tax Position Rather Than Making Assumptions
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Rather than assuming a rate, we review the company’s circumstances and apply the relevant treatment for the year being prepared. This is particularly important where the company receives passive income, has related entities or has changed significantly during the year.
              </p>
            </div>
            <Link href="/book-an-appointment">
              <Button
                type="primary"
                className="bg-brand-primary hover:bg-brand-primary-hover text-white font-semibold text-xs rounded-xl shadow-xs shrink-0 h-11 px-6"
              >
                Book Rate Assessment
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
