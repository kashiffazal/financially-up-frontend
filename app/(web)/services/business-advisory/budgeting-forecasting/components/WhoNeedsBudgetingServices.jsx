"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  CalendarOutlined,
  RiseOutlined,
  AlertOutlined,
  SwapOutlined,
  FundViewOutlined,
  BankOutlined,
  ClockCircleOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * WhoNeedsBudgetingServices Component
 * ===================================
 * Section 2: Who may need budgeting and forecasting services?
 * Source: 12th Pillar Business Advisory.docx (Page 3: Budgeting & Forecasting)
 *
 * Implements 100% complete, verbatim SEO text covering the 7 common situations
 * where established Australian businesses require forward planning models.
 */
export default function WhoNeedsBudgetingServices() {
  const situations = [
    {
      icon: <CalendarOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "planning the next financial year and setting realistic targets",
      subtitle: "Annual Financial Blueprint",
      detail:
        "Translating broad business objectives into concrete revenue, cost, margin, and profit expectations for the financial year.",
    },
    {
      icon: <RiseOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "preparing for growth, hiring, new locations or major purchases",
      subtitle: "Capital & Operational Expansion",
      detail:
        "Quantifying the financial commitments, payback periods, and margin impacts before signing leases or adding headcount.",
    },
    {
      icon: <AlertOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "costs are rising and margins need closer monitoring",
      subtitle: "Cost Inflation & Margin Defense",
      detail:
        "Tracking direct materials, contractor fees, and supplier cost creep against price points to safeguard operating margins.",
    },
    {
      icon: <SwapOutlined className="text-xl text-cyan-600 dark:text-cyan-400" />,
      title: "sales are volatile, seasonal or changing by product or service line",
      subtitle: "Revenue Volatility & Product Mix",
      detail:
        "Modeling seasonality shifts and product line profitability to allocate working capital efficiently across the year.",
    },
    {
      icon: <FundViewOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "actual results regularly differ from expectations and the business needs better variance analysis",
      subtitle: "Variance Diagnostics & Course Correction",
      detail:
        "Pinpointing exactly why actual performance diverges from targets so managers can take timely, data-backed corrective action.",
    },
    {
      icon: <BankOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "finance discussions require clearer projections and assumptions",
      subtitle: "Lender & Investor Projections",
      detail:
        "Providing credible, assumption-backed financial models and debt service coverage calculations to support commercial borrowing.",
    },
    {
      icon: <ClockCircleOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "management wants a regular reporting cycle rather than relying only on year-end accounts",
      subtitle: "Ongoing Monthly Management Cadence",
      detail:
        "Transitioning from historical tax compliance to an active monthly or quarterly performance rhythm that empowers leadership.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50/70 dark:bg-zinc-950/70 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Client Profile &amp; Decision Drivers
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Who May Need Budgeting and Forecasting Services?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Budgeting and forecasting can be useful for many established
            businesses, but they are particularly valuable when the owner needs
            to make decisions before the results are known. Common situations
            include:
          </p>
        </div>

        {/* 7 Verbatim Situation Cards in Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {situations.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-between bg-white dark:bg-zinc-900 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-lg hover:border-emerald-400/60 transition-all duration-300 group ${
                idx === 6 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100/80 dark:bg-zinc-800/80 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <Tag
                    color="default"
                    className="text-[11px] font-semibold border-slate-200 dark:border-zinc-700 m-0"
                  >
                    Scenario 0{idx + 1}
                  </Tag>
                </div>

                <div className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider mb-2">
                  {item.subtitle}
                </div>

                {/* Verbatim Bullet Title */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white capitalize group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors mb-3 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.detail}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-zinc-800/80 flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-zinc-400">
                <CheckCircleOutlined className="text-emerald-500 dark:text-emerald-400" />
                <span>Supports proactive commercial decisions</span>
              </div>
            </div>
          ))}
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
              Discuss Your Planning Needs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
