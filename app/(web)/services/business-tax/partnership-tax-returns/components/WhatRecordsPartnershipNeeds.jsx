"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  FolderOpenOutlined,
  BankOutlined,
  AuditOutlined,
  TeamOutlined,
  ClockCircleOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * WhatRecordsPartnershipNeeds Component
 * =====================================
 * Section: What Records Do We Usually Need?
 * Features 100% complete, verbatim content from Page 4 of client docx.
 * 10 Record categories and statutory record retention requirements.
 */
export default function WhatRecordsPartnershipNeeds() {
  const recordCategories = [
    {
      category: "Bookkeeping & Bank Statements",
      icon: (
        <BankOutlined className="text-xl text-teal-600 dark:text-teal-400" />
      ),
      items: [
        "Accounting software or bookkeeping reports",
        "Business bank and loan statements",
      ],
    },
    {
      category: "Income & Operating Expenses",
      icon: (
        <AuditOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />
      ),
      items: [
        "Sales, fees and other income records",
        "Invoices, receipts and expense records",
      ],
    },
    {
      category: "Assets, Payroll & Indirect Taxes",
      icon: (
        <FolderOpenOutlined className="text-xl text-blue-600 dark:text-blue-400" />
      ),
      items: [
        "Asset purchases and disposal information",
        "Payroll and contractor information where relevant",
        "GST/BAS records where applicable",
      ],
    },
    {
      category: "Partners, Prior Returns & Distributions",
      icon: (
        <TeamOutlined className="text-xl text-purple-600 dark:text-purple-400" />
      ),
      items: [
        "Details of partner contributions, drawings and loans",
        "Prior-year financial statements and tax returns",
        "Information about distributions from trusts or other partnerships, where relevant",
      ],
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
            Documentation Checklist
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Records Do We Usually Need?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            The exact records depend on the partnership, but useful information
            can include:
          </p>
        </div>

        {/* 4 Record Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {recordCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-800/90 border border-slate-200/90 dark:border-zinc-700/80 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-11 h-11 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-100 dark:border-zinc-700 flex items-center justify-center shrink-0">
                  {cat.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  {cat.category}
                </h3>
              </div>
              <ul className="space-y-2.5">
                {cat.items.map((item, itemIdx) => (
                  <li
                    key={itemIdx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal"
                  >
                    <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 text-xs mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Record Retention Statutory Callout */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-blue-50 dark:from-zinc-900 dark:via-zinc-850 dark:to-zinc-900 border border-emerald-200/80 dark:border-emerald-800/50 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <ClockCircleOutlined className="text-emerald-600 dark:text-emerald-400" />
              Statutory 5-Year Record Retention Rule
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
              Businesses generally need to keep tax records for five years,
              although some records—such as those relating to assets, capital
              gains or carried-forward losses—may need to be retained for
              longer. Complete records make it easier to reconcile the
              partnership accounts and prepare the return correctly.
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
                Send Records for Review
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
