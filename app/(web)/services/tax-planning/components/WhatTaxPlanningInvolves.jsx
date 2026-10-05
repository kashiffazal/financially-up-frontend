"use client";

import React from "react";
import { Button } from "antd";
import {
  CompassOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  SafetyCertificateOutlined,
  ThunderboltOutlined,
  FileSearchOutlined,
  EyeOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import Link from "next/link";

/**
 * WhatTaxPlanningInvolves Component
 * =================================
 * Section 1 of Tax Planning Hub:
 * Explains forward-looking tax planning versus reactive tax filing,
 * highlighting lawful tax planning principles and core review areas.
 */
export default function WhatTaxPlanningInvolves() {
  const coreAspects = [
    {
      icon: <ClockCircleOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Forward-Looking Strategy",
      description:
        "Unlike tax return preparation which reports historical events, tax planning examines decisions before they are legally executed or financial year-ends pass.",
      tag: "Proactive Timing",
    },
    {
      icon: <FileSearchOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Review of Expected Position",
      description:
        "We review projected income, deductible expenses, PAYG instalments, and BAS liabilities to provide a reliable forecast of upcoming tax cash flow.",
      tag: "Cash Flow Visibility",
    },
    {
      icon: <SafetyCertificateOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "100% Lawful & Evidence-Based",
      description:
        "Tax planning does not manufacture artificial deductions. It means making informed, legally compliant decisions supported by proper evidentiary records.",
      tag: "ATO Compliant",
    },
  ];

  const reviewCheckpoints = [
    "Projected business and personal taxable income",
    "Legitimate timing of deductible expenses and asset purchases",
    "PAYG instalments and quarterly BAS cash-flow impact",
    "Entity structuring (Companies, Trusts, Partnerships, Sole Traders)",
    "Capital gains tax (CGT) events on property, equities, or business assets",
    "Superannuation contribution limits, caps, and notice of intent rules",
    "Record-keeping integrity and substantiation requirements",
    "Independent specialist referrals where legal or financial advice is needed",
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-800/60 mb-4">
            <CompassOutlined className="text-teal-600 dark:text-teal-400 text-xs sm:text-sm" />
            <span className="text-xs font-semibold text-teal-800 dark:text-teal-300 tracking-wide uppercase">
              Strategic Advisory
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Do Tax Planning Services Involve?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
            Tax planning is about considering the tax consequences of decisions{" "}
            <span className="font-semibold text-slate-900 dark:text-white">
              before they are locked in
            </span>
            . Financially Up provides practical tax planning for Australian individuals and businesses that want
            a clearer view of upcoming obligations, legitimate planning opportunities, and the records needed to support their position.
          </p>
        </div>

        {/* 3 Core Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {coreAspects.map((aspect, index) => (
            <div
              key={index}
              className="group p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:border-teal-500/50 dark:hover:border-teal-500/50 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-zinc-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {aspect.icon}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400">
                    {aspect.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {aspect.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                  {aspect.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Deep Dive: Planning vs Reporting Comparison Box */}
        <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm p-6 sm:p-8 lg:p-10 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 text-xs font-semibold mb-4">
                <ThunderboltOutlined />
                <span>Forward Strategy vs Historical Filing</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Informed Decisions Within the Law
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed mb-4">
                Tax planning does not mean manufacturing deductions or avoiding tax obligations. It means making informed decisions within the law, based on current rules and verifiable evidence that can support the position taken.
              </p>
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed mb-6">
                A tax planning accountant can help you understand the tax impact of different choices without assuming that one strategy suits every taxpayer. The right approach depends on your unique circumstances, cash flow, and prevailing ATO legislation.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link href="/book-an-appointment">
                  <Button
                    type="primary"
                    size="large"
                    icon={<ArrowRightOutlined />}
                    iconPosition="end"
                    className="h-11 px-6 rounded-xl font-semibold shadow-md shadow-brand-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    Book a Planning Session
                  </Button>
                </Link>
                <Link href="#tax-planning-services">
                  <Button
                    size="large"
                    icon={<EyeOutlined />}
                    className="h-11 px-5 rounded-xl font-semibold border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-200 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-all"
                  >
                    View All 11 Services
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Checkpoints Grid */}
            <div className="lg:col-span-5 bg-slate-50 dark:bg-zinc-950/60 rounded-xl p-5 sm:p-6 border border-slate-200/80 dark:border-zinc-800/80">
              <h4 className="text-xs font-bold text-slate-800 dark:text-zinc-200 uppercase tracking-wider mb-4 flex items-center gap-2">
                <CheckCircleOutlined className="text-teal-600 dark:text-teal-400" />
                <span>Areas Commonly Evaluated</span>
              </h4>
              <ul className="space-y-2.5">
                {reviewCheckpoints.map((checkpoint, idx) => (
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
