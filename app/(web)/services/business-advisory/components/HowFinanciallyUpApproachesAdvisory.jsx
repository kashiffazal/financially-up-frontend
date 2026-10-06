"use client";

import React from "react";
import { Tag } from "antd";
import {
  CompassOutlined,
  SearchOutlined,
  FundOutlined,
  AppstoreOutlined,
  SafetyCertificateOutlined,
  AlertOutlined,
} from "@ant-design/icons";

/**
 * HowFinanciallyUpApproachesAdvisory Component
 * ============================================
 * Section 7: How Financially Up approaches business advisory.
 *
 * Implements the EXACT content from '12th Pillar Business Advisory.docx'.
 *
 * Background: Lite Brand Gradient.
 */
export default function HowFinanciallyUpApproachesAdvisory() {
  const steps = [
    {
      stepNumber: "01",
      icon: <CompassOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Understanding Objectives",
      description: "Beginning by understanding the business, the owner's objectives, and the immediate decision or problem.",
    },
    {
      stepNumber: "02",
      icon: <SearchOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Reviewing Financial Data",
      description: "Reviewing the available financial information, checking data quality, and identifying key commercial drivers.",
    },
    {
      stepNumber: "03",
      icon: <AppstoreOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Agreeing on Practical Scope",
      description: "Determining whether the engagement involves a one-off review, budget or forecast, scenario modelling, management reporting, or recurring meetings.",
    },
    {
      stepNumber: "04",
      icon: <FundOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Structured Execution",
      description: "Delivering actionable insights, forward projections, and ongoing variance monitoring grounded in reliable numbers.",
    },
  ];

  const engagementTypes = [
    "A one-off focused review around a specific commercial issue",
    "A structured annual budget or dynamic financial forecast",
    "Scenario modelling to test major hiring, expansion, or capex decisions",
    "Regular management reporting packs and customized KPI dashboards",
    "Recurring advisory meetings to compare actual results with plans",
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <Tag color="green" className="brand-section-tag">
            Engagement Framework
          </Tag>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.2]">
            How Financially Up approaches business advisory
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            Financially Up begins by understanding the business, the owner’s objectives and the immediate decision or problem. We then review the available financial information, identify the key drivers and agree on a practical scope. Depending on the engagement, this may involve a one-off review, a budget or forecast, scenario modelling, management reporting or recurring advisory meetings.
          </p>
        </div>

        {/* 4 Steps Progression Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm hover:border-teal-500/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-50 dark:bg-zinc-800 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-xs font-bold text-slate-400 dark:text-zinc-500 font-mono">
                    {item.stepNumber}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed m-0 font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Flexible Engagement Formats List */}
        <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 p-6 sm:p-8 mb-10 shadow-sm">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-4">
            Flexible Advisory Engagement Formats
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {engagementTypes.map((eng, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-50/80 dark:bg-zinc-800/50 border border-slate-200/60 dark:border-zinc-700/60 text-xs sm:text-sm text-slate-700 dark:text-zinc-300 font-medium flex items-center gap-2.5"
              >
                <div className="w-2 h-2 rounded-full bg-teal-500 shrink-0" />
                <span>{eng}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Scope Boundary Disclaimer (Exact Paragraph 2 from Document) */}
        <div className="rounded-2xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/50 p-6 sm:p-8 flex items-start gap-4">
          <div className="w-11 h-11 rounded-xl bg-amber-100 dark:bg-amber-900/60 flex items-center justify-center shrink-0 text-amber-700 dark:text-amber-400 text-xl">
            <SafetyCertificateOutlined />
          </div>
          <div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
              Professional Scope & Qualified Advisory Coordination
            </h4>
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal m-0">
              Our role is accounting, tax and business advisory support within the agreed scope. Legal advice, lending decisions, investment recommendations and regulated financial product advice are separate matters and may require an appropriately qualified or authorised professional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
