"use client";

import React from "react";
import { Tag } from "antd";
import {
  SyncOutlined,
  CommentOutlined,
  SearchOutlined,
  TableOutlined,
  ControlOutlined,
} from "@ant-design/icons";

/**
 * HowManagementReportingWorks Component
 * Covers 'How outsourced financial reporting works'
 * from Page 9 of 4th Pillar Bookkeeping.docx.
 */
export default function HowManagementReportingWorks() {
  const steps = [
    {
      number: "1",
      title: "Understand the decisions you need to make",
      description: "We discuss what you want to know from the numbers, who will use the reports and how frequently reporting is needed.",
      icon: <CommentOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
    },
    {
      number: "2",
      title: "Review the bookkeeping data",
      description: "We check whether the accounting file is sufficiently current and reconciled for meaningful reporting. Any gaps or unusual balances are identified.",
      icon: <SearchOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
    },
    {
      number: "3",
      title: "Prepare the agreed report set",
      description: "Reports are produced using the accounting data and the agreed structure, with appropriate comparisons or supporting schedules where relevant.",
      icon: <TableOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
    },
    {
      number: "4",
      title: "Review and refine",
      description: "Recurring reporting can be adjusted over time as the business grows, reporting needs change or new tracking categories are introduced.",
      icon: <ControlOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-16">
          <Tag color="purple" className="brand-section-tag mb-4 font-bold tracking-wider uppercase text-xs">
            <SyncOutlined className="mr-1.5" />
            Structured Engagement
          </Tag>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            How outsourced financial reporting works
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Our structured 4-phase framework turns raw transaction ledgers into polished, actionable executive insights tailored to your business model.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative p-7 rounded-2xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-200 dark:border-zinc-700/80 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-black text-brand-primary dark:text-emerald-400">
                    0{step.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-zinc-700/60 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
