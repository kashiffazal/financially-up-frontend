"use client";

import React from "react";
import {
  SolutionOutlined,
  CheckCircleOutlined,
  BankOutlined,
  LineChartOutlined,
  FileTextOutlined,
  HomeOutlined,
  UserOutlined,
  CalendarOutlined,
  HourglassOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";

/**
 * WhatRecordsTrusteesKeep Component
 * =================================
 * Section 6: What records should SMSF trustees keep?
 *
 * Implements 100% exact copy from "What records should SMSF trustees keep?" in 9th Pillar SMSF.docx.
 *
 * Features:
 * - Verbatim introductory text.
 * - 7 exact record categories listed word-for-word in interactive cards.
 * - Statutory retention period breakdown:
 *   • At least 5 years: Core accounting records & annual financial statements.
 *   • At least 10 years: Trustee meeting minutes, records of trustee changes & governance.
 *   • While trustee remains or 10 years (whichever is longer): Completed trustee declarations.
 *
 * Background: Lite Brand Gradient.
 */
export default function WhatRecordsTrusteesKeep() {
  // 7 exact record items verbatim from 9th Pillar SMSF.docx
  const recordCategories = [
    {
      icon: <BankOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Bank & Cash Accounts",
      text: "SMSF bank statements and cash-account records",
      badge: "Financial Records",
    },
    {
      icon: <LineChartOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Investment Statements",
      text: "broker, platform, managed-fund and term-deposit statements",
      badge: "Portfolios",
    },
    {
      icon: <FileTextOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Transaction Documents",
      text: "purchase, sale and corporate-action documents for investments",
      badge: "Corporate Actions",
    },
    {
      icon: <HomeOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Property & Rental Invoices",
      text: "rental property income, expenses, leases, valuations and supporting invoices where relevant",
      badge: "Real Estate",
    },
    {
      icon: <UserOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Member Contributions & Rollovers",
      text: "contribution, rollover and benefit-payment information for each member",
      badge: "Member Records",
    },
    {
      icon: <SafetyCertificateOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Trustee Minutes & Decisions",
      text: "trustee minutes, pension documents and other fund decisions",
      badge: "Governance",
    },
    {
      icon: <FileTextOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Professional & Fund Invoices",
      text: "invoices for accounting, audit, administration and investment-related expenses",
      badge: "Expenses",
    },
  ];

  // Statutory Retention Periods verbatim from document
  const retentionPeriods = [
    {
      period: "At least 5 Years",
      title: "Core Accounting & Financials",
      description:
        "The ATO states that core accounting records and annual financial statements generally need to be kept for at least five years.",
      theme: "teal",
    },
    {
      period: "At least 10 Years",
      title: "Trustee Minutes & Governance",
      description:
        "Trustee meeting minutes, records of trustee changes and other specified governance records generally need to be kept for at least 10 years.",
      theme: "emerald",
    },
    {
      period: "Role Duration or 10 Yrs",
      title: "Trustee Declarations",
      description:
        "A completed trustee declaration must be kept while the person remains a trustee or director, or for 10 years, whichever is longer.",
      theme: "blue",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Verbatim Title & Intro */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-800/60 mb-4">
            <SolutionOutlined className="text-teal-600 dark:text-teal-400 text-xs sm:text-sm" />
            <span className="text-xs font-semibold text-teal-800 dark:text-teal-300 tracking-wide uppercase">
              ATO Record-Keeping Standards
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What records should SMSF trustees keep?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
            Good records make annual accounting and audit work more efficient and reduce the risk of unexplained transactions. Depending on the fund, useful records can include:
          </p>
        </div>

        {/* 7 Record Items Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {recordCategories.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm hover:border-teal-500/50 hover:shadow-md transition-all flex flex-col justify-between ${
                idx === 6 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-zinc-800 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400">
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                  <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 mt-1 shrink-0" />
                  <span>{item.text}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statutory Retention Periods Section with Exact Copy */}
        <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm p-6 sm:p-8 lg:p-10">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider flex items-center justify-center gap-1.5 mb-2">
              <HourglassOutlined />
              <span>Statutory Retention Periods</span>
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              SMSF records have different retention periods
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {retentionPeriods.map((rule, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-slate-50/70 dark:bg-zinc-950/60 border border-slate-200/80 dark:border-zinc-800 flex flex-col justify-between"
              >
                <div>
                  <div className="inline-block text-xs font-bold font-mono px-2.5 py-1 rounded-md bg-teal-50 dark:bg-teal-950/50 text-teal-700 dark:text-teal-300 border border-teal-200/60 dark:border-teal-800/60 mb-3">
                    {rule.period}
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    {rule.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed m-0">
                    {rule.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
