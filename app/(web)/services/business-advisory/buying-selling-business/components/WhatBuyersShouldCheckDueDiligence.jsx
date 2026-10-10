"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  AuditOutlined,
  DollarOutlined,
  FileProtectOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  WarningOutlined,
  TeamOutlined,
} from "@ant-design/icons";

/**
 * WhatBuyersShouldCheckDueDiligence Component
 * ===========================================
 * Section 2: What should a buyer check?
 * Source: 12th Pillar Business Advisory.docx (Page 6: Buying and Selling a Business)
 *
 * Implements 100% complete, verbatim SEO text covering financial due diligence,
 * owner dependency & maintainable earnings testing, seller forecast skepticism,
 * and essential legal due diligence coordination.
 */
export default function WhatBuyersShouldCheckDueDiligence() {
  const buyerChecklist = [
    {
      icon: <AuditOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Triangulating Financial Records",
      desc: "Cross-referencing reported profit with BAS lodgements, tax returns, and merchant bank account statements.",
    },
    {
      icon: <DollarOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Working Capital & Cash Flow",
      desc: "Checking debtor collection patterns, creditor terms, seasonal capital swings, and outstanding tax debts.",
    },
    {
      icon: <TeamOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Owner Replacement Costs",
      desc: "Quantifying what commercial salary a replacement general manager or skilled operator would require.",
    },
    {
      icon: <FileProtectOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Legal & Regulatory Due Diligence",
      desc: "Coordinating with transaction lawyers regarding title to assets, lease assignment, licences, and warranties.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50/70 dark:bg-zinc-950/70 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Acquisition Due Diligence &amp; Audit
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Should a Buyer Check?
          </h2>
        </div>

        {/* 2 Primary Verbatim Text Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Verifying the Numbers */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-3">
                <AuditOutlined />
                <span>Verification of Financial Statements</span>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
                Buying a business accountant support begins with verifying the
                numbers behind the proposal. We compare financial statements,
                tax returns, activity statements and available source records,
                then examine margins, working capital, cash flow and material
                obligations. The scope of due diligence depends on the business
                and the access the seller provides.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-100 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400">
              Rigorous reconciliation against statutory ATO reporting.
            </div>
          </div>

          {/* Card 2: True Maintainable Earnings & Seller Forecasts */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 mb-3">
                <WarningOutlined />
                <span>Testing Underlying Earnings &amp; Assumptions</span>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
                Ask whether the reported earnings depend on the current owner, a
                few customers, a favourable lease or unusually low wages.
                Consider the costs of replacing the owner’s work and funding
                stock, staff and tax obligations after completion. Forecasts
                supplied by a seller should be treated as assumptions to test,
                not assured results.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-100 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400">
              Vendor projections must be treated as assumptions to stress-test.
            </div>
          </div>
        </div>

        {/* 4 Buyer Due Diligence Action Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {buyerChecklist.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 p-5 rounded-xl border border-slate-200/80 dark:border-zinc-800 shadow-2xs"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-50 dark:bg-zinc-800 flex items-center justify-center mb-3">
                {item.icon}
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                {item.title}
              </h4>
              <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed m-0 font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Verbatim Paragraph 3 Feature Banner: Legal Due Diligence Collaboration */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-center shrink-0 mt-0.5">
              <FileProtectOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                Coordinating Legal and Accounting Due Diligence
              </h4>
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed m-0 font-normal">
                Legal due diligence is equally important. A lawyer should review
                the contract, title to assets, lease, licences, employment
                matters, warranties and transfer conditions. We can identify
                financial questions for that review without claiming to verify
                legal ownership or regulatory approvals.
              </p>
            </div>
          </div>
        </div>

        {/* Action Row */}
        <div className="mt-12 text-center">
          <Link href="/book-an-appointment">
            <Button
              type="primary"
              size="large"
              icon={<ArrowRightOutlined />}
              iconPlacement="end"
              className="rounded-xl font-bold px-7 h-12 shadow-md shadow-brand-primary/20"
            >
              Book Buyer Due Diligence Support
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
