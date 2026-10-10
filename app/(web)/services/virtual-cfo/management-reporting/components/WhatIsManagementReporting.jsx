"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileTextOutlined,
  AppstoreOutlined,
  ShopOutlined,
  AuditOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * WhatIsManagementReporting Component
 * ===================================
 * Section 1: What is management reporting?
 * Features 100% complete, verbatim content from client SEO document.
 */
export default function WhatIsManagementReporting() {
  const industries = [
    {
      icon: <AppstoreOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Professional Services Firms",
      focus: "Utilisation, Labour Cost & Project Margins",
      description: "Focus heavily on fee-earner productivity, billable rates, WIP ageing, and client profitability.",
    },
    {
      icon: <ShopOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Retail & Product Businesses",
      focus: "Gross Margins, Stock, Trends & Working Capital",
      description: "Pay close attention to inventory turns, supplier payment terms, freight costs, and shrinkage.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Verbatim Strategic Explanation */}
          <div className="lg:col-span-7">
            <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
              Management Intelligence
            </Tag>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              What is management reporting?
            </h2>
            <div className="mt-6 space-y-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              <p>
                Management reporting is the regular preparation and analysis of financial and operational information for internal decision-making. Government business guidance recommends reviewing key financial documents regularly, including profit and loss statements, balance sheets, cash flow statements and budgets, because trends and unusual movements can highlight areas that need attention.
              </p>
              <p>
                The exact reporting pack should reflect the business. A professional services firm may focus heavily on utilisation, labour cost and project margins; a retail or product business may pay closer attention to gross margin, stock, customer trends and working capital. The aim is not to create more reports. It is to create the right reports.
              </p>
            </div>
          </div>

          {/* Right Column: Tailored Reporting Focus Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/60 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400 mb-4">
                Tailored Reporting Packs by Business Model
              </h3>
              <div className="space-y-4">
                {industries.map((ind, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/70 dark:border-zinc-700/50"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-9 h-9 rounded-lg bg-slate-50 dark:bg-zinc-800 flex items-center justify-center">
                        {ind.icon}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white m-0">
                          {ind.title}
                        </h4>
                        <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                          {ind.focus}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed m-0">
                      {ind.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-800/40 text-xs text-emerald-900 dark:text-emerald-300 flex items-center gap-2">
              <CheckCircleOutlined className="text-base text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>
                <strong>Guiding Principle:</strong> Create the right reports with clear operational context, not endless pages of unexplained data.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
