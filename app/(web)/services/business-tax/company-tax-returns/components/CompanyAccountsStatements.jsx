"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  FileTextOutlined,
  ApartmentOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  BookOutlined,
  AuditOutlined,
} from "@ant-design/icons";

/**
 * CompanyAccountsStatements Component
 * ===================================
 * Section: Company Accounts and Financial Statements
 * Features 100% complete, verbatim content from Page 2 of client docx.
 * Connects corporate income tax returns with annual financial reporting.
 */
export default function CompanyAccountsStatements() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Financial Reporting & Accounting
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Company Accounts and Financial Statements
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Good company tax work depends on good accounting information. Before the return is lodged, the company’s accounts should present a coherent picture of the year and reconcile to the underlying records. Financial statements may also be needed for management, lenders, shareholders or other business purposes.
          </p>
        </div>

        {/* 2-Column Focus Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Column 1: Financial Statements Preparation */}
          <div className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center mb-6">
                <FileTextOutlined className="text-2xl text-brand-primary dark:text-emerald-400" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                Agreed Engagement Scope & Purpose
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-5">
                The form and purpose of the financial statements should be agreed as part of the engagement. Statutory financial reporting or audit requirements, where applicable, are separate from routine tax-return and year-end accounts preparation.
              </p>

              <div className="space-y-3 bg-white dark:bg-zinc-900 rounded-xl p-4 border border-slate-200/80 dark:border-zinc-800">
                <div className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 text-sm mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                    <strong>Special Purpose Financial Statements:</strong> Designed for internal management, tax return support, and small business banking requirements.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 text-sm mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                    <strong>Balance Sheet Reconciliations:</strong> Complete substantiation of corporate assets, liabilities, and retained earnings.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400">
              Clear financial records protect company directors and clarify corporate profitability.
            </div>
          </div>

          {/* Column 2: Broader Accounting Integration */}
          <div className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/60 border border-teal-100 dark:border-teal-800/40 flex items-center justify-center mb-6">
                <BookOutlined className="text-2xl text-teal-600 dark:text-teal-400" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                Integrated Business Accounting Services
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-5">
                If you need broader accounting support beyond the return itself, our Business Tax &amp; Accounting service covers year-end accounting, financial statements and related business tax compliance.
              </p>

              <div className="space-y-3 bg-white dark:bg-zinc-900 rounded-xl p-4 border border-slate-200/80 dark:border-zinc-800">
                <div className="flex items-start gap-2.5">
                  <AuditOutlined className="text-teal-600 dark:text-teal-400 text-sm mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                    <strong>Year-End Accounting &amp; Adjustments:</strong> Turning raw bookkeeping figures into audit-ready year-end numbers.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <ApartmentOutlined className="text-teal-600 dark:text-teal-400 text-sm mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                    <strong>Ongoing Business Tax Compliance:</strong> Handling recurring corporate reporting, GST/BAS reconciliations, and PAYG instalments.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-zinc-800 flex items-center justify-between">
              <span className="text-xs text-slate-500 dark:text-zinc-400">
                Broader accounting hub available.
              </span>
              <Link
                href="/services/business-tax"
                className="text-xs font-semibold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
              >
                Visit Business Tax Hub <ArrowRightOutlined className="text-[10px]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
