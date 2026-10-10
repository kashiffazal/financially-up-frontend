"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileExclamationOutlined,
  WarningOutlined,
  PercentageOutlined,
  SafetyCertificateOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * WhichPenaltiesNeedReview Component
 * ==================================
 * Section 2: Which penalties may need review?
 * Verbatim text from Page 5 of '11th Pillar ATO Help.docx'.
 *
 * Differentiates failure-to-lodge penalties, false/misleading statement penalties,
 * and General Interest Charge (GIC) / Shortfall Interest Charge (SIC).
 */
export default function WhichPenaltiesNeedReview() {
  const penaltyCategories = [
    {
      icon: <FileExclamationOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      tag: "Most Common",
      title: "Failure-to-Lodge (FTL) Penalties",
      lead: "Clients commonly seek assistance after receiving a failure-to-lodge penalty for an overdue tax return or activity statement.",
      desc: "Imposed automatically by ATO systems when statutory due dates are missed. Calculated in 28-day penalty units up to legislative caps.",
    },
    {
      icon: <WarningOutlined className="text-xl text-red-600 dark:text-red-400" />,
      tag: "Shortfall Penalties",
      title: "False or Misleading Statement Penalties",
      lead: "Other administrative penalties can involve inaccurate statements or different obligations and may have different remission or review pathways.",
      desc: "Assessed when an omitted income amount or disallowed deduction resulted from a failure to take reasonable care, recklessness, or intentional disregard.",
    },
    {
      icon: <PercentageOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      tag: "Statutory Interest",
      title: "GIC & SIC (Interest vs Penalties)",
      lead: "General interest charge and shortfall interest charge are interest amounts, not failure-to-lodge penalties. They have separate remission considerations.",
      desc: "If your concern is primarily unpaid tax or interest, we will identify that separately rather than describing all ATO charges as a penalty.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="blue" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Penalty Types & Procedures
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Which penalties may need review?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Clients commonly seek assistance after receiving a failure-to-lodge penalty for an overdue tax return or activity statement. Other administrative penalties can involve inaccurate statements or different obligations and may have different remission or review pathways. We check the actual ATO notice rather than assuming every penalty follows the same procedure.
          </p>
        </div>

        {/* 3 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {penaltyCategories.map((item, idx) => (
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
                <CheckCircleOutlined /> Notice Analysis
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
