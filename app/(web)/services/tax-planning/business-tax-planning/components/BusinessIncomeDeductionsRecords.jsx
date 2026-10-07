"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileTextOutlined,
  DollarOutlined,
  InfoCircleOutlined,
  CheckCircleOutlined,
  WarningOutlined,
} from "@ant-design/icons";

/**
 * BusinessIncomeDeductionsRecords Component
 * =========================================
 * Section 4: Business Income, Deductions and Records.
 * Verbatim text from Page 2 of '3rd Pillar Tax Planning & Advisory Final Content Pages 1-12.docx'.
 *
 * Focuses on reliable record-keeping, substantiation requirements, and avoiding
 * illegitimate deductions or arbitrary pre-payments without commercial justification.
 */
export default function BusinessIncomeDeductionsRecords() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Financial Foundations
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Business Income, Deductions and Records
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Tax planning starts with reliable financial information. Expected business income should be supported by current bookkeeping or accounting records, and proposed deductions should be considered against the rules that apply to the expense. A cost is not deductible merely because it was paid before 30 June.
          </p>
          <p className="mt-3 text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
            Good records are also important for GST, superannuation, asset transactions and other business obligations. Financially Up can identify gaps in the information provided and explain what may be needed before a planning position can be finalised.
          </p>
        </div>

        {/* 2 Focused Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Card 1: Reliable Income & Bookkeeping Base */}
          <div className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center mb-6">
                <FileTextOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                Reliable Financial Records
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                Forward modeling requires reconciled accounts. Clean ledgers enable our team to accurately project taxable profit rather than relying on estimates.
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-sm mt-1 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 font-normal">
                    Reconciled bank accounts and merchant feeds up to the current month.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-sm mt-1 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 font-normal">
                    Up-to-date accounts receivable and accounts payable aged reports.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-sm mt-1 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 font-normal">
                    Accurate recording of GST, superannuation guarantee, and payroll figures.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Deduction Substantiation & Timing */}
          <div className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/60 border border-teal-100 dark:border-teal-800/40 flex items-center justify-center mb-6">
                <DollarOutlined className="text-xl text-teal-600 dark:text-teal-400" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                Deduction Rules &amp; Prepayments
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                Expenses must have a genuine nexus to producing assessable business income. Accelerating expenditure must be commercially viable.
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 text-sm mt-1 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 font-normal">
                    Prepayment rules for small business entities under statutory turnover limits.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 text-sm mt-1 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 font-normal">
                    Distinction between revenue expenses and capital asset expenditure.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 text-sm mt-1 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 font-normal">
                    Identification of missing records or substantiation gaps before finalising.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Warning / Statutory Substantiation Note */}
        <div className="rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/50 p-5 sm:p-6 flex items-start gap-3.5 w-full">
          <WarningOutlined className="text-amber-600 dark:text-amber-400 text-lg mt-0.5 shrink-0" />
          <p className="text-xs sm:text-sm text-amber-900 dark:text-amber-200 leading-relaxed font-normal">
            <strong>Substantiation Principle:</strong> A cost is not deductible merely because it was paid before 30 June. All business expenses must be incurred in gaining or producing assessable income and backed by compliant tax invoices, contracts, or statutory records.
          </p>
        </div>
      </div>
    </section>
  );
}
