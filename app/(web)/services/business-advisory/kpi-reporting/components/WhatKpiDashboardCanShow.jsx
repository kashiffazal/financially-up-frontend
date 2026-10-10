"use client";

import React from "react";
import { Tag } from "antd";
import {
  DashboardOutlined,
  HistoryOutlined,
  AimOutlined,
  FileSearchOutlined,
  InfoCircleOutlined,
  UserSwitchOutlined,
  SlidersOutlined,
} from "@ant-design/icons";

/**
 * WhatKpiDashboardCanShow Component
 * ==================================
 * Section 4: What can a KPI dashboard show?
 * Source: 12th Pillar Business Advisory.docx (Lines 362-369)
 *
 * Implements 100% complete, verbatim SEO text explaining the 5 key dashboard components,
 * realistic target calibration, and operational context interpretation.
 */
export default function WhatKpiDashboardCanShow() {
  const dashboardFeatures = [
    {
      icon: <HistoryOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Current Result & Prior Period",
      text: "The current result and a comparable prior period",
      sub: "Comparing like-for-like performance against prior months or seasons.",
    },
    {
      icon: <AimOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Actual vs Agreed Targets",
      text: "Actual performance against an agreed budget or target",
      sub: "Tracking variance against approved financial and operational benchmarks.",
    },
    {
      icon: <FileSearchOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Clear Definitions & Data Source",
      text: "A clear definition and source for each measure",
      sub: "Eliminating ambiguity so every manager understands the underlying calculation.",
    },
    {
      icon: <InfoCircleOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Notes on Exceptions & Data Gaps",
      text: "Notes on exceptional items or missing data",
      sub: "Transparent annotations explaining one-off anomalies or timing adjustments.",
    },
    {
      icon: <UserSwitchOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Accountable Action & Review Date",
      text: "An owner, action and review date for issues worth investigating",
      sub: "Assigning clear responsibility so insights translate into measurable execution.",
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
            Visual Reporting Architecture
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Can a KPI Dashboard Show?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            KPI dashboard services can present a short visual summary with
            trends, targets and explanations. The point is to make information
            easier to read, not to turn uncertain figures into precise answers. A
            dashboard might include:
          </p>
        </div>

        {/* 5 Core Dashboard Inclusions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {dashboardFeatures.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-2xs hover:shadow-md transition-shadow ${
                idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-emerald-800 dark:text-emerald-400 mb-2 leading-relaxed">
                {item.text}
              </p>
              <p className="text-xs text-slate-500 dark:text-zinc-400 m-0 leading-relaxed font-normal">
                {item.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Contextual Interpretation Callout */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-2xs">
          <div className="flex items-start gap-4">
            <span className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
              <SlidersOutlined className="text-xl" />
            </span>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                Target Calibration &amp; Operational Context
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal m-0">
                Targets should reflect the business&apos;s own plan and capacity.
                A red indicator on its own does not explain what caused a
                change. We help interpret the figures with context from
                operations, seasonality and one-off events.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
