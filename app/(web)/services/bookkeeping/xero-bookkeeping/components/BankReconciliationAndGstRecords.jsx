"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  AuditOutlined,
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  ClockCircleOutlined,
  FileProtectOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

/**
 * BankReconciliationAndGstRecords Component
 * =========================================
 * Section 3: Bank Reconciliation, Transaction Coding & GST Records in Xero
 * Features 100% complete, verbatim content from Page 2 of client docx.
 */
export default function BankReconciliationAndGstRecords() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50/60 to-white dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Data Integrity &amp; Compliance
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Bank Reconciliation, Coding &amp; GST Records
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Reliable bookkeeping goes beyond automated bank rules. It requires
            careful verification, disciplined account coding and strict
            adherence to Australian Taxation Office statutory record-keeping
            rules.
          </p>
        </div>

        {/* 2 Deep-Dive Pillars with Verbatim Copy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Pillar 1: Bank Reconciliation & Transaction Coding */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/70 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-5">
                <AuditOutlined className="text-sm" />
                <span>Reconciliation &amp; Classification</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Bank reconciliation and transaction coding
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                <p>
                  Reconciliation is a core part of maintaining reliable
                  bookkeeping records. It involves checking transactions in the
                  accounting file against bank, credit-card or other financial
                  records and resolving differences rather than simply accepting
                  every imported item.
                </p>
                <p>
                  Correct coding also matters. A transaction may need to be
                  classified to the appropriate income, expense, asset,
                  liability or equity account, and GST treatment may depend on
                  the nature of the transaction and the supporting evidence. If
                  the tax treatment is unclear, it should be reviewed rather
                  than guessed.
                </p>
              </div>

              {/* Callout box */}
              <div className="mt-6 p-4 rounded-xl bg-slate-50 dark:bg-zinc-950/70 border border-slate-200/80 dark:border-zinc-800 flex items-start gap-3">
                <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-base mt-0.5 shrink-0" />
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 font-normal">
                  We resolve unmatched entries, multi-line splits, and bank fee
                  variances systematically so your general ledger reflects
                  actual cash balances.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200/70 dark:border-zinc-800 flex items-center justify-between">
              <span className="text-xs text-slate-500 dark:text-zinc-400">
                Rigorous general ledger classification
              </span>
              <Link href="/services/bookkeeping/bank-reconciliation">
                <Button
                  type="link"
                  className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1 text-xs sm:text-sm"
                  icon={<ArrowRightOutlined className="text-xs" />}
                  iconPlacement="end"
                >
                  Bank Reconciliation Service
                </Button>
              </Link>
            </div>
          </div>

          {/* Pillar 2: Xero Bookkeeping & GST Records */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100/70 dark:bg-teal-950 text-teal-800 dark:text-teal-300 text-xs font-bold uppercase tracking-wider mb-5">
                <FileProtectOutlined className="text-sm" />
                <span>ATO Record-Keeping Compliance</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Xero bookkeeping and GST records
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                <p>
                  For GST-registered businesses, bookkeeping records should
                  support the sales, purchases, GST credits and other figures
                  reported through activity statements. The ATO generally
                  requires most business records to be kept for five years from
                  when they are prepared or obtained, or when the relevant
                  transaction is completed, whichever is later. Some records may
                  need to be kept for longer, depending on what they relate to.
                </p>
                <p>
                  Xero can be used to organise those records, but using software
                  does not replace the need for valid source documents or
                  correct GST treatment. Where a transaction&apos;s GST
                  treatment is unclear, it should be reviewed rather than
                  guessed. Where BAS preparation and lodgement are needed, these
                  can be coordinated with Financially Up&apos;s BAS and GST
                  lodgement service.
                </p>
              </div>

              {/* ATO 5-Year Requirement Highlight */}
              <div className="mt-6 p-4 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/70 dark:border-amber-900/40 flex items-start gap-3">
                <ClockCircleOutlined className="text-amber-600 dark:text-amber-400 text-base mt-0.5 shrink-0" />
                <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 font-normal">
                  <strong>ATO 5-Year Rule:</strong> Source tax invoices, bank
                  statements, and deduction receipts must be retained
                  electronically for a minimum of 5 years.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200/70 dark:border-zinc-800 flex items-center justify-between">
              <span className="text-xs text-slate-500 dark:text-zinc-400">
                Coordinated BAS preparation
              </span>
              <Link href="/services/bas-payroll">
                <Button
                  type="link"
                  className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1 text-xs sm:text-sm"
                  icon={<ArrowRightOutlined className="text-xs" />}
                  iconPlacement="end"
                >
                  BAS &amp; GST Lodgement Service
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
