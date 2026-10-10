"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  TeamOutlined,
  ApartmentOutlined,
  LineChartOutlined,
  ExclamationCircleOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * WhoNeedsTrustTaxReturnAccountant Component
 * ==========================================
 * Section: Who may need a trust tax return accountant?
 * Verbatim text from Page 6 of client docx (8th Pillar Trust Services.docx).
 * Covers discretionary family trusts, unit trusts, investment trusts, incomplete books,
 * beneficiary changes, and CGT disposals, with cross-links to Family Trust & Unit Trust hubs.
 */
export default function WhoNeedsTrustTaxReturnAccountant() {
  const situations = [
    {
      icon: <TeamOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Family Discretionary Trusts",
      desc: "Trusts with active business income, dividends, investment property, or distributions to multiple adult family members.",
    },
    {
      icon: <ApartmentOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Fixed Unit Trusts & Syndicates",
      desc: "Commercial joint ventures and syndicates distributing proportionally across fixed unit registers and individual unit classes.",
    },
    {
      icon: <LineChartOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Investment Trusts & CGT Events",
      desc: "Trusts holding shares, managed funds, or real estate that realized capital gains or losses requiring CGT discount calculations.",
    },
    {
      icon: <ExclamationCircleOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Incomplete Books & Prior-Year Backlogs",
      desc: "Trusts needing ledger catch-up, bank reconciliations, beneficiary loan reconciliation, or multiple overdue tax returns lodged.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950/60 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Client Scenarios
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Who may need a trust tax return accountant?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A trust return accountant can assist trustees who operate a family trust, unit trust, investment trust or
            other trust that has income, deductions, capital gains, investment distributions or business activity to
            report. Assistance is also useful when bookkeeping is incomplete, beneficiaries have changed, the trust has
            disposed of an asset, or prior-year records need to be reconciled before lodgement.
          </p>
        </div>

        {/* 4 Situations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {situations.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Cross-Linking Callout Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl space-y-2">
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Structure Overview & Specific Guidance
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                If your trust is a discretionary family trust, our{" "}
                <Link
                  href="/services/trusts/family-trust"
                  className="text-teal-600 dark:text-teal-400 font-semibold hover:underline"
                >
                  Family Trust
                </Link>{" "}
                service explains the broader structure and ongoing administration. For a fixed-interest structure, see
                our{" "}
                <Link
                  href="/services/trusts/unit-trust"
                  className="text-teal-600 dark:text-teal-400 font-semibold hover:underline"
                >
                  Unit Trust
                </Link>{" "}
                service.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/services/trusts/family-trust"
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 dark:text-zinc-200 bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700 transition-colors"
              >
                Family Trust Service <ArrowRightOutlined className="ml-2 text-xs" />
              </Link>
              <Link
                href="/services/trusts/unit-trust"
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 transition-colors shadow-sm"
              >
                Unit Trust Service <ArrowRightOutlined className="ml-2 text-xs" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
