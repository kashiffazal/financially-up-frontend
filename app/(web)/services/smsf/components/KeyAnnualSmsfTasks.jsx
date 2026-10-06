"use client";

import React from "react";
import { Tag } from "antd";
import {
  SyncOutlined,
  UsergroupAddOutlined,
  CalculatorOutlined,
  LineChartOutlined,
  FileDoneOutlined,
  AuditOutlined,
  SendOutlined,
  CalendarOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import AdvisoryReassuranceBanner from "@/components/website/AdvisoryReassuranceBanner";

/**
 * KeyAnnualSmsfTasks Component
 * ============================
 * Section 5: Key annual SMSF accounting and compliance tasks.
 *
 * Implements 100% exact copy from "Key annual SMSF accounting and compliance tasks"
 * in 9th Pillar SMSF.docx.
 *
 * Features:
 * - Verbatim paragraphs explaining the ATO annual financial statements requirement
 *   and market valuation obligation.
 * - 8-step chronological workflow cards illustrating each phase of the annual accounting cycle.
 * - Prominent 45-day auditor appointment statutory deadline highlight.
 *
 * Background: Clean White.
 */
export default function KeyAnnualSmsfTasks() {
  // The 8 annual workflow steps identified verbatim in the document:
  const annualWorkflowSteps = [
    {
      step: "01",
      icon: <SyncOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Reconciling Bank & Investments",
      description: "reconciling bank and investment activity",
    },
    {
      step: "02",
      icon: <CheckCircleOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Recording Contributions & Rollovers",
      description: "recording contributions and rollovers",
    },
    {
      step: "03",
      icon: <UsergroupAddOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Allocating Member Transactions",
      description: "allocating member transactions",
    },
    {
      step: "04",
      icon: <CalculatorOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Checking Income & Expenses",
      description: "checking income and expenses",
    },
    {
      step: "05",
      icon: <LineChartOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Reviewing Asset Values",
      description: "reviewing asset values at market value",
    },
    {
      step: "06",
      icon: <FileDoneOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Preparing Financial Statements",
      description: "preparing the financial statements (operating statement & balance sheet)",
    },
    {
      step: "07",
      icon: <AuditOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Arranging Independent Audit",
      description: "arranging the independent audit with an ASIC-approved auditor",
    },
    {
      step: "08",
      icon: <SendOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Lodging SMSF Annual Return",
      description: "lodging the SMSF annual return after the audit is finalized",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Exact Copy */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <Tag color="green" className="brand-section-tag">
            Annual Compliance & Workflow
          </Tag>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.2]">
            Key annual SMSF accounting and compliance tasks
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            An SMSF is not simply an investment account. Each year the trustees need records that explain the fund&apos;s transactions and financial position. The ATO requires annual financial statements, including an operating statement and statement of financial position, and fund assets generally need to be reported at market value for annual reporting purposes.
          </p>

          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            The annual workflow typically involves reconciling bank and investment activity, recording contributions and rollovers, allocating member transactions, checking income and expenses, reviewing asset values, preparing the financial statements, arranging the independent audit and then lodging the SMSF annual return after the audit is finalized. Trustees must appoint an approved SMSF auditor at least 45 days before the annual return is due.
          </p>
        </div>

        {/* 8-Step Annual Workflow Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {annualWorkflowSteps.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50/80 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-500/50 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-800 shadow-2xs flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-teal-600 dark:text-teal-400 px-2 py-0.5 rounded-md bg-teal-50 dark:bg-teal-950/40">
                    Step {item.step}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed capitalize">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Statutory 45-Day Auditor Appointment Deadline Callout */}
        <div className="rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-800/60 p-6 sm:p-8 mb-12 flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 flex items-center justify-center text-2xl shrink-0">
            <CalendarOutlined />
          </div>
          <div className="flex-1">
            <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider">
              Statutory Requirement
            </span>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-0.5 mb-1">
              The 45-Day Auditor Appointment Rule
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 m-0 leading-relaxed">
              Superannuation law mandates that trustees must appoint an approved SMSF auditor at least 45 days before the annual return is due. Financially Up assists with timely audit workpaper packaging to ensure seamless handover to the independent auditor.
            </p>
          </div>
        </div>

        {/* Advisory Reassurance Banner */}
        <AdvisoryReassuranceBanner
          tag="Annual Audit Coordination"
          tagIcon="safety"
          title="Seamless Independent SMSF Audit Handover"
          description="Financially Up prepares complete, audit-ready workpapers and coordinates directly with accredited independent SMSF auditors, ensuring all transactions and asset valuations are fully documented."
          primaryButton={{
            text: "Coordinate My SMSF Audit",
            href: "/services/smsf/audit-coordination",
          }}
          showPhone={true}
        />
      </div>
    </section>
  );
}
