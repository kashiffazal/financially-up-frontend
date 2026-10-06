"use client";

import React from "react";
import { Button } from "antd";
import {
  FundOutlined,
  LineChartOutlined,
  CalculatorOutlined,
  DollarOutlined,
  BarChartOutlined,
  ApartmentOutlined,
  TeamOutlined,
  SyncOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import Link from "next/link";

/**
 * WhatVirtualCfoDoes Component
 * ============================
 * Section 2: What does a virtual CFO do?
 *
 * Implements 100% verbatim content from '13th Pillar Virtual CFO.docx' (Section 1 - Virtual CFO).
 * Outlines the forward-looking financial management role, the 8 core capabilities,
 * and contextual pathways to Outsourced CFO and Management Reporting services.
 *
 * Background: Lite Brand Gradient.
 */
export default function WhatVirtualCfoDoes() {
  /**
   * The 8 core capabilities from the client document (verbatim text)
   */
  const cfoCapabilities = [
    {
      icon: <FundOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Management Reporting",
      description: "monthly or periodic management reporting and commentary",
    },
    {
      icon: <LineChartOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Cash Flow & Working Capital",
      description: "cash flow forecasting and working-capital visibility",
    },
    {
      icon: <CalculatorOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Budgets & Variance Analysis",
      description: "budget preparation and budget-versus-actual analysis",
    },
    {
      icon: <DollarOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Profitability & Cost Analysis",
      description: "profitability, margin and cost analysis",
    },
    {
      icon: <BarChartOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "KPI Selection & Tracking",
      description: "KPI selection and performance tracking",
    },
    {
      icon: <ApartmentOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Strategic Financial Modelling",
      description: "financial modelling for planned growth, hiring, pricing or investment decisions",
    },
    {
      icon: <TeamOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Board & Governance Support",
      description: "board or management reporting support where required",
    },
    {
      icon: <SyncOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Finance & Tax Coordination",
      description: "coordination between bookkeeping, accounting, tax and management information.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-800/60 mb-4">
            <FundOutlined className="text-teal-600 dark:text-teal-400 text-xs sm:text-sm" />
            <span className="text-xs font-semibold text-teal-800 dark:text-teal-300 tracking-wide uppercase">
              Forward-Looking Finance Direction
            </span>
          </div>

          {/* Exact H2 Heading from Document */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What does a virtual CFO do?
          </h2>

          {/* Exact Verbatim Paragraph from Document */}
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A virtual CFO works with business owners and management on forward-looking financial management. Rather than focusing only on what happened at year end, the role uses current financial information to help explain what is happening now, what may happen next and what actions management may need to consider.
          </p>
        </div>

        {/* 8 Capability Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12">
          {cfoCapabilities.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:border-teal-500/50 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-800 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed m-0 font-normal capitalize">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dedicated Follow-Up Pathways Box with Exact Document Verbatim Text */}
        <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-xs p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl space-y-2">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300 text-xs font-semibold">
                <AppstoreOutlined />
                <span>Specialized Support Pathways</span>
              </div>
              {/* Exact Verbatim Follow-Up Paragraph from Document */}
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal m-0">
                If your business mainly needs an external finance function with a defined recurring scope, see our outsourced CFO services. If the immediate need is better monthly dashboards and performance information, our management reporting services page explains that service in more detail.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0 w-full lg:w-auto">
              <Link href="/services/virtual-cfo/virtual-cfo-services" className="w-full sm:w-auto">
                <Button
                  type="primary"
                  size="large"
                  icon={<ArrowRightOutlined />}
                  iconPlacement="end"
                  className="w-full sm:w-auto h-11 px-5 rounded-xl font-semibold shadow-xs hover:scale-[1.01] transition-all"
                >
                  Outsourced CFO Services
                </Button>
              </Link>
              <Link href="/services/virtual-cfo/management-reporting" className="w-full sm:w-auto">
                <Button
                  size="large"
                  className="w-full sm:w-auto h-11 px-5 rounded-xl font-semibold border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-200 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-all"
                >
                  Management Reporting
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
