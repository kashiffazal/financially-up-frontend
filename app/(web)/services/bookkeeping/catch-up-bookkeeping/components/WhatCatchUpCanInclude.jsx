"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  ImportOutlined,
  BankOutlined,
  FileTextOutlined,
  CheckCircleOutlined,
  FolderOpenOutlined,
  FileProtectOutlined,
  ExclamationCircleOutlined,
  CalendarOutlined,
  ArrowRightOutlined,
  CloudSyncOutlined,
} from "@ant-design/icons";

/**
 * WhatCatchUpCanInclude Component
 * ===============================
 * Section 3: What Our Catch Up Bookkeeping Service Can Include
 * Features 100% complete, verbatim content from Page 4 of client docx.
 */
export default function WhatCatchUpCanInclude() {
  const serviceDeliverables = [
    {
      icon: <ImportOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Importing or entering historical bank and credit-card transactions.",
      desc: "Ingesting raw CSV statements or re-establishing electronic bank feeds across months of unentered transactions.",
    },
    {
      icon: <BankOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Reconciling bank, credit-card and relevant clearing accounts.",
      desc: "Systematically verifying ending balances month by month against verified external banking statements.",
    },
    {
      icon: <FileTextOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Recording or reviewing sales, expenses, supplier bills and customer receipts.",
      desc: "Entering overdue supplier invoices, reconciling payments, and logging incoming customer receipts.",
    },
    {
      icon: <CheckCircleOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Reviewing account coding and correcting obvious bookkeeping classifications within scope.",
      desc: "Reallocating misposted expenses from generic suspense lines into correct chart-of-accounts categories.",
    },
    {
      icon: <FolderOpenOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Matching transactions to invoices, receipts and other supporting records where available.",
      desc: "Linking verified digital paperwork to ledger entries to build an audit-proof paper trail.",
    },
    {
      icon: <FileProtectOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Reviewing GST coding where relevant to the bookkeeping records.",
      desc: "Checking taxable supply codes and input tax credits across recorded business expenses.",
    },
    {
      icon: <ExclamationCircleOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Identifying unreconciled items, duplicates, missing periods and unusual balances for follow-up.",
      desc: "Isolating anomalous journal lines, duplicated imports, and statement gaps for transparent resolution.",
    },
    {
      icon: <CalendarOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Bringing the file to an agreed cut-off date so ongoing bookkeeping can continue from a current position.",
      desc: "Establishing a solid, reconciled closing baseline so future accounting runs smoothly.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Detailed Scope
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Our Catch Up Bookkeeping Service Can Include
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            The exact work is agreed after reviewing the state of the records. Depending on the business, the service may include:
          </p>
        </div>

        {/* 8 Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {serviceDeliverables.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-lg hover:border-emerald-400/60 transition-all duration-300 flex flex-col justify-between"
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

        {/* Verbatim Integration Callout */}
        <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-slate-900 dark:text-white flex items-center justify-center sm:justify-start gap-2">
              <CloudSyncOutlined className="text-brand-primary dark:text-emerald-400 text-lg" />
              <span>Seamless Transition to Ongoing Routine</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Where the business uses Xero, catch-up work can be coordinated with our Xero Bookkeeping service. If ongoing monthly processing is needed after the backlog is cleared, Monthly Bookkeeping can provide a regular process rather than allowing the records to fall behind again.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link href="/services/bookkeeping/xero-bookkeeping">
              <Button type="default" size="middle" className="font-medium text-xs sm:text-sm">
                Xero Bookkeeping
              </Button>
            </Link>
            <Link href="/services/bookkeeping/monthly-bookkeeping">
              <Button type="primary" size="middle" className="font-bold text-xs sm:text-sm">
                Monthly Bookkeeping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
