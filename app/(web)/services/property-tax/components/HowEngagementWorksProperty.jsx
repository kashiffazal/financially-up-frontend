"use client";

import React from "react";
import { Tag } from "antd";
import {
  AuditOutlined,
  FileSearchOutlined,
  CheckCircleOutlined,
  TeamOutlined,
  SolutionOutlined,
  BankOutlined,
  LineChartOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";

/**
 * HowEngagementWorksProperty Component
 * ====================================
 * Section: "What happens when you engage a property tax accountant?"
 * Implements the exact H2 and verbatim paragraphs from lines 49–51 of
 * '10th Pillar Property Tax.docx'.
 *
 * Features:
 * 1. 3-stage structured engagement process
 * 2. Multi-adviser coordination framework (conveyancers, solicitors, finance brokers,
 *    quantity surveyors, and authorized financial advisers).
 *
 * Background: Clean White with Dark Mode compatibility.
 */
export default function HowEngagementWorksProperty() {
  /**
   * 3 Engagement Stages derived directly from Paragraph 1:
   * "The work normally begins by confirming the property, legal owner, intended and actual use,
   *  transaction history and the outcome you need. We then identify the relevant records,
   *  review how amounts should be classified, and agree whether the engagement covers
   *  annual compliance, transaction-specific advice, accounting support or separately scoped planning."
   */
  const engagementStages = [
    {
      step: "01",
      icon: <AuditOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Confirm Ownership & Objectives",
      description:
        "We confirm the property details, legal ownership structure, intended and actual use, full transaction history, and the specific outcome you need.",
      points: [
        "Property title & ownership percentages",
        "Intended vs actual use history",
        "Desired commercial & tax outcome",
      ],
    },
    {
      step: "02",
      icon: <FileSearchOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Identify Records & Classify Amounts",
      description:
        "We identify the relevant supporting records and review how amounts should be classified between ordinary income, capital works, depreciating assets, and cost bases.",
      points: [
        "Identification of required documents",
        "Expense, interest & loan classification",
        "Capital vs revenue characterisation",
      ],
    },
    {
      step: "03",
      icon: <SolutionOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Agree Scope & Deliver Work",
      description:
        "We agree whether the engagement covers annual compliance, transaction-specific advice, accounting support, or separately scoped proactive planning.",
      points: [
        "Annual tax return compliance",
        "Transaction-specific CGT / GST advice",
        "Separately scoped property tax planning",
      ],
    },
  ];

  /**
   * 4 External Professionals from Paragraph 2:
   * "Where another adviser is involved, such as a conveyancer, solicitor,
   *  finance broker, quantity surveyor or authorized financial adviser,
   *  we can work from their documents and coordinate the tax and accounting information
   *  within our agreed scope. Each professional remains responsible for advice within their own area."
   */
  const partnerAdvisers = [
    {
      icon: <SolutionOutlined className="text-lg text-teal-600 dark:text-teal-400" />,
      role: "Conveyancers & Solicitors",
      scope:
        "We review contracts of sale, settlement adjustment sheets, transfer deeds, and stamp duty notices prepared by your legal representatives.",
    },
    {
      icon: <BankOutlined className="text-lg text-emerald-600 dark:text-emerald-400" />,
      role: "Finance Brokers & Lenders",
      scope:
        "We work from borrowing agreements, loan settlement sheets, and redraw histories to accurately apportion interest deductions and borrowing costs.",
    },
    {
      icon: <LineChartOutlined className="text-lg text-blue-600 dark:text-blue-400" />,
      role: "Quantity Surveyors",
      scope:
        "We incorporate specialist tax depreciation schedules for Division 40 plant & equipment and Division 43 structural building write-offs.",
    },
    {
      icon: <TeamOutlined className="text-lg text-purple-600 dark:text-purple-400" />,
      role: "Authorized Financial Advisers",
      scope:
        "We coordinate tax and accounting data within our agreed scope, while financial product and wealth selection advice remains with your licensed adviser.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Verbatim H2 and Lead Paragraphs */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <Tag color="green" className="brand-section-tag">
            Engagement Process
          </Tag>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.2]">
            What happens when you engage a property tax accountant?
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            The work normally begins by confirming the property, legal owner, intended and actual use, transaction history and the outcome you need. We then identify the relevant records, review how amounts should be classified, and agree whether the engagement covers annual compliance, transaction-specific advice, accounting support or separately scoped planning.
          </p>

          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            Where another adviser is involved, such as a conveyancer, solicitor, finance broker, quantity surveyor or authorized financial adviser, we can work from their documents and coordinate the tax and accounting information within our agreed scope. Each professional remains responsible for advice within their own area.
          </p>
        </div>

        {/* 3-Stage Engagement Flow Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {engagementStages.map((stage, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/80 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-500/40 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-800 shadow-2xs flex items-center justify-center group-hover:scale-105 transition-transform">
                    {stage.icon}
                  </div>
                  <span className="text-sm font-black text-slate-300 dark:text-zinc-700 font-mono tracking-wider">
                    {stage.step}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {stage.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal mb-4">
                  {stage.description}
                </p>

                <ul className="space-y-2 border-t border-slate-200/60 dark:border-zinc-800 pt-3">
                  {stage.points.map((pt, ptIdx) => (
                    <li
                      key={ptIdx}
                      className="flex items-start gap-2 text-xs text-slate-700 dark:text-zinc-300"
                    >
                      <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 mt-0.5 shrink-0 text-xs" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Multi-Adviser Coordination Framework Sub-Section */}
        <div className="rounded-2xl bg-slate-50/50 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 p-6 sm:p-8 lg:p-10">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 font-mono block mb-1">
              Coordinated Professional Network
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white m-0">
              Working Alongside Your Existing Professional Advisers
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed mt-2 m-0">
              Property transactions frequently involve legal, lending, and building professionals. We coordinate the accounting and tax treatment from their documentation, ensuring seamless compliance while each adviser stays responsible for their specific domain.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {partnerAdvisers.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/70 dark:border-zinc-800/80 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-zinc-800 flex items-center justify-center mb-3">
                    {item.icon}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                    {item.role}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed m-0 font-normal">
                    {item.scope}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-zinc-800 flex items-center gap-2 text-xs text-slate-500 dark:text-zinc-400">
            <SafetyCertificateOutlined className="text-teal-600 text-xs shrink-0" />
            <span>
              Professional Scope Boundary: Each professional remains responsible for advice within their own area.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
