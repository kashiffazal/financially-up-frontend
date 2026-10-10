"use client";

import React from "react";
import {
  SearchOutlined,
  ExclamationCircleOutlined,
  CheckCircleOutlined,
  FileSearchOutlined,
} from "@ant-design/icons";

/**
 * WhatIsAtoTaxReview Component
 * ============================
 * Section 1: Explains the fundamental nature of an ATO review vs an audit,
 * targeted scope, escalation paths, and legal implications.
 */
export default function WhatIsAtoTaxReview() {
  const reviewCharacteristics = [
    {
      title: "Targeted Examination",
      description:
        "Reviews focus on specific transactions, data matches, expense ratios or particular lodgements rather than a broad full-entity examination.",
      icon: <SearchOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
    },
    {
      title: "Two Potential Outcomes",
      description:
        "The matter can be resolved cleanly during the review if evidence substantiates the claims, or escalated to a formal audit if concerns remain.",
      icon: <CheckCircleOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
    },
    {
      title: "Clear Notice Scope",
      description:
        "The notice identifies the legal entity, specific periods, case officer contact details, questionnaire items and a strict response deadline.",
      icon: <FileSearchOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
    },
    {
      title: "Legally Binding Status",
      description:
        "Never assume 'review' means informal. The legal effect depends on the statutory powers cited in the notice and formal information-gathering notices.",
      icon: <ExclamationCircleOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-2">
            Pillar 11.7 • Statutory Evaluation
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            What is an ATO tax review?
          </h2>
          <div className="mt-6 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed space-y-4">
            <p>
              The ATO may review a return, activity statement, transaction or specific tax issue by requesting explanations and supporting information. The ATO describes reviews as a way to identify whether compliance issues need a more detailed examination. A concern may be resolved during the review, or the matter may be escalated to an audit if questions remain.
            </p>
            <p>
              A review is generally more targeted than an audit, although the scope can expand. The notice should identify the entity, periods or issues, contact officer, documents requested and due date. Do not assume the word ‘review’ makes the request informal: the legal effect depends on the particular letter and whether the ATO has used formal information-gathering powers.
            </p>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviewCharacteristics.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 hover:border-emerald-500 dark:hover:border-emerald-500 shadow-sm transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
