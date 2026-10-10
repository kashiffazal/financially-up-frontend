"use client";

import React from "react";
import { Tag } from "antd";
import {
  CalendarOutlined,
  FolderOpenOutlined,
  ClockCircleOutlined,
  SafetyCertificateOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * TrusteeRecordRetentionRules Component
 * =====================================
 * Implements verbatim SEO content from Page 6 of 9th Pillar SMSF.docx:
 * - What records must SMSF trustees retain?
 * - 5-year accounting retention vs 10-year trustee governance records; permanent asset cost base records.
 */
export default function TrusteeRecordRetentionRules() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="purple" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Statutory Document Retention
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What records must SMSF trustees retain?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            SMSF trustees have formal record-keeping obligations. Accounting records that explain the fund&apos;s transactions and financial position, annual operating statements and lodged returns generally need to be kept for at least five years. Certain trustee and governance records generally need to be kept for at least 10 years, including trustee meeting minutes, records of trustee or director changes, written trustee consents and copies of member reports.
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Some transaction records may need to be retained longer for another reason. For example, acquisition and improvement records may still be required when an asset is sold many years later. A consistent document system also makes it easier to respond when the auditor requests evidence.
          </p>
        </div>

        {/* 2 Retention Horizon Cards: 5 Years vs 10+ Years */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Card 1: 5-Year Accounting Records */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/40 flex items-center justify-center mb-6">
                <ClockCircleOutlined className="text-2xl text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                Minimum 5-Year Retention: Financial & Accounting Records
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-6 font-normal">
                Records explaining routine transactions, annual tax positions, and operational results must be retained for at least five income years:
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-blue-500 text-sm mt-0.5 shrink-0" />
                  <span>Accounting ledgers, general journals, and trial balances</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-blue-500 text-sm mt-0.5 shrink-0" />
                  <span>Annual operating statements and statements of financial position</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-blue-500 text-sm mt-0.5 shrink-0" />
                  <span>Lodged copies of the SMSF annual return (SAR) and notices of assessment</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-zinc-800 text-xs text-blue-700 dark:text-blue-400 font-medium">
              Statutory baseline under ATO superannuation regulations.
            </div>
          </div>

          {/* Card 2: 10-Year Governance & Life-of-Asset Records */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800/40 flex items-center justify-center mb-6">
                <FolderOpenOutlined className="text-2xl text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                Minimum 10-Year Retention: Trustee Governance & Capital Records
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-6 font-normal">
                Fiduciary governance documents and assets with long holding periods must be retained for at least ten years or longer:
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-purple-500 text-sm mt-0.5 shrink-0" />
                  <span>Trustee meeting minutes and formal written resolutions</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-purple-500 text-sm mt-0.5 shrink-0" />
                  <span>Records of trustee or director appointments, resignations, and signed consents</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-purple-500 text-sm mt-0.5 shrink-0" />
                  <span>Asset acquisition contracts, conveyancing, stamp duty, and renovation records (kept until disposal)</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-zinc-800 text-xs text-purple-700 dark:text-purple-400 font-medium">
              Must be accessible for ATO compliance audits and capital gains verification.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
