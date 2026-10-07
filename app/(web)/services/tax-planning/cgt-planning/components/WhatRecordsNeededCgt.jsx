"use client";

import React from "react";
import {
  FileTextOutlined,
  DollarCircleOutlined,
  ToolOutlined,
  UsergroupAddOutlined,
  FundOutlined,
  SafetyCertificateOutlined,
  HomeOutlined,
  HistoryOutlined,
  SmileOutlined,
} from "@ant-design/icons";

/**
 * WhatRecordsNeededCgt Component
 * ==============================
 * Section 6: Comprehensive CGT record-keeping checklist across purchase,
 * holding, capital improvements, and disposal documentation.
 * Verbatim text from Page 8 of the Tax Planning document.
 */
export default function WhatRecordsNeededCgt() {
  const documents = [
    {
      icon: <FileTextOutlined className="text-xl text-brand-primary dark:text-emerald-400" />,
      title: "Purchase & Sale Contracts",
      desc: "Original acquisition contracts, exchange dates, terms, and final sale agreements.",
    },
    {
      icon: <DollarCircleOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Settlement Statements",
      desc: "Final settlement sheets showing purchase and sale adjustments, stamp duty, and council rates.",
    },
    {
      icon: <FileTextOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Legal & Brokerage Costs",
      desc: "Conveyancing invoices, legal advice fees, and share trading brokerage receipts.",
    },
    {
      icon: <ToolOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Capital Improvement Records",
      desc: "Invoices, builder receipts, and council approval documents for renovations and structural works.",
    },
    {
      icon: <UsergroupAddOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Ownership Details & Shares",
      desc: "Title deeds, joint-tenancy vs tenants-in-common splits, partnership shares, and trust deeds.",
    },
    {
      icon: <SafetyCertificateOutlined className="text-xl text-cyan-600 dark:text-cyan-400" />,
      title: "Valuations & Appraisals",
      desc: "Registered valuer reports, market appraisals upon moving into or renting out a home.",
    },
    {
      icon: <HistoryOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Prior Losses & Tax Returns",
      desc: "Notices of assessment and tax schedules demonstrating carry-forward net capital losses.",
    },
    {
      icon: <HomeOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Rental History & Share Logs",
      desc: "Tenancy lease dates, property manager reports, share transaction logs, and dividend reinvestment records.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-zinc-900 border-b border-slate-100 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-primary/10 text-brand-primary dark:bg-emerald-500/10 dark:text-emerald-400 mb-4 border border-brand-primary/20 dark:border-emerald-500/20">
            Substantiation &amp; Evidence
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            What Records May Be Needed?
          </h2>
        </div>

        {/* Verbatim Lead Paragraph */}
        <div className="max-w-4xl mx-auto mb-12 bg-slate-50 dark:bg-zinc-800/60 p-6 sm:p-7 rounded-2xl border border-slate-200/80 dark:border-zinc-700/80 text-slate-700 dark:text-zinc-300 text-base sm:text-lg leading-relaxed shadow-sm">
          Useful documents can include purchase and sale contracts, settlement statements, legal and brokerage costs, improvement records, ownership details, valuations where relevant, prior tax returns showing capital losses, rental-property history, share transaction records and evidence of other costs that may form part of the cost base.
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

        {/* Verbatim Long-Term Records Callout */}
        <div className="max-w-4xl mx-auto bg-brand-primary/5 dark:bg-emerald-950/20 border border-brand-primary/20 dark:border-emerald-800/40 rounded-2xl p-6 sm:p-7 flex items-start gap-4">
          <SmileOutlined className="text-2xl text-brand-primary dark:text-emerald-400 mt-1 shrink-0" />
          <div className="text-slate-700 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
            <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">
              Historical Records Span Decades
            </h3>
            <p>
              Good records matter because the CGT calculation can depend on events that happened many years before the eventual disposal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
