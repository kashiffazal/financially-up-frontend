"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  SafetyCertificateOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  DollarOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * EssTaxVsCgtTwoStages Component
 * ==============================
 * Section 5: ESS tax and CGT are separate calculations.
 * Features 100% complete, verbatim content from Page 10 of the client document.
 */
export default function EssTaxVsCgtTwoStages() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Two-Stage Taxation Mechanism
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            ESS Tax and CGT Are Separate Calculations
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Australian tax legislation treats the initial employment discount and any subsequent market disposal as two distinct statutory calculations.
          </p>
        </div>

        {/* 2-Stage Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Stage 1: ESS Discount */}
          <div className="bg-slate-50/70 dark:bg-zinc-800/60 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-700/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-wider font-extrabold text-brand-primary dark:text-emerald-400 font-mono">
                  Stage 1
                </span>
                <Tag color="green" className="m-0 font-bold text-2xs uppercase">
                  Ordinary Income
                </Tag>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                The ESS Discount (Income Year Assessment)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                The ESS discount is included in assessable income under the employee share scheme rules.
              </p>
              <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/70 dark:border-zinc-700/70 text-xs text-slate-600 dark:text-zinc-300 leading-relaxed">
                Calculated as the market value of the shares or rights at the acquisition date or deferred taxing point, less any consideration paid.
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-zinc-700/60 text-2xs text-slate-500 dark:text-zinc-400">
              Taxed at your marginal tax rate in the relevant income year
            </div>
          </div>

          {/* Stage 2: CGT Disposal */}
          <div className="bg-slate-50/70 dark:bg-zinc-800/60 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-700/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-wider font-extrabold text-blue-600 dark:text-blue-400 font-mono">
                  Stage 2
                </span>
                <Tag color="blue" className="m-0 font-bold text-2xs uppercase">
                  Capital Gains Tax
                </Tag>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                Subsequent Disposal (CGT Provisions)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                A later disposal may produce a capital gain or capital loss under the CGT rules.
              </p>
              <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/70 dark:border-zinc-700/70 text-xs text-slate-600 dark:text-zinc-300 leading-relaxed">
                Measures only the growth (or decline) in value between the taxing point market value and the eventual disposal proceeds.
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-zinc-700/60 text-2xs text-slate-500 dark:text-zinc-400">
              Prevents the same amount being double-taxed as discount and capital gain
            </div>
          </div>
        </div>

        {/* Cost Base Reset & 30-Day Rule Deep Dive */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-12">
          {/* Card 1: Cost Base Reset Rules */}
          <div className="bg-slate-50/70 dark:bg-zinc-800/60 rounded-3xl p-7 border border-slate-200/80 dark:border-zinc-700/80 shadow-xs">
            <h4 className="text-base font-bold text-slate-900 dark:text-white mb-3">
              Cost Base and Acquisition Time Resets
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              <p>
                For a tax-deferred interest, the CGT cost base and acquisition time are generally reset using the market value at the deferred taxing point. Later CGT ordinarily measures the change in value after that point.
              </p>
              <p>
                For an interest taxed upfront, the cost base generally reflects the market value taken into account under the ESS rules, with later value changes considered under CGT. These rules are intended to prevent the same amount being taxed as both an ESS discount and a capital gain.
              </p>
            </div>
          </div>

          {/* Card 2: Special 30-Day Rule */}
          <div className="bg-amber-50/60 dark:bg-amber-950/20 rounded-3xl p-7 border border-amber-200/80 dark:border-amber-800/40 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 font-bold text-amber-900 dark:text-amber-200 text-sm mb-2">
                <ClockCircleOutlined />
                <span>The Special 30-Day Disposal Rule</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-normal mb-3">
                A special 30-day rule may apply if a tax-deferred interest is disposed of within 30 days after the taxing point that would otherwise apply. The disposal date may become the deferred taxing point, changing how the ESS discount and CGT consequences are calculated. Sale contracts and dates should therefore be reviewed before finalizing the return.
              </p>
            </div>

            <div className="pt-3 border-t border-amber-200/60 dark:border-amber-800/60 text-2xs text-amber-900 dark:text-amber-200 font-medium">
              The CGT discount is not automatic. Eligibility depends on the relevant acquisition time, holding period and other CGT conditions.
            </div>
          </div>
        </div>

        {/* CGT Cross Link */}
        <div className="p-4 sm:p-6 rounded-2xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-200/70 dark:border-zinc-700/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-600 dark:text-zinc-300">
          <span>For broader disposal rules, capital loss offsets and concession criteria:</span>
          <Link
            href="/services/individual-tax/capital-gains-tax"
            className="text-brand-primary dark:text-emerald-400 font-bold hover:underline inline-flex items-center gap-1 shrink-0"
          >
            Explore Capital Gains Tax Practice <ArrowRightOutlined className="text-xs" />
          </Link>
        </div>
      </div>
    </section>
  );
}
