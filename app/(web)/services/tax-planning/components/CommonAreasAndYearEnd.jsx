"use client";

import React from "react";
import {
  CalendarOutlined,
  CheckCircleOutlined,
  SafetyCertificateOutlined,
  FileDoneOutlined,
  DollarCircleOutlined,
  ApartmentOutlined,
  BookOutlined,
} from "@ant-design/icons";
import AdvisoryReassuranceBanner from "@/components/website/AdvisoryReassuranceBanner";

/**
 * CommonAreasAndYearEnd Component
 * ===============================
 * Section 6: Common Areas Reviewed & Year-End Planning Checkpoint.
 * Focuses on pre-30 June actions, superannuation notice of intent rules,
 * deduction timing, and Australian licensing boundaries.
 */
export default function CommonAreasAndYearEnd() {
  const commonAreas = [
    {
      icon: <DollarCircleOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Timing & Character of Income",
      description:
        "Evaluating when income is derived for tax purposes, assessable timing, and distinguishing between revenue and capital gains.",
    },
    {
      icon: <FileDoneOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Deductibility & Prepayments",
      description:
        "Ensuring expenses meet ATO deductibility criteria and verifying that prepayments fall strictly within allowable small business or individual rules.",
    },
    {
      icon: <ApartmentOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Entity Structure Impact",
      description:
        "Assessing whether trading through a Pty Ltd company, trust, or sole trader structure remains optimal for tax rate efficiency and asset protection.",
    },
    {
      icon: <BookOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Substantiation & Records",
      description:
        "Identifying documentation gaps before year-end, ensuring invoices, logbooks, and written resolutions will satisfy an ATO review.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-800/60 mb-4">
            <CalendarOutlined className="text-teal-600 dark:text-teal-400 text-xs sm:text-sm" />
            <span className="text-xs font-semibold text-teal-800 dark:text-teal-300 tracking-wide uppercase">
              Pre-30 June Checkpoint
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Common Areas Reviewed in Year-End Tax Planning
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
            Year-end planning is a practical checkpoint, but it should not be treated as a last-minute exercise.
            A review before 30 June helps identify incomplete records, expected tax liabilities, and actions that
            must occur within the relevant financial year.
          </p>
        </div>

        {/* 4 Review Area Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {commonAreas.map((area, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-slate-50/80 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-500/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-800 shadow-sm flex items-center justify-center mb-4">
                  {area.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {area.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                  {area.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Banner: Superannuation Notice of Intent & Statutory Rules */}
        <AdvisoryReassuranceBanner
          tag="ATO Statutory Requirements"
          title="Superannuation Notice of Intent & Mandatory Deadlines"
          description="Some planning strategies are subject to strict statutory rules. For example, claiming a personal super contribution deduction requires lodging a valid Notice of Intent (Section 290-170) with your super fund and receiving written acknowledgment before submitting your tax return. Financially Up ensures all required paperwork and deadlines are verified in advance."
          primaryButtonText="Book Year-End Review"
          primaryButtonHref="/book-an-appointment"
          secondaryButtonText="Call"
        />
      </div>
    </section>
  );
}
