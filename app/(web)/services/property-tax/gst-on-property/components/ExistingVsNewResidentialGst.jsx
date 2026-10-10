"use client";

import React from "react";
import { Tag } from "antd";
import {
  HomeOutlined,
  BuildOutlined,
  ClockCircleOutlined,
  StopOutlined,
  CheckCircleOutlined,
  AlertOutlined,
} from "@ant-design/icons";

/**
 * ExistingVsNewResidentialGst Component
 * =====================================
 * Section: Existing and new residential premises.
 * Features 100% complete, verbatim content from Page 6 of 10th Pillar Property Tax.docx.
 */
export default function ExistingVsNewResidentialGst() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Residential Property Rules
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Existing and New Residential Premises
          </h2>
        </div>

        {/* 2 Primary Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Existing Residential (Input Taxed) */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-6">
              <HomeOutlined className="text-2xl text-slate-600 dark:text-zinc-300" />
            </div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-zinc-400 mb-2">
              <StopOutlined />
              <span>Input-Taxed Supplies (No GST Charged)</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
              Existing Residential Premises
            </h3>
            {/* Verbatim text from official document */}
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-6">
              The sale or long-term rental of existing residential premises is generally input taxed. The seller does not charge GST, and acquisitions relating to those input-taxed supplies generally do not give rise to GST credits.
            </p>
            <div className="pt-4 border-t border-slate-100 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400">
              Applies to established residential homes and long-term residential leases.
            </div>
          </div>

          {/* Card 2: New Residential Premises (Taxable) */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-9 border-2 border-emerald-500/40 dark:border-emerald-500/30 shadow-xs relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center mb-6">
              <BuildOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />
            </div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-2">
              <CheckCircleOutlined />
              <span>Taxable Supplies (GST Applies)</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
              New Residential Premises
            </h3>
            {/* Verbatim text from official document */}
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-6">
              A taxable sale can arise for new residential premises. Premises may be new because they have not previously been sold as residential premises, were created through substantial renovations, or were built to replace demolished premises on the same land. Building age alone is not a complete test.
            </p>
            <div className="pt-4 border-t border-slate-100 dark:border-zinc-800 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
              Subject to purchaser withholding at settlement and margin scheme eligibility.
            </div>
          </div>
        </div>

        {/* Verbatim Paragraph 3 Banner (5-Year Continuous Rental Rule) */}
        <div className="bg-slate-900 text-white dark:bg-zinc-900 rounded-2xl p-6 sm:p-8 border border-slate-800 flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
            <ClockCircleOutlined className="text-2xl" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block mb-1">
              The 5-Year Continuous Rental Rule
            </span>
            {/* Verbatim text from official document */}
            <p className="text-xs sm:text-sm md:text-base text-slate-200 dark:text-zinc-200 leading-relaxed font-normal">
              Residential premises that would otherwise be new may cease to be new after being used solely to make input-taxed residential rental supplies for a continuous period of at least five years. The precise history and statutory conditions matter. Commercial residential premises, such as qualifying hotels or similar accommodation, follow different GST rules.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
