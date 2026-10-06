"use client";

import React from "react";
import {
  SafetyCertificateOutlined,
  SearchOutlined,
  SyncOutlined,
  FormOutlined,
  SendOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * AtoResolutionProcess Component
 * ==============================
 * Section 8: A practical process for resolving an ATO issue
 *
 * Implements verbatim content from '11th Pillar ATO Help.docx' (Page 1: 1- ATO Help Australia).
 * Lays out the 4-stage resolution framework: Triage, Reconcile, Complete, Respond,
 * ensuring root causes are fixed rather than surface symptoms.
 *
 * Background: Lite Brand Gradient.
 */
export default function AtoResolutionProcess() {
  /**
   * The exact 4 process steps from client document
   */
  const processSteps = [
    {
      step: "01",
      phase: "Triage",
      desc: "confirm the notice, deadline, entity, tax period and immediate risk.",
      icon: <SearchOutlined className="text-teal-600 dark:text-teal-400 text-xl" />,
    },
    {
      step: "02",
      phase: "Reconcile",
      desc: "compare ATO accounts and lodged forms with your records.",
      icon: <SyncOutlined className="text-blue-600 dark:text-blue-400 text-xl" />,
    },
    {
      step: "03",
      phase: "Complete",
      desc: "prepare missing lodgements, schedules, documents or corrections within scope.",
      icon: <FormOutlined className="text-amber-600 dark:text-amber-400 text-xl" />,
    },
    {
      step: "04",
      phase: "Respond",
      desc: "provide a clear, supported answer and track any further request or commitment.",
      icon: <SendOutlined className="text-emerald-600 dark:text-emerald-400 text-xl" />,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-800/60 mb-4">
            <SafetyCertificateOutlined className="text-teal-600 dark:text-teal-400 text-xs sm:text-sm" />
            <span className="text-xs font-semibold text-teal-800 dark:text-teal-300 tracking-wide uppercase">
              Resolution Framework
            </span>
          </div>

          {/* Exact H2 Heading from Document */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            A practical process for resolving an ATO issue
          </h2>
        </div>

        {/* 4 Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {processSteps.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:border-teal-500/50 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-zinc-800 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-teal-600 dark:text-teal-400">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.phase}
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal m-0 capitalize-first">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Exact Verbatim Core Principle Note from Document */}
        <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-teal-200/80 dark:border-teal-800/60 p-6 sm:p-8 text-center sm:text-left flex flex-col sm:flex-row items-center gap-4 sm:gap-6 shadow-xs">
          <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/50 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
            <CheckCircleOutlined className="text-xl" />
          </div>
          <p className="text-sm sm:text-base text-slate-800 dark:text-zinc-200 font-medium leading-relaxed m-0">
            This process helps avoid treating a symptom—such as an account balance—without resolving
            the lodgement or record issue that produced it.
          </p>
        </div>
      </div>
    </section>
  );
}
