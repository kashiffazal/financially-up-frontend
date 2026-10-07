"use client";

import React from "react";
import { Tag } from "antd";
import {
  DollarOutlined,
  ToolOutlined,
  CheckCircleOutlined,
  WarningOutlined,
  FileTextOutlined,
} from "@ant-design/icons";

/**
 * RentalIncomeExpensesBorrowing Component
 * =======================================
 * Section 3: Rental income, expenses and borrowing.
 * Verbatim text from Page 5 of '3rd Pillar Tax Planning & Advisory Final Content Pages 1-12.docx'.
 *
 * Focuses on loan purpose vs loan security, debt apportionment, and distinguishes
 * immediate repairs from capital improvements, initial repairs, and capital works (Div 43).
 */
export default function RentalIncomeExpensesBorrowing() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Financial &amp; Deductions Analysis
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Rental Income, Expenses and Borrowing
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Rental income generally needs to be reported where relevant, and deductions depend on the nature and use of the expense. Interest may be deductible where borrowed funds are used for an income-producing purpose, but private use or mixed-purpose borrowing can require apportionment. The security for a loan does not by itself determine deductibility; the use of borrowed funds is important.
          </p>
          <p className="mt-3 text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
            Repairs and maintenance can also differ from capital improvements or initial repairs. Some capital expenditure may instead be dealt with through capital works, decline in value rules or the CGT cost base. Property investment tax advice should therefore review the facts rather than treating every property expense in the same way.
          </p>
        </div>

        {/* 2 Analytical Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Card 1: Borrowing Purpose & Interest Deductibility */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center mb-6">
                <DollarOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                Loan Purpose vs Loan Security
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-5">
                The ATO evaluates the actual economic use of borrowed funds, regardless of what property is mortgaged as security.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-sm mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 font-normal">
                    Borrowing against your home to buy an investment property creates deductible interest.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-sm mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 font-normal">
                    Borrowing against an investment property for personal use creates non-deductible interest.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-sm mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 font-normal">
                    Redrawing or mixing private and investment funds requires strict loan apportionment.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Repairs vs Capital Works vs Initial Repairs */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/60 border border-teal-100 dark:border-teal-800/40 flex items-center justify-center mb-6">
                <ToolOutlined className="text-xl text-teal-600 dark:text-teal-400" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                Repairs vs Capital Expenditure
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-5">
                Expense classification dictates whether an outlay is claimed immediately or written off over years.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 text-sm mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 font-normal">
                    <strong>Immediate Repairs:</strong> Restoring worn fixtures to original state while tenant is in place.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 text-sm mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 font-normal">
                    <strong>Initial Repairs:</strong> Remedying defects existing at purchase must be added to CGT cost base.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 text-sm mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 font-normal">
                    <strong>Capital Works (Div 43):</strong> Structural alterations claimed at 2.5% per annum over 40 years.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Warning Principle Box */}
        <div className="rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/50 p-5 sm:p-6 flex items-start gap-3.5 w-full">
          <WarningOutlined className="text-amber-600 dark:text-amber-400 text-lg mt-0.5 shrink-0" />
          <p className="text-xs sm:text-sm text-amber-900 dark:text-amber-200 leading-relaxed font-normal">
            <strong>Critical Borrowing Principle:</strong> The security for a loan does not by itself determine deductibility; the use of borrowed funds is important. Never assume interest is deductible without tracing the loan funds to income-producing property acquisitions.
          </p>
        </div>
      </div>
    </section>
  );
}
