"use client";

import React from "react";
import Link from "next/link";
import {
  GlobalOutlined,
  CheckCircleFilled,
  ArrowRightOutlined,
  DollarOutlined,
  BankOutlined,
  LineChartOutlined,
  HomeOutlined,
  SafetyCertificateOutlined,
  TeamOutlined,
} from "@ant-design/icons";

/**
 * WhyTaxResidencyMattersSection Component
 * =======================================
 * Section 2: Why Does Tax Residency Matter? & Worldwide Income Scope
 * Exact verbatim content from Client Document (Page 3).
 */
export default function WhyTaxResidencyMattersSection() {
  const broadTerms = [
    {
      title: "Australian residents for tax purposes",
      desc: "Generally taxed on assessable income from Australia and overseas.",
    },
    {
      title: "Foreign residents",
      desc: "Generally taxed in Australia on Australian-sourced income.",
    },
    {
      title: "Qualifying temporary residents",
      desc: "Special statutory rules can apply to exempt offshore investment earnings.",
    },
    {
      title: "Changes in residency",
      desc: "Can affect the treatment of certain capital assets and trigger deemed acquisitions or disposals.",
    },
    {
      title: "Tax treaties",
      desc: "Can become relevant where two countries both consider you a resident under their domestic laws.",
    },
  ];

  const worldwideIncomeStreams = [
    { label: "Employment income", icon: <DollarOutlined className="text-teal-600 dark:text-teal-400" /> },
    { label: "Interest", icon: <BankOutlined className="text-blue-600 dark:text-blue-400" /> },
    { label: "Dividends", icon: <LineChartOutlined className="text-indigo-600 dark:text-indigo-400" /> },
    { label: "Rental income", icon: <HomeOutlined className="text-amber-600 dark:text-amber-400" /> },
    { label: "Business income", icon: <TeamOutlined className="text-purple-600 dark:text-purple-400" /> },
    { label: "Pensions", icon: <SafetyCertificateOutlined className="text-cyan-600 dark:text-cyan-400" /> },
    { label: "Investment gains", icon: <LineChartOutlined className="text-rose-600 dark:text-rose-400" /> },
  ];

  return (
    <section className="py-16 md:py-20 bg-white dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Left Column */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-100 text-blue-800 dark:bg-blue-950/80 dark:text-blue-300 border border-blue-200 dark:border-blue-800/80 mb-4">
              <GlobalOutlined /> Strategic Impact
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              Why Does Tax Residency Matter?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Tax residency can significantly affect your Australian tax obligations. In broad terms:
            </p>

            <div className="mt-8 p-6 rounded-2xl bg-slate-50 dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 space-y-4">
              <p className="text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
                Residency should therefore be reviewed before deciding whether overseas income needs to be declared.
              </p>
              <p className="text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
                Once residency is established, our{" "}
                <Link
                  href="/services/international-tax/foreign-income-tax"
                  className="font-semibold text-teal-600 dark:text-teal-400 hover:underline inline-flex items-center gap-1"
                >
                  Foreign Income Tax service <ArrowRightOutlined className="text-xs" />
                </Link>{" "}
                can address which overseas amounts and foreign tax information belong in the Australian return.
              </p>
            </div>
          </div>

          {/* Right Column: 5 Broad Terms Cards */}
          <div className="lg:col-span-7 space-y-3.5">
            {broadTerms.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 flex items-start gap-4 hover:border-teal-500/40 dark:hover:border-teal-500/40 transition-colors"
              >
                <CheckCircleFilled className="text-teal-600 dark:text-teal-400 text-lg mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white mb-0.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Australian Tax Residency and Worldwide Income */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800">
          <div className="max-w-3xl mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">
              Australian Tax Residency and Worldwide Income
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Residency is important because Australian residents are generally required to report assessable worldwide income. This can include foreign:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-8">
            {worldwideIncomeStreams.map((s, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white dark:bg-zinc-800/90 border border-slate-200/80 dark:border-zinc-700/80 flex flex-col items-center text-center justify-center gap-2 shadow-xs"
              >
                <div className="text-xl">{s.icon}</div>
                <span className="text-xs font-semibold text-slate-800 dark:text-zinc-200">
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-teal-50/70 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-800/60">
            <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-medium">
              Foreign residents are generally subject to Australian tax on Australian-sourced income instead. Special rules can apply, so residency should be resolved before determining which overseas amounts belong in an Australian return.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
