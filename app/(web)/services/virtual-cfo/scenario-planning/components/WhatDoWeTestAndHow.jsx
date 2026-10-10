"use client";

import React from "react";
import { Tag } from "antd";
import {
  SlidersOutlined,
  DollarCircleOutlined,
  CalendarOutlined,
  AuditOutlined,
  CheckCircleOutlined,
  WarningOutlined,
} from "@ant-design/icons";

/**
 * WhatDoWeTestAndHow Component
 * ============================
 * Section 3: What do we test and how?
 * Features 100% complete, verbatim content from client SEO document.
 */
export default function WhatDoWeTestAndHow() {
  const testedFactors = [
    {
      title: "Sales volume, price and customer retention",
      desc: "Testing top-line sensitivity to lost accounts, price cuts, or reduced deal conversion rates.",
    },
    {
      title: "Gross margin, input costs and labour requirements",
      desc: "Simulating supplier price increases, raw material inflation, and overtime wage surges.",
    },
    {
      title: "Customer payment timing and supplier terms",
      desc: "Quantifying cash impacts when key clients stretch payment terms from 30 to 60 or 90 days.",
    },
    {
      title: "Start dates and delays for a proposed project",
      desc: "Assessing cash drag when launch dates slip but initial staffing and licensing commitments continue.",
    },
    {
      title: "Interest, repayments and capital spending",
      desc: "Evaluating borrowing sensitivity under rising interest rates and tight debt service covenants.",
    },
    {
      title: "The timing of responses such as deferring a purchase or changing capacity",
      desc: "Pre-planning operational triggers to freeze non-essential capex or scale casual headcount.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Sensitivity Variables
          </Tag>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What do we test and how?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            We begin with an agreed baseline supported by current records and plans. We then identify the factors with the greatest uncertainty or impact. Depending on the decision, our financial scenario analysis services may examine:
          </p>
        </div>

        {/* 6 Factors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testedFactors.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/50 border border-slate-200/80 dark:border-zinc-700/60 hover:bg-white dark:hover:bg-zinc-800 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-mono font-bold text-teal-600 dark:text-teal-400 block mb-2">
                  Sensitivity Factor 0{index + 1}
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white capitalize mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal m-0">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Trigger Points Callout */}
        <div className="p-8 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-800/40">
          <div className="flex items-center gap-2 mb-3">
            <WarningOutlined className="text-lg text-amber-600 dark:text-amber-400" />
            <Tag color="orange" className="brand-section-tag font-bold tracking-wider uppercase text-xs m-0">
              Operational Trigger Thresholds
            </Tag>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
            Clear Action Thresholds Before Pressure Mounts
          </h3>
          <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal m-0">
            A scenario should show both the possible outcome and the assumptions producing it. We may identify a trigger, such as cash falling below a level needed for planned obligations, and discuss what management would review at that point. Triggers are chosen for your circumstances, not imposed as universal rules.
          </p>
        </div>
      </div>
    </section>
  );
}
