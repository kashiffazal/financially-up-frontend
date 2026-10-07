"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  FileTextOutlined,
  DollarOutlined,
  SyncOutlined,
  CalendarOutlined,
  MailOutlined,
  CopyOutlined,
  LineChartOutlined,
  BookOutlined,
  ArrowRightOutlined,
  InteractionOutlined,
} from "@ant-design/icons";

/**
 * WhatFinanciallyUpCanHelpWithAR Component
 * =======================================
 * Section 3: What Can Financially Up Help With?
 * Features 100% complete, verbatim content from Page 7 of client docx.
 */
export default function WhatFinanciallyUpCanHelpWithAR() {
  const serviceActions = [
    {
      icon: <FileTextOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Preparing or processing sales invoices from approved information",
      desc: "Creating professional sales invoices from confirmed sales logs, client timesheets, or purchase orders.",
    },
    {
      icon: <DollarOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Recording customer receipts and allocating payments against invoices",
      desc: "Applying incoming payments to specific open invoices, eliminating messy unallocated credit balances.",
    },
    {
      icon: <SyncOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Reconciling customer accounts and investigating unmatched transactions",
      desc: "Checking customer statements against bank deposits and resolving payment reference discrepancies.",
    },
    {
      icon: <CalendarOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Monitoring overdue invoices and maintaining aged receivables information",
      desc: "Generating accurate 30/60/90+ day debtor age listings to keep outstanding exposure visible.",
    },
    {
      icon: <MailOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Routine payment reminders or follow-up within an agreed process",
      desc: "Executing courteous, timely email reminders and statement distribution under agreed guidelines.",
    },
    {
      icon: <CopyOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Identifying credits, duplicate entries or allocation issues for review",
      desc: "Detecting customer double-payments, unapplied credit notes, or erroneous manual entries.",
    },
    {
      icon: <LineChartOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Providing receivables information for management review",
      desc: "Supplying executive debtor summaries, DSO trends, and expected cash inflow schedules.",
    },
    {
      icon: <BookOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Coordinating receivables records with the broader bookkeeping file",
      desc: "Ensuring customer ledgers harmonize seamlessly with general ledger bank feeds and GST returns.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Service Deliverables
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What can Financially Up help with?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Our accounts receivable management services can be structured around the tasks your business wants to outsource. We can work within an agreed workflow so that bookkeeping responsibilities, internal approvals and customer-facing communication remain clear.
          </p>
        </div>

        {/* 8 Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {serviceActions.map((item, idx) => (
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

        {/* Cross-Link to Accounts Payable */}
        <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-slate-900 dark:text-white flex items-center justify-center sm:justify-start gap-2">
              <InteractionOutlined className="text-brand-primary dark:text-emerald-400 text-lg" />
              <span>Full Two-Way Working Capital Management</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              If you also need ongoing processing of supplier bills and payment records, our accounts payable services can support the other side of your day-to-day bookkeeping workflow.
            </p>
          </div>

          <Link href="/services/bookkeeping/accounts-payable">
            <Button type="primary" size="middle" className="font-bold text-xs sm:text-sm shrink-0">
              Accounts Payable Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
