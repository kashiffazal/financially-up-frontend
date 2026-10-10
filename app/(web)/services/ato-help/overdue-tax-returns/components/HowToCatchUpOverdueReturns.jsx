"use client";

import React from "react";
import { Tag } from "antd";
import {
  CalendarOutlined,
  FileSearchOutlined,
  AuditOutlined,
  CheckCircleOutlined,
  StopOutlined,
} from "@ant-design/icons";

/**
 * HowToCatchUpOverdueReturns Component
 * ====================================
 * Section 1: How do you catch up on overdue tax returns?
 * Verbatim text from Page 4 of '11th Pillar ATO Help.docx'.
 *
 * Explains the step-by-step process of auditing unlodged financial years,
 * distinguishing between tax return requirements and Non-Lodgment Advices.
 */
export default function HowToCatchUpOverdueReturns() {
  const steps = [
    {
      num: "01",
      icon: <CalendarOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "List Each Outstanding Income Year",
      lead: "Start by listing each income year, checking whether a return was required and gathering the income and expense records for that year.",
      desc: "We establish a clear multi-year chronological register to map which historical tax periods are flagged as unlodged on ATO systems.",
    },
    {
      num: "02",
      icon: <FileSearchOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Reconcile Against ATO Portal Data",
      lead: "An accountant can reconcile those records against available ATO information, prepare the missing returns and explain what follows after lodgment.",
      desc: "We extract historical pre-fill reports, payment summaries, bank interest, and share dividends from Online services for agents.",
    },
    {
      num: "03",
      icon: <AuditOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Determine Return vs Non-Lodgment Advice",
      lead: "The correct approach depends on your circumstances. Some people may need to lodge a non-lodgment advice for a year instead of a return; that determination should be made using the relevant year's rules and your actual income and circumstances.",
      desc: "If your taxable income fell below the statutory tax-free threshold with zero tax withheld, a Non-Lodgment Advice (NLA) formally closes the obligation without unnecessary return costs.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="cyan" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Step-by-Step Catch Up
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How do you catch up on overdue tax returns?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Start by listing each income year, checking whether a return was required and gathering the income and expense records for that year. An accountant can reconcile those records against available ATO information, prepare the missing returns and explain what follows after lodgment.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-6 sm:p-8 bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 hover:border-brand-emerald dark:hover:border-brand-emerald transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-slate-300 dark:text-zinc-600">
                    {item.num}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center">
                    {item.icon}
                  </div>
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

              <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-zinc-700/60 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                <CheckCircleOutlined /> Structured Progression
              </div>
            </div>
          ))}
        </div>

        {/* Critical Rule Warning */}
        <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/30 dark:border-amber-500/20">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-amber-500/20 text-amber-600 dark:text-amber-400 shrink-0">
              <StopOutlined className="text-2xl" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                Do Not Make False Assumptions About Past Obligations:
              </h4>
              <p className="text-xs sm:text-sm md:text-base text-slate-700 dark:text-zinc-300 leading-relaxed">
                Do not assume that a small income, a refund expectation or an old tax year removes an obligation. Until an unlodged year is formally assessed or closed with an approved Non-Lodgment Advice, the ATO’s compliance systems continue to track the outstanding status.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
