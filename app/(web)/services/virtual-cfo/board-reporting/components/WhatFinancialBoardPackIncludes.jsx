"use client";

import React from "react";
import { Tag } from "antd";
import {
  BankOutlined,
  FileDoneOutlined,
  DollarCircleOutlined,
  FundOutlined,
  CheckCircleOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

/**
 * WhatFinancialBoardPackIncludes Component
 * ========================================
 * Section 1: What should a financial board pack include?
 * Features 100% complete, verbatim content from client SEO document.
 */
export default function WhatFinancialBoardPackIncludes() {
  const packElements = [
    { title: "Executive Financial Summary", desc: "High-level overview of core results, strategic KPIs, and material exceptions." },
    { title: "Profit and Loss Results", desc: "Detailed revenue, cost of goods, gross margins, and operational expenditure." },
    { title: "Balance Sheet Health", desc: "Review of assets, working capital, liabilities, and retained earnings." },
    { title: "Cash Flow Statement", desc: "Operational liquidity generated versus accounting profit." },
    { title: "Performance Against Budget", desc: "Variance analysis identifying where business performed differently from plan." },
    { title: "Rolling Cash Forecast", desc: "Short and medium-term cash visibility based on stated assumptions." },
    { title: "Operational & Sector Measures", desc: "Productivity, utilization, sales pipeline, or inventory turns." },
    { title: "Funding & Commitment Notes", desc: "Status of bank debt, covenants, supplier liabilities, and capital projects." },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Governance Reporting
          </Tag>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What should a financial board pack include?
          </h2>
          <div className="mt-4 space-y-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            <p>
              There is no single format for every board. A pack may contain an executive financial summary, profit and loss results, balance sheet, cash flow, performance against budget, a cash forecast and selected operational measures. It may also explain material movements, funding commitments and the assumptions behind a recommendation.
            </p>
            <p>
              Board pack reporting services should adapt to the organization’s size, governance arrangements and reporting cycle. Directors considering a new investment may need a concise comparison of options; a board overseeing a period of cash pressure may need more detail on collections, liabilities and near-term obligations. We agree the relevant scope before building a standard template.
            </p>
          </div>
        </div>

        {/* 8 Pack Components Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {packElements.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/50 border border-slate-200/80 dark:border-zinc-700/60 shadow-sm"
            >
              <span className="text-[11px] font-mono font-bold text-teal-600 dark:text-teal-400 block mb-1">
                Section 0{idx + 1}
              </span>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                {item.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-zinc-400 m-0 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Verbatim Data Integrity Labeling Callout */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
            <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400" />
            Distinguishing Actuals, Estimates and Forecasts
          </h3>
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal m-0">
            A clear pack labels the period, source and status of each figure. Actual results, management estimates and forecasts should be distinguished. If a significant number is provisional or based on incomplete data, directors need to see that limitation before relying on it.
          </p>
        </div>
      </div>
    </section>
  );
}
