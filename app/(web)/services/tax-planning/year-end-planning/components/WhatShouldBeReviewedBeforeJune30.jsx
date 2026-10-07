"use client";

import React from "react";
import Link from "next/link";
import { Button } from "antd";
import {
  FundOutlined,
  FileDoneOutlined,
  DollarCircleOutlined,
  HomeOutlined,
  ShoppingOutlined,
  CalculatorOutlined,
  SafetyCertificateOutlined,
  AuditOutlined,
  ArrowRightOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

/**
 * WhatShouldBeReviewedBeforeJune30 Component
 * ==========================================
 * Section 3: 8 key pre-June 30 review areas with strict tax timing rules,
 * superannuation notice of intent guidance, and cross-service links.
 * Verbatim text from Page 7 of the Tax Planning document.
 */
export default function WhatShouldBeReviewedBeforeJune30() {
  const reviewAreas = [
    {
      number: "01",
      icon: <FundOutlined className="text-xl text-brand-primary dark:text-emerald-400" />,
      title: "Expected Assessable Income",
      text: "Expected assessable income and any material changes from the prior year.",
    },
    {
      number: "02",
      icon: <FileDoneOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Deductions & Expenses",
      text: "Deductions and expenses, including whether the expenditure is genuinely deductible and correctly documented.",
    },
    {
      number: "03",
      icon: <DollarCircleOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Capital Gains & Losses Timing",
      text: "Capital gains and capital losses from property, shares or other CGT assets. The timing of a CGT event depends on the relevant rules and cannot simply be changed after the event has occurred.",
    },
    {
      number: "04",
      icon: <HomeOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Investment & Rental Property",
      text: "Investment and rental property income, expenses and records where relevant.",
    },
    {
      number: "05",
      icon: <ShoppingOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Asset Purchases & Depreciation",
      text: "Business asset purchases and depreciation treatment. The tax timing of an asset is not determined solely by when cash is paid, so the facts should be reviewed before assuming a deduction is available in the current year.",
    },
    {
      number: "06",
      icon: <CalculatorOutlined className="text-xl text-cyan-600 dark:text-cyan-400" />,
      title: "PAYG Instalments & Cash Flow",
      text: "PAYG instalments and anticipated tax liabilities, so cash-flow requirements can be considered.",
    },
    {
      number: "07",
      icon: <SafetyCertificateOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Superannuation Contribution Rules",
      text: "Superannuation contributions where relevant. A personal contribution does not automatically create a tax deduction. Where the eligibility requirements are met, the contribution must be received by the fund in the relevant income year, a valid notice of intent generally needs to be given within the required time, and the fund’s acknowledgement should be received before the deduction is claimed. Contribution caps and other conditions also need to be considered.",
    },
    {
      number: "08",
      icon: <AuditOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Records & Cost Base Evidence",
      text: "Records needed to support income, deductions and asset cost bases.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-zinc-900 border-b border-slate-100 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-primary/10 text-brand-primary dark:bg-emerald-500/10 dark:text-emerald-400 mb-4 border border-brand-primary/20 dark:border-emerald-500/20">
            Timing &amp; Checklist
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            What Should Be Reviewed Before 30 June?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
            Year-end planning should focus on matters that are actually relevant to you. Common review areas include:
          </p>
        </div>

        {/* 8 Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-14">
          {reviewAreas.map((item, idx) => (
            <div
              key={idx}
              className={`bg-slate-50 dark:bg-zinc-800/60 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-700/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between ${
                item.number === "07" ? "md:col-span-2 bg-emerald-50/40 dark:bg-emerald-950/20 border-emerald-200/70 dark:border-emerald-800/40" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 flex items-center justify-center border border-slate-200/80 dark:border-zinc-700 shadow-xs">
                    {item.icon}
                  </div>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-slate-200/70 dark:bg-zinc-700 text-slate-700 dark:text-zinc-300">
                    {item.number}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Post-EOFY Compliance Note with Quick Links */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-slate-900 to-slate-800 dark:from-zinc-900 dark:to-zinc-800 text-white rounded-3xl p-8 sm:p-10 shadow-xl">
          <div className="flex items-start gap-4 mb-6">
            <InfoCircleOutlined className="text-2xl text-emerald-400 mt-1 shrink-0" />
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              For detailed compliance work after year-end, our Business Tax Compliance service can assist with ongoing obligations. Individuals who are ready to report completed transactions can also use our Individual Tax Return service.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-2 border-t border-white/10">
            <Link href="/services/business-tax/business-tax-compliance">
              <Button
                type="link"
                className="p-0 font-bold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1.5 text-xs sm:text-sm h-auto"
                icon={<ArrowRightOutlined className="text-xs" />}
                iconPosition="end"
              >
                Business Tax Compliance
              </Button>
            </Link>
            <span className="text-slate-500 hidden sm:inline">•</span>
            <Link href="/services/individual-tax/individual-tax-return">
              <Button
                type="link"
                className="p-0 font-bold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1.5 text-xs sm:text-sm h-auto"
                icon={<ArrowRightOutlined className="text-xs" />}
                iconPosition="end"
              >
                Individual Tax Return
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
