"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  BankOutlined,
  CopyOutlined,
  TagsOutlined,
  TeamOutlined,
  QuestionCircleOutlined,
  FileProtectOutlined,
  DollarOutlined,
  ImportOutlined,
  GoldOutlined,
  CloudSyncOutlined,
  InfoCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * WhatWeReviewAndCorrect Component
 * ================================
 * Section 3: What We May Review and Correct
 * Features 100% complete, verbatim content from Page 5 of client docx.
 */
export default function WhatWeReviewAndCorrect() {
  const reviewScopes = [
    {
      icon: <BankOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Bank, credit-card and payment-platform reconciliations.",
      desc: "Investigating bank feed discrepancies across Stripe, PayPal, Square, credit cards, and merchant clearing ledgers.",
    },
    {
      icon: <CopyOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Duplicate or missing transaction review.",
      desc: "Identifying and voiding redundant entries while capturing unentered supplier expenses and incoming receipts.",
    },
    {
      icon: <TagsOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Income and expense account coding.",
      desc: "Reclassifying misallocated expense lines to ensure consistent, compliant chart-of-accounts structure.",
    },
    {
      icon: <TeamOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Supplier and customer ledger balances where relevant.",
      desc: "Reviewing aged payables and receivables, clearing unallocated credit notes, and untangling messy customer balances.",
    },
    {
      icon: <QuestionCircleOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Clearing, suspense and uncategorized accounts.",
      desc: "Emptying unresolved holding accounts and systematically allocating balances to verified operational accounts.",
    },
    {
      icon: <FileProtectOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "GST coding in the bookkeeping records where applicable.",
      desc: "Reviewing tax rates applied to purchases, ensuring consistent treatment across BAS-reported figures.",
    },
    {
      icon: <DollarOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Loan and finance account bookkeeping where supporting documents are available.",
      desc: "Aligning principal and interest allocations against amortization schedules and lender statements.",
    },
    {
      icon: <ImportOutlined className="text-xl text-cyan-600 dark:text-cyan-400" />,
      title: "Opening balances and historical carry-forward issues.",
      desc: "Correcting migration errors, out-of-balance conversion journals, and retained earnings variances.",
    },
    {
      icon: <GoldOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Fixed-asset bookkeeping entries at a high level, with accounting or tax treatment referred for separate review where required.",
      desc: "Recording asset additions and disposals cleanly in the ledger while referring depreciation or instant asset write-off to tax review.",
    },
    {
      icon: <CloudSyncOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Xero bookkeeping cleanup, including reconciliation and transaction-coding issues within the agreed scope.",
      desc: "Deep-cleaning Xero organizations, fixing bank rule errors, untangling multi-currency lines, and locking completed periods.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Review Scope &amp; Targets
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What We May Review and Correct
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Depending on the agreed scope, bookkeeping correction services may include:
          </p>
        </div>

        {/* 10 Review Scopes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {reviewScopes.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:border-emerald-400/60 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest">
                    Area {idx < 9 ? `0${idx + 1}` : idx + 1}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Regulatory & Prudence Disclaimer */}
        <div className="p-6 sm:p-7 rounded-2xl bg-slate-50 dark:bg-zinc-950 border border-slate-200/80 dark:border-zinc-800 flex items-start gap-3 sm:gap-4">
          <InfoCircleOutlined className="text-brand-primary dark:text-emerald-400 text-lg mt-0.5 shrink-0" />
          <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            <strong>Professional Governance Note:</strong> Not every balance should be changed just because it looks unusual. Some items may require source documents, accountant review or tax advice before an adjustment is appropriate. Where prior BAS or tax returns may be affected, any amendment or tax review should be separately considered rather than assumed to be part of bookkeeping clean-up. GST coding that requires interpretation or application of GST law should be expressly included within separately scoped BAS or tax work.
          </p>
        </div>
      </div>
    </section>
  );
}
