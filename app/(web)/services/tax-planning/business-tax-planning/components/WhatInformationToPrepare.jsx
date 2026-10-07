"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileTextOutlined,
  CheckCircleFilled,
  FolderOpenOutlined,
} from "@ant-design/icons";

/**
 * WhatInformationToPrepare Component
 * ==================================
 * Section 8: What Information Should You Prepare?
 * Verbatim text from Page 2 of '3rd Pillar Tax Planning & Advisory Final Content Pages 1-12.docx'.
 *
 * Provides a clear 7-point checklist for business owners prior to attending their
 * tax planning session with Financially Up.
 */
export default function WhatInformationToPrepare() {
  const preparationItems = [
    {
      num: "01",
      title: "Up-to-date profit and loss and balance sheet information where available.",
      hint: "Interim management reports covering current financial year-to-date figures.",
    },
    {
      num: "02",
      title: "Current bookkeeping, bank reconciliations and major account balances.",
      hint: "Reconciled bank statements, merchant gateway summaries, and credit card balances.",
    },
    {
      num: "03",
      title: "Details of asset purchases, disposals and planned capital expenditure.",
      hint: "Invoices, hire purchase or chattel mortgage agreements, and proposed equipment quotes.",
    },
    {
      num: "04",
      title: "BAS, GST, PAYG instalment and payroll information where relevant.",
      hint: "Quarterly activity statement lodgements and Single Touch Payroll (STP) year-to-date summaries.",
    },
    {
      num: "05",
      title: "Details of shareholder, director, beneficiary or related-party balances where relevant.",
      hint: "Drawings, loan accounts, historical Division 7A agreements, and family trust allocations.",
    },
    {
      num: "06",
      title: "Information about proposed sales, restructures, ownership changes or new investments.",
      hint: "Draft term sheets, investor proposals, purchase contracts, or partnership transitions.",
    },
    {
      num: "07",
      title: "Prior-year tax returns and notices where they help explain the current position.",
      hint: "Previous ATO notices of assessment, carried-forward tax losses, and franking account balances.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Client Preparation Checklist
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Information Should You Prepare?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            To make your tax planning consultation as productive and actionable as possible, assemble the following business records and financial details prior to your session:
          </p>
        </div>

        {/* 7 Checklist Cards */}
        <div className="max-w-4xl mx-auto space-y-4 mb-10">
          {preparationItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-5 sm:p-6 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:border-emerald-400/60 transition-all duration-300 flex items-start gap-4 sm:gap-5 group"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                <CheckCircleFilled className="text-brand-primary dark:text-emerald-400 text-lg" />
              </div>

              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest">
                    Record {item.num}
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 font-normal leading-relaxed">
                  {item.hint}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tip Notice */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-800/50 p-5 sm:p-6 flex items-start gap-3.5">
          <FolderOpenOutlined className="text-brand-primary dark:text-emerald-400 text-lg mt-0.5 shrink-0" />
          <p className="text-xs sm:text-sm text-emerald-950 dark:text-emerald-200 leading-relaxed font-normal">
            <strong>Don’t worry if some records are incomplete:</strong> Financially Up will review the records you currently have, identify any information gaps, and advise you on what is required before finalising your tax planning strategy.
          </p>
        </div>
      </div>
    </section>
  );
}
