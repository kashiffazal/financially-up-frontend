"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  LineChartOutlined,
  DollarCircleOutlined,
  BankOutlined,
  RiseOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * FinancialReportingForDecisions Component
 * =========================================
 * Section: Financial Reporting for Better Business Decisions
 * Features 100% complete, verbatim content from Page 6 of client docx.
 * Focuses on business insights, working capital, debt levels, and management accounting.
 */
export default function FinancialReportingForDecisions() {
  const insights = [
    {
      icon: (
        <RiseOutlined className="text-xl text-teal-600 dark:text-teal-400" />
      ),
      title: "Commercial Profitability",
      desc: "Understanding gross margins, operational overheads, net profit trends, and revenue drivers across business divisions.",
    },
    {
      icon: (
        <DollarCircleOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />
      ),
      title: "Working Capital & Liquidity",
      desc: "Monitoring short-term cash reserves, current assets vs current liabilities, and debtor collection efficiency.",
    },
    {
      icon: (
        <BankOutlined className="text-xl text-blue-600 dark:text-blue-400" />
      ),
      title: "Debt Levels & Leverage",
      desc: "Reviewing commercial loan commitments, equipment finance schedules, and total enterprise liabilities.",
    },
    {
      icon: (
        <LineChartOutlined className="text-xl text-purple-600 dark:text-purple-400" />
      ),
      title: "Changes in Financial Position",
      desc: "Tracking net asset growth, retained profits, and equity movements from one trading period to the next.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Commercial Intelligence
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Financial Reporting for Better Business Decisions
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Business financial reporting is not only a year-end compliance
            exercise. Regular financial information can help business owners
            understand profitability, working capital, debt levels and changes
            in financial position.
          </p>
        </div>

        {/* 4 Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {insights.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Management Reporting & Advisory Callout */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-blue-50 dark:from-zinc-900 dark:via-zinc-850 dark:to-zinc-900 border border-emerald-200/80 dark:border-emerald-800/50 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              Separately Scoped Management Reporting
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
              Management reporting services can also be scoped separately where
              a business needs more frequent reports, comparisons against
              budgets or deeper analysis. This page focuses on preparing the
              financial statements themselves; ongoing advisory and management
              accounting work can be agreed according to the level of analysis
              required.
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <Link href="/book-an-appointment">
              <Button
                type="primary"
                className="brand-btn-primary w-full md:w-auto text-xs sm:text-sm font-semibold rounded-xl"
                icon={<ArrowRightOutlined />}
                iconPlacement="end"
              >
                Inquire About Management Reports
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
