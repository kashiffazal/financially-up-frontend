"use client";

import React from "react";
import {
  UserSwitchOutlined,
  TeamOutlined,
  RocketOutlined,
  ApartmentOutlined,
  CompressOutlined,
  RiseOutlined,
  AuditOutlined,
  CheckCircleFilled,
  InfoCircleOutlined,
} from "@ant-design/icons";

/**
 * WhenIsRestructureRelevant Component
 * ===================================
 * Section 1: 7 commercial & structural transition triggers when an existing
 * arrangement no longer matches operational reality or growth goals.
 * Verbatim text from Page 11 of the Tax Planning document.
 */
export default function WhenIsRestructureRelevant() {
  const scenarios = [
    {
      icon: <UserSwitchOutlined className="text-xl text-brand-primary dark:text-emerald-400" />,
      title: "Sole Trader to Company Conversion",
      text: "A sole trader is considering operating through a company or another structure.",
    },
    {
      icon: <TeamOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Partnership & Asset Ownership Changes",
      text: "A partnership is changing partners or the way business assets are held.",
    },
    {
      icon: <RocketOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Supporting Growth & Capital Investment",
      text: "A growing business wants a structure that better supports new owners, investment or financing.",
    },
    {
      icon: <ApartmentOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Separating Business Activities & Assets",
      text: "Owners want to separate particular business activities or assets.",
    },
    {
      icon: <CompressOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Simplifying Complex Entities",
      text: "A company or trust arrangement has become unnecessarily difficult to administer.",
    },
    {
      icon: <RiseOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Succession & Enterprise Sale Preparation",
      text: "A business is preparing for succession, sale or a significant ownership change.",
    },
    {
      icon: <AuditOutlined className="text-xl text-cyan-600 dark:text-cyan-400" />,
      title: "Reorganizing Loans, Entities & Assets",
      text: "Existing entities, loans and assets need to be reviewed before a broader reorganization.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-zinc-900 border-b border-slate-100 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-primary/10 text-brand-primary dark:bg-emerald-500/10 dark:text-emerald-400 mb-4 border border-brand-primary/20 dark:border-emerald-500/20">
            Transition Triggers
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            When May a Business Restructure Be Relevant?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
            Business restructuring may be considered when the existing arrangement no longer matches how the business operates or where ownership and commercial objectives have changed.
          </p>
        </div>

        {/* 7 Scenarios Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {scenarios.map((item, idx) => (
            <div
              key={idx}
              className={`bg-slate-50 dark:bg-zinc-800/40 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-700/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between ${
                idx === 6 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-white dark:bg-zinc-900 flex items-center justify-center border border-slate-200/80 dark:border-zinc-700 shadow-xs">
                    {item.icon}
                  </div>
                  <CheckCircleFilled className="text-emerald-500 text-lg" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Concluding Principle Box */}
        <div className="max-w-4xl mx-auto bg-brand-primary/5 dark:bg-emerald-950/20 rounded-2xl p-6 sm:p-7 border border-brand-primary/20 dark:border-emerald-800/40 flex items-start gap-4">
          <InfoCircleOutlined className="text-2xl text-brand-primary dark:text-emerald-400 mt-1 shrink-0" />
          <div className="text-slate-700 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
            <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">
              Holistic Commercial Alignment
            </h3>
            <p>
              The right structure is not determined by tax alone. Administration, control, legal obligations, financing, risk, future growth and ownership goals can all matter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
