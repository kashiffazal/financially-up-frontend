"use client";

import React from "react";
import { Button } from "antd";
import {
  UsergroupAddOutlined,
  ArrowRightOutlined,
  ApartmentOutlined,
  LineChartOutlined,
  CheckCircleOutlined,
  BankOutlined,
  ShopOutlined,
  SwapOutlined,
  FolderOpenOutlined,
  FundOutlined,
} from "@ant-design/icons";
import Link from "next/link";

/**
 * WhoNeedsTrustServices Component
 * ===============================
 * Section 4: Who may need trust accounting services?
 *
 * Implements verbatim content from '8th Pillar Trust Services.docx' (Page 1: 1- Trust Services).
 * Explains when trust accounting is required across investments, active trading,
 * beneficiary distributions, and multi-entity family groups. Contrasts Family Discretionary
 * Trusts with Unit Trusts and provides clear routing cards.
 *
 * Background: Lite Brand Gradient.
 */
export default function WhoNeedsTrustServices() {
  /**
   * Diagnostic triggers directly reflecting the document text
   */
  const accountingTriggers = [
    {
      icon: <FundOutlined className="text-teal-600 dark:text-teal-400 text-lg" />,
      title: "Holds Investments",
      desc: "Shares, commercial property, residential portfolios or managed funds generating capital returns.",
    },
    {
      icon: <ShopOutlined className="text-blue-600 dark:text-blue-400 text-lg" />,
      title: "Operates a Business",
      desc: "Active commercial trading activities with revenue, payroll, supplier liabilities, and turnover.",
    },
    {
      icon: <SwapOutlined className="text-emerald-600 dark:text-emerald-400 text-lg" />,
      title: "Income & Expenses",
      desc: "Receiving income, incurring deductible outlays, and requiring proper balance-sheet classification.",
    },
    {
      icon: <ApartmentOutlined className="text-purple-600 dark:text-purple-400 text-lg" />,
      title: "Makes Distributions",
      desc: "Distributing net income or capital gains to individual, corporate, or trust beneficiaries.",
    },
    {
      icon: <UsergroupAddOutlined className="text-amber-600 dark:text-amber-400 text-lg" />,
      title: "Related-Entity Transactions",
      desc: "Inter-company loans, beneficiary draw accounts, or transactions involving related family entities.",
    },
    {
      icon: <FolderOpenOutlined className="text-rose-600 dark:text-rose-400 text-lg" />,
      title: "Multi-Account Records",
      desc: "Records spread across separate bank accounts, broker portfolios, property files, and loan facilities.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-800/60 mb-4">
            <UsergroupAddOutlined className="text-teal-600 dark:text-teal-400 text-xs sm:text-sm" />
            <span className="text-xs font-semibold text-teal-800 dark:text-teal-300 tracking-wide uppercase">
              Trustee Applicability
            </span>
          </div>

          {/* Exact H2 Heading from Document */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Who may need trust accounting services?
          </h2>

          {/* Exact Verbatim Paragraph 1 from Document */}
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Trust accounting is relevant whenever a trust holds investments, operates a business,
            receives income, incurs expenses, makes distributions or has transactions with
            beneficiaries or related entities. The work is particularly important where records are
            spread across bank accounts, investment statements, property records, loan accounts or
            multiple entities.
          </p>

          {/* Exact Verbatim Paragraph 2 from Document */}
          <p className="mt-3 text-sm sm:text-base text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
            Financially Up can support a range of private trust arrangements. Two common examples are
            family or discretionary trusts and unit trusts. Each has different practical
            considerations, so the accounting approach should reflect the actual deed and transactions
            rather than rely on a generic template.
          </p>
        </div>

        {/* 6 Trigger Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-14">
          {accountingTriggers.map((trig, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-xs hover:border-teal-500/50 hover:shadow-md transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-zinc-800 flex items-center justify-center mb-4">
                {trig.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
                {trig.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed m-0 font-normal">
                {trig.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Exact Verbatim Trust Pathway Guidance & Routing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Pathway 1: Family or Discretionary Trust */}
          <div className="p-7 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:border-teal-500/60 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/50 flex items-center justify-center">
                  <ApartmentOutlined className="text-teal-600 dark:text-teal-400 text-xl" />
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300 border border-teal-200/60 dark:border-teal-800/60">
                  Family Groups
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Family Trust Accountant
              </h3>
              {/* Exact Verbatim Sentence from Document */}
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-6 font-normal">
                If your trust is discretionary and used within a family group, our Family Trust
                Accountant page explains the annual accounting and distribution issues in more detail.
              </p>
            </div>
            <Link href="/services/trusts/family-trust">
              <Button
                type="primary"
                size="large"
                icon={<ArrowRightOutlined />}
                iconPlacement="end"
                className="w-full h-11 rounded-xl font-semibold shadow-sm hover:scale-[1.01] transition-all"
              >
                Explore Family Trust Accountant
              </Button>
            </Link>
          </div>

          {/* Pathway 2: Unit Trust */}
          <div className="p-7 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:border-blue-500/60 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center">
                  <LineChartOutlined className="text-blue-600 dark:text-blue-400 text-xl" />
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60">
                  Fixed Interests
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Unit Trust Accountant
              </h3>
              {/* Exact Verbatim Sentence from Document */}
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-6 font-normal">
                For trusts where interests are represented by units, see our Unit Trust Accountant
                service.
              </p>
            </div>
            <Link href="/services/trusts/unit-trust">
              <Button
                size="large"
                icon={<ArrowRightOutlined />}
                iconPlacement="end"
                className="w-full h-11 rounded-xl font-semibold border-slate-300 dark:border-zinc-700 text-slate-800 dark:text-zinc-200 hover:bg-slate-50 dark:hover:bg-zinc-800 hover:scale-[1.01] transition-all"
              >
                Explore Unit Trust Accountant
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
