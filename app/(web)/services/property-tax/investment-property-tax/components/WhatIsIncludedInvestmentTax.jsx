"use client";

import React from "react";
import { Tag } from "antd";
import {
  DollarCircleOutlined,
  AuditOutlined,
  BankOutlined,
  ToolOutlined,
  BarChartOutlined,
  PercentageOutlined,
  FileProtectOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * WhatIsIncludedInvestmentTax Component
 * =====================================
 * Section: What is included in investment property tax?
 * Features 100% complete, verbatim content from Page 2 of 10th Pillar Property Tax.docx.
 */
export default function WhatIsIncludedInvestmentTax() {
  const reviewItems = [
    {
      icon: <DollarCircleOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "gross rent and other rental-related income",
      detail:
        "Declaration of gross rent from agent statements, direct tenant deposits, insurance payouts, retained tenant bonds, and booking platform receipts.",
      tag: "Income Schedule",
    },
    {
      icon: <AuditOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "property management fees, rates, insurance and eligible running costs",
      detail:
        "Reconciliation of council rates, water charges, strata levies, letting fees, landlord insurance premiums, advertising, and pest control.",
      tag: "Operating Costs",
    },
    {
      icon: <BankOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "interest and the actual use of borrowed funds",
      detail:
        "Rigorous verification of loan statements, tracing redraws, refinancing arrangements, and separating private borrowings from income-producing debt.",
      tag: "Borrowing Costs",
    },
    {
      icon: <ToolOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "repairs and maintenance compared with improvements or initial repairs",
      detail:
        "Detailed classification ensuring ordinary wear and tear is claimed immediately while substantial improvements and initial repairs are capitalized.",
      tag: "Maintenance vs Capital",
    },
    {
      icon: <BarChartOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "capital works and depreciating assets",
      detail:
        "Application of Division 43 construction allowances (2.5% / 4%) and Division 40 plant and equipment depreciation based on qualified surveyor schedules.",
      tag: "Depreciation Schedules",
    },
    {
      icon: <PercentageOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "ownership percentages and periods of private use",
      detail:
        "Proportional allocation aligned with certificate of title interests, with adjustments for personal holiday use, vacancy, and family rentals.",
      tag: "Ownership & Use",
    },
    {
      icon: <FileProtectOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "records relevant to the future CGT cost base",
      detail:
        "Tracking acquisition settlement costs, stamp duty, capital expenditure, and prior capital works deductions to establish the 5-element CGT cost base.",
      tag: "CGT Record Tracking",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Core Service Scope
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Is Included in Investment Property Tax?
          </h2>
          {/* Verbatim text from official document */}
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            For a residential rental property, rental income must generally be declared and expenses can only be claimed where the tax rules allow them. The ATO distinguishes between ordinary rental expenses, capital expenditure, depreciating assets and capital works. The correct category can affect both the current tax return and the eventual CGT calculation when the property is sold.
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-700 dark:text-zinc-200 font-semibold">
            Investment property tax work commonly involves reviewing:
          </p>
        </div>

        {/* 7 Scope Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reviewItems.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-between bg-white dark:bg-zinc-900 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-lg hover:border-emerald-400/60 transition-all duration-300 group ${
                idx === 6 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <Tag color="cyan" className="text-[11px] font-semibold uppercase">
                    {item.tag}
                  </Tag>
                </div>

                <div className="flex items-start gap-2.5 mb-3">
                  <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-sm mt-1 shrink-0" />
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug capitalize-first">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed pl-6 font-normal">
                  {item.detail}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800 flex items-center justify-between text-xs text-slate-400 dark:text-zinc-500 font-medium">
                <span>Scope Item 0{idx + 1}</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                  ATO Compliant
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
