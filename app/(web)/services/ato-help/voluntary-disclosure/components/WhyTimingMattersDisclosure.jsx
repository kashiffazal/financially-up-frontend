"use client";

import React from "react";
import { Tag } from "antd";
import {
  ClockCircleOutlined,
  ThunderboltOutlined,
  PercentageOutlined,
  WarningOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * WhyTimingMattersDisclosure Component
 * ====================================
 * Section 2: Why does timing matter?
 * Verbatim text from Page 6 of '11th Pillar ATO Help.docx'.
 *
 * Details unprompted disclosures vs disclosures during an audit,
 * penalty reduction rules, and managing interest expectations.
 */
export default function WhyTimingMattersDisclosure() {
  const timingCategories = [
    {
      icon: <ThunderboltOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      tag: "Highest Protection",
      title: "Before ATO Audit Notification",
      lead: "A disclosure made before the ATO tells you about a review or audit of the relevant period is considered differently from one made during an examination.",
      desc: "Unprompted voluntary disclosures generally secure maximum statutory penalty reductions (often up to 80% or full penalty mitigation) under ATO administrative rulings.",
    },
    {
      icon: <ClockCircleOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      tag: "Examinations Underway",
      title: "During an Active ATO Audit",
      lead: "During an ATO review, the disclosure process may also depend on the officer's request and the deadline given.",
      desc: "Disclosing during an audit may still qualify for partial penalty concessions if made before the auditor uncovers the shortfall independently.",
    },
    {
      icon: <PercentageOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      tag: "Interest Charges",
      title: "Shortfall Interest Still Applies",
      lead: "Do not assume a standard percentage reduction or promise of no penalty. Additional tax and applicable interest may remain payable.",
      desc: "While penalties may be drastically reduced, the primary tax shortfall and compounding Shortfall Interest Charge (SIC) must still be settled.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="amber" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Crucial Timing Rules
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why does timing matter?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A disclosure made before the ATO tells you about a review or audit of the relevant period is considered differently from one made during an examination. Depending on the conditions, a qualifying disclosure can reduce administrative shortfall penalties. The precise result depends on timing, the nature of the shortfall and whether a penalty applies at all.
          </p>
        </div>

        {/* 3 Timing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {timingCategories.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm flex flex-col justify-between hover:border-brand-emerald dark:hover:border-brand-emerald transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-zinc-800 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-xs font-semibold text-slate-700 dark:text-zinc-300 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-zinc-800">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-200 font-medium leading-relaxed mb-2">
                  {item.lead}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800 text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                <CheckCircleOutlined /> Statutory Mitigation Factor
              </div>
            </div>
          ))}
        </div>

        {/* Honest Expectation Banner */}
        <div className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 shrink-0 border border-amber-200/60 dark:border-amber-800/60">
              <WarningOutlined className="text-2xl" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1">
                No Guaranteed Automatic Outcome:
              </h4>
              <p className="text-xs sm:text-sm md:text-base text-slate-700 dark:text-zinc-300 leading-relaxed">
                Do not assume a standard percentage reduction or promise of no penalty. Additional tax and applicable interest may remain payable. During an ATO review, the disclosure process may also depend on the officer's request and the deadline given.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
