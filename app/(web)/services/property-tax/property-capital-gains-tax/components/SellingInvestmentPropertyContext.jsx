"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  HomeOutlined,
  TeamOutlined,
  BarChartOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * SellingInvestmentPropertyContext Component
 * ==========================================
 * Section: What if you are selling an investment property?
 * Features 100% complete, verbatim content from Page 5 of 10th Pillar Property Tax.docx.
 */
export default function SellingInvestmentPropertyContext() {
  const auditPoints = [
    {
      icon: <HomeOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Acquisition & Disposal Timeline",
      description: "Examining exchange dates, settlement adjustments, and continuous tenure history.",
    },
    {
      icon: <TeamOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Legal Ownership & Co-Owner Interests",
      description: "Reporting gains strictly per title percentages regardless of which co-owner paid costs.",
    },
    {
      icon: <BarChartOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Depreciation & Prior Deductions",
      description: "Recalculating capital works deductions claimed and adjusting final cost base accordingly.",
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
            Investment Portfolios
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What if You Are Selling an Investment Property?
          </h2>
        </div>

        {/* 3 Review Points Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {auditPoints.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 dark:bg-zinc-900/70 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-800 border border-slate-200/70 dark:border-zinc-700/60 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* 2 Verbatim Text Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          {/* Paragraph 1 */}
          <div className="bg-slate-50/80 dark:bg-zinc-900/80 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-4">
              <CheckCircleOutlined />
              <span>Investment Disposal Scope</span>
            </div>
            {/* Verbatim text from official document */}
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
              For an investment property, we review acquisition and sale dates, legal ownership, rental history, capital improvements, depreciation and capital works schedules, and prior deductions. Joint owners generally calculate and report their respective interests; payment of expenses by one owner does not necessarily change legal ownership.
            </p>
          </div>

          {/* Paragraph 2 & Cross-Link */}
          <div className="bg-slate-50/80 dark:bg-zinc-900/80 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 mb-4">
                <HomeOutlined />
                <span>Annual Rental Compliance Scope</span>
              </div>
              {/* Verbatim text from official document */}
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
                This page focuses on the sale. For rental income and deductions while the property is held, see our Investment Property Tax service.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200/70 dark:border-zinc-800">
              <Link href="/services/property-tax/investment-property-tax">
                <Button
                  type="default"
                  className="brand-btn-secondary w-full sm:w-auto font-medium"
                >
                  Explore Investment Property Tax <ArrowRightOutlined />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
