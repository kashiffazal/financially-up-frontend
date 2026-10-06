"use client";

import React from "react";
import { Tag } from "antd";
import {
  DollarCircleOutlined,
  RocketOutlined,
  CalculatorOutlined,
  LineChartOutlined,
  BankOutlined,
  CompassOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import EntityRoutingBanner from "@/components/website/EntityRoutingBanner";

/**
 * WhoMayBenefitAdvisory Component
 * ================================
 * Section 3: Who may benefit from business advisory services?
 *
 * Implements the EXACT copy from '12th Pillar Business Advisory.docx'.
 *
 * Background: Lite Brand Gradient.
 */
export default function WhoMayBenefitAdvisory() {
  // Exact 6 criteria from the client document:
  const benefitCriteria = [
    {
      icon: <DollarCircleOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      tag: "Cash & Profit Disconnect",
      title: "unsure why profit is not translating into available cash",
      description: "Understanding working capital timing differences, debtor lags, and where cash is being absorbed.",
    },
    {
      icon: <RocketOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      tag: "Growth Commitments",
      title: "planning growth, hiring, new premises, equipment or another major commitment",
      description: "Testing financial assumptions and cash buffer requirements before committing to major expenses.",
    },
    {
      icon: <CalculatorOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      tag: "Commercial Changes",
      title: "considering changes to pricing, costs, product mix or service delivery",
      description: "Evaluating gross margins, cost structures, and contribution per product or service line.",
    },
    {
      icon: <LineChartOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      tag: "Planning & Reporting",
      title: "working without a reliable budget, forecast or management reporting process",
      description: "Establishing structured financial planning and ongoing variance reviews to steer the business.",
    },
    {
      icon: <BankOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      tag: "Finance & Lenders",
      title: "preparing for finance discussions and need clearer financial information",
      description: "Assembling reliable projections, balance-sheet clarity, and assumptions for lender conversations.",
    },
    {
      icon: <CompassOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      tag: "Objective Direction",
      title: "wanting a more objective view of business performance and financial priorities",
      description: "Gaining an independent commercial perspective grounded in accurate accounting records.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <Tag color="green" className="brand-section-tag">
            Client Scenarios
          </Tag>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.2]">
            Who may benefit from business advisory services?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            Business advisory is commonly useful for established small and medium businesses, growing owner-managed businesses, professional practices and business owners facing a change in direction. You may benefit from a business advisor if you are:
          </p>
        </div>

        {/* 6 Benefit Scenario Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {benefitCriteria.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm hover:border-teal-500/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-800 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 capitalize-first">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed m-0 font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Reusable EntityRoutingBanner containing the exact related service routing paragraph */}
        <EntityRoutingBanner
          tag="Specific Priority Pathways"
          title="Targeted Cash Flow & Budgeting Support"
          description="For businesses with a specific liquidity problem, our cash flow forecasting service focuses on expected cash movements and shortfalls. Where the priority is setting targets and comparing actual performance with a plan, our budgeting and forecasting service provides a more structured financial planning process."
          buttons={[
            {
              label: "Cash Flow Forecasting",
              href: "/services/business-advisory/cash-flow-management",
              type: "primary",
            },
            {
              label: "Budgeting & Forecasting",
              href: "/services/business-advisory/budgeting-forecasting",
              type: "secondary",
            },
          ]}
        />
      </div>
    </section>
  );
}
