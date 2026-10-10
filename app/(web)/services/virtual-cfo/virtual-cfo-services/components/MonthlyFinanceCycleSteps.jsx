"use client";

import React from "react";
import { Tag } from "antd";
import {
  AuditOutlined,
  CheckSquareOutlined,
  DollarCircleOutlined,
  BarChartOutlined,
  SearchOutlined,
  TeamOutlined,
  CarryOutOutlined,
} from "@ant-design/icons";

/**
 * MonthlyFinanceCycleSteps Component
 * ==================================
 * Section 3: A structured monthly finance cycle
 * Features 100% complete, verbatim content from client SEO document.
 */
export default function MonthlyFinanceCycleSteps() {
  const cycleSteps = [
    {
      step: "01",
      icon: <AuditOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "close or review the monthly accounting period",
      desc: "Reconcile bank accounts, verify accruals and prepayments, and establish clean accounting cut-offs.",
    },
    {
      step: "02",
      icon: <CheckSquareOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "check material balance-sheet and profit-and-loss movements",
      desc: "Examine unexpected account swings, asset revaluations, liability shifts, and margin integrity.",
    },
    {
      step: "03",
      icon: <DollarCircleOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "update cash flow and forecast assumptions",
      desc: "Incorporate recent collection trends, supplier payment schedules, and updated sales projections.",
    },
    {
      step: "04",
      icon: <BarChartOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "compare actual results with budget or prior periods",
      desc: "Quantify financial progress against agreed targets and historical comparative benchmarks.",
    },
    {
      step: "05",
      icon: <SearchOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "review agreed KPIs and investigate material variances",
      desc: "Drill into operational and financial deviations to uncover the underlying commercial root causes.",
    },
    {
      step: "06",
      icon: <TeamOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "discuss actions, risks and decisions with management",
      desc: "Present findings in an executive review meeting, aligning leadership on practical tactical responses.",
    },
    {
      step: "07",
      icon: <CarryOutOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "carry forward agreed actions into the next reporting cycle",
      desc: "Track remediation tasks, strategic milestones, and accountability across sequential reporting periods.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Operating Rhythm
          </Tag>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            A structured monthly finance cycle
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A useful outsourced CFO arrangement starts with reliable underlying records. Once the accounts are reasonably current, the monthly cycle can be designed around management decisions rather than around report production for its own sake.
          </p>
        </div>

        {/* 7 Cycle Steps Timeline */}
        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-blue-500/20 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {cycleSteps.slice(0, 4).map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-slate-50/80 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/60 hover:bg-white dark:hover:bg-zinc-800 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 px-2.5 py-1 rounded-md bg-emerald-100/60 dark:bg-emerald-950/40">
                    Step {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-700 flex items-center justify-center shadow-sm">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white capitalize mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal m-0">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 relative z-10">
            {cycleSteps.slice(4).map((item, index) => (
              <div
                key={index + 4}
                className="p-6 rounded-2xl bg-slate-50/80 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/60 hover:bg-white dark:hover:bg-zinc-800 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-teal-600 dark:text-teal-400 px-2.5 py-1 rounded-md bg-teal-100/60 dark:bg-teal-950/40">
                    Step {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-700 flex items-center justify-center shadow-sm">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white capitalize mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal m-0">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
