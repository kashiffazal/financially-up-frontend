"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  FileProtectOutlined,
  ClockCircleOutlined,
  LineChartOutlined,
  AuditOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * AccurateRecordsAndCashFlowVisibility Component
 * ==============================================
 * Section 4: Accurate Records Matter for More Than Collections & Accounts Receivable and Cash-Flow Visibility
 * Features 100% complete, verbatim content from Page 7 of client docx.
 */
export default function AccurateRecordsAndCashFlowVisibility() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Financial Health &amp; Compliance
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Accurate Records &amp; Cash-Flow Visibility
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Receivables data drives cash forecasting, working capital decisions,
            and statutory GST reporting.
          </p>
        </div>

        {/* 2 Strategic Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Block 1: Accurate records matter for more than collections */}
          <div className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/70 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-5">
                <FileProtectOutlined className="text-sm" />
                <span>ATO Records &amp; Precision</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Accurate records matter for more than collections
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                <p>
                  Receivables records affect more than the list of customers who
                  owe money. Sales invoices, receipts, credits and adjustments
                  feed into records used for cash-flow monitoring, management
                  reporting and, where relevant, GST and tax reporting. The ATO
                  generally requires most business records to be kept for five
                  years from when they are prepared or obtained, or when the
                  relevant transaction is completed, whichever is later. Longer
                  periods can apply.
                </p>
                <p>
                  Good accounts receivable support therefore focuses on accuracy
                  as well as follow-up. Where a customer payment cannot be
                  matched confidently, or an invoice appears duplicated or
                  disputed, the issue should be identified and reviewed rather
                  than forced into the ledger.
                </p>
              </div>

              {/* ATO 5-Year Requirement Callout */}
              <div className="mt-6 p-4 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/70 dark:border-amber-900/40 flex items-start gap-3">
                <ClockCircleOutlined className="text-amber-600 dark:text-amber-400 text-base mt-0.5 shrink-0" />
                <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 font-normal">
                  <strong>ATO 5-Year Rule:</strong> Sales invoices, customer
                  credit notes, and bank receipts must be retained for at least
                  five full years.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-zinc-800/80 flex items-center justify-between">
              <span className="text-xs text-slate-500 dark:text-zinc-400">
                Coordinated BAS preparation
              </span>
              <Link href="/services/bas-payroll">
                <Button
                  type="link"
                  className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1 text-xs sm:text-sm"
                  icon={<ArrowRightOutlined className="text-xs" />}
                  iconPlacement="end"
                >
                  BAS &amp; GST Lodgement
                </Button>
              </Link>
            </div>
          </div>

          {/* Block 2: Accounts receivable and cash-flow visibility */}
          <div className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100/70 dark:bg-teal-950 text-teal-800 dark:text-teal-300 text-xs font-bold uppercase tracking-wider mb-5">
                <LineChartOutlined className="text-sm" />
                <span>Working Capital Intelligence</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Accounts receivable and cash-flow visibility
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                <p>
                  An aged receivables report groups outstanding customer
                  balances by how long they have been unpaid. Used properly, it
                  can help a business see where cash is tied up, identify
                  accounts that need attention and distinguish current invoices
                  from older balances.
                </p>
                <p>
                  Aged receivables are most useful when the underlying
                  bookkeeping is current. If invoices have been paid but
                  receipts are not allocated, or credits have not been entered,
                  the report can overstate what customers actually owe. This is
                  why regular reconciliation is an important part of outsourced
                  AR services.
                </p>
              </div>

              {/* Callout */}
              <div className="mt-6 p-4 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 flex items-start gap-3">
                <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-base mt-0.5 shrink-0" />
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 font-normal">
                  Stop overstating customer debts. Timely allocation ensures
                  your aged debtor reports reflect true, actionable receivables
                  balances.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-zinc-800/80 flex items-center justify-between">
              <span className="text-xs text-slate-500 dark:text-zinc-400">
                Actionable debtor reporting
              </span>
              <Link href="/services/bookkeeping/reporting">
                <Button
                  type="link"
                  className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1 text-xs sm:text-sm"
                  icon={<ArrowRightOutlined className="text-xs" />}
                  iconPlacement="end"
                >
                  Management Reporting
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
