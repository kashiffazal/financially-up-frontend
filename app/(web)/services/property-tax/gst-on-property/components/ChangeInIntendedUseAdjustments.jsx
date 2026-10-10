"use client";

import React from "react";
import { Tag } from "antd";
import {
  SwapOutlined,
  FileDoneOutlined,
  DollarOutlined,
  HistoryOutlined,
  CheckCircleOutlined,
  AlertOutlined,
} from "@ant-design/icons";

/**
 * ChangeInIntendedUseAdjustments Component
 * ========================================
 * Section: What if the intended use changes?
 * Features 100% complete, verbatim content from Page 6 of 10th Pillar Property Tax.docx.
 */
export default function ChangeInIntendedUseAdjustments() {
  const documentationList = [
    "Contemporaneous business plans and project feasibility models",
    "Commercial finance facility applications and bank correspondence",
    "Real estate agent listing instructions and marketing campaign agreements",
    "Executed residential tenancy agreements and lease documentation",
    "Formal board resolutions, trustee minutes, or partnership agreements",
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Creditable Purpose &amp; Division 129
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What if the Intended Use Changes?
          </h2>
        </div>

        {/* 2 Verbatim Text Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mb-12">
          {/* Paragraph 1 */}
          <div className="bg-slate-50/80 dark:bg-zinc-900/80 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-4">
              <CheckCircleOutlined />
              <span>Creditable Purpose &amp; Input Tax Credits</span>
            </div>
            {/* Verbatim text from official document */}
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
              GST credits depend on the extent to which acquisitions are made for a creditable purpose. Construction intended for taxable sale may support credits, while costs connected with input-taxed residential rent generally do not.
            </p>
          </div>

          {/* Paragraph 2 */}
          <div className="bg-slate-50/80 dark:bg-zinc-900/80 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-4">
              <SwapOutlined />
              <span>Build-to-Sell vs Build-to-Rent Shifts</span>
            </div>
            {/* Verbatim text from official document */}
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
              If a developer builds to sell but later rents the property, or builds to rent and later changes to a taxable sale, earlier credits and subsequent adjustments may need review. The timing, evidence of intention, actual use and applicable adjustment periods can affect the result.
            </p>
          </div>
        </div>

        {/* Verbatim Paragraph 3 Banner (Evidence Supporting Change of Intention) */}
        <div className="bg-slate-900 text-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-9 border border-slate-800">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-400 mb-3">
            <FileDoneOutlined />
            <span>Documenting Changes in Intended Application</span>
          </div>
          {/* Verbatim text from official document */}
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal mb-6">
            Keep business plans, finance applications, agent instructions, lease documents, marketing records and board or trustee decisions that support changes in intended use. Accounting entries alone may not establish the property's application.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 border-t border-slate-800">
            {documentationList.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                <CheckCircleOutlined className="text-emerald-400 mt-0.5 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
