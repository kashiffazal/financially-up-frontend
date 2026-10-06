"use client";

import React from "react";
import { Tag } from "antd";
import {
  DollarOutlined,
  LineChartOutlined,
  CalculatorOutlined,
  CompassOutlined,
} from "@ant-design/icons";

/**
 * WhatBusinessAdvisoryCanFocusOn Component
 * =========================================
 * Section 5: What can business advisory focus on?
 *
 * Implements the 4 EXACT focus areas from '12th Pillar Business Advisory.docx':
 * 1. Financial performance and profitability
 * 2. Cash flow and working capital
 * 3. Budgeting, forecasting and scenario planning
 * 4. Decision support
 *
 * Background: Lite Brand Gradient.
 */
export default function WhatBusinessAdvisoryCanFocusOn() {
  const focusAreas = [
    {
      icon: <DollarOutlined className="text-2xl text-teal-600 dark:text-teal-400" />,
      tag: "Pillar Focus 1",
      title: "Financial performance and profitability",
      description:
        "Revenue growth does not automatically mean the business is becoming more profitable. Advisory work can examine gross margin, operating costs, overheads, product or service contribution, customer mix and other drivers of profit. The aim is to understand what is changing and why, rather than relying only on the final profit figure.",
    },
    {
      icon: <LineChartOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
      tag: "Pillar Focus 2",
      title: "Cash flow and working capital",
      description:
        "A profitable business can still experience cash pressure because profit and cash are not the same. Timing of customer receipts, supplier payments, tax obligations, wages, stock, loan repayments and capital purchases can all affect liquidity. A cash flow forecast can make these timing differences visible before they become urgent.",
    },
    {
      icon: <CalculatorOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
      tag: "Pillar Focus 3",
      title: "Budgeting, forecasting and scenario planning",
      description:
        "A budget sets out what the business plans to earn and spend, while a forecast uses current information and trends to estimate what is likely to happen. Business.gov.au distinguishes between a budget as the plan and a forecast as the updated view of what is likely to happen. Financially Up can help build assumptions, test scenarios, compare actual results with the plan and refresh forecasts as conditions change.",
    },
    {
      icon: <CompassOutlined className="text-2xl text-purple-600 dark:text-purple-400" />,
      tag: "Pillar Focus 4",
      title: "Decision support",
      description:
        "Before committing to a major cost or change, it can be useful to model the financial effect. This may include hiring staff, changing premises, increasing marketing, purchasing equipment, expanding into a new area or changing pricing. Advisory work can help quantify the assumptions and trade-offs; it does not guarantee the commercial outcome.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <Tag color="green" className="brand-section-tag">
            Core Advisory Domains
          </Tag>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.2]">
            What can business advisory focus on?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            Our advisory practice aligns financial analysis with your operational priorities across four key commercial focus areas:
          </p>
        </div>

        {/* 4 Focus Area Cards (2x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {focusAreas.map((area, idx) => (
            <div
              key={idx}
              className="p-7 sm:p-9 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm hover:border-teal-500/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-800 flex items-center justify-center">
                    {area.icon}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300">
                    {area.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {area.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal m-0">
                  {area.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
