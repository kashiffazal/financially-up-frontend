"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  WarningOutlined,
  ExclamationCircleOutlined,
  CloseCircleFilled,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * CommonShareholderLoanIssues Component
 * =====================================
 * Section: Common shareholder and director loan issues
 * Verbatim copy from Page 10 of client docx.
 * Features 8 verbatim issues and the critical rule:
 * "Simply relabeling a transaction in the accounts does not necessarily change its tax character."
 */
export default function CommonShareholderLoanIssues() {
  const issues = [
    {
      title: "Private expenses paid from the company bank account and posted to a director loan account",
      desc: "Personal bills, travel, or living expenses paid via company debit cards and posted to director drawings without formal review.",
    },
    {
      title: "Cash withdrawals or drawings that have not been reconciled",
      desc: "Unclassified bank withdrawals or round-figure transfers out of operating accounts that lack source documentation.",
    },
    {
      title: "Loan balances carried forward without a current agreement",
      desc: "Historical loan amounts continuing from prior financial years without an active complying loan agreement in place.",
    },
    {
      title: "Minimum yearly repayments that may have been missed",
      desc: "Failing to make the required principal and interest repayment by 30 June, triggering deemed dividend risks.",
    },
    {
      title: "Repayments that need to be traced through bank records",
      desc: "Journal entries or purported repayments that lack corroborating bank cash movements or that conflict with anti-avoidance rules.",
    },
    {
      title: "Multiple loans involving shareholders, directors, associates or related trusts",
      desc: "Complex interconnected balances across family groups, related companies, trusts, and individual shareholder accounts.",
    },
    {
      title: "Unclear treatment of interest, dividends, wages or reimbursements",
      desc: "Ambiguity over whether transfers represent director remuneration, franked dividends, genuine expense reimbursements, or loans.",
    },
    {
      title: "A large year-end loan balance identified during company tax-return preparation",
      desc: "Unresolved debit loan balances discovered late during annual company return preparation approaching statutory lodgment dates.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50/50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="orange" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Tax Integrity Pitfalls
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Common shareholder and director loan issues
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Private company loan accounts frequently accumulate transactions that trigger Australian tax compliance risks if not reviewed early.
          </p>
        </div>

        {/* 8 Issues Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12">
          {issues.map((item, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 hover:border-orange-400 dark:hover:border-orange-500/50 transition-all duration-300 shadow-sm flex items-start gap-4"
            >
              <div className="w-8 h-8 rounded-lg bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-800 flex items-center justify-center shrink-0 mt-0.5">
                <CloseCircleFilled className="text-orange-500 text-sm" />
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

        {/* Verbatim Critical Box: Relabeling Transactions Does Not Change Tax Character */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-amber-500/10 via-white to-slate-50 dark:from-amber-950/20 dark:via-zinc-900 dark:to-zinc-950 border border-amber-500/20 dark:border-amber-500/30 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <ExclamationCircleOutlined className="text-amber-600 dark:text-amber-400" />
              Substance Over Bookkeeping Labels
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              These issues should be reviewed in context. Simply relabeling a transaction in the accounts does not necessarily change its tax character.
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
                Book a Loan Review
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
