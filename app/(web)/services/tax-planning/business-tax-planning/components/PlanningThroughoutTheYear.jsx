"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  CalendarOutlined,
  ClockCircleOutlined,
  AlertOutlined,
  CheckOutlined,
  ArrowRightOutlined,
  FileProtectOutlined,
} from "@ant-design/icons";

/**
 * PlanningThroughoutTheYear Component
 * ===================================
 * Section 3: Planning Throughout the Financial Year.
 * Verbatim text from Page 2 of '3rd Pillar Tax Planning & Advisory Final Content Pages 1-12.docx'.
 *
 * Explains why tax planning is a continuous, year-round discipline, contrasting
 * ongoing compliance (PAYG, BAS, GST) with forward-looking strategic modeling.
 */
export default function PlanningThroughoutTheYear() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Year-Round Timing
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Planning Throughout the Financial Year
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Tax planning for business owners is not limited to June. Reviewing
            the position during the year can help monitor taxable income,
            maintain records, forecast payments and identify issues early.
          </p>
        </div>

        {/* 2 Comparative Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Column 1: Ongoing Obligations & Cash Flow Integration */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center mb-6">
                <CalendarOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-4">
                PAYG Instalments, GST and Cash Flow
              </h3>

              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-6">
                For businesses in the PAYG instalments system, instalments are
                intended to contribute towards expected income tax during the
                year. GST and BAS obligations may also affect cash flow where
                the business is registered or otherwise required to report.
                Planning does not replace these compliance obligations; it helps
                the business understand how they fit into the broader financial
                position.
              </p>

              <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-zinc-800">
                <div className="flex items-start gap-2.5">
                  <CheckOutlined className="text-brand-primary dark:text-emerald-400 text-sm mt-1 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 font-normal">
                    Align quarterly PAYG instalments with actual fluctuating
                    earnings.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckOutlined className="text-brand-primary dark:text-emerald-400 text-sm mt-1 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 font-normal">
                    Forecast GST net liabilities prior to reporting period
                    deadlines.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckOutlined className="text-brand-primary dark:text-emerald-400 text-sm mt-1 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 font-normal">
                    Maintain adequate cash liquidity for statutory obligations.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: When Compliance vs Planning is the Priority */}
          <div className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/60 border border-teal-100 dark:border-teal-800/40 flex items-center justify-center mb-6">
                <FileProtectOutlined className="text-xl text-teal-600 dark:text-teal-400" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-4">
                Compliance vs Forward Planning
              </h3>

              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-6">
                Where the main need is lodgment and ongoing reporting rather
                than planning, see our Business Tax Compliance service.
              </p>

              <div className="rounded-xl bg-white dark:bg-zinc-900 p-5 border border-slate-200/80 dark:border-zinc-800 space-y-3 mb-6">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                  <ClockCircleOutlined className="text-brand-primary" />
                  <span>Key Distinction</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  <strong>Tax Planning:</strong> Proactive modeling of decisions
                  before year end to preserve options.
                  <br />
                  <strong>Tax Compliance:</strong> Accurate statutory reporting
                  and submission of historical transactions to the ATO.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200/80 dark:border-zinc-800">
              <Link href="/services/business-tax/business-tax-compliance">
                <Button
                  type="primary"
                  size="large"
                  icon={<ArrowRightOutlined />}
                  iconPlacement="end"
                  className="w-full rounded-xl font-bold bg-brand-primary dark:bg-emerald-500 text-white hover:bg-brand-primary/90 h-11"
                >
                  Explore Business Tax Compliance
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
