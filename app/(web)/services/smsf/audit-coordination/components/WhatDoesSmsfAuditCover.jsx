"use client";

import React from "react";
import { Tag } from "antd";
import {
  AuditOutlined,
  SafetyCertificateOutlined,
  CalendarOutlined,
  FileProtectOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * WhatDoesSmsfAuditCover Component
 * ================================
 * Implements verbatim SEO content from Page 7 of 9th Pillar SMSF.docx:
 * - What does an SMSF audit cover? (Part A: Financial & Part B: Compliance)
 * - When should the SMSF auditor be appointed? (Statutory 45-day rule)
 */
export default function WhatDoesSmsfAuditCover() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="purple" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Dual Statutory Audit Scope
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What does an SMSF audit cover?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            An SMSF annual audit has two parts. The auditor reviews the fund&apos;s financial statements and also checks compliance with relevant superannuation law. This means the audit is not simply a check that the bank balance agrees to the accounts. The auditor may need evidence supporting investments, contributions, pensions, related-party dealings, ownership of assets, valuations and trustee decisions.
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            The trustees remain responsible for operating the fund correctly and for providing the information the auditor needs. The auditor&apos;s role is independent assurance. Financially Up&apos;s role in SMSF audit preparation is to help ensure the accounting file and supporting records are organized, consistent and ready for that independent review.
          </p>
        </div>

        {/* 2 Cards: Part A Financial vs Part B Compliance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Part A Financial Audit */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/40 flex items-center justify-center mb-6">
                <AuditOutlined className="text-2xl text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                Part A: Financial Statements Audit
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-6 font-normal">
                Independent examination confirming that the fund&apos;s operating statement and statement of financial position present a true and fair view:
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-blue-500 text-sm mt-0.5 shrink-0" />
                  <span>Verification of cash, bank ledgers, broker accounts, and term deposits</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-blue-500 text-sm mt-0.5 shrink-0" />
                  <span>Objective market valuation support for real estate, shares, and unlisted holdings</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-blue-500 text-sm mt-0.5 shrink-0" />
                  <span>Reconciliation of member accumulation equity and pension drawdowns</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-zinc-800 text-xs text-blue-700 dark:text-blue-400 font-medium">
              Conducted under Australian Auditing Standards (ASAs).
            </div>
          </div>

          {/* Card 2: Part B Compliance Audit */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800/40 flex items-center justify-center mb-6">
                <FileProtectOutlined className="text-2xl text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                Part B: SISA & SISR Regulatory Compliance Audit
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-6 font-normal">
                Rigorous testing confirming adherence to superannuation legislation and operating standards:
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-purple-500 text-sm mt-0.5 shrink-0" />
                  <span>Sole purpose test compliance and strict prohibition on member financial assistance</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-purple-500 text-sm mt-0.5 shrink-0" />
                  <span>In-house asset 5% market value limits and arm&apos;s-length dealing standards</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-purple-500 text-sm mt-0.5 shrink-0" />
                  <span>Asset separation from personal property and correct legal title documentation</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-zinc-800 text-xs text-purple-700 dark:text-purple-400 font-medium">
              Conducted under ASAE 3100 Compliance Standards.
            </div>
          </div>
        </div>

        {/* When to Appoint Auditor Banner */}
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800/40 flex items-center justify-center shrink-0">
              <CalendarOutlined className="text-2xl text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                When should the SMSF auditor be appointed?
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                The ATO requires trustees to appoint an approved SMSF auditor no later than 45 days before the SMSF annual return is due to be lodged. The audit must be completed before the annual return is lodged. Starting the process earlier can reduce pressure where records are incomplete, valuations are needed or the auditor identifies questions that require trustee input.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
