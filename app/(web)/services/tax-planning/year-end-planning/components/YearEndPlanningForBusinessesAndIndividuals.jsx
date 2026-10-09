"use client";

import React from "react";
import Link from "next/link";
import { Button } from "antd";
import {
  ShopOutlined,
  UserOutlined,
  InfoCircleOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * YearEndPlanningForBusinessesAndIndividuals Component
 * ====================================================
 * Section 4: Dual comparative analysis between commercial business year-end
 * planning and individual/high-income EOFY review.
 * Verbatim text from Page 7 of the Tax Planning document.
 */
export default function YearEndPlanningForBusinessesAndIndividuals() {
  const businessFocus = [
    "Expected commercial profit & loss run-rates",
    "Operating expenses and supplier accruals",
    "Asset purchases and depreciation schedules",
    "PAYG instalments and cash-flow obligations",
    "GST and quarterly BAS reconciliations",
    "Entity structure transactions & director drawings",
  ];

  const individualFocus = [
    "Salary, bonuses, and multiple employment incomes",
    "Dividends, managed funds, and ETF distributions",
    "Rental property income, expenses, and repairs",
    "Work-related deductions and substantiation",
    "Concessional & non-concessional super contributions",
    "CGT event timing on share and property sales",
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-primary/10 text-brand-primary dark:bg-emerald-500/10 dark:text-emerald-400 mb-4 border border-brand-primary/20 dark:border-emerald-500/20">
            Dual Focus
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Year-End Planning for Businesses and Individuals
          </h2>
        </div>

        {/* 2 Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 max-w-6xl mx-auto">
          {/* Business Planning Card */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 dark:bg-emerald-950/40 flex items-center justify-center text-brand-primary dark:text-emerald-400 border border-brand-primary/20">
                  <ShopOutlined className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Business Entities
                  </h3>
                  <span className="text-xs text-brand-primary dark:text-emerald-400 font-semibold uppercase tracking-wider">
                    Companies, Trusts &amp; Sole Traders
                  </span>
                </div>
              </div>
              <p className="text-slate-700 dark:text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
                Business year-end planning may involve a review of expected
                profit, expenses, asset purchases, PAYG instalments, GST/BAS
                information and the interaction between business transactions
                and the chosen entity structure. The planning should reflect
                commercial reality and the tax rules that apply to the entity.
              </p>
              <div className="border-t border-slate-100 dark:border-zinc-800 pt-5 space-y-2.5">
                {businessFocus.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-zinc-400"
                  >
                    <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Individual Planning Card */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/40 flex items-center justify-center text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800/40">
                  <UserOutlined className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Individual Taxpayers
                  </h3>
                  <span className="text-xs text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wider">
                    Employees, Investors &amp; Professionals
                  </span>
                </div>
              </div>
              <p className="text-slate-700 dark:text-zinc-300 text-sm sm:text-base leading-relaxed mb-4">
                For individuals, the focus may be employment income, investment
                income, rental property, deductions, superannuation
                considerations and capital gains. Higher-income taxpayers with
                bonuses, employee shares, investments or multiple income sources
                may benefit from a more detailed review through our High-Income
                Professionals service where tax-return complexity is the main
                issue.
              </p>
              <div className="mb-6">
                <Link href="/services/individual-tax/high-income-professionals">
                  <Button
                    type="link"
                    className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1.5 text-xs sm:text-sm h-auto"
                    icon={<ArrowRightOutlined className="text-xs" />}
                    iconPlacement="end"
                  >
                    High-Income Professionals Service
                  </Button>
                </Link>
              </div>
              <div className="border-t border-slate-100 dark:border-zinc-800 pt-5 space-y-2.5">
                {individualFocus.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-zinc-400"
                  >
                    <CheckCircleOutlined className="text-blue-500 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Verbatim Disclaimer on Bookkeeping, Financial Advice & Legal Boundaries */}
        <div className="max-w-4xl mx-auto bg-slate-100 dark:bg-zinc-900 rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-zinc-800 flex items-start gap-4">
          <InfoCircleOutlined className="text-xl text-slate-500 dark:text-zinc-400 mt-1 shrink-0" />
          <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
            Year-end planning does not replace bookkeeping, BAS preparation,
            financial advice or legal advice. Those services may support the
            planning process, but they have different purposes.
          </p>
        </div>
      </div>
    </section>
  );
}
