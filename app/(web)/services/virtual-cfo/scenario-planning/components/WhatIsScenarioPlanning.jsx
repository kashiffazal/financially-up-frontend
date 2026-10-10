"use client";

import React from "react";
import { Tag } from "antd";
import {
  CompassOutlined,
  BranchesOutlined,
  ThunderboltOutlined,
  SwapOutlined,
} from "@ant-design/icons";

/**
 * WhatIsScenarioPlanning Component
 * ================================
 * Section 1: What is financial scenario planning?
 * Features 100% complete, verbatim content from client SEO document.
 */
export default function WhatIsScenarioPlanning() {
  const threeCases = [
    {
      title: "Expected Base Case",
      tag: "Baseline",
      color: "blue",
      desc: "Reflects current trading run rates, confirmed client contracts, and planned operational costs.",
    },
    {
      title: "Slower-Sales Downside Case",
      tag: "Stress-Test",
      color: "orange",
      desc: "Tests fixed overheads, customer payment delays, and cash runway if market conditions soften.",
    },
    {
      title: "Higher-Demand Upside Case",
      tag: "Capacity Strain",
      color: "green",
      desc: "Models working capital stretch, inventory requirements, and staff additions required to fulfill surge volume.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Verbatim Strategic Explanation */}
          <div className="lg:col-span-7">
            <Tag color="purple" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
              Risk & Uncertainty
            </Tag>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              What is financial scenario planning?
            </h2>
            <div className="mt-6 space-y-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              <p>
                Scenario planning takes a working forecast and changes a related set of assumptions to explore different plausible conditions. It may compare an expected case with a slower-sales case and a higher-demand case. Each scenario needs an explanation of why the assumptions belong together; simply increasing or decreasing every number by the same percentage can miss the real commercial risk.
              </p>
              <p>
                For example, stronger demand may lift sales but require extra staff, stock and working capital before customers pay. A weaker market may reduce revenue while rent and other fixed costs continue. Business scenario modelling links those changes to cash needs and helps make the trade-offs visible.
              </p>
              <p>
                A forecast describes one set of expectations. Scenarios ask how the business might respond when important expectations change. Neither is a guarantee, probability statement or substitute for the owner's knowledge of customers and operations.
              </p>
            </div>
          </div>

          {/* Right Column: Three Coherent Cases Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/60 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400 mb-4 flex items-center gap-2">
                <BranchesOutlined className="text-base text-purple-600 dark:text-purple-400" />
                Coherent Scenario Framework
              </h3>
              <div className="space-y-3.5">
                {threeCases.map((cs, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/70 dark:border-zinc-700/50"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white m-0">
                        {cs.title}
                      </h4>
                      <Tag color={cs.color} className="text-[11px] font-semibold m-0">
                        {cs.tag}
                      </Tag>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-zinc-300 m-0 leading-relaxed">
                      {cs.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-purple-50/70 dark:bg-purple-950/20 border border-purple-200/60 dark:border-purple-800/40 text-xs text-purple-950 dark:text-purple-300 leading-relaxed flex items-center gap-2">
              <SwapOutlined className="text-base text-purple-600 dark:text-purple-400 shrink-0" />
              <span>
                <strong>Commercial Realism:</strong> We bundle correlated changes together rather than applying arbitrary across-the-board percentage swings.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
