"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileTextOutlined,
  DollarOutlined,
  AuditOutlined,
  UsergroupAddOutlined,
  SafetyCertificateOutlined,
  FolderOpenOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";

/**
 * WhatInformationNeeded Component
 * ===============================
 * Section 7 of BAS, GST & Payroll Hub:
 * "What information may be needed?"
 *
 * Content is 100% VERBATIM from the professional SEO specialist document:
 * '5th Pillar BAS, GST & Payroll.docx' (Page 1).
 *
 * Background: Lite Brand Gradient.
 */
export default function WhatInformationNeeded() {
  /**
   * The 6 Verbatim Document Items from Document Section 4
   */
  const documents = [
    {
      icon: <DollarOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Sales Invoices & Income Records",
      description: "Sales invoices and income records",
      tag: "Income Records",
    },
    {
      icon: <FileTextOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Supplier Bills & Expense Receipts",
      description: "Supplier bills and expense receipts",
      tag: "Expense Receipts",
    },
    {
      icon: <AuditOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Bank & Credit-Card Transactions",
      description: "Business bank and credit-card transactions",
      tag: "Bank Transactions",
    },
    {
      icon: <SafetyCertificateOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "GST Coding in Accounting Software",
      description: "GST coding in accounting software",
      tag: "Software Coding",
    },
    {
      icon: <UsergroupAddOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Payroll & PAYG Withholding Data",
      description: "Payroll and PAYG withholding information where relevant",
      tag: "Payroll Data",
    },
    {
      icon: <FolderOpenOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Prior BAS or ATO Correspondence",
      description:
        "Previous BAS information or ATO correspondence where an issue needs to be reviewed",
      tag: "ATO Correspondence",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <Tag color="green" className="brand-section-tag">
            <FolderOpenOutlined className="mr-1" /> Preparation Checklist
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What information may be needed?
          </h2>
          {/* Document Intro Paragraph - Verbatim */}
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            The exact information depends on the business, but BAS preparation
            often relies on complete and reconciled records for the reporting
            period.
          </p>
        </div>

        {/* 6 Document Checklist Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {documents.map((doc, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:border-teal-500/50 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-zinc-800 flex items-center justify-center">
                    {doc.icon}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400">
                    {doc.tag}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {doc.title}
                </h3>
                {/* Verbatim Bullet Item */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed m-0">
                  {doc.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Statutory 5-Year Record Keeping Rule Callout (Document Paragraph - Verbatim) */}
        <div className="rounded-2xl p-6 sm:p-8 bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-800/60 shadow-xs">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center shrink-0 mt-0.5">
              <ClockCircleOutlined className="text-amber-700 dark:text-amber-400 text-lg" />
            </div>
            <div className="space-y-2">
              <h4 className="text-base font-bold text-slate-900 dark:text-white m-0">
                ATO 5-Year Record-Keeping Rule
              </h4>
              {/* Document Record-Keeping Paragraph - Verbatim */}
              <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed m-0 font-normal">
                ATO record-keeping rules generally require businesses to keep
                records that explain their transactions and tax obligations, and
                many business and GST records need to be retained for at least
                five years. The required period can differ for particular
                records or circumstances, so records should not be discarded
                merely because a BAS has been lodged.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
