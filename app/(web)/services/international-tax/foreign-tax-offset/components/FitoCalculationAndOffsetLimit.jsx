"use client";

import React from "react";
import {
  CalculatorOutlined,
  DollarOutlined,
  CheckCircleFilled,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

/**
 * FitoCalculationAndOffsetLimit Component
 * ========================================
 * Section 2: How the offset amount is calculated & The FITO Limit
 * Exact verbatim content from Client Document (Page 6).
 */
export default function FitoCalculationAndOffsetLimit() {
  return (
    <section className="py-16 md:py-20 bg-white dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-100 text-indigo-800 dark:bg-indigo-950/80 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/80 mb-4">
            <CalculatorOutlined /> Calculation Methodology
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            How the Offset Amount Is Calculated
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            The offset is not always equal to the foreign tax paid. Australian tax law establishes a structured two-tier threshold for calculating relief from double taxation.
          </p>
        </div>

        {/* 2-Column Split: The $1,000 Threshold vs The Statutory FITO Limit */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Card 1: $1,000 De Minimis Method */}
          <div className="p-8 rounded-3xl bg-slate-50 dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/50 flex items-center justify-center text-teal-600 dark:text-teal-400 text-2xl">
                  <DollarOutlined />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-teal-100 text-teal-800 dark:bg-teal-950/80 dark:text-teal-300">
                  Claims Up To $1,000
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                $1,000 Simplified Method
              </h3>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                If the total FITO claimed is $1,000 or less, the claim can generally use the actual qualifying foreign income tax paid, up to $1,000, without calculating the FITO limit. This is not an automatic $1,000 entitlement; the taxpayer must still have paid qualifying tax connected with assessable income.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 text-xs text-slate-600 dark:text-zinc-400">
              Note: Capping a larger claim at $1,000 to avoid the limit formula forfeits any remaining unclaimed foreign tax indefinitely.
            </div>
          </div>

          {/* Card 2: The Statutory FITO Limit Calculation */}
          <div className="p-8 rounded-3xl bg-slate-50 dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center text-blue-600 dark:text-blue-400 text-2xl">
                  <CalculatorOutlined />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-950/80 dark:text-blue-300">
                  Claims Exceeding $1,000
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                The Statutory FITO Limit Formula
              </h3>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                If the claim is more than $1,000, the foreign income tax offset limit must be calculated. Broadly, that limit reflects the Australian tax otherwise payable on the relevant foreign income under the statutory calculation. Related deductions, losses, tax rates and other components of the Australian return can affect it. We complete the full calculation rather than comparing headline foreign and Australian tax rates.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 text-xs text-slate-600 dark:text-zinc-400">
              Calculates the precise difference between Australian tax payable with foreign income vs without foreign income.
            </div>
          </div>
        </div>

        {/* Warning Callout: Non-refundable & No carry forward */}
        <div className="p-6 sm:p-8 rounded-3xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/60 flex items-start gap-4">
          <ExclamationCircleOutlined className="text-2xl text-amber-600 dark:text-amber-400 mt-1 shrink-0" />
          <div className="space-y-2">
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              Critical Rule: Excess Offset Cannot Be Carried Forward
            </h4>
            <p className="text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
              An amount above the allowable FITO is not automatically refundable or available to carry into a later year. Choosing to claim only $1,000 to avoid the limit calculation can also mean the remaining foreign tax cannot be claimed in a future income year. The available evidence and complete Australian tax position should be reviewed before the claim is finalized.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
