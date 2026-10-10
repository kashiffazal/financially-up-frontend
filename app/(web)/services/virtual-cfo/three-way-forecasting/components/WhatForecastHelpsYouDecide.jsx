"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  AimOutlined,
  DollarCircleOutlined,
  RiseOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * WhatForecastHelpsYouDecide Component
 * ====================================
 * Section 4: What does the forecast help you decide?
 * Features 100% complete, verbatim content from client SEO document.
 */
export default function WhatForecastHelpsYouDecide() {
  const decisionsTested = [
    {
      title: "Cash Runway for New Investments",
      desc: "How long existing cash reserves can sustain initial losses or capital setup spending under stated assumptions.",
    },
    {
      title: "Timing & Quantum of External Funding",
      desc: "Exactly which month an overdraft facility, bank equity, or partner injection is required to prevent a cash deficit.",
    },
    {
      title: "Debt Repayments vs Trading Cash",
      desc: "How principal loan reductions and lease interest payments interact with seasonal operating cash flow.",
    },
    {
      title: "Feasibility of Proposed Growth Rates",
      desc: "Whether aggressive sales expansion relies on unrealistic customer collection days or overstretched inventory turns.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <Tag color="purple" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Commercial Decisions
          </Tag>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What does the forecast help you decide?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            The output may show how long existing cash could support an investment under the stated assumptions, when extra funding might be required, or how debt repayments interact with trading results. It may also show whether a proposed growth rate depends on unrealistic customer collections or working capital. These are questions to investigate, not promised outcomes.
          </p>
        </div>

        {/* 4 Decision Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {decisionsTested.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
                <AimOutlined className="text-lg" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal m-0">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Cross-Linking Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed">
          <p className="m-0">
            A base forecast describes one set of assumptions. If you need to compare weaker demand, higher costs or a delayed start, our{" "}
            <Link href="/services/virtual-cfo/scenario-planning" className="text-emerald-700 dark:text-emerald-400 font-bold hover:underline">
              financial scenario planning services
            </Link>{" "}
            explore alternative conditions and responses. Our broader{" "}
            <Link href="/services/virtual-cfo/financial-modelling" className="text-emerald-700 dark:text-emerald-400 font-bold hover:underline">
              financial modelling services
            </Link>{" "}
            cover models built around other decisions and levels of complexity.{" "}
            <Link href="/services/virtual-cfo/board-reporting" className="text-emerald-700 dark:text-emerald-400 font-bold hover:underline">
              Board reporting services
            </Link>{" "}
            can help present the assumptions and results to directors.
          </p>
        </div>
      </div>
    </section>
  );
}
