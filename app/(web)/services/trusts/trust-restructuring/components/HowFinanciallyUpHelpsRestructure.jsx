"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  FileSearchOutlined,
  AimOutlined,
  AuditOutlined,
  ReconciliationOutlined,
  SwapOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * HowFinanciallyUpHelpsRestructure Component
 * ==========================================
 * Section: How Financially Up can help
 * Verbatim text from Page 7 of client docx (8th Pillar Trust Services.docx).
 * Covers tax position review, commercial objectives, tax testing, accounting coordination,
 * and links to Business Restructuring and Change Trustee services.
 */
export default function HowFinanciallyUpHelpsRestructure() {
  const steps = [
    {
      icon: <FileSearchOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Review Accounting & Tax Position",
      desc: "Examining existing ledgers, tax returns, carried-forward tax losses, Family Trust Elections (FTE), and historical resolutions.",
    },
    {
      icon: <AimOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Clarify Commercial & Family Objectives",
      desc: "Understanding the family succession goals, governance requirements, risk mitigation needs, or investor changes driving the restructure.",
    },
    {
      icon: <AuditOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Identify & Test Sensitive Tax Issues",
      desc: "Testing for CGT resettlement exposure, Division 7A triggers, control tests under trust loss rules, and transfer duty implications.",
    },
    {
      icon: <ReconciliationOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Coordinate Accounting Implementation",
      desc: "Aligning opening and closing asset cost bases, journalizing beneficiary or unit changes, and coordinating with legal draftspersons.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Restructuring Services
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How Financially Up can help
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Financially Up can review the existing accounting and tax position, understand the proposed commercial or
            family objective, identify tax issues that need to be tested, and coordinate the accounting steps associated
            with the change. If the work is a broader reorganization of a business rather than a trust-specific change,
            our business restructuring service covers the wider restructuring analysis separately.
          </p>
        </div>

        {/* 4 Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-4">
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

        {/* Verbatim Trust Scope & Cross-Link Callout Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-brand-bg-lighter via-white to-slate-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border border-slate-200 dark:border-zinc-800 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl space-y-2">
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Trust-Specific Scope & Trustee Changes
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                For trust-specific work, the scope may include reviewing tax history, carried-forward losses,
                distributions, related-party balances, trust elections, unit holdings and the accounting treatment of
                any asset transfers. Where the restructure changes the trustee, our{" "}
                <Link
                  href="/services/trusts/change-trustee"
                  className="text-teal-600 dark:text-teal-400 font-semibold hover:underline"
                >
                  Change Trustee
                </Link>{" "}
                service focuses on that process in more detail.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/services/trusts/change-trustee"
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 transition-colors shadow-sm"
              >
                <SwapOutlined className="mr-2" />
                Change Trustee Service <ArrowRightOutlined className="ml-2 text-xs" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
