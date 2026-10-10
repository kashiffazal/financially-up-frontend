"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileProtectOutlined,
  CheckCircleOutlined,
  ExclamationCircleOutlined,
  AuditOutlined,
} from "@ant-design/icons";

/**
 * WhatIsVoluntaryDisclosure Component
 * ===================================
 * Section 1: What is a voluntary disclosure to the ATO?
 * Verbatim text from Page 6 of '11th Pillar ATO Help.docx'.
 *
 * Explains voluntary disclosures, common errors (omitted income, incorrect deductions, BAS errors),
 * and tailoring the process to the specific tax type.
 */
export default function WhatIsVoluntaryDisclosure() {
  const disclosurePoints = [
    {
      icon: <FileProtectOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Definition & Legal Purpose",
      lead: "A voluntary disclosure is information you give the ATO to correct or explain a mistake or omission in your tax affairs.",
      desc: "It should be complete and accurate enough to let the ATO understand the issue and adjust the position where required.",
    },
    {
      icon: <ExclamationCircleOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Common Disclosed Discrepancies",
      lead: "Examples include omitted income, a deduction claimed incorrectly or errors in information included in an activity statement.",
      desc: "Covering undeclared overseas income, capital gains miscalculations, cryptocurrency trades, or input tax credit overclaims.",
    },
    {
      icon: <AuditOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Tailored Correction Channels",
      lead: "An amendment request may be the appropriate way to correct a lodged return before the ATO has raised the matter in a review or audit.",
      desc: "Identifying the issue does not mean every case needs the same form or process. We check what was lodged, what should have been reported and the available correction pathway.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="cyan" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Proactive Correction
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What is a voluntary disclosure to the ATO?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A voluntary disclosure is information you give the ATO to correct or explain a mistake or omission in your tax affairs. It should be complete and accurate enough to let the ATO understand the issue and adjust the position where required. An amendment request may be the appropriate way to correct a lodged return before the ATO has raised the matter in a review or audit.
          </p>
        </div>

        {/* 3 Aspect Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {disclosurePoints.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-6 sm:p-8 bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 hover:border-brand-emerald dark:hover:border-brand-emerald transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center">
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
                <CheckCircleOutlined /> Structured Correction
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
