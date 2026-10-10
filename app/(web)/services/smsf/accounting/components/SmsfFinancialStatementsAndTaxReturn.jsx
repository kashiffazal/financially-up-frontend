"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileTextOutlined,
  CalendarOutlined,
  DollarCircleOutlined,
  SafetyCertificateOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * SmsfFinancialStatementsAndTaxReturn Component
 * =============================================
 * Implements verbatim SEO content from Page 2 of 9th Pillar SMSF.docx:
 * - SMSF financial statements and annual accounts
 * - SMSF tax accounting and the annual return
 */
export default function SmsfFinancialStatementsAndTaxReturn() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="blue" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Financial Statements & Taxation
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            SMSF financial statements and annual accounts
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            The annual financial statements summarize what happened during the year and what the SMSF owns and owes at year end. An SMSF generally prepares an operating statement and a statement of financial position. These accounts form an important part of the information provided to the approved SMSF auditor and support the figures reported in the annual return.
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            For trustees, reliable SMSF financial statements also help explain movements in member balances and identify unusual transactions that may need further review before the audit. If the records do not reconcile, resolving the discrepancy before the annual return is prepared is preferable to carrying the issue forward.
          </p>
        </div>

        {/* 2 Feature Cards for Core Accounts & Tax Return */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Operating Statement & Financial Position */}
          <div className="bg-slate-50/80 dark:bg-zinc-900/60 rounded-2xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/40 flex items-center justify-center mb-6">
                <FileTextOutlined className="text-2xl text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Operating Statement & Statement of Financial Position
              </h3>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-6">
                These statements form an important part of the information provided to the approved SMSF auditor and support the figures reported in the annual return.
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-blue-600 dark:text-blue-400 text-sm mt-0.5 shrink-0" />
                  <span>Clear summary of fund earnings, realized capital gains, and deductible expenses</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-blue-600 dark:text-blue-400 text-sm mt-0.5 shrink-0" />
                  <span>Year-end statement of financial position showing asset values at market rates</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-blue-600 dark:text-blue-400 text-sm mt-0.5 shrink-0" />
                  <span>Accurate member accumulation and pension accounts with tax-free and taxable proportions</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400">
              Addresses discrepancies before submission to independent audit.
            </div>
          </div>

          {/* Card 2: SMSF Tax Accounting & SAR */}
          <div className="bg-slate-50/80 dark:bg-zinc-900/60 rounded-2xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/40 flex items-center justify-center mb-6">
                <DollarCircleOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                SMSF tax accounting and the annual return
              </h3>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-6">
                The SMSF annual return combines tax and regulatory reporting. It includes fund and member information, financial and tax data, and details of the approved SMSF auditor. Trustees must appoint the auditor at least 45 days before the return is due, and the return should not be lodged until the audit has been completed and the auditor&apos;s report has been received.
              </p>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                Tax treatment can vary according to the fund&apos;s income, expenses, investment transactions and member circumstances. Some expenses may be deductible, some may require apportionment, and capital costs may not be immediately deductible. Financially Up can prepare the tax reporting based on the fund&apos;s records and the applicable rules rather than treating every outgoing in the same way.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-zinc-800 flex items-center gap-2 text-xs text-emerald-700 dark:text-emerald-400 font-medium">
              <CalendarOutlined />
              <span>Mandatory 45-day auditor appointment lead time observed</span>
            </div>
          </div>
        </div>

        {/* Audit Sequence Banner */}
        <div className="p-5 sm:p-6 rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/40 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <SafetyCertificateOutlined className="text-3xl text-amber-600 dark:text-amber-400 shrink-0" />
          <div className="text-xs sm:text-sm text-amber-950 dark:text-amber-200 leading-relaxed">
            <span className="font-bold">Sequential Lodgement Rule:</span> The SMSF annual return must never be lodged prior to the full finalization of the independent financial and compliance audit. The auditor&apos;s signed opinion and compliance report details are statutory requirements for SAR completion.
          </div>
        </div>
      </div>
    </section>
  );
}
