"use client";

import React from "react";
import {
  ClockCircleOutlined,
  CalendarOutlined,
  FileDoneOutlined,
  DollarCircleOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

/**
 * TimingMattersInCgtPlanning Component
 * ====================================
 * Section 4: Critical distinction between contract execution date (CGT Event A1),
 * settlement date, and receipt of funds in Australian tax law.
 * Verbatim text from Page 8 of the Tax Planning document.
 */
export default function TimingMattersInCgtPlanning() {
  const timelineStages = [
    {
      step: "01",
      icon: <FileDoneOutlined className="text-xl text-brand-primary dark:text-emerald-400" />,
      title: "Contract Signed (CGT Event A1)",
      desc: "For disposals under contract, CGT event A1 occurs when the contract is entered into, locking in the income year.",
      badge: "Tax Liability Trigger",
      highlight: true,
    },
    {
      step: "02",
      icon: <CalendarOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Settlement Completed",
      desc: "Legal title transfers and documentation is finalised, often 30-90 days later in a completely different financial year.",
      badge: "Legal Transfer",
      highlight: false,
    },
    {
      step: "03",
      icon: <DollarCircleOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Cash Proceeds Received",
      desc: "Funds cleared in bank account. Cash receipt does not dictate the tax year for CGT event A1 under Australian law.",
      badge: "Cash Movement",
      highlight: false,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-primary/10 text-brand-primary dark:bg-emerald-500/10 dark:text-emerald-400 mb-4 border border-brand-primary/20 dark:border-emerald-500/20">
            Critical Tax Timing
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Timing Matters in CGT Planning
          </h2>
        </div>

        {/* Verbatim Paragraph 1 */}
        <div className="max-w-4xl mx-auto mb-12 bg-white dark:bg-zinc-900 p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 text-base sm:text-lg leading-relaxed shadow-sm">
          The date you receive the money is not always the date of the CGT event. For a disposal under a contract, CGT event A1 generally occurs when the contract is entered into rather than at settlement. Other CGT events can have different timing, so the transaction and documents should be reviewed.
        </div>

        {/* Interactive Timeline Visual */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {timelineStages.map((stage, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 sm:p-7 border shadow-sm transition-all duration-300 flex flex-col justify-between ${
                stage.highlight
                  ? "bg-white dark:bg-zinc-900 border-brand-primary/30 dark:border-emerald-500/40 ring-2 ring-brand-primary/10 dark:ring-emerald-500/20"
                  : "bg-white dark:bg-zinc-900 border-slate-200/80 dark:border-zinc-800"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-zinc-800 flex items-center justify-center border border-slate-200/80 dark:border-zinc-700 shadow-xs">
                    {stage.icon}
                  </div>
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-md ${
                      stage.highlight
                        ? "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700"
                        : "bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400"
                    }`}
                  >
                    {stage.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {stage.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                  {stage.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Paragraph 2 on Pre-Transaction Planning */}
        <div className="max-w-4xl mx-auto bg-amber-50/70 dark:bg-amber-950/20 rounded-2xl p-6 sm:p-7 border border-amber-200/80 dark:border-amber-800/50">
          <div className="flex items-start gap-4">
            <ExclamationCircleOutlined className="text-2xl text-amber-600 dark:text-amber-400 mt-1 shrink-0" />
            <div className="space-y-2 text-slate-700 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
              <h3 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg">
                Why Planning Must Precede Contract Execution
              </h3>
              <p>
                This is why planning should ideally happen before a transaction is signed or completed. The correct date can determine the income year in which the gain or loss is reported and can affect which losses, exemptions or other rules are available at that time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
