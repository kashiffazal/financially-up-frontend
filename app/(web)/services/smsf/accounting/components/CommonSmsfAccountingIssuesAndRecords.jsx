"use client";

import React from "react";
import { Tag } from "antd";
import {
  WarningOutlined,
  FolderOpenOutlined,
  CheckCircleOutlined,
  FileSearchOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

/**
 * CommonSmsfAccountingIssuesAndRecords Component
 * ==============================================
 * Implements verbatim SEO content from Page 2 of 9th Pillar SMSF.docx:
 * - Common SMSF accounting issues
 * - Records to provide for SMSF annual accounts
 */
export default function CommonSmsfAccountingIssuesAndRecords() {
  const commonIssues = [
    {
      title: "Unreconciled Bank Accounts",
      desc: "Delays occur when primary bank accounts or cash-broker accounts do not match financial records.",
    },
    {
      title: "Missing Investment Statements",
      desc: "Gaps in platform reports, broker contract notes, or annual distribution tax statements.",
    },
    {
      title: "Mixed Personal & Fund Transactions",
      desc: "Inadvertent mixing of trustee personal finances with fund assets requiring immediate rectification.",
    },
    {
      title: "Unidentified Member Activity",
      desc: "Contributions or drawdowns not clearly classified between members or tax components.",
    },
    {
      title: "Unsupported Asset Values",
      desc: "Year-end reporting figures that lack objective, verifiable market valuation evidence for audit.",
    },
    {
      title: "Property & Related-Party Concerns",
      desc: "Private use concerns, tenant dealings, or related-party transactions requiring statutory review.",
    },
  ];

  const trusteeRecordsChecklist = [
    "Complete annual SMSF bank statements and cash management account reports",
    "Investment-platform annual tax statements, broker buy/sell contract notes, and dividend statements",
    "Trust distribution tax statements and annual dividend summaries",
    "Property records including rental statements, leases, council rates, insurance, and expense invoices",
    "Member contribution details, employer SG records, and rollover documentation",
    "Member benefit payment receipts, pension commencement minutes, and drawdown schedules",
    "Invoices for fund accounting, audit, administration, and investment-related expenses",
    "Signed trustee minutes, resolutions, and investment strategy documentation for the year",
    "For new clients: Prior-year financial statements and previous SMSF annual return to establish opening balances",
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="orange" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Risk Mitigation & Record Keeping
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Common SMSF accounting issues
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Annual work can be delayed when bank accounts do not reconcile, investment statements are missing, personal and fund transactions are mixed, member activity is not clearly identified or asset values are unsupported. Property expenses, private use concerns, related-party transactions and unusual transfers can also require additional review.
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Not every issue is an accounting correction. Some transactions can raise superannuation-law, tax, legal or financial-advice questions. Where a matter falls outside routine accounting and tax preparation, it should be separately reviewed rather than assumed to be resolved by changing the bookkeeping entry.
          </p>
        </div>

        {/* 6 Common Issues Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {commonIssues.map((issue, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/40"
            >
              <div className="flex items-center gap-2 mb-2 text-amber-700 dark:text-amber-400 font-bold text-sm">
                <ExclamationCircleOutlined />
                <span>{issue.title}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                {issue.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Records to Provide Section */}
        <div className="bg-slate-50 dark:bg-zinc-900 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-zinc-800">
          <div className="max-w-3xl mb-8">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/40 flex items-center justify-center mb-3">
              <FolderOpenOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Records to provide for SMSF annual accounts
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
              The exact document list depends on the fund, but trustees can usually speed up the process by providing complete annual bank statements, investment-platform and broker reports, dividend and distribution information, property records, contribution and rollover information, member benefit documents, expense invoices and trustee minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {trusteeRecordsChecklist.map((rec, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-zinc-950 border border-slate-200/70 dark:border-zinc-800 text-xs sm:text-sm text-slate-700 dark:text-zinc-300"
              >
                <CheckCircleOutlined className="text-emerald-500 text-base mt-0.5 shrink-0" />
                <span>{rec}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-200 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400">
            Where Financially Up has access to an existing accounting file, we can identify gaps during the year-end review. For new clients, prior-year financial statements and the previous SMSF annual return can also help establish opening balances and accounting history.
          </div>
        </div>
      </div>
    </section>
  );
}
