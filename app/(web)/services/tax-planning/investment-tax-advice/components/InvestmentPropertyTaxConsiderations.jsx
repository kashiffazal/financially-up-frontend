"use client";

import React from "react";
import Link from "next/link";
import {
  HomeOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  CompassOutlined,
} from "@ant-design/icons";

/**
 * InvestmentPropertyTaxConsiderations Component
 * ===============================================
 * Section 5: Real estate investment tax, annual rental income vs CGT upon disposal,
 * deductible expenses, borrowing purpose, capital works, and cross-link to property tax service.
 * Verbatim text from Page 12 of the Tax Planning document.
 */
export default function InvestmentPropertyTaxConsiderations() {
  const propertyAspects = [
    { title: "Rental Income & Deductions", desc: "Gross rental receipts, tenant payments, and allowable holding expenses." },
    { title: "Borrowing Purpose & Interest", desc: "Interest deductibility based on loan purpose rather than security asset." },
    { title: "Repairs vs Capital Expenditure", desc: "Immediate repairs deduction versus initial repairs or structural capital improvements." },
    { title: "Depreciation & Capital Works", desc: "Division 40 plant & equipment and Division 43 structural capital works deductions." },
    { title: "Ownership Arrangements", desc: "Individual, joint tenants, tenants-in-common, trust or company ownership." },
    { title: "Future Disposal & CGT", desc: "Main residence exemption limits, partial CGT calculations, and capital proceeds." },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-zinc-900 border-b border-slate-100 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-primary/10 text-brand-primary dark:bg-emerald-500/10 dark:text-emerald-400 mb-4 border border-brand-primary/20 dark:border-emerald-500/20">
            Real Estate Assets
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Investment Property Tax Considerations
          </h2>
        </div>

        {/* Verbatim Lead Paragraph */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-slate-50 dark:bg-zinc-800/60 p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-zinc-700/80 shadow-sm flex items-start space-x-4">
            <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 flex items-center justify-center border border-slate-200 dark:border-zinc-700 shrink-0">
              <HomeOutlined className="text-2xl text-brand-primary dark:text-emerald-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Dual Income-Tax &amp; CGT Dimension
              </h3>
              <p className="text-slate-700 dark:text-zinc-300 text-base sm:text-lg leading-relaxed">
                Property can involve both annual income-tax issues and future CGT consequences. Rental income, deductible expenses, borrowing purpose, repairs versus capital expenditure, depreciation or capital works and ownership all need to be considered under the relevant rules.
              </p>
            </div>
          </div>
        </div>

        {/* 6 Key Property Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {propertyAspects.map((aspect, idx) => (
            <div
              key={idx}
              className="bg-slate-50 dark:bg-zinc-800/40 rounded-xl p-5 border border-slate-200/70 dark:border-zinc-700/60 flex items-start space-x-3.5"
            >
              <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 text-lg mt-0.5 shrink-0" />
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                  {aspect.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                  {aspect.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Comparison & Cross-Service Banner */}
        <div className="bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-zinc-800/90 dark:to-zinc-800/50 rounded-2xl p-6 sm:p-8 border border-teal-200 dark:border-teal-800/40 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <div className="flex items-center space-x-2 text-teal-700 dark:text-teal-300 text-xs font-bold uppercase tracking-wider mb-1">
                <CompassOutlined />
                <span>Annual Tax Compliance vs Strategic Advisory</span>
              </div>
              <p className="text-slate-700 dark:text-zinc-200 text-base font-medium leading-relaxed">
                If the main issue is preparing the annual rental property tax position, our Investment Property Tax service covers those compliance matters. Investment tax advice is more appropriate where you are considering a transaction or want to understand the broader tax consequences before acting.
              </p>
            </div>
            <Link
              href="/services/individual-tax/investment-property-tax-accountant"
              className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm transition-all shadow-sm hover:shadow shrink-0 group"
            >
              Property Tax Service
              <ArrowRightOutlined className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
