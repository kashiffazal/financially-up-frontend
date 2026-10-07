"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  FileSearchOutlined,
  DollarOutlined,
  CalculatorOutlined,
  TeamOutlined,
  ExclamationCircleOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * WhatPartnershipReturnReports Component
 * =======================================
 * Section: What Does a Partnership Tax Return Report?
 * Features 100% complete, verbatim content from Page 4 of client docx.
 * Itemizes assessable income, allowable deductions, partner allocations, and loss rules.
 */
export default function WhatPartnershipReturnReports() {
  const returnComponents = [
    {
      num: "01",
      icon: <DollarOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Business Sales, Fees & Other Income",
      desc: "Trading income, professional consulting fees, service revenues, interest, and other business earnings received during the financial year.",
    },
    {
      num: "02",
      icon: <CalculatorOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Deductible Operating Costs & Expenses",
      desc: "Commercial rent, materials, utilities, professional fees, insurance, software, motor vehicle expenses, and allowable operational deductions.",
    },
    {
      num: "03",
      icon: <FileSearchOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Depreciation & Asset-Related Amounts",
      desc: "Capital allowances, temporary or simplified depreciation deductions, balancing adjustments, and commercial asset write-offs.",
    },
    {
      num: "04",
      icon: <TeamOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Trust & Partnership Distributions Received",
      desc: "Net income, capital gains, franking credits, or trust distributions received from interposed or related entity structures.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Return Inclusions &amp; Scope
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Does a Partnership Tax Return Report?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A partnership tax return generally records the partnership’s assessable income and allowable deductions and provides the tax information needed to determine each partner’s share.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {returnComponents.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400 dark:text-zinc-500">
                    {item.num}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Editorial Box: Partner Share Statements & Non-Commercial Loss Rules */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-brand-bg-lighter via-white to-slate-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border border-slate-200 dark:border-zinc-800 shadow-sm space-y-6">
          <div className="flex flex-col lg:flex-row items-start gap-6">
            <div className="w-12 h-12 rounded-xl bg-teal-500/10 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0 mt-1">
              <ExclamationCircleOutlined className="text-2xl" />
            </div>
            <div className="space-y-3 flex-1">
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Partner Share Reporting &amp; Non-Commercial Loss Rules
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                The return also contains partner share information so the partners can report the appropriate amounts in their own tax returns. A partnership tax accountant can help make sure the partnership records and the partner-level reporting are consistent before lodgment.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                A partner’s ability to use a partnership loss can depend on their own circumstances and rules such as the non-commercial loss provisions, so partner-level treatment may need separate review.
              </p>
            </div>
            <div className="shrink-0 w-full lg:w-auto pt-2 lg:pt-0">
              <Link href="/services/individual-tax/individual-tax-return">
                <Button
                  type="default"
                  className="brand-btn-outline w-full sm:w-auto text-xs sm:text-sm font-semibold rounded-xl"
                  icon={<ArrowRightOutlined />}
                  iconPosition="end"
                >
                  Partner Individual Tax Returns
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
