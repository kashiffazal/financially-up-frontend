"use client";

import React from "react";
import { Tag } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

/**
 * WhenCfoOutsourcingMakesSense Component
 * =====================================
 * Section 2: When does CFO outsourcing make sense?
 * Features 100% complete, verbatim content from client SEO document.
 */
export default function WhenCfoOutsourcingMakesSense() {
  const triggerScenarios = [
    {
      title: "cash flow has become harder to predict",
      explanation: "Growth, delayed client remittances, or increased upfront expenditures create unexpected cash troughs.",
      severity: "Cash Liquidity",
    },
    {
      title: "management lacks a reliable monthly reporting pack",
      explanation: "Decisions are delayed or made in the dark because figures take weeks to produce or lack clarity.",
      severity: "Reporting Gap",
    },
    {
      title: "the owner spends too much time interpreting financial data",
      explanation: "Key executives waste valuable commercial hours wading through raw transaction reports and spreadsheets.",
      severity: "Leadership Time",
    },
    {
      title: "the business is adding staff, locations, products or service lines",
      explanation: "Operational expansion introduces cost layers and working-capital demands that require strict financial oversight.",
      severity: "Expansion Risk",
    },
    {
      title: "margins are changing and management needs better analysis",
      explanation: "Revenue is climbing but bottom-line profit is eroding without a clear breakdown of where leaks occur.",
      severity: "Margin Pressure",
    },
    {
      title: "lenders, investors or a board require clearer reporting",
      explanation: "External stakeholders and governance committees demand professional variance reports and covenants tracking.",
      severity: "Governance Demand",
    },
    {
      title: "budgets exist but are not regularly compared with actual results",
      explanation: "Annual targets sit forgotten in a spreadsheet rather than actively steering operational expenditure.",
      severity: "Accountability Gap",
    },
    {
      title: "bookkeeping is accurate but the business still lacks forward-looking finance support",
      explanation: "Historical ledgers are up to date, but no one is modelling the next 3, 6, or 12 months of financial runway.",
      severity: "Strategic Gap",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <Tag color="blue" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Commercial Milestones
          </Tag>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            When does CFO outsourcing make sense?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            CFO outsourcing can make sense when the business has enough complexity to need senior finance oversight but not enough scale to justify a full-time CFO. It can also be a practical option during a growth phase, after a finance-team change, or when management wants a stronger reporting discipline before committing to a permanent senior hire.
          </p>
        </div>

        {/* 8 Trigger Indicators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {triggerScenarios.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 hover:border-brand-primary/50 dark:hover:border-emerald-500/50 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 mt-0.5 border border-amber-200/50 dark:border-amber-800/40">
                <ExclamationCircleOutlined className="text-lg" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2 mb-1.5 flex-wrap">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white capitalize leading-snug">
                    {item.title}
                  </h3>
                  <span className="text-[11px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400">
                    {item.severity}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal m-0">
                  {item.explanation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
