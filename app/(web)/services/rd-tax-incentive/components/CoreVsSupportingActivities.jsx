"use client";

import React from "react";
import { Tag } from "antd";
import {
  ExperimentOutlined,
  BranchesOutlined,
  CheckCircleOutlined,
  ExclamationCircleOutlined,
  SafetyCertificateOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import AdvisoryReassuranceBanner from "@/components/website/AdvisoryReassuranceBanner";

/**
 * CoreVsSupportingActivities Component
 * ====================================
 * Section: "What kinds of work might qualify?"
 * Content verbatim from '15th Pillar R&D Tax Incentive.docx'
 *
 * Theme: Lite Brand Gradient
 */
export default function CoreVsSupportingActivities() {
  const coreProgression = [
    { step: "Hypothesis", desc: "Formulating a testable proposition to address technical uncertainty" },
    { step: "Experiment", desc: "Conducting systematic trials to test the hypothesis against established science" },
    { step: "Observation", desc: "Recording contemporaneous measurements, data and physical observations" },
    { step: "Evaluation", desc: "Analysing experimental data against technical benchmarks" },
    { step: "Logical Conclusions", desc: "Drawing reasoned deductions conducted to generate new knowledge" },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-800/60 mb-4">
            <SafetyCertificateOutlined className="text-teal-600 dark:text-teal-400 text-xs sm:text-sm" />
            <span className="text-xs font-semibold text-teal-800 dark:text-teal-300 tracking-wide uppercase">
              Activity Qualification
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What kinds of work might qualify?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
            The R&amp;D tax incentive in Australia distinguishes core R&amp;D activities from supporting R&amp;D activities.
          </p>
        </div>

        {/* 2-Column: Core vs Supporting Activities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left: Core Activities */}
          <div className="p-7 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-teal-50 dark:bg-teal-950/50 flex items-center justify-center">
                  <ExperimentOutlined className="text-teal-600 dark:text-teal-400 text-xl" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider font-mono">
                    Mandatory Primary Activity
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0">
                    Core R&amp;D Activities
                  </h3>
                </div>
              </div>

              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-5">
                Core activities are experimental activities whose outcome could not be known or determined in advance from current knowledge, information or experience. They must follow a systematic progression of work based on established science, proceeding from hypothesis through experiment, observation and evaluation to logical conclusions, and be conducted to generate new knowledge.
              </p>

              {/* Systematic Progression Stepper */}
              <div className="bg-slate-50 dark:bg-zinc-950/60 rounded-xl p-4 border border-slate-200/80 dark:border-zinc-800/80">
                <span className="text-xs font-bold text-slate-700 dark:text-zinc-300 uppercase tracking-wider block mb-3">
                  Systematic Progression of Work
                </span>
                <div className="space-y-2.5">
                  {coreProgression.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <span className="w-5 h-5 rounded-full bg-teal-100 dark:bg-teal-950/80 text-teal-700 dark:text-teal-300 font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <div>
                        <strong className="text-slate-800 dark:text-zinc-200">{item.step}:</strong>{" "}
                        <span className="text-slate-600 dark:text-zinc-400">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 mt-5 border-t border-slate-100 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400">
              Purpose: Must be conducted to generate new scientific or technological knowledge.
            </div>
          </div>

          {/* Right: Supporting Activities & Commercial Realities */}
          <div className="p-7 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 flex items-center justify-center">
                  <BranchesOutlined className="text-emerald-600 dark:text-emerald-400 text-xl" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider font-mono">
                    Directly Related Activities
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0">
                    Supporting R&amp;D Activities
                  </h3>
                </div>
              </div>

              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-5">
                Supporting activities must be directly related to core activities, with further requirements in some cases.
              </p>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-950/60 border border-slate-200/80 dark:border-zinc-800/80 mb-5">
                <h4 className="text-xs font-bold text-slate-800 dark:text-zinc-200 uppercase tracking-wider mb-2">
                  Technical Uncertainty vs Commercial Novelty
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed m-0 mb-3">
                  A new product, difficult project or unsuccessful commercial launch does not automatically qualify. Nor does an experiment have to produce the result the company hoped for. The activity, technical uncertainty, method and contemporaneous evidence matter.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed m-0">
                  The company must self-assess against the legislative tests and retain records that support its description.
                </p>
              </div>

              {/* Legislative Exclusions: Tobacco & Gambling */}
              <div className="p-4 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/60">
                <div className="flex items-start gap-2.5">
                  <ExclamationCircleOutlined className="text-amber-600 dark:text-amber-400 mt-0.5 shrink-0 text-sm" />
                  <p className="text-xs sm:text-sm text-amber-950 dark:text-amber-200 leading-relaxed m-0 font-medium">
                    <strong>Legislative Exclusion:</strong> For income years starting on or after 1 July 2025, activities relating to tobacco or gambling are ineligible unless conducted for the sole purpose of harm minimisation.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-5 border-t border-slate-100 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400">
              Linkage: Supporting work must maintain direct operational connectivity back to eligible core work.
            </div>
          </div>
        </div>

        {/* Narrative Box: Eligibility Assessment Focus (Verbatim from docx) */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm mb-12">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
            Our Approach to Technical Activity Assessment
          </h3>
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed m-0">
            Our R&amp;D tax incentive eligibility assessment focuses on the entity, activities, records and major exclusions before claim work proceeds. Specialist technical input or a formal finding may be appropriate for uncertain activities; we agree those needs with you rather than promising that every development project is eligible.
          </p>
        </div>

        {/* Advisory Reassurance Banner */}
        <AdvisoryReassuranceBanner
          tag="R&D Activity Qualification Review"
          tagIcon="safety"
          title="Unsure if Your Experiments Meet the Legislative Tests?"
          description="We review your technical uncertainty, progression of experiments, and contemporaneous evidence before claim work proceeds."
          primaryButton={{
            text: "Assess Activity Eligibility",
            href: "/services/rd-tax-incentive/eligibility-assessment",
          }}
          showPhone={true}
        />
      </div>
    </section>
  );
}
