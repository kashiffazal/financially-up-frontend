"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileTextOutlined,
  FundOutlined,
  CalculatorOutlined,
  LinkOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * WhatFinancialModellingIncludes Component
 * ========================================
 * Section 2: What does financial modelling for business include?
 * Features 100% complete, verbatim content from client SEO document.
 */
export default function WhatFinancialModellingIncludes() {
  const modelElements = [
    { title: "Projected Revenue", desc: "Dynamic pricing, volumes, customer churn, and pipeline conversions." },
    { title: "Direct Costs & Materials", desc: "Cost of sales linked directly to activity levels and supplier terms." },
    { title: "Overheads & Operating Costs", desc: "Fixed rent, staff salaries, software subscriptions, and administrative expenses." },
    { title: "Capital Spending (CapEx)", desc: "Equipment, technology, and vehicle purchases connecting to asset schedules." },
    { title: "Loan Payments & Financing", desc: "Principal amortization, interest calculations, and bank covenant tests." },
    { title: "Tax-Related Cash Outflows", desc: "Estimated PAYG instalments, GST payments, and corporate income tax." },
    { title: "Working Capital Movements", desc: "Debtor collection cycles, supplier creditor terms, and inventory holdings." },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Model Architecture
          </Tag>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What does financial modelling for business include?
          </h2>
          <div className="mt-4 space-y-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            <p>
              The scope depends on the question. A model may include projected revenue, direct costs, overheads, capital spending, loan payments, tax-related cash outflows and working capital movements. Inputs should be traceable and changeable so you can see how an assumption affects the result.
            </p>
            <p>
              Financial model development services usually begin with a review of historic accounts, a budget and operating information. We discuss what is known, what needs estimating and which outputs matter most. Some decisions require a concise cash forecast; others justify an integrated profit and loss, balance sheet and cash flow forecast. A more complex model should earn its complexity by answering a real question.
            </p>
          </div>
        </div>

        {/* 7 Model Components Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {modelElements.map((elem, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm"
            >
              <span className="text-[11px] font-mono font-bold text-teal-600 dark:text-teal-400 block mb-1">
                Component 0{idx + 1}
              </span>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                {elem.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-zinc-400 m-0 leading-relaxed">
                {elem.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Verbatim Three Statement Model Callout */}
        <div className="p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <LinkOutlined className="text-lg text-emerald-600 dark:text-emerald-400" />
            <Tag color="green" className="brand-section-tag font-bold tracking-wider uppercase text-xs m-0">
              Integrated Three-Statement Modeling
            </Tag>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Connected Statements for Complete Visibility
          </h3>
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal m-0">
            A three statement financial model connects these reports so that, for example, capital expenditure affects assets and cash, while related borrowing and repayments flow through liabilities and cash. Consistent connections make the projections easier to review. They do not make uncertain inputs more reliable, so we explain important assumptions and limits alongside the outputs.
          </p>
        </div>
      </div>
    </section>
  );
}
