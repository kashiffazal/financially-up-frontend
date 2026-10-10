"use client";

import React from "react";
import { Tag } from "antd";
import {
  ClockCircleOutlined,
  ThunderboltOutlined,
  CheckCircleOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

/**
 * MonthlyVsYearEndReporting Component
 * ===================================
 * Section 3: Why monthly reporting can be more useful than year-end reporting alone
 * Features 100% complete, verbatim content from client SEO document.
 */
export default function MonthlyVsYearEndReporting() {
  const earlyWarningTriggers = [
    { title: "Labour Costs Rise", desc: "Catch overtime spikes and contractor inflation before they damage quarterly margins." },
    { title: "Margins Fall", desc: "Identify product or service lines where cost of goods has crept higher." },
    { title: "Debtors Slow Down", desc: "Flag overdue client collections before working capital turns into a cash crunch." },
    { title: "Sales Mix Changes", desc: "Spot shifts towards lower-margin revenue streams and adjust pricing promptly." },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Verbatim Strategic Copy */}
          <div className="lg:col-span-7">
            <Tag color="blue" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
              Shorter Feedback Loops
            </Tag>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Why monthly reporting can be more useful than year-end reporting alone
            </h2>
            <div className="mt-6 space-y-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              <p>
                Annual accounts are important for tax, compliance and year-end review, but they can arrive too late for operational decisions that need to be made during the year. Monthly financial reporting gives management a shorter feedback loop. If labour costs rise, margins fall, debtors slow down or sales mix changes, the issue can be investigated while there is still time to respond.
              </p>
              <p>
                Monthly reporting is not automatically better simply because it is frequent. The underlying data still needs to be reasonably accurate and the report needs to be reviewed. A consistent close process, reconciliations and clear cut-off procedures can materially improve the usefulness of the monthly pack.
              </p>
            </div>
          </div>

          {/* Right Column: Feedback Loop Comparison Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/60 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400 mb-4 flex items-center gap-2">
                <ThunderboltOutlined className="text-base text-amber-500" />
                Issues Investigated in Real Time
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {earlyWarningTriggers.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/70 dark:border-zinc-700/50"
                  >
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-500 dark:text-zinc-400 m-0 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/20 border border-blue-200/60 dark:border-blue-800/40 text-xs text-blue-950 dark:text-blue-300 leading-relaxed flex items-start gap-2.5">
              <ClockCircleOutlined className="text-sm shrink-0 mt-0.5 text-blue-600 dark:text-blue-400" />
              <span>
                <strong>Data Discipline Matters:</strong> Frequency without accuracy is useless. We enforce strict month-end cut-offs, bank reconciliations, and balance sheet checks.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
