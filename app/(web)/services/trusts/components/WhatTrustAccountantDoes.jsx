"use client";

import React from "react";
import { Button } from "antd";
import {
  ApartmentOutlined,
  CheckCircleOutlined,
  SafetyCertificateOutlined,
  BankOutlined,
  DollarOutlined,
  AuditOutlined,
  EyeOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import Link from "next/link";

/**
 * WhatTrustAccountantDoes Component
 * =================================
 * Section 1 of Trust Accounting Hub:
 * Explains how trust accountants translate financial activity under trust deeds into
 * compliant annual financial statements, tax returns, and beneficiary distributions.
 *
 * Background: Lite Brand Gradient.
 */
export default function WhatTrustAccountantDoes() {
  const corePillars = [
    {
      icon: <ApartmentOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Trust Deed & Accounting Alignment",
      description:
        "Interpreting accounting and tax income definitions under the trust deed, classifying capital vs revenue items, and ensuring trustee actions are lawful.",
      tag: "Deed Terms",
    },
    {
      icon: <DollarOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Beneficiary Distributions & Schedules",
      description:
        "Preparing annual distribution statements, franking credit streaming schedules, capital gains tax discounts, and beneficiary entitlement accounts.",
      tag: "Distributions",
    },
    {
      icon: <AuditOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Trust Tax Returns & Compliance",
      description:
        "Calculating trust net income under Section 95, preparing trust tax returns, and coordinating with beneficiary personal or corporate tax returns.",
      tag: "ATO Lodgement",
    },
  ];

  const accountingCheckpoints = [
    "Preparing and reconciling annual balance sheets, profit & loss, and ledger accounts",
    "Analysing business revenue, commercial rent, dividends, and trust capital gains",
    "Calculating franking credits and streaming eligible capital gains to beneficiaries",
    "Preparing beneficiary distribution schedules supporting year-end trustee resolutions",
    "Reviewing beneficiary loan accounts and Division 7A unpaid present entitlements (UPEs)",
    "Lodging the annual Trust Tax Return with the ATO regardless of net profit or loss",
    "Coordinating trust accounting with corporate trustees and related family entities",
    "Identifying when trust deed amendments require specialist legal drafting",
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-800/60 mb-4">
            <ApartmentOutlined className="text-teal-600 dark:text-teal-400 text-xs sm:text-sm" />
            <span className="text-xs font-semibold text-teal-800 dark:text-teal-300 tracking-wide uppercase">
              Trust Administration & Compliance
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Does a Trust Accountant Do?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
            A trust separates legal ownership from beneficial entitlement, creating distinct accounting and tax responsibilities. Financially Up translates your trust&apos;s financial activity into accurate financial accounts, distribution statements, and compliant tax returns.
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

        {/* Deep Dive Box: Trust Accounting & Distribution Integrity */}
        <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm p-6 sm:p-8 lg:p-10 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 text-xs font-semibold mb-4">
                <SafetyCertificateOutlined />
                <span>Present Entitlement & Tax Governance</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Trust Accounting, Taxation and Beneficiary Distributions
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed mb-4">
                A trust is neither simply taxed like a company nor automatically taxed through beneficiaries in every scenario. Income tax outcomes depend on who is made presently entitled to trust income by 30 June under the terms of the trust deed.
              </p>
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed mb-6">
                Financially Up prepares the financial statements and tax estimates trustees need to make valid distribution decisions before statutory deadlines, ensuring your trust distributions stand up to ATO scrutiny and integrity reviews.
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
                    Book Trust Consultation
                  </Button>
                </Link>
                <Link href="#trust-services-overview">
                  <Button
                    size="large"
                    icon={<EyeOutlined />}
                    className="h-11 px-5 rounded-xl font-semibold border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-200 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-all"
                  >
                    Explore All Trust Services
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Checkpoints Grid */}
            <div className="lg:col-span-5 bg-slate-50 dark:bg-zinc-950/60 rounded-xl p-5 sm:p-6 border border-slate-200/80 dark:border-zinc-800/80">
              <h4 className="text-xs font-bold text-slate-800 dark:text-zinc-200 uppercase tracking-wider mb-4 flex items-center gap-2">
                <CheckCircleOutlined className="text-teal-600 dark:text-teal-400" />
                <span>Core Accounting Checkpoints</span>
              </h4>
              <ul className="space-y-2.5">
                {accountingCheckpoints.map((checkpoint, idx) => (
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
