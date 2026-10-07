"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  UserOutlined,
  FileDoneOutlined,
  SplitCellsOutlined,
  ExclamationCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * WhatIsASoleTraderTaxReturn Component
 * =====================================
 * Section: How Does a Sole Trader Tax Return Work?
 * Features 100% complete, verbatim content from Page 5 of client docx.
 * Explains reporting inside individual returns, separating private spending, and loss rules.
 */
export default function WhatIsASoleTraderTaxReturn() {
  const corePrinciples = [
    {
      icon: <UserOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Individual Carrying on a Business",
      desc: "A sole trader is an individual carrying on a business. Business income and deductible business expenses are generally reported in the business section of the individual’s tax return. There is no separate income tax return for the sole trader business itself.",
    },
    {
      icon: <SplitCellsOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Separating Business From Private",
      desc: "A sole trader tax accountant can help separate business items from private spending and identify records needed to support the figures reported, including business-use percentages and substantiation.",
    },
    {
      icon: <ExclamationCircleOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Business Loss Rules & Deferrals",
      desc: "If the business makes a loss, whether it can be offset in the current year or must be deferred depends on the applicable loss rules (such as non-commercial loss provisions) and the taxpayer’s circumstances.",
    },
  ];

  const returnScopeItems = [
    "Sales, contract and service income reconciliation",
    "Allowable business deductions and operating costs",
    "Depreciation and capital asset write-offs",
    "Business-use percentages (motor vehicles, phone, internet)",
    "Trading stock valuations at beginning and year-end",
    "Current-year loss offsets or non-commercial loss deferrals",
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Tax Structure &amp; Lodgment
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How Does a Sole Trader Tax Return Work?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A sole trader is an individual carrying on a business. Business income and deductible business expenses are generally reported in the business section of the individual’s tax return. There is no separate income tax return for the sole trader business itself.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          {/* Left Column: Verbatim Editorial Explanations */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-slate-50/80 dark:bg-zinc-800/80 p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-zinc-700/80 shadow-sm space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                <FileDoneOutlined className="text-teal-600 dark:text-teal-400" />
                Business Section of Your Individual Return
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                The return may need to deal with sales or service income, business deductions, depreciation, business-use percentages, trading stock, losses and other items depending on the nature of the activity.
              </p>
              <div className="h-px bg-slate-200 dark:bg-zinc-700 my-2" />
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                A sole trader tax accountant can help separate business items from private spending and identify records needed to support the figures reported. If the business makes a loss, whether it can be offset in the current year or must be deferred depends on the applicable loss rules and the taxpayer’s circumstances.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link href="/book-an-appointment">
                <Button
                  type="primary"
                  className="brand-btn-primary text-xs sm:text-sm font-semibold rounded-xl"
                  icon={<ArrowRightOutlined />}
                  iconPosition="end"
                >
                  Book Sole Trader Consultation
                </Button>
              </Link>
              <Link href="/services/business-tax">
                <Button
                  type="default"
                  className="brand-btn-outline text-xs sm:text-sm font-semibold rounded-xl"
                >
                  Explore Business Tax Hub
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: 3 Structured Highlights */}
          <div className="lg:col-span-6 space-y-4">
            {corePrinciples.map((item, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-zinc-800/90 border border-slate-200/80 dark:border-zinc-700/80 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm hover:shadow-md group flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Return Inclusions Bar */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-teal-50/70 via-emerald-50/50 to-white dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border border-teal-200/70 dark:border-zinc-800">
          <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
            What the Sole Trader Business Schedule Encompasses:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {returnScopeItems.map((scope, sIdx) => (
              <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-zinc-300">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-600 dark:text-teal-400 shrink-0" />
                <span>{scope}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
