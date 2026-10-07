"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  HomeOutlined,
  FileTextOutlined,
  DollarOutlined,
  SafetyCertificateOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * WhatIsInvestmentPropertyTax Component
 * =====================================
 * Section 1: What Is Investment Property Tax?
 * Features 100% complete, verbatim content from Page 5 of the client document.
 */
export default function WhatIsInvestmentPropertyTax() {
  const corePrinciples = [
    {
      icon: <FileTextOutlined className="text-xl text-brand-primary dark:text-emerald-400" />,
      title: "Rental Schedule in Individual Return",
      description:
        "For most individual owners, there is no separate rental property tax return. Rental income and eligible expenses are reported in a rental property schedule within the owner’s individual tax return.",
    },
    {
      icon: <DollarOutlined className="text-xl text-brand-primary dark:text-emerald-400" />,
      title: "Ownership & Borrowing Basis",
      description:
        "The correct treatment depends on the property’s ownership, how and when it was used, the purpose of any borrowed funds and the records available.",
    },
    {
      icon: <HomeOutlined className="text-xl text-brand-primary dark:text-emerald-400" />,
      title: "Capital Gains Tax (CGT) Intersection",
      description:
        "Capital gains tax may also need to be considered when the property is sold or its ownership changes, taking into account historical records and cost-base adjustments.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Overview &amp; Reporting Framework
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Is Investment Property Tax?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Investment property tax refers to the Australian tax treatment of income, expenses and capital gains connected with a rental property.
          </p>
        </div>

        {/* 3 Core Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {corePrinciples.map((item, index) => (
            <div
              key={index}
              className="group bg-slate-50/70 dark:bg-zinc-800/60 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-700/80 hover:border-brand-primary/40 dark:hover:border-emerald-500/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-700/80 border border-slate-200 dark:border-zinc-600 flex items-center justify-center shadow-xs mb-5 group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-zinc-700/60 flex items-center text-xs font-semibold text-brand-primary dark:text-emerald-400 gap-1.5">
                <CheckCircleOutlined className="text-emerald-500" />
                <span>ATO Compliant Schedule</span>
              </div>
            </div>
          ))}
        </div>

        {/* Callout Strip */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-50 via-white to-emerald-50 dark:from-zinc-800/80 dark:via-zinc-850 dark:to-zinc-800/80 border border-emerald-200/80 dark:border-emerald-800/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              First-time Landlord or Expanding Property Portfolio?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 max-w-2xl font-normal leading-relaxed">
              We review your ownership structure, tenant settlement statements, loan accounts and depreciation schedules to ensure complete reporting accuracy.
            </p>
          </div>
          <Link href="/book-an-appointment" className="shrink-0">
            <Button
              type="primary"
              size="large"
              className="brand-btn-primary font-bold px-6 h-11 text-sm shadow-md"
              icon={<ArrowRightOutlined />}
              iconPosition="end"
            >
              Book Property Review
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
