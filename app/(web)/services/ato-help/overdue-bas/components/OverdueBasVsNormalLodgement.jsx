"use client";

import React from "react";
import Link from "next/link";
import {
  SyncOutlined,
  HistoryOutlined,
  CheckCircleOutlined,
  WarningOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * OverdueBasVsNormalLodgement Component
 * =====================================
 * Section 7: Key operational distinctions between routine quarterly BAS lodgement
 * versus historical overdue catch-up work, plus rules on ATO-finalized STP statements.
 */
export default function OverdueBasVsNormalLodgement() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-2">
            Comparative Analysis
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Overdue BAS versus normal BAS lodgement
          </h2>
          <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
            A standard BAS lodgement service usually covers a current period supported by up-to-date bookkeeping. Overdue BAS work may require historical reconstruction, multiple reconciliations and review of earlier periods. Once the backlog is cleared, ongoing BAS support can help keep future statements on schedule.
          </p>
        </div>

        {/* 2 Comparative Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Column 1: Routine BAS */}
          <div className="p-7 sm:p-8 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center">
                  <SyncOutlined className="text-2xl text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase">
                    Standard Compliance
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Normal Quarterly BAS Lodgement
                  </h3>
                </div>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-zinc-300">
                <li className="flex items-start gap-2">
                  <CheckCircleOutlined className="text-emerald-500 mt-1 flex-shrink-0" />
                  <span>Covers single current quarter with live up-to-date bank feeds.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleOutlined className="text-emerald-500 mt-1 flex-shrink-0" />
                  <span>Lodged under standard 4-week agent extension deadlines.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleOutlined className="text-emerald-500 mt-1 flex-shrink-0" />
                  <span>Routine cash flow planning with zero accumulated GIC interest.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-zinc-700/60">
              <Link
                href="/services/business-accounting/bas-lodgement"
                className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 flex items-center gap-1.5"
              >
                <span>View Standard BAS Lodgement Service</span>
                <ArrowRightOutlined />
              </Link>
            </div>
          </div>

          {/* Column 2: Overdue BAS */}
          <div className="p-7 sm:p-8 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center">
                  <HistoryOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase">
                    Catch-Up Remediation
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Historical Overdue BAS Catch-Up
                  </h3>
                </div>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-zinc-300">
                <li className="flex items-start gap-2">
                  <CheckCircleOutlined className="text-emerald-500 mt-1 flex-shrink-0" />
                  <span>Requires multi-period reconstruction and ledger forensic review.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleOutlined className="text-emerald-500 mt-1 flex-shrink-0" />
                  <span>Addresses active ATO warning notices, default assessments and FTL risks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleOutlined className="text-emerald-500 mt-1 flex-shrink-0" />
                  <span>Integrates with subsequent ATO debt and payment plan negotiations.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-zinc-700/60">
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                Sequential Backlog Resolution
              </span>
            </div>
          </div>
        </div>

        {/* Section: When ATO activity statements have already been finalized */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-zinc-800/40 border border-slate-200/80 dark:border-zinc-700/80">
          <div className="flex items-start sm:items-center gap-3 mb-3">
            <WarningOutlined className="text-2xl text-amber-500 flex-shrink-0" />
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              When ATO activity statements have already been finalized
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
            Single Touch Payroll amounts may already appear on an activity statement as ATO processed, or the statement may have been finalized in ATO systems. Review the history before lodging. The ATO says incorrect PAYG withholding on a finalized statement should be revised; if it is not finalized, the figures can generally be edited when lodging.
          </p>
        </div>
      </div>
    </section>
  );
}
