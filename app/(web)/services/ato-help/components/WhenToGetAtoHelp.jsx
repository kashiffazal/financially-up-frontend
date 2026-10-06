"use client";

import React from "react";
import {
  MailOutlined,
  CalendarOutlined,
  AuditOutlined,
  DollarOutlined,
  FormOutlined,
  SolutionOutlined,
  WarningOutlined,
} from "@ant-design/icons";

/**
 * WhenToGetAtoHelp Component
 * ==========================
 * Section 4: When should you get help with the ATO?
 *
 * Implements verbatim content from '11th Pillar ATO Help.docx' (Page 1: 1- ATO Help Australia).
 * Details the 6 common situations where professional tax agent support is beneficial,
 * covering confusing letters, overdue lodgements, mismatched notices, debts/audits,
 * amendments, and registration changes.
 *
 * Background: Lite Brand Gradient.
 */
export default function WhenToGetAtoHelp() {
  /**
   * The exact 6 common situations from client document
   */
  const commonSituations = [
    {
      title: "an ATO letter, secure message or request for information that you do not fully understand",
      icon: <MailOutlined className="text-teal-600 dark:text-teal-400 text-lg" />,
      tag: "Letters & Messages",
    },
    {
      title: "overdue income tax returns, BAS or other lodgements that need to be brought up to date",
      icon: <CalendarOutlined className="text-blue-600 dark:text-blue-400 text-lg" />,
      tag: "Overdue Lodgements",
    },
    {
      title: "a notice of assessment, account balance, credit or refund that does not match your records",
      icon: <AuditOutlined className="text-emerald-600 dark:text-emerald-400 text-lg" />,
      tag: "Account Discrepancies",
    },
    {
      title: "a tax debt, payment-plan issue, data-matching query, review or audit",
      icon: <DollarOutlined className="text-amber-600 dark:text-amber-400 text-lg" />,
      tag: "Debts & Audits",
    },
    {
      title: "a need to correct previously lodged information where an amendment or another process may be appropriate",
      icon: <FormOutlined className="text-purple-600 dark:text-purple-400 text-lg" />,
      tag: "Amendments & Corrections",
    },
    {
      title: "changes to tax registrations, contact details or authorised representatives",
      icon: <SolutionOutlined className="text-rose-600 dark:text-rose-400 text-lg" />,
      tag: "Registrations & Reps",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-800/60 mb-4">
            <WarningOutlined className="text-teal-600 dark:text-teal-400 text-xs sm:text-sm" />
            <span className="text-xs font-semibold text-teal-800 dark:text-teal-300 tracking-wide uppercase">
              Assistance Indicators
            </span>
          </div>

          {/* Exact H2 Heading from Document */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            When should you get help with the ATO?
          </h2>

          {/* Exact Verbatim Introductory Sentence from Document */}
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Professional assistance can be useful when an ATO matter is unclear, time-sensitive or
            connected with records that need to be reconstructed or corrected. Common situations
            include:
          </p>
        </div>

        {/* 6 Situation Cards - Responsive 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {commonSituations.map((item, index) => (
            <div
              key={index}
              className="group p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:border-teal-500/50 dark:hover:border-teal-500/50 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-zinc-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400">
                    {item.tag}
                  </span>
                </div>
                <p className="text-sm sm:text-base font-medium text-slate-800 dark:text-zinc-200 leading-snug group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors m-0 capitalize-first">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
