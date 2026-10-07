"use client";

import React from "react";
import { Tag } from "antd";
import {
  CalendarOutlined,
  WarningOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";

/**
 * PreYearEndPlanningAndChanges Component
 * ======================================
 * Section 6: Year-end planning and major changes.
 * Verbatim text from Page 4 of '3rd Pillar Tax Planning & Advisory Final Content Pages 1-12.docx'.
 *
 * Explains why pre-30 June timing prevents irreversible tax consequences for executives,
 * investors, and high-income earners.
 */
export default function PreYearEndPlanningAndChanges() {
  const reviewCheckpoints = [
    "Expected year-to-date income & bonus payout projections",
    "Eligible deductible expenses & substantiated occupational costs",
    "Current-year realised capital gains & capital losses",
    "Proposed asset disposals & contract execution dates",
    "Rental property activity, repairs & depreciation schedules",
    "Personal superannuation contribution records & remaining caps",
    "Upcoming changes in employment contracts or investment holdings",
    "Potential Division 293 tax liabilities & Medicare Levy Surcharge tiers",
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Pre-30 June Strategy
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Year-End Planning and Major Changes
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A useful time for high income tax planning is before 30 June or before a major transaction rather than after the event. A review may look at expected income, deductible expenses, current-year capital gains and losses, proposed asset disposals, property activity, contribution records and upcoming changes in employment or investment holdings.
          </p>
          <p className="mt-3 text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
            The purpose is to understand the tax position before decisions become irreversible. Some actions have strict eligibility conditions or timing rules, so planning should not be based on assumptions or last-minute transactions without proper review.
          </p>
        </div>

        {/* 8 Checkpoints Grid */}
        <div className="rounded-2xl bg-slate-50/80 dark:bg-zinc-950/80 border border-slate-200/80 dark:border-zinc-800 p-7 sm:p-10 mb-10">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200/80 dark:border-zinc-800">
            <ClockCircleOutlined className="text-brand-primary dark:text-emerald-400 text-lg" />
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              Pre-Year-End Review Checklist
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {reviewCheckpoints.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800/90 flex items-start gap-3 hover:border-emerald-400/60 transition-colors"
              >
                <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-sm mt-0.5 shrink-0" />
                <span className="text-xs font-medium text-slate-700 dark:text-zinc-300 leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Irreversible Decisions Warning Box */}
        <div className="rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/50 p-5 sm:p-6 flex items-start gap-3.5 w-full">
          <WarningOutlined className="text-amber-600 dark:text-amber-400 text-lg mt-0.5 shrink-0" />
          <p className="text-xs sm:text-sm text-amber-900 dark:text-amber-200 leading-relaxed font-normal">
            <strong>Avoid Irreversible Tax Consequences:</strong> Once a contract of sale is executed or 30 June passes, options to manage CGT timing, make deductible super contributions, or substantiate deductions become locked. Planning ahead preserves strategic choice.
          </p>
        </div>
      </div>
    </section>
  );
}
