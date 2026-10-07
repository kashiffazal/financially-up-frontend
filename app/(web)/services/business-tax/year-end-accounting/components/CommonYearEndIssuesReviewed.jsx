"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  BankOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  ToolOutlined,
  ContactsOutlined,
  FileProtectOutlined,
  CreditCardOutlined,
  TeamOutlined,
  ExclamationCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * CommonYearEndIssuesReviewed Component
 * =====================================
 * Section: Common Year-End Issues We Help Review
 * Features 100% complete, verbatim content from Page 7 of client docx.
 * Itemizes 8 critical review areas with a dedicated Division 7A alert.
 */
export default function CommonYearEndIssuesReviewed() {
  const commonIssues = [
    {
      icon: <BankOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Unreconciled Bank Accounts",
      desc: "Clearing unallocated deposits, orphan withdrawals, duplicated bank feeds, or out-of-balance statement totals.",
    },
    {
      icon: <UserOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Director or Shareholder Balances",
      desc: "Scrutinizing owner drawings, loan advances, and personal funds introduced to determine tax classifications.",
    },
    {
      icon: <ShoppingCartOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Personal Expenses in Business",
      desc: "Identifying and reallocating non-deductible private spending erroneously paid through company or partnership accounts.",
    },
    {
      icon: <ToolOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Asset Purchases as Expenses",
      desc: "Reclassifying capital plant, equipment, or vehicle purchases mistakenly expensed as routine operational repairs.",
    },
    {
      icon: <ContactsOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Old Debtor or Creditor Balances",
      desc: "Writing off uncollectible aged bad debts and reconciling legacy supplier invoices that remain unpaid.",
    },
    {
      icon: <FileProtectOutlined className="text-xl text-cyan-600 dark:text-cyan-400" />,
      title: "GST Coding Issues",
      desc: "Correcting tax codes, unclaiming private input tax credits, and reconciling GST control accounts against BAS filings.",
    },
    {
      icon: <CreditCardOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Missing Loan Statements",
      desc: "Matching commercial interest deductions and principal loan repayments against closing bank loan certificates.",
    },
    {
      icon: <TeamOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Inconsistent Payroll Figures",
      desc: "Reconciling wage expense ledgers with Single Touch Payroll (STP) annual summaries and superannuation payments.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="red" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Audit &amp; Diagnostic Review
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Common Year-End Issues We Help Review
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A year-end review may identify items that need clarification before the accounts can be finalized, including unreconciled bank accounts, director or shareholder balances, personal expenses recorded through the business, asset purchases posted as ordinary expenses, old debtor or creditor balances, GST coding issues, missing loan statements or inconsistent payroll figures.
          </p>
        </div>

        {/* 8 Issues Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {commonIssues.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-800/90 border border-slate-200/90 dark:border-zinc-700/80 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-100 dark:border-zinc-700 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                  {item.icon}
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

        {/* Division 7A Warning & Cross-Service Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-amber-50 via-rose-50/40 to-white dark:from-zinc-900 dark:via-zinc-850 dark:to-zinc-900 border border-amber-200/80 dark:border-amber-800/50 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <ExclamationCircleOutlined className="text-amber-600 dark:text-amber-400" />
              Tax Consequences &amp; Division 7A Considerations
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
              Some matters are accounting corrections; others may have tax consequences that require separate review. For example, amounts provided by a private company to shareholders or associates can raise Division 7A considerations. Where that is relevant, see our Division 7A service rather than treating the balance as a routine year-end journal.
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <Link href="/services/business-tax/division-7a">
              <Button
                type="primary"
                className="brand-btn-primary w-full md:w-auto text-xs sm:text-sm font-semibold rounded-xl"
                icon={<ArrowRightOutlined />}
                iconPosition="end"
              >
                Review Division 7A Rules
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
