"use client";

import React from "react";
import Link from "next/link";
import {
  ApartmentOutlined,
  ClockCircleOutlined,
  WarningOutlined,
  ArrowRightOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

/**
 * OwnershipAndTimingConsiderations Component
 * ==========================================
 * Section 6: Ownership structures, asset transfer costs, CGT Event A1 contract timing vs settlement,
 * and cross-link to Personal Tax Planning service.
 * Verbatim text from Page 12 of the Tax Planning document.
 */
export default function OwnershipAndTimingConsiderations() {
  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-100 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-primary/10 text-brand-primary dark:bg-emerald-500/10 dark:text-emerald-400 mb-4 border border-brand-primary/20 dark:border-emerald-500/20">
            Structural &amp; Timing Rules
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Ownership and Timing Considerations
          </h2>
        </div>

        {/* 2 Dual Pillar Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Ownership Structure & Transfer Costs */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center mb-6 border border-purple-100 dark:border-purple-800/50">
                <ApartmentOutlined className="text-2xl text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Ownership &amp; Transfer Costs
              </h3>
              <p className="text-slate-700 dark:text-zinc-300 text-base leading-relaxed mb-6">
                How an investment is owned can affect who reports the income and capital gains, but ownership should not be changed solely on a general assumption that another structure is &ldquo;more tax efficient&rdquo;. Transferring an existing asset can itself create tax and transaction costs.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-purple-50/60 dark:bg-purple-900/20 border border-purple-200/60 dark:border-purple-800/40 text-xs font-medium text-purple-800 dark:text-purple-300 flex items-start space-x-2">
              <WarningOutlined className="text-sm mt-0.5 shrink-0" />
              <span>Asset transfers trigger CGT disposals and state duties in most jurisdictions.</span>
            </div>
          </div>

          {/* Card 2: CGT Event A1 & Timing Rules */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-900/30 flex items-center justify-center mb-6 border border-amber-100 dark:border-amber-800/50">
                <ClockCircleOutlined className="text-2xl text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Contract Date vs Settlement Timing
              </h3>
              <p className="text-slate-700 dark:text-zinc-300 text-base leading-relaxed mb-6">
                Timing can also matter, but it is governed by the tax rules. For a disposal under a contract, CGT event A1 generally occurs when the contract is entered into rather than at settlement. Other CGT events can have different timing, so planning should be based on the actual transaction and documents.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-amber-50/60 dark:bg-amber-900/20 border border-amber-200/60 dark:border-amber-800/40 text-xs font-medium text-amber-800 dark:text-amber-300 flex items-start space-x-2">
              <CalendarOutlined className="text-sm mt-0.5 shrink-0" />
              <span>The date you sign the contract dictates the financial year of the tax event.</span>
            </div>
          </div>
        </div>

        {/* Verbatim Cross-Service Banner */}
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-zinc-900 dark:to-zinc-800/80 rounded-2xl p-6 sm:p-8 border border-purple-200 dark:border-purple-800/40 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 block mb-1">
                Holistic Individual Review
              </span>
              <p className="text-slate-700 dark:text-zinc-200 text-base font-medium leading-relaxed">
                For individuals who want a broader review of employment income, investments and other personal tax matters, our Personal Tax Planning service may be more suitable.
              </p>
            </div>
            <Link
              href="/services/tax-planning/personal-tax-planning"
              className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm transition-all shadow-sm hover:shadow shrink-0 group"
            >
              Personal Tax Planning
              <ArrowRightOutlined className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
