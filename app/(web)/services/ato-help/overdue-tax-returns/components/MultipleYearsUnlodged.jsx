"use client";

import React from "react";
import { Tag } from "antd";
import {
  HistoryOutlined,
  DiffOutlined,
  CheckCircleOutlined,
  WarningOutlined,
  FileProtectOutlined,
} from "@ant-design/icons";

/**
 * MultipleYearsUnlodged Component
 * ===============================
 * Section 2: What if several years have not been lodged?
 * Verbatim text from Page 4 of '11th Pillar ATO Help.docx'.
 *
 * Details how multi-year back returns are sequenced, reconciled, and audited
 * for gaps across changing income sources.
 */
export default function MultipleYearsUnlodged() {
  const principles = [
    {
      icon: <HistoryOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Organized Chronological Sequence",
      body: "Multiple years of tax returns can be handled in an organized sequence. We identify the outstanding years, request available ATO and client records, and prepare each required return using the rules applying to that year.",
    },
    {
      icon: <DiffOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Evolving Income Streams Across Years",
      body: "If you have employment, sole trader, rental or investment income, the documents needed may differ between years. We adapt each annual tax pack to the changing nature of your career or business operations.",
    },
    {
      icon: <FileProtectOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Auditing Gaps & Transaction Reality",
      body: "We also check for gaps that need explaining, such as missing bank statements or changes in business activity. A tax return should reflect the underlying transactions; bank deposits alone do not prove that every receipt is taxable business income.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="blue" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Multi-Year Sequence
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What if several years have not been lodged?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Multiple years of tax returns can be handled in an organized sequence. We identify the outstanding years, request available ATO and client records, and prepare each required return using the rules applying to that year.
          </p>
        </div>

        {/* 3 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {principles.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm flex flex-col justify-between hover:border-brand-emerald dark:hover:border-brand-emerald transition-all duration-300"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-zinc-800 flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.body}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800 text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                <CheckCircleOutlined /> Multi-Year Method
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Analytical Callout */}
        <div className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 shrink-0 border border-amber-200/60 dark:border-amber-800/60">
              <WarningOutlined className="text-2xl" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                Why Bank Deposits & Pre-Fill Tell Only Half the Story:
              </h4>
              <p className="text-xs sm:text-sm md:text-base text-slate-700 dark:text-zinc-300 leading-relaxed">
                A tax return should reflect the underlying transactions; bank deposits alone do not prove that every receipt is taxable business income. Conversely, information already available to the ATO may not capture all assessable income or eligible deductions. Our job is to bridge that gap mathematically and legally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
