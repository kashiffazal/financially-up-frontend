"use client";

import React from "react";
import {
  ClockCircleOutlined,
  AlertOutlined,
  RiseOutlined,
  CalendarOutlined,
  CheckCircleFilled,
} from "@ant-design/icons";
import AdvisoryReassuranceBanner from "@/components/website/AdvisoryReassuranceBanner";

/**
 * WhenToSeekAdvice Component
 * ==========================
 * Section 4 of Tax Planning Hub:
 * Explains the timing triggers for engaging a tax planning advisor,
 * emphasizing pre-transaction review versus post-transaction finality.
 * Reuses AdvisoryReassuranceBanner for the core callout.
 */
export default function WhenToSeekAdvice() {
  const triggerPoints = [
    {
      icon: <AlertOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Before Contracts Are Signed",
      description:
        "Once a property, share package, or business asset has been sold, or a commercial contract entered into, tax consequences are locked in and planning options become substantially narrower.",
      badge: "Pre-Transaction",
    },
    {
      icon: <RiseOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Material Revenue or Cash-Flow Shifts",
      description:
        "When business revenue surges, a substantial dividend is received, or profit margins change, proactive PAYG adjustments prevent heavy year-end tax liabilities.",
      badge: "Growth Triggers",
    },
    {
      icon: <CalendarOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Throughout the Financial Year",
      description:
        "Tax planning is not merely a late-June panic. Reviewing your position at regular quarterly checkpoints allows time for structured implementation and proper bookkeeping reconciliation.",
      badge: "Year-Round",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-800/60 mb-4">
            <ClockCircleOutlined className="text-teal-600 dark:text-teal-400 text-xs sm:text-sm" />
            <span className="text-xs font-semibold text-teal-800 dark:text-teal-300 tracking-wide uppercase">
              Critical Timing Windows
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            When Should You Speak With a Tax Planning Advisor?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
            The most useful time to seek tax advice is{" "}
            <span className="font-semibold text-slate-900 dark:text-white">
              before the transaction or financial year has finished
            </span>
            . Once an asset has been sold, income has been derived, or contracts have been exchanged, the tax treatment has crystallised.
          </p>
        </div>

        {/* 3 Timing Trigger Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {triggerPoints.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50/80 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-500/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-800 shadow-sm flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-300">
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Advisory Reassurance Banner */}
        <AdvisoryReassuranceBanner
          tag="Timing Matters"
          title="Reviewing Upcoming Transactions Before Execution"
          description="A tax planning advisor can review upcoming property disposals, corporate restructures, capital acquisitions, or superannuation contributions before commitments are finalised. Planning reviews conducted well before 30 June provide adequate time to execute required resolutions and ensure records are fully compliant."
          primaryButtonText="Book an Appointment"
          primaryButtonHref="/book-an-appointment"
          secondaryButtonText="Call"
        />
      </div>
    </section>
  );
}
