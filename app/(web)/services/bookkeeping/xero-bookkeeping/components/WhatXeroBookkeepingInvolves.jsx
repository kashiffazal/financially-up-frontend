"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  BankOutlined,
  CheckCircleOutlined,
  SyncOutlined,
  FileTextOutlined,
  AuditOutlined,
  ArrowRightOutlined,
  FolderOpenOutlined,
  CalculatorOutlined,
} from "@ant-design/icons";

/**
 * WhatXeroBookkeepingInvolves Component
 * =====================================
 * Section 1: What Does Xero Bookkeeping Involve?
 * Features 100% complete, verbatim content from Page 2 of client docx.
 */
export default function WhatXeroBookkeepingInvolves() {
  const scopeHighlights = [
    {
      icon: (
        <BankOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />
      ),
      title: "Bank & Credit-Card Reconciliation",
      description:
        "Matching electronic bank feeds against statements, investigating variances, and ensuring recorded transactions align with actual cash movements.",
    },
    {
      icon: (
        <CheckCircleOutlined className="text-xl text-teal-600 dark:text-teal-400" />
      ),
      title: "Consistent Transaction Coding",
      description:
        "Classifying income and expense lines to correct chart-of-accounts codes with accurate GST tax treatments rather than automatic guessing.",
    },
    {
      icon: (
        <AuditOutlined className="text-xl text-blue-600 dark:text-blue-400" />
      ),
      title: "Review of Account Balances",
      description:
        "Monitoring suspense lines, loan balances, clearing accounts, and debtor/creditor ledgers to maintain accounting integrity across periods.",
    },
    {
      icon: (
        <SyncOutlined className="text-xl text-amber-600 dark:text-amber-400" />
      ),
      title: "Bookkeeping Clean-Up",
      description:
        "Identifying and resolving historical errors, duplicate transactions, stale unreconciled items, and out-of-balance opening accounts.",
    },
    {
      icon: (
        <FolderOpenOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />
      ),
      title: "Source-Document Organisation",
      description:
        "Attaching invoices, receipts, and supporting paperwork directly to Xero transactions to satisfy statutory record-keeping rules.",
    },
    {
      icon: (
        <CalculatorOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />
      ),
      title: "Preparation for BAS & Year-End Tax",
      description:
        "Delivering a fully reconciled, clean Xero ledger ready for seamless preparation and lodgement of activity statements and tax returns.",
    },
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
            Scope &amp; Process
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What does Xero bookkeeping involve?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Xero bookkeeping is the process of maintaining business records
            within the Xero accounting platform. The aim is to keep transactions
            coded consistently, accounts reconciled and supporting information
            organised so the file reflects the business activity as accurately
            as practical.
          </p>
          <p className="mt-3 text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
            Depending on scope, Financially Up can assist with bank
            reconciliation, transaction coding, review of account balances,
            bookkeeping clean-up, source-document organisation and preparation
            of the Xero file for BAS, tax or financial reporting work.
          </p>
        </div>

        {/* 6 Key Scope Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {scopeHighlights.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between bg-white dark:bg-zinc-900 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-lg hover:border-emerald-400/60 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest">
                    Scope 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="p-6 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-900/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-xl shrink-0" />
            <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-200 font-medium">
              Need a clean, verified Xero ledger for your business? We tailor
              the ongoing routine to your transaction volume.
            </p>
          </div>
          <Link href="/book-an-appointment">
            <Button
              type="primary"
              size="middle"
              icon={<ArrowRightOutlined />}
              iconPlacement="end"
              className="font-bold shrink-0"
            >
              Book an Appointment
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
