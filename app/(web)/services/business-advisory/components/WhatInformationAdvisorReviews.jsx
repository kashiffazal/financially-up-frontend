"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileTextOutlined,
  CheckCircleOutlined,
  CloudSyncOutlined,
  DatabaseOutlined,
  AuditOutlined,
  LineChartOutlined,
  TeamOutlined,
  BankOutlined,
  FundOutlined,
  CompassOutlined,
} from "@ant-design/icons";

/**
 * WhatInformationAdvisorReviews Component
 * ========================================
 * Section 6: What information will a business advisor usually review?
 *
 * Implements the EXACT content from '12th Pillar Business Advisory.docx'.
 *
 * Background: Clean White.
 */
export default function WhatInformationAdvisorReviews() {
  // Exact 8 items from the document:
  const reviewRecords = [
    {
      icon: <FileTextOutlined className="text-teal-600 dark:text-teal-400" />,
      title: "current and prior-year profit and loss statements",
    },
    {
      icon: <AuditOutlined className="text-emerald-600 dark:text-emerald-400" />,
      title: "balance sheets and cash flow reports",
    },
    {
      icon: <LineChartOutlined className="text-blue-600 dark:text-blue-400" />,
      title: "aged receivables and aged payables",
    },
    {
      icon: <BankOutlined className="text-purple-600 dark:text-purple-400" />,
      title: "bank, loan and finance balances",
    },
    {
      icon: <TeamOutlined className="text-amber-600 dark:text-amber-400" />,
      title: "payroll and major employment costs",
    },
    {
      icon: <FundOutlined className="text-rose-600 dark:text-rose-400" />,
      title: "sales data, margins and key operating metrics",
    },
    {
      icon: <DatabaseOutlined className="text-teal-600 dark:text-teal-400" />,
      title: "current budgets or forecasts, if available",
    },
    {
      icon: <CompassOutlined className="text-emerald-600 dark:text-emerald-400" />,
      title: "details of planned investments, hiring, pricing or growth decisions",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <Tag color="green" className="brand-section-tag">
            Preparation & Records
          </Tag>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.2]">
            What information will a business advisor usually review?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            The records required depend on the question being addressed. Common information includes:
          </p>
        </div>

        {/* 8 Records Checklist Cards (4x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {reviewRecords.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50/80 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-500/40 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-800 shadow-2xs flex items-center justify-center mb-4 text-lg">
                  {item.icon}
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white mb-0 leading-snug">
                  {item.title}
                </h3>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-zinc-800 flex items-center gap-1.5 text-xs text-teal-700 dark:text-teal-400 font-medium">
                <CheckCircleOutlined className="text-xs" />
                <span>Advisory Record Item {idx + 1}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Cloud Accounting & Decision Focus Note (Exact Trailing Paragraph from Document) */}
        <div className="rounded-2xl bg-slate-50/80 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800 p-6 sm:p-8 flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/50 flex items-center justify-center shrink-0 text-xl text-teal-600 dark:text-teal-400">
            <CloudSyncOutlined />
          </div>
          <div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
              Cloud Accounting Systems & Practical Decision-Making
            </h4>
            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal m-0">
              Where the business uses cloud accounting software, current data can make ongoing review more useful. The objective is not to create reports for their own sake, but to connect the numbers to decisions the owner or management team actually needs to make.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
