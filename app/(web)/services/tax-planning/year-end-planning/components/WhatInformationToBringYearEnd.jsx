"use client";

import React from "react";
import {
  FileTextOutlined,
  DollarCircleOutlined,
  FundOutlined,
  HomeOutlined,
  ShoppingOutlined,
  SafetyCertificateOutlined,
  MailOutlined,
  SmileOutlined,
} from "@ant-design/icons";

/**
 * WhatInformationToBringYearEnd Component
 * =======================================
 * Section 5: Document checklist for year-end appointments, covering
 * business records, personal income, property, super, and ATO notices.
 * Verbatim text from Page 7 of the Tax Planning document.
 */
export default function WhatInformationToBringYearEnd() {
  const documents = [
    {
      icon: <FileTextOutlined className="text-xl text-brand-primary dark:text-emerald-400" />,
      title: "Bookkeeping, Payroll & BAS",
      desc: "Current bookkeeping reports, payroll summaries, Single Touch Payroll records, and activity statements.",
    },
    {
      icon: <DollarCircleOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Business Profit & Forecasts",
      desc: "Expected year-end business profit, year-to-date trial balances, and anticipated supplier invoices.",
    },
    {
      icon: <FundOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Salary & Bonus Information",
      desc: "Income statements, executive bonus agreements, and employee share scheme statements.",
    },
    {
      icon: <HomeOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Investment & Property Reports",
      desc: "Dividend slips, managed fund annual tax statements, interest records, and rental property summaries.",
    },
    {
      icon: <ShoppingOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Asset Purchases & Disposals",
      desc: "Contracts for proposed capital asset acquisitions, equipment finance quotes, or sale agreements.",
    },
    {
      icon: <SafetyCertificateOutlined className="text-xl text-cyan-600 dark:text-cyan-400" />,
      title: "Capital Gains Records",
      desc: "Historical purchase confirmations, brokerage records, cost base calculations, and capital loss logs.",
    },
    {
      icon: <FileTextOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Superannuation Contributions",
      desc: "Fund contribution balances, concessional cap tracking, and notice of intent documentation.",
    },
    {
      icon: <MailOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "ATO Correspondence",
      desc: "Notices of assessment, PAYG instalment variation notices, or compliance correspondence.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-zinc-900 border-b border-slate-100 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-primary/10 text-brand-primary dark:bg-emerald-500/10 dark:text-emerald-400 mb-4 border border-brand-primary/20 dark:border-emerald-500/20">
            Appointment Preparation
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            What Information Should You Bring?
          </h2>
        </div>

        {/* Verbatim Lead Paragraph */}
        <div className="max-w-4xl mx-auto mb-12 bg-slate-50 dark:bg-zinc-800/60 p-6 sm:p-7 rounded-2xl border border-slate-200/80 dark:border-zinc-700/80 text-slate-700 dark:text-zinc-300 text-base sm:text-lg leading-relaxed shadow-sm">
          Useful information may include current bookkeeping reports, payroll and BAS information, expected business profit, salary or bonus details, investment statements, property income and expenses, proposed asset purchases or disposals, capital gains records, superannuation information and any ATO correspondence relevant to your position.
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

        {/* Verbatim Preliminary Review Callout */}
        <div className="max-w-4xl mx-auto bg-brand-primary/5 dark:bg-emerald-950/20 border border-brand-primary/20 dark:border-emerald-800/40 rounded-2xl p-6 sm:p-7 flex items-start gap-4">
          <SmileOutlined className="text-2xl text-brand-primary dark:text-emerald-400 mt-1 shrink-0" />
          <div className="text-slate-700 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
            <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">
              Do Not Wait for Complete Documentation
            </h3>
            <p>
              You do not need every document finalized before the first discussion. A preliminary review can help identify what is still required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
