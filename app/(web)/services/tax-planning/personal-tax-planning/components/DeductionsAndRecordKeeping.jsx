"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileTextOutlined,
  CheckCircleFilled,
  WarningOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";

/**
 * DeductionsAndRecordKeeping Component
 * ====================================
 * Section 8: Deductions and Record Keeping.
 * Verbatim text from Page 3 of '3rd Pillar Tax Planning & Advisory Final Content Pages 1-12.docx'.
 *
 * Explains substantiation rules, private use apportionment, and details the essential
 * documents required for reliable personal tax planning.
 */
export default function DeductionsAndRecordKeeping() {
  const essentialDocuments = [
    {
      title: "Income Statements (PAYG)",
      detail: "Employer Single Touch Payroll (STP) year-to-date final figures and bonus notifications.",
    },
    {
      title: "Investment & Dividend Reports",
      detail: "Share registry dividend slips, DRP records, bank interest, and AMMA managed fund statements.",
    },
    {
      title: "Rental Property Records",
      detail: "Annual property manager summary, mortgage interest statements, council rates, and depreciation schedules.",
    },
    {
      title: "Expense Receipts & Invoices",
      detail: "Substantiated tax invoices, vehicle logbooks, and diary records for work-from-home or occupational claims.",
    },
    {
      title: "Loan & Borrowing Statements",
      detail: "Investment loan account statements showing redraws, interest charges, and deductible finance fees.",
    },
    {
      title: "Prior-Year Returns & Assessments",
      detail: "Previous ATO Notices of Assessment, carried-forward capital loss tallies, and prior tax returns.",
    },
    {
      title: "Transaction & Legal Documents",
      detail: "Contracts of sale, buy/sell settlement statements, crypto asset transaction history, and vesting schedules.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Substantiation &amp; Records
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Deductions and Record Keeping
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A deduction must be supported by the relevant tax rules and appropriate records. Paying an expense near year end does not by itself make the expense deductible. Work-related expenses, investment costs and rental property expenses can each have specific substantiation or apportionment requirements.
          </p>
          <p className="mt-3 text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
            Good record keeping makes planning more reliable. Depending on the issue, useful documents may include income statements, investment reports, property records, receipts, loan statements, prior returns, notices of assessment and transaction documents.
          </p>
        </div>

        {/* Document Checklist Cards */}
        <div className="max-w-4xl mx-auto space-y-3.5 mb-10">
          {essentialDocuments.map((doc, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-4 sm:p-5 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:border-emerald-400/60 transition-colors flex items-start gap-4"
            >
              <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center shrink-0">
                <CheckCircleFilled className="text-brand-primary dark:text-emerald-400 text-base" />
              </div>
              <div className="flex-1 space-y-0.5">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                  {doc.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 font-normal leading-relaxed">
                  {doc.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Substantiation Principle Alert */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/50 p-5 sm:p-6 flex items-start gap-3.5">
          <WarningOutlined className="text-amber-600 dark:text-amber-400 text-lg mt-0.5 shrink-0" />
          <p className="text-xs sm:text-sm text-amber-900 dark:text-amber-200 leading-relaxed font-normal">
            <strong>Golden Rule of Personal Deductions:</strong> To claim any deduction, you must have spent the money yourself without reimbursement, the expense must directly relate to earning your income, and you must have a compliant record (receipt, logbook, or statement) to prove it.
          </p>
        </div>
      </div>
    </section>
  );
}
