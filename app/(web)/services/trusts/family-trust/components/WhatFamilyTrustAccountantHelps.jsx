"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  FileTextOutlined,
  AuditOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  CalendarOutlined,
  DollarCircleOutlined,
  SafetyCertificateOutlined,
  SlidersOutlined,
} from "@ant-design/icons";

/**
 * WhatFamilyTrustAccountantHelps Component
 * ========================================
 * Section: What does a family trust accountant help with?
 * Verbatim text from Page 2 of client docx (8th Pillar Trust Services.docx).
 * Includes 7 key service deliverables and contextual link to Trust Tax Returns.
 */
export default function WhatFamilyTrustAccountantHelps() {
  const scopeItems = [
    {
      icon: <AuditOutlined className="text-xl text-brand-emerald" />,
      title: "Annual Trust Accounts & Balance Sheets",
      desc: "Preparing or reviewing annual trust accounts, reconciliations, and balance-sheet reconciliations.",
      verbatim: "annual trust accounts and balance-sheet reconciliations",
    },
    {
      icon: <FileTextOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Family Trust Tax Return Preparation",
      desc: "Family trust tax return preparation and lodgement with complete Section 95 net income calculations.",
      verbatim: "family trust tax return preparation and lodgement",
    },
    {
      icon: <DollarCircleOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Income & Expense Classification",
      desc: "Detailed analysis of trust income, deductible expenses, capital gains discounts, and franked distributions.",
      verbatim: "analysis of trust income, expenses, capital gains and franked distributions",
    },
    {
      icon: <SlidersOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Beneficiary Distribution Schedules",
      desc: "Compiling beneficiary distribution schedules and related accounting journal entries from the final tax position.",
      verbatim: "beneficiary distribution schedules and related accounting entries",
    },
    {
      icon: <SafetyCertificateOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Beneficiary Loan & Unpaid Entitlements",
      desc: "Comprehensive review of beneficiary loan accounts or unpaid present entitlement (UPE) balances where relevant.",
      verbatim: "review of beneficiary loan or unpaid entitlement balances where relevant",
    },
    {
      icon: <CalendarOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Supporting Records for Future Transactions",
      desc: "Organising essential records needed to support current tax positions, asset cost bases, and future transactions.",
      verbatim: "records needed to support tax positions and future transactions",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Practice Scope & Deliverables
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What does a family trust accountant help with?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            The accountant’s role is broader than simply lodging a tax return. A family trust may receive business
            income, rent, interest, dividends, capital gains or other amounts, while also incurring expenses and making
            distributions to beneficiaries. These items need to be reconciled and classified before the tax position
            and beneficiary reporting can be finalised.
          </p>
        </div>

        {/* Lead Subtitle */}
        <div className="max-w-3xl mx-auto mb-8 text-center">
          <p className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white">
            Depending on the trust, Financially Up can help with:
          </p>
        </div>

        {/* 6 Grid Deliverables Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {scopeItems.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-3">
                  {item.desc}
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200/60 dark:border-zinc-700/60 flex items-center gap-2">
                <CheckCircleOutlined className="text-emerald-500 text-xs shrink-0" />
                <span className="text-xs font-medium text-slate-700 dark:text-zinc-300 capitalize">
                  {item.verbatim}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 7th Scope Item: Tax Planning & Advice Callout */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200 dark:border-zinc-700 mb-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Tag color="purple" className="font-semibold text-xs">
                  Separately Scoped Strategy
                </Tag>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  Year-End Tax Planning & Distribution Strategy
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Year-end tax planning or distribution-related tax advice can also be scoped where a decision needs
                to be considered before year-end or before a transaction occurs.
              </p>
            </div>
            <Link href="/book-an-appointment" className="shrink-0 w-full md:w-auto">
              <Button
                type="primary"
                className="brand-btn-primary w-full md:w-auto text-xs sm:text-sm font-semibold rounded-xl"
                icon={<ArrowRightOutlined />}
                iconPosition="end"
              >
                Discuss Scoped Advice
              </Button>
            </Link>
          </div>
        </div>

        {/* Verbatim Cross-Reference to Trust Tax Returns */}
        <div className="p-5 sm:p-6 rounded-xl bg-gradient-to-r from-blue-50/80 to-teal-50/80 dark:from-zinc-950 dark:to-zinc-900 border border-blue-100 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-white dark:bg-zinc-800 border border-blue-200 dark:border-zinc-700 flex items-center justify-center shrink-0">
              <FileTextOutlined className="text-blue-600 dark:text-blue-400" />
            </div>
            <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-zinc-200">
              For return preparation specifically, see our{" "}
              <strong className="font-bold text-slate-900 dark:text-white">Trust Tax Returns</strong> page.
            </p>
          </div>
          <Link href="/services/trusts/trust-tax-returns" className="shrink-0">
            <Button type="default" className="text-xs sm:text-sm font-semibold rounded-lg" icon={<ArrowRightOutlined />}>
              View Trust Tax Returns
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
