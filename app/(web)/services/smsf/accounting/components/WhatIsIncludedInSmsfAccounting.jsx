"use client";

import React from "react";
import { Tag } from "antd";
import {
  BankOutlined,
  DollarOutlined,
  SwapOutlined,
  UsergroupAddOutlined,
  FileDoneOutlined,
  LineChartOutlined,
  AuditOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * WhatIsIncludedInSmsfAccounting Component
 * ========================================
 * Implements verbatim SEO content from Page 2 of 9th Pillar SMSF.docx:
 * - What is included in SMSF accounting?
 * - SMSF accounts preparation (7 key reconciliation items & asset valuation rules).
 */
export default function WhatIsIncludedInSmsfAccounting() {
  const preparationItems = [
    {
      icon: <BankOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Bank and cash reconciliation",
      desc: "Reconciling all fund bank accounts and cash management accounts against external primary bank statements.",
    },
    {
      icon: <DollarOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Investment income",
      desc: "Comprehensive recording of interest, franked/unfranked dividends, trust distributions, and rental income.",
    },
    {
      icon: <SwapOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Purchases, sales and other investment movements",
      desc: "Tracking trade contract notes, corporate actions, disposals, acquisitions, and cost-base adjustments.",
    },
    {
      icon: <UsergroupAddOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Contributions, rollovers and benefit payments",
      desc: "Accurately categorizing concessional, non-concessional contributions, incoming rollovers, and member lump sums.",
    },
    {
      icon: <FileDoneOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Fund expenses and tax-related costs",
      desc: "Recording accounting fees, auditor costs, investment expenses, insurance premiums, and supervisory levies.",
    },
    {
      icon: <LineChartOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Year-end asset values and supporting valuation information",
      desc: "Establishing 30 June market values with objective data for all listed, unlisted, and property holdings.",
    },
    {
      icon: <AuditOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Member balances and relevant pension or accumulation activity",
      desc: "Maintaining individual accumulation and retirement-phase pension accounts with precise profit and tax allocations.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="green" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Scope & Compliance Overview
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What is included in SMSF accounting?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            SMSF accounting generally involves recording and reconciling the fund&apos;s transactions, checking year-end balances, preparing annual financial statements and producing the tax information required for the SMSF annual return. The exact work varies with the fund&apos;s assets, number of members, contribution activity and whether benefits are being paid.
          </p>
          <div className="mt-4 p-4 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-800/40 text-xs sm:text-sm text-emerald-900 dark:text-emerald-200 leading-relaxed font-medium inline-block text-left">
            <span className="font-bold">ATO Statutory Requirement:</span> The ATO requires SMSFs to prepare annual financial statements and keep accounting records that correctly explain transactions and the fund&apos;s financial position. Those records also need to support the annual independent audit.
          </div>
        </div>

        {/* SMSF Accounts Preparation Heading & Content */}
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            SMSF accounts preparation
          </h3>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed">
            Annual accounts preparation starts with complete source records. The accounting process normally reconciles the fund&apos;s bank accounts and investments to external statements, records income and expenses, identifies contributions and rollovers, and checks transactions affecting individual member balances.
          </p>
        </div>

        {/* 7 Preparation Scope Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {preparationItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-md hover:border-emerald-400/60 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircleOutlined className="text-emerald-500 text-sm shrink-0" />
                  <span>{item.title}</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Valuation Callout Box */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800/40 flex items-center justify-center shrink-0">
              <LineChartOutlined className="text-2xl text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Market Valuation Compliance for Fund Assets
              </h4>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Where the SMSF owns property or less frequently traded assets, the trustees need appropriate evidence to support market value for reporting and audit purposes. The valuation method depends on the asset and circumstances; accounting records should not simply carry forward an old figure without considering the annual reporting requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
