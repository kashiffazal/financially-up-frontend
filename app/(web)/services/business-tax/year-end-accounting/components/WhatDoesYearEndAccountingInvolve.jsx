"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  BankOutlined,
  ContactsOutlined,
  FileProtectOutlined,
  ToolOutlined,
  InboxOutlined,
  TeamOutlined,
  UsergroupAddOutlined,
  CalculatorOutlined,
  AuditOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * WhatDoesYearEndAccountingInvolve Component
 * =========================================
 * Section: What Does Year End Accounting Involve?
 * Features 100% complete, verbatim content from Page 7 of client docx.
 * 9 Core annual accounts preparation scopes presented in an interactive card grid.
 */
export default function WhatDoesYearEndAccountingInvolve() {
  const preparationScopes = [
    {
      num: "01",
      icon: (
        <BankOutlined className="text-xl text-teal-600 dark:text-teal-400" />
      ),
      title: "Reconciling business bank, credit-card and finance accounts",
      desc: "Balancing all operating accounts, commercial overdrafts, business cards, and hire purchase facilities against bank feeds.",
    },
    {
      num: "02",
      icon: (
        <ContactsOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />
      ),
      title: "Reviewing trade debtors, creditors and clearing accounts",
      desc: "Analyzing aged accounts receivable, doubtful debt write-offs, accounts payable, and clearing account reconciliations.",
    },
    {
      num: "03",
      icon: (
        <FileProtectOutlined className="text-xl text-blue-600 dark:text-blue-400" />
      ),
      title:
        "Checking GST, PAYG and other tax-related control accounts where relevant",
      desc: "Reconciling GST collected vs paid, PAYG withholding, and aligning accounts with ATO Integrated Client Account balances.",
    },
    {
      num: "04",
      icon: (
        <ToolOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />
      ),
      title: "Reviewing fixed assets, disposals and depreciation information",
      desc: "Updating the asset register, calculating accounting depreciation, and recording asset sales, scrapings, or trade-ins.",
    },
    {
      num: "05",
      icon: (
        <InboxOutlined className="text-xl text-purple-600 dark:text-purple-400" />
      ),
      title: "Reviewing inventory or work in progress where applicable",
      desc: "Adjusting for physical year-end stock counts, damaged or obsolete inventory, and work-in-progress (WIP) balances.",
    },
    {
      num: "06",
      icon: (
        <TeamOutlined className="text-xl text-cyan-600 dark:text-cyan-400" />
      ),
      title:
        "Checking payroll, wages and superannuation-related balances where relevant",
      desc: "Reconciling Single Touch Payroll (STP) finals, wages paid, PAYG withholding, and accrued superannuation guarantee liabilities.",
    },
    {
      num: "07",
      icon: (
        <UsergroupAddOutlined className="text-xl text-amber-600 dark:text-amber-400" />
      ),
      title:
        "Reviewing director, shareholder, partner or beneficiary-related balances",
      desc: "Checking owner drawings, capital introduced, partner current accounts, and private company director/shareholder loan movements.",
    },
    {
      num: "08",
      icon: (
        <CalculatorOutlined className="text-xl text-rose-600 dark:text-rose-400" />
      ),
      title:
        "Recording agreed accruals, prepayments and other year-end adjustments",
      desc: "Posting year-end adjusting journals for prepaid expenses, accrued revenue, unbilled supplier costs, and provisions.",
    },
    {
      num: "09",
      icon: (
        <AuditOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />
      ),
      title:
        "Preparing or finalizing the trial balance for financial statements and tax work",
      desc: "Locking the reconciled general ledger and exporting a clean, finalized trial balance ready for tax returns and reporting.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="cyan"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Annual Accounts Preparation
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Does Year End Accounting Involve?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Year-end work is more than downloading a profit and loss report on
            30 June. Before annual accounts are relied on, the underlying ledger
            usually needs to be checked so that income, expenses, assets,
            liabilities and equity balances reflect the available records.
          </p>
        </div>

        {/* 9 Scopes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {preparationScopes.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400 dark:text-zinc-500">
                    {item.num}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Explanatory Box: Process Variations */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-teal-50/80 via-emerald-50/60 to-white dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border border-teal-200/70 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              Tailored to Your Entity, Industry &amp; Bookkeeping Quality
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              The exact process varies with the entity, industry and quality of
              the bookkeeping. A year-end accountant should first understand
              what the accounts will be used for and what issues need to be
              resolved before finalization.
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <Link href="/book-an-appointment">
              <Button
                type="primary"
                className="brand-btn-primary w-full md:w-auto text-xs sm:text-sm font-semibold rounded-xl"
                icon={<ArrowRightOutlined />}
                iconPlacement="end"
              >
                Discuss Year-End Scope
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
