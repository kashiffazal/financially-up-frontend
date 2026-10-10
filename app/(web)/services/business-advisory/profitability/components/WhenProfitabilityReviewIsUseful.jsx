"use client";

import React from "react";
import { Tag } from "antd";
import {
  RiseOutlined,
  AlertOutlined,
  UserSwitchOutlined,
  SolutionOutlined,
  CalculatorOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * WhenProfitabilityReviewIsUseful Component
 * ==========================================
 * Section 1: When is a profitability review useful?
 * Source: 12th Pillar Business Advisory.docx (Lines 403-405)
 *
 * Implements 100% complete, verbatim SEO text explaining business triggers,
 * turnover vs take-home divergence, hidden vulnerability in apparently profitable firms,
 * and separating temporary blips from structural margin erosion.
 */
export default function WhenProfitabilityReviewIsUseful() {
  const triggerScenarios = [
    {
      icon: <RiseOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Turnover Growing, Results Stalled",
      desc: "Top-line revenue expands while owner returns and net take-home earnings remain flat or contract.",
    },
    {
      icon: <AlertOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Rising Direct & Input Costs",
      desc: "Material inflation, wage pressure, or logistics increases quietly eroding gross margins over time.",
    },
    {
      icon: <UserSwitchOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "High-Maintenance Clients",
      desc: "Customers who demand excessive support, revisions, or customized delivery that erase profitability.",
    },
    {
      icon: <SolutionOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Service Line Decisions",
      desc: "Evaluating whether specific product lines, divisions, or departments justify continued resource allocation.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Review Triggers &amp; Timing
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            When Is a Profitability Review Useful?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A review can help when turnover has grown but take-home results have
            stalled, rising input costs have eroded margins, some customers seem
            expensive to serve, or a service line needs a decision. It can also
            help when a business is preparing a budget and needs to know which
            assumptions drive the result.
          </p>
        </div>

        {/* 4 Trigger Scenario Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {triggerScenarios.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-950/70 border border-slate-200/80 dark:border-zinc-800 shadow-2xs hover:shadow-md transition-shadow"
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

        {/* Deep Analysis Card: No Need to Wait for a Reported Loss */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-emerald-50/50 via-white to-slate-50/50 dark:from-emerald-950/20 dark:via-zinc-900 dark:to-zinc-950/40 border border-emerald-200/80 dark:border-emerald-800/50 shadow-2xs">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
              You Need Not Wait for a Reported Loss
            </h3>
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal mb-6">
              You need not wait for a reported loss. An apparently profitable
              business may have little room for unexpected costs, owner pay, debt
              commitments or reinvestment. Conversely, a temporary decline may
              have a clear cause that should be separated from an ongoing margin
              problem.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-200/60 dark:border-zinc-800 text-xs sm:text-sm font-semibold text-emerald-800 dark:text-emerald-400">
              <span className="flex items-center gap-2">
                <CheckCircleOutlined />
                Proactive margin diagnostics protect cash reserves
              </span>
              <span className="text-slate-300 dark:text-zinc-700 hidden sm:inline">•</span>
              <span className="flex items-center gap-2">
                <CalculatorOutlined />
                Distinguish seasonal variations from structural erosion
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
