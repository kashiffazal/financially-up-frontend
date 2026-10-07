"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  WarningOutlined,
  CheckCircleOutlined,
  FormOutlined,
  AuditOutlined,
  CalculatorOutlined,
} from "@ant-design/icons";

/**
 * WhenToAmendAndBeforeRequesting Component
 * ========================================
 * Section 2 & 3: When Should You Amend a Tax Return & Before Requesting an Amendment.
 * Features 100% complete, verbatim content from Page 12 of the client document.
 */
export default function WhenToAmendAndBeforeRequesting() {
  const commonTriggers = [
    "omitted salary, bank interest, dividends or other income;",
    "incorrect income amounts;",
    "a missed eligible deduction;",
    "a deduction claimed incorrectly or without sufficient support;",
    "an amended employer income statement;",
    "missing investment or managed-fund information;",
    "foreign income reported incorrectly;",
    "incomplete share, cryptocurrency or rental property information; or",
    "a capital gain or capital loss that was not reported correctly.",
  ];

  const fourChecklistItems = [
    {
      num: "1",
      title: "The amount currently shown",
      desc: "Identifying the exact reported line item on the original lodged tax return and notice of assessment.",
    },
    {
      num: "2",
      title: "The correct total amount",
      desc: "Recalculating the revised figure using verified primary source documents and statements.",
    },
    {
      num: "3",
      title: "Why the original amount was incorrect",
      desc: "Formulating a clear, factual explanation of the omission, revised information, or calculation error.",
    },
    {
      num: "4",
      title: "The records supporting the correction",
      desc: "Assembling substantiating invoices, bank feeds, amended employer PAYG statements, or broker reports.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 2: When Should You Amend a Tax Return */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
              Common Triggers &amp; Scenarios
            </Tag>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              When Should You Amend a Tax Return?
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              You may need to amend a tax return when the information originally lodged was incomplete or incorrect. Common examples include:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {commonTriggers.map((trigger, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/70 dark:border-zinc-800 shadow-2xs hover:shadow-xs transition-shadow"
              >
                <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-center shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5">
                  <CheckCircleOutlined className="text-xs" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-zinc-200 leading-snug">
                  {trigger}
                </span>
              </div>
            ))}
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
            <span className="font-bold text-slate-900 dark:text-white block mb-1">
              Process Evaluation:
            </span>
            Not every difference necessarily requires an amendment. The appropriate process depends on the issue, the affected income year, the available evidence and whether the matter involves correcting information or disputing an ATO decision.
          </div>
        </div>

        {/* Section 3: Before Requesting an Amendment */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
              Pre-Amendment Due Diligence
            </Tag>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Before Requesting an Amendment
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              The original return should generally be processed before an amendment is requested. Check the notice of assessment, the lodged return and the records supporting the proposed correction.
            </p>
          </div>

          {/* 4 Items to Identify */}
          <div className="max-w-4xl mx-auto mb-12">
            <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white block mb-4">
              For each affected item, identify:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {fourChecklistItems.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-2xs"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-bold text-xs flex items-center justify-center">
                      {item.num}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Ripple Effect Warning Callout */}
          <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-linear-to-r from-amber-500/10 via-amber-500/5 to-transparent dark:from-amber-950/40 dark:via-zinc-800/40 dark:to-transparent border border-amber-200 dark:border-amber-800/60">
            <div className="flex items-start gap-4">
              <CalculatorOutlined className="text-amber-600 dark:text-amber-400 text-2xl mt-1 shrink-0" />
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Systemic Impact: Why Full Return Review Is Essential
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  A change to one item can affect other calculations, including taxable income, tax offsets, the Medicare levy, study or training loan repayments, capital losses and other income-tested obligations. The complete affected return should therefore be reviewed rather than changing one figure in isolation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
