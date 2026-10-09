"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  DollarOutlined,
  ToolOutlined,
  LaptopOutlined,
  CarOutlined,
  HomeOutlined,
  SafetyCertificateOutlined,
  AuditOutlined,
  TeamOutlined,
  ShopOutlined,
  HistoryOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * SoleTraderExpensesAndAssets Component
 * =====================================
 * Section 4: Business Expenses, Assets and Records.
 * Features 100% complete, verbatim content from Page 4 of the client document.
 */
export default function SoleTraderExpensesAndAssets() {
  const commonExpenseAreas = [
    { label: "Tools & Equipment", icon: <ToolOutlined /> },
    { label: "Software & Subscriptions", icon: <LaptopOutlined /> },
    { label: "Phone & Internet Use", icon: <LaptopOutlined /> },
    { label: "Motor Vehicle Expenses", icon: <CarOutlined /> },
    { label: "Home-Based Business Costs", icon: <HomeOutlined /> },
    { label: "Business Insurance", icon: <SafetyCertificateOutlined /> },
    { label: "Professional Fees", icon: <AuditOutlined /> },
    { label: "Subcontractors", icon: <TeamOutlined /> },
    { label: "Operating Supplies", icon: <ShopOutlined /> },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Deductions &amp; Substantiation
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Business Expenses Assets and Records
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Sole traders may generally claim expenses incurred in earning
            assessable business income when the relevant requirements are met
            and records are available. For mixed expenses, only the eligible
            business-use portion may generally be claimed.
          </p>
        </div>

        {/* 3 Core Content Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Card 1: Common Deductible Areas */}
          <div className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 text-xl mb-5">
                <DollarOutlined />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                Common Claimable Areas
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-5">
                Common areas include tools, software, phone and internet use,
                motor vehicle expenses, home-based business costs, insurance,
                professional fees, subcontractors and supplies. Eligibility
                depends on the expense, its use and the applicable rules.
              </p>

              {/* Expense Tags Grid */}
              <div className="flex flex-wrap gap-2 pt-2">
                {commonExpenseAreas.map((exp, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 text-slate-800 dark:text-zinc-200 shadow-2xs"
                  >
                    <span className="text-emerald-600 dark:text-emerald-400 text-xs">
                      {exp.icon}
                    </span>
                    <span>{exp.label}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400">
              <span>Apportionment applied to mixed personal/business use.</span>
            </div>
          </div>

          {/* Card 2: Depreciating Assets & Capital Expenses */}
          <div className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/60 border border-teal-100 dark:border-teal-800/40 flex items-center justify-center text-teal-600 dark:text-teal-400 text-xl mb-5">
                <ToolOutlined />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                Depreciating Assets &amp; Capital Expenses
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                Some purchases are depreciating assets or capital expenses.
                Whether an amount is deductible immediately or over time depends
                on the asset, cost, business use, purchase date and rules for
                that income year.
              </p>

              <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 space-y-2 text-xs text-slate-600 dark:text-zinc-300">
                <div className="font-bold text-slate-900 dark:text-white">
                  Depreciation Considerations:
                </div>
                <ul className="space-y-1 list-disc pl-4 font-normal">
                  <li>Instant asset write-off thresholds</li>
                  <li>Simplified depreciation pool for small business</li>
                  <li>
                    Effective life calculation for machinery &amp; vehicles
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400">
              <span>Cost base adjustments tracked across asset lifecycle.</span>
            </div>
          </div>

          {/* Card 3: 5-Year Record Keeping & Bookkeeping */}
          <div className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-800/40 flex items-center justify-center text-blue-600 dark:text-blue-400 text-xl mb-5">
                <HistoryOutlined />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                Record Keeping &amp; 5-Year Retention
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                Records may include invoices, receipts, bank transactions,
                software reports, asset documents, vehicle records, home-based
                business calculations and BAS information. Business records
                generally need to be kept for five years, although some must be
                retained longer.
              </p>

              <div className="p-4 rounded-xl bg-emerald-50/90 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800/50 text-xs text-emerald-900 dark:text-emerald-200">
                <p className="font-normal mb-2">
                  For ongoing record organization, see our Bookkeeping Services.
                </p>
                <Link href="/services/bookkeeping">
                  <Button
                    type="link"
                    className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline flex items-center gap-1 h-auto"
                    icon={<ArrowRightOutlined className="text-xs" />}
                    iconPlacement="end"
                  >
                    Explore Bookkeeping Services
                  </Button>
                </Link>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400">
              <span>Statutory record keeping compliance under ATO law.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
