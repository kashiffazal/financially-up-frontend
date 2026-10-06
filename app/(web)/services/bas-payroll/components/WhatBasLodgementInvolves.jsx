"use client";

import React from "react";
import { Tag, Button } from "antd";
import {
  FileTextOutlined,
  CheckCircleOutlined,
  AuditOutlined,
  SafetyCertificateOutlined,
  DollarCircleOutlined,
  EyeOutlined,
  ArrowRightOutlined,
  BankOutlined,
  ShopOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import Link from "next/link";

/**
 * WhatBasLodgementInvolves Component
 * =================================
 * Section 1 of BAS, GST & Payroll Hub:
 * "What does BAS lodgement involve?"
 *
 * Content is 100% VERBATIM from the professional SEO specialist document:
 * '5th Pillar BAS, GST & Payroll.docx' (Page 1).
 *
 * Background: Lite Brand Gradient.
 */
export default function WhatBasLodgementInvolves() {
  /**
   * The 5 core accounting records reviewed prior to reporting (Paragraph 2 verbatim)
   */
  const reviewRecords = [
    {
      icon: <BankOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Bank Transactions",
      description: "Reconciliation of bank and credit card activity against company accounts.",
      tag: "Bank Accounts",
    },
    {
      icon: <ShopOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Sales Invoices",
      description: "Verification of taxable sales, GST-free income and export transactions.",
      tag: "Taxable Sales",
    },
    {
      icon: <DollarCircleOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Supplier Bills",
      description: "Valid tax invoices for eligible business purchases claiming GST credits.",
      tag: "GST Credits",
    },
    {
      icon: <TeamOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Payroll Information",
      description: "Gross employee payments, PAYG withholding amounts and STP summaries.",
      tag: "PAYG Withholding",
    },
    {
      icon: <FileTextOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "GST Coding",
      description: "Proper software tax coding across revenue, expenses, and capital acquisitions.",
      tag: "Tax Codes",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <Tag color="green" className="brand-section-tag">
            <AuditOutlined className="mr-1" /> Activity Statement Foundations
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What does BAS lodgement involve?
          </h2>
          {/* Document Paragraph 1 - Verbatim */}
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            BAS lodgement is the process of preparing and submitting the
            business activity statement information required by the ATO for the
            relevant reporting period. For a GST-registered business, this
            commonly includes taxable sales, GST collected, GST credits on
            eligible business purchases and any other activity-statement labels
            that apply.
          </p>
        </div>

        {/* Deep Dive Card: Paragraph 2 & Record Review Workflow */}
        <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm p-6 sm:p-8 lg:p-10 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300 text-xs font-semibold mb-4">
                <SafetyCertificateOutlined />
                <span>Accounting Records Foundation</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Thorough Pre-Lodgement Record Review
              </h3>
              {/* Document Paragraph 2 - Verbatim */}
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed mb-4">
                Good BAS preparation starts with the accounting records. Bank
                transactions, sales, supplier bills, payroll information and
                GST coding should be reviewed before figures are reported. A BAS
                accountant can help identify inconsistencies and clarify
                transactions that need attention before lodgement.
              </p>

              <div className="flex flex-wrap items-center gap-3 mt-6">
                <Link href="/book-an-appointment">
                  <Button
                    type="primary"
                    size="large"
                    icon={<ArrowRightOutlined />}
                    iconPlacement="end"
                    className="h-11 px-6 rounded-xl font-semibold shadow-md shadow-brand-primary/20 hover:scale-[1.02] active:scale-[0.99] transition-all"
                  >
                    Book BAS Review
                  </Button>
                </Link>
                <Link href="#bas-payroll-services-overview">
                  <Button
                    size="large"
                    icon={<EyeOutlined />}
                    className="h-11 px-5 rounded-xl font-semibold border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-200 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-all"
                  >
                    Explore Sub-Services
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Checklist: Pre-Lodgement Verifications */}
            <div className="lg:col-span-5 bg-slate-50/80 dark:bg-zinc-800/60 rounded-xl p-5 sm:p-6 border border-slate-200/80 dark:border-zinc-700/60">
              <h4 className="text-xs font-bold text-slate-500 dark:text-zinc-400 uppercase tracking-wider mb-4">
                Reviewed Records Checklist
              </h4>
              <ul className="space-y-3 m-0 p-0 list-none">
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                  <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 mt-1 shrink-0 text-xs" />
                  <span>Bank transactions and business credit cards</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                  <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 mt-1 shrink-0 text-xs" />
                  <span>Sales invoices and taxable customer income</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                  <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 mt-1 shrink-0 text-xs" />
                  <span>Supplier bills and valid tax invoice receipts</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                  <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 mt-1 shrink-0 text-xs" />
                  <span>Payroll figures, gross wages and PAYG withholding</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                  <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 mt-1 shrink-0 text-xs" />
                  <span>Software GST coding consistency across all entries</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                  <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 mt-1 shrink-0 text-xs" />
                  <span>Clarification of inconsistencies before submission</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 5 Core Review Record Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {reviewRecords.map((record, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:border-teal-500/50 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-zinc-800 flex items-center justify-center mb-3">
                  {record.icon}
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                  {record.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed m-0">
                  {record.description}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-zinc-800">
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400">
                  {record.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
