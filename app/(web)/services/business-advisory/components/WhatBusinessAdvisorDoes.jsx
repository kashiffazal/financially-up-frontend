"use client";

import React from "react";
import { Button, Tag } from "antd";
import {
  RiseOutlined,
  LineChartOutlined,
  CalendarOutlined,
  FileSearchOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
  CompassOutlined,
} from "@ant-design/icons";
import Link from "next/link";

/**
 * WhatBusinessAdvisorDoes Component
 * =================================
 * Section 1 of Business Advisory Hub (/services/business-advisory/).
 * Uses the EXACT content from '12th Pillar Business Advisory.docx' (Section: What does a business advisor do?).
 *
 * Background: Lite Brand Gradient.
 */
export default function WhatBusinessAdvisorDoes() {
  // Key operational facets described verbatim in the document
  const advisoryActivities = [
    {
      icon: <LineChartOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Analysing Financial Results",
      description: "Evaluating past and current trading figures to understand what is truly happening in the business.",
    },
    {
      icon: <RiseOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Identifying Trends",
      description: "Spotting commercial patterns in revenue, margins, expenses, and debtor collection over time.",
    },
    {
      icon: <CompassOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Testing Assumptions",
      description: "Examining commercial expectations before committing to major expenses, hires, or pricing changes.",
    },
    {
      icon: <FileSearchOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Preparing Budgets or Forecasts",
      description: "Translating business plans and current trends into structured, reliable forward projections.",
    },
    {
      icon: <CheckCircleOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Clearer Decision Framework",
      description: "Creating an ongoing, practical structure for owners and management to make informed choices.",
    },
    {
      icon: <CalendarOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Regular Advisory Meetings",
      description: "Comparing actual performance against plans and keeping management attention on the numbers that matter.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <Tag color="green" className="brand-section-tag">
            Commercial Guidance
          </Tag>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.2]">
            What does a business advisor do?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            A business advisor reviews the commercial and financial information behind your business and helps you use it more effectively. The work can include analysing financial results, identifying trends, testing assumptions, preparing budgets or forecasts and creating a clearer framework for ongoing decision-making.
          </p>
        </div>

        {/* 6 Visual Activity Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {advisoryActivities.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm hover:border-teal-500/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-800 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed m-0">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Narrative Callout: Exact Scope Paragraph from Document */}
        <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-3xl">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 mb-3 inline-block">
                Tailored Advisory Scope
              </span>
              <p className="text-base sm:text-lg text-slate-700 dark:text-zinc-200 leading-relaxed font-normal m-0">
                The exact scope depends on what the business needs. Some clients need a focused review around a particular issue. Others benefit from regular advisory meetings that compare actual results with plans and keep management attention on the numbers that matter.
              </p>
            </div>
            <div className="shrink-0">
              <Link href="/book-an-appointment">
                <Button
                  type="primary"
                  size="large"
                  icon={<ArrowRightOutlined />}
                  iconPlacement="end"
                  className="h-12 px-7 rounded-xl font-semibold shadow-md shadow-brand-primary/20 hover:scale-[1.02] active:scale-[0.99] transition-all"
                >
                  Book an Appointment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
