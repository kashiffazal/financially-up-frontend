"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  ClockCircleOutlined,
  ExclamationCircleOutlined,
  DollarCircleOutlined,
  SyncOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * MinimumYearlyRepaymentsCompliance Component
 * ============================================
 * Section: Minimum Yearly Repayments and Ongoing Compliance
 * Features 100% complete, verbatim content from Page 9 of client docx.
 * Covers ongoing repayment schedules, distributable surplus caps, and anti-avoidance rules.
 */
export default function MinimumYearlyRepaymentsCompliance() {
  const complianceAspects = [
    {
      icon: <ClockCircleOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "First Repayment Deadline",
      desc: "The first minimum yearly repayment is generally due by the end of the income year after the year in which the loan was made, and minimum repayments continue over the loan term.",
    },
    {
      icon: <ExclamationCircleOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Consequence of Shortfall",
      desc: "If the required repayment is not made, a deemed dividend may arise, subject to the Division 7A rules and the company's distributable surplus.",
    },
    {
      icon: <DollarCircleOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Scope of Annual Review",
      desc: "A Division 7A review can cover the loan balance, repayments, interest and accounting entries to ensure continuous statutory compliance.",
    },
    {
      icon: <SyncOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Anti-Avoidance Integrity",
      desc: "Anti-avoidance rules may disregard some repayment arrangements, so the surrounding transactions must also be considered.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Ongoing Annual Obligations
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Minimum Yearly Repayments and Ongoing Compliance
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A complying loan agreement does not end the compliance process. The first minimum yearly repayment is generally due by the end of the income year after the year in which the loan was made, and minimum repayments continue over the loan term.
          </p>
        </div>

        {/* 4 Compliance Aspects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {complianceAspects.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Anti-Avoidance Warning Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-teal-50/80 via-emerald-50/60 to-white dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border border-teal-200/70 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              Surrounding Transactions &amp; Refinancing Rules
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Anti-avoidance rules may disregard some repayment arrangements (such as circular borrowing from the company shortly before year-end to pay off a prior loan), so the surrounding transactions must also be considered. Financially Up reviews the complete payment trail.
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <Link href="/book-an-appointment">
              <Button
                type="primary"
                className="brand-btn-primary w-full md:w-auto text-xs sm:text-sm font-semibold rounded-xl"
                icon={<ArrowRightOutlined />}
                iconPosition="end"
              >
                Calculate Minimum Repayment
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
