"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  FileTextOutlined,
  DollarOutlined,
  StockOutlined,
  PieChartOutlined,
  ShoppingOutlined,
  HomeOutlined,
  CalculatorOutlined,
  MedicineBoxOutlined,
  MailOutlined,
  CheckCircleFilled,
  InfoCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * HighIncomeRequiredDocuments Component
 * =====================================
 * Section 4: What Documents May Be Required.
 * Features 100% complete, verbatim content from Page 3 of the client document.
 * Provides a clean, organized checklist of the 9 required document groups.
 */
export default function HighIncomeRequiredDocuments() {
  const documents = [
    {
      title: "ATO income statements and employment records",
      detail: "Single Touch Payroll (STP) summaries and end-of-year employer finalization reports.",
      icon: <FileTextOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
    },
    {
      title: "bonus, allowance and remuneration information",
      detail: "Letter agreements, incentive plan statements, variable bonus breakdowns, and allowance details.",
      icon: <DollarOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
    },
    {
      title: "employee share scheme statements",
      detail: "Annual ESS statements, vesting notifications, plan grant rules, and employee equity paperwork.",
      icon: <StockOutlined className="text-xl text-cyan-600 dark:text-cyan-400" />,
    },
    {
      title: "dividend, managed fund and investment reports",
      detail: "Dividend payment advices, franking credit records, and annual AMMA tax distribution statements.",
      icon: <PieChartOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
    },
    {
      title: "purchase and sale records for investments or other assets",
      detail: "Broker contract notes, acquisition dates, incidentals, brokerage fees, and disposal proceeds.",
      icon: <ShoppingOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
    },
    {
      title: "rental property statements, loan-interest records and expense documents",
      detail: "Annual real estate agent statements, bank loan interest certificates, body corporate, and depreciation reports.",
      icon: <HomeOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
    },
    {
      title: "work-related deduction receipts and calculations",
      detail: "Substantiated receipts, motor vehicle logbooks, home office diaries, and professional membership receipts.",
      icon: <CalculatorOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
    },
    {
      title: "private health insurance information",
      detail: "Private health insurance tax statement or insurer pre-fill for Medicare Levy Surcharge assessment.",
      icon: <MedicineBoxOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
    },
    {
      title: "Relevant ATO correspondence",
      detail: "Prior notices of assessment, PAYG instalment notices, or specific compliance letters from the ATO.",
      icon: <MailOutlined className="text-xl text-slate-600 dark:text-zinc-400" />,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Documentation Checklist
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Documents May Be Required
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            The records needed depend on your income and activities. They may include:
          </p>
        </div>

        {/* 9 Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {documents.map((doc, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 hover:border-emerald-400/60 shadow-xs hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 flex items-center justify-center transition-transform group-hover:scale-105">
                  {doc.icon}
                </div>
                <span className="text-[11px] font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest">
                  Doc 0{idx + 1}
                </span>
              </div>

              <div className="flex items-start gap-2.5 mb-2.5">
                <CheckCircleFilled className="text-emerald-500 dark:text-emerald-400 text-sm mt-1 shrink-0" />
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug">
                  {doc.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed pl-6 font-normal">
                {doc.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Verbatim Subtext / Compliance Notice */}
        <div className="rounded-2xl bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xs">
          <div className="flex items-start gap-4 max-w-3xl">
            <InfoCircleOutlined className="text-brand-primary dark:text-emerald-400 text-xl mt-1 shrink-0" />
            <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
              <strong>Document Guidance:</strong> We will confirm the documents relevant to your circumstances after discussing your situation. Deductions and tax treatments depend on the applicable rules and the evidence available.
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <Link href="/book-an-appointment">
              <Button
                type="primary"
                size="large"
                icon={<ArrowRightOutlined />}
                iconPosition="end"
                className="w-full md:w-auto font-bold rounded-xl bg-brand-primary hover:bg-brand-primary-dark border-none h-11"
              >
                Send Documents for Review
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
