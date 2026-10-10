"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileTextOutlined,
  CalculatorOutlined,
  CalendarOutlined,
  DollarOutlined,
  PieChartOutlined,
  UserOutlined,
  HistoryOutlined,
  FormOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * InformationToPrepareDistributionReview Component
 * ==================================================
 * Section: Information to prepare for a distribution review
 * Verbatim text from Page 11 of client docx (8th Pillar Trust Services.docx).
 * Features checklist of records needed for year-end review before the resolution deadline.
 */
export default function InformationToPrepareDistributionReview() {
  const checklist = [
    {
      icon: <FileTextOutlined className="text-teal-600 dark:text-teal-400" />,
      text: "current trust deed and amendments",
    },
    {
      icon: <CalculatorOutlined className="text-blue-600 dark:text-blue-400" />,
      text: "year-to-date accounts",
    },
    {
      icon: <CalendarOutlined className="text-purple-600 dark:text-purple-400" />,
      text: "expected income and expenses to 30 June",
    },
    {
      icon: <DollarOutlined className="text-amber-600 dark:text-amber-400" />,
      text: "capital gains or asset sales",
    },
    {
      icon: <PieChartOutlined className="text-rose-600 dark:text-rose-400" />,
      text: "dividend and franking information",
    },
    {
      icon: <UserOutlined className="text-indigo-600 dark:text-indigo-400" />,
      text: "beneficiary details",
    },
    {
      icon: <HistoryOutlined className="text-emerald-600 dark:text-emerald-400" />,
      text: "prior-year resolutions and unpaid entitlements",
    },
    {
      icon: <FormOutlined className="text-cyan-600 dark:text-cyan-400" />,
      text: "relevant trust elections",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Client Preparation Checklist
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Information to prepare for a distribution review
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Useful information generally includes the current trust deed and amendments, year-to-date accounts,
            expected income and expenses to 30 June, capital gains or asset sales, dividend and franking information,
            beneficiary details, prior-year resolutions, unpaid entitlements and relevant trust elections. The more
            complete the information, the easier it is to identify issues before the resolution deadline rather than after
            year end.
          </p>
        </div>

        {/* 8 Checklist Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {checklist.map((item, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-start"
            >
              <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-3 shrink-0">
                {item.icon}
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-zinc-200 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Verbatim Timely Information Callout */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-brand-bg-lighter via-white to-slate-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border border-slate-200 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row items-start md:items-center gap-5">
          <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 flex items-center justify-center shrink-0">
            <CheckCircleOutlined className="text-xl text-teal-600 dark:text-teal-400" />
          </div>
          <div className="space-y-1">
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              Identify Issues Before Deadlines
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              The more complete the information, the easier it is to identify issues before the resolution deadline
              rather than after year end. Collation in May and early June prevents rushed decisions and ensures proper
              documentation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
