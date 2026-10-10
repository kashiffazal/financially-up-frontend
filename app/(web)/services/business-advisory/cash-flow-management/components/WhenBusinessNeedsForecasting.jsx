"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  RiseOutlined,
  ClockCircleOutlined,
  CalendarOutlined,
  AlertOutlined,
  UsergroupAddOutlined,
  BankOutlined,
  SlidersOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * WhenBusinessNeedsForecasting Component
 * ======================================
 * Section 2: When may a business need cash flow forecasting services?
 * Source: 12th Pillar Business Advisory.docx (Page 2: Cash Flow Management)
 *
 * Implements 100% complete, verbatim SEO text detailing the 7 core business
 * scenarios where cash forecasting becomes an urgent management priority.
 */
export default function WhenBusinessNeedsForecasting() {
  const situations = [
    {
      icon: <RiseOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "sales are growing but the bank balance is under pressure",
      subtitle: "Working Capital Drag from Growth",
      detail:
        "Fast expansion consumes cash before collections occur, leaving profitable businesses struggling for liquidity.",
    },
    {
      icon: <ClockCircleOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "customer payment timing is unpredictable or debtors are increasing",
      subtitle: "Extended Debtor Days & Aged Receivables",
      detail:
        "Delayed customer settlements disrupt weekly payroll and supplier commitments without a forward buffer.",
    },
    {
      icon: <CalendarOutlined className="text-xl text-cyan-600 dark:text-cyan-400" />,
      title: "the business has seasonal peaks and quiet periods",
      subtitle: "Seasonal Cash Cyclicality",
      detail:
        "Cash reserves built during peak trading periods must be strategically reserved to fund fixed off-season overheads.",
    },
    {
      icon: <AlertOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "large BAS, tax, payroll, superannuation or supplier payments are approaching",
      subtitle: "Lumpy Compliance & Supplier Commitments",
      detail:
        "Statutory quarterly ATO lodgements and major trade accounts create immediate cash pinches if unmodeled.",
    },
    {
      icon: <UsergroupAddOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "new staff, equipment, premises or marketing spend is being considered",
      subtitle: "Major Capital & Operational Commitments",
      detail:
        "Testing the affordability of new hires, commercial leases, or machinery before entering binding agreements.",
    },
    {
      icon: <BankOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "finance repayments or other fixed commitments are increasing",
      subtitle: "Debt Service & Fixed Cost Burden",
      detail:
        "Principal and interest schedules require dependable operational cash generation every single month.",
    },
    {
      icon: <SlidersOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "the owner wants to understand how long available cash will last under different scenarios",
      subtitle: "Cash Runway & Sensitivity Analysis",
      detail:
        "Clear forward runway metrics reveal exactly how many weeks of operations existing reserves cover under stress.",
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
            Triggers &amp; Timing
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            When May a Business Need Cash Flow Forecasting Services?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Cash flow forecasting is useful when future cash availability is
            uncertain or a decision could materially change receipts and
            payments. Common situations include:
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
                {/* Header with Icon and Subtitle */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100/80 dark:bg-zinc-800/80 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <Tag
                    color="default"
                    className="text-[11px] font-semibold border-slate-200 dark:border-zinc-700 m-0"
                  >
                    Trigger 0{idx + 1}
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
                <span>Requires proactive forward modeling</span>
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
              Assess Your Cash Position
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
