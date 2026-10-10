"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  FileTextOutlined,
  FundOutlined,
  DollarOutlined,
  LineChartOutlined,
  BarChartOutlined,
  RiseOutlined,
  WalletOutlined,
  DashboardOutlined,
  CommentOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * MonthlyReportingScopeList Component
 * ===================================
 * Section 2: What can monthly management reporting include?
 * Features 100% complete, verbatim content from client SEO document.
 */
export default function MonthlyReportingScopeList() {
  const scopeItems = [
    {
      icon: <FileTextOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "profit and loss reporting with current-period and comparative results",
      desc: "Detailed income and expense analysis against prior months, prior quarters, and prior year periods.",
    },
    {
      icon: <FundOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "balance-sheet review and key account movements",
      desc: "Reconciliation of assets, liabilities, tax provisions, loan balances, and net working capital.",
    },
    {
      icon: <DollarOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "cash flow reporting and short-term cash visibility",
      desc: "Operational cash flow statements highlighting actual liquidity generated versus reported profits.",
    },
    {
      icon: <LineChartOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "budget-versus-actual reporting",
      desc: "Clear benchmarks measuring actual operational performance against agreed fiscal budgets.",
    },
    {
      icon: <BarChartOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "variance analysis explaining material differences",
      desc: "Decomposing deviations to evaluate the true impact of volume, timing, pricing, and cost shocks.",
    },
    {
      icon: <RiseOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "revenue, gross margin and cost trends",
      desc: "Tracking multi-month trajectory of gross margins, direct cost ratios, and overhead creep.",
    },
    {
      icon: <WalletOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "debtor, creditor or working-capital measures",
      desc: "Days sales outstanding (DSO), overdue invoice ageing, and supplier credit terms monitoring.",
    },
    {
      icon: <DashboardOutlined className="text-xl text-cyan-600 dark:text-cyan-400" />,
      title: "agreed financial and operational KPIs",
      desc: "Core non-financial drivers that directly influence revenue generation and operational capacity.",
    },
    {
      icon: <CommentOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "short management commentary highlighting issues and actions",
      desc: "Executive narrative interpreting significant movements and framing required commercial decisions.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Monthly Deliverables
          </Tag>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What can monthly management reporting include?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Every reporting pack is configured around your business drivers, delivering dependable clarity across the following core areas:
          </p>
        </div>

        {/* 9 Scope Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scopeItems.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 hover:border-brand-primary/50 dark:hover:border-emerald-500/50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-800 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white capitalize mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal m-0">
                  {item.desc}
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-zinc-800 flex items-center justify-between text-xs font-semibold text-slate-400 dark:text-zinc-500">
                <span>Deliverable 0{index + 1}</span>
                <span className="text-emerald-600 dark:text-emerald-400">Included</span>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Internal Links Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-medium m-0">
            Where management reporting forms part of a broader ongoing finance function, our{" "}
            <Link href="/services/virtual-cfo" className="text-emerald-700 dark:text-emerald-400 font-bold hover:underline">
              virtual CFO services
            </Link>{" "}
            and{" "}
            <Link href="/services/virtual-cfo/virtual-cfo-services" className="text-emerald-700 dark:text-emerald-400 font-bold hover:underline">
              outsourced CFO services
            </Link>{" "}
            pages explain the wider support available.
          </p>
          <div className="flex gap-2 shrink-0">
            <Link href="/services/virtual-cfo/virtual-cfo-services">
              <Button type="default" size="middle" icon={<ArrowRightOutlined />} iconPlacement="end">
                Outsourced CFO Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
