"use client";

import React from "react";
import { Tag, Button } from "antd";
import {
  SyncOutlined,
  BankOutlined,
  DollarOutlined,
  CheckCircleOutlined,
  AlertOutlined,
  ArrowRightOutlined,
  FileProtectOutlined,
} from "@ant-design/icons";
import Link from "next/link";

/**
 * AsicVsTaxCompliance Component
 * =============================
 * Section: "ASIC compliance, tax and accounting are connected but different"
 *
 * Content is 100% VERBATIM from the professional SEO specialist document:
 * '7th Pillar ASIC.docx' (Section 1).
 *
 * Background: Clean White.
 */
export default function AsicVsTaxCompliance() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <Tag color="green" className="brand-section-tag">
            <SyncOutlined className="mr-1" /> Connected But Distinct Roles
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.2]">
            ASIC compliance, tax and accounting are connected but different
          </h2>
          {/* Document Paragraph 1 - Verbatim */}
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            An ASIC filing records corporate information; it does not automatically determine the tax treatment of the underlying transaction. For example, a share issue, share transfer, director change or restructure may have accounting, tax, commercial or legal consequences beyond the ASIC notification itself.
          </p>
        </div>

        {/* 2-Column Comparison Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left Column: ASIC Corporate Filing */}
          <div className="p-7 sm:p-8 rounded-2xl bg-slate-50/70 dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/50 flex items-center justify-center">
                    <BankOutlined className="text-teal-600 dark:text-teal-400 text-lg" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-teal-600 dark:text-teal-400 tracking-wider uppercase">
                      Corporate Information
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0">
                      ASIC Corporate Filing
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-slate-600 dark:text-zinc-300">
                  Public Register
                </span>
              </div>

              <div className="space-y-3 mb-6 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 mt-1 shrink-0" />
                  <span>Records company officeholders, registered addresses, and share capital</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 mt-1 shrink-0" />
                  <span>Maintains statutory alignment under the Corporations Act 2001</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 mt-1 shrink-0" />
                  <span>Does not automatically resolve tax or accounting implications of the transaction</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200/70 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400">
              Role: Recording and updating corporate registry information with ASIC.
            </div>
          </div>

          {/* Right Column: Tax & Accounting Treatment */}
          <div className="p-7 sm:p-8 rounded-2xl bg-slate-50/70 dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 flex items-center justify-center">
                    <DollarOutlined className="text-emerald-600 dark:text-emerald-400 text-lg" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase">
                      Tax & Commercial Impact
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0">
                      Tax & Accounting Treatment
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-slate-600 dark:text-zinc-300">
                  ATO & Financial Records
                </span>
              </div>

              <div className="space-y-3 mb-6 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 mt-1 shrink-0" />
                  <span>Determines Capital Gains Tax (CGT), stamp duty, and taxable income treatment</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 mt-1 shrink-0" />
                  <span>Adjusts general ledger, dividend franking accounts, and financial statements</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 mt-1 shrink-0" />
                  <span>Evaluates Division 7A shareholder loans, commercial terms, and payroll impact</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200/70 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400">
              Role: Managing financial reporting, ATO obligations, and tax outcomes.
            </div>
          </div>
        </div>

        {/* Verbatim Paragraph 2 Scope & Legal Notice Box */}
        <div className="rounded-2xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 text-xs font-semibold mb-3">
              <FileProtectOutlined />
              <span>Tax Scope & Legal Boundary</span>
            </div>
            {/* Document Paragraph 2 - Verbatim */}
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed m-0 font-normal">
              Where a transaction has wider tax implications, the work may need to be separately scoped through our business tax compliance service or another relevant tax service. Legal documents, shareholder agreements or questions about legal rights may require an appropriately qualified legal adviser.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <Link href="/services/business-tax">
              <Button
                size="large"
                className="h-11 px-5 rounded-xl font-semibold border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-200 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-all"
              >
                Business Tax Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
