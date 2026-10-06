"use client";

import React from "react";
import { Tag } from "antd";
import {
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  InfoCircleOutlined,
  CompassOutlined,
  FileSearchOutlined,
  CalculatorOutlined,
  AuditOutlined,
  SendOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

/**
 * HowFinanciallyUpHelpsInternational Component
 * ============================================
 * Section 9: How Financially Up Can Help & What to Expect
 *
 * Implements the exact copy from Section 1 of the SEO document:
 * 1. The 9 assistance areas for Australian international tax matters
 * 2. Professional Australian jurisdiction disclaimer (foreign domestic law advice)
 * 3. The 5-step "What to Expect" client journey
 *
 * Background: Clean White
 */
export default function HowFinanciallyUpHelpsInternational() {
  /**
   * The 9 Assistance Areas (Exact from document)
   */
  const assistanceAreas = [
    "Reviewing your Australian tax position",
    "Identifying the information needed for Australian reporting",
    "Considering your Australian tax residency",
    "Helping report assessable foreign income",
    "Reviewing available information about foreign tax paid",
    "Assisting with relevant foreign income tax offset calculations",
    "Considering Australian capital gains tax implications where applicable",
    "Coordinating tax-return preparation with international information",
    "Identifying areas where specialist foreign legal or tax advice should be obtained",
  ];

  /**
   * The 5 Steps of What to Expect (Exact from document)
   */
  const whatToExpectSteps = [
    {
      stepNumber: "01",
      icon: <CompassOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "1. Initial discussion",
      description:
        "We first establish the countries involved, your Australian connection, the type of income or assets involved and what outcome or compliance matter needs to be addressed.",
    },
    {
      stepNumber: "02",
      icon: <FileSearchOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "2. Information review",
      description:
        "We review the relevant Australian and overseas information and identify any missing records.",
    },
    {
      stepNumber: "03",
      icon: <CalculatorOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "3. Tax analysis",
      description:
        "The Australian tax treatment is considered based on your circumstances, including residency, income type, timing and applicable international tax rules.",
    },
    {
      stepNumber: "04",
      icon: <AuditOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "4. Tax return or advisory work",
      description:
        "Where included within the agreed scope, we can assist with tax-return preparation, calculations and supporting schedules.",
    },
    {
      stepNumber: "05",
      icon: <GlobalOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "5. Further advice where required",
      description:
        "Complex cross-border arrangements can involve foreign tax law, legal matters, migration law or specialist international structuring. These matters may require separate professional advice.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <Tag color="green" className="brand-section-tag">
            Cross-Border Scope & Process
          </Tag>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.2]">
            International Tax Services Australia - How Financially Up Can Help
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            Financially Up can assist with Australian tax matters involving international circumstances by providing structured, practical guidance tailored to your specific cross-border position.
          </p>
        </div>

        {/* 9 Assistance Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {assistanceAreas.map((item, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-500/40 hover:shadow-sm transition-all flex items-start gap-3.5"
            >
              <div className="w-8 h-8 rounded-lg bg-teal-50 dark:bg-teal-950/50 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 text-sm" />
              </div>
              <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-zinc-200 m-0 leading-snug">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* Professional Role & Jurisdiction Disclaimer Box (Verbatim from doc) */}
        <div className="p-5 sm:p-6 rounded-2xl bg-teal-50/60 dark:bg-teal-950/30 border border-teal-200/80 dark:border-teal-800/60 mb-16 flex items-start gap-4">
          <InfoCircleOutlined className="text-teal-600 dark:text-teal-400 text-xl mt-0.5 shrink-0" />
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-teal-950 dark:text-teal-200 m-0">
              Australian Tax & Accounting Jurisdiction
            </h4>
            <p className="text-xs sm:text-sm text-teal-900 dark:text-teal-300 m-0 leading-relaxed">
              Our role is to advise on and assist with Australian taxation and accounting matters. Where advice is required on the domestic law of another country, we may recommend that you obtain advice from a qualified adviser in that jurisdiction.
            </p>
          </div>
        </div>

        {/* What to Expect (5 Steps) */}
        <div className="mb-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Tag color="cyan" className="font-semibold px-2.5 py-0.5 rounded-full mb-3">
              Client Journey
            </Tag>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              What to Expect
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-zinc-400">
              A structured 5-step approach to managing your international tax obligations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {whatToExpectSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800 flex flex-col justify-between hover:border-teal-500/40 hover:shadow-sm transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-800 flex items-center justify-center shadow-2xs">
                      {step.icon}
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400 dark:text-zinc-500">
                      {step.stepNumber}
                    </span>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed m-0 font-normal">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
