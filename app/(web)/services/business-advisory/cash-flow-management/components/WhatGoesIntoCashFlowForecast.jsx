"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  BankOutlined,
  DollarOutlined,
  ShopOutlined,
  TeamOutlined,
  FileProtectOutlined,
  SafetyCertificateOutlined,
  HomeOutlined,
  ToolOutlined,
  UserOutlined,
  CalendarOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * WhatGoesIntoCashFlowForecast Component
 * ======================================
 * Section 3: What goes into a useful cash flow forecast?
 * Source: 12th Pillar Business Advisory.docx (Page 2: Cash Flow Management)
 *
 * Implements 100% complete, verbatim SEO text covering the 9 data streams
 * analyzed in a realistic forecast, plus rolling vs strategic horizons.
 */
export default function WhatGoesIntoCashFlowForecast() {
  const forecastInputs = [
    {
      icon: <BankOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "opening bank balances and available cash",
      category: "Starting Position",
      description:
        "Reconciled transaction account balances, working capital lines, and immediate liquidity reserves.",
    },
    {
      icon: <DollarOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "expected customer receipts and debtor collection patterns",
      category: "Inflows",
      description:
        "Realistic collection timeframes based on actual debtor payment behaviour, terms, and seasonality.",
    },
    {
      icon: <ShopOutlined className="text-xl text-cyan-600 dark:text-cyan-400" />,
      title: "supplier payments and aged payables",
      category: "Trade Outflows",
      description:
        "Aged creditor schedules, credit terms, trade accounts, and critical supplier delivery deadlines.",
    },
    {
      icon: <TeamOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "wages, superannuation and payroll-related costs",
      category: "Employment",
      description:
        "Gross payroll cycles, PAYG withholding liabilities, superannuation guarantee, and payroll tax.",
    },
    {
      icon: <FileProtectOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "GST, PAYG instalments, PAYG withholding and other tax payments where applicable",
      category: "Compliance",
      description:
        "Quarterly or monthly BAS lodgement schedules, income tax liabilities, and ATO payment plans.",
    },
    {
      icon: <SafetyCertificateOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "loan, lease and finance repayments",
      category: "Financing",
      description:
        "Equipment finance, commercial chattel mortgages, overdraft reductions, and interest charges.",
    },
    {
      icon: <HomeOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "rent, insurance, subscriptions and other recurring overheads",
      category: "Fixed Overheads",
      description:
        "Premises leases, commercial insurance renewals, software subscriptions, and utility obligations.",
    },
    {
      icon: <ToolOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "capital expenditure and one-off payments",
      category: "Capital Outlays",
      description:
        "Asset investments, office fit-outs, software development, and non-recurring project costs.",
    },
    {
      icon: <UserOutlined className="text-xl text-emerald-700 dark:text-emerald-300" />,
      title: "owner drawings, distributions or other planned cash movements where relevant",
      category: "Equity & Drawings",
      description:
        "Trust distributions, director loan movements, dividends, and planned proprietor cash extractions.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Forecasting Methodology &amp; Inputs
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Goes into a Useful Cash Flow Forecast?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A forecast should be based on the actual payment patterns of the
            business rather than simply spreading annual income and expenses
            evenly across months. Depending on the business, Financially Up may
            review:
          </p>
        </div>

        {/* 9 Forecast Review Stream Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {forecastInputs.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-lg hover:border-emerald-400/60 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <Tag
                    color="green"
                    className="text-[11px] font-semibold border-emerald-200 dark:border-emerald-800 m-0"
                  >
                    {item.category}
                  </Tag>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white capitalize group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200 dark:border-zinc-800 flex items-center gap-2 text-xs text-slate-500 dark:text-zinc-400">
                <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400" />
                <span>Reviewed by Financially Up</span>
              </div>
            </div>
          ))}
        </div>

        {/* Horizon Selector Banner: Verbatim Note on Forecast Periods */}
        <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-slate-50 dark:from-emerald-950/30 dark:via-zinc-950 dark:to-zinc-900 rounded-2xl p-7 sm:p-9 border border-emerald-200/80 dark:border-emerald-800/40 shadow-xs mb-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                <CalendarOutlined />
                <span>Tailored Forecasting Horizons</span>
              </div>
              <p className="text-base sm:text-lg font-medium text-slate-900 dark:text-white leading-relaxed m-0">
                The forecast period can vary. A short rolling forecast suits
                week-by-week cash pressure; a longer monthly forecast supports
                broader planning. The format should match the decision.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <div className="p-3.5 bg-white dark:bg-zinc-900 rounded-xl border border-slate-200 dark:border-zinc-800 text-center">
                <div className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase">
                  13-Week Rolling
                </div>
                <div className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
                  Liquidity &amp; Payroll Control
                </div>
              </div>
              <div className="p-3.5 bg-white dark:bg-zinc-900 rounded-xl border border-slate-200 dark:border-zinc-800 text-center">
                <div className="text-xs font-bold text-teal-700 dark:text-teal-400 uppercase">
                  12-Month Monthly
                </div>
                <div className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
                  Strategic Business Planning
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Row */}
        <div className="text-center">
          <Link href="/book-an-appointment">
            <Button
              type="primary"
              size="large"
              icon={<ArrowRightOutlined />}
              iconPlacement="end"
              className="rounded-xl font-bold px-7 h-12 shadow-md shadow-brand-primary/20"
            >
              Build Your Cash Flow Model
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
