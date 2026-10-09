"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  ClearOutlined,
  AuditOutlined,
  FileSearchOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  HistoryOutlined,
} from "@ant-design/icons";

/**
 * WhatDoesCleanupInvolve Component
 * ================================
 * Section 1: What Does Bookkeeping Cleanup Involve?
 * Features 100% complete, verbatim content from Page 5 of client docx.
 */
export default function WhatDoesCleanupInvolve() {
  const scopeHighlights = [
    {
      icon: (
        <ClearOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />
      ),
      title: "Evidence-Based Corrections",
      description:
        "Reviewing the ledger for bookkeeping errors, incomplete reconciliations, and balances that fail to reflect substantiated source records.",
    },
    {
      icon: (
        <AuditOutlined className="text-xl text-teal-600 dark:text-teal-400" />
      ),
      title: "No Unsupported Adjustments",
      description:
        "The purpose is never to rewrite history arbitrarily, but to substantiate entries with evidence and isolate items requiring accounting advice.",
    },
    {
      icon: (
        <FileSearchOutlined className="text-xl text-blue-600 dark:text-blue-400" />
      ),
      title: "Transaction & Account-Level Review",
      description:
        "Performing granular transaction-level reallocations alongside macro account-level reconciliations across affected financial periods.",
    },
    {
      icon: (
        <HistoryOutlined className="text-xl text-amber-600 dark:text-amber-400" />
      ),
      title: "Prior-Period Compliance Safeguard",
      description:
        "Evaluating whether historical entries have already been lodged on prior BAS or tax returns before making structural ledger adjustments.",
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
            Service Definition &amp; Principles
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Does Bookkeeping Cleanup Involve?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Bookkeeping cleanup services review the ledger for bookkeeping
            errors, incomplete reconciliations and balances that do not appear
            to reflect the underlying records. The purpose is not to rewrite
            history or make unsupported adjustments. It is to work from the
            available evidence, correct items that can be substantiated and
            identify issues that need further information or accounting review.
          </p>
          <p className="mt-3 text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
            A messy books cleanup may involve transaction-level corrections as
            well as account-level reconciliation. The exact scope depends on the
            size of the file, how long the issues have existed and whether prior
            periods have already been used for tax or financial reporting.
          </p>
        </div>

        {/* 4 Scope Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {scopeHighlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:border-emerald-400/60 transition-all duration-300 flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div>
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

        {/* Action Callout */}
        <div className="p-6 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-900/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-xl shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-200 font-medium">
              We diagnose your ledger before altering accounts, ensuring every
              adjustment is substantiated, compliant, and transparent.
            </p>
          </div>
          <Link href="/book-an-appointment">
            <Button
              type="primary"
              size="middle"
              className="font-bold shrink-0"
              icon={<ArrowRightOutlined />}
              iconPlacement="end"
            >
              Request a File Review
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
