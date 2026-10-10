"use client";

import React from "react";
import Link from "next/link";
import {
  DollarOutlined,
  BankOutlined,
  LineChartOutlined,
  HomeOutlined,
  SafetyCertificateOutlined,
  TeamOutlined,
  FileTextOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * ForeignIncomeCategoriesDetail Component
 * ========================================
 * Section 3: What Foreign Income May Need to Be Reported?
 * Exact verbatim text and rental records from Client Document (Page 2).
 */
export default function ForeignIncomeCategoriesDetail() {
  const rentalRecords = [
    "Rental statements",
    "Property-manager reports",
    "Loan statements",
    "Rates and taxes",
    "Insurance",
    "Repairs and maintenance invoices",
    "Purchase documents",
    "Depreciation or capital expenditure records",
    "Foreign tax records",
  ];

  return (
    <section className="py-16 md:py-20 bg-slate-50 dark:bg-zinc-900/60 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-teal-100 text-teal-800 dark:bg-teal-950/80 dark:text-teal-300 border border-teal-200 dark:border-teal-800/80 mb-4">
            <FileTextOutlined /> In-Depth Income Analysis
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            What Foreign Income May Need to Be Reported?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Australian tax law categorises offshore revenue streams into distinct schedules, each governed by its own deduction, timing, and treaty rules.
          </p>
        </div>

        {/* 6 Income Streams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 1. Overseas Employment Income */}
          <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/50 flex items-center justify-center text-teal-600 dark:text-teal-400 text-xl mb-4">
                <DollarOutlined />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                Overseas employment income
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Salary, wages, bonuses and other employment-related amounts earned overseas can be relevant to an Australian tax return where you are an Australian resident for tax purposes. Special rules and exemptions can apply in limited circumstances, so overseas employment income should not simply be excluded because tax was paid in another country.
              </p>
            </div>
          </div>

          {/* 2. Foreign Bank Interest */}
          <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center text-blue-600 dark:text-blue-400 text-xl mb-4">
                <BankOutlined />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                Foreign bank interest
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Interest earned in an overseas bank account may be assessable in Australia for an Australian resident for tax purposes. This can apply even where the account was established before moving to Australia or the interest is retained offshore.
              </p>
            </div>
          </div>

          {/* 3. Overseas Dividends */}
          <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-xl mb-4">
                <LineChartOutlined />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                Overseas dividends
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Dividends from foreign companies may also need to be reported. Foreign dividend statements should be retained together with details of any foreign tax withheld.
              </p>
            </div>
          </div>

          {/* 4. Foreign Rental Property Income (Spans or features records) */}
          <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 md:col-span-2 lg:col-span-3">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7">
                <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-950/50 flex items-center justify-center text-amber-600 dark:text-amber-400 text-xl mb-4">
                  <HomeOutlined />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  Foreign rental property income
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  Australian residents who own rental property overseas may need to report assessable rental income and calculate allowable deductions under Australian tax rules. The amount shown on a foreign tax return cannot automatically be copied into the Australian return because Australian deduction and timing rules may differ.
                </p>
                <div className="mt-5">
                  <Link
                    href="/services/international-tax/foreign-rental-income"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300"
                  >
                    Explore our dedicated Foreign Rental Property Tax service <ArrowRightOutlined />
                  </Link>
                </div>
              </div>

              {/* Records for foreign rental property */}
              <div className="lg:col-span-5 p-5 rounded-xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/60">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-zinc-300 mb-3">
                  Records for foreign rental property:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 font-normal">
                  {rentalRecords.map((rec, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                      <span>{rec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 5. Foreign Pensions and Annuities */}
          <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-cyan-50 dark:bg-cyan-950/50 flex items-center justify-center text-cyan-600 dark:text-cyan-400 text-xl mb-4">
                <SafetyCertificateOutlined />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                Foreign pensions and annuities
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Foreign pension and annuity payments can have specific Australian tax treatment. Many foreign pensions received by Australian residents are taxable in Australia, although the treatment can depend on the type of payment, applicable tax treaty and specific Australian tax rules.
              </p>
            </div>
          </div>

          {/* 6. Foreign Business or Freelance Income */}
          <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 md:col-span-2 lg:col-span-2 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-950/50 flex items-center justify-center text-purple-600 dark:text-purple-400 text-xl mb-4">
                <TeamOutlined />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                Foreign business or freelance income
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Income earned through overseas consulting, freelance work or business activities may also be relevant. The correct treatment can depend on where the activities were performed, the business structure, residency, source rules and any applicable treaty.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
