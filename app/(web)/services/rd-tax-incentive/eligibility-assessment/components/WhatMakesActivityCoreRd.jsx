"use client";

import React from "react";
import { Tag } from "antd";
import {
  ExperimentOutlined,
  QuestionCircleOutlined,
  ThunderboltOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";

/**
 * WhatMakesActivityCoreRd Component
 * =================================
 * Section: What makes an activity core R&D?
 * Verbatim text from Page 3 of 15th Pillar R&D Tax Incentive docx.
 */
export default function WhatMakesActivityCoreRd() {
  const progressionSteps = [
    { title: "Hypothesis", desc: "Scientific formulation addressing technical unknowns" },
    { title: "Experiment", desc: "Structured testing protocol designed to evaluate the hypothesis" },
    { title: "Observation", desc: "Contemporaneous recording of experimental data and metrics" },
    { title: "Evaluation", desc: "Systematic analysis of observed test outcomes" },
    { title: "Logical Conclusions", desc: "Findings leading to new technical knowledge" },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs"
          >
            Technical Criteria
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What makes an activity core R&amp;D?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Core R&amp;D activities require experimental work addressing technical or scientific
            uncertainties that cannot be solved by current worldwide knowledge.
          </p>
        </div>

        {/* Lead Verbatim Definition Card */}
        <div className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-3xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs mb-12">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-3">
            <ExperimentOutlined />
            <span>Legislative Core Activity Definition</span>
          </div>
          <p className="text-base sm:text-lg text-slate-800 dark:text-zinc-100 leading-relaxed font-normal">
            A core R&amp;D activity is an experimental activity whose outcome could not be known or
            determined in advance from current knowledge, information or experience. It must follow
            a systematic progression of work based on established science, proceeding from
            hypothesis through experiment, observation and evaluation to logical conclusions, and be
            conducted to generate new knowledge. The uncertainty must be technical or scientific, not
            merely whether customers will buy the finished product.
          </p>
        </div>

        {/* Systematic Progression of Work Flow */}
        <div className="mb-12">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400 mb-6 text-center">
            Systematic Progression of Work Based on Established Science
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {progressionSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-zinc-900 rounded-2xl p-5 border border-slate-200/80 dark:border-zinc-800 shadow-xs text-center flex flex-col justify-between"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 font-bold text-xs flex items-center justify-center mx-auto mb-3">
                  0{idx + 1}
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-500 dark:text-zinc-400 leading-normal">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 2 Practical Comparison Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Column 1: Example Comparison */}
          <div className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800">
            <h4 className="text-base font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <QuestionCircleOutlined className="text-teal-600 dark:text-teal-400" />
              Testing Hypotheses vs Routine Adaptation
            </h4>
            <p className="text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-normal mb-4">
              For example, testing a hypothesis about whether a new process can meet a technical
              performance requirement may warrant closer review. Adapting a known process to a new
              customer&apos;s specification may be challenging and valuable without necessarily meeting
              the core R&amp;D tests.
            </p>
            <p className="text-xs text-slate-500 dark:text-zinc-400 italic">
              We ask what was unknown, how the company investigated existing knowledge, what experiment
              was conducted and what was learned.
            </p>
          </div>

          {/* Column 2: Failure vs Success */}
          <div className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800">
            <h4 className="text-base font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <ThunderboltOutlined className="text-amber-600 dark:text-amber-400" />
              Outcome Independence &amp; Legal Precision
            </h4>
            <p className="text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-normal mb-4">
              Failure does not automatically make an experiment ineligible. Equally, a successful
              product does not prove that eligible experiments occurred.
            </p>
            <p className="text-xs text-slate-500 dark:text-zinc-400 italic">
              Activity descriptions need to identify the work done, not use &ldquo;research&rdquo; or
              &ldquo;innovation&rdquo; as a substitute for the legal criteria.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
