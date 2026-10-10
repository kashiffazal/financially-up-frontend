"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  FileProtectOutlined,
  BookOutlined,
  RocketOutlined,
  ArrowRightOutlined,
  CheckOutlined,
} from "@ant-design/icons";

/**
 * OutsourcedCfoVsBookkeeping Component
 * =====================================
 * Section 5: Outsourced CFO versus bookkeeping and year-end accounting
 * Features 100% complete, verbatim content from client SEO document.
 */
export default function OutsourcedCfoVsBookkeeping() {
  const tiers = [
    {
      name: "Bookkeeping Services",
      icon: <BookOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
      focus: "Historical Data Integrity",
      tag: "Foundation",
      color: "blue",
      description: "Records transactions and keeps the accounting system current.",
      bulletPoints: [
        "Bank feed reconciliation",
        "Accounts payable & receivable entry",
        "Payroll processing & Super clearing",
        "Clean general ledger cut-offs",
      ],
      linkText: "Explore Bookkeeping",
      href: "/services/bookkeeping",
    },
    {
      name: "Year-End Accounting",
      icon: <FileProtectOutlined className="text-2xl text-amber-600 dark:text-amber-400" />,
      focus: "Compliance & Statutory Accounts",
      tag: "Statutory",
      color: "gold",
      description: "Focus on annual financial statements, tax returns and other obligations.",
      bulletPoints: [
        "Special purpose financial reports",
        "Company income tax returns",
        "ATO lodgement compliance",
        "Division 7A & shareholder balances",
      ],
      linkText: "See Year-End Accounting",
      href: "/services/business-tax",
    },
    {
      name: "Outsourced CFO Services",
      icon: <RocketOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
      focus: "Forward-Looking Strategy",
      tag: "Strategic",
      color: "green",
      isPrimary: true,
      description: "Use reliable accounting information for ongoing management decisions and forward planning.",
      bulletPoints: [
        "Monthly management packs & KPIs",
        "Rolling cash flow & liquidity visibility",
        "Variance & margin root cause analysis",
        "Commercial decision & expansion models",
      ],
      linkText: "Outsourced CFO",
      href: "/services/virtual-cfo/virtual-cfo-services",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <Tag color="orange" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Role Comparison
          </Tag>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Outsourced CFO versus bookkeeping and year-end accounting
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Bookkeeping records transactions and keeps the accounting system current. Year-end accounting and tax compliance focus on annual financial statements, tax returns and other obligations. Outsourced CFO services use reliable accounting information for ongoing management decisions and forward planning.
          </p>
        </div>

        {/* 3 Tier Comparative Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                tier.isPrimary
                  ? "bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-700 shadow-md ring-1 ring-emerald-500/20"
                  : "bg-slate-50/80 dark:bg-zinc-800/50 border-slate-200/80 dark:border-zinc-700/60 hover:bg-white dark:hover:bg-zinc-800"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-700 shadow-sm flex items-center justify-center">
                    {tier.icon}
                  </div>
                  <Tag color={tier.color} className="font-semibold text-xs m-0">
                    {tier.tag}
                  </Tag>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                  {tier.name}
                </h3>
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-400 mb-3">
                  {tier.focus}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-6">
                  {tier.description}
                </p>
                <ul className="space-y-2.5 pt-4 border-t border-slate-200/60 dark:border-zinc-700/60 mb-6">
                  {tier.bulletPoints.map((pt, pIdx) => (
                    <li key={pIdx} className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 flex items-center gap-2">
                      <CheckOutlined className="text-emerald-600 dark:text-emerald-400 text-xs shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href={tier.href}>
                <Button
                  type={tier.isPrimary ? "primary" : "default"}
                  className={`w-full font-semibold ${tier.isPrimary ? "bg-emerald-600 hover:bg-emerald-500" : ""}`}
                  icon={<ArrowRightOutlined />}
                  iconPlacement="end"
                >
                  {tier.linkText}
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Verbatim Cross-Linking Guidance */}
        <div className="mt-8 p-6 rounded-2xl bg-slate-50 dark:bg-zinc-800/40 border border-slate-200/80 dark:border-zinc-700/60 text-sm text-slate-700 dark:text-zinc-300 leading-relaxed">
          <p className="m-0">
            If your records are not yet current enough for meaningful monthly reporting,{" "}
            <Link href="/services/bookkeeping" className="text-emerald-700 dark:text-emerald-400 font-bold hover:underline">
              bookkeeping services
            </Link>{" "}
            may need to be addressed first. If the immediate requirement is closing the financial year and preparing annual accounts, see{" "}
            <Link href="/services/business-tax" className="text-emerald-700 dark:text-emerald-400 font-bold hover:underline">
              year-end accounting
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
