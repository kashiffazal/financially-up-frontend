"use client";

import React from "react";
import { Button } from "antd";
import {
  SolutionOutlined,
  CloudServerOutlined,
  BankOutlined,
  FileDoneOutlined,
  CompassOutlined,
  TeamOutlined,
  SafetyCertificateOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import Link from "next/link";

/**
 * WhatInformationNeededCfo Component
 * ==================================
 * Section 8: What information is useful at the start?
 *
 * Implements 100% verbatim content from '13th Pillar Virtual CFO.docx' (Section 1 - Virtual CFO).
 * Outlines the exact 6 categories of accounting records, banking information, plans, and debt
 * details required to establish an effective Virtual CFO engagement.
 *
 * Background: Lite Brand Gradient.
 */
export default function WhatInformationNeededCfo() {
  /**
   * The 6 exact checklist items from the client document
   */
  const informationItems = [
    {
      icon: <CloudServerOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      tag: "Accounting & Software",
      title: "current accounting software access or recent financial reports",
      description: "Read-only or advisor access to cloud ledgers (Xero, MYOB, QuickBooks) or recent year-to-date financial statements.",
    },
    {
      icon: <BankOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      tag: "Liquidity & Debt",
      title: "bank and finance information relevant to cash flow",
      description: "Statements for active operating accounts, overdrafts, credit facilities, and term loan schedules.",
    },
    {
      icon: <FileDoneOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      tag: "Historical Forecasts",
      title: "existing budgets, forecasts or board packs, if any",
      description: "Any current-year operational budgets, historical projections, or prior director reporting packs.",
    },
    {
      icon: <CompassOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      tag: "Strategic Direction",
      title: "the business plan, current priorities and major upcoming decisions",
      description: "Overview of your strategic targets, capital investments, key milestones, and planned organizational changes.",
    },
    {
      icon: <TeamOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      tag: "Operational Drivers",
      title: "sales pipeline, staffing plans or other operational information that affects the forecast",
      description: "CRM sales forecasts, upcoming hires, wage updates, or inventory lead-time adjustments.",
    },
    {
      icon: <SafetyCertificateOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      tag: "Stakeholder Governance",
      title: "details of lenders, investors or reporting obligations where relevant.",
      description: "Bank covenant benchmarks, investor disclosure timetables, or advisory board presentation deadlines.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-800/60 mb-4">
            <SolutionOutlined className="text-teal-600 dark:text-teal-400 text-xs sm:text-sm" />
            <span className="text-xs font-semibold text-teal-800 dark:text-teal-300 tracking-wide uppercase">
              Onboarding Checklist
            </span>
          </div>

          {/* Exact H2 Heading from Document */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What information is useful at the start?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            To tailor your virtual CFO engagement and build dependable forecasts, gathering the following key records provides an ideal baseline.
          </p>
        </div>

        {/* 6 Information Checklist Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {informationItems.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:border-teal-500/50 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 capitalize leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed m-0 font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Banner */}
        <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-xs p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircleOutlined className="text-xl" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white m-0">
                  Don&apos;t have every document fully assembled?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 m-0 mt-1 font-normal">
                  We can start with what you have, establish your accounting access, and identify any gaps during our initial discovery discussion.
                </p>
              </div>
            </div>
            <Link href="/book-an-appointment" className="shrink-0 w-full sm:w-auto">
              <Button
                type="primary"
                size="large"
                icon={<ArrowRightOutlined />}
                iconPlacement="end"
                className="w-full sm:w-auto h-11 px-6 rounded-xl font-semibold shadow-xs hover:scale-[1.01] transition-all"
              >
                Book an Appointment
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
