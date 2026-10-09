"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  CalculatorOutlined,
  DollarOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

/**
 * HowCapitalGainIsCalculated Component
 * ====================================
 * Section 3 & 4: How Is a Capital Gain Calculated? & Understanding the Cost Base.
 * Features 100% complete, verbatim content from Page 6 of the client document.
 */
export default function HowCapitalGainIsCalculated() {
  const steps = [
    {
      num: "1",
      title: "Determine Capital Proceeds",
      desc: "Determine the capital proceeds from each relevant CGT event.",
    },
    {
      num: "2",
      title: "Calculate Cost Base",
      desc: "Work out the applicable cost base or reduced cost base, including permitted components and adjustments.",
    },
    {
      num: "3",
      title: "Calculate Gain or Loss & Exemptions",
      desc: "Calculate the capital gain or capital loss for each event and apply any relevant exemption or concession.",
    },
    {
      num: "4",
      title: "Offset Capital Losses",
      desc: "Apply current-year capital losses and eligible carried-forward net capital losses against capital gains.",
    },
    {
      num: "5",
      title: "Apply CGT Discount",
      desc: "Apply the CGT discount to any remaining eligible discount capital gains where the conditions are satisfied.",
    },
    {
      num: "6",
      title: "Include Net Gain in Income",
      desc: "Include the resulting net capital gain in assessable income.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Step-by-Step Methodology
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How Is a Capital Gain Calculated?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            At a general level, a capital gain is worked out by comparing the
            capital proceeds from a CGT event with the asset&apos;s relevant
            cost base. A capital loss may arise where the capital proceeds are
            less than the asset&apos;s reduced cost base.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-9 h-9 rounded-xl bg-brand-primary/10 dark:bg-emerald-500/20 text-brand-primary dark:text-emerald-400 font-black text-sm flex items-center justify-center font-mono">
                    {step.num}
                  </span>
                  <span className="text-2xs font-semibold text-slate-400 dark:text-zinc-500 uppercase tracking-wider">
                    Step {step.num} of 6
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-zinc-800 flex items-center gap-1.5 text-2xs text-emerald-600 dark:text-emerald-400 font-medium">
                <CheckCircleOutlined />
                <span>Statutory Calculation Sequence</span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-slate-500 dark:text-zinc-400 mb-12 italic">
          The method and order can depend on the asset, CGT event and available
          concessions. This is a general explanation only and is not a
          personalized calculation.
        </p>

        {/* Understanding the Cost Base Deep Dive */}
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-7 sm:p-10 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8 pb-6 border-b border-slate-100 dark:border-zinc-800">
            <div>
              <span className="text-2xs font-bold uppercase tracking-wider text-brand-primary dark:text-emerald-400 block mb-1">
                Substantiation Focus
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Understanding the Cost Base
              </h3>
            </div>
            <Link href="/book-an-appointment">
              <Button
                type="primary"
                className="brand-btn-primary font-bold text-xs sm:text-sm h-10 px-5 shadow-xs"
                icon={<ArrowRightOutlined />}
                iconPlacement="end"
              >
                Request Cost-Base Review
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            <div className="space-y-4">
              <p>
                The cost base is not simply the original purchase price.
                Depending on the CGT rules, it may include permitted acquisition
                costs, certain disposal costs, eligible ownership costs, capital
                improvements and other qualifying amounts.
              </p>
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/70 dark:border-zinc-700/70">
                <span className="font-bold text-slate-900 dark:text-white block mb-1">
                  Permitted Elements Include:
                </span>
                Purchase consideration, conveyancing legal costs, stamp duty,
                selling agent fees, advertising costs, and major structural
                improvements.
              </div>
            </div>

            <div className="space-y-4">
              <p>
                Not every expense connected with an asset belongs in the cost
                base. Amounts already claimed or otherwise deductible may need
                to be excluded or adjusted, and capital works deductions can
                affect a property&apos;s cost base. An accountant experienced in
                CGT can review the available records and determine which amounts
                should be considered.
              </p>
              <div className="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/40 text-xs text-amber-950 dark:text-amber-200">
                <span className="font-bold block mb-1">
                  Division 43 Adjustment Warning:
                </span>
                Capital works deductions claimed during ownership must be
                subtracted from the cost base when calculating a capital gain.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
