"use client";

import React from "react";
import { Button } from "antd";
import {
  AuditOutlined,
  CheckCircleOutlined,
  SafetyCertificateOutlined,
  BankOutlined,
  LineChartOutlined,
  FileTextOutlined,
  EyeOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import Link from "next/link";

/**
 * WhatSmsfAccountantDoes Component
 * ================================
 * Section 1 of SMSF Hub:
 * Explains how SMSF accountants manage fund financial statements, annual returns,
 * market valuations, and independent audit coordination under SIS Act compliance.
 *
 * Background: Lite Brand Gradient.
 */
export default function WhatSmsfAccountantDoes() {
  const corePillars = [
    {
      icon: <FileTextOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Annual Financial Statements",
      description:
        "Preparing annual operating statements, statements of financial position, and balance sheets with fund assets recorded at market value.",
      tag: "Financials",
    },
    {
      icon: <AuditOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Independent Audit Coordination",
      description:
        "Compiling audit workpapers and liaising with an ASIC-registered approved SMSF auditor to complete financial and regulatory compliance audits.",
      tag: "Audit Liaison",
    },
    {
      icon: <LineChartOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "SMSF Annual Tax Return (SAR)",
      description:
        "Calculating fund tax liabilities, franking credit refunds, member allocations, and lodging the SMSF Annual Return directly with the ATO.",
      tag: "ATO Return",
    },
  ];

  const complianceCheckpoints = [
    "Reconciling annual bank transactions, platform accounts, and term deposits",
    "Recording member contributions, rollovers, and pension drawdown payments",
    "Classifying investment income, franked dividends, and capital gains tax (CGT)",
    "Ensuring fund investments comply with the written SMSF Investment Strategy",
    "Facilitating the independent annual audit by an ASIC-registered approved SMSF auditor",
    "Appointing the fund auditor at least 45 days prior to the annual return deadline",
    "Maintaining compliance under the Superannuation Industry (Supervision) Act (SIS Act)",
    "Lodging the SMSF Annual Return (SAR) and supervisory levy with the ATO",
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-800/60 mb-4">
            <SafetyCertificateOutlined className="text-teal-600 dark:text-teal-400 text-xs sm:text-sm" />
            <span className="text-xs font-semibold text-teal-800 dark:text-teal-300 tracking-wide uppercase">
              Superannuation Compliance & Accounting
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Does an SMSF Accountant Do?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
            Running a self-managed super fund means trustees are legally responsible for fund records, tax reporting, and superannuation law compliance. Financially Up translates your fund&apos;s investment transactions into accurate annual accounts, tax lodgements, and streamlined audit files.
          </p>
        </div>

        {/* 3 Core Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {corePillars.map((pillar, index) => (
            <div
              key={index}
              className="group p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:border-teal-500/50 dark:hover:border-teal-500/50 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-zinc-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {pillar.icon}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400">
                    {pillar.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Deep Dive Box: Accounting vs Independent Audit */}
        <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm p-6 sm:p-8 lg:p-10 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 text-xs font-semibold mb-4">
                <BankOutlined />
                <span>Statutory Governance</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
                SMSF Accounting Supports the Mandatory Independent Audit
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed mb-4">
                Every SMSF is required by law to have its financial records and regulatory compliance audited each year by an independent ASIC-approved SMSF auditor before the annual return can be lodged.
              </p>
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed mb-6">
                Financially Up prepares clean, reconciled accounting workpapers that make the independent audit seamless. We answer auditor inquiries and ensure all documentation satisfies ATO market valuation guidelines.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link href="/book-an-appointment">
                  <Button
                    type="primary"
                    size="large"
                    icon={<ArrowRightOutlined />}
                    iconPosition="end"
                    className="h-11 px-6 rounded-xl font-semibold shadow-md shadow-brand-primary/20 hover:scale-[1.02] active:scale-[0.99] transition-all"
                  >
                    Book SMSF Consultation
                  </Button>
                </Link>
                <Link href="#smsf-services-overview">
                  <Button
                    size="large"
                    icon={<EyeOutlined />}
                    className="h-11 px-5 rounded-xl font-semibold border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-200 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-all"
                  >
                    Explore SMSF Scope
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Checkpoints Grid */}
            <div className="lg:col-span-5 bg-slate-50 dark:bg-zinc-950/60 rounded-xl p-5 sm:p-6 border border-slate-200/80 dark:border-zinc-800/80">
              <h4 className="text-xs font-bold text-slate-800 dark:text-zinc-200 uppercase tracking-wider mb-4 flex items-center gap-2">
                <CheckCircleOutlined className="text-teal-600 dark:text-teal-400" />
                <span>Annual Trustee Responsibilities</span>
              </h4>
              <ul className="space-y-2.5">
                {complianceCheckpoints.map((checkpoint, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 shrink-0" />
                    <span>{checkpoint}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
