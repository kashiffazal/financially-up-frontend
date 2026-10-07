"use client";

import React from "react";
import {
  UsergroupAddOutlined,
  TeamOutlined,
  ShoppingOutlined,
  RocketOutlined,
  DollarOutlined,
  SwapOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

/**
 * WhenStructureNeedsReview Component
 * ==================================
 * Section 5: Commercial milestones that trigger a structural review,
 * rollover concessions, and transfer implications.
 * Verbatim text from Page 6 of the Tax Planning document.
 */
export default function WhenStructureNeedsReview() {
  const triggers = [
    {
      icon: <UsergroupAddOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Bringing in a Partner",
      desc: "Introducing co-founders or equity partners into the commercial venture.",
    },
    {
      icon: <TeamOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Hiring a Larger Team",
      desc: "Expanding headcount, payroll thresholds, and contractor/employee governance.",
    },
    {
      icon: <ShoppingOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Acquiring Significant Assets",
      desc: "Purchasing substantial equipment, commercial real estate, or intellectual property.",
    },
    {
      icon: <RocketOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Taking on Investors",
      desc: "Issuing formal equity to external angel investors or venture funds.",
    },
    {
      icon: <SwapOutlined className="text-xl text-brand-primary dark:text-emerald-400" />,
      title: "Expanding Operations",
      desc: "Scaling interstate, launching new divisions, or international expansion.",
    },
    {
      icon: <DollarOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Selling Part of the Business",
      desc: "Succession planning, partial equity sales, or full enterprise divestment.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-zinc-900 border-b border-slate-100 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-primary/10 text-brand-primary dark:bg-emerald-500/10 dark:text-emerald-400 mb-4 border border-brand-primary/20 dark:border-emerald-500/20">
            Growth &amp; Transition Triggers
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            When Might a Business Structure Need Review?
          </h2>
        </div>

        {/* Verbatim Paragraph 1 */}
        <div className="max-w-4xl mx-auto mb-10 bg-slate-50 dark:bg-zinc-800/60 p-6 sm:p-7 rounded-2xl border border-slate-200/80 dark:border-zinc-700/80 text-slate-700 dark:text-zinc-300 text-base sm:text-lg leading-relaxed shadow-sm">
          A structure that suited a new business may not remain appropriate as circumstances change. A review can be useful before bringing in a partner, hiring a larger team, acquiring significant assets, taking on investors, expanding operations, selling part of the business or changing how profits are retained and distributed.
        </div>

        {/* 6 Trigger Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {triggers.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 dark:bg-zinc-800/40 rounded-2xl p-6 border border-slate-200/70 dark:border-zinc-700/60 hover:shadow-md transition-all duration-300 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 flex items-center justify-center shrink-0 border border-slate-200/80 dark:border-zinc-700 shadow-xs">
                {item.icon}
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Paragraph 2 on Restructure Concessions & Transfer Consequences */}
        <div className="max-w-4xl mx-auto bg-amber-50/70 dark:bg-amber-950/20 rounded-2xl p-6 sm:p-7 border border-amber-200/80 dark:border-amber-800/50">
          <div className="flex items-start gap-4">
            <ExclamationCircleOutlined className="text-2xl text-amber-600 dark:text-amber-400 mt-1 shrink-0" />
            <div className="space-y-2 text-slate-700 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
              <h3 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg">
                Transfer Consequences &amp; Rollover Concessions
              </h3>
              <p>
                Moving from one structure to another can itself have tax, legal, registration and transfer consequences. Some concessions or rollovers may be available in particular circumstances, but eligibility is fact-dependent and should be checked before assets or business interests are transferred.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
