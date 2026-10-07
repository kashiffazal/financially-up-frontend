"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  DollarOutlined,
  LineChartOutlined,
  HomeOutlined,
  AuditOutlined,
  SafetyCertificateOutlined,
  ThunderboltOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * WhatHighIncomePlanningInvolves Component
 * ========================================
 * Section 1: What does high income tax planning involve?
 * Verbatim text from Page 4 of '3rd Pillar Tax Planning & Advisory Final Content Pages 1-12.docx'.
 *
 * Details the forward-looking scope for executives and high earners across salary, bonuses,
 * investment portfolios, rental property, CGT, superannuation, and employee share schemes.
 */
export default function WhatHighIncomePlanningInvolves() {
  const scopeAreas = [
    {
      icon: <DollarOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Salary, Bonuses & Commissions",
      desc: "Analyzing bonus timing, withholding rate variations, top marginal tax bracket thresholds, and salary packaging.",
    },
    {
      icon: <LineChartOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Investment Portfolios & Dividends",
      desc: "Reviewing franking credits, trust distributions, interest, and foreign investment income across diversified holdings.",
    },
    {
      icon: <HomeOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Rental Property Portfolios",
      desc: "Evaluating borrowing costs, depreciation deductions, negative gearing cash flows, and prospective property sales.",
    },
    {
      icon: <AuditOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Capital Gains & Asset Disposals",
      desc: "Reviewing CGT event A1 contract dates, available cost bases, 50% CGT discounts, and capital loss utilization.",
    },
    {
      icon: <SafetyCertificateOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Superannuation & Division 293",
      desc: "Modeling concessional contribution caps, carry-forward unused amounts, and Division 293 high-earner tax liabilities.",
    },
    {
      icon: <ThunderboltOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Employee Share Schemes (ESS)",
      desc: "Assessing taxing points for employee share schemes, rights, performance options, and deferred vesting rules.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Executive Advisory Scope
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Does High Income Tax Planning Involve?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            High income tax planning involves reviewing the tax implications of income, investments and planned transactions before they are finalized where possible. It differs from tax return preparation, which mainly reports events that have already occurred.
          </p>
          <p className="mt-3 text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
            A planning review may consider salary and bonuses, investment income, rental property, capital gains, eligible deductions, superannuation contributions, employee share interests and changes in personal circumstances. The appropriate focus depends on your facts; not every strategy or concession is available to every taxpayer.
          </p>
        </div>

        {/* 6 Scope Focus Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {scopeAreas.map((area, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between bg-white dark:bg-zinc-900 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-lg hover:border-emerald-400/60 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    {area.icon}
                  </div>
                  <span className="text-[11px] font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest">
                    Focus 0{idx + 1}
                  </span>
                </div>

                <div className="flex items-start gap-2.5 mb-2.5">
                  <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-sm mt-1 shrink-0" />
                  <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                    {area.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed pl-6 font-normal">
                  {area.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* High-Intent Appointment Callout Banner */}
        <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-emerald-800 to-teal-900 text-white shadow-lg border border-emerald-700/60 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-emerald-200 text-xs font-bold uppercase tracking-wider">
              <AuditOutlined className="text-base" />
              <span>Initial Consultation</span>
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-white">
              Schedule Your Executive Tax Planning Session
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-normal">
              Your first discussion can cover your income sources, investments, expected transactions, current records, timing issues and whether separate tax or specialist advice is required.
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <Link href="/book-an-appointment">
              <Button
                type="primary"
                size="large"
                icon={<ArrowRightOutlined />}
                iconPosition="end"
                className="w-full md:w-auto rounded-xl font-bold bg-white text-emerald-900 hover:bg-emerald-50 hover:text-emerald-950 border-none h-11 px-6 shadow-md"
              >
                Book an Appointment
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
