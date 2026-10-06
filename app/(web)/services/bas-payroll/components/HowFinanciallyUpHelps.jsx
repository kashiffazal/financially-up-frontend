"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileTextOutlined,
  CheckCircleOutlined,
  FileDoneOutlined,
  DollarCircleOutlined,
  AuditOutlined,
  ToolOutlined,
} from "@ant-design/icons";

/**
 * HowFinanciallyUpHelps Component
 * ===============================
 * Section 6 of BAS, GST & Payroll Hub:
 * "How Financially Up can help"
 *
 * Content is 100% VERBATIM from the professional SEO specialist document:
 * '5th Pillar BAS, GST & Payroll.docx' (Page 1).
 *
 * Background: Clean White.
 */
export default function HowFinanciallyUpHelps() {
  /**
   * The 6 Verbatim Capability Points from Document Section 6
   */
  const steps = [
    {
      stepNumber: "01",
      icon: <AuditOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Review Bookkeeping & GST Coding",
      description:
        "Review bookkeeping and GST coding relevant to the reporting period.",
      tag: "Coding Review",
    },
    {
      stepNumber: "02",
      icon: <DollarCircleOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Prepare BAS Figures from Records",
      description:
        "Prepare BAS figures from available business records.",
      tag: "Figure Preparation",
    },
    {
      stepNumber: "03",
      icon: <FileTextOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Assist with Activity-Statement Labels",
      description:
        "Assist with GST, PAYG withholding and other applicable activity-statement labels.",
      tag: "Label Compliance",
    },
    {
      stepNumber: "04",
      icon: <CheckCircleOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Identify Missing Information or Unusual Items",
      description:
        "Identify missing information or unusual transactions for clarification.",
      tag: "Clarification",
    },
    {
      stepNumber: "05",
      icon: <FileDoneOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Assist with BAS Lodgement & ATO Liaison",
      description:
        "Assist with BAS lodgement and ATO correspondence relating to the work performed.",
      tag: "Lodgement & ATO",
    },
    {
      stepNumber: "06",
      icon: <ToolOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Coordinate Separately Scoped Services",
      description:
        "Coordinate separately scoped bookkeeping, payroll or tax advice where required.",
      tag: "Service Alignment",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <Tag color="green" className="brand-section-tag">
            <ToolOutlined className="mr-1" /> Practical Support Workflow
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How Financially Up can help
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            Our registered tax agent team takes the friction out of activity
            statements by checking underlying records, preparing compliant
            figures, and coordinating ATO lodgements.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-slate-50/80 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-500/50 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-800 shadow-xs flex items-center justify-center">
                    {step.icon}
                  </div>
                  <span className="text-xs font-bold text-slate-400 dark:text-zinc-500">
                    {step.stepNumber}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                {/* Document Bullet Item - Verbatim */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed m-0">
                  {step.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200/60 dark:border-zinc-800">
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-slate-600 dark:text-zinc-400">
                  {step.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
