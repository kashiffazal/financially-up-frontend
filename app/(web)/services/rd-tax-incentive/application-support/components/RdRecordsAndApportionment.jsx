"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileTextOutlined,
  ExperimentOutlined,
  CheckCircleOutlined,
  MailOutlined,
  FieldTimeOutlined,
  SolutionOutlined,
  BookOutlined,
  PieChartOutlined,
  AlertOutlined,
} from "@ant-design/icons";

/**
 * RdRecordsAndApportionment Component
 * ===================================
 * Section: What Records Should Be Kept for an R&D Claim?
 * Verbatim text from Page 5 of 15th Pillar R&D Tax Incentive docx.
 */
export default function RdRecordsAndApportionment() {
  const evidenceCategories = [
    {
      icon: <FileTextOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      text: "project plans, technical specifications and work scopes",
    },
    {
      icon: <ExperimentOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      text: "hypotheses, experiment plans, design notes and development logs",
    },
    {
      icon: <CheckCircleOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      text: "test results, failures, iterations and conclusions",
    },
    {
      icon: <MailOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      text: "emails, meeting notes, source-control history and issue-tracking records",
    },
    {
      icon: <FieldTimeOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      text: "staff timesheets or other reasonable labour-allocation records",
    },
    {
      icon: <SolutionOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      text: "payroll reports, contractor agreements and invoices",
    },
    {
      icon: <BookOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      text: "general-ledger transactions and project cost reports",
    },
    {
      icon: <PieChartOutlined className="text-xl text-cyan-600 dark:text-cyan-400" />,
      text: "records explaining how shared costs were apportioned to R&D activities",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs"
          >
            Substantiation Evidence
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Records Should Be Kept for an R&amp;D Claim?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Records should be created before, during and after the activities. The company should be
            able to demonstrate what happened, why it was undertaken and how the expenditure was calculated.
          </p>
        </div>

        {/* 8 Useful Evidence Types Grid */}
        <div className="mb-12">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400 mb-6 text-center">
            Depending on the project, useful evidence can include:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {evidenceCategories.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-6 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between hover:border-emerald-500/40 transition-colors"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-white dark:bg-zinc-900 flex items-center justify-center mb-4 border border-slate-200/60 dark:border-zinc-800">
                    {item.icon}
                  </div>
                  <p className="text-sm text-slate-800 dark:text-zinc-200 leading-relaxed font-normal capitalize">
                    {item.text}
                  </p>
                </div>
                <span className="text-[10px] font-bold uppercase text-slate-400 dark:text-zinc-500 mt-4 block">
                  Evidence Item 0{idx + 1}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Apportionment Methodology & Ineligible Costs Callout */}
        <div className="bg-slate-100/70 dark:bg-zinc-800/40 rounded-2xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-700/80 flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 flex items-center justify-center shrink-0 border border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-200">
            <AlertOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />
          </div>
          <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
            An allocation method should suit the cost, be fair and reasonable, and be documented.
            Retrospective estimates may be less persuasive than contemporaneous records. Not every
            project cost is eligible, and adviser fees for preparing the registration or claim are not
            automatically R&amp;D expenditure.
          </p>
        </div>
      </div>
    </section>
  );
}
