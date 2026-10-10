"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  FileTextOutlined,
  CalendarOutlined,
  DollarOutlined,
  TeamOutlined,
  AuditOutlined,
  BankOutlined,
  FileProtectOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  ToolOutlined,
} from "@ant-design/icons";

/**
 * RecordsNeededForBudgeting Component
 * ===================================
 * Section 7: What records and information are needed?
 * Source: 12th Pillar Business Advisory.docx (Page 3: Budgeting & Forecasting)
 *
 * Implements 100% complete, verbatim SEO text covering historical financial records,
 * explicit forward operational adjustments, and accounting data reliability.
 */
export default function RecordsNeededForBudgeting() {
  const recordItems = [
    {
      icon: <FileTextOutlined className="text-emerald-600 dark:text-emerald-400" />,
      title: "Current & Prior-Year P&L Statements",
      desc: "Revealing multi-year revenue trends, gross margin stability, and overhead patterns.",
    },
    {
      icon: <AuditOutlined className="text-teal-600 dark:text-teal-400" />,
      title: "Balance Sheets & Working Capital",
      desc: "Checking current asset levels, trade debtors, supplier payables, and net equity.",
    },
    {
      icon: <DollarOutlined className="text-blue-600 dark:text-blue-400" />,
      title: "Detailed Sales & Invoicing Data",
      desc: "Monthly breakdown by product category, customer contract, and service division.",
    },
    {
      icon: <TeamOutlined className="text-indigo-600 dark:text-indigo-400" />,
      title: "Payroll & Headcount Information",
      desc: "Staff schedules, wage rates, award classifications, superannuation, and planned hires.",
    },
    {
      icon: <FileProtectOutlined className="text-purple-600 dark:text-purple-400" />,
      title: "Major Contracts or Commitments",
      desc: "Commercial lease agreements, major customer master service agreements, and tenders.",
    },
    {
      icon: <CalendarOutlined className="text-amber-600 dark:text-amber-400" />,
      title: "Known Cost & Price Changes",
      desc: "Scheduled supplier price rises, insurance renewals, software upgrades, and wage increases.",
    },
    {
      icon: <BankOutlined className="text-rose-600 dark:text-rose-400" />,
      title: "Current Cash & Finance Commitments",
      desc: "Bank overdraft balances, equipment finance facilities, and loan amortization schedules.",
    },
    {
      icon: <ToolOutlined className="text-emerald-700 dark:text-emerald-300" />,
      title: "Owner's Operational Assumptions",
      desc: "Forward expectations regarding capacity, marketing campaigns, target clients, and strategy.",
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
            Preparation &amp; Records Checklist
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Records and Information Are Needed?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Useful information generally includes current and prior-year profit
            and loss statements, balance sheets, sales data, payroll
            information, major contracts or commitments, known cost changes,
            current cash or finance commitments and the owner’s operational
            assumptions for the period ahead.
          </p>
        </div>

        {/* 8 Record Checklist Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {recordItems.map((item, idx) => (
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
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Verbatim Paragraph 2 Card: Historical Results Context */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs mb-8">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-3">
            <CheckCircleOutlined />
            <span>Forward Vision Beyond Last Year’s Numbers</span>
          </div>
          <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed m-0 font-normal">
            Historical results are useful because they reveal seasonality,
            margins and cost patterns. However, a forecast should not simply
            repeat last year. Known changes in pricing, staffing, customers,
            capacity, costs or strategy need to be reflected explicitly.
          </p>
        </div>

        {/* Verbatim Paragraph 3 Cross-Link Banner: Data Reliability */}
        <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-slate-50 dark:from-emerald-950/30 dark:via-zinc-950 dark:to-zinc-900 rounded-2xl p-7 sm:p-9 border border-emerald-200/80 dark:border-emerald-800/40 shadow-xs">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                <CheckCircleOutlined />
                <span>Reliable Financial Foundation Required</span>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed m-0 font-normal">
                Where the underlying financial records are not reliable, it may
                be necessary to improve the accounting information first. Our{" "}
                <Link
                  href="/services/business-tax/business-financial-statements"
                  className="font-semibold text-brand-primary dark:text-emerald-400 hover:underline"
                >
                  business financial statements service
                </Link>{" "}
                can support businesses that need a clearer historical reporting
                base before planning forward.
              </p>
            </div>

            <div className="shrink-0">
              <Link href="/services/business-tax/business-financial-statements">
                <Button
                  type="primary"
                  icon={<ArrowRightOutlined />}
                  iconPlacement="end"
                  className="rounded-xl font-bold px-6 h-11"
                >
                  Financial Statements Service
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
