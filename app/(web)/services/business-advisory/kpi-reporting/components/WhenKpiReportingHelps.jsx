"use client";

import React from "react";
import { Tag } from "antd";
import {
  RiseOutlined,
  AlertOutlined,
  TeamOutlined,
  CompassOutlined,
  DollarCircleOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";

/**
 * WhenKpiReportingHelps Component
 * ================================
 * Section 2: When does KPI reporting help?
 * Source: 12th Pillar Business Advisory.docx (Lines 355-357)
 *
 * Implements 100% complete, verbatim SEO text explaining business trigger events,
 * profit vs cash divergence, partner alignment, and near-term decision making.
 */
export default function WhenKpiReportingHelps() {
  const triggerScenarios = [
    {
      icon: <RiseOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Revenue Rising, Cash Tight",
      desc: "Top-line sales expand while operating cash flow contracts due to working capital drains or margin leakage.",
    },
    {
      icon: <AlertOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Creeping Operating Overheads",
      desc: "Expenses and administrative costs quietly eroding margins without transparent source tracking.",
    },
    {
      icon: <TeamOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Conflicting Numbers Among Managers",
      desc: "Departments relying on inconsistent spreadsheets rather than a single verified source of commercial truth.",
    },
    {
      icon: <CompassOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "New Location or Service Line",
      desc: "Expansion ventures that require tighter monitoring during ramp-up and initial capital payback.",
    },
  ];

  const upcomingDecisions = [
    {
      icon: <DollarCircleOutlined className="text-lg text-emerald-600 dark:text-emerald-400" />,
      title: "Pricing Strategy",
      desc: "Whether to increase rates or renegotiate customer contracts based on true underlying cost structures.",
    },
    {
      icon: <UsergroupAddOutlined className="text-lg text-teal-600 dark:text-teal-400" />,
      title: "Recruiting Staff",
      desc: "Assessing productivity, capacity thresholds, and payroll affordability before taking on headcount.",
    },
    {
      icon: <RiseOutlined className="text-lg text-blue-600 dark:text-blue-400" />,
      title: "Adjusting Operational Capacity",
      desc: "Determining equipment, facility, or inventory commitments needed to sustain projected workload.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950/60 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Commercial Triggers
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            When Does KPI Reporting Help?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            You may need reporting when revenue is rising but cash feels tight,
            costs are creeping up, managers rely on different versions of the
            numbers, or a new location or service needs closer monitoring. A
            regular reporting rhythm can also support conversations among
            business partners and managers who need a shared view of
            performance.
          </p>
        </div>

        {/* 4 Trigger Scenario Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {triggerScenarios.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-2xs hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal m-0">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Deep P&L vs Driver Narrative Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-2xs">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
              Beyond the Standard Profit and Loss Statement
            </h3>
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal mb-6">
              If you already receive a profit and loss statement but cannot see
              which activities drive the result, management KPI reporting can
              add the relevant detail. It is especially useful when you have a
              decision to make soon, such as whether to change prices, recruit
              staff or adjust capacity.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-100 dark:border-zinc-800">
              {upcomingDecisions.map((dec, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-slate-50/70 dark:bg-zinc-950/70 border border-slate-200/70 dark:border-zinc-800"
                >
                  <div className="flex items-center gap-2 mb-2">
                    {dec.icon}
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white m-0">
                      {dec.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-zinc-400 font-normal m-0 leading-relaxed">
                    {dec.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
