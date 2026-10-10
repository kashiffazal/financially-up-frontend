"use client";

import React from "react";
import { Tag } from "antd";
import {
  ClockCircleOutlined,
  FileDoneOutlined,
  BranchesOutlined,
  HistoryOutlined,
  CheckCircleOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

/**
 * TimingMattersBeforeContracts Component
 * ======================================
 * Section: Timing matters before contracts, settlements and project changes.
 * Features 100% complete, verbatim content from Page 3 of 10th Pillar Property Tax.docx.
 */
export default function TimingMattersBeforeContracts() {
  const milestoneAlerts = [
    {
      icon: <FileDoneOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Contract Execution",
      description: "Once contracts are exchanged, GST clauses, margin scheme elections, and purchaser settlement withholding provisions become legally binding and cannot be altered retrospectively.",
    },
    {
      icon: <BranchesOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Shift in Project Intention",
      description: "Changing plans from building long-term rental units to selling off-the-plan triggers significant tax characterization shifts from capital assets to trading stock.",
    },
    {
      icon: <ClockCircleOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Financing & Debt Structuring",
      description: "Introducing mezzanine lenders, related-party equity, or private loans requires formal loan agreements and benchmark interest rate substantiation before drawdowns occur.",
    },
    {
      icon: <HistoryOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Changes in Project Scope",
      description: "Adding units, subdividing additional parcels, or altering the builder contract affects project budgets, feasibility models, and ongoing monthly/quarterly BAS returns.",
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
            Proactive Project Milestones
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Timing Matters Before Contracts, Settlements and Project Changes
          </h2>
        </div>

        {/* 2 Verbatim Text Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mb-12">
          {/* Paragraph 1 */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-4">
              <ExclamationCircleOutlined />
              <span>Irreversible Commercial Milestones</span>
            </div>
            {/* Verbatim text from official document */}
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
              Property development tax issues are often easier to manage before a commercial step becomes irreversible. A contract can affect GST wording, the margin scheme and settlement obligations. A change in project intention can affect whether land is being held as an investment, committed to a profit-making undertaking or used in a development business. Entity changes can also create separate tax and legal consequences.
            </p>
          </div>

          {/* Paragraph 2 */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 mb-4">
              <CheckCircleOutlined />
              <span>Continuous Communication with Your Accountant</span>
            </div>
            {/* Verbatim text from official document */}
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
              For this reason, developers should keep their accountant informed when the project scope, financing, ownership, sales strategy or intended use changes. Early accounting input does not guarantee a particular tax outcome, but it can help ensure the records and reporting approach match the actual project.
            </p>
          </div>
        </div>

        {/* 4 Milestones Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestoneAlerts.map((item, idx) => (
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
