"use client";

import React from "react";
import { Tag } from "antd";
import {
  AuditOutlined,
  CalendarOutlined,
  AimOutlined,
  FileDoneOutlined,
  BankOutlined,
  CheckCircleOutlined,
  WarningOutlined,
} from "@ant-design/icons";

/**
 * HowThreeWayForecastIsBuilt Component
 * ====================================
 * Section 3: How is the forecast built?
 * Features 100% complete, verbatim content from client SEO document.
 */
export default function HowThreeWayForecastIsBuilt() {
  const buildSteps = [
    {
      step: "01",
      title: "Agreeing the forecast horizon and monthly or quarterly detail",
      desc: "Setting the timeframe (typically 12, 24, or 36 months) with periodicity matched to commercial decisions.",
    },
    {
      step: "02",
      title: "Reviewing historic trends and unusual transactions",
      desc: "Normalising baseline data to filter out one-off anomalies, non-recurring grants, or abnormal expenses.",
    },
    {
      step: "03",
      title: "Identifying the operating drivers behind sales and costs",
      desc: "Mapping revenue drivers (volumes, conversion, pricing) and direct variable costs (materials, labour).",
    },
    {
      step: "04",
      title: "Projecting receivables, payables, inventory and capital spending",
      desc: "Calculating the working capital timeline, debtor days, supplier payment terms, and equipment capex.",
    },
    {
      step: "05",
      title: "Incorporating financing terms and known obligations",
      desc: "Connecting loan amortization schedules, interest charges, lease contracts, and scheduled tax provisions.",
    },
    {
      step: "06",
      title: "Checking linked statements and explaining the resulting cash path",
      desc: "Reconciling all balance sheet ties, verifying that the cash statement reconciles, and framing key takeaways.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Build Methodology
          </Tag>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How is the forecast built?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            We begin with recent accounts and establish an opening financial position. We then discuss operational assumptions such as sales, pricing, direct costs, payroll, payment terms and planned spending. Debt terms, tax-related cash payments and other commitments are considered where relevant to the agreed scope. We document significant assumptions and check that the projected statements reconcile.
          </p>
        </div>

        {/* 6 Practical Build Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {buildSteps.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/50 border border-slate-200/80 dark:border-zinc-700/60 hover:bg-white dark:hover:bg-zinc-800 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-teal-600 dark:text-teal-400 px-2.5 py-1 rounded-md bg-teal-100/60 dark:bg-teal-950/40">
                  Step {item.step}
                </span>
                <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400" />
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

        {/* Verbatim Three Statement Model Consultant Callout */}
        <div className="p-6 sm:p-8 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-800/40 flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-100/60 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 flex items-center justify-center shrink-0">
            <WarningOutlined className="text-xl" />
          </div>
          <div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">
              Three Statement Model Consultant Principle
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed m-0 font-normal">
              As a three statement model consultant, we distinguish estimates supported by contracts or recent results from assumptions that require more judgement. If the accounts are incomplete, we identify the work needed before relying on a detailed forecast. More formulae cannot compensate for an unreliable opening balance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
