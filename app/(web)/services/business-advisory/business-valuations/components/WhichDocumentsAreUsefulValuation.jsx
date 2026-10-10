"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  FileTextOutlined,
  AuditOutlined,
  UserOutlined,
  BankOutlined,
  FileDoneOutlined,
  CalendarOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  AlertOutlined,
} from "@ant-design/icons";

/**
 * WhichDocumentsAreUsefulValuation Component
 * ==========================================
 * Section 4: Which documents are useful?
 * Source: 12th Pillar Business Advisory.docx (Page 5: Business Valuations)
 *
 * Implements 100% complete, verbatim SEO text covering the 7 essential financial
 * and operational records required for a valuation, plus the data-integrity rule
 * against inventing normalized earnings.
 */
export default function WhichDocumentsAreUsefulValuation() {
  const documentList = [
    {
      icon: <FileTextOutlined className="text-emerald-600 dark:text-emerald-400" />,
      title: "Financial statements and tax returns for relevant recent years",
      desc: "3 to 5 years of balance sheets, profit and loss statements, and company tax returns.",
    },
    {
      icon: <AuditOutlined className="text-teal-600 dark:text-teal-400" />,
      title: "Current management accounts and a breakdown of significant revenue streams",
      desc: "Up-to-date year-to-date trading reports by service line, client type, and business division.",
    },
    {
      icon: <UserOutlined className="text-blue-600 dark:text-blue-400" />,
      title: "Details of owner wages, related-party payments and unusual transactions",
      desc: "Discretionary perks, non-market proprietor salaries, and non-recurring one-off expenses.",
    },
    {
      icon: <BankOutlined className="text-indigo-600 dark:text-indigo-400" />,
      title: "Asset and loan schedules, stock and debtor information",
      desc: "Depreciation registers, commercial debt agreements, stock valuations, and aged debtors.",
    },
    {
      icon: <FileDoneOutlined className="text-purple-600 dark:text-purple-400" />,
      title: "Material contracts, leases and licences",
      desc: "Customer MSAs, premises lease deeds, key supplier terms, and operational regulatory licences.",
    },
    {
      icon: <CalendarOutlined className="text-amber-600 dark:text-amber-400" />,
      title: "Budgets or forecasts with the assumptions behind them",
      desc: "Forward commercial projections documenting revenue volume expectations and margin assumptions.",
    },
    {
      icon: <CheckCircleOutlined className="text-rose-600 dark:text-rose-400" />,
      title: "The proposed sale terms or purpose of the valuation",
      desc: "Draft terms of sale, shareholder agreement context, partnership buy-in, or planning brief.",
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
            Evidence &amp; Documentation Checklist
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Which Documents Are Useful?
          </h2>
        </div>

        {/* 7 Document Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {documentList.map((doc, idx) => (
            <div
              key={idx}
              className={`bg-white dark:bg-zinc-900 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between ${
                idx === 6 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-50 dark:bg-zinc-800 flex items-center justify-center">
                    {doc.icon}
                  </div>
                  <Tag
                    color="default"
                    className="text-[11px] font-semibold border-slate-200 dark:border-zinc-700 m-0"
                  >
                    Record 0{idx + 1}
                  </Tag>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white capitalize mb-2 leading-snug">
                  {doc.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed m-0 font-normal">
                  {doc.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-zinc-800/80 flex items-center gap-2 text-xs text-slate-500 dark:text-zinc-400">
                <CheckCircleOutlined className="text-emerald-500 dark:text-emerald-400" />
                <span>Reviewed for normalization adjustments</span>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Note Card: Integrity Against Inventing Normalized Earnings */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs mb-12">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-amber-50 dark:bg-amber-950/70 border border-amber-200 dark:border-amber-800/60 flex items-center justify-center shrink-0 mt-0.5">
              <AlertOutlined className="text-xl text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                Accounting Data Integrity &amp; Gaps
              </h4>
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed m-0 font-normal">
                If the books require substantial correction, a reliable
                valuation may depend on completing that work first. We identify
                the gaps and agree on any additional analysis rather than
                inventing normalized earnings.
              </p>
            </div>
          </div>
        </div>

        {/* Action Row */}
        <div className="text-center">
          <Link href="/book-an-appointment">
            <Button
              type="primary"
              size="large"
              icon={<ArrowRightOutlined />}
              iconPlacement="end"
              className="rounded-xl font-bold px-7 h-12 shadow-md shadow-brand-primary/20"
            >
              Start Document Review
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
