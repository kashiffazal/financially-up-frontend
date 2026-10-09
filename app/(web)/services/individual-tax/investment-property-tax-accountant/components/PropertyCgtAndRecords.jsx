"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  FileProtectOutlined,
  HistoryOutlined,
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";

/**
 * PropertyCgtAndRecords Component
 * ===============================
 * Section 8 & 9: Capital Gains Tax When Selling a Rental Property & Records to Keep.
 * Features 100% complete, verbatim content from Page 5 of the client document.
 */
export default function PropertyCgtAndRecords() {
  const recordChecklist = [
    "Property manager statements and rental records",
    "Expense invoices and receipts",
    "Loan and refinancing statements",
    "Purchase and sale contracts",
    "Settlement statements",
    "Depreciation or quantity surveyor schedules",
    "Records of repairs, renovations and improvements",
    "Evidence of private use or periods available for rent",
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Disposal &amp; Substantiation
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Capital Gains Tax and Record Keeping
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Essential Australian tax principles for property disposals,
            cost-base calculations, and statutory document retention periods.
          </p>
        </div>

        {/* 2 Equal Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-12">
          {/* Left Column: Capital Gains Tax */}
          <div className="flex flex-col justify-between bg-slate-50/70 dark:bg-zinc-800/60 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-700/80 shadow-xs">
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <SafetyCertificateOutlined className="text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Capital Gains Tax When Selling a Rental Property
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-zinc-400">
                    Disposal &amp; Cost-Base Calculations
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                <p>
                  Capital gains tax may apply when a rental property is sold.
                  The calculation can involve the purchase and sale contracts,
                  ownership dates, acquisition and disposal costs, capital
                  improvements, capital works deductions and other cost-base
                  adjustments.
                </p>
                <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 space-y-2">
                  <span className="font-bold text-slate-900 dark:text-white block text-xs uppercase tracking-wider">
                    Key Timing &amp; Concession Rules:
                  </span>
                  <p>
                    The timing of the CGT event is generally connected with the
                    sale contract rather than the settlement date. Main
                    residence rules, changes in use and eligibility for any CGT
                    discount can also affect the result.
                  </p>
                </div>
                <p>
                  Keeping complete records throughout ownership helps support
                  the final calculation and identify costs that may otherwise be
                  overlooked.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-zinc-700/60 flex items-center justify-between">
              <span className="text-2xs text-slate-500 dark:text-zinc-400">
                Detailed CGT calculation support available
              </span>
              <Link href="/services/individual-tax/capital-gains-tax">
                <Button
                  type="link"
                  className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1 h-auto text-xs"
                  icon={<ArrowRightOutlined className="text-xs" />}
                  iconPlacement="end"
                >
                  View Capital Gains Tax Service
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Records to Keep */}
          <div className="flex flex-col justify-between bg-slate-50/70 dark:bg-zinc-800/60 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-700/80 shadow-xs">
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/60 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <FileProtectOutlined className="text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Records to Keep for Your Rental Property
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-zinc-400">
                    Statutory Substantiation Checklist
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                Keep records that explain your rental income, expenses,
                ownership, loan use and capital costs. Relevant documents may
                include:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                {recordChecklist.map((rec, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/70 dark:border-zinc-700/70 text-xs text-slate-700 dark:text-zinc-200 font-medium"
                  >
                    <CheckCircleOutlined className="text-emerald-500 text-xs shrink-0" />
                    <span className="truncate">{rec}</span>
                  </div>
                ))}
              </div>

              <div className="p-3.5 rounded-2xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200/70 dark:border-blue-800/40 text-xs text-blue-950 dark:text-blue-200 leading-relaxed">
                <div className="flex items-center gap-2 font-bold mb-1">
                  <HistoryOutlined />
                  <span>Statutory Record Retention Requirements</span>
                </div>
                Rental income and expense records generally need to be kept for
                at least five years under the applicable record-keeping rules.
                Documents relevant to acquisition, ownership and CGT should
                generally be retained throughout ownership and for at least five
                years after disposal. Longer periods can apply in some
                circumstances.
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-zinc-700/60 text-2xs text-slate-500 dark:text-zinc-400">
              Digital copies and PDF statements acceptable to ATO
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
