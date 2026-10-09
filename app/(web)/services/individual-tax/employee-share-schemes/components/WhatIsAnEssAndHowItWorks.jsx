"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  StockOutlined,
  ThunderboltOutlined,
  ClockCircleOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";

/**
 * WhatIsAnEssAndHowItWorks Component
 * =================================
 * Section 1 & 2: What is an employee share scheme? & How employee share scheme tax works.
 * Features 100% complete, verbatim content from Page 10 of the client document.
 */
export default function WhatIsAnEssAndHowItWorks() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Equity Remuneration Framework
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Is an Employee Share Scheme and How Does It Work?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            An employee share scheme, commonly called an ESS, is an arrangement
            under which an employee receives shares, stapled securities, rights
            or options in connection with employment. The employee may pay less
            than market value or receive the interest subject to vesting,
            forfeiture or disposal conditions.
          </p>
        </div>

        {/* Core Rules Callout */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-200/70 dark:border-zinc-700/70 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-12">
          <span className="font-bold text-slate-900 dark:text-white block text-sm sm:text-base mb-1.5">
            How Discount Taxation Operates:
          </span>
          The ESS rules generally tax the discount received through employment.
          Timing and amount depend on the scheme, interest, amount paid, market
          value and whether conditions for concessional or deferred treatment
          are met. The ESS statement, plan documents and later transactions may
          all require review.
        </div>

        {/* 2 Taxation Pathways */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Upfront Taxation */}
          <div className="bg-slate-50/70 dark:bg-zinc-800/60 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-700/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800/60 flex items-center justify-center text-amber-600 dark:text-amber-400">
                  <ThunderboltOutlined className="text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Upfront Taxation
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-zinc-400">
                    Acquisition Year Assessable Discount
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                <p>
                  Under an upfront scheme, the ESS discount is generally
                  included in assessable income in the income year the interest
                  is acquired. Some eligible schemes may provide a concession,
                  but this depends on statutory conditions and is not automatic.
                </p>
                <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-amber-100 dark:border-zinc-700 space-y-1">
                  <span className="font-bold text-slate-900 dark:text-white block text-xs uppercase tracking-wider">
                    Concessional Reductions:
                  </span>
                  <p>
                    Where eligibility requirements are met, an upfront
                    concession (e.g. up to $1,000 reduction under qualifying
                    conditions) may be available.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-zinc-700/60 text-2xs text-slate-500 dark:text-zinc-400">
              Assessed in year of grant or acquisition
            </div>
          </div>

          {/* Card 2: Deferred Taxation */}
          <div className="bg-slate-50/70 dark:bg-zinc-800/60 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-700/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/60 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <ClockCircleOutlined className="text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Deferred Taxation
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-zinc-400">
                    Taxing Point at Vesting or Exercise
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                <p>
                  Under an eligible tax-deferred scheme, the discount is
                  generally included in assessable income in the year of the
                  deferred taxing point. For shares, this may be when there is
                  no longer a real risk of forfeiture and no genuine restriction
                  preventing disposal, or when the statutory maximum deferral
                  period is reached.
                </p>
                <p>
                  Rights and options require separate analysis. Exercise by
                  itself does not always determine the taxing point. The
                  conditions applying to the right and any resulting share,
                  including forfeiture risk and genuine disposal restrictions,
                  must be considered.
                </p>
                <div className="p-3.5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/40 text-xs text-amber-950 dark:text-amber-200 leading-relaxed">
                  <span className="font-bold block mb-1">
                    Crucial Legal Caution:
                  </span>
                  Vesting, a trading window opening or a restriction ending may
                  be relevant, but none should be assumed to be the taxing point
                  without checking the scheme terms and the ESS rules.
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-zinc-700/60 flex items-center justify-between">
              <span className="text-2xs text-slate-500 dark:text-zinc-400">
                15-year statutory maximum deferral limit
              </span>
              <Link href="/book-an-appointment">
                <Button
                  type="link"
                  className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1 h-auto text-xs"
                  icon={<ArrowRightOutlined className="text-xs" />}
                  iconPlacement="end"
                >
                  Verify Your Taxing Point
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
