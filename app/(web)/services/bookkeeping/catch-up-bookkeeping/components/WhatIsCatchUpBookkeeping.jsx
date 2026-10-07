"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  HistoryOutlined,
  CheckCircleOutlined,
  FileSearchOutlined,
  SyncOutlined,
  ClearOutlined,
  ArrowRightOutlined,
  BankOutlined,
  AuditOutlined,
} from "@ant-design/icons";

/**
 * WhatIsCatchUpBookkeeping Component
 * ==================================
 * Section 1: What Is Catch Up Bookkeeping?
 * Features 100% complete, verbatim content from Page 4 of client docx.
 */
export default function WhatIsCatchUpBookkeeping() {
  const scopeHighlights = [
    {
      icon: <HistoryOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Systematic Historical Processing",
      description:
        "Importing and entering transactions across missed months rather than rushing through entries without evidentiary backing.",
    },
    {
      icon: <BankOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Sequential Bank Reconciliation",
      description:
        "Matching statements chronological period by period to eliminate discrepancies and ensure cash ledgers balance to external feeds.",
    },
    {
      icon: <FileSearchOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Investigating Gaps & Differences",
      description:
        "Isolating unexplained variances, missing bills, and uncategorized entries so the ledger reflects true commercial activity.",
    },
    {
      icon: <ClearOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Catch-Up vs. Clean-Up Clarity",
      description:
        "If transactions are already recorded but contain duplicate lines or coding errors, our Clean-Up service provides diagnostic repairs.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Service Definition
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Is Catch Up Bookkeeping?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Catch up bookkeeping is the process of bringing incomplete or overdue business records up to date. It is not simply entering transactions quickly. A proper bookkeeping catch up service works through the available source records, reconciles accounts and investigates differences so the ledger reflects the business as accurately as the available information allows.
          </p>
          <p className="mt-3 text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
            The scope depends on the condition of the books. Some businesses mainly need missing months entered and reconciled. Others need a broader review because transactions have been duplicated, uncategorized or posted to the wrong accounts. If the records are already entered but unreliable, our dedicated Bookkeeping Clean-Up service may be the more appropriate starting point.
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

        {/* Diagnostic Routing Strip */}
        <div className="p-6 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/70 dark:border-amber-900/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <ClearOutlined className="text-amber-600 dark:text-amber-400 text-xl shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-200 font-medium">
              Are your transactions already in the software but tangled with suspense errors or bad coding? Explore our dedicated Clean-Up service.
            </p>
          </div>
          <Link href="/services/bookkeeping/bookkeeping-clean-up">
            <Button
              type="primary"
              size="middle"
              className="font-bold bg-amber-600 hover:bg-amber-500 border-none shrink-0"
              icon={<ArrowRightOutlined />}
              iconPosition="end"
            >
              Bookkeeping Clean-Up
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
