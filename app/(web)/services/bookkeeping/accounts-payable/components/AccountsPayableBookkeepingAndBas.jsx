"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  FileProtectOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  BookOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * AccountsPayableBookkeepingAndBas Component
 * ==========================================
 * Section 4: Accounts Payable, Bookkeeping and BAS Support
 * Features 100% complete, verbatim content from Page 6 of client docx.
 */
export default function AccountsPayableBookkeepingAndBas() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Broader Ecosystem
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Accounts Payable, Bookkeeping and BAS Support
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Accounts payable is one part of the bookkeeping system. Accurate supplier-bill processing helps keep expense records, liabilities and cash-flow information more current, but it does not replace complete bookkeeping, accounting or tax work.
          </p>
        </div>

        {/* 2 Strategic Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Block 1: Broader Bookkeeping Integration */}
          <div className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/70 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-5">
                <BookOutlined className="text-sm" />
                <span>Ecosystem Alignment</span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Full Ledger &amp; Monthly Integration
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                <p>
                  Where a business also needs broader transaction processing and reconciliations, our Monthly Bookkeeping service may be more suitable. For businesses needing an overall bookkeeping solution, our Bookkeeping services cover the wider record-keeping process beyond supplier bills alone.
                </p>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 flex items-start gap-3">
                <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-base mt-0.5 shrink-0" />
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 font-normal">
                  Connect supplier bill tracking with bank reconciliation, accounts receivable, and recurring monthly closes.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-zinc-800/80 flex items-center justify-between">
              <span className="text-xs text-slate-500 dark:text-zinc-400">
                Explore wider bookkeeping
              </span>
              <Link href="/services/bookkeeping/monthly-bookkeeping">
                <Button
                  type="link"
                  className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1 text-xs sm:text-sm"
                  icon={<ArrowRightOutlined className="text-xs" />}
                  iconPosition="end"
                >
                  Monthly Bookkeeping
                </Button>
              </Link>
            </div>
          </div>

          {/* Block 2: GST Records & ATO 5-Year Rule */}
          <div className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100/70 dark:bg-teal-950 text-teal-800 dark:text-teal-300 text-xs font-bold uppercase tracking-wider mb-5">
                <FileProtectOutlined className="text-sm" />
                <span>GST &amp; Statutory Retention</span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                GST Treatment &amp; Statutory Records
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                <p>
                  GST treatment depends on the purchase and the business&apos;s circumstances. GST-registered businesses must keep records supporting reported amounts and GST credits. Most business records generally need to be kept for five years, although longer periods can apply. Accounts payable can help organize those records, but BAS preparation, lodgement, GST treatment requiring interpretation of the law and tax advice must be confirmed within the agreed scope.
                </p>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/70 dark:border-amber-900/40 flex items-start gap-3">
                <ClockCircleOutlined className="text-amber-600 dark:text-amber-400 text-base mt-0.5 shrink-0" />
                <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 font-normal">
                  <strong>ATO 5-Year Requirement:</strong> Valid supplier tax invoices must be held for 5 years to substantiate GST input tax credits and tax deduction claims.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-zinc-800/80 flex items-center justify-between">
              <span className="text-xs text-slate-500 dark:text-zinc-400">
                Coordinated BAS compliance
              </span>
              <Link href="/services/bas-payroll">
                <Button
                  type="link"
                  className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1 text-xs sm:text-sm"
                  icon={<ArrowRightOutlined className="text-xs" />}
                  iconPosition="end"
                >
                  BAS &amp; GST Lodgement
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
