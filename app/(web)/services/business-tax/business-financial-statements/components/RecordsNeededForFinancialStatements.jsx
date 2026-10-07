"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  FolderOpenOutlined,
  BankOutlined,
  AuditOutlined,
  ClockCircleOutlined,
  TeamOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * RecordsNeededForFinancialStatements Component
 * ============================================
 * Section: Records and Information We May Need
 * Features 100% complete, verbatim content from Page 6 of client docx.
 * 10 Record items and statutory record retention requirements.
 */
export default function RecordsNeededForFinancialStatements() {
  const recordCategories = [
    {
      category: "Software, Trial Balance & Banking",
      icon: <BankOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      items: [
        "Accounting software access or a trial balance",
        "Business bank and credit-card statements",
        "Loan and finance statements",
      ],
    },
    {
      category: "Trading, Debtors & Creditors",
      icon: <AuditOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      items: [
        "Sales and expense records",
        "Debtor and creditor listings",
      ],
    },
    {
      category: "Assets, Inventory & Stock",
      icon: <FolderOpenOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      items: [
        "Asset purchase and disposal information",
        "Inventory records where relevant",
      ],
    },
    {
      category: "Payroll, Tax Control & Prior Accounts",
      icon: <TeamOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      items: [
        "Payroll information where applicable",
        "GST/BAS records",
        "Prior-year financial statements and tax returns",
      ],
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Documentation Checklist
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Records and Information We May Need
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Australian businesses are required to keep records supporting their tax, superannuation and registration obligations. Useful information can include:
          </p>
        </div>

        {/* 4 Record Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {recordCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-11 h-11 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center shrink-0">
                  {cat.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  {cat.category}
                </h3>
              </div>
              <ul className="space-y-2.5">
                {cat.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                    <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 text-xs mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Verbatim Record Keeping & Efficiency Callout */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-blue-50 dark:from-zinc-900 dark:via-zinc-850 dark:to-zinc-900 border border-emerald-200/80 dark:border-emerald-800/50 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <ClockCircleOutlined className="text-emerald-600 dark:text-emerald-400" />
              Efficiency &amp; Preventing Unresolved Balances
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
              Australian businesses are required to keep records supporting their tax, superannuation and registration obligations. Accurate records also make the financial statement preparation process more efficient and reduce the risk of unresolved balances carrying forward.
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <Link href="/book-an-appointment">
              <Button
                type="primary"
                className="brand-btn-primary w-full md:w-auto text-xs sm:text-sm font-semibold rounded-xl"
                icon={<ArrowRightOutlined />}
                iconPosition="end"
              >
                Submit Records for Review
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
