"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  FileTextOutlined,
  TableOutlined,
  FundViewOutlined,
  ExclamationCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * WhatAreBusinessFinancialStatements Component
 * ============================================
 * Section: What Are Business Financial Statements?
 * Features 100% complete, verbatim content from Page 6 of client docx.
 * Explains core statement types, reporting frameworks, and statutory standards.
 */
export default function WhatAreBusinessFinancialStatements() {
  const statementTypes = [
    {
      icon: <FileTextOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Profit and Loss Statement (P&L)",
      desc: "Showing income, cost of goods sold, operating expenses, and net profit or loss performance over an agreed period.",
    },
    {
      icon: <TableOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Balance Sheet (Financial Position)",
      desc: "Showing business assets, liabilities, working capital, and owner or shareholder equity at a specific point in time.",
    },
    {
      icon: <FundViewOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Cash-Flow & Supporting Schedules",
      desc: "Cash-flow reporting, fixed asset registers, depreciation schedules, and notes where relevant to the engagement.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Financial Reporting Fundamentals
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Are Business Financial Statements?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Financial statements summarize the financial activity and position of a business. The exact reports required depend on the entity, the intended user and whether the statements are for management, tax, lending, statutory or another purpose.
          </p>
        </div>

        {/* 3 Core Statements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {statementTypes.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Explanatory Box: Corporations Act & Statutory Distinctions */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-brand-bg-lighter via-white to-slate-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border border-slate-200 dark:border-zinc-800 shadow-sm space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0 mt-1">
              <ExclamationCircleOutlined className="text-lg" />
            </div>
            <div className="space-y-2">
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Statutory Reporting Frameworks &amp; Directors&apos; Responsibilities
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Common reports include a profit and loss statement showing income and expenses over a period and a balance sheet showing assets, liabilities and equity at a point in time. Cash-flow reporting and supporting schedules may also be prepared where relevant to the engagement.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Where financial statements are required under the Corporations Act or another reporting framework, the applicable accounting standards, directors’ responsibilities, lodgment requirements and any audit obligations must be assessed separately. Routine year-end or tax-purpose accounts do not automatically satisfy those requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
