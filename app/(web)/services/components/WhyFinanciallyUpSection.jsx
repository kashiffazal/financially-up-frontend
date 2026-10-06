"use client";

import React from "react";
import { Tag } from "antd";
import {
  SafetyCertificateOutlined,
  TeamOutlined,
  DollarCircleOutlined,
  GlobalOutlined,
  LockOutlined,
  CompassOutlined,
} from "@ant-design/icons";

/**
 * 6 Core Value Pillars
 */
const WHY_CHOOSE_PILLARS = [
  {
    icon: <SafetyCertificateOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
    title: "Registered Tax & ASIC Agents",
    description:
      "Fully licensed with the Tax Practitioners Board (TPB) and ASIC. Every return adheres strictly to Australian taxation laws and current compliance standards.",
  },
  {
    icon: <TeamOutlined className="text-2xl text-teal-600 dark:text-teal-400" />,
    title: "Qualified CPA Specialists",
    description:
      "Real, certified Australian accountants review every schedule, deduction claim, and balance sheet. No automated black boxes or offshored guesswork.",
  },
  {
    icon: <DollarCircleOutlined className="text-2xl text-cyan-600 dark:text-cyan-400" />,
    title: "Fixed, Upfront Transparent Fees",
    description:
      "Agreed-upon scope and pricing confirmed upfront before work begins. No hidden admin fees, surprise hourly rates, or unexpected invoicing.",
  },
  {
    icon: <GlobalOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
    title: "100% Australia-Wide Reach",
    description:
      "Whether you reside in Sydney, Melbourne, Brisbane, regional Queensland, or overseas as an Australian expat, our online appointments keep you connected.",
  },
  {
    icon: <LockOutlined className="text-2xl text-indigo-600 dark:text-indigo-400" />,
    title: "Bank-Grade Digital Security",
    description:
      "Encrypted cloud document exchanges, strict privacy protocols, and convenient electronic signatures ensure your personal data is secure at all times.",
  },
  {
    icon: <CompassOutlined className="text-2xl text-amber-600 dark:text-amber-400" />,
    title: "Proactive, Year-Round Guidance",
    description:
      "We don't disappear after tax season. We assist with quarterly BAS, pre-30 June tax planning, corporate compliance, and strategic business advice year-round.",
  },
];

/**
 * WhyFinanciallyUpSection Component
 * =================================
 * Reinforces client trust with 6 pillars of difference, CPA credentials,
 * and satisfaction guarantees.
 */
export default function WhyFinanciallyUpSection() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 transition-colors duration-300 border-t border-slate-100 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Why Financially Up
          </Tag>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Built on Professional Integrity, Accuracy &amp; Transparency
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed">
            Discover why individuals, business owners, and trustees across Australia trust
            Financially Up for all their accounting and taxation needs.
          </p>
        </div>

        {/* 6 Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-lg hover:border-emerald-400/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 flex items-center justify-center mb-5 shadow-2xs">
                {pillar.icon}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
