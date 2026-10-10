"use client";

import React from "react";
import { Tag } from "antd";
import {
  DollarOutlined,
  LineChartOutlined,
  AlertOutlined,
  CheckCircleOutlined,
  BranchesOutlined,
} from "@ant-design/icons";

/**
 * RevenueVsCapitalDevelopment Component
 * =====================================
 * Section: Why property development tax needs a different approach.
 * Features 100% complete, verbatim content from Page 3 of 10th Pillar Property Tax.docx.
 */
export default function RevenueVsCapitalDevelopment() {
  const criteriaFactors = [
    {
      title: "Original & Evolving Intention",
      description: "Did you acquire the land with an intention of resale at a profit, or was it long-held passive investment that changed purpose?",
    },
    {
      title: "Scale, Size & Repetition",
      description: "The number of lots, total financial turnover, and whether this project is part of a repeated series of property transactions.",
    },
    {
      title: "Funding & Commercial Organization",
      description: "How the acquisition was financed (e.g. high-gearing mezzanine debt vs equity), whether a formal business plan and entity exist.",
    },
    {
      title: "Development Activity Level",
      description: "The extent of physical alteration, civil infrastructure works, rezoning applications, and active marketing coordination.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Characterisation of Profits
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why Property Development Tax Needs a Different Approach
          </h2>
          {/* Verbatim Paragraph 1 */}
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A development project can be treated very differently from a long-term investment. Profits from property sales may be ordinary income where the taxpayer is carrying on a property development business or undertaking a commercial profit-making scheme. In other circumstances, a disposal may fall within the CGT rules.
          </p>
        </div>

        {/* Side-by-side Revenue vs Capital Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Column 1: Ordinary Income (Revenue Account) */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-9 border-2 border-emerald-500/40 dark:border-emerald-500/30 shadow-xs relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-lg">
              Ordinary Income
            </div>
            <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center mb-6">
              <DollarOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
              Trading Stock / Profit-Making Undertaking
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-6 font-normal">
              Applies where property is acquired or developed with the dominant commercial purpose of resale at a profit.
            </p>
            <ul className="space-y-3">
              {[
                "Profits assessed as ordinary business income (s 6-5)",
                "No 50% CGT discount available to individuals or trusts",
                "Land held as trading stock under Division 70",
                "Holding costs may be included in cost of trading stock",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-zinc-300">
                  <CheckCircleOutlined className="text-emerald-500 mt-1 shrink-0 font-bold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Capital Gains Tax (Capital Account) */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-blue-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-lg">
              Capital Account
            </div>
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-800/40 flex items-center justify-center mb-6">
              <LineChartOutlined className="text-2xl text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
              Capital Gains Tax (CGT) Disposal
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-6 font-normal">
              Applies to long-term passive investments held to generate rental yields, later realized in a mere realization.
            </p>
            <ul className="space-y-3">
              {[
                "Disposal triggers a CGT event (A1) under Part 3-1",
                "50% general CGT discount eligible for individuals & trusts (12+ months)",
                "Calculated using 5-element CGT cost base",
                "Capital works deductions adjust the cost base upon disposal",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-zinc-300">
                  <CheckCircleOutlined className="text-blue-500 mt-1 shrink-0 font-bold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Verbatim Paragraph 2 Banner */}
        <div className="bg-slate-900 text-white dark:bg-zinc-900 rounded-2xl p-6 sm:p-8 border border-slate-800 flex flex-col md:flex-row items-start md:items-center gap-6 mb-12">
          <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
            <AlertOutlined className="text-2xl" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
              No Single Deciding Factor
            </span>
            {/* Verbatim copy from official document */}
            <p className="text-xs sm:text-sm md:text-base text-slate-200 dark:text-zinc-200 leading-relaxed font-normal">
              There is no single label that decides the answer. Intention, scale, repetition, funding, development activity, the way the project is organized and changes in the purpose for which land is held can all matter. This is why the accounting and tax position should be reviewed before assuming that a development profit will be a capital gain.
            </p>
          </div>
        </div>

        {/* 4 Crucial Determining Factors Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {criteriaFactors.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-xl p-5 border border-slate-200/70 dark:border-zinc-800 hover:border-emerald-400/50 transition-all shadow-2xs"
            >
              <div className="w-9 h-9 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 flex items-center justify-center mb-3">
                <BranchesOutlined className="text-emerald-600 dark:text-emerald-400" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                {item.title}
              </h4>
              <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
