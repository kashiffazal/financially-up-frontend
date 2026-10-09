"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  PercentageOutlined,
  SwapOutlined,
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * WhatIsCgtAndWhenItApplies Component
 * ==================================
 * Section 1 & 2: What Is Capital Gains Tax? & When Does CGT Apply?
 * Features 100% complete, verbatim content from Page 6 of the client document.
 */
export default function WhatIsCgtAndWhenItApplies() {
  const commonEvents = [
    "Selling an investment property",
    "Disposing of shares or managed fund units",
    "Transferring ownership of an asset",
    "Dealing with jointly owned or inherited assets",
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
            Tax Framework
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Is Capital Gains Tax and When Does It Apply?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Understanding Australian CGT fundamentals, marginal tax rate
            application, and the statutory disposal events that trigger capital
            gain or capital loss calculations.
          </p>
        </div>

        {/* 2-Column Split Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-12">
          {/* Card 1: What Is CGT */}
          <div className="flex flex-col justify-between bg-slate-50/70 dark:bg-zinc-800/60 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-700/80 shadow-xs">
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <PercentageOutlined className="text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    What Is Capital Gains Tax?
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-zinc-400">
                    Income Tax Integration
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                <p>
                  Capital gains tax, usually called CGT, is part of the
                  Australian income tax system. A net capital gain is generally
                  included in your assessable income and taxed at your
                  applicable marginal tax rate. CGT is not a separate flat tax.
                </p>
                <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-emerald-100 dark:border-zinc-700">
                  <span className="font-bold text-slate-900 dark:text-white block mb-1">
                    CGT Events Explained:
                  </span>
                  A CGT event is an event that can result in a capital gain or
                  capital loss. A common example is disposing of a CGT asset,
                  such as an investment property, shares, units in a managed
                  fund or another investment asset. Not every asset is subject
                  to CGT, and not every disposal results in tax to pay. The
                  rules depend on the asset and your circumstances.
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-zinc-700/60 text-2xs text-slate-500 dark:text-zinc-400">
              Taxed at your individual marginal tax rate (up to 45% + Medicare
              levy)
            </div>
          </div>

          {/* Card 2: When Does CGT Apply */}
          <div className="flex flex-col justify-between bg-slate-50/70 dark:bg-zinc-800/60 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-700/80 shadow-xs">
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/60 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <SwapOutlined className="text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    When Does CGT Apply?
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-zinc-400">
                    Disposal &amp; Trigger Events
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                CGT can apply when you sell, transfer or otherwise dispose of a
                CGT asset. It may also apply in other circumstances under the
                CGT rules. Common situations include:
              </p>

              <div className="space-y-2.5 mb-5">
                {commonEvents.map((evt, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/70 dark:border-zinc-700/70 text-xs text-slate-700 dark:text-zinc-200 font-medium"
                  >
                    <CheckCircleOutlined className="text-blue-500 shrink-0" />
                    <span>{evt}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Professional CGT assistance may be useful when the ownership or
                use of an asset has changed, several CGT events need to be
                considered, records require review, or you need advice about
                potential CGT considerations before selling an asset.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-zinc-700/60 flex items-center justify-between">
              <span className="text-2xs text-slate-500 dark:text-zinc-400">
                Pre-sale scenario analysis available
              </span>
              <Link href="/book-an-appointment">
                <Button
                  type="link"
                  className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1 h-auto text-xs"
                  icon={<ArrowRightOutlined className="text-xs" />}
                  iconPlacement="end"
                >
                  Book CGT Review
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
