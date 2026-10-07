"use client";

import React from "react";
import {
  ToolOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * Division7AIssuesIdentified Component
 * ====================================
 * Section 6: Strategic responses to identified Division 7A issues,
 * Commissioner discretions, relief limitations, and legal boundaries.
 * Verbatim text from Page 9 of the Tax Planning document.
 */
export default function Division7AIssuesIdentified() {
  const correctiveOptions = [
    "Correcting and reconciling accounting records and journals",
    "Confirming whether cash was genuinely repaid before lodgement",
    "Putting an eligible loan on complying terms before the deadline",
    "Reviewing and recalculating minimum yearly repayments (MYR)",
    "Considering whether an exclusion or commercial exception applies",
    "Assessing whether an unfranked deemed dividend has arisen",
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-primary/10 text-brand-primary dark:bg-emerald-500/10 dark:text-emerald-400 mb-4 border border-brand-primary/20 dark:border-emerald-500/20">
            Remediation &amp; Response
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            What Happens if a Division 7A Issue Is Identified?
          </h2>
        </div>

        {/* Verbatim Paragraph 1 */}
        <div className="max-w-4xl mx-auto mb-12 bg-white dark:bg-zinc-900 p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 text-base sm:text-lg leading-relaxed shadow-sm">
          The appropriate response depends on the facts. It may involve correcting accounting records, confirming whether an amount was repaid, putting an eligible loan on complying terms before the relevant deadline, reviewing minimum yearly repayments, considering whether an exclusion applies or assessing whether a deemed dividend has arisen.
        </div>

        {/* Action Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-12">
          {correctiveOptions.map((opt, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 p-4 sm:p-5 rounded-xl border border-slate-200/70 dark:border-zinc-800 flex items-start gap-3 shadow-xs"
            >
              <CheckCircleOutlined className="text-emerald-500 mt-1 shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-zinc-300">
                {opt}
              </span>
            </div>
          ))}
        </div>

        {/* Verbatim Paragraph 2 on Commissioner Discretion & Legal Counsel Boundaries */}
        <div className="max-w-4xl mx-auto bg-amber-50/70 dark:bg-amber-950/20 rounded-2xl p-6 sm:p-8 border border-amber-200/80 dark:border-amber-800/50">
          <div className="flex items-start gap-4">
            <ExclamationCircleOutlined className="text-2xl text-amber-600 dark:text-amber-400 mt-1 shrink-0" />
            <div className="space-y-3 text-slate-700 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
              <h3 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg">
                Commissioner Discretions &amp; Legal Boundaries
              </h3>
              <p>
                The Commissioner has limited discretions in some circumstances, but relief is not automatic and Financially Up does not promise that penalties, interest or deemed dividends can be removed. Some arrangements may also require legal advice, particularly where documents, trust law, loan enforceability or contractual rights are in issue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
