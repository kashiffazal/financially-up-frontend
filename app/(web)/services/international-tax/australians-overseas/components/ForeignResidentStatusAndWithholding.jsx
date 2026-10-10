"use client";

import React from "react";
import {
  GlobalOutlined,
  HomeOutlined,
  DollarOutlined,
  CheckCircleFilled,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

/**
 * ForeignResidentStatusAndWithholding Component
 * ============================================
 * Section 2: What if you become a foreign resident? & Foreign resident capital gains withholding
 * Exact verbatim content from Client Document (Page 8).
 */
export default function ForeignResidentStatusAndWithholding() {
  return (
    <section className="py-16 md:py-20 bg-white dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-rose-100 text-rose-800 dark:bg-rose-950/80 dark:text-rose-300 border border-rose-200 dark:border-rose-800/80 mb-4">
            <GlobalOutlined /> Non-Resident Obligations
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            What If You Become a Foreign Resident?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A foreign resident for Australian tax purposes generally declares Australian-sourced income that remains taxable here, such as Australian rent, and gains on taxable Australian property. The answer is not “no return” simply because you moved away. The type of income and whether a return is required need to be reviewed for each year.
          </p>
        </div>

        {/* 2-Column Split: Real Property & 15% FRCGW vs Passive Withholding */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-8">
          {/* Left Column: Real Property & FRCGW 15% Rate */}
          <div className="lg:col-span-7 p-8 rounded-3xl bg-slate-50 dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/50 flex items-center justify-center text-amber-600 dark:text-amber-400 text-xl">
                <HomeOutlined />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                Australian Rental Property & 15% CGT Withholding
              </h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-5">
              If you keep an Australian rental property, you need reliable rent and expense records and should consider how ownership and a future sale fit into your plans. Selling Australian real property can raise CGT, foreign-resident main-residence restrictions and foreign resident capital gains withholding.
            </p>
            <div className="p-5 rounded-2xl bg-rose-50/80 dark:bg-rose-950/30 border border-rose-200/80 dark:border-rose-800/60 mb-5">
              <div className="flex items-start gap-3">
                <ExclamationCircleOutlined className="text-rose-600 dark:text-rose-400 text-lg mt-0.5 shrink-0" />
                <p className="text-xs sm:text-sm text-slate-800 dark:text-zinc-200 leading-relaxed font-normal">
                  For contracts signed from 1 January 2025, the withholding rate is 15% and there is no property-value threshold. An Australian-resident vendor generally needs a valid ATO clearance certificate by settlement to prevent withholding, while a foreign-resident vendor may need to consider whether a variation is available. Withholding is not necessarily the final tax liability and a tax return may be needed to claim the credit.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Australian Interest & Dividends */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-slate-50 dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center text-blue-600 dark:text-blue-400 text-xl">
                  <DollarOutlined />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  Passive Income & Non-Resident Withholding
                </h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                Some foreign residents also have Australian interest or dividends subject to withholding arrangements that differ from ordinary return reporting. We examine the payment type and available statements rather than assume every receipt is entered in the same way.
              </p>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Employer, superannuation and business interests may create additional questions that call for a separate scope.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-zinc-800 text-xs font-semibold text-slate-500 dark:text-zinc-400">
              Final non-resident withholding tax vs assessable return inclusions.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
