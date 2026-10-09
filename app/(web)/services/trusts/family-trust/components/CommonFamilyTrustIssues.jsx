"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  WarningOutlined,
  ExclamationCircleOutlined,
  SafetyCertificateOutlined,
  ArrowRightOutlined,
  ClockCircleOutlined,
  SwapOutlined,
  DollarCircleOutlined,
  FileSearchOutlined,
} from "@ant-design/icons";

/**
 * CommonFamilyTrustIssues Component
 * =================================
 * Section: Common family trust accounting issues
 * Verbatim text from Page 2 of client docx.
 * Outlines frequent accounting pitfalls and provides extensive coverage
 * of the landmark Commissioner of Taxation v Bendel [2026] HCA 18 ruling,
 * unpaid present entitlements (UPEs), and Division 7A compliance.
 */
export default function CommonFamilyTrustIssues() {
  const commonPitfalls = [
    {
      icon: <ClockCircleOutlined className="text-amber-600 dark:text-amber-400 text-lg" />,
      title: "Late Distribution Resolutions",
      desc: "Resolutions executed after 30 June, triggering default clauses or assessment of the trustee at 47%.",
    },
    {
      icon: <SwapOutlined className="text-blue-600 dark:text-blue-400 text-lg" />,
      title: "Unreconciled Beneficiary Balances",
      desc: "Beneficiary loan balances and entitlements that do not reconcile with actual drawings or entity books.",
    },
    {
      icon: <DollarCircleOutlined className="text-rose-600 dark:text-rose-400 text-lg" />,
      title: "Mixed Private & Trust Expenses",
      desc: "Trust bank accounts paying for non-deductible private family living costs without proper categorization.",
    },
    {
      icon: <FileSearchOutlined className="text-purple-600 dark:text-purple-400 text-lg" />,
      title: "Incomplete CGT Cost Bases",
      desc: "Missing purchase contracts, stamp duty receipts, or capital improvements records on trust property.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="volcano" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Risk Mitigation & Compliance
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Common family trust accounting issues
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Problems often arise where distributions are considered too late, beneficiary balances are not reconciled,
            private expenses are mixed with trust expenses, property cost-base records are incomplete, or transactions
            with related companies are not documented clearly. These issues can affect both the trust’s tax return and
            the tax reporting of beneficiaries.
          </p>
        </div>

        {/* 4 Pitfall Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {commonPitfalls.map((pitfall, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-3">
                  {pitfall.icon}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-2">
                  {pitfall.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {pitfall.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Landmark Ruling & Division 7A Box */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-brand-bg-lighter via-white to-slate-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border border-slate-200 dark:border-zinc-800 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 flex items-center justify-center shrink-0">
                <SafetyCertificateOutlined className="text-xl text-teal-600 dark:text-teal-400" />
              </div>
              <div>
                <Tag color="cyan" className="font-semibold text-xs mb-1">
                  High Court Landmark Precedent
                </Tag>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  Corporate Beneficiaries & Bendel [2026] HCA 18 Analysis
                </h3>
              </div>
            </div>
            <Link href="/services/business-tax/division-7a" className="shrink-0">
              <Button type="default" className="text-xs sm:text-sm font-semibold rounded-xl" icon={<ArrowRightOutlined />}>
                Division 7A Service
              </Button>
            </Link>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            <p>
              Where a private company is a beneficiary or money is retained or moved within a family group, additional
              tax rules can become relevant. Following{" "}
              <strong className="text-slate-900 dark:text-white font-semibold">
                Commissioner of Taxation v Bendel [2026] HCA 18
              </strong>
              , a private company’s unpaid trust entitlement does not automatically become a section 109D loan merely
              because the company takes no action to demand payment.
            </p>
            <p>
              Separate financial accommodation, payments, loans, debt forgiveness or related arrangements may still
              require review under Division 7A or other provisions. These matters should be considered on their actual
              facts rather than treated as ordinary bookkeeping entries; see our{" "}
              <Link
                href="/services/business-tax/division-7a"
                className="text-teal-600 dark:text-teal-400 font-semibold underline hover:text-teal-700"
              >
                Division 7A service
              </Link>{" "}
              for the related specialist scope.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
