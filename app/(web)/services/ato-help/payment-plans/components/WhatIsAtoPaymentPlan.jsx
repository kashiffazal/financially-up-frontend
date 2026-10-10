"use client";

import React from "react";
import { Tag } from "antd";
import {
  CalculatorOutlined,
  PercentageOutlined,
  CalendarOutlined,
  CheckCircleOutlined,
  WarningOutlined,
} from "@ant-design/icons";

/**
 * WhatIsAtoPaymentPlan Component
 * ==============================
 * Section 1: What is an ATO payment plan?
 * Verbatim text from Page 7 of '11th Pillar ATO Help.docx'.
 *
 * Explains weekly/fortnightly/monthly schedules, compounding GIC interest,
 * non-deductibility from 1 July 2025, and managing separate account streams.
 */
export default function WhatIsAtoPaymentPlan() {
  const planFeatures = [
    {
      icon: <CalendarOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Instalments Over Shortest Fixed Period",
      lead: "An ATO payment plan is an arrangement to pay an outstanding tax debt in smaller amounts, usually weekly, fortnightly or monthly.",
      desc: "The ATO describes payment plans as instalments spread over the shortest possible fixed period. Approval is not automatic, and the terms depend on the account, debt, payment history and taxpayer’s circumstances.",
    },
    {
      icon: <PercentageOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "General Interest Charge (GIC) Continues",
      lead: "A payment plan does not change the tax originally assessed. General interest charge (GIC) generally continues to accrue on the unpaid balance and compounds daily.",
      desc: "From 1 July 2025, GIC and shortfall interest charge incurred on or after that date are not tax deductible. The rate changes quarterly, so the current cost should be checked rather than stated as a fixed percentage.",
    },
    {
      icon: <CalculatorOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Ongoing Tax Obligations Must Be Met",
      lead: "Future tax debts must still be paid in full and on time. Where income tax and activity statement debts are held in different accounts, separate plans may be required.",
      desc: "A plan for old debt therefore needs to leave enough cash for new BAS, PAYG, income tax and other obligations.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="cyan" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Instalment Framework
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What is an ATO payment plan?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            An ATO payment plan is an arrangement to pay an outstanding tax debt in smaller amounts, usually weekly, fortnightly or monthly. The ATO describes payment plans as instalments spread over the shortest possible fixed period. Approval is not automatic, and the terms depend on the account, debt, payment history and taxpayer’s circumstances.
          </p>
        </div>

        {/* 3 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {planFeatures.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-6 sm:p-8 bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 hover:border-brand-emerald dark:hover:border-brand-emerald transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-5">
                  {item.icon}
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
                <CheckCircleOutlined /> Structured Instalment Rule
              </div>
            </div>
          ))}
        </div>

        {/* 1 July 2025 Reform Callout */}
        <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-red-500/10 via-red-500/5 to-transparent border border-red-500/30 dark:border-red-500/20">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-red-500/20 text-red-600 dark:text-red-400 shrink-0">
              <WarningOutlined className="text-2xl" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1.5">
                Statutory Change: Non-Deductibility of GIC (From 1 July 2025)
              </h4>
              <p className="text-xs sm:text-sm md:text-base text-slate-700 dark:text-zinc-300 leading-relaxed">
                From 1 July 2025, General Interest Charge (GIC) and Shortfall Interest Charge (SIC) incurred on or after that date are <strong>not tax deductible</strong>. Taxpayers can no longer offset interest costs against assessable income, underscoring the vital importance of paying down tax debt through disciplined, well-structured plans.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
