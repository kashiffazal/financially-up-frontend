"use client";

import React from "react";
import { Tag } from "antd";
import {
  AimOutlined,
  EyeOutlined,
  LockOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * FromNumbersToADecision Component
 * =================================
 * Section 4: From numbers to a decision
 * Features 100% complete, verbatim content from client SEO document.
 */
export default function FromNumbersToADecision() {
  const threeTiers = [
    {
      title: "Assumptions You Influence",
      icon: <AimOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      tag: "Controllable",
      color: "green",
      desc: "Pricing tiers, discretionary marketing spend, contractor headcount, and operational deadlines.",
    },
    {
      title: "Assumptions Needing Monitoring",
      icon: <EyeOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      tag: "Observable",
      color: "blue",
      desc: "Competitor pricing moves, macro input cost inflation, customer lead times, and payment debtor days.",
    },
    {
      title: "Decisions Hard to Reverse",
      icon: <LockOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      tag: "Irreversible",
      color: "volcano",
      desc: "Multi-year commercial lease commitments, permanent executive hires, and bank financing covenants.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <Tag color="purple" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Commercial Execution
          </Tag>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            From numbers to a decision
          </h2>
          <div className="mt-4 space-y-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            <p>
              The most useful result is not simply a table with three columns. We discuss which assumptions management can influence, which ones need monitoring and which decisions are hard to reverse. If an expansion is workable only under a very optimistic sales path, that is important to know before committing. If a slower sales path creates a temporary cash shortfall, the next question is whether the business has a realistic response.
            </p>
            <p>
              Business.gov.au distinguishes a budget used for planning spending from forecasts that help track cash and adjust plans. Scenario forecasting services extend that work by comparing alternative developments. Profit and cash remain distinct: an increase in invoiced sales may not pay a bill due next week.
            </p>
          </div>
        </div>

        {/* Three Pillars of Decision Framing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {threeTiers.map((tier, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-800 flex items-center justify-center">
                  {tier.icon}
                </div>
                <Tag color={tier.color} className="text-xs font-semibold m-0">
                  {tier.tag}
                </Tag>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                {tier.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal m-0">
                {tier.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
