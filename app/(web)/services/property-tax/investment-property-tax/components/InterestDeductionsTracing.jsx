"use client";

import React from "react";
import { Tag } from "antd";
import {
  BankOutlined,
  CompassOutlined,
  FileTextOutlined,
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

/**
 * InterestDeductionsTracing Component
 * ===================================
 * Section: Interest deductions depend on how borrowed money is used.
 * Features 100% complete, verbatim content from Page 2 of 10th Pillar Property Tax.docx.
 */
export default function InterestDeductionsTracing() {
  const tracingPrinciples = [
    {
      icon: <CompassOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Use of Funds Principle",
      description:
        "The ATO applies the 'use test': interest deductibility is governed strictly by what the borrowed money was used to purchase, not what asset secures the mortgage.",
    },
    {
      icon: <BankOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Redraws & Mixed Loans",
      description:
        "Redrawing funds from an investment mortgage to pay for personal items, holidays, or private debt creates a mixed-purpose loan requiring permanent interest apportionment.",
    },
    {
      icon: <FileTextOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Loan History Reconstruction",
      description:
        "Refinancing without maintaining clean loan schedules can obscure the deductible balance. Comprehensive transaction histories are essential to substantiate claims.",
    },
    {
      icon: <SafetyCertificateOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Loan Splitting & Structure",
      description:
        "Establishing separate sub-accounts or loan splits when borrowing keeps deductible debt isolated from private expenditure, safeguarding your full tax position.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Borrowing &amp; Tracing Rules
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Interest Deductions Depend on How Borrowed Money Is Used
          </h2>
        </div>

        {/* 2 Verbatim Text Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mb-12">
          {/* Paragraph 1 */}
          <div className="bg-slate-50/80 dark:bg-zinc-900/80 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-4">
              <ExclamationCircleOutlined />
              <span>Security vs Purpose of Borrowing</span>
            </div>
            {/* Verbatim text from official document */}
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
              Interest is not deductible merely because a loan is secured against a rental property. The use of the borrowed funds is central. If part of a loan is redrawn or refinanced for private purposes, the interest may need to be apportioned and the loan history can become difficult to reconstruct later.
            </p>
          </div>

          {/* Paragraph 2 */}
          <div className="bg-slate-50/80 dark:bg-zinc-900/80 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 mb-4">
              <CheckCircleOutlined />
              <span>Record-Keeping for Refinanced Facilities</span>
            </div>
            {/* Verbatim text from official document */}
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
              Keeping loan statements and records of each redraw or refinance can save substantial time when the rental property tax return is prepared.
            </p>
          </div>
        </div>

        {/* 4 Tracing Guideline Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tracingPrinciples.map((item, idx) => (
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
