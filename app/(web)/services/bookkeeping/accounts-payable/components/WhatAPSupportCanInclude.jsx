"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  ImportOutlined,
  AuditOutlined,
  FolderOpenOutlined,
  TeamOutlined,
  CalendarOutlined,
  CopyOutlined,
  CheckCircleOutlined,
  FileDoneOutlined,
  QuestionCircleOutlined,
  SafetyCertificateOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * WhatAPSupportCanInclude Component
 * =================================
 * Section 3: What Accounts Payable Support Can Include
 * Features 100% complete, verbatim content from Page 6 of client docx.
 */
export default function WhatAPSupportCanInclude() {
  const serviceDeliverables = [
    {
      icon: <ImportOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Entering or importing supplier bills into the accounting system.",
      desc: "Ingesting supplier invoices via cloud OCR tools, digital inbox feeds, or manual entry directly into the software.",
    },
    {
      icon: <AuditOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Applying bookkeeping account coding and, where agreed, GST coding. GST treatment requiring interpretation of the law is handled within the BAS or tax service scope.",
      desc: "Correctly categorizing expenditure items with verified tax classifications under agreed bookkeeping parameters.",
    },
    {
      icon: <FolderOpenOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Attaching or matching invoices and supporting documents.",
      desc: "Linking original PDF bills and receipts directly to transactions for complete audit substantiation.",
    },
    {
      icon: <TeamOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Maintaining supplier names and account details, subject to agreed controls and client verification of payment-detail changes.",
      desc: "Updating contact cards and vendor bank details under strict fraud-prevention verification rules.",
    },
    {
      icon: <CalendarOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Tracking bill due dates and outstanding payable balances.",
      desc: "Managing payment terms to prevent late fees, maintain trade credit terms, and forecast upcoming cash requirements.",
    },
    {
      icon: <CopyOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Identifying duplicate invoices, credits or unusual supplier entries for review.",
      desc: "Screening incoming bills against previously entered items to prevent erroneous double payments.",
    },
    {
      icon: <CheckCircleOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Reconciling supplier statements or payable balances where information is available.",
      desc: "Comparing vendor monthly account statements against software ledger balances to catch missing invoices or credits.",
    },
    {
      icon: <FileDoneOutlined className="text-xl text-cyan-600 dark:text-cyan-400" />,
      title: "Preparing payment lists or workflow information for authorized client review, if included in scope.",
      desc: "Drafting batch ABA files or payment summary sheets for your authorized final approval and bank release.",
    },
    {
      icon: <QuestionCircleOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Following up bookkeeping queries that prevent an invoice from being processed correctly.",
      desc: "Tracking missing purchase orders, unclear pricing, or unapproved expenses directly with relevant internal staff.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Scope &amp; Controls
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Accounts Payable Support Can Include
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            The service can be structured around the business&apos;s existing systems and internal controls. Depending on scope, accounts payable management services may include:
          </p>
        </div>

        {/* 9 Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {serviceDeliverables.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:border-emerald-400/60 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest">
                    Scope 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Funds Authorization Caveat */}
        <div className="p-6 sm:p-7 rounded-2xl bg-slate-50 dark:bg-zinc-950 border border-slate-200/80 dark:border-zinc-800 flex items-start gap-3 sm:gap-4">
          <SafetyCertificateOutlined className="text-brand-primary dark:text-emerald-400 text-lg mt-0.5 shrink-0" />
          <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            <strong>Client Authority &amp; Fund Controls:</strong> Financially Up does not assume unrestricted authority over client funds. Payment-file preparation, payment workflows or banking-related steps must be expressly agreed and remain subject to the client&apos;s authorization and controls. The client should independently verify supplier payment-detail changes before releasing funds.
          </p>
        </div>
      </div>
    </section>
  );
}
