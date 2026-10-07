"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  SafetyCertificateOutlined,
  FileProtectOutlined,
  ClockCircleOutlined,
  AuditOutlined,
  ArrowRightOutlined,
  InfoCircleOutlined,
  AlertOutlined,
} from "@ant-design/icons";

/**
 * CatchUpVsTaxCompliance Component
 * =================================
 * Section 4: Catch-Up Bookkeeping and Tax Compliance Are Different Services
 * Features 100% complete, verbatim content from Page 4 of client docx.
 */
export default function CatchUpVsTaxCompliance() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Regulatory Boundaries
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Catch-Up Bookkeeping and Tax Compliance Are Different Services
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Catch-up work creates or repairs the accounting records used by the business. It does not automatically mean every tax or reporting obligation has been reviewed or lodged.
          </p>
        </div>

        {/* 2 Comparative Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Pillar 1: Bookkeeping Support vs Statutory Lodgement */}
          <div className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/70 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-5">
                <AuditOutlined className="text-sm" />
                <span>Scope Distinction</span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Underlying Records vs. Tax Lodgement
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                <p>
                  Bookkeeping may support BAS preparation or a tax return by improving the underlying records, but preparation and lodgement must be included expressly in the agreed scope. GST coding that requires interpretation or application of GST law is a BAS or tax agent service. Tax advice, amendments and complex accounting issues may require separate review.
                </p>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 flex items-start gap-3">
                <InfoCircleOutlined className="text-brand-primary dark:text-emerald-400 text-base mt-0.5 shrink-0" />
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 font-normal">
                  Need BAS or tax return lodgement alongside backlog clearing? We coordinate your catch-up ledger directly with our registered tax agent team.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-zinc-800/80 flex items-center justify-between">
              <span className="text-xs text-slate-500 dark:text-zinc-400">
                Coordinated tax agent lodgements
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

          {/* Pillar 2: ATO Statutory Record-Keeping Obligations */}
          <div className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100/70 dark:bg-teal-950 text-teal-800 dark:text-teal-300 text-xs font-bold uppercase tracking-wider mb-5">
                <FileProtectOutlined className="text-sm" />
                <span>ATO 5-Year Requirement</span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Statutory Evidence &amp; Retention Rules
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                <p>
                  The ATO requires businesses to keep records that explain transactions relevant to their tax affairs. GST-registered businesses also need records supporting reported amounts and GST credits. Most business records must generally be kept for five years from when they are prepared or obtained, or when the transaction is completed, whichever is later. Longer periods can apply. Catch-up work should therefore rely on source documents rather than unsupported assumptions.
                </p>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/70 dark:border-amber-900/40 flex items-start gap-3">
                <ClockCircleOutlined className="text-amber-600 dark:text-amber-400 text-base mt-0.5 shrink-0" />
                <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 font-normal">
                  <strong>Source Documents Over Assumptions:</strong> Valid tax invoices, bank statements, and deduction records protect your business against adverse ATO audit penalties.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-zinc-800/80 flex items-center justify-between">
              <span className="text-xs text-slate-500 dark:text-zinc-400">
                Prior-year compliance help
              </span>
              <Link href="/services/ato-help">
                <Button
                  type="link"
                  className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1 text-xs sm:text-sm"
                  icon={<ArrowRightOutlined className="text-xs" />}
                  iconPosition="end"
                >
                  ATO Support &amp; Review
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
