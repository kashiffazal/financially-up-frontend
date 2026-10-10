"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileTextOutlined,
  BankOutlined,
  DollarCircleOutlined,
  ProfileOutlined,
  AuditOutlined,
  ClusterOutlined,
  CheckCircleOutlined,
  SolutionOutlined,
} from "@ant-design/icons";

/**
 * WhatRecordsRelevantAudit Component
 * ==================================
 * Section 3: What records may be relevant?
 * Verbatim text from Page 3 of '11th Pillar ATO Help.docx'.
 *
 * Detailed breakdown of relevant evidence, structured indexing,
 * and dealing transparently with unavailable documents.
 */
export default function WhatRecordsRelevantAudit() {
  const recordsList = [
    {
      icon: <BankOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Bank & Financial Institution Statements",
      desc: "All personal, business, trust, and loan account statements covering the entire audit period to verify income inflows and outgoing deductible expenses.",
    },
    {
      icon: <DollarCircleOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Invoices, Receipts & Expense Substantiation",
      desc: "Tax invoices, point-of-sale receipts, logbooks, and substantiation documentation supporting claimed deductions and GST input tax credits.",
    },
    {
      icon: <SolutionOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Contracts & Asset Sale Documents",
      desc: "Contracts of sale, purchase settlement sheets, share transaction statements, property deeds, and independent professional valuations.",
    },
    {
      icon: <ProfileOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Payroll & Single Touch Payroll (STP) Records",
      desc: "Wages reports, PAYG withholding summaries, employee superannuation clearing statements, and employment agreements.",
    },
    {
      icon: <AuditOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Accounting Ledgers & Reconciliations",
      desc: "General ledgers, trial balances, balance sheet reconciliations, journal entries, and accountant tax workpapers.",
    },
    {
      icon: <ClusterOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Entity & Trust Minutes & Correspondence",
      desc: "Company constitution, 30 June trust distribution minutes, corporate resolutions, prior ATO private rulings, and historical correspondence.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="cyan" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Substantiation & Evidence
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What records may be relevant?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            The documents depend on the issue. They may include bank statements, invoices, receipts, contracts, payroll records, ledgers, reconciliations, working papers, asset purchase and sale documents, trust or company records, tax returns, BAS, valuations and correspondence. Electronic records and information held by third parties may also be relevant.
          </p>
        </div>

        {/* 6 Document Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {recordsList.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-6 bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 hover:border-brand-emerald dark:hover:border-brand-emerald transition-all duration-300 hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-zinc-700/60 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                <CheckCircleOutlined /> Essential Audit Evidence
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Analytical Rationale Callout */}
        <div className="rounded-2xl p-6 sm:p-8 bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 shrink-0 border border-emerald-200/60 dark:border-emerald-800/60">
              <CheckCircleOutlined className="text-2xl" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                Relevance and Explanation Matter:
              </h4>
              <p className="text-xs sm:text-sm md:text-base text-slate-700 dark:text-zinc-300 leading-relaxed">
                The records should support the tax treatment being examined and reconcile to the lodged amounts. A schedule that identifies each document, amount and issue can be more useful than an unstructured folder. Where a document is unavailable, explain what happened and identify other contemporaneous evidence rather than inventing or backdating a replacement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
