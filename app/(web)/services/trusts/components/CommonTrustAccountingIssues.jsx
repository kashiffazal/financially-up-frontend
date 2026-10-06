"use client";

import React from "react";
import {
  WarningOutlined,
  CalendarOutlined,
  SyncOutlined,
  FileSearchOutlined,
  ExclamationCircleOutlined,
  BankOutlined,
  ApartmentOutlined,
  AuditOutlined,
} from "@ant-design/icons";

/**
 * CommonTrustAccountingIssues Component
 * =====================================
 * Section 7: Common trust accounting issues we help identify
 *
 * Implements verbatim content from '8th Pillar Trust Services.docx' (Page 1: 1- Trust Services).
 * Explains how delayed accounting and poorly documented transactions cause compliance failures,
 * breaking down the exact 6 common issues listed in the document, plus the private company review note.
 *
 * Background: Clean White.
 */
export default function CommonTrustAccountingIssues() {
  /**
   * Exact 6 common trust accounting issues identified in the document
   */
  const diagnosticIssues = [
    {
      title: "unreconciled bank accounts",
      icon: <BankOutlined className="text-teal-600 dark:text-teal-400 text-lg" />,
      tag: "Reconciliations",
      context:
        "Bank feeds or trust accounts left unreconciled until year-end, obscuring true trust earnings.",
    },
    {
      title: "unclear beneficiary balances",
      icon: <SyncOutlined className="text-blue-600 dark:text-blue-400 text-lg" />,
      tag: "Beneficiary Ledger",
      context:
        "Drawings and distributions mixed together without clear individual beneficiary ledger accounts.",
    },
    {
      title: "missing cost-base records",
      icon: <FileSearchOutlined className="text-emerald-600 dark:text-emerald-400 text-lg" />,
      tag: "CGT & Cost Base",
      context:
        "Incomplete records of purchase outlays, stamp duties, legal fees, or property improvements.",
    },
    {
      title: "inconsistent treatment of expenses",
      icon: <ExclamationCircleOutlined className="text-amber-600 dark:text-amber-400 text-lg" />,
      tag: "Expense Treatment",
      context:
        "Private family living costs mixed with deductible trust expenses or capitalised items.",
    },
    {
      title: "late consideration of distribution decisions",
      icon: <CalendarOutlined className="text-rose-600 dark:text-rose-400 text-lg" />,
      tag: "Resolution Timing",
      context:
        "Distribution resolutions delayed past 30 June, risking default trustee tax assessments.",
    },
    {
      title: "mismatches between trust accounts and beneficiary tax information",
      icon: <AuditOutlined className="text-purple-600 dark:text-purple-400 text-lg" />,
      tag: "Tax Mismatches",
      context:
        "Discrepancies between what the trust return lodges and what beneficiaries report on their individual returns.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 border-t border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-800/60 mb-4">
            <WarningOutlined className="text-amber-600 dark:text-amber-400 text-xs sm:text-sm" />
            <span className="text-xs font-semibold text-amber-800 dark:text-amber-300 tracking-wide uppercase">
              Compliance Diagnostics
            </span>
          </div>

          {/* Exact H2 Heading from Document */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Common trust accounting issues we help identify
          </h2>

          {/* Exact Verbatim Paragraph 1 from Document */}
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Trust records can become difficult when accounting is left until year-end, distributions
            are considered without reliable figures, or transactions between related entities are
            not clearly documented. Common issues include unreconciled bank accounts, unclear
            beneficiary balances, missing cost-base records, inconsistent treatment of expenses,
            late consideration of distribution decisions and mismatches between trust accounts and
            beneficiary tax information.
          </p>
        </div>

        {/* 6 Issues Diagnostic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {diagnosticIssues.map((issue, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50/80 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800 hover:border-amber-500/50 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-white dark:bg-zinc-800 shadow-2xs flex items-center justify-center">
                    {issue.icon}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-300">
                    {issue.tag}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 capitalize-first">
                  {issue.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed m-0 font-normal">
                  {issue.context}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Exact Verbatim Private Company Guidance Box from Document */}
        <div className="rounded-2xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
          <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/50 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
            <ApartmentOutlined className="text-xl" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-bold text-slate-900 dark:text-white m-0">
              Private Company Involvement & Related-Entity Rules
            </h3>
            {/* Exact Verbatim Paragraph 2 from Document */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal m-0">
              Where a private company is involved in a trust group, additional tax rules may also need
              review. Those issues are not automatically part of routine trust bookkeeping or return
              preparation and may require a separately scoped tax review.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
