"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  SyncOutlined,
  FileDoneOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * YearEndVsFinancialStatements Component
 * =======================================
 * Section: Year-End Accounting vs Business Financial Statements
 * Features 100% complete, verbatim content from Page 7 of client docx.
 * Distinguishes the accounting close process from formal financial statement reports.
 */
export default function YearEndVsFinancialStatements() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="blue"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Service Distinction
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Year-End Accounting vs Business Financial Statements
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Year end accounting focuses on the close process: reviewing and
            finalizing the accounting records. Financial statements are the
            reports produced from those records, such as a profit and loss
            statement and balance sheet. The two are closely connected, but they
            are not identical services.
          </p>
        </div>

        {/* 2 Comparative Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Year-End Accounting Close */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-800/90 border border-slate-200/90 dark:border-zinc-700/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
                  <SyncOutlined className="text-xl" />
                </div>
                <div>
                  <Tag
                    color="cyan"
                    className="font-semibold text-xs uppercase tracking-wider mb-1"
                  >
                    The Close Process
                  </Tag>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    Year End Accounting
                  </h3>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                Focuses on auditing the general ledger, reconciling bank and
                control accounts, resolving discrepancies, posting year-end
                adjusting journals, and establishing reliable opening balances
                for the new year.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 dark:border-zinc-700">
              <span className="text-xs text-teal-700 dark:text-teal-400 font-semibold">
                Ensures underlying records are 100% balanced, verified, and
                complete.
              </span>
            </div>
          </div>

          {/* Card 2: Business Financial Statements */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-800/90 border border-slate-200/90 dark:border-zinc-700/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <FileDoneOutlined className="text-xl" />
                </div>
                <div>
                  <Tag
                    color="blue"
                    className="font-semibold text-xs uppercase tracking-wider mb-1"
                  >
                    Structured Reporting
                  </Tag>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    Business Financial Statements
                  </h3>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                The formal reports compiled from those records: Profit and Loss
                statements, Balance Sheets, Cash-Flow statements, and notes
                prepared for owners, tax returns, bank lenders, or third
                parties.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 dark:border-zinc-700">
              <Link href="/services/business-tax/business-financial-statements">
                <Button
                  type="link"
                  className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1 h-auto text-xs sm:text-sm"
                  icon={<ArrowRightOutlined className="text-xs" />}
                  iconPlacement="end"
                >
                  See Business Financial Statements
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Coordinated Engagement Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-blue-50 dark:from-zinc-900 dark:via-zinc-850 dark:to-zinc-900 border border-emerald-200/80 dark:border-emerald-800/50 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              Combined Close &amp; Statement Preparation
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
              If you specifically need the preparation of reports for owners,
              tax work, lenders or other users, see our Business Financial
              Statements service. Where both services are required, the
              accounting close and statement preparation can be coordinated as
              one engagement.
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <Link href="/book-an-appointment">
              <Button
                type="primary"
                className="brand-btn-primary w-full md:w-auto text-xs sm:text-sm font-semibold rounded-xl"
                icon={<ArrowRightOutlined />}
                iconPlacement="end"
              >
                Coordinate Your Year-End
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
