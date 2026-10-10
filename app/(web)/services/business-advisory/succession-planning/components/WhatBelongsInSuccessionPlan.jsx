"use client";

import React from "react";
import { Tag } from "antd";
import {
  ClockCircleOutlined,
  UserSwitchOutlined,
  DollarOutlined,
  BankOutlined,
  FileSearchOutlined,
  TeamOutlined,
  SafetyCertificateOutlined,
  HeartOutlined,
} from "@ant-design/icons";

/**
 * WhatBelongsInSuccessionPlan Component
 * =====================================
 * Section 2: What belongs in a succession plan?
 * Source: 12th Pillar Business Advisory.docx (Lines 510-519)
 *
 * Implements 100% complete, verbatim SEO text detailing the 7 core components
 * of a succession roadmap and family business governance nuances.
 */
export default function WhatBelongsInSuccessionPlan() {
  const planComponents = [
    {
      icon: <ClockCircleOutlined className="text-emerald-600 dark:text-emerald-400" />,
      title: "Owner Objectives & Post-Exit Role",
      text: "The owner's preferred timing, income needs and role after transition",
    },
    {
      icon: <UserSwitchOutlined className="text-teal-600 dark:text-teal-400" />,
      title: "Successor Evaluation & Capability",
      text: "Possible successors and their readiness to manage the business",
    },
    {
      icon: <DollarOutlined className="text-blue-600 dark:text-blue-400" />,
      title: "Valuation & Asset Foundation",
      text: "A working understanding of business value and the assets involved",
    },
    {
      icon: <BankOutlined className="text-purple-600 dark:text-purple-400" />,
      title: "Capital & Funding Mechanisms",
      text: "How a transfer or purchase might be funded",
    },
    {
      icon: <FileSearchOutlined className="text-amber-600 dark:text-amber-400" />,
      title: "Records & Contractual Quality",
      text: "The quality of accounts, contracts and operational records",
    },
    {
      icon: <TeamOutlined className="text-rose-600 dark:text-rose-400" />,
      title: "Stakeholder & Approval Continuity",
      text: "The implications for staff, customers, suppliers and key approvals",
    },
    {
      icon: <SafetyCertificateOutlined className="text-indigo-600 dark:text-indigo-400" />,
      title: "Tax, Legal & Specialist Timetable",
      text: "Tax questions, legal documents and a timetable for specialist advice",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950/60 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Roadmap Architecture
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Belongs in a Succession Plan?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            The answer depends on whether ownership, management or both will
            change. A practical plan may cover:
          </p>
        </div>

        {/* 7 Plan Components Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
          {planComponents.map((item, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between ${
                idx === 6 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-zinc-800 border border-slate-200/70 dark:border-zinc-700 flex items-center justify-center mb-3 text-lg">
                  {item.icon}
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-1">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white leading-relaxed m-0">
                  {item.text}
                </p>
              </div>
            </div>
          ))}

          {/* Quick Summary Pill Box */}
          <div className="p-5 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-800/50 flex flex-col justify-center">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400 mb-1">
              Core Objective
            </span>
            <p className="text-xs text-slate-700 dark:text-zinc-300 leading-relaxed m-0 font-normal">
              A comprehensive blueprint ensuring smooth operational handover
              and uncompromised wealth realization.
            </p>
          </div>
        </div>

        {/* Family Business Succession Governance Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-2xs">
          <div className="flex items-start gap-4">
            <span className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/60 border border-purple-100 dark:border-purple-800/40 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0 mt-0.5">
              <HeartOutlined className="text-xl" />
            </span>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                Family Business Succession &amp; Sensitive Dynamics
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal m-0">
                The plan should identify decisions and responsibilities rather
                than assume that a family member wants or can afford to take
                over. Family business succession planning can require sensitive
                conversations about roles, fairness, funding and control. Those
                matters call for coordinated financial and legal advice
                appropriate to the people involved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
