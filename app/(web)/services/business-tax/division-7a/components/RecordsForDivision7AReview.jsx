"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  CheckCircleFilled,
  FileTextOutlined,
  HistoryOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * RecordsForDivision7AReview Component
 * ====================================
 * Section: What Information Is Useful for a Division 7A Review?
 * Verbatim checklist of 10 key records from Page 9 of client docx.
 * Concludes with verbatim note on complete transaction history and timing.
 */
export default function RecordsForDivision7AReview() {
  const records = [
    {
      title: "General ledger and shareholder/director loan accounts",
      desc: "Detailed ledgers showing all debits, credits, and running journal balances for shareholder and director accounts.",
    },
    {
      title: "Bank statements and transaction details",
      desc: "Primary source bank records verifying cash movements, dates, and account details for advances and drawings.",
    },
    {
      title: "Company tax returns and prior-year financial statements",
      desc: "Prior-year company tax lodgments, balance sheets, and notes to establish opening balances and prior treatments.",
    },
    {
      title: "Dividend declarations and franking information where relevant",
      desc: "Company minutes, distribution resolutions, and franking account records if dividends were paid to clear loan balances.",
    },
    {
      title: "Written loan agreements",
      desc: "Formal Division 7A complying loan contracts executed prior to the relevant company lodgment day.",
    },
    {
      title: "Repayment schedules and evidence of repayments",
      desc: "Documentation of principal and interest repayments made before June 30 of each subsequent income year.",
    },
    {
      title: "Interest calculations",
      desc: "Worksheets detailing interest charged using the official ATO benchmark rate across the relevant financial year.",
    },
    {
      title: "Details of payments or benefits provided to shareholders or associates",
      desc: "Invoices, expense records, or asset usage details where private company funds or property were utilized.",
    },
    {
      title: "Trust distribution information where a trust is involved",
      desc: "Trust deeds, distribution resolutions, beneficiary statements, and unpaid present entitlement (UPE) records.",
    },
    {
      title: "Loan, asset or security documents relevant to the arrangement",
      desc: "Mortgages, caveats, secured loan agreements, or refinancing contracts applicable to 25-year secured terms.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50/50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Review Preparation Checklist
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Information Is Useful for a Division 7A Review?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Depending on the matter, useful records can include:
          </p>
        </div>

        {/* 10 Records Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12">
          {records.map((item, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm flex items-start gap-4"
            >
              <div className="w-8 h-8 rounded-lg bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircleFilled className="text-teal-600 dark:text-teal-400 text-sm" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Concluding Alert Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-teal-500/10 via-white to-slate-50 dark:from-teal-950/20 dark:via-zinc-900 dark:to-zinc-950 border border-teal-500/20 dark:border-teal-500/30 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <HistoryOutlined className="text-teal-600 dark:text-teal-400" />
              Transaction History and Timing
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              A complete transaction history is important because the timing of advances, repayments and lodgment can affect the analysis.
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <Link href="/book-an-appointment">
              <Button
                type="primary"
                className="brand-btn-primary w-full md:w-auto text-xs sm:text-sm font-semibold rounded-xl"
                icon={<ArrowRightOutlined />}
                iconPosition="end"
              >
                Book Review Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
