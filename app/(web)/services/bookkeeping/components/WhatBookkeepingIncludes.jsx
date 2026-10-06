"use client";

import React from "react";
import { Tag, Button } from "antd";
import {
  AuditOutlined,
  CheckCircleOutlined,
  FileDoneOutlined,
  SyncOutlined,
  SafetyCertificateOutlined,
  EyeOutlined,
  ArrowRightOutlined,
  BankOutlined,
  FolderOpenOutlined,
} from "@ant-design/icons";
import Link from "next/link";

/**
 * WhatBookkeepingIncludes Component
 * =================================
 * Section 1 of Bookkeeping Hub:
 * "What do bookkeeping services include?"
 *
 * Content is 100% VERBATIM from the professional SEO specialist document:
 * '4th Pillar Bookkeeping.docx' (Page 1).
 */
export default function WhatBookkeepingIncludes() {
  /**
   * The 6 core assistance areas identified directly in Document Paragraph 2
   */
  const assistanceAreas = [
    {
      icon: <SyncOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Transaction Processing",
      description:
        "Accurate recording and categorisation of day-to-day business income, payments, and expenses.",
    },
    {
      icon: <BankOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Bank & Credit-Card Reconciliations",
      description:
        "Matching accounting feeds against actual statements to confirm all cash transactions balance.",
    },
    {
      icon: <AuditOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Review of Income & Expense Coding",
      description:
        "Ensuring consistent classification and GST coding across every transaction in the ledger.",
    },
    {
      icon: <FolderOpenOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Supplier & Customer Records",
      description:
        "Organising bills, invoices, receipts, and ledger accounts for accounts payable and receivable.",
    },
    {
      icon: <SafetyCertificateOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Bookkeeping Clean-Up",
      description:
        "Investigating unreconciled items, correcting historical errors, and clearing suspense accounts.",
    },
    {
      icon: <FileDoneOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Preparation for Reporting & Tax",
      description:
        "Structuring underlying records so BAS preparation and year-end accounting proceed smoothly.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <Tag color="green" className="brand-section-tag">
            <AuditOutlined className="mr-1" /> Service Scope
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What do bookkeeping services include?
          </h2>
          {/* Document Paragraph 1 - Verbatim */}
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            Bookkeeping is the ongoing process of recording and organising
            business transactions so the accounting records reflect the
            activity of the business. Good bookkeeping is more than entering
            receipts: it involves consistent coding, reconciliation and review
            so the underlying data is useful for compliance and reporting.
          </p>
        </div>

        {/* Document Paragraph 2 Breakdown - Verbatim Narrative & Visual Pillars */}
        <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm p-6 sm:p-8 lg:p-10 mb-12">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold text-teal-700 dark:text-teal-400 uppercase tracking-wider mb-2 block">
              Agreed Scope & Core Capabilities
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
              Supporting Day-to-Day Operations & Compliance
            </h3>
            {/* Document Paragraph 2 - Verbatim */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed mb-4">
              Depending on the agreed scope, Financially Up can assist with
              transaction processing, bank and credit-card reconciliations,
              review of income and expense coding, supplier and customer
              records, bookkeeping clean-up and preparation of records for
              reporting or tax work. Where payroll, BAS or other compliance
              services are required, these can be scoped separately or
              coordinated with the bookkeeping process.
            </p>
          </div>

          {/* 6 Visual Assistance Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 border-t border-slate-100 dark:border-zinc-800">
            {assistanceAreas.map((area, index) => (
              <div
                key={index}
                className="group p-5 rounded-xl bg-slate-50/80 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/60 hover:border-teal-500/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-white dark:bg-zinc-700 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                    {area.icon}
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1.5 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {area.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed m-0 font-normal">
                    {area.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="mt-8 pt-6 border-t border-slate-100 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/book-an-appointment">
                <Button
                  type="primary"
                  size="large"
                  icon={<ArrowRightOutlined />}
                  iconPlacement="end"
                  className="h-11 px-6 rounded-xl font-semibold shadow-md shadow-brand-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  Book an Appointment
                </Button>
              </Link>
              <Link href="#bookkeeping-services-overview">
                <Button
                  size="large"
                  icon={<EyeOutlined />}
                  className="h-11 px-5 rounded-xl font-semibold border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-200 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-all"
                >
                  Explore Services
                </Button>
              </Link>
            </div>
            <p className="text-xs text-slate-500 dark:text-zinc-400 m-0 italic">
              Payroll, BAS and compliance services scoped separately as required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
