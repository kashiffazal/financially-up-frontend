"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  FileProtectOutlined,
  ClockCircleOutlined,
  AuditOutlined,
  SafetyCertificateOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * WhyAccurateSourceRecordsMatter Component
 * ========================================
 * Section 4: Why Accurate Source Records Matter
 * Features 100% complete, verbatim content from Page 5 of client docx.
 */
export default function WhyAccurateSourceRecordsMatter() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Substantiation &amp; ATO Compliance
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why Accurate Source Records Matter
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A sustainable bookkeeping clean-up is always evidence-based. Proper
            documentation protects your deductions, verifies tax credits, and
            ensures compliance under ATO scrutiny.
          </p>
        </div>

        {/* 2 Strategic Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Block 1: Statutory ATO Record Obligations */}
          <div className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/70 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-5">
                <FileProtectOutlined className="text-sm" />
                <span>Statutory Compliance</span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                ATO Record-Keeping Obligations
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                <p>
                  The ATO requires businesses to keep records that explain
                  transactions relevant to their tax, superannuation and
                  registration affairs. Records need to support amounts reported
                  in tax returns and activity statements, including sales,
                  purchases, expenses and GST credits where applicable. Most
                  business records must generally be kept for five years from
                  when they are prepared or obtained, or when the relevant
                  transaction is completed, whichever is later. Some records may
                  need to be retained for longer.
                </p>
              </div>

              {/* ATO 5-Year Requirement Callout */}
              <div className="mt-6 p-4 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/70 dark:border-amber-900/40 flex items-start gap-3">
                <ClockCircleOutlined className="text-amber-600 dark:text-amber-400 text-base mt-0.5 shrink-0" />
                <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 font-normal">
                  <strong>5-Year Statutory Rule:</strong> Paper or digital
                  records explaining financial operations must be retained for
                  at least five full years.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-zinc-800/80 flex items-center justify-between">
              <span className="text-xs text-slate-500 dark:text-zinc-400">
                Audit protection for deductions
              </span>
              <Link href="/services/ato-help">
                <Button
                  type="link"
                  className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1 text-xs sm:text-sm"
                  icon={<ArrowRightOutlined className="text-xs" />}
                  iconPlacement="end"
                >
                  ATO Audit Support
                </Button>
              </Link>
            </div>
          </div>

          {/* Block 2: Evidence-Based Clean-Up */}
          <div className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100/70 dark:bg-teal-950 text-teal-800 dark:text-teal-300 text-xs font-bold uppercase tracking-wider mb-5">
                <AuditOutlined className="text-sm" />
                <span>Substantiated Adjustments</span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Substantiating Apparent Errors
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                <p>
                  That is why a clean-up process should be evidence-based. Bank
                  statements, invoices, receipts, finance documents and prior
                  reports can help determine whether an apparent bookkeeping
                  error is actually incorrect or simply needs better
                  explanation.
                </p>
              </div>

              {/* Substantiation Callout */}
              <div className="mt-6 p-4 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 flex items-start gap-3">
                <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-base mt-0.5 shrink-0" />
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 font-normal">
                  We verify source documents before committing general journal
                  adjustments, preventing unexplainable holes in your future
                  audits.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-zinc-800/80 flex items-center justify-between">
              <span className="text-xs text-slate-500 dark:text-zinc-400">
                Rigorous financial reconciliation
              </span>
              <Link href="/services/bookkeeping/bank-reconciliation">
                <Button
                  type="link"
                  className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1 text-xs sm:text-sm"
                  icon={<ArrowRightOutlined className="text-xs" />}
                  iconPlacement="end"
                >
                  Bank Reconciliation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
