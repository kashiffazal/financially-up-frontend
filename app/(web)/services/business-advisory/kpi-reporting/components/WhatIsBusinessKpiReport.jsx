"use client";

import React from "react";
import { Tag } from "antd";
import {
  FundProjectionScreenOutlined,
  DollarOutlined,
  ShopOutlined,
  AppstoreOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * WhatIsBusinessKpiReport Component
 * ==================================
 * Section 1: What is a business KPI report?
 * Source: 12th Pillar Business Advisory.docx (Lines 352-354)
 *
 * Implements 100% complete, verbatim SEO text explaining KPI definitions,
 * monthly reporting examples, service vs retail metrics, and purposeful tracking.
 */
export default function WhatIsBusinessKpiReport() {
  const reportingExamples = [
    {
      icon: <DollarOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Core Financial Rhythm",
      items: [
        "Monthly gross sales and gross profit margins",
        "Outstanding customer invoices and debtor collections",
        "Cash balance alongside budget or prior-period figures",
      ],
      tag: "Financial Fundamentals",
    },
    {
      icon: <AppstoreOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Service Business Metrics",
      items: [
        "Productive billable work and staff utilization",
        "Individual job profitability and gross margins",
        "Accurate work in progress (WIP) tracking",
      ],
      tag: "Professional Services",
    },
    {
      icon: <ShopOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Retail & Product Metrics",
      items: [
        "Inventory and stock turnover velocity",
        "Sales trends broken down by product category",
        "Margin contribution per product line",
      ],
      tag: "Retail & Wholesale",
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
            Management Reporting Basics
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Is a Business KPI Report?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A key performance indicator, or KPI, is a measure linked to an
            important business objective. Business KPI reporting brings a
            manageable set of these measures together over a consistent period,
            with definitions and comparisons that make changes visible.
          </p>
        </div>

        {/* Lead Narrative Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-50/70 dark:bg-zinc-950/70 border border-slate-200/80 dark:border-zinc-800 mb-12">
          <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal mb-4">
            A monthly report might show sales, gross margin, outstanding invoices
            and cash alongside budget or prior-period figures. An owner of a
            service business might also monitor billable work, job margins or
            work in progress, if those records are dependable. A retailer may
            need stock turnover and sales by product category. More measures do
            not automatically make a better report: each one should prompt a
            useful question or action.
          </p>
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-700 dark:text-emerald-400">
            <CheckCircleOutlined />
            <span>
              Clarity over complexity: every metric must drive actionable commercial insight.
            </span>
          </div>
        </div>

        {/* Industry Metric Examples Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reportingExamples.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <Tag className="font-semibold text-2xs m-0">{item.tag}</Tag>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <ul className="space-y-2">
                  {item.items.map((it, i) => (
                    <li
                      key={i}
                      className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 flex items-start gap-2 leading-relaxed"
                    >
                      <ArrowRightOutlined className="text-2xs text-emerald-600 dark:text-emerald-400 shrink-0 mt-1" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
