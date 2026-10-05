"use client";

import React from "react";
import { Button } from "antd";
import {
  AuditOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  SafetyCertificateOutlined,
  FileDoneOutlined,
  SyncOutlined,
  EyeOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import Link from "next/link";

/**
 * WhatBookkeepingIncludes Component
 * =================================
 * Section 1 of Bookkeeping Hub:
 * Explains core bookkeeping activities, transaction coding, bank reconciliations,
 * and preparation for BAS and year-end reporting.
 * Uses Lite Brand Gradient background and Ant Design Primary Button.
 */
export default function WhatBookkeepingIncludes() {
  const coreAspects = [
    {
      icon: <SyncOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Consistent Coding & Processing",
      description:
        "Daily, weekly or monthly recording of business sales and expenses, classified consistently to accurate chart-of-accounts and GST categories.",
      tag: "Transaction Accuracy",
    },
    {
      icon: <AuditOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Bank & Feed Reconciliations",
      description:
        "Verifying transactions against actual bank, credit card, and loan statements to eliminate discrepancies, duplicates, and unallocated amounts.",
      tag: "Audit-Proof Balances",
    },
    {
      icon: <FileDoneOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "BAS & Tax-Ready Accounts",
      description:
        "Organising clean records and receipts that support quarterly BAS preparation, PAYG reporting, and year-end financial statement preparation.",
      tag: "Reporting Ready",
    },
  ];

  const reviewCheckpoints = [
    "Day-to-day sales invoices, receipts, and expense coding",
    "Bank, credit card, and merchant account reconciliations",
    "Accounts payable (supplier bills) and accounts receivable tracking",
    "Review of duplicate transactions, suspense accounts, and unmatched lines",
    "GST coding verification on business purchases and capital acquisitions",
    "Electronic receipt capture and paperless document organisation",
    "Payroll recording and Superannuation Guarantee clearing support",
    "Seamless coordination with registered tax agents for BAS and tax returns",
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-800/60 mb-4">
            <AuditOutlined className="text-teal-600 dark:text-teal-400 text-xs sm:text-sm" />
            <span className="text-xs font-semibold text-teal-800 dark:text-teal-300 tracking-wide uppercase">
              Financial Foundations
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Do Bookkeeping Services Include?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
            Reliable bookkeeping gives a business a{" "}
            <span className="font-semibold text-slate-900 dark:text-white">
              clear, current record of what has happened financially
            </span>
            . Financially Up provides professional bookkeeping services for Australian business owners who want their transactions organised, bank accounts reconciled, and records maintained to support day-to-day decisions, BAS preparation, and year-end accounting.
          </p>
        </div>

        {/* 3 Core Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {coreAspects.map((aspect, index) => (
            <div
              key={index}
              className="group p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:border-teal-500/50 dark:hover:border-teal-500/50 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-zinc-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {aspect.icon}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400">
                    {aspect.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {aspect.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                  {aspect.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Deep Dive: More Than Entering Receipts Box */}
        <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm p-6 sm:p-8 lg:p-10 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 text-xs font-semibold mb-4">
                <SafetyCertificateOutlined />
                <span>Substantiated Accounting Records</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
                More Than Data Entry: Structured Control
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed mb-4">
                Good bookkeeping is more than entering receipts: it involves consistent coding, regular reconciliation, and periodic review so the underlying data is reliable for compliance, management decisions, and financial reporting.
              </p>
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed mb-6">
                Whether you need regular weekly or monthly bookkeeping, a clean-up of older accounts, or a full outsourced process, Financially Up agrees on a clear scope based on your transaction volume, accounting software, and business goals.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link href="/book-an-appointment">
                  <Button
                    type="primary"
                    size="large"
                    icon={<ArrowRightOutlined />}
                    iconPosition="end"
                    className="h-11 px-6 rounded-xl font-semibold shadow-md shadow-brand-primary/20 hover:scale-[1.02] active:scale-[0.99] transition-all"
                  >
                    Book an Appointment
                  </Button>
                </Link>
                <Link href="#bookkeeping-services-overview">
                  <Button
                    size="large"
                    icon={<EyeOutlined />}
                    className="h-11 px-5 rounded-xl font-semibold border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-200 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-all"
                  >
                    View All Services
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Checkpoints Grid */}
            <div className="lg:col-span-5 bg-slate-50 dark:bg-zinc-950/60 rounded-xl p-5 sm:p-6 border border-slate-200/80 dark:border-zinc-800/80">
              <h4 className="text-xs font-bold text-slate-800 dark:text-zinc-200 uppercase tracking-wider mb-4 flex items-center gap-2">
                <CheckCircleOutlined className="text-teal-600 dark:text-teal-400" />
                <span>Scope of Bookkeeping Support</span>
              </h4>
              <ul className="space-y-2.5">
                {reviewCheckpoints.map((checkpoint, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 shrink-0" />
                    <span>{checkpoint}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
