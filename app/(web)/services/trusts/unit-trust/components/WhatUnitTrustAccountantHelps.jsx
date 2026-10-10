"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  AuditOutlined,
  FileTextOutlined,
  DollarCircleOutlined,
  SlidersOutlined,
  SwapOutlined,
  CheckCircleOutlined,
  ApartmentOutlined,
  ArrowRightOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";

/**
 * WhatUnitTrustAccountantHelps Component
 * =====================================
 * Section: What can a unit trust accountant help with?
 * Verbatim text from Page 3 of client docx.
 * Lists the 8 essential accounting deliverables and provides a direct cross-link
 * to Trust Tax Returns.
 */
export default function WhatUnitTrustAccountantHelps() {
  const deliverables = [
    {
      icon: <AuditOutlined className="text-xl text-brand-emerald" />,
      title: "Annual Financial Statements",
      desc: "Preparing annual financial statements, balance sheets, and bank/investment reconciliations.",
      verbatim: "preparing annual financial statements and reconciliations",
    },
    {
      icon: <FileTextOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Unit Trust Tax Returns",
      desc: "Preparing the unit trust tax return where required with comprehensive Section 95 net income calculations.",
      verbatim: "preparing the unit trust tax return where required",
    },
    {
      icon: <SlidersOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Unit-Holder Capital & Distribution Accounts",
      desc: "Reconciling individual unit-holder capital accounts, subscription values, and distribution ledgers.",
      verbatim: "reconciling unit-holder capital and distribution accounts",
    },
    {
      icon: <DollarCircleOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Income & Expense Analysis",
      desc: "Detailed review of business income, operating expenses, capital gains discounts, and investment income.",
      verbatim: "reviewing income, expenses, capital gains and investment income",
    },
    {
      icon: <CheckCircleOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Unit-Holder Distribution Information",
      desc: "Compiling accurate distribution statements and annual tax schedules for each individual unit holder.",
      verbatim: "preparing unit-holder distribution information",
    },
    {
      icon: <SwapOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Unit Issues, Transfers & Redemptions",
      desc: "Reviewing underlying transaction records for new unit subscriptions, investor transfers, or unit buy-backs.",
      verbatim: "reviewing records for unit issues, transfers or redemptions",
    },
    {
      icon: <SafetyCertificateOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "GST & Related-Entity Issues",
      desc: "Identifying GST enterprise obligations, related-entity loan balances, or tax risks needing further review.",
      verbatim: "identifying GST, related-entity or other tax issues requiring further review",
    },
    {
      icon: <ApartmentOutlined className="text-xl text-cyan-600 dark:text-cyan-400" />,
      title: "Multi-Entity Coordination",
      desc: "Coordinating the unit trust accounts with related investor entities, corporate beneficiaries, or holding trusts.",
      verbatim: "coordinating the trust accounts with related companies or investors where relevant",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Practice Deliverables
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What can a unit trust accountant help with?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Financially Up can help trustees and unit holders keep the annual accounting and tax position organised.
            Depending on the trust, the work may include:
          </p>
        </div>

        {/* 8 Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {deliverables.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-3">
                  {item.desc}
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 dark:border-zinc-800 flex items-center gap-1.5 text-xs text-slate-500 dark:text-zinc-400">
                <CheckCircleOutlined className="text-brand-emerald text-xs shrink-0" />
                <span className="capitalize font-medium">{item.verbatim}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Link Card: Trust Tax Returns */}
        <div className="p-5 sm:p-6 rounded-xl bg-gradient-to-r from-blue-50/80 to-teal-50/80 dark:from-zinc-950 dark:to-zinc-900 border border-blue-100 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-white dark:bg-zinc-800 border border-blue-200 dark:border-zinc-700 flex items-center justify-center shrink-0">
              <FileTextOutlined className="text-blue-600 dark:text-blue-400" />
            </div>
            <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-zinc-200">
              For annual trust return preparation and lodgement, see our{" "}
              <strong className="font-bold text-slate-900 dark:text-white">Trust Tax Returns</strong> service.
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
