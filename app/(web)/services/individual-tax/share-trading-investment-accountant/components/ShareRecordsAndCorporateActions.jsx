"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  FileProtectOutlined,
  BranchesOutlined,
  HistoryOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

/**
 * ShareRecordsAndCorporateActions Component
 * =========================================
 * Section 5: Records for Shares and Investments & Corporate Actions.
 * Features 100% complete, verbatim content from Page 7 of the client document.
 */
export default function ShareRecordsAndCorporateActions() {
  const corporateActions = [
    "Share splits and consolidations",
    "Mergers and corporate takeovers",
    "Demergers and demerger relief rollover rules",
    "Rights issues and retail entitlement offers",
    "Bonus shares and non-assessable share allocations",
    "Dividend Reinvestment Plans (DRPs)",
  ];

  const coreRecords = [
    "Contract notes or transaction confirmations showing acquisition and disposal dates",
    "Trade quantities, execution prices and brokerage fees paid",
    "Dividend statements showing cash payments and franking credits",
    "Distribution and annual tax statements for ETFs and managed funds",
    "Foreign-income records, withholding tax slips and overseas broker statements",
    "Details of each investment parcel and individual purchase lot",
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Substantiation &amp; Events
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Records for Shares, Investments and Corporate Actions
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Corporate actions and dividend reinvestments continually reshape
            share portfolio cost bases. Diligent record keeping protects your
            future tax position.
          </p>
        </div>

        {/* 2-Column Structured Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-12">
          {/* Left Column: Required Records */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <FileProtectOutlined className="text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Records for Shares and Investments
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-zinc-400">
                    Statutory Documentation Checklist
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                Keep contract notes or transaction confirmations showing
                acquisition and disposal dates, quantities, prices and
                brokerage. Also retain dividend statements, distribution and
                annual tax statements, foreign-income records where relevant and
                details of each investment parcel.
              </p>

              <div className="space-y-2 mb-6">
                {coreRecords.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-2 rounded-xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-100 dark:border-zinc-700/50 text-xs text-slate-700 dark:text-zinc-200 font-medium"
                  >
                    <CheckCircleOutlined className="text-emerald-500 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-zinc-800 flex items-start gap-2.5 text-xs text-slate-500 dark:text-zinc-400">
              <HistoryOutlined className="text-base text-brand-primary dark:text-emerald-400 shrink-0 mt-0.5" />
              <span>
                Records relevant to a CGT calculation should generally be kept
                for at least five years after the relevant CGT event. Longer
                retention may be required where records are needed for holdings
                that have not yet been disposed of.
              </span>
            </div>
          </div>

          {/* Right Column: Corporate Actions */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800/60 flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <BranchesOutlined className="text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Corporate Actions and DRPs
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-zinc-400">
                    Cost-Base Recalculation Triggers
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                Corporate actions such as share splits, mergers, takeovers,
                demergers, rights issues, bonus shares and dividend reinvestment
                plans can affect the number, acquisition date or cost base of
                holdings.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                {corporateActions.map((action, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-purple-50/50 dark:bg-purple-950/20 border border-purple-200/60 dark:border-purple-900/40 text-xs text-purple-950 dark:text-purple-200 font-medium"
                  >
                    {action}
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/40 text-xs text-amber-950 dark:text-amber-200 leading-relaxed">
                <span className="font-bold block mb-1">
                  Dividend Reinvestment Plan (DRP) Rule:
                </span>
                Under a dividend reinvestment plan, each allocation should
                generally be recorded as a separate acquisition with its own
                purchase price, date and cost base.
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-zinc-800 flex items-center justify-between">
              <span className="text-2xs text-slate-400 dark:text-zinc-500">
                DRP history reconstructed from registry records
              </span>
              <Link href="/book-an-appointment">
                <Button
                  type="link"
                  className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1 h-auto text-xs"
                  icon={<ArrowRightOutlined className="text-xs" />}
                  iconPlacement="end"
                >
                  Book Record Reconciliation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
