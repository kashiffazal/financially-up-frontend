"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  ClearOutlined,
  CalendarOutlined,
  ArrowRightOutlined,
  AlertOutlined,
  CheckCircleOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";

/**
 * XeroCleanUpAndOngoingSupport Component
 * =======================================
 * Section 4: Clean-Up of an Existing Xero File & Ongoing Support
 * Features 100% complete, verbatim content from Page 2 of client docx.
 */
export default function XeroCleanUpAndOngoingSupport() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            File Health &amp; Long-Term Routine
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Clean-Up &amp; Ongoing Xero Bookkeeping Support
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Whether your file requires an initial diagnostic clean-up or a reliable monthly rhythm, we tailor the engagement to your actual transaction volume and business complexity.
          </p>
        </div>

        {/* 2 Strategic Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Block 1: Clean-Up of an existing Xero file */}
          <div className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-100/70 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 flex items-center justify-center mb-5 text-xl">
                <ClearOutlined />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Clean-up of an existing Xero file
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                <p>
                  A bookkeeping clean-up may be required when records have been maintained inconsistently or left unresolved for a period. The work can involve reconciling bank accounts, reviewing coding, identifying duplicate or stale items, checking opening balances and clarifying transactions that need supporting documents.
                </p>
                <p>
                  The clean-up scope depends on the condition of the file. Historical corrections may also affect previously lodged BAS or tax returns, so material issues may need separate tax or compliance review before changes are made.
                </p>
              </div>

              {/* Note on Historical Corrections */}
              <div className="mt-6 p-4 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 flex items-start gap-3">
                <AlertOutlined className="text-amber-600 dark:text-amber-400 text-base mt-0.5 shrink-0" />
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 font-normal">
                  Our qualified CPAs assess the impact of prior entries on historical BAS lodgements before adjustments are committed.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-zinc-800/80 flex items-center justify-between">
              <span className="text-xs text-slate-500 dark:text-zinc-400">
                Detailed file remediation
              </span>
              <Link href="/services/bookkeeping/bookkeeping-clean-up">
                <Button
                  type="link"
                  className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1 text-xs sm:text-sm"
                  icon={<ArrowRightOutlined className="text-xs" />}
                  iconPosition="end"
                >
                  Bookkeeping Clean-Up Service
                </Button>
              </Link>
            </div>
          </div>

          {/* Block 2: Ongoing Xero bookkeeping support */}
          <div className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-100/70 dark:bg-emerald-950/60 text-brand-primary dark:text-emerald-400 flex items-center justify-center mb-5 text-xl">
                <CalendarOutlined />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Ongoing Xero bookkeeping support
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                <p>
                  Once the file is in order, an ongoing process can help keep it that way. Financially Up can agree on a recurring bookkeeping scope based on transaction volume, number of bank accounts, reporting needs and the level of review required. Businesses wanting a set recurring cadence can also consider our monthly bookkeeping services.
                </p>
                <p>
                  For broader support that is not limited to one software platform, see our main bookkeeping services page.
                </p>
              </div>

              {/* Note on Monthly Rhythm */}
              <div className="mt-6 p-4 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 flex items-start gap-3">
                <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-base mt-0.5 shrink-0" />
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 font-normal">
                  Enjoy peace of mind with recurring month-end reconciliations, timely coding, and regular management visibility.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-zinc-800/80 flex items-center justify-between">
              <span className="text-xs text-slate-500 dark:text-zinc-400">
                Recurring monthly cadence
              </span>
              <Link href="/services/bookkeeping/monthly-bookkeeping">
                <Button
                  type="link"
                  className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1 text-xs sm:text-sm"
                  icon={<ArrowRightOutlined className="text-xs" />}
                  iconPosition="end"
                >
                  Monthly Bookkeeping Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
