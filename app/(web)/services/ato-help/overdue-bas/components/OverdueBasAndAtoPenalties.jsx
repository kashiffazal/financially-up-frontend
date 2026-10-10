"use client";

import React from "react";
import Link from "next/link";
import {
  SafetyCertificateOutlined,
  AlertOutlined,
  ArrowRightOutlined,
  CalculatorOutlined,
} from "@ant-design/icons";

/**
 * OverdueBasAndAtoPenalties Component
 * ===================================
 * Section 4: Failure-to-lodge (FTL) penalty calculation rules for BAS,
 * entity size factors, ATO discretionary enforcement, and remission pathways.
 */
export default function OverdueBasAndAtoPenalties() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-2">
              Statutory Penalties
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Overdue BAS and ATO penalties
            </h2>
            <div className="mt-6 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed space-y-4">
              <p>
                A failure-to-lodge-on-time penalty can apply when an activity statement is lodged after its due date. The ATO states that it generally considers the circumstances and does not necessarily apply a penalty in every isolated late-lodgment case. If a penalty is imposed, the ATO notifies the taxpayer. The amount can vary with factors such as entity size and how long the document has been overdue.
              </p>
              <p>
                Penalty remission may be available in some circumstances, but it is not automatic and should not be assumed before the facts are reviewed. Financially Up can help identify the relevant circumstances and communicate with the ATO within scope if a remission request is appropriate.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/services/ato-help/penalty-remission"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-sm transition-all hover:gap-3"
              >
                <span>Explore Penalty Remission Service</span>
                <ArrowRightOutlined />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-200 dark:border-zinc-800">
                <AlertOutlined className="text-2xl text-amber-500" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  How FTL Penalties are Calculated on BAS
                </h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200 dark:border-zinc-700">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">
                    Penalty Units & Time Accrual
                  </h4>
                  <p>
                    FTL penalties accrue per 28-day period (or part thereof) that the activity statement remains unlodged, up to a statutory maximum of 5 penalty units for small entities.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200 dark:border-zinc-700">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">
                    Entity Multipliers (Medium & Large Businesses)
                  </h4>
                  <p>
                    The penalty is multiplied by 2 for medium entities (assessable income $1M–$20M) and multiplied by 5 for large entities, making prolonged unlodged BAS backlogs costly.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200 dark:border-zinc-700">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">
                    Discretionary Remission Grounds
                  </h4>
                  <p>
                    The ATO may remit penalties if late lodgment was caused by unforeseen natural disasters, illness, system failures, or reasonable care was exercised.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
