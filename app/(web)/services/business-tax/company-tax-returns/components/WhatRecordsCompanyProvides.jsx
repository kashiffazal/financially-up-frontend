"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  FolderOpenOutlined,
  CreditCardOutlined,
  FileProtectOutlined,
  TeamOutlined,
  AuditOutlined,
  FileDoneOutlined,
  ApartmentOutlined,
  ToolOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * WhatRecordsCompanyProvides Component
 * =====================================
 * Section: What Records Should a Company Provide?
 * Features 100% complete, verbatim content from Page 2 of client docx.
 * Categorized document preparation guide with support for incomplete accounts.
 */
export default function WhatRecordsCompanyProvides() {
  const documentCategories = [
    {
      category: "Bookkeeping & Banking",
      icon: <CreditCardOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      items: [
        "Bookkeeping reports (Trial Balance, P&L, Balance Sheet)",
        "Bank and credit-card reconciliations for all company accounts",
        "Closing bank statements verifying year-end balances",
      ],
    },
    {
      category: "Sales, Purchases & Payroll",
      icon: <AuditOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      items: [
        "Sales and purchase records & invoices",
        "Payroll summaries and STP reconciliation reports",
        "Superannuation guarantee payment confirmations",
      ],
    },
    {
      category: "Tax, BAS & Assets",
      icon: <FileProtectOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      items: [
        "BAS information and ATO Integrated Client Account statements",
        "Asset purchases and disposals (invoices, contracts, dates)",
        "Finance and commercial loan documents & schedules",
      ],
    },
    {
      category: "Ownership & Prior Returns",
      icon: <ApartmentOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      items: [
        "Prior-year financial statements and company tax returns",
        "Details of director or shareholder transactions & drawings",
        "Franking account and dividend distribution statements",
      ],
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Documentation Checklist
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Records Should a Company Provide?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Useful records commonly include bookkeeping reports, bank and credit-card reconciliations, sales and purchase records, payroll summaries, BAS information, asset purchases and disposals, finance and loan documents, prior-year financial statements and tax returns, and details of director or shareholder transactions.
          </p>
        </div>

        {/* 4 Categorized Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {documentCategories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between hover:border-emerald-400/60 transition-all duration-300"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center mb-5">
                  {cat.icon}
                </div>

                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-4">
                  {cat.category}
                </h3>

                <ul className="space-y-3">
                  {cat.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                      <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-xs mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800 text-[11px] font-semibold text-slate-400 dark:text-zinc-500 uppercase tracking-wider">
                Category 0{idx + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Incomplete Records Reassurance Box */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-9 border-2 border-emerald-400/40 dark:border-emerald-700/40 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 text-brand-primary dark:text-emerald-400 flex items-center justify-center shrink-0">
              <ToolOutlined className="text-2xl" />
            </div>
            <div className="space-y-1">
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                What if Your Company Accounts Are Incomplete?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                Where the accounts are incomplete, Financially Up can first identify what needs to be reconciled or corrected before the Pty Ltd tax return is prepared.
              </p>
            </div>
          </div>

          <Link href="/book-an-appointment">
            <Button
              type="primary"
              className="bg-brand-primary hover:bg-brand-primary-hover text-white font-semibold text-xs rounded-xl shadow-xs shrink-0 h-10 px-5"
            >
              Get Records Assistance
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
