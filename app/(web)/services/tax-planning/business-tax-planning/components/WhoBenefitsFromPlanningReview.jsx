"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  RiseOutlined,
  SwapOutlined,
  ToolOutlined,
  BranchesOutlined,
  PercentageOutlined,
  AccountBookOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * WhoBenefitsFromPlanningReview Component
 * ========================================
 * Section 2: Who May Benefit From a Planning Review?
 * Verbatim text from Page 2 of '3rd Pillar Tax Planning & Advisory Final Content Pages 1-12.docx'.
 *
 * Details the 6 distinct scenarios where a small business tax planning review
 * delivers strategic clarity on profits, drawings, assets, and liabilities.
 */
export default function WhoBenefitsFromPlanningReview() {
  const beneficiaryScenarios = [
    {
      icon: <RiseOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      scenario: "Business owners expecting a significantly different profit result from the prior year.",
      detail: "Avoid sudden tax spikes or under-estimated PAYG instalments when trading revenue shifts markedly.",
    },
    {
      icon: <SwapOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      scenario: "Companies, trusts or partnerships considering distributions, drawings or owner-related transactions.",
      detail: "Ensure trust streaming rules, company dividend allocations, and partner drawings comply with current law.",
    },
    {
      icon: <ToolOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      scenario: "Businesses buying significant equipment or other assets.",
      detail: "Determine whether to acquire assets before 30 June, evaluate write-off limits, and structure finance agreements.",
    },
    {
      icon: <BranchesOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      scenario: "Owners considering a restructure, sale, new investor or change in ownership.",
      detail: "Evaluate CGT concessions, rollover relief, and tax implications before signing commercial agreements.",
    },
    {
      icon: <PercentageOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      scenario: "Businesses with changing GST, BAS, PAYG or payroll obligations.",
      detail: "Keep cash flow aligned with rising statutory obligations as turnover or staff headcount expands.",
    },
    {
      icon: <AccountBookOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      scenario: "Owners who want to understand likely tax liabilities before cash is committed elsewhere.",
      detail: "Gain complete visibility over tax provision reserves so operating cash is protected from unexpected notices.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Client Scenarios
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Who May Benefit From a Planning Review?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A planning review may be useful for established businesses, growing businesses and owners facing a material change. Small business tax planning can be particularly relevant when profits or cash flow are changing, new assets are being acquired, owners are drawing money from a company or trust, or a sale or restructure is being considered.
          </p>
        </div>

        {/* 6 Scenarios Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {beneficiaryScenarios.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-lg hover:border-emerald-400/60 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest">
                    Scenario 0{idx + 1}
                  </span>
                </div>

                <div className="flex items-start gap-2.5 mb-2.5">
                  <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-sm mt-1 shrink-0" />
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug">
                    {item.scenario}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed pl-6 font-normal">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Context Banner */}
        <div className="rounded-2xl bg-slate-100/80 dark:bg-zinc-800/60 border border-slate-200 dark:border-zinc-700/80 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              Unsure if your business needs a pre-year-end review?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 font-normal">
              Schedule an obligation-free discussion to clarify whether your circumstances call for a targeted planning review.
            </p>
          </div>
          <Link href="/book-an-appointment" className="shrink-0">
            <Button
              type="primary"
              size="large"
              icon={<ArrowRightOutlined />}
              iconPosition="end"
              className="rounded-xl font-bold bg-brand-primary dark:bg-emerald-500 text-white hover:bg-brand-primary/90 h-11 px-6 shadow-xs"
            >
              Consult an Advisor
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
