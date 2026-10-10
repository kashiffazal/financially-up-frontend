"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  FileTextOutlined,
  FundOutlined,
  CalendarOutlined,
  LineChartOutlined,
  DashboardOutlined,
  PieChartOutlined,
  CompassOutlined,
  ToolOutlined,
  SyncOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * WhatAreOutsourcedCfoServices Component
 * =====================================
 * Section 1: What are outsourced CFO services?
 * 100% Verbatim content from client SEO document.
 */
export default function WhatAreOutsourcedCfoServices() {
  const scopeItems = [
    {
      icon: <FileTextOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "management accounts and performance commentary",
      desc: "Regular monthly financial reports coupled with clear explanations of operational and financial trends.",
    },
    {
      icon: <FundOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "cash flow forecasts and liquidity monitoring",
      desc: "Forward-looking visibility into incoming collections, outgoing commitments, and buffer requirements.",
    },
    {
      icon: <CalendarOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "annual budgets and rolling forecasts",
      desc: "Structured financial targets updated dynamically as actual operating conditions evolve.",
    },
    {
      icon: <LineChartOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "budget-versus-actual and variance analysis",
      desc: "Investigating material differences to understand whether variances stem from volume, price, or timing.",
    },
    {
      icon: <DashboardOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "KPI dashboards and operational finance measures",
      desc: "Tracking high-impact financial and operational metrics tailored to your industry and business model.",
    },
    {
      icon: <PieChartOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "profitability and cost analysis",
      desc: "Detailed margin reviews across products, services, client segments, and business locations.",
    },
    {
      icon: <CompassOutlined className="text-xl text-violet-600 dark:text-violet-400" />,
      title: "scenario modelling for business decisions",
      desc: "Evaluating the financial consequences of new hires, expansions, pricing adjustments, or capital spending.",
    },
    {
      icon: <ToolOutlined className="text-xl text-cyan-600 dark:text-cyan-400" />,
      title: "finance-process and reporting improvements",
      desc: "Streamlining monthly closes, chart of accounts consistency, and reliable data flows.",
    },
    {
      icon: <SyncOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "coordination with bookkeeping, tax and year-end accounting work",
      desc: "Ensuring clean underlying records align smoothly with compliance, tax agents, and year-end lodgements.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Finance Management Scope
          </Tag>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What are outsourced CFO services?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Outsourced CFO services are an ongoing external finance-management arrangement. Unlike a one-off consulting engagement, the work usually follows a repeatable monthly or quarterly rhythm so management receives consistent information and can track performance over time.
          </p>
        </div>

        {/* 9 Core Scope Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scopeItems.map((item, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/50 border border-slate-200/80 dark:border-zinc-700/60 hover:bg-white dark:hover:bg-zinc-800 hover:shadow-lg hover:border-brand-primary/40 dark:hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-700 shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white capitalize mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-200/60 dark:border-zinc-700/60 flex items-center gap-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                <span>CFO Scope Item 0{index + 1}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Internal Links Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-800/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-medium m-0">
            For a broader explanation of the role and when it may be useful, see our{" "}
            <Link href="/services/virtual-cfo" className="text-emerald-700 dark:text-emerald-400 font-bold hover:underline">
              virtual CFO page
            </Link>
            . For businesses that mainly need the reporting component rather than a wider CFO function, see{" "}
            <Link href="/services/virtual-cfo/management-reporting" className="text-emerald-700 dark:text-emerald-400 font-bold hover:underline">
              management reporting services
            </Link>
            .
          </p>
          <div className="flex gap-2 shrink-0">
            <Link href="/services/virtual-cfo">
              <Button type="default" size="middle" icon={<ArrowRightOutlined />} iconPlacement="end">
                Virtual CFO Hub
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
