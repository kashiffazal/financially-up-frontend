"use client";

import React from "react";
import { Tag } from "antd";
import {
  AuditOutlined,
  CheckCircleOutlined,
  InfoCircleOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";

/**
 * WhatIsBankReconciliation Component
 * Covers 'What is bank reconciliation?' and 'Why regular bank reconciliation matters'
 * from Page 8 of 4th Pillar Bookkeeping.docx.
 */
export default function WhatIsBankReconciliation() {
  const benefits = [
    "Confirm whether recorded receipts have reached the bank",
    "Identify payments that are missing from the accounting file",
    "Detect duplicate entries or duplicate bank-feed matches",
    "Separate transfers between business accounts from income or expenses",
    "Identify bank fees, interest or merchant settlement differences",
    "Highlight transactions that need an invoice, receipt or explanation",
    "Improve the reliability of cash and management reports",
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Part 1: What is bank reconciliation? */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-6">
            <Tag color="blue" className="brand-section-tag font-bold tracking-wider uppercase text-xs">
              <AuditOutlined className="mr-1.5" />
              Core Principle
            </Tag>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              What is bank reconciliation?
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              A bank reconciliation is the process of matching the balance and transactions recorded in bookkeeping software to the corresponding bank statement or bank feed. Differences are investigated so that the bookkeeping file reflects the actual activity of the business as accurately as possible.
            </p>

            <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              A bookkeeping bank reconciliation is not simply clicking &ldquo;reconcile&rdquo; in software. Transactions still need to be correctly identified, coded and matched. Unusual items, duplicates, transfers, merchant deposits, bank fees, refunds and personal transactions may require review before they are finalized.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="p-8 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200 dark:border-zinc-700 shadow-xs space-y-5">
              <div className="flex items-center gap-3 text-brand-primary dark:text-emerald-400">
                <FileDoneOutlined className="text-2xl" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Beyond One-Click Matching
                </h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                Automated bank rules can speed up reconciliations, but unverified rules often hide classification errors, misplaced personal drawings, and duplicate entries. A disciplined review protects ledger integrity.
              </p>
              <div className="pt-3 border-t border-slate-200 dark:border-zinc-700">
                <p className="text-xs text-slate-500 dark:text-zinc-400 italic">
                  &ldquo;A bookkeeping bank reconciliation is not simply clicking &lsquo;reconcile&rsquo; in software. Transactions still need to be correctly identified, coded and matched.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Part 2: Why regular bank reconciliation matters */}
        <div className="pt-12 border-t border-slate-200/80 dark:border-zinc-800">
          <div className="max-w-3xl mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Why regular bank reconciliation matters
            </h3>
            <p className="text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
              Reliable bookkeeping depends on complete transaction records. The ATO requires businesses to keep records that explain transactions and support tax reporting. Most business records must generally be kept for five years from when they are prepared or obtained, or when the relevant transaction is completed, whichever is later. Longer periods can apply. Regular reconciliation helps identify entries that do not agree with bank activity.
            </p>
          </div>

          {/* 7 Key Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 rounded-xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-200 dark:border-zinc-700/80 hover:border-emerald-400/60 transition-all"
              >
                <div className="shrink-0 w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                  {index + 1}
                </div>
                <p className="text-sm font-medium text-slate-800 dark:text-zinc-200 leading-snug pt-1">
                  {benefit}
                </p>
              </div>
            ))}
          </div>

          {/* ATO Record-Keeping Callout */}
          <div className="mt-8 p-6 rounded-xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/60 flex items-start gap-4">
            <InfoCircleOutlined className="text-xl text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <div className="text-sm text-amber-900 dark:text-amber-200">
              <span className="font-bold">ATO Compliance Note:</span> Most Australian business records must generally be retained for at least five years. Timely reconciliation prevents missing documentation and ensures transaction explanations are captured while fresh.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
