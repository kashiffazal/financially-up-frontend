"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  FileSearchOutlined,
  ReconciliationOutlined,
  DollarOutlined,
  CalculatorOutlined,
  LineChartOutlined,
  TeamOutlined,
  HistoryOutlined,
  AuditOutlined,
  ExclamationCircleOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * WhatTrustTaxPreparationIncludes Component
 * =========================================
 * Section: What Trust Tax Return Preparation Can Include
 * Features 100% complete, verbatim content from Page 3 of client docx.
 * 9 Core preparation scopes presented in an interactive card grid.
 */
export default function WhatTrustTaxPreparationIncludes() {
  const scopeItems = [
    {
      num: "01",
      icon: <FileSearchOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Reviewing the trust’s profit and loss and balance sheet",
      detail: "Examining commercial net earnings, asset schedules, liabilities, and retained trust funds.",
    },
    {
      num: "02",
      icon: <ReconciliationOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Reconciling trust bank, loan and beneficiary accounts",
      detail: "Reconciling bank accounts, loan accounts, unpaid present entitlements (UPEs), and beneficiary drawings.",
    },
    {
      num: "03",
      icon: <DollarOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Reviewing business, investment or rental income",
      detail: "Categorizing trading profits, interest, dividends, rental income, and foreign receipts.",
    },
    {
      num: "04",
      icon: <CalculatorOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Considering deductible expenses and tax adjustments",
      detail: "Evaluating management expenses, interest deductions, depreciation, and tax adjustments.",
    },
    {
      num: "05",
      icon: <LineChartOutlined className="text-xl text-cyan-600 dark:text-cyan-400" />,
      title: "Reviewing capital gains and franked distributions where relevant",
      detail: "Calculating discount capital gains, net capital gains, franking credits, and streaming conditions.",
    },
    {
      num: "06",
      icon: <TeamOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Preparing beneficiary distribution information for the tax return",
      detail: "Formulating individual distribution statements showing primary production, non-primary production, and credits.",
    },
    {
      num: "07",
      icon: <HistoryOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Reviewing trust losses and prior-year tax information where relevant",
      detail: "Applying trust loss measures, family trust election tests, and carried-forward revenue/capital losses.",
    },
    {
      num: "08",
      icon: <AuditOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Preparing the trust tax return and required schedules",
      detail: "Drafting the statutory ATO Trust Tax Return form along with capital gains, rental, and loss schedules.",
    },
    {
      num: "09",
      icon: <ExclamationCircleOutlined className="text-xl text-rose-500" />,
      title: "Identifying issues that need separate tax or legal advice",
      detail: "Flagging Division 7A UPE risks, Section 100A reimbursement agreements, or trust deed variation requirements.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Scope of Service
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Trust Tax Return Preparation Can Include
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Trust tax return preparation connects the trust’s accounts, commercial earnings, and statutory distribution schedules before submission to the ATO.
          </p>
        </div>

        {/* 9 Scope Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {scopeItems.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-lg hover:border-emerald-400/60 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest">
                    Scope {item.num}
                  </span>
                </div>

                <div className="flex items-start gap-2 mb-3">
                  <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-sm mt-1 shrink-0" />
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed pl-5 font-normal">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Context Banner */}
        <div className="p-6 sm:p-8 bg-white dark:bg-zinc-900 rounded-2xl border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1 max-w-2xl">
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              Need Annual Accounts &amp; Tax Lodgement for Your Family Trust?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300">
              Our registered tax agents prepare complete financial accounts and ensure trustee distribution minutes reflect accurate tax outcomes.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/book-an-appointment">
              <Button
                type="primary"
                className="bg-brand-primary hover:bg-brand-primary-hover text-white font-semibold text-xs rounded-xl shadow-xs h-10 px-5"
              >
                Book an Appointment
              </Button>
            </Link>
            <Link href="/services/business-tax">
              <Button
                type="default"
                className="font-medium text-xs rounded-xl h-10 px-4 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-200"
              >
                All Business Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
