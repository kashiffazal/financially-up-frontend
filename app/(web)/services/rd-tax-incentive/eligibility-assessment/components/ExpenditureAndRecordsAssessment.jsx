"use client";

import React from "react";
import { Tag } from "antd";
import {
  CalculatorOutlined,
  FolderOpenOutlined,
  CalendarOutlined,
  FileDoneOutlined,
  AlertOutlined,
} from "@ant-design/icons";

/**
 * ExpenditureAndRecordsAssessment Component
 * =========================================
 * Section: How do expenditure and records affect the assessment?
 * Verbatim text from Page 3 of 15th Pillar R&D Tax Incentive docx.
 */
export default function ExpenditureAndRecordsAssessment() {
  const recordPhases = [
    {
      phase: "Before Activities",
      icon: <CalendarOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Project Plans & Hypotheses",
      desc: "Dated project plans, technical specifications, and hypotheses defining what was unknown and what experiments were proposed.",
    },
    {
      phase: "During Activities",
      icon: <FolderOpenOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Observations & Timesheets",
      desc: "Test protocols, experimental observation logs, contemporaneous payroll allocations, timesheets, and contractor records.",
    },
    {
      phase: "After Activities",
      icon: <FileDoneOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Evaluation & Ledgers",
      desc: "Analysis of results, logical conclusions drawn, financial ledger reconciliations, and cost summaries connected to activities.",
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
            Substantiation &amp; Costs
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How do expenditure and records affect the assessment?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Activity eligibility and expenditure eligibility are two distinct legal questions.
            Qualifying experiments must be supported by allowable notional deductions and contemporaneous records.
          </p>
        </div>

        {/* 2 Main Verbatim Analysis Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Expenditure Rules */}
          <div className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 flex items-center justify-center border border-slate-200 dark:border-zinc-800 text-emerald-600 dark:text-emerald-400 shadow-xs">
                  <CalculatorOutlined className="text-2xl" />
                </div>
                <div>
                  <Tag color="cyan" className="m-0 font-semibold uppercase text-[11px] mb-1">
                    ATO Rules
                  </Tag>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Notional Deduction Criteria &amp; $20,000 Threshold
                  </h3>
                </div>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
                Activity eligibility and expenditure eligibility are separate questions. Even where
                an experiment qualifies, a claimed cost must meet the ATO’s notional deduction rules
                and be connected to eligible work. We review what was incurred, by whom, the relevant
                period, allocations, related parties and any grant or other assistance. Total eligible
                notional deductions must generally be more than $20,000, subject to specified
                exceptions for eligible research service provider expenditure and Cooperative Research
                Centres contributions.
              </p>
            </div>
          </div>

          {/* Card 2: Contemporaneous Records */}
          <div className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 flex items-center justify-center border border-slate-200 dark:border-zinc-800 text-teal-600 dark:text-teal-400 shadow-xs">
                  <FolderOpenOutlined className="text-2xl" />
                </div>
                <div>
                  <Tag color="blue" className="m-0 font-semibold uppercase text-[11px] mb-1">
                    Department Standards
                  </Tag>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Contemporaneous Evidence Requirement
                  </h3>
                </div>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
                The Department expects records before, during and after activities. A useful file can
                contain dated project plans, hypotheses, test protocols, observations, results and
                conclusions. Financial evidence may include payroll and time records, invoices and
                ledgers that connect costs to activities. We identify what exists and what is missing;
                an R&amp;D eligibility consultant should not turn a later narrative into a substitute for
                work that was never documented.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Chronological Evidence Record Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {recordPhases.map((phase, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-slate-200/80 dark:border-zinc-800 shadow-xs"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-zinc-800 flex items-center justify-center">
                  {phase.icon}
                </div>
                <Tag color="default" className="m-0 text-[11px] font-bold uppercase">
                  {phase.phase}
                </Tag>
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                {phase.title}
              </h4>
              <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed">
                {phase.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
