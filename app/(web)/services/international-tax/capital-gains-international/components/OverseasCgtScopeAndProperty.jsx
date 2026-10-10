"use client";

import React from "react";
import {
  GlobalOutlined,
  HomeOutlined,
  CheckCircleFilled,
  ExclamationCircleOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";

/**
 * OverseasCgtScopeAndProperty Component
 * =====================================
 * Section 1: Does Australia tax the sale of an overseas property?
 * Exact verbatim content from Client Document (Page 7).
 */
export default function OverseasCgtScopeAndProperty() {
  return (
    <section className="py-16 md:py-20 bg-slate-50 dark:bg-zinc-900/60 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Card 1: Australian Tax Residents */}
          <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 shadow-sm flex flex-col justify-between h-full">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/50 flex items-center justify-center text-teal-600 dark:text-teal-400 text-2xl mb-5">
                <GlobalOutlined />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
                Does Australia Tax the Sale of an Overseas Property?
              </h2>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                Australian tax residents generally fall within the Australian CGT rules for assets worldwide. A sale of a foreign house or investment property may therefore need to be included in the Australian return. Tax in the country where the property is located does not, by itself, remove the Australian reporting obligation. Tax treaties and a possible foreign income tax offset may affect the final position.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800 text-xs font-semibold text-slate-500 dark:text-zinc-400">
              Worldwide CGT liability applies regardless of where sale funds remain.
            </div>
          </div>

          {/* Card 2: Foreign Residents & Temporary Residents */}
          <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 shadow-sm flex flex-col justify-between h-full">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center text-blue-600 dark:text-blue-400 text-2xl mb-5">
                <SafetyCertificateOutlined />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
                Foreign Residents & Temporary Residents Scope
              </h2>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                For foreign residents and people who qualify as temporary residents, the Australian CGT position is generally limited to taxable Australian property. The label “non-resident” should be based on Australian tax law, not citizenship, visa wording or a foreign tax return alone. An international capital gains tax accountant in Australia should establish the timeline before calculating a gain.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800 text-xs font-semibold text-slate-500 dark:text-zinc-400">
              Taxable Australian Property (TAP) regime under Division 855 ITAA 1997.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
