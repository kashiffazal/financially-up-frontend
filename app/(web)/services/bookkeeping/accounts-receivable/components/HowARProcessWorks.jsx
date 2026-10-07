"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  FileTextOutlined,
  SyncOutlined,
  CalendarOutlined,
  LineChartOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * HowARProcessWorks Component
 * ===========================
 * Section 5: How the Accounts Receivable Process Works
 * Features 100% complete, verbatim content from Page 7 of client docx.
 */
export default function HowARProcessWorks() {
  const steps = [
    {
      number: "01",
      icon: <FileTextOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
      title: "Agree the workflow",
      body: "We confirm what information you provide, who approves invoices or adjustments, how customer follow-up should be handled and which accounting system is used.",
    },
    {
      number: "02",
      icon: <SyncOutlined className="text-2xl text-teal-600 dark:text-teal-400" />,
      title: "Process and reconcile",
      body: "Approved invoices, receipts and credits are recorded, and customer balances are reviewed for allocation issues or discrepancies.",
    },
    {
      number: "03",
      icon: <CalendarOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
      title: "Monitor outstanding balances",
      body: "Overdue items are tracked and routine follow-up is completed within the agreed scope. Disputes, payment arrangements and other matters requiring a commercial or legal decision are referred to you for approval or separate advice.",
    },
    {
      number: "04",
      icon: <LineChartOutlined className="text-2xl text-amber-600 dark:text-amber-400" />,
      title: "Review receivables",
      body: "You receive useful information on outstanding balances so you can make decisions about collections, cash flow and customer accounts.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Operational Cadence
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How the accounts receivable process works
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A structured four-step debtor framework to ensure timely billing, swift cash allocation, and professional follow-up.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:border-emerald-400/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center">
                    {step.icon}
                  </div>
                  <span className="text-xl font-black text-slate-300 dark:text-zinc-700">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {step.body}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-zinc-800/80 text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                Step {step.number}
              </div>
            </div>
          ))}
        </div>

        {/* Monthly Bookkeeping Connection Callout */}
        <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              Combine Receivables with Ongoing Monthly Processing
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              For a broader recurring bookkeeping arrangement, our monthly bookkeeping services can combine receivables work with regular transaction processing and reconciliations.
            </p>
          </div>

          <Link href="/services/bookkeeping/monthly-bookkeeping">
            <Button type="primary" size="middle" className="font-bold text-xs sm:text-sm shrink-0">
              Monthly Bookkeeping Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
