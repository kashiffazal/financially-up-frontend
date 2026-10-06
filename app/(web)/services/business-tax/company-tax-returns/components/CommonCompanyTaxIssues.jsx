"use client";

import React from "react";
import Link from "next/link";
import { Tag, Alert, Button } from "antd";
import {
  WarningOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  CalculatorOutlined,
  HistoryOutlined,
  UserSwitchOutlined,
  CreditCardOutlined,
  DeploymentUnitOutlined,
  AuditOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * CommonCompanyTaxIssues Component
 * =================================
 * Section: Common Company Tax Issues That Need Review
 * Features 100% complete, verbatim content from Page 2 of client docx.
 * 8 Critical compliance triggers requiring careful accountant review.
 * Includes explicit advisory boundary for Division 7A, restructuring & consolidation.
 */
export default function CommonCompanyTaxIssues() {
  const issuesList = [
    {
      icon: <StopOutlined className="text-lg text-rose-500" />,
      title: "Expenses recorded in the accounts that are not fully deductible for tax purposes",
      desc: "Items like entertainment, fines, private portions of vehicle expenses, or provisions requiring tax add-backs.",
    },
    {
      icon: <CalculatorOutlined className="text-lg text-amber-500" />,
      title: "Asset purchases that require depreciation or another capital treatment",
      desc: "Capital purchases that cannot be claimed immediately and must be depreciated under general or small business pool rules.",
    },
    {
      icon: <HistoryOutlined className="text-lg text-blue-500" />,
      title: "Business losses carried forward from earlier years",
      desc: "Checking loss recoupment rules, continuity of ownership, and business continuity before offsetting against current profit.",
    },
    {
      icon: <UserSwitchOutlined className="text-lg text-purple-500" />,
      title: "Director or shareholder loan balances and repayments",
      desc: "Reviewing debit balances, loan agreements, interest charges, and minimum yearly repayment schedules.",
    },
    {
      icon: <CreditCardOutlined className="text-lg text-orange-500" />,
      title: "Private expenses or mixed-use costs paid through the company",
      desc: "Separating director personal expenses from genuine commercial costs to prevent Division 7A or FBT implications.",
    },
    {
      icon: <DeploymentUnitOutlined className="text-lg text-emerald-500" />,
      title: "Franked dividends and company distributions",
      desc: "Tracking the franking account balance, benchmark franking percentage, dividend resolutions, and shareholder statements.",
    },
    {
      icon: <AuditOutlined className="text-lg text-teal-500" />,
      title: "GST or payroll balances that do not reconcile to the accounts",
      desc: "Reconciling total sales on Activity Statements, wages on STP reports, and clearing accounts with the final trial balance.",
    },
    {
      icon: <WarningOutlined className="text-lg text-indigo-500" />,
      title: "Changes in business activity, ownership or group structure",
      desc: "New share transfers, altered shareholdings, director changes, or shifts in trading model impacting tax treatments.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Risk & Adjustment Areas
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Common Company Tax Issues That Need Review
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Year-end accounts rarely translate straight into an ATO tax return without tax adjustments. We thoroughly examine the specific commercial and tax factors that impact your company’s compliance.
          </p>
        </div>

        {/* 8 Critical Review Triggers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {issuesList.map((issue, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-md hover:border-emerald-400/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-4">
                  {issue.icon}
                </div>

                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  {issue.title}
                </h3>

                <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
                  {issue.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-zinc-800/80 flex items-center justify-between text-[11px] text-slate-400 dark:text-zinc-500 font-semibold uppercase tracking-wider">
                <span>Check Item 0{idx + 1}</span>
                <span className="text-brand-primary dark:text-emerald-400">Review</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mandatory Advisory Boundary Card using Ant Design Alert guidelines */}
        <div className="bg-amber-50/70 dark:bg-amber-950/20 border-2 border-amber-300/70 dark:border-amber-800/50 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                <ExclamationCircleOutlined className="text-2xl" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  Important Advisory Scope Notice
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed">
                  Some matters, such as Division 7A, restructuring, tax consolidation or detailed tax planning, may require separate advice rather than being treated as part of routine company tax return preparation.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Link href="/services/business-tax/division-7a">
                <Button
                  type="default"
                  className="font-medium text-xs rounded-xl h-10 px-4 border-amber-300 dark:border-amber-700 dark:bg-zinc-900 text-amber-900 dark:text-amber-200"
                >
                  Division 7A Services
                </Button>
              </Link>
              <Link href="/book-an-appointment">
                <Button
                  type="primary"
                  className="bg-brand-primary hover:bg-brand-primary-hover text-white font-semibold text-xs rounded-xl shadow-xs h-10 px-5"
                >
                  Book Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
