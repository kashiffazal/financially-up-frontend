"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  SyncOutlined,
  SafetyCertificateOutlined,
  ClockCircleOutlined,
  FileProtectOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
  SlidersOutlined,
} from "@ant-design/icons";

/**
 * MonthlyCycleAndBasReadiness Component
 * =====================================
 * Section 3: Monthly Bookkeeping Cycle & GST/BAS Readiness
 * Features 100% complete, verbatim content from Page 3 of client docx.
 */
export default function MonthlyCycleAndBasReadiness() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50/60 to-white dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Workflow &amp; Compliance
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            The Monthly Cycle &amp; GST/BAS Readiness
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A structured monthly cadence eliminates last-minute panic and
            ensures your statutory obligations are underpinned by orderly,
            verified financial data.
          </p>
        </div>

        {/* 2 Strategic Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Pillar 1: Monthly Bookkeeping Cycle */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/70 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-5">
                <SyncOutlined className="text-sm" />
                <span>Cadence &amp; Reconciliation</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
                What happens in a monthly bookkeeping cycle?
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                <p>
                  A typical monthly cycle starts with making sure the relevant
                  bank, credit-card and transaction data is available. The
                  bookkeeping records are then updated and reconciled, unusual
                  or unclear items are queried, and outstanding issues are
                  identified for follow-up. The aim is to close the month with
                  fewer unresolved transactions and a more reliable accounting
                  file.
                </p>
                <p>
                  This does not mean every business needs a formal
                  &apos;month-end close&apos; in the same way as a large finance
                  team. The process should be proportionate to the business and
                  the information it actually needs.
                </p>
              </div>

              {/* Callout box */}
              <div className="mt-6 p-4 rounded-xl bg-slate-50 dark:bg-zinc-950/70 border border-slate-200/80 dark:border-zinc-800 flex items-start gap-3">
                <SlidersOutlined className="text-brand-primary dark:text-emerald-400 text-base mt-0.5 shrink-0" />
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 font-normal">
                  <strong>Proportionate &amp; Practical:</strong> We calibrate
                  the close cycle to match your actual operations—keeping
                  processes lean, effective, and free of unnecessary overhead.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200/70 dark:border-zinc-800 flex items-center justify-between">
              <span className="text-xs text-slate-500 dark:text-zinc-400">
                Predictable month-end closure
              </span>
              <Link href="/book-an-appointment">
                <Button
                  type="link"
                  className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1 text-xs sm:text-sm"
                  icon={<ArrowRightOutlined className="text-xs" />}
                  iconPlacement="end"
                >
                  Discuss Your Workflow
                </Button>
              </Link>
            </div>
          </div>

          {/* Pillar 2: GST & BAS Readiness */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100/70 dark:bg-teal-950 text-teal-800 dark:text-teal-300 text-xs font-bold uppercase tracking-wider mb-5">
                <FileProtectOutlined className="text-sm" />
                <span>Statutory Record Compliance</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Monthly bookkeeping and GST/BAS readiness
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                <p>
                  For businesses that lodge BAS, current bookkeeping can reduce
                  the amount of catch-up work needed before preparation. The ATO
                  requires records that support the sales, expenses, GST credits
                  and other amounts reported. Most business records must
                  generally be kept for five years from when they are prepared
                  or obtained, or when the relevant transaction is completed,
                  whichever is later. Some records may need to be kept for
                  longer.
                </p>
                <p>
                  Monthly bookkeeping helps maintain those underlying records,
                  but it is separate from BAS preparation and lodgement. Work
                  that requires determining GST treatment or preparing or
                  lodging a BAS should be included in separately scoped
                  compliance work. If you need BAS support as well, Financially
                  Up can coordinate the bookkeeping process with its BAS and GST
                  lodgement service.
                </p>
              </div>

              {/* ATO 5-Year Requirement Highlight */}
              <div className="mt-6 p-4 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/70 dark:border-amber-900/40 flex items-start gap-3">
                <ClockCircleOutlined className="text-amber-600 dark:text-amber-400 text-base mt-0.5 shrink-0" />
                <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 font-normal">
                  <strong>ATO 5-Year Record Keeping:</strong> Commercial source
                  records, valid tax invoices, and receipts must be retained
                  electronically for at least 5 years.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200/70 dark:border-zinc-800 flex items-center justify-between">
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
                  BAS &amp; GST Lodgement Service
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
