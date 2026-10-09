"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  HomeOutlined,
  DollarOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

/**
 * ForeignRentalDividendsAndInterest Component
 * ===========================================
 * Section 4: Foreign rental income, dividends and interest.
 * Features 100% complete, verbatim content from Page 9 of the client document.
 */
export default function ForeignRentalDividendsAndInterest() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Passive Investment Income
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Foreign Rental Income, Dividends and Interest
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Australian tax residents must report gross offshore passive receipts
            in Australian dollars, claiming allowable deductions and reconciling
            foreign withholding certificates.
          </p>
        </div>

        {/* 2-Column Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-12">
          {/* Card 1: Foreign Rental Income */}
          <div className="flex flex-col justify-between bg-slate-50/70 dark:bg-zinc-800/60 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-700/80 shadow-xs">
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <HomeOutlined className="text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Foreign Rental Income
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-zinc-400">
                    Gross Rent &amp; Australian Deduction Rules
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                <p>
                  An Australian resident generally needs to report gross rent
                  from an overseas property and may claim eligible expenses
                  under Australian rules. Interest, agent fees, repairs and
                  other costs require the same connection and substantiation
                  principles that apply to rental deductions generally. Private
                  use, below-market rent and capital expenditure can change the
                  treatment.
                </p>

                <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-emerald-100 dark:border-zinc-700 space-y-2">
                  <span className="font-bold text-slate-900 dark:text-white block text-xs uppercase tracking-wider">
                    Conversions &amp; Disposals:
                  </span>
                  <p>
                    Foreign rental income tax reporting also requires
                    Australian-dollar conversion and evidence of foreign tax
                    paid. A sale or change in use of the property can raise
                    separate CGT issues.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-zinc-700/60 flex items-center justify-between">
              <span className="text-2xs text-slate-500 dark:text-zinc-400">
                Disposal guidance available
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

          {/* Card 2: Foreign Dividends and Interest */}
          <div className="flex flex-col justify-between bg-slate-50/70 dark:bg-zinc-800/60 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-700/80 shadow-xs">
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/60 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <DollarOutlined className="text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Foreign Dividends and Interest
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-zinc-400">
                    Gross Pre-Withholding Reporting
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                <p>
                  Australian residents generally report foreign dividends and
                  interest in Australian dollars. Reportable income is generally
                  the gross amount before foreign withholding tax, not only the
                  net cash received. Dividend, interest and withholding
                  statements should be checked rather than relying only on
                  Australian pre-fill information.
                </p>

                <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-blue-100 dark:border-zinc-700 space-y-2">
                  <span className="font-bold text-slate-900 dark:text-white block text-xs uppercase tracking-wider">
                    Offshore Entities &amp; Accounts:
                  </span>
                  <p>
                    Foreign shares, managed investments or bank accounts may
                    also produce gains, distributions or other amounts requiring
                    different treatment. This page remains focused on
                    foreign-income reporting rather than duplicating specialist
                    share, crypto or general CGT guidance.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-zinc-700/60 flex items-center justify-between">
              <span className="text-2xs text-slate-500 dark:text-zinc-400">
                US 1042-S, UK P60/R40 statements handled
              </span>
              <Link href="/book-an-appointment">
                <Button
                  type="link"
                  className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1 h-auto text-xs"
                  icon={<ArrowRightOutlined className="text-xs" />}
                  iconPlacement="end"
                >
                  Book Statement Audit
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
