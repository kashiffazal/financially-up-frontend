"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  FileTextOutlined,
  DollarOutlined,
  SyncOutlined,
  CheckCircleOutlined,
  CalendarOutlined,
  ArrowRightOutlined,
  LineChartOutlined,
} from "@ant-design/icons";

/**
 * WhatAreAccountsReceivableServices Component
 * ============================================
 * Section 1: What Are Accounts Receivable Services?
 * Features 100% complete, verbatim content from Page 7 of client docx.
 */
export default function WhatAreAccountsReceivableServices() {
  const scopeHighlights = [
    {
      icon: <FileTextOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Invoice Generation & Dispatch",
      description:
        "Converting approved timesheets, sales quotes, and milestone completions into professional client invoices.",
    },
    {
      icon: <DollarOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Payment Receipt Allocation",
      description:
        "Matching electronic customer deposits and merchant payments against specific open invoices to eliminate unallocated cash.",
    },
    {
      icon: <SyncOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Customer Account Reconciliation",
      description:
        "Investigating unmatched customer deposits, duplicate credits, or split payments to keep debtor ledgers balanced.",
    },
    {
      icon: <LineChartOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Aged Receivables & Reminders",
      description:
        "Tracking overdue terms and sending polite, systematic payment reminders within your agreed customer communication protocols.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Service Definition &amp; Scope
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What are accounts receivable services?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Accounts receivable services cover the bookkeeping processes used to record money owed by customers and monitor amounts as they move from invoice to payment. The objective is to keep the receivables ledger accurate, current and easy to review so the business can see what has been billed, what has been paid and what remains outstanding.
          </p>
          <p className="mt-3 text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
            Depending on the agreed scope, outsourced accounts receivable may include invoice processing, allocation of customer payments, customer account reconciliation, overdue invoice tracking, aged receivables reporting and routine payment follow-up. It does not automatically include legal debt recovery, credit advice or commercial dispute resolution.
          </p>
        </div>

        {/* 4 Scope Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {scopeHighlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:border-emerald-400/60 transition-all duration-300 flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Scope Clarity Strip */}
        <div className="p-6 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-900/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-xl shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-200 font-medium">
              Maintain professional customer relationships while keeping payment terms enforced and cash flowing smoothly.
            </p>
          </div>
          <Link href="/book-an-appointment">
            <Button
              type="primary"
              size="middle"
              className="font-bold shrink-0"
              icon={<ArrowRightOutlined />}
              iconPosition="end"
            >
              Book an Appointment
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
