"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileTextOutlined,
  CalendarOutlined,
  AuditOutlined,
  SafetyCertificateOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * WhatIsIncludedInSmsfAdministration Component
 * ============================================
 * Implements verbatim SEO content from Page 6 of 9th Pillar SMSF.docx:
 * - What is included in SMSF administration?
 * - Administration, accounting and audit are different
 */
export default function WhatIsIncludedInSmsfAdministration() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="cyan" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Administration Scope
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What is included in SMSF administration?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            SMSF administration can include collecting and organizing fund records, processing transactions, reconciling bank and investment accounts, maintaining member information and preparing records for annual accounting and audit. The exact scope depends on the fund&apos;s investments, contribution activity, pension position, borrowing arrangements and preferred update frequency.
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A fund with a small number of straightforward investments may need periodic processing. A fund with property, pensions, corporate actions, complex contributions or an LRBA may need more frequent updates and additional supporting schedules. The service should reflect the fund&apos;s actual activity rather than treating every SMSF as the same.
          </p>
        </div>

        {/* 3 Pillars Comparison: Administration vs Accounting vs Audit */}
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            Administration, accounting and audit are different
          </h3>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed">
            Understanding the distinction between ongoing record processing, year-end accounts preparation, and statutory auditing ensures a smooth compliance process:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Pillar 1: SMSF Administration */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-800/40 flex items-center justify-center mb-5">
                <FileTextOutlined className="text-2xl text-cyan-600 dark:text-cyan-400" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                1. Ongoing Administration
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Administration keeps the fund&apos;s records organized and processed during the year. Captures transactions, categorizes contributions, tracks drawdowns, and collects external statements.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-zinc-800 text-xs text-cyan-700 dark:text-cyan-400 font-medium">
              Year-round transaction health
            </div>
          </div>

          {/* Pillar 2: SMSF Accounting */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/40 flex items-center justify-center mb-5">
                <CalendarOutlined className="text-2xl text-blue-600 dark:text-blue-400" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                2. SMSF Accounting
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                SMSF accounting uses those records to prepare the annual financial statements, tax calculations and SMSF annual return.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-zinc-800 text-xs text-blue-700 dark:text-blue-400 font-medium">
              Annual accounts & SAR lodgement
            </div>
          </div>

          {/* Pillar 3: Independent Audit */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800/40 flex items-center justify-center mb-5">
                <AuditOutlined className="text-2xl text-purple-600 dark:text-purple-400" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                3. Independent SMSF Audit
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                The annual audit tests the financial and compliance information and must be carried out independently by an approved SMSF auditor.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-zinc-800 text-xs text-purple-700 dark:text-purple-400 font-medium">
              Statutory ASIC auditor assurance
            </div>
          </div>
        </div>

        {/* Integration Scope Callout */}
        <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 flex items-start sm:items-center gap-4 shadow-xs">
          <SafetyCertificateOutlined className="text-2xl text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5 sm:mt-0" />
          <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed m-0 font-normal">
            Financially Up can scope administration and our SMSF accounting service together where appropriate. We can prepare and coordinate the information needed for audit, but the audit itself must be completed by an independent approved SMSF auditor.
          </p>
        </div>
      </div>
    </section>
  );
}
