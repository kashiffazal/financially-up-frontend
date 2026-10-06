"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  ExclamationCircleOutlined,
  CheckCircleOutlined,
  DollarOutlined,
  ApartmentOutlined,
  GiftOutlined,
  LineChartOutlined,
  HomeOutlined,
  RiseOutlined,
  AuditOutlined,
  SwapOutlined,
  ArrowRightOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";

/**
 * WhenHighIncomeBecomesComplex Component
 * =======================================
 * Section 1: When High Income Tax Situations Become More Complex.
 * Features 100% complete, verbatim content from Page 3 of the client document.
 * Includes interactive cards for the 9 distinct complexity triggers with icons and micro-styling.
 */
export default function WhenHighIncomeBecomesComplex() {
  const triggers = [
    {
      title: "bonuses, commissions, allowances or other variable remuneration",
      detail: "Fluctuating performance payments and complex payroll allowances across the income year.",
      icon: <DollarOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      tag: "Remuneration",
    },
    {
      title: "income from more than one employer or source",
      detail: "Multiple concurrent employers, director fees, consulting revenue, and dual PAYG withholding.",
      icon: <ApartmentOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      tag: "Multi-Source",
    },
    {
      title: "salary packaging or reportable fringe benefits",
      detail: "Corporate vehicle leases, expense packaging, and reportable fringe benefits on payment summaries.",
      icon: <GiftOutlined className="text-xl text-cyan-600 dark:text-cyan-400" />,
      tag: "FBT & Packaging",
    },
    {
      title: "employee shares, options or other equity-based remuneration",
      detail: "Vesting schedules, ESS taxing points, discounts, and subsequent CGT cost base tracking.",
      icon: <LineChartOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      tag: "ESS & Equity",
    },
    {
      title: "dividends, managed fund distributions or trust distributions",
      detail: "Franking credits, streaming trust distributions, AMMA statements, and tax-deferred amounts.",
      icon: <RiseOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      tag: "Investments",
    },
    {
      title: "investment property income and expenses",
      detail: "Rental property portfolios, apportioned interest, depreciation schedules, and capital works claims.",
      icon: <HomeOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      tag: "Property",
    },
    {
      title: "capital gains from shares, property, crypto assets or other investments",
      detail: "Disposal of assets, CGT discount calculations, cost-base reconstruction, and capital losses.",
      icon: <AuditOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      tag: "Capital Gains",
    },
    {
      title: "substantial work-related deductions requiring supporting records",
      detail: "Significant occupational travel, home office, self-education, and professional library claims.",
      icon: <CheckCircleOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      tag: "Deductions",
    },
    {
      title: "a significant change in employment, income, residency or working arrangements",
      detail: "Expatriate transitions, change in residency status, redundancy payouts, or shifts to contracting.",
      icon: <SwapOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      tag: "Transition",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Complexity Analysis
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            When High Income Tax Situations Become More Complex
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A higher income does not automatically make your tax return difficult. Complexity usually arises when your income, investments or personal circumstances create several tax issues that need to be considered together.
          </p>
          <p className="mt-2 text-sm sm:text-base font-semibold text-emerald-700 dark:text-emerald-400">
            Professional assistance may be useful if you have:
          </p>
        </div>

        {/* 9 Trigger Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {triggers.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between bg-white dark:bg-zinc-900 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-lg hover:border-emerald-400/60 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center transition-transform group-hover:scale-110">
                    {item.icon}
                  </div>
                  <Tag className="text-[11px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 border-none m-0">
                    {item.tag}
                  </Tag>
                </div>

                <div className="flex items-start gap-2.5 mb-3">
                  <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-sm mt-1 shrink-0" />
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug capitalize-first">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed pl-6 font-normal">
                  {item.detail}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-zinc-800/80 flex items-center justify-between text-xs text-slate-400 dark:text-zinc-500">
                <span>Trigger Factor #{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</span>
                <span className="font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Included in Review <ArrowRightOutlined className="text-[10px]" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Concluding Compliance Notice Box */}
        <div className="rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-800/50 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center gap-4 w-full shadow-xs">
          <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
            <SafetyCertificateOutlined className="text-2xl" />
          </div>
          <div className="flex-1">
            <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-1">
              Purpose &amp; Professional Standard
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
              A tax accountant for high income earners can review how these matters interact, identify the records needed and explain the tax treatment that may apply. The aim is not to create deductions or outcomes that are not available. It is to prepare your return using the information provided and the Australian tax rules relevant to your circumstances.
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto mt-2 md:mt-0">
            <Link href="/book-an-appointment">
              <Button
                type="primary"
                className="w-full md:w-auto font-bold rounded-xl bg-brand-primary hover:bg-brand-primary-dark border-none h-10 px-5"
              >
                Discuss Your Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
