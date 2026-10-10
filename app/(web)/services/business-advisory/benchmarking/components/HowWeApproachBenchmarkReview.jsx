"use client";

import React from "react";
import { Tag } from "antd";
import {
  QuestionCircleOutlined,
  FileSearchOutlined,
  SlidersOutlined,
  CheckCircleOutlined,
  CompassOutlined,
  LineChartOutlined,
} from "@ant-design/icons";

/**
 * HowWeApproachBenchmarkReview Component
 * =======================================
 * Section 4: How we approach a benchmark review
 * Source: 12th Pillar Business Advisory.docx (Lines 467-470)
 *
 * Implements 100% complete, verbatim SEO text explaining question clarification,
 * data hygiene verification, transparent consultant methodology, internal vs peer datasets,
 * and practical SME-tailored implementation.
 */
export default function HowWeApproachBenchmarkReview() {
  const processSteps = [
    {
      icon: <QuestionCircleOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "1. Clarify the Core Question",
      desc: "Is your concern falling margin, unusually high overhead, uneven branch results or setting a new annual budget?",
    },
    {
      icon: <FileSearchOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "2. Verify Data Classification",
      desc: "Checking your own accounts to confirm bookkeeping consistency before comparing periods or business units.",
    },
    {
      icon: <SlidersOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "3. Select Comparison Sources",
      desc: "Selecting internal historical periods and evaluating whether external peer databases are suitable and reliable.",
    },
    {
      icon: <LineChartOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "4. Form Hypotheses & Action",
      desc: "Discussing differences with you, formulating hypotheses, collecting extra data, and setting monitoring measures.",
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
            Advisory Methodology
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How We Approach a Benchmark Review
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            First we clarify the question: is your concern falling margin,
            unusually high overhead, uneven branch results or a new budget? We
            then check your own data, including whether items have been
            classified consistently. Depending on the question, we select
            internal comparisons and evaluate whether an external source is
            suitable.
          </p>
        </div>

        {/* 4 Step Methodology Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-2xs hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center mb-4">
                {step.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal m-0">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Narrative Box: Transparent SME Tailored Guidance */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-2xs">
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal m-0">
              We discuss differences with you and consider factors the figures
              cannot show on their own. The outcome may be a small set of
              hypotheses, further data to collect or a practical measure to
              monitor. Benchmarking is most helpful when followed by a decision
              and a later check of its effects.
            </p>
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal m-0">
              A business benchmarking consultant can support this process by
              making the comparison transparent. If good peer data is
              unavailable, we can still compare your own results over time and
              explain the limitation. SME benchmarking services should reflect
              the resources and decisions of a smaller enterprise, without
              forcing complex reporting that no one uses.
            </p>

            <div className="pt-4 border-t border-slate-100 dark:border-zinc-800 flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-700 dark:text-emerald-400">
              <CheckCircleOutlined />
              <span>
                Pragmatic commercial focus: comparison followed by decision and post-implementation review.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
