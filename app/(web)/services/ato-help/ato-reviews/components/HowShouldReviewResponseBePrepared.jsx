"use client";

import React from "react";
import {
  AimOutlined,
  ReconciliationOutlined,
  BranchesOutlined,
  CheckSquareOutlined,
  EyeOutlined,
  CopyOutlined,
} from "@ant-design/icons";

/**
 * HowShouldReviewResponseBePrepared Component
 * ===========================================
 * Section 4: 6-step rigorous method for compiling an ATO review response,
 * ensuring clarity, consistency, and alignment with underlying records.
 */
export default function HowShouldReviewResponseBePrepared() {
  const preparationSteps = [
    {
      num: "1",
      title: "Scope the Request",
      description:
        "Scope the request by entity, tax, period, transaction and due date.",
      icon: <AimOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
    },
    {
      num: "2",
      title: "Reconcile to Lodged Figures",
      description:
        "Reconcile lodged amounts to the accounting records and source documents.",
      icon: <ReconciliationOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
    },
    {
      num: "3",
      title: "Categorise Content",
      description:
        "Separate facts, calculations, assumptions and technical tax positions.",
      icon: <BranchesOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
    },
    {
      num: "4",
      title: "Direct Answers & Labelled Files",
      description:
        "Answer each question directly and label the supporting attachments.",
      icon: <CheckSquareOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
    },
    {
      num: "5",
      title: "Pre-Submission Consistency Check",
      description:
        "Review the complete response for consistency before it is submitted.",
      icon: <EyeOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
    },
    {
      num: "6",
      title: "Retain Exact Audit Copy",
      description:
        "Retain an exact copy of what was provided and note any next action.",
      icon: <CopyOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-2">
            Methodology & Standards
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            How should the response be prepared?
          </h2>
          <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
            This approach gives the ATO a clear path through the evidence and helps identify unresolved issues before submission. It also reduces the risk of different people giving inconsistent explanations.
          </p>
        </div>

        {/* 6 Steps Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {preparationSteps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 hover:border-emerald-500 dark:hover:border-emerald-500 shadow-sm transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <span className="text-sm font-black text-slate-300 dark:text-zinc-700 font-mono">
                    Step 0{step.num}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
