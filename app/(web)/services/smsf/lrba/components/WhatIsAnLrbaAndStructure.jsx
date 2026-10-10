"use client";

import React from "react";
import { Tag } from "antd";
import {
  SafetyCertificateOutlined,
  BankOutlined,
  SwapOutlined,
  AuditOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * WhatIsAnLrbaAndStructure Component
 * =================================
 * Implements verbatim SEO content from Page 5 of 9th Pillar SMSF.docx:
 * - What is a limited recourse borrowing arrangement?
 * - Why LRBA accounting needs separate attention (7 core accounting checkpoints)
 */
export default function WhatIsAnLrbaAndStructure() {
  const lrbaAccountingTasks = [
    {
      title: "Reconcile loan statements and separate principal, interest and fees",
      desc: "Distinguishing deductible interest costs and loan administrative charges from liability principal repayments.",
    },
    {
      title: "Record acquisition and borrowing costs according to their treatment",
      desc: "Bifurcating immediately deductible outgoings, 5-year borrowing write-offs, and capitalized acquisition costs.",
    },
    {
      title: "Account for rental or investment income and related expenses",
      desc: "Ensuring all asset earnings and property expenses flow directly through the SMSF primary bank account.",
    },
    {
      title: "Maintain holding-trust or bare-trust records",
      desc: "Reconciling bare trust legal ownership with the SMSF's beneficial ownership on fund ledgers.",
    },
    {
      title: "Track related-party loan terms, payments and supporting evidence",
      desc: "Documenting interest calculations, repayment frequency, and arm's-length evidence for private lenders.",
    },
    {
      title: "Support year-end asset values and audit schedules",
      desc: "Preparing 30 June market valuation schedules and loan balance confirmations for the independent auditor.",
    },
    {
      title: "Identify inconsistencies between legal documents and actual transactions",
      desc: "Proactively catching title discrepancies or payment deviations before annual return lodgement.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="purple" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Borrowing Structure & Overview
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What is a limited recourse borrowing arrangement?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A limited recourse borrowing arrangement, or LRBA, is a structure under which an SMSF borrows to acquire a permitted asset. A separate holding trust generally holds legal title while the SMSF holds the beneficial interest and has the right to acquire legal ownership after making the required payments. If the borrowing defaults, the lender&apos;s recourse against the SMSF must be limited in the manner required by superannuation law.
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            The asset, use of borrowed money, ownership documents, loan terms and security must satisfy the legislation throughout the arrangement.
          </p>
        </div>

        {/* Sub-Section: Why LRBA accounting needs separate attention */}
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            Why LRBA accounting needs separate attention
          </h3>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed">
            An LRBA creates records across the SMSF, lender and holding arrangement. The accounts generally recognize the asset and borrowing rather than treating the holding trust as an unrelated investment, helping the auditor trace ownership and loan movements.
          </p>
        </div>

        {/* 7 Accounting Checkpoints Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {lrbaAccountingTasks.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-md hover:border-purple-400/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-lg bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-400 font-bold text-xs flex items-center justify-center mb-4">
                  {idx + 1}
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2 flex items-start gap-2">
                  <CheckCircleOutlined className="text-emerald-500 text-sm mt-1 shrink-0" />
                  <span>{item.title}</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Advisory Boundaries Notice */}
        <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 flex items-start sm:items-center gap-4 shadow-xs">
          <SafetyCertificateOutlined className="text-2xl text-purple-600 dark:text-purple-400 shrink-0 mt-0.5 sm:mt-0" />
          <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed m-0 font-normal">
            <span className="font-bold text-slate-900 dark:text-white">Strict Advisory Notice:</span> Financially Up Pty Ltd provides accounting, tax and compliance support for existing and proposed LRBAs. We do not provide loan approval, credit assistance, legal documents or financial product advice about whether borrowing suits your retirement strategy. Those matters may require a lender, lawyer or authorized financial adviser.
          </p>
        </div>
      </div>
    </section>
  );
}
