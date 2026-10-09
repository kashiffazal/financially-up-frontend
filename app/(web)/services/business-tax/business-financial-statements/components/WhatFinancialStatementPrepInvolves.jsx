"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  FileSearchOutlined,
  ReconciliationOutlined,
  ContactsOutlined,
  FileProtectOutlined,
  ToolOutlined,
  InboxOutlined,
  TeamOutlined,
  CalculatorOutlined,
  FileDoneOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * WhatFinancialStatementPrepInvolves Component
 * ============================================
 * Section: What Does Financial Statement Preparation Involve?
 * Features 100% complete, verbatim content from Page 6 of client docx.
 * 9 Core preparation scopes presented in an interactive card grid.
 */
export default function WhatFinancialStatementPrepInvolves() {
  const preparationScopes = [
    {
      num: "01",
      icon: (
        <FileSearchOutlined className="text-xl text-teal-600 dark:text-teal-400" />
      ),
      title: "Reviewing the general ledger and trial balance",
      desc: "Examining chart of accounts structure, unusual ledger entries, opening balances, and trial balance integrity.",
    },
    {
      num: "02",
      icon: (
        <ReconciliationOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />
      ),
      title: "Reconciling bank, loan and key balance-sheet accounts",
      desc: "Verifying trading bank accounts, commercial credit lines, term facilities, and principal loan balances.",
    },
    {
      num: "03",
      icon: (
        <ContactsOutlined className="text-xl text-blue-600 dark:text-blue-400" />
      ),
      title: "Reviewing debtors and creditors",
      desc: "Checking trade accounts receivable, aging schedules, bad debt provisions, and accounts payable balances.",
    },
    {
      num: "04",
      icon: (
        <FileProtectOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />
      ),
      title: "Checking GST and tax-related control accounts where relevant",
      desc: "Reconciling GST collected, GST paid, PAYG withholding, and Integrated Client Account (ICA) balances.",
    },
    {
      num: "05",
      icon: (
        <ToolOutlined className="text-xl text-purple-600 dark:text-purple-400" />
      ),
      title: "Reviewing fixed assets and depreciation information",
      desc: "Maintaining the fixed asset register, additions, disposals, and calculating commercial depreciation.",
    },
    {
      num: "06",
      icon: (
        <InboxOutlined className="text-xl text-cyan-600 dark:text-cyan-400" />
      ),
      title:
        "Considering inventory or work-in-progress information where applicable",
      desc: "Incorporating end-of-period stocktake valuations, raw materials, finished goods, and work-in-progress (WIP).",
    },
    {
      num: "07",
      icon: (
        <TeamOutlined className="text-xl text-amber-600 dark:text-amber-400" />
      ),
      title:
        "Reviewing director, shareholder, partner or related-party balances where relevant",
      desc: "Balancing owner loan accounts, drawings, capital introduced, and related-entity intercompany transfers.",
    },
    {
      num: "08",
      icon: (
        <CalculatorOutlined className="text-xl text-rose-600 dark:text-rose-400" />
      ),
      title: "Making agreed year-end accounting adjustments",
      desc: "Posting journals for accruals, prepayments, unearned revenue, provisions, and closing journal entries.",
    },
    {
      num: "09",
      icon: (
        <FileDoneOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />
      ),
      title: "Preparing profit and loss, balance sheet and supporting reports",
      desc: "Compiling formatted, structured financial statements with notes and supporting analytical schedules.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="cyan"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Preparation Methodology
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Does Financial Statement Preparation Involve?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Preparing reliable statements usually requires more than exporting a
            report from accounting software. The underlying accounts may need to
            be reviewed and reconciled before the statements are finalized.
          </p>
        </div>

        {/* 9 Scopes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {preparationScopes.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-800/90 border border-slate-200/90 dark:border-zinc-700/80 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-100 dark:border-zinc-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
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

        {/* Verbatim Framework Note */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-teal-50/80 via-emerald-50/60 to-white dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border border-teal-200/70 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              The Purpose of the Statements Matters
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Reports prepared for internal management may not be the same as
              statements required under a specific legal, finance or assurance
              framework. Financially Up ensures that the structure and
              presentation match your agreed engagement goals.
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
                Discuss Statement Scope
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
