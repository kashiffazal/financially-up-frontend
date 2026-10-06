"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileTextOutlined,
  BankOutlined,
  DollarOutlined,
  TeamOutlined,
  ScheduleOutlined,
  HistoryOutlined,
  ShoppingOutlined,
  ExclamationCircleOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import AdvisoryReassuranceBanner from "@/components/website/AdvisoryReassuranceBanner";

/**
 * WhatToHaveReady Component
 * =========================
 * Section 6: What to Have Ready (Record Keeping & 5-Year Rule).
 *
 * Details the necessary documentation required for business tax return preparation
 * with elevated documentation cards, and consumes AdvisoryReassuranceBanner
 * for the statutory ATO 5-year record retention standard.
 *
 * All text is 100% VERBATIM from the professional SEO specialist document:
 * '2nd pillar Business Tax Final Pages.docx'.
 */
export default function WhatToHaveReady() {
  /**
   * The 8 Core Business Record Categories extracted from the client document's checklist sentence
   */
  const recordCategories = [
    {
      id: "bookkeeping",
      tag: "Ledgers",
      icon: <FileTextOutlined className="text-xl text-brand-primary dark:text-emerald-400" />,
      title: "Bookkeeping Reports",
      description: "General ledger summaries, trial balance reports and management accounts",
    },
    {
      id: "banking",
      tag: "Banking",
      icon: <BankOutlined className="text-xl text-brand-primary dark:text-emerald-400" />,
      title: "Bank & Credit-Card Records",
      description: "Full-year bank statements, credit card statements and merchant facility reconciliations",
    },
    {
      id: "sales-expenses",
      tag: "Invoices",
      icon: <DollarOutlined className="text-xl text-brand-primary dark:text-emerald-400" />,
      title: "Sales & Expense Records",
      description: "Invoices issued, receipts for allowable expenses and commercial supplier bills",
    },
    {
      id: "payroll",
      tag: "Payroll",
      icon: <TeamOutlined className="text-xl text-brand-primary dark:text-emerald-400" />,
      title: "Payroll Information",
      description: "Single Touch Payroll (STP) summaries and superannuation guarantee payment records",
    },
    {
      id: "asset-finance",
      tag: "Finance",
      icon: <ShoppingOutlined className="text-xl text-brand-primary dark:text-emerald-400" />,
      title: "Asset Purchase & Finance Documents",
      description: "Tax invoices, loan agreements, chattel mortgages and asset purchase documentation",
    },
    {
      id: "bas-records",
      tag: "BAS / GST",
      icon: <ScheduleOutlined className="text-xl text-brand-primary dark:text-emerald-400" />,
      title: "BAS Records",
      description: "Copies of quarterly Business Activity Statements and monthly IAS lodgments",
    },
    {
      id: "prior-year",
      tag: "Tax History",
      icon: <HistoryOutlined className="text-xl text-brand-primary dark:text-emerald-400" />,
      title: "Prior-Year Financials & Returns",
      description: "Prior-year financial statements, tax return lodgments and depreciation registers",
    },
    {
      id: "unusual-transactions",
      tag: "Special Events",
      icon: <ExclamationCircleOutlined className="text-xl text-brand-primary dark:text-emerald-400" />,
      title: "Details of Unusual Transactions",
      description: "Asset disposals, insurance recoveries, director drawings or one-off transactions",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <Tag color="green" className="brand-section-tag">
            Documentation Checklist
          </Tag>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.2]">
            What to Have Ready
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            The records needed depend on your business, but useful information
            commonly includes bookkeeping reports, bank and credit-card records,
            sales and expense records, payroll information, asset purchase and
            finance documents, BAS records, prior-year financial statements and
            tax returns, and details of any unusual transactions during the
            year.
          </p>
        </div>

        {/* 8 Record Category Boxes (2 or 4 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {recordCategories.map((cat) => (
            <div
              key={cat.id}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:border-brand-primary/40 dark:hover:border-emerald-600/40 hover:shadow-md hover:-translate-y-1 transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-brand-primary-soft dark:bg-emerald-950/70 flex items-center justify-center group-hover:scale-105 transition-transform shadow-2xs">
                    {cat.icon}
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 font-mono border border-slate-200/60 dark:border-zinc-700/60">
                    {cat.tag}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-2 tracking-tight group-hover:text-brand-primary dark:group-hover:text-emerald-400 transition-colors">
                  {cat.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed font-normal m-0">
                  {cat.description}
                </p>
              </div>

              <div className="pt-3 mt-4 border-t border-slate-100 dark:border-zinc-800 flex items-center gap-1.5 text-xs text-brand-primary dark:text-emerald-400 font-medium">
                <CheckCircleOutlined className="text-xs" />
                <span>Ready for review</span>
              </div>
            </div>
          ))}
        </div>

        {/* The Mandatory 5-Year ATO Record-Keeping Rule via Reusable AdvisoryReassuranceBanner (Verbatim) */}
        <AdvisoryReassuranceBanner
          tag="Statutory Record-Keeping Standard"
          tagIcon="clock"
          title="Good Records Support Lodgments (ATO 5-Year Rule)"
          primaryButton={{
            text: "Book an Appointment",
            href: "/book-an-appointment",
          }}
          showPhone={true}
        >
          <p className="m-0 text-sm sm:text-base leading-relaxed text-slate-200 font-normal">
            Good records support the accounts and amounts reported to the ATO.
            Business records generally need to be kept for five years, although
            longer periods can apply to records connected with assets, capital
            gains, losses or other continuing tax positions. Where records are
            incomplete, we can identify what needs to be obtained or reconciled
            before the work is finalized.
          </p>
        </AdvisoryReassuranceBanner>
      </div>
    </section>
  );
}
