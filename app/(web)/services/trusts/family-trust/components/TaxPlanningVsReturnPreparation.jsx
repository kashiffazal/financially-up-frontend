"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileTextOutlined,
  CompassOutlined,
  SafetyCertificateOutlined,
  ExclamationCircleOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * TaxPlanningVsReturnPreparation Component
 * ========================================
 * Section: Family trust tax planning versus tax return preparation
 * Verbatim text from Page 2 of client docx.
 * Clarifies the fundamental difference between historical compliance reporting
 * and forward-looking advisory, highlighting FTE requirements and integrity rules.
 */
export default function TaxPlanningVsReturnPreparation() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="purple" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Service Differentiation
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Family trust tax planning versus tax return preparation
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Tax return preparation reports what occurred during the income year. Family trust tax planning is
            forward-looking: it considers proposed distributions, expected income, capital gains, related entities and
            other tax factors before decisions are finalised. The two services are connected but they are not the same.
          </p>
        </div>

        {/* 2-Column Comparison Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Tax Return Preparation (Historical Reporting) */}
          <div className="p-8 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 flex items-center justify-center">
                  <FileTextOutlined className="text-xl text-blue-600 dark:text-blue-400" />
                </div>
                <Tag color="blue" className="font-semibold text-xs">
                  Retrospective Compliance
                </Tag>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                Tax Return Preparation
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                Reports what actually transpired during the completed financial year. It compiles financial records,
                calculates Section 95 net taxable income, and reports beneficiary distribution outcomes to the ATO.
              </p>
              <ul className="space-y-2 text-xs text-slate-600 dark:text-zinc-300">
                <li className="flex items-start gap-2">
                  <CheckCircleOutlined className="text-blue-500 mt-0.5 shrink-0" />
                  <span>Based on executed trustee resolutions made prior to 30 June</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleOutlined className="text-blue-500 mt-0.5 shrink-0" />
                  <span>Reconciles actual bank, trading, and investment accounts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleOutlined className="text-blue-500 mt-0.5 shrink-0" />
                  <span>Issues annual beneficiary tax statements for individual returns</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-zinc-700/60 text-xs font-semibold text-blue-600 dark:text-blue-400">
              Annual ATO Lodgement Function
            </div>
          </div>

          {/* Card 2: Family Trust Tax Planning (Forward-Looking Strategy) */}
          <div className="p-8 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 flex items-center justify-center">
                  <CompassOutlined className="text-xl text-purple-600 dark:text-purple-400" />
                </div>
                <Tag color="purple" className="font-semibold text-xs">
                  Forward-Looking Strategy
                </Tag>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                Family Trust Tax Planning
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                Analyzes future or anticipated transactions before decisions are cast into legal minutes. It reviews
                beneficiary marginal tax brackets, franking credits, capital gains, and related entities.
              </p>
              <ul className="space-y-2 text-xs text-slate-600 dark:text-zinc-300">
                <li className="flex items-start gap-2">
                  <CheckCircleOutlined className="text-purple-500 mt-0.5 shrink-0" />
                  <span>Models expected net income before the financial year closes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleOutlined className="text-purple-500 mt-0.5 shrink-0" />
                  <span>Ensures eligible beneficiaries fall strictly within trust deed classes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleOutlined className="text-purple-500 mt-0.5 shrink-0" />
                  <span>Separately scoped advice prior to signing resolutions or contracts</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-zinc-700/60 text-xs font-semibold text-purple-600 dark:text-purple-400">
              Proactive Advisory Engagement
            </div>
          </div>
        </div>

        {/* Verbatim Integrity & Family Trust Election (FTE) Warning Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-slate-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border border-amber-200 dark:border-zinc-800 shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <SafetyCertificateOutlined className="text-xl text-amber-600 dark:text-amber-400" />
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              Anti-Avoidance, Integrity Rules & Family Trust Elections (FTE)
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Tax planning does not mean that a family trust can automatically direct income to any person or achieve a
            particular tax outcome. Beneficiaries must be within the deed, trustee decisions must be effective, and
            anti-avoidance, integrity and other tax rules may be relevant depending on the arrangement.
          </p>
          <div className="p-4 rounded-xl bg-white dark:bg-zinc-800/80 border border-amber-200/70 dark:border-zinc-700 flex items-start gap-3">
            <ExclamationCircleOutlined className="text-amber-600 dark:text-amber-400 text-sm mt-0.5 shrink-0" />
            <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-200 leading-relaxed">
              <strong>Family Trust Election Note:</strong> A trust does not have a family trust election merely because
              it is described as a family trust. If an election is in force or being considered, the election status,
              specified individual, family group and possible tax consequences should be checked rather than assumed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
