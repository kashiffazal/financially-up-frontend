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
  CheckCircleOutlined,
} from "@ant-design/icons";
import AdvisoryReassuranceBanner from "@/components/website/AdvisoryReassuranceBanner";

/**
 * WhatToHaveReady Component
 * =========================
 * Section 6: What to Have Ready (Record Keeping & 5-Year Rule).
 *
 * Details the necessary documentation required for business tax return preparation
 * with elevated, interactive documentation cards, and consumes AdvisoryReassuranceBanner
 * for the statutory ATO 5-year record retention standard using official brand colors.
 */
export default function WhatToHaveReady() {
  /**
   * 6 Common Categories of Business Records with Micro-Tags
   */
  const recordCategories = [
    {
      id: "ledgers",
      tag: "Ledgers",
      icon: <FileTextOutlined className="text-xl text-brand-primary dark:text-emerald-400" />,
      title: "Bookkeeping & General Ledger",
      items: [
        "Software trial balance & general ledger summaries",
        "Profit & Loss statement and Balance Sheet",
        "Detailed transaction reports & inventory valuations",
      ],
    },
    {
      id: "banking",
      tag: "Banking",
      icon: <BankOutlined className="text-xl text-brand-primary dark:text-emerald-400" />,
      title: "Bank & Credit Card Records",
      items: [
        "End-of-year bank statements showing 30 June balance",
        "Credit card and commercial loan facility statements",
        "Reconciliations of merchant facilities and payment gateways",
      ],
    },
    {
      id: "sales",
      tag: "Sales & Invoices",
      icon: <DollarOutlined className="text-xl text-brand-primary dark:text-emerald-400" />,
      title: "Sales, Invoices & Expenses",
      items: [
        "Sales ledgers, debtor listings & bad debt write-offs",
        "Supplier bills, creditor listings & expense receipts",
        "Proof of payment for large or unusual commercial expenses",
      ],
    },
    {
      id: "payroll",
      tag: "Payroll & Super",
      icon: <TeamOutlined className="text-xl text-brand-primary dark:text-emerald-400" />,
      title: "Payroll & Employee Records",
      items: [
        "Single Touch Payroll (STP) year-end finalisation report",
        "Superannuation guarantee payment receipts & clearing house records",
        "Workers' compensation and payroll tax summaries (if applicable)",
      ],
    },
    {
      id: "bas-assets",
      tag: "BAS & Assets",
      icon: <ScheduleOutlined className="text-xl text-brand-primary dark:text-emerald-400" />,
      title: "BAS & Asset Finance Documents",
      items: [
        "Copies of all lodged Business Activity Statements (BAS)",
        "Invoices, contracts & loan agreements for new business assets",
        "Asset disposal agreements or write-off documentation",
      ],
    },
    {
      id: "tax-history",
      tag: "Tax History",
      icon: <HistoryOutlined className="text-xl text-brand-primary dark:text-emerald-400" />,
      title: "Prior-Year & Entity Records",
      items: [
        "Prior-year financial accounts & company/trust tax returns",
        "Depreciation schedules and carried-forward tax loss schedules",
        "Director, partner, or shareholder loan transactions",
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50/60 dark:bg-zinc-950 border-t border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
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
            The records needed depend on your business, but having organized
            documentation ensures efficient return preparation and robust ATO
            substantiation.
          </p>
        </div>

        {/* 6 Elevated Record Category Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {recordCategories.map((cat) => (
            <div
              key={cat.id}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:border-brand-primary/40 dark:hover:border-emerald-600/40 hover:shadow-md hover:-translate-y-1 transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Icon Container + Category Tag */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-primary-soft dark:bg-emerald-950/70 flex items-center justify-center group-hover:scale-105 transition-transform shadow-2xs">
                    {cat.icon}
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 font-mono border border-slate-200/60 dark:border-zinc-700/60">
                    {cat.tag}
                  </span>
                </div>

                {/* Box Title */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-4 tracking-tight group-hover:text-brand-primary dark:group-hover:text-emerald-400 transition-colors">
                  {cat.title}
                </h3>

                {/* Checklist */}
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 m-0 p-0 list-none">
                  {cat.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2.5">
                      <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-xs mt-1 shrink-0" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* The Mandatory 5-Year ATO Record-Keeping Rule via Reusable AdvisoryReassuranceBanner */}
        <AdvisoryReassuranceBanner
          tag="Statutory Record-Keeping Standard"
          tagIcon="clock"
          title="The ATO 5-Year Record Retention Rule"
          primaryButton={{
            text: "Book an Appointment",
            href: "/book-an-appointment",
          }}
          showPhone={true}
        >
          <div className="space-y-2">
            <p className="m-0">
              Good records support the accounts and amounts reported to the
              Australian Taxation Office. Under federal tax law, business
              records generally must be retained for at least{" "}
              <strong className="text-white font-semibold">five years</strong>{" "}
              from the date you lodge your tax return.
            </p>
            <p className="m-0">
              <strong className="text-emerald-300 font-semibold">Important Exception:</strong>{" "}
              Longer retention periods apply to records connected with
              depreciable business assets, capital gains tax (CGT) assets,
              carried-forward losses, or other continuing tax positions. Where
              your records are incomplete, Financially Up can identify what
              needs to be retrieved or reconciled before the work is finalized.
            </p>
          </div>
        </AdvisoryReassuranceBanner>
      </div>
    </section>
  );
}
