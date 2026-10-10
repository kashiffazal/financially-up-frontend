"use client";

import React from "react";
import { Tag } from "antd";
import {
  LinkOutlined,
  AimOutlined,
  GlobalOutlined,
  WarningOutlined,
  CheckCircleOutlined,
  StopOutlined,
} from "@ant-design/icons";

/**
 * WhenSupportingWorkIncluded Component
 * =====================================
 * Section: When can supporting work be included?
 * Verbatim text from Page 3 of 15th Pillar R&D Tax Incentive docx.
 */
export default function WhenSupportingWorkIncluded() {
  const tests = [
    {
      icon: <LinkOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
      tag: "Direct Connection",
      title: "Directly Related Test",
      description:
        "Supporting R&D activities must be directly related to core activities. Activities that are excluded from being core activities, or that produce or directly relate to producing goods or services, must also be conducted for the dominant purpose of supporting core R&D activities.",
    },
    {
      icon: <StopOutlined className="text-2xl text-rose-600 dark:text-rose-400" />,
      tag: "Statutory Exclusions",
      title: "Specific Exclusions & July 2025 Rules",
      description:
        "For income years starting on or after 1 July 2025, activities relating to tobacco or gambling can only qualify where conducted for the sole purpose of harm minimisation. Routine operations, marketing and commercialisation should not be included merely because they occurred in the same project.",
    },
    {
      icon: <GlobalOutlined className="text-2xl text-amber-600 dark:text-amber-400" />,
      tag: "Overseas Finding",
      title: "Cross-Border Activities & Advance Findings",
      description:
        "An R&D tax eligibility check should also identify special cases. Overseas activities require a positive overseas finding before eligible expenditure can be claimed, and the application must be lodged before the end of the income year in which those activities are conducted or planned. The Department cannot accept a late overseas-finding application or grant an extension. Other excluded activities and sector-specific issues may require technical analysis. Where appropriate, the company may consider an advance finding; no consultant can establish eligibility by assertion alone.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50/60 dark:bg-zinc-950/60 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs"
          >
            Supporting Activities &amp; Exclusions
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            When can supporting work be included?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Supporting R&amp;D activities must have a direct connection to core experiments and meet
            the statutory dominant purpose tests.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {tests.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-7 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-800/80 flex items-center justify-center border border-slate-200 dark:border-zinc-700 shadow-xs">
                    {item.icon}
                  </div>
                  <Tag
                    color={idx === 1 ? "red" : idx === 2 ? "warning" : "blue"}
                    className="m-0 text-[11px] font-semibold uppercase tracking-wider rounded-full px-2.5 py-0.5 border-none"
                  >
                    {item.tag}
                  </Tag>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Alert Callout for Advance Findings */}
        <div className="bg-amber-50/60 dark:bg-amber-950/20 rounded-2xl p-6 sm:p-7 border border-amber-200/80 dark:border-amber-900/50 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/60 flex items-center justify-center shrink-0 text-amber-800 dark:text-amber-300">
            <WarningOutlined className="text-xl" />
          </div>
          <p className="text-xs sm:text-sm text-amber-950 dark:text-amber-200 leading-relaxed font-normal">
            <strong className="font-semibold text-amber-950 dark:text-amber-100">
              Statutory Realism:
            </strong>{" "}
            No consultant can establish eligibility by assertion alone. Where novel or uncertain activities exist, an advance finding from the Department provides formal certainty before incurring substantial expenditure.
          </p>
        </div>
      </div>
    </section>
  );
}
