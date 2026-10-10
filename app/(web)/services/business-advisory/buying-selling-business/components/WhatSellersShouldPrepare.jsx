"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  FileTextOutlined,
  CheckCircleOutlined,
  DollarOutlined,
  SafetyCertificateOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * WhatSellersShouldPrepare Component
 * ==================================
 * Section 1: What should a seller prepare?
 * Source: 12th Pillar Business Advisory.docx (Page 6: Buying and Selling a Business)
 *
 * Implements 100% complete, verbatim SEO text detailing the financial preparation,
 * source document reconciliation, asset inclusions, and valuation distinction for business vendors.
 */
export default function WhatSellersShouldPrepare() {
  const sellerChecklist = [
    {
      icon: <FileTextOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Reconciled Source Records",
      desc: "Financial statements, tax returns, and management accounts fully reconciled to bank feeds and general ledgers.",
    },
    {
      icon: <DollarOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Normalisation Schedules",
      desc: "Documented explanations for discretionary owner wages, related-party perks, and one-off extraordinary expenses.",
    },
    {
      icon: <AppstoreOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Asset & Inclusion Identification",
      desc: "Clear definitions of trading stock, equipment, plant, IP, customer contracts, goodwill, debtors, and liabilities.",
    },
    {
      icon: <TeamOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Operational & Staff Transfers",
      desc: "Employee entitlements, award structures, premises lease assignments, licences, and key supplier agreements.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Vendor Readiness &amp; Due Diligence Preparation
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Should a Seller Prepare?
          </h2>
        </div>

        {/* 2 Primary Verbatim Text Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Evidence of Financial Performance */}
          <div className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-3">
                <FileTextOutlined />
                <span>Verified Trading Evidence &amp; Normalisation</span>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
                A buyer will usually want to see evidence of revenue, profit,
                assets, liabilities and the stability of the business. Recent
                financial statements, tax returns and management accounts should
                reconcile to source records. Unusual expenses, owner
                remuneration and related-party dealings need clear explanations
                rather than last-minute adjustments without support.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-200 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400">
              Clear schedules prevent buyer skepticism during due diligence reviews.
            </div>
          </div>

          {/* Card 2: Identifying Included Assets & Liabilities */}
          <div className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 mb-3">
                <AppstoreOutlined />
                <span>Scope of Transaction &amp; Separation</span>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
                Sellers also need to identify what is included in the proposed
                transaction: stock, equipment, intellectual property, contracts,
                goodwill, cash, debtors or liabilities. Employees, leases,
                licences and supplier arrangements may require separate
                attention. Having the information organized can make due
                diligence more efficient and expose issues that should be
                addressed before marketing the business.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-200 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400">
              Resolving operational and lease transfer items prior to listing.
            </div>
          </div>
        </div>

        {/* 4 Checklist Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {sellerChecklist.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-950 p-5 rounded-xl border border-slate-200/80 dark:border-zinc-800 shadow-2xs"
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

        {/* Verbatim Paragraph 3 Cross-Link Feature Banner */}
        <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-slate-50 dark:from-emerald-950/30 dark:via-zinc-950 dark:to-zinc-900 rounded-2xl p-7 sm:p-9 border border-emerald-200/80 dark:border-emerald-800/40 shadow-xs">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                <SafetyCertificateOutlined />
                <span>Price Testing vs Contract Execution</span>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed m-0 font-normal">
                Our{" "}
                <Link
                  href="/services/business-advisory/business-valuations"
                  className="font-semibold text-brand-primary dark:text-emerald-400 hover:underline"
                >
                  business valuation services
                </Link>{" "}
                can help examine a proposed price and its assumptions. A value
                analysis is distinct from preparing the sale contract or finding
                a buyer.
              </p>
            </div>

            <div className="shrink-0">
              <Link href="/services/business-advisory/business-valuations">
                <Button
                  type="primary"
                  icon={<ArrowRightOutlined />}
                  iconPlacement="end"
                  className="rounded-xl font-bold px-6 h-11 shadow-sm"
                >
                  Valuation Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
