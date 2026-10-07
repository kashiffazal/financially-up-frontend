"use client";

import React from "react";
import {
  FileTextOutlined,
  ApartmentOutlined,
  BookOutlined,
  DollarCircleOutlined,
  BankOutlined,
  AuditOutlined,
  CompassOutlined,
  UsergroupAddOutlined,
  SmileOutlined,
} from "@ant-design/icons";

/**
 * WhatInformationNeededRestructuring Component
 * ============================================
 * Section 6: Comprehensive document checklist for restructuring reviews,
 * commercial rationale, and preliminary consultation scoping.
 * Verbatim text from Page 11 of the Tax Planning document.
 */
export default function WhatInformationNeededRestructuring() {
  const documents = [
    {
      icon: <ApartmentOutlined className="text-xl text-brand-primary dark:text-emerald-400" />,
      title: "Entity Details & Registrations",
      desc: "Entity details, ABNs, TFNs, and current GST registrations.",
    },
    {
      icon: <FileTextOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Financial Statements & Tax Returns",
      desc: "Current profit & loss reports, balance sheets, and recent annual tax returns.",
    },
    {
      icon: <AuditOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Asset Registers & Valuations",
      desc: "Depreciation schedules, intellectual property logs, and physical asset registers.",
    },
    {
      icon: <UsergroupAddOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Ownership & Share Registers",
      desc: "Ownership records, shareholder ledgers, unit holdings, and partnership agreements.",
    },
    {
      icon: <BookOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Trust Deeds & Constitutions",
      desc: "Trust deeds, deeds of variation, and company constitutions.",
    },
    {
      icon: <DollarCircleOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Loan Balances & Related Parties",
      desc: "Director and shareholder loan accounts, beneficiary entitlements, and inter-entity balances.",
    },
    {
      icon: <BankOutlined className="text-xl text-cyan-600 dark:text-cyan-400" />,
      title: "Bank Finance & Security",
      desc: "Commercial loan agreements, equipment leases, and bank security mortgages.",
    },
    {
      icon: <CompassOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Proposed Steps & Commercial Reasons",
      desc: "Proposed transaction steps and the commercial reasons for the restructure.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-zinc-900 border-b border-slate-100 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-primary/10 text-brand-primary dark:bg-emerald-500/10 dark:text-emerald-400 mb-4 border border-brand-primary/20 dark:border-emerald-500/20">
            Preparation Checklist
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            What Information May Be Needed?
          </h2>
        </div>

        {/* Verbatim Lead Paragraph */}
        <div className="max-w-4xl mx-auto mb-12 bg-slate-50 dark:bg-zinc-800/60 p-6 sm:p-7 rounded-2xl border border-slate-200/80 dark:border-zinc-700/80 text-slate-700 dark:text-zinc-300 text-base sm:text-lg leading-relaxed shadow-sm">
          Useful information can include entity details, current financial statements and tax returns, asset registers, ownership records, trust deeds or company documents, loan balances, finance arrangements, GST registrations, proposed transaction steps and the commercial reasons for the restructure.
        </div>

        {/* 8-Item Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {documents.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 dark:bg-zinc-800/40 rounded-2xl p-6 border border-slate-200/70 dark:border-zinc-700/60 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 flex items-center justify-center mb-4 border border-slate-200/80 dark:border-zinc-700 shadow-xs">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Preliminary Consultation Callout */}
        <div className="max-w-4xl mx-auto bg-brand-primary/5 dark:bg-emerald-950/20 border border-brand-primary/20 dark:border-emerald-800/40 rounded-2xl p-6 sm:p-7 flex items-start gap-4">
          <SmileOutlined className="text-2xl text-brand-primary dark:text-emerald-400 mt-1 shrink-0" />
          <div className="text-slate-700 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
            <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">
              Early Identification Before Irreversible Actions
            </h3>
            <p>
              The first review does not require every implementation document to be complete. The purpose is to identify the issues before irreversible steps are taken.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
