"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  FileTextOutlined,
  CheckCircleOutlined,
  BankOutlined,
  AuditOutlined,
  TeamOutlined,
  FileProtectOutlined,
  ArrowRightOutlined,
  ToolOutlined,
  DollarOutlined,
} from "@ant-design/icons";

/**
 * RecordsToPrepareForForecast Component
 * =====================================
 * Section 7: What records should you prepare?
 * Source: 12th Pillar Business Advisory.docx (Page 2: Cash Flow Management)
 *
 * Implements 100% complete, verbatim SEO text detailing records needed to assemble
 * a robust forecast, data integrity prerequisites, and links to financial statement services.
 */
export default function RecordsToPrepareForForecast() {
  const documentChecklist = [
    {
      icon: <BankOutlined className="text-emerald-600 dark:text-emerald-400" />,
      title: "Current Bank Balances",
      description: "Reconciled business trading, tax reserve, and savings account balances.",
    },
    {
      icon: <FileTextOutlined className="text-teal-600 dark:text-teal-400" />,
      title: "Recent Financial Statements",
      description: "Profit and Loss, Balance Sheet, and Trial Balance from current software.",
    },
    {
      icon: <AuditOutlined className="text-blue-600 dark:text-blue-400" />,
      title: "Aged Receivables & Payables",
      description: "Detailed debtor and creditor reports showing 30, 60, and 90+ day balances.",
    },
    {
      icon: <TeamOutlined className="text-indigo-600 dark:text-indigo-400" />,
      title: "Payroll Information",
      description: "Wages, superannuation accruals, headcount, and PAYG withholding liabilities.",
    },
    {
      icon: <FileProtectOutlined className="text-purple-600 dark:text-purple-400" />,
      title: "Tax Liabilities",
      description: "Integrated Client Account balances, pending BAS amounts, and tax payment plans.",
    },
    {
      icon: <DollarOutlined className="text-amber-600 dark:text-amber-400" />,
      title: "Loan & Finance Schedules",
      description: "Commercial mortgages, equipment leases, interest rates, and balloon payments.",
    },
    {
      icon: <ToolOutlined className="text-rose-600 dark:text-rose-400" />,
      title: "Recurring Payment Commitments",
      description: "Premises leases, annual insurance premiums, software subscriptions, and utility contracts.",
    },
    {
      icon: <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400" />,
      title: "Expected Sales & Major Expenses",
      description: "Confirmed customer pipeline contracts, quotes, capital expenditure, and project costs.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50/70 dark:bg-zinc-950/70 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Preparation &amp; Data Hygiene
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Records Should You Prepare?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Useful records generally include current bank balances, recent
            financial statements, aged receivables and payables, payroll
            information, tax liabilities, loan schedules, recurring payment
            commitments and details of expected sales or major expenses. If the
            accounting file is not up to date, some bookkeeping or
            reconciliation work may be needed before the forecast can be relied
            on.
          </p>
        </div>

        {/* 8 Checklist Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {documentChecklist.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-5 border border-slate-200/80 dark:border-zinc-800 shadow-2xs hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-zinc-800 flex items-center justify-center mb-3">
                {item.icon}
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed m-0 font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Verbatim Supporting Cross-Link Banner */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                <CheckCircleOutlined />
                <span>Need Historical Reporting Clean-Up First?</span>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed m-0 font-normal">
                Our{" "}
                <Link
                  href="/services/business-tax/business-financial-statements"
                  className="font-semibold text-brand-primary dark:text-emerald-400 hover:underline"
                >
                  business financial statements service
                </Link>{" "}
                can support businesses that need clearer historical financial
                information before forecasting. The broader{" "}
                <Link
                  href="/services/business-advisory"
                  className="font-semibold text-brand-primary dark:text-emerald-400 hover:underline"
                >
                  business advisory service
                </Link>{" "}
                can also help where cash flow is only one part of a wider
                performance or growth issue.
              </p>
            </div>

            <div className="shrink-0">
              <Link href="/book-an-appointment">
                <Button
                  type="primary"
                  icon={<ArrowRightOutlined />}
                  iconPlacement="end"
                  className="rounded-xl font-bold px-6 h-11"
                >
                  Book Record Review
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
