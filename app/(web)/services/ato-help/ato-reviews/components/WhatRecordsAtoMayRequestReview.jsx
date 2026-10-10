"use client";

import React from "react";
import {
  ShopOutlined,
  CalculatorOutlined,
  HomeOutlined,
  FileZipOutlined,
  CheckCircleTwoTone,
  CloseCircleTwoTone,
} from "@ant-design/icons";

/**
 * WhatRecordsAtoMayRequestReview Component
 * =========================================
 * Section 3: Categories of documentation typically requested by the ATO
 * across sales, deductions, property, and CGT, plus best practices on relevance.
 */
export default function WhatRecordsAtoMayRequestReview() {
  const documentCategories = [
    {
      title: "Business Sales & GST",
      subtitle: "BAS & Revenue Examinations",
      items: [
        "Tax invoices & POS system turnover summaries",
        "Full trading bank statements & merchant settlements",
        "GST calculation sheets & reconciliation schedules",
        "BAS workpapers tying to ledger accounts",
      ],
      icon: <ShopOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
      tag: "Business Reviews",
    },
    {
      title: "Work & Operating Deductions",
      subtitle: "Expense Substantiation",
      items: [
        "Itemised receipts and proof of electronic payment",
        "Compliant logbooks, odometer records or diary logs",
        "Apportionment calculations for mixed private/business use",
        "Employer confirmation letters regarding required costs",
      ],
      icon: <CalculatorOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
      tag: "Deduction Reviews",
    },
    {
      title: "Rental Property & CGT",
      subtitle: "Capital & Asset Transactions",
      items: [
        "Purchase and sale contracts & formal settlement sheets",
        "Title deeds, ownership splits & loan redraw statements",
        "Depreciation reports & capital works schedules",
        "Valuation reports, cost base records & improvement invoices",
      ],
      icon: <HomeOutlined className="text-2xl text-purple-600 dark:text-purple-400" />,
      tag: "Property & CGT",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-2">
            Evidence Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            What records might the ATO request?
          </h2>
          <div className="mt-6 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed space-y-4">
            <p>
              The documents depend on the issue. A business-sales review may involve invoices, bank statements, sales-system reports, GST working papers and bank reconciliations. A deduction review may require receipts, logbooks or usage records and an explanation of how a claim was calculated. Rental property or capital gains questions can require contracts, settlement statements, ownership records, dates, valuations and cost evidence.
            </p>
            <p>
              Relevance is as important as volume. A good response maps each question to an explanation and supporting record, with schedules that reconcile to the amount lodged. Sending an unstructured folder can conceal rather than resolve the point. Equally, omitting unfavourable but responsive material can damage credibility and may fail to answer the request.
            </p>
          </div>
        </div>

        {/* 3 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {documentCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 hover:border-emerald-500 dark:hover:border-emerald-500 shadow-sm transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center">
                    {cat.icon}
                  </div>
                  <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60 px-2.5 py-1 rounded-full uppercase">
                    {cat.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {cat.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-zinc-400 mb-4 font-medium">
                  {cat.subtitle}
                </p>
                <ul className="space-y-2.5">
                  {cat.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 flex items-start gap-2.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Good Practice vs Risky Practice Comparison Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-zinc-800/40 border border-slate-200/80 dark:border-zinc-700/80">
          <div className="flex items-center gap-3 mb-6">
            <FileZipOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Submission Strategy: Structured Reconciliations vs Data Dumps
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60">
              <div className="flex items-center gap-2 mb-2 font-bold text-emerald-900 dark:text-emerald-300 text-sm">
                <CheckCircleTwoTone twoToneColor="#10b981" />
                <span>The Structured Reconciled Approach</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed">
                Maps every ATO questionnaire item directly to an explanatory schedule, clear calculation steps, and indexed supporting receipts. Reconciles exactly to the figures reported on the return.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-rose-50/60 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800/60">
              <div className="flex items-center gap-2 mb-2 font-bold text-rose-900 dark:text-rose-300 text-sm">
                <CloseCircleTwoTone twoToneColor="#f43f5e" />
                <span>The Unstructured Data Dump</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed">
                Sending raw, unindexed folders conceals rather than clarifies the issues, delays resolution, and may trigger broader scrutiny. Selective omission of responsive facts severely undermines tax credibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
