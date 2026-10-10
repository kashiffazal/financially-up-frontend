"use client";

import React from "react";
import { Tag } from "antd";
import {
  SlidersOutlined,
  DollarOutlined,
  PieChartOutlined,
  FieldTimeOutlined,
  ShopOutlined,
  ControlOutlined,
  FundProjectionScreenOutlined,
  ExperimentOutlined,
} from "@ant-design/icons";

/**
 * ChangesAnalysisMightSupport Component
 * ======================================
 * Section 4: What changes might the analysis support?
 * Source: 12th Pillar Business Advisory.docx (Lines 413-421)
 *
 * Implements 100% complete, verbatim SEO text detailing 6 actionable improvement levers,
 * scenario modelling (price vs volume, staff capacity vs fixed overheads), and realistic assumptions testing.
 */
export default function ChangesAnalysisMightSupport() {
  const actionsList = [
    {
      icon: <DollarOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Pricing Calibration",
      action: "Reviewing prices against direct costs and demand",
      desc: "Realigning charge-out rates and retail margins with true direct labour and input inflation.",
    },
    {
      icon: <PieChartOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Portfolio Optimization",
      action: "Adjusting the mix of products, services or customers",
      desc: "Pruning unprofitable low-margin work while expanding high-contribution customer segments.",
    },
    {
      icon: <FieldTimeOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Costing Precision",
      action: "Improving quoting, job costing or time recording",
      desc: "Establishing accurate tracking for labour hours, materials, and job milestones to stop margin slippage.",
    },
    {
      icon: <ShopOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Procurement Efficiency",
      action: "Renegotiating a supplier arrangement or reducing avoidable waste",
      desc: "Securing better terms, rationalizing suppliers, and targeting operational rework.",
    },
    {
      icon: <ControlOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Overhead Scrutiny",
      action: "Examining recurring overhead before adding capacity",
      desc: "Auditing fixed administrative and subscription costs before committing to expanded facilities.",
    },
    {
      icon: <FundProjectionScreenOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Target Tracking",
      action: "Setting a budget and tracking a small set of margin measures",
      desc: "Locking in an annual baseline and monitoring key contribution margins month-on-month.",
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
            Actionable Strategic Levers
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Changes Might the Analysis Support?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Possible actions depend on the evidence and your market. They may
            include:
          </p>
        </div>

        {/* 6 Core Action Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {actionsList.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-emerald-800 dark:text-emerald-400 mb-2 leading-relaxed">
                  {item.action}
                </p>
                <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed font-normal m-0">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Scenario Modelling Callout */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-2xs">
          <div className="flex items-start gap-4">
            <span className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
              <ExperimentOutlined className="text-xl" />
            </span>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                Predictive Scenario Modelling Without Empty Guarantees
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal m-0">
                A profit improvement consultant can help model the potential
                effect of an option. For example, a price increase might improve
                margin per job but affect volume; a staffing change might
                increase capacity while adding fixed costs. We test reasonable
                scenarios and explain assumptions rather than promise a result.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
