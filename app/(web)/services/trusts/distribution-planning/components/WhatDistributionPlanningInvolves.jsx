"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  FileSearchOutlined,
  CalculatorOutlined,
  UsergroupAddOutlined,
  IdcardOutlined,
  PieChartOutlined,
  HistoryOutlined,
  FileDoneOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * WhatDistributionPlanningInvolves Component
 * ===========================================
 * Section: What does trust distribution planning involve?
 * Verbatim text from Page 11 of client docx (8th Pillar Trust Services.docx).
 * Features 7 verbatim checklist points, explanation of practical reviews,
 * and cross-links to Tax Planning & Advisory and Trust Tax Returns services.
 */
export default function WhatDistributionPlanningInvolves() {
  const steps = [
    {
      icon: <FileSearchOutlined className="text-teal-600 dark:text-teal-400" />,
      text: "reviewing the trust deed, beneficiary classes and any relevant default-beneficiary provisions",
    },
    {
      icon: <CalculatorOutlined className="text-blue-600 dark:text-blue-400" />,
      text: "estimating trust accounting income and taxable income for the year",
    },
    {
      icon: <UsergroupAddOutlined className="text-purple-600 dark:text-purple-400" />,
      text: "identifying beneficiaries who may be considered under the deed",
    },
    {
      icon: <IdcardOutlined className="text-indigo-600 dark:text-indigo-400" />,
      text: "reviewing beneficiary tax information and other relevant circumstances",
    },
    {
      icon: <PieChartOutlined className="text-amber-600 dark:text-amber-400" />,
      text: "considering capital gains, franked distributions and other income that may require specific treatment",
    },
    {
      icon: <HistoryOutlined className="text-rose-600 dark:text-rose-400" />,
      text: "checking prior-year unpaid entitlements or related-party balances that may affect the current decision",
    },
    {
      icon: <FileDoneOutlined className="text-emerald-600 dark:text-emerald-400" />,
      text: "preparing or coordinating the accounting information needed for the trustee's resolution and year-end records.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950/60 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Review Framework
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What does trust distribution planning involve?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A practical distribution review brings together the trust&apos;s legal framework and its current-year
            accounting and tax information. Depending on the trust, the process may include:
          </p>
        </div>

        {/* 7 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-12">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-start"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-3 shrink-0">
                {item.icon}
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-zinc-200 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Scope Boundaries Callout & Cross-Links */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <CheckCircleOutlined className="text-teal-600 dark:text-teal-400" />
              Annual Trustee Support vs Strategic Tax Advisory
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              This page focuses on the annual distribution process and trustee decision support. For broader strategic
              tax planning around trust distributions, see our{" "}
              <Link
                href="/services/tax-planning/trust-distribution-planning"
                className="text-teal-600 dark:text-teal-400 font-semibold hover:underline"
              >
                Trust Distribution Planning service
              </Link>{" "}
              under Tax Planning &amp; Advisory. For detailed annual tax reporting of distributions, our{" "}
              <Link
                href="/services/trusts/trust-tax-returns"
                className="text-teal-600 dark:text-teal-400 font-semibold hover:underline"
              >
                Trust Tax Returns service
              </Link>{" "}
              covers the tax treatment and reporting side separately.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
            <Link
              href="/services/tax-planning/trust-distribution-planning"
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 dark:text-zinc-200 bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700 transition-colors"
            >
              Strategic Planning Hub <ArrowRightOutlined className="ml-2 text-xs" />
            </Link>
            <Link
              href="/services/trusts/trust-tax-returns"
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 dark:text-zinc-200 bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700 transition-colors"
            >
              Trust Returns Hub <ArrowRightOutlined className="ml-2 text-xs" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
