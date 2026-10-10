"use client";

import React from "react";
import { Tag } from "antd";
import {
  PercentageOutlined,
  StopOutlined,
  GlobalOutlined,
  CheckCircleOutlined,
  AlertOutlined,
} from "@ant-design/icons";

/**
 * CgtDiscountEligibilityRules Component
 * =====================================
 * Section: Is the CGT discount available?
 * Features 100% complete, verbatim content from Page 5 of 10th Pillar Property Tax.docx.
 */
export default function CgtDiscountEligibilityRules() {
  const discountEntities = [
    {
      title: "Individuals & Discretionary Trusts",
      status: "Eligible for 50% Discount",
      color: "green",
      description: "Eligible for the 50% CGT discount provided the property asset has been held for at least 12 months prior to the contract date of sale.",
    },
    {
      title: "Complying SMSFs",
      status: "Eligible for 33.33% Discount",
      color: "blue",
      description: "Complying superannuation funds receive a 33.33% discount on assets held for over 12 months, resulting in an effective 10% tax rate in accumulation.",
    },
    {
      title: "Companies & Corporate Entities",
      status: "Ineligible (0% Discount)",
      color: "red",
      description: "Companies cannot access the general 50% CGT discount. Net capital gains are taxed at the full corporate headline rate (25% or 30%).",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Concessions &amp; Residency Rules
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Is the CGT Discount Available?
          </h2>
        </div>

        {/* 3 Entity Discount Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {discountEntities.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 dark:bg-zinc-900/70 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Tag color={item.color} className="font-semibold text-xs uppercase">
                    {item.status}
                  </Tag>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 2 Verbatim Text Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          {/* Paragraph 1 */}
          <div className="bg-slate-50/80 dark:bg-zinc-900/80 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-4">
              <CheckCircleOutlined />
              <span>12-Month Holding Rule &amp; Entity Restrictions</span>
            </div>
            {/* Verbatim text from official document */}
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
              Individuals and trusts may generally access the CGT discount for an eligible asset held for at least 12 months. The acquisition and disposal dates, type of owner and other conditions must be checked. Companies cannot use the general CGT discount.
            </p>
          </div>

          {/* Paragraph 2 */}
          <div className="bg-slate-50/80 dark:bg-zinc-900/80 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-4">
              <GlobalOutlined />
              <span>Foreign Residency &amp; Life-Event Restrictions</span>
            </div>
            {/* Verbatim text from official document */}
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
              Foreign-residency periods can restrict the discount, and foreign residents are generally not entitled to the main-residence exemption unless a specified life-event exception applies. Residency history should therefore be identified early rather than dealt with after the gain has been calculated.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
