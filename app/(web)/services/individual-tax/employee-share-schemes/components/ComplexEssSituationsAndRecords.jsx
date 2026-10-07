"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  FileProtectOutlined,
  BranchesOutlined,
  HistoryOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  WarningOutlined,
} from "@ant-design/icons";

/**
 * ComplexEssSituationsAndRecords Component
 * ========================================
 * Section 6 & 7: When ESS matters become more complicated & Records to keep.
 * Features 100% complete, verbatim content from Page 10 of the client document.
 */
export default function ComplexEssSituationsAndRecords() {
  const complexTriggers = [
    "Multiple grants or different scheme types",
    "Rights or options that were exercised, lapsed or forfeited",
    "Unlisted shares or valuation questions",
    "Foreign-parent company shares or amounts in another currency",
    "Genuine disposal restrictions or a real risk of forfeiture",
    "Missing or amended ESS statements",
    "Shares sold close to the deferred taxing point",
    "A change of employer, corporate action or plan restructure",
  ];

  const records = [
    "ESS statements and any amended statements",
    "Grant, acquisition, vesting, exercise and taxing-point dates",
    "Plan rules, offer documents and employer correspondence",
    "The number and type of shares, rights or options",
    "Amounts paid, discounts and supporting market values",
    "Evidence of forfeiture risks and disposal restrictions",
    "Sale contracts, brokerage and other transaction costs",
    "Records of lapses, forfeitures, corporate actions and currency conversion",
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Complexity &amp; Substantiation
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Complex ESS Matters and Records to Keep
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Managing corporate actions, unlisted startup valuations, foreign equity plans, and essential record retention standards.
          </p>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-12">
          {/* Left Column: Complex Matters */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800/60 flex items-center justify-center text-amber-600 dark:text-amber-400">
                  <WarningOutlined className="text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    When ESS Matters Become More Complicated
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-zinc-400">
                    High Complexity Triggers
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                Professional review may be useful where you have:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                {complexTriggers.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-100 dark:border-zinc-700/50 text-xs text-slate-700 dark:text-zinc-200 font-medium"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="p-3.5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/40 text-xs text-amber-950 dark:text-amber-200 leading-relaxed">
                <span className="font-bold block mb-1">
                  Forfeited Interests &amp; Lapsed Rights:
                </span>
                If an ESS interest is forfeited or a right lapses, the outcome depends on why it was lost, whether the loss was connected with the scheme conditions and whether an ESS amount was previously included. An amendment may be available in some circumstances, but this should not be assumed without reviewing the facts.
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800 text-2xs text-slate-400 dark:text-zinc-500">
              Tech sector &amp; multinational stock plan specialists
            </div>
          </div>

          {/* Right Column: Records to Keep */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/60 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <FileProtectOutlined className="text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Records to Keep
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-zinc-400">
                    Statutory Substantiation Checklist
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                Useful records include:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                {records.map((rec, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 p-2 rounded-xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-100 dark:border-zinc-700/50 text-xs text-slate-700 dark:text-zinc-200 font-medium"
                  >
                    <CheckCircleOutlined className="text-emerald-500 mt-0.5 shrink-0" />
                    <span>{rec}</span>
                  </div>
                ))}
              </div>

              <div className="p-3.5 rounded-2xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200/70 dark:border-blue-800/40 text-xs text-blue-950 dark:text-blue-200 leading-relaxed">
                <div className="flex items-center gap-2 font-bold mb-1">
                  <HistoryOutlined />
                  <span>Statutory Record Retention Period:</span>
                </div>
                Keep records supporting the tax return for the required retention period. CGT records may need to be kept until at least five years after the relevant disposal, particularly where they establish acquisition dates and cost bases.
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800 flex items-center justify-between">
              <span className="text-2xs text-slate-400 dark:text-zinc-500">
                Plan rules &amp; offer letters archived digitally
              </span>
              <Link href="/book-an-appointment">
                <Button
                  type="link"
                  className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1 h-auto text-xs"
                  icon={<ArrowRightOutlined className="text-xs" />}
                  iconPosition="end"
                >
                  Book Record Review
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
