"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  CheckCircleOutlined,
  ProfileOutlined,
  ArrowRightOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";

/**
 * WhatBankReconciliationIncludes Component
 * Covers 'What our bank reconciliation services can include'
 * and link to bookkeeping cleanup from Page 8 of 4th Pillar Bookkeeping.docx.
 */
export default function WhatBankReconciliationIncludes() {
  const scopeItems = [
    {
      title: "Reconciling business bank accounts and credit cards",
      detail: "Comparing ledger lines with actual monthly statements and electronic feeds across all active business accounts.",
    },
    {
      title: "Matching bank-feed transactions to invoices, bills and existing entries",
      detail: "Ensuring incoming deposits are linked to customer invoices and outgoing payments match supplier bills.",
    },
    {
      title: "Reviewing transfers between accounts",
      detail: "Confirming inter-entity and inter-account funds transfers balance out without triggering phantom income or costs.",
    },
    {
      title: "Identifying duplicated or omitted transactions",
      detail: "Detecting feed glitches, duplicate rules, and missing bank statement periods before they skew financial reports.",
    },
    {
      title: "Reviewing uncleared or long-outstanding entries",
      detail: "Investigating old cheques, unpresented transactions, or orphaned records lingering on the reconciliation report.",
    },
    {
      title: "Checking merchant deposits or grouped receipts where information is available",
      detail: "Reconciling batch settlements from EFTPOS, Stripe, or Square against individual sales orders and merchant fee deductions.",
    },
    {
      title: "Flagging transactions that require supporting documents or client clarification",
      detail: "Isolating unknown debits, personal expenses, or missing tax invoices into structured query schedules.",
    },
    {
      title: "Correcting bookkeeping entries within the agreed service scope",
      detail: "Reallocating miscoded expenses, adjusting incorrect GST tax codes, and rectifying ledger discrepancies within agreed terms.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <Tag color="cyan" className="brand-section-tag mb-4 font-bold tracking-wider uppercase text-xs">
            <ProfileOutlined className="mr-1.5" />
            Service Scope
          </Tag>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            What our bank reconciliation services can include
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Our reconciliation procedures systematically verify every transaction line against bank records, identifying discrepancies and ensuring your bookkeeping records remain accurate, complete, and fully substantiated.
          </p>
        </div>

        {/* 8 Scope Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {scopeItems.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-200 dark:border-zinc-700/80 hover:border-emerald-400/60 transition-all flex items-start gap-4"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircleOutlined className="text-lg" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Note on older or inconsistent books -> Link to Bookkeeping Clean-up */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-emerald-50/60 via-white to-teal-50/40 dark:from-zinc-800/80 dark:via-zinc-900 dark:to-zinc-800/60 border border-emerald-200/80 dark:border-zinc-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-semibold text-sm">
              <ThunderboltOutlined />
              Historical Discrepancies or Messy Records?
            </div>
            <p className="text-base text-slate-800 dark:text-zinc-200 leading-relaxed font-medium">
              Where reconciliation issues come from older or inconsistent books, our bookkeeping clean-up services may be more appropriate than treating the problem as a routine monthly reconciliation.
            </p>
          </div>
          <Link href="/services/bookkeeping/bookkeeping-clean-up">
            <Button
              type="primary"
              size="middle"
              className="font-bold shrink-0"
              icon={<ArrowRightOutlined />}
              iconPosition="end"
            >
              Explore Bookkeeping Clean-Up
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}
