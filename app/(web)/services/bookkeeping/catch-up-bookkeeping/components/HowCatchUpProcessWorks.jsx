"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  FileSearchOutlined,
  SyncOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * HowCatchUpProcessWorks Component
 * ================================
 * Section 6: How the Catch-Up Process Works
 * Features 100% complete, verbatim content from Page 4 of client docx.
 */
export default function HowCatchUpProcessWorks() {
  const steps = [
    {
      number: "01",
      icon: <FileSearchOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
      title: "Establish Period & Review Gaps",
      body: "First, we establish the period to be brought up to date, review the accounting file and identify the available source data and major gaps.",
      detail: "Diagnostic evaluation of missing months, bank statement completeness, and initial ledger health check.",
    },
    {
      number: "02",
      icon: <SyncOutlined className="text-2xl text-teal-600 dark:text-teal-400" />,
      title: "Staged Processing & Query Grouping",
      body: "The records are processed and reconciled in stages. Questions are grouped where practical, and unresolved items are identified rather than hidden inside generic accounts.",
      detail: "Sequential month-by-month reconciliation, disciplined transaction coding, and isolated query logs.",
    },
    {
      number: "03",
      icon: <CheckCircleOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
      title: "Current Baseline & Next Steps",
      body: "Once the agreed period is current, the next step may be ongoing bookkeeping, handover to your internal team, or separately scoped accounting and tax work.",
      detail: "Clean cut-off position enabling seamless routine bookkeeping or direct handover for tax return lodgement.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Step-by-Step Methodology
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How the Catch-Up Process Works
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A staged, transparent roadmap designed to clear months of overdue transactions without stress or confusion.
          </p>
        </div>

        {/* 3 Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:border-emerald-400/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/70 dark:border-zinc-800 flex items-center justify-center shadow-xs">
                    {step.icon}
                  </div>
                  <span className="text-2xl font-black text-slate-300 dark:text-zinc-700">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                  {step.title}
                </h3>

                <p className="text-sm text-slate-700 dark:text-zinc-200 leading-relaxed font-normal mb-3">
                  {step.body}
                </p>

                <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
                  {step.detail}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-zinc-800/80 text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                Phase {step.number}
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="text-center">
          <Link href="/book-an-appointment">
            <Button
              type="primary"
              size="large"
              icon={<ArrowRightOutlined />}
              iconPosition="end"
              className="font-bold"
            >
              Book an Appointment
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
