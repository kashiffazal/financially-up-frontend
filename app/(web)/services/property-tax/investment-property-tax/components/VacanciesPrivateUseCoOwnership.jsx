"use client";

import React from "react";
import { Tag } from "antd";
import {
  CalendarOutlined,
  StopOutlined,
  TeamOutlined,
  HistoryOutlined,
  CheckCircleOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

/**
 * VacanciesPrivateUseCoOwnership Component
 * ========================================
 * Section: Vacancies, private use and co-ownership can change the calculation.
 * Features 100% complete, verbatim content from Page 2 of 10th Pillar Property Tax.docx.
 */
export default function VacanciesPrivateUseCoOwnership() {
  const adjustmentFactors = [
    {
      icon: <CalendarOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Genuinely Available for Rent",
      description:
        "Properties must be actively advertised on commercial channels with realistic rental conditions. Setting unreasonable restrictions or inflated rent can jeopardize deductions.",
    },
    {
      icon: <StopOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Private Use & Holiday Homes",
      description:
        "Where owners or their friends use the property privately for weekends or holidays, deductions must be apportioned strictly based on days of genuine commercial availability.",
    },
    {
      icon: <TeamOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Non-Commercial Family Tenancies",
      description:
        "Renting to family members or relatives below market rent limits deductions up to the amount of rental income received, preventing artificial losses from offsetting other income.",
    },
    {
      icon: <HistoryOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Changes in Legal Ownership",
      description:
        "Acquisitions, fractional transfers, or additions of co-owners midway through the financial year require strict day-by-day apportionment aligned with registered titles.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Apportionment &amp; Adjustments
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Vacancies, Private Use and Co-Ownership Can Change the Calculation
          </h2>
        </div>

        {/* 2 Verbatim Text Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mb-12">
          {/* Paragraph 1 */}
          <div className="bg-slate-50/80 dark:bg-zinc-900/80 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-4">
              <ExclamationCircleOutlined />
              <span>Actual Use vs Expense Aggregation</span>
            </div>
            {/* Verbatim copy from official document */}
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
              Rental deductions can require adjustment where the property is not genuinely available for rent, is used privately for part of the year, is rented to family or friends on non-commercial terms, or has more than one owner. The annual tax position should reflect the actual use and legal ownership rather than a simple total of all property expenses.
            </p>
          </div>

          {/* Paragraph 2 */}
          <div className="bg-slate-50/80 dark:bg-zinc-900/80 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 mb-4">
              <HistoryOutlined />
              <span>Timelines &amp; Supporting Documentation</span>
            </div>
            {/* Verbatim copy from official document */}
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
              If circumstances changed during the year, dates and supporting records can be important. Keeping a clear timeline of rental availability, private use, ownership changes and major expenditure helps the rental property tax return reflect what actually occurred.
            </p>
          </div>
        </div>

        {/* 4 Adjustment Factor Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {adjustmentFactors.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-xl p-5 border border-slate-200/70 dark:border-zinc-800 hover:border-emerald-400/50 transition-all shadow-2xs"
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 flex items-center justify-center mb-3">
                {item.icon}
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-2">
                {item.title}
              </h3>
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
