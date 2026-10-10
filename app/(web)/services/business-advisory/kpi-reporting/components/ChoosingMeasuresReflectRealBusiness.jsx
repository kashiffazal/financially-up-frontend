"use client";

import React from "react";
import { Tag } from "antd";
import {
  SlidersOutlined,
  DollarOutlined,
  RocketOutlined,
  CheckCircleOutlined,
  ExclamationCircleOutlined,
  BankOutlined,
} from "@ant-design/icons";

/**
 * ChoosingMeasuresReflectRealBusiness Component
 * ==============================================
 * Section 3: Choosing measures that reflect the real business
 * Source: 12th Pillar Business Advisory.docx (Lines 358-361)
 *
 * Implements 100% complete, verbatim SEO text detailing financial vs operational KPIs,
 * consistency in accounting classifications, review frequency, and business.gov.au guidance.
 */
export default function ChoosingMeasuresReflectRealBusiness() {
  const financialMeasures = [
    "Revenue growth & quality",
    "Gross profit margin",
    "Operating overhead costs",
    "Available cash balance",
    "Debtor days (DSO)",
    "Budget vs actual variance",
  ];

  const operationalMeasures = [
    "Jobs or milestones completed",
    "Capacity utilization rate",
    "Repeat customer retention",
    "Delivery & turnaround times",
    "Service quality ratings",
    "Stock velocity & lead times",
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
            Data Architecture &amp; Integrity
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Choosing Measures That Reflect the Real Business
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            We start with your decisions and business model, then trace each
            proposed measure to a source. Common financial KPI reporting
            measures include revenue, gross margin, operating costs, cash
            balance, debtor days and budget variance. Operational measures might
            include jobs completed, utilization, repeat customers or delivery
            times. The combination depends on what you can measure consistently
            and what you can influence.
          </p>
        </div>

        {/* Dual Pillar: Financial vs Operational Measures */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Financial KPIs */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-50/70 dark:bg-zinc-950/70 border border-slate-200/80 dark:border-zinc-800">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <DollarOutlined className="text-xl" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0">
                  Financial KPI Measures
                </h3>
                <p className="text-xs text-slate-500 dark:text-zinc-400 m-0">
                  Grounded in general ledger &amp; bank accounts
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {financialMeasures.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-3 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/60 dark:border-zinc-800"
                >
                  <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 text-sm shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-zinc-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Operational KPIs */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-50/70 dark:bg-zinc-950/70 border border-slate-200/80 dark:border-zinc-800">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-800/40 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <RocketOutlined className="text-xl" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0">
                  Operational Driver Measures
                </h3>
                <p className="text-xs text-slate-500 dark:text-zinc-400 m-0">
                  Capturing workflow, capacity &amp; client retention
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {operationalMeasures.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-3 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/60 dark:border-zinc-800"
                >
                  <CheckCircleOutlined className="text-blue-600 dark:text-blue-400 text-sm shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-zinc-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Narrative Box: Definitions and Frequency Matter */}
        <div className="p-6 sm:p-8 rounded-2xl bg-amber-50/40 dark:bg-amber-950/10 border border-amber-200/70 dark:border-amber-900/40 mb-8">
          <div className="flex items-start gap-3">
            <ExclamationCircleOutlined className="text-xl text-amber-600 dark:text-amber-400 shrink-0 mt-1" />
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                Definitions and Reporting Frequency Matter
              </h4>
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal m-0">
                Definitions matter. For example, a gross margin comparison is
                misleading if one month includes direct labour in cost of sales
                and the next records it as overhead. A dashboard also needs the
                right frequency: daily sales may be useful to a retailer, while
                a monthly review may suit a smaller professional practice. We
                agree which comparisons are meaningful before treating an
                apparent trend as a problem.
              </p>
            </div>
          </div>
        </div>

        {/* Business.gov.au Framework Callout */}
        <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-zinc-950/70 border border-slate-200/80 dark:border-zinc-800 flex items-start gap-4">
          <BankOutlined className="text-2xl text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-1">
              Statutory Accounts Grounding (business.gov.au Guidance)
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal m-0">
              Business.gov.au recommends reviewing the profit and loss
              statement, balance sheet, cash flow statement and budget when
              assessing financial health. A KPI report can draw from those
              records, but should not be mistaken for a substitute for accurate
              accounts or regular financial statements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
