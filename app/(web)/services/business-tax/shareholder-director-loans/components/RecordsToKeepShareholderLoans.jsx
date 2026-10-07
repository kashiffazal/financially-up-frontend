"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  CheckCircleFilled,
  ClockCircleOutlined,
  FileProtectOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * RecordsToKeepShareholderLoans Component
 * =======================================
 * Section: What records should you keep?
 * Verbatim text from Page 10 of client docx.
 * Features 7 verbatim records to keep, plus the 7-year statutory retention rule
 * and rules for assets, losses, and ongoing loan agreements.
 */
export default function RecordsToKeepShareholderLoans() {
  const records = [
    {
      title: "Company bank statements and transaction details",
      desc: "Original electronic bank statements and transaction logs evidencing date, amount, and payee of all funds movements.",
    },
    {
      title: "General ledger and shareholder/director loan-account reports",
      desc: "Detailed accounting software ledger reports showing debits, credits, and opening and closing running balances.",
    },
    {
      title: "Written loan agreements where applicable",
      desc: "Executed complying Division 7A loan agreements specifying loan terms, benchmark interest rates, and repayment dates.",
    },
    {
      title: "Details of repayments, interest and journal entries",
      desc: "Evidence of principal repayments made before June 30, interest calculations, and corresponding ledger journal entries.",
    },
    {
      title: "Dividend, salary, reimbursement or expense records connected with the account",
      desc: "Director resolutions, dividend distribution statements, PAYG salary pay slips, and verified business expense receipts.",
    },
    {
      title: "Prior-year company tax returns and financial statements",
      desc: "Historical financial statements and tax return lodgments to substantiate the opening loan balance brought forward.",
    },
    {
      title: "Correspondence or calculations relating to Division 7A",
      desc: "Minimum yearly repayment workpapers, ATO benchmark interest rate schedules, and professional accounting correspondence.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Substantiation & Documentation
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What records should you keep?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Good records make it easier to establish what actually happened and reduce the risk of relying on year-end adjustments without supporting evidence.
          </p>
        </div>

        {/* 7 Records Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12">
          {records.map((item, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm flex items-start gap-4"
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

        {/* Verbatim Statutory 7-Year Retention Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-teal-500/10 via-white to-slate-50 dark:from-teal-950/20 dark:via-zinc-900 dark:to-zinc-950 border border-teal-500/20 dark:border-teal-500/30 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <ClockCircleOutlined className="text-teal-600 dark:text-teal-400" />
              Statutory Retention Periods (7+ Years)
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Company financial records generally need to be retained for at least seven years. Tax records may have different retention periods, and records connected with assets, losses or ongoing loan arrangements may need to be kept for longer.
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
                Organise Loan Records
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
