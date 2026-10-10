"use client";

import React from "react";
import {
  FileTextOutlined,
  CalculatorOutlined,
  CheckCircleFilled,
  ExclamationCircleOutlined,
  DollarOutlined,
} from "@ant-design/icons";

/**
 * RentalIncomeAndDeductionsReview Component
 * =========================================
 * Section 2: What rental income needs to be identified & Which expenses need closer review
 * Exact verbatim content from Client Document (Page 5).
 */
export default function RentalIncomeAndDeductionsReview() {
  const expenseCategories = [
    { title: "Management fees & commissions", desc: "Agent fees deducted at source before net balances are transferred." },
    { title: "Insurance & local authority charges", desc: "Landlord insurance, local municipal council rates, and statutory land levies." },
    { title: "Repairs vs capital improvements", desc: "Initial work to make property rentable, capital works (Division 43), and depreciating assets." },
    { title: "Loan interest & borrowing costs", desc: "Interest deductibility based on use of borrowed funds, tracing redraws and refinancing." },
  ];

  return (
    <section className="py-16 md:py-20 bg-white dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-teal-100 text-teal-800 dark:bg-teal-950/80 dark:text-teal-300 border border-teal-200 dark:border-teal-800/80 mb-4">
            <DollarOutlined /> Revenue & Claims Reconciliation
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Rental Income Identification & Deductions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Australian tax principles govern what is assessable as gross foreign rent and what may be claimed as allowable deductions.
          </p>
        </div>

        {/* 2-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-12">
          {/* Left Column: What rental income needs to be identified */}
          <div className="lg:col-span-5 p-7 sm:p-8 rounded-3xl bg-slate-50 dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800">
            <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/50 flex items-center justify-center text-teal-600 dark:text-teal-400 text-xl mb-4">
              <FileTextOutlined />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              What Rental Income Needs to Be Identified
            </h3>
            <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
              Property manager statements, leases and bank records help establish gross rent and the dates amounts were received. Other tenancy-related receipts may also require review. If an agent deducts commission, repairs or other costs before remitting the balance, the gross income and separate expenses may differ from the net amount deposited into your account.
            </p>
            <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Rent retained in an overseas bank account can still be relevant. Australian reporting does not generally wait until money is transferred to Australia. Keep the original statements so each receipt can be traced and translated, including periods when the property was vacant or used privately.
            </p>
          </div>

          {/* Right Column: Which expenses need closer review */}
          <div className="lg:col-span-7 p-7 sm:p-8 rounded-3xl bg-slate-50 dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center text-blue-600 dark:text-blue-400 text-xl mb-4">
              <CalculatorOutlined />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Which Expenses Need Closer Review
            </h3>
            <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
              An overseas rental property tax accountant may review management fees, insurance, council or local authority charges, maintenance, loan interest and other property costs under Australian tax rules. A payment is not deductible merely because the foreign return or property manager describes it as an expense.
            </p>
            <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-6">
              Repairs can be treated differently from improvements, initial work needed to make a property rentable, capital works or depreciating assets. Interest depends on how borrowed funds were used; the property offered as security does not decide deductibility. Refinancing, redraws and mixed private use require the loan history to be traced. Special rules can also affect deductions connected with property outside Australia.
            </p>

            <div className="p-4 rounded-xl bg-white dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80">
              <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-medium">
                The property generally needs to be rented or genuinely available for rent for related expenses to be considered. Claims may need apportionment for private stays, below-market family arrangements or periods when the property was not available. Keep evidence of advertising, agent instructions, bookings and private-use dates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
