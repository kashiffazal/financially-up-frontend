"use client";

import React from "react";
import {
  FileTextOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  DollarOutlined,
  ExperimentOutlined,
  ArrowRightOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import Link from "next/link";

/**
 * WhatRecordsShouldKeep Component
 * ===============================
 * Section: "What records should the company keep?"
 * Content verbatim from '15th Pillar R&D Tax Incentive.docx'
 *
 * Theme: Lite Brand Gradient
 */
export default function WhatRecordsShouldKeep() {
  const recordCategories = [
    {
      title: "Technical Evidence Trail",
      tag: "What & Why",
      icon: <ExperimentOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      description:
        "Records should show what was unknown, the hypothesis, the experiments performed, observations, evaluation and conclusions. Project plans, test results, dated technical notes and decisions may help.",
      items: [
        "What was unknown (scientific or technical uncertainty)",
        "Documented hypotheses and test design parameters",
        "Experiments performed, protocols and test iterations",
        "Empirical observations, raw trial data and results",
        "Technical evaluation and logical conclusions reached",
        "Project plans, dated technical notes and key milestone decisions",
      ],
    },
    {
      title: "Financial Connection & Costs",
      tag: "Traceable Spend",
      icon: <DollarOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      description:
        "Financial records should connect wages, timesheets, invoices and other expenditure to the relevant activities.",
      items: [
        "Payroll summaries, PAYG summaries and Superannuation verification",
        "Contemporaneous timesheets linking staff hours to specific R&D activities",
        "Contractor agreements, work orders and detailed itemized invoices",
        "Material purchase invoices and laboratory consumables tracking",
        "General ledger transaction extracts demonstrating expenditure was incurred",
        "Documented allocation basis connecting costs to registered activities",
      ],
    },
  ];

  const timelinePhases = [
    {
      phase: "Before Activities",
      focus: "Project Plans & Hypotheses",
      desc: "Documenting background research, state of knowledge, technical unknowns, and the experimental plan.",
    },
    {
      phase: "During Activities",
      focus: "Trials, Timesheets & Logs",
      desc: "Capturing real-time test runs, measurements, failures, invoices, and contemporary labour allocation.",
    },
    {
      phase: "After Activities",
      focus: "Evaluations & Conclusions",
      desc: "Synthesizing test results, logical deductions, project outcomes, and complete financial reconciliations.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-800/60 mb-4">
            <FileTextOutlined className="text-teal-600 dark:text-teal-400 text-xs sm:text-sm" />
            <span className="text-xs font-semibold text-teal-800 dark:text-teal-300 tracking-wide uppercase">
              Contemporaneous Evidence
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What records should the company keep?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
            Records should show what was unknown, the hypothesis, the experiments performed, observations, evaluation and conclusions. Project plans, test results, dated technical notes and decisions may help. Financial records should connect wages, timesheets, invoices and other expenditure to the relevant activities.
          </p>
        </div>

        {/* 3-Phase Timeline: Before, During, and After (Verbatim Principle) */}
        <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 p-6 sm:p-8 shadow-sm mb-12">
          <div className="flex items-center gap-2 mb-4">
            <ClockCircleOutlined className="text-teal-600 dark:text-teal-400" />
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white m-0">
              The Department&apos;s Guidance: Records Before, During and After
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-6">
            The Department&apos;s guidance expects records from before, during and after the activities, rather than a technical story reconstructed only when a tax return is due.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {timelinePhases.map((phase, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-50 dark:bg-zinc-950/60 border border-slate-200/80 dark:border-zinc-800/80 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider font-mono block mb-1">
                    {phase.phase}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                    {phase.focus}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed m-0">
                    {phase.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2-Column: Technical Evidence vs Financial Connection */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {recordCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-7 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-zinc-800 flex items-center justify-center">
                      {cat.icon}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0">
                      {cat.title}
                    </h3>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 font-mono">
                    {cat.tag}
                  </span>
                </div>

                <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-5">
                  {cat.description}
                </p>

                <div className="bg-slate-50 dark:bg-zinc-950/60 rounded-xl p-4 border border-slate-200/80 dark:border-zinc-800/80">
                  <ul className="space-y-2">
                    {cat.items.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-zinc-400">
                        <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 mt-1 shrink-0 text-xs" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* First Review & Missing Evidence Callout (Verbatim from docx) */}
        <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <InfoCircleOutlined className="text-teal-600 dark:text-teal-400" />
              <h4 className="text-base font-bold text-slate-900 dark:text-white m-0">
                A Useful First Review &amp; Evidence Limitations
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed m-0 max-w-3xl">
              A useful first review asks whether those records can support each activity and whether costs can be allocated on a reasonable basis. Where evidence is missing, we explain the limitation. Our R&amp;D tax claim preparation service addresses the expenditure analysis, reconciliations and tax return stage in more detail.
            </p>
          </div>
          <Link href="/services/rd-tax-incentive/rnd-tax-claim-preparation" className="shrink-0">
            <Button
              type="primary"
              size="large"
              icon={<ArrowRightOutlined />}
              iconPlacement="end"
              className="h-11 px-6 rounded-xl font-semibold shadow-md"
            >
              Claim Preparation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
