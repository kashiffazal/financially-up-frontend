"use client";

import React from "react";
import { Tag } from "antd";
import {
  CarryOutOutlined,
  FileTextOutlined,
  SolutionOutlined,
  CalendarOutlined,
  ExclamationCircleOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * WhatToExpectAndWhatToBringKpi Component
 * =======================================
 * Section 6: What to expect and what to bring
 * Source: 12th Pillar Business Advisory.docx (Lines 373-375)
 *
 * Implements 100% complete, verbatim SEO text explaining the advisory process,
 * onboarding expectations, what documents to prepare, and data gap triage.
 */
export default function WhatToExpectAndWhatToBringKpi() {
  const checklistItems = [
    {
      icon: <FileTextOutlined className="text-emerald-600 dark:text-emerald-400" />,
      text: "Recent statutory financial statements or internal management accounts",
    },
    {
      icon: <SolutionOutlined className="text-teal-600 dark:text-teal-400" />,
      text: "Your current reporting pack or recurring spreadsheet summaries",
    },
    {
      icon: <CalendarOutlined className="text-blue-600 dark:text-blue-400" />,
      text: "Approved operational budget or rolling forecast models",
    },
    {
      icon: <CarryOutOutlined className="text-purple-600 dark:text-purple-400" />,
      text: "Specific examples of commercial decisions you currently struggle to make",
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
            Engagement Process &amp; Preparation
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What to Expect and What to Bring
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            We first ask what decisions you make regularly and what reports you
            currently use. We review recent accounts, budgets, invoices or
            operational records as relevant, then agree the measures,
            definitions, format and frequency. Once reporting begins, we review
            whether it actually answers your questions and adjust it when your
            business changes.
          </p>
        </div>

        {/* 2-Column Split: What to Bring & Handling Data Gaps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Column 1: What to Bring */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-2xs">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
              Documents to Bring to the Initial Discussion
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 mb-6 font-normal leading-relaxed">
              Bring recent financial statements or management accounts, your
              current reporting pack, any budget, and examples of decisions you
              struggle to make.
            </p>

            <div className="space-y-3">
              {checklistItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50/70 dark:bg-zinc-950/70 border border-slate-200/60 dark:border-zinc-800"
                >
                  <span className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center shrink-0 mt-0.5 text-base">
                    {item.icon}
                  </span>
                  <span className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 font-medium leading-relaxed">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Data Integrity & Pragmatic Reporting */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4">
                <ExclamationCircleOutlined className="text-2xl" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                Handling Incomplete Source Data
              </h3>
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                If source data is incomplete, we will identify the gaps and agree
                what can be reported reliably before building a dashboard around
                it.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
                Building dashboards on unverified figures creates a false sense
                of security. We ensure data capture mechanisms are sound so
                every reported indicator can be defended with complete
                confidence.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-100 dark:border-zinc-800 flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-700 dark:text-emerald-400">
              <CheckCircleOutlined />
              <span>
                Iterative reviews ensure reporting evolves with your business.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
