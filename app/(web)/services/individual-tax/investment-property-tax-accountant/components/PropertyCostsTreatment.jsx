"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  ThunderboltOutlined,
  ClockCircleOutlined,
  SafetyCertificateOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * PropertyCostsTreatment Component
 * ================================
 * Section 4: How Property Costs May Be Treated.
 * Features 100% complete, verbatim content from Page 5 of the client document.
 */
export default function PropertyCostsTreatment() {
  const treatmentTiers = [
    {
      tier: "Tier 1",
      badge: "Same Year Deductions",
      title: "Expenses that May Be Deductible Immediately",
      description:
        "Certain day-to-day costs may be deductible in the year they are incurred, provided they relate to earning rental income and satisfy the applicable requirements. Examples may include property management fees, council rates, insurance and eligible repairs.",
      examples: [
        "Property management fees",
        "Council & water rates",
        "Landlord insurance policies",
        "Eligible wear-and-tear repairs",
      ],
      icon: <ThunderboltOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      theme: "border-emerald-200/80 dark:border-emerald-800/40 bg-emerald-50/40 dark:bg-emerald-950/20",
    },
    {
      tier: "Tier 2",
      badge: "Multi-Year Amortisation",
      title: "Costs Claimed Over Time",
      description:
        "Some expenses are generally claimed over more than one income year. These may include borrowing expenses, eligible capital works and the decline in value of qualifying depreciating assets.",
      examples: [
        "Borrowing expenses (e.g. loan establishment fees over 5 yrs)",
        "Capital works (Division 43 - structural building write-off)",
        "Depreciating plant & equipment assets (Division 40)",
      ],
      icon: <ClockCircleOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      theme: "border-blue-200/80 dark:border-blue-800/40 bg-blue-50/40 dark:bg-blue-950/20",
    },
    {
      tier: "Tier 3",
      badge: "CGT Cost-Base Inclusions",
      title: "Capital and Cost-Base Expenses",
      description:
        "Purchase costs, sale costs and certain capital improvements are not generally immediate deductions. Depending on the circumstances, they may form part of the property’s cost base or otherwise affect the capital gains tax calculation. Adjustments may also be required for amounts that have been claimed, or could have been claimed, during ownership.",
      examples: [
        "Stamp duty & conveyancing legal fees on purchase",
        "Real estate selling agent commissions",
        "Substantial renovations & structural additions",
        "Cost base reductions for Division 43 claims",
      ],
      icon: <SafetyCertificateOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      theme: "border-purple-200/80 dark:border-purple-800/40 bg-purple-50/40 dark:bg-purple-950/20",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Tax Classification
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How Property Costs May Be Treated
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Property-related costs do not all receive the same tax treatment under Australian law. Understanding the 3 treatment categories is essential for correct lodgement.
          </p>
        </div>

        {/* 3 Treatment Tiers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {treatmentTiers.map((tier, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-between rounded-3xl p-7 sm:p-8 border ${tier.theme} shadow-xs hover:shadow-lg transition-all duration-300`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 flex items-center justify-center shadow-2xs">
                    {tier.icon}
                  </div>
                  <Tag className="m-0 font-bold text-2xs uppercase tracking-wider py-0.5 px-2.5 rounded-full border-slate-300 dark:border-zinc-700 bg-white/90 dark:bg-zinc-800/90 text-slate-800 dark:text-zinc-200">
                    {tier.badge}
                  </Tag>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                  {tier.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-5">
                  {tier.description}
                </p>

                <div className="space-y-2 pt-3 border-t border-slate-200/50 dark:border-zinc-700/50">
                  <span className="text-2xs uppercase tracking-wider font-bold text-slate-400 dark:text-zinc-500 block mb-1">
                    Typical Components:
                  </span>
                  {tier.examples.map((item, exIdx) => (
                    <div
                      key={exIdx}
                      className="flex items-center gap-2 text-xs text-slate-700 dark:text-zinc-300 font-medium"
                    >
                      <CheckCircleOutlined className="text-emerald-500 text-xs shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-zinc-700/60 text-2xs text-slate-500 dark:text-zinc-400">
                Categorised during your tax preparation
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center">
          <Link href="/book-an-appointment">
            <Button
              type="primary"
              size="large"
              className="brand-btn-primary font-bold px-8 h-11 text-sm shadow-md"
              icon={<ArrowRightOutlined />}
              iconPosition="end"
            >
              Get Your Property Costs Properly Categorised
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
