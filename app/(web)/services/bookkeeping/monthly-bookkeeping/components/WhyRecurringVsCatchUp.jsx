"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  HistoryOutlined,
  ThunderboltOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
  CloudSyncOutlined,
} from "@ant-design/icons";

/**
 * WhyRecurringVsCatchUp Component
 * ================================
 * Section 4: Why Recurring Bookkeeping Can Be More Useful Than Catch-Up Work
 * & Monthly Bookkeeping with Xero
 * Features 100% complete, verbatim content from Page 3 of client docx.
 */
export default function WhyRecurringVsCatchUp() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Strategic Advantages
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Recurring Cadence vs. Catch-Up Scrambles
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Why proactive monthly bookkeeping preserves institutional memory, avoids missing paperwork, and delivers higher value than reactive catch-up work.
          </p>
        </div>

        {/* 2 Strategic Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Block 1: Why recurring bookkeeping can be more useful than catch-up work */}
          <div className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-100/70 dark:bg-emerald-950/60 text-brand-primary dark:text-emerald-400 flex items-center justify-center mb-5 text-xl">
                <ThunderboltOutlined />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Why recurring bookkeeping can be more useful than catch-up work
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                <p>
                  When bookkeeping is delayed for long periods, business owners may have difficulty remembering what older transactions relate to, source documents can be harder to locate, and errors can remain unnoticed until compliance work begins. A recurring process creates regular points to resolve questions and keep the file moving forward.
                </p>
                <p>
                  It also gives accountants and business owners a more current starting point for financial reporting or advisory work. Bookkeeping alone does not provide tax planning or strategic advice, but reliable records make those separate services more useful.
                </p>
              </div>

              {/* Memory & Records Callout */}
              <div className="mt-6 p-4 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 flex items-start gap-3">
                <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-base mt-0.5 shrink-0" />
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 font-normal">
                  Queries are answered within days—not 9 months later when receipts are lost and transaction context is forgotten.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-zinc-800/80 flex items-center justify-between">
              <span className="text-xs text-slate-500 dark:text-zinc-400">
                Behind on past months?
              </span>
              <Link href="/services/bookkeeping/catch-up-bookkeeping">
                <Button
                  type="link"
                  className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1 text-xs sm:text-sm"
                  icon={<ArrowRightOutlined className="text-xs" />}
                  iconPosition="end"
                >
                  Catch-Up Bookkeeping Services
                </Button>
              </Link>
            </div>
          </div>

          {/* Block 2: Monthly bookkeeping with Xero */}
          <div className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-100/70 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-5 text-xl">
                <CloudSyncOutlined />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Monthly bookkeeping with Xero
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                <p>
                  If your business uses Xero, monthly bookkeeping can be delivered within that system using an agreed workflow for reconciliations, transaction review and document queries. Businesses that specifically want Xero-focused support can read more about our Xero bookkeeping services.
                </p>
                <p>
                  If you are still deciding whether recurring support or a broader bookkeeping engagement is right for you, our main bookkeeping services page explains the wider service.
                </p>
              </div>

              {/* Cloud Workflow Callout */}
              <div className="mt-6 p-4 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 flex items-start gap-3">
                <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-base mt-0.5 shrink-0" />
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 font-normal">
                  Full cloud integration: direct electronic bank feeds, invoice capture, and shared secure access with zero paper clutter.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-zinc-800/80 flex items-center justify-between">
              <span className="text-xs text-slate-500 dark:text-zinc-400">
                Xero platform specialists
              </span>
              <Link href="/services/bookkeeping/xero-bookkeeping">
                <Button
                  type="link"
                  className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1 text-xs sm:text-sm"
                  icon={<ArrowRightOutlined className="text-xs" />}
                  iconPosition="end"
                >
                  Xero Bookkeeping Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
