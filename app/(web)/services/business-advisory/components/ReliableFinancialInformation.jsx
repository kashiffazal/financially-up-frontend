"use client";

import React from "react";
import { Tag, Button } from "antd";
import {
  SafetyCertificateOutlined,
  FileDoneOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  ExclamationCircleOutlined,
  AuditOutlined,
} from "@ant-design/icons";
import Link from "next/link";

/**
 * ReliableFinancialInformation Component
 * =======================================
 * Section 4: Business advisory starts with reliable financial information.
 *
 * Implements the EXACT content from '12th Pillar Business Advisory.docx'.
 *
 * Background: Clean White.
 */
export default function ReliableFinancialInformation() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <Tag color="green" className="brand-section-tag">
            Data Quality Foundation
          </Tag>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.2]">
            Business advisory starts with reliable financial information
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            Useful advice depends on reliable underlying records. If bookkeeping is incomplete, balance-sheet accounts are not reconciled or financial statements do not reflect the current position, the first step may be to improve the quality of the data before relying on it for decisions.
          </p>
        </div>

        {/* 2-Column Visual Progression: Data Integrity -> Strategic Advisory */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Data Integrity Checkpoints */}
          <div className="p-7 sm:p-8 rounded-2xl bg-slate-50/80 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-amber-50 dark:bg-amber-950/50 flex items-center justify-center">
                  <ExclamationCircleOutlined className="text-amber-600 dark:text-amber-400 text-xl" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-amber-600 dark:text-amber-400 tracking-wider uppercase">
                    Prerequisite Review
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0">
                    Underlying Financial Health Checks
                  </h3>
                </div>
              </div>

              <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed mb-6">
                Before modelling multi-year forecasts or making irreversible commercial commitments, our advisors examine whether your current numbers reflect operational reality:
              </p>

              <ul className="space-y-3.5 mb-6">
                <li className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                  <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 mt-0.5 shrink-0" />
                  <span>Checking that bank accounts, credit cards, and loans are fully reconciled</span>
                </li>
                <li className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                  <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 mt-0.5 shrink-0" />
                  <span>Verifying aged receivables and aged payables ledgers against actual balances</span>
                </li>
                <li className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                  <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 mt-0.5 shrink-0" />
                  <span>Confirming payroll, PAYG withholding, and superannuation balances are up to date</span>
                </li>
                <li className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                  <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 mt-0.5 shrink-0" />
                  <span>Identifying where data is robust enough for immediate advisory versus clean-up</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-200/80 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400 flex items-center justify-between">
              <span>Need accounting clean-up first?</span>
              <Link
                href="/services/bookkeeping"
                className="font-semibold text-teal-600 dark:text-teal-400 hover:underline inline-flex items-center gap-1"
              >
                Bookkeeping Services <ArrowRightOutlined className="text-[10px]" />
              </Link>
            </div>
          </div>

          {/* Card 2: How Financially Up Reviews & Prepares Data */}
          <div className="p-7 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-teal-200 dark:border-teal-800/50 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-teal-50 dark:bg-teal-950/50 flex items-center justify-center">
                  <AuditOutlined className="text-teal-600 dark:text-teal-400 text-xl" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-teal-600 dark:text-teal-400 tracking-wider uppercase">
                    Integrated Accounting & Advisory
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0">
                    Preparing Figures for Deeper Analysis
                  </h3>
                </div>
              </div>

              {/* Exact paragraph 2 from document */}
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed mb-6">
                Financially Up can review your existing reports and identify where the information is strong enough for advisory work and where additional accounting or bookkeeping is needed. Our business financial statements service can also support businesses that need properly prepared financial information before deeper analysis.
              </p>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/60 mb-6">
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 m-0 leading-relaxed font-normal">
                  Because our practice combines registered tax agents, CPA and IPA professionals, and business advisory specialists under one roof, we seamlessly bridge historical compliance records with future-focused strategic planning.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link href="/services/business-tax" className="shrink-0">
                <Button
                  size="large"
                  icon={<FileDoneOutlined />}
                  className="h-11 px-5 rounded-xl font-semibold border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-200 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-all"
                >
                  Financial Statements Service
                </Button>
              </Link>
              <Link href="/book-an-appointment" className="shrink-0">
                <Button
                  type="primary"
                  size="large"
                  icon={<ArrowRightOutlined />}
                  iconPlacement="end"
                  className="h-11 px-5 rounded-xl font-semibold shadow-md shadow-brand-primary/20 hover:scale-[1.02] active:scale-[0.99] transition-all"
                >
                  Book Initial Review
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
