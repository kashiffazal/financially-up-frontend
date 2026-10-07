"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  AlertOutlined,
  ExclamationCircleOutlined,
  ApartmentOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * CommonTaxComplianceIssues Component
 * ===================================
 * Section: Common Business Tax Compliance Issues
 * Features 100% complete, verbatim content from Page 8 of client docx.
 * 7 Common compliance breakdowns and dedicated Division 7A review alerts.
 */
export default function CommonTaxComplianceIssues() {
  const commonIssues = [
    {
      title: "Fragmented Compliance Systems",
      desc: "Compliance fragmented across disconnected bookkeeping, BAS agents, payroll files, and annual tax returns without a unified strategy.",
    },
    {
      title: "Unreconciled GST Accounts",
      desc: "Discrepancies between general ledger GST collected/paid accounts and actual BAS figures reported to the ATO.",
    },
    {
      title: "Missed or Overdue Lodgments",
      desc: "Backlogs of unfiled annual income tax returns or activity statements creating ATO warning notices or potential penalties.",
    },
    {
      title: "Changes in Business Structure",
      desc: "Transitions between sole trader, partnership, company, or trust structures without properly updating ATO registrations.",
    },
    {
      title: "Mixed Business and Private Transactions",
      desc: "Personal living expenses paid through business accounts or private funds introduced without correct ledger categorization.",
    },
    {
      title: "Unexplained Director / Shareholder Balances",
      desc: "Drawings or unrecorded loans that fail to comply with private company tax integrity rules.",
    },
    {
      title: "Miscoded Assets & Return Mismatches",
      desc: "Capital assets expensed incorrectly as repairs, or accounting software balances that fail to reconcile with prior lodged tax returns.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="red" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Risk &amp; Diagnostic Review
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Common Business Tax Compliance Issues
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Businesses often seek help when compliance has become fragmented across bookkeeping, BAS, payroll and annual tax work. Common issues include unreconciled GST accounts, missed lodgments, changes in business structure, mixed business and private transactions, unexplained director or shareholder balances, asset purchases coded incorrectly, or accounting records that do not match prior returns.
          </p>
        </div>

        {/* 7 Issues Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {commonIssues.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <AlertOutlined className="text-amber-600 dark:text-amber-400 text-base" />
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Division 7A & Advisory Scoping Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-amber-50 via-rose-50/40 to-white dark:from-zinc-900 dark:via-zinc-850 dark:to-zinc-900 border border-amber-200/80 dark:border-amber-800/50 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <ExclamationCircleOutlined className="text-amber-600 dark:text-amber-400" />
              Issues Requiring More Than Routine Compliance
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
              Some issues require more than routine compliance. For example, private-company payments or loans involving shareholders or associates may need specific Division 7A review. Tax planning, restructures, disputes and specialist advice can also be scoped separately where required.
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <Link href="/services/business-tax/division-7a">
              <Button
                type="primary"
                className="brand-btn-primary w-full md:w-auto text-xs sm:text-sm font-semibold rounded-xl"
                icon={<ArrowRightOutlined />}
                iconPosition="end"
              >
                Review Division 7A Rules
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
