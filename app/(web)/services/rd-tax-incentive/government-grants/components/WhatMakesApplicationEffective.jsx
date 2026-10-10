"use client";

import React from "react";
import { Tag } from "antd";
import {
  CheckCircleOutlined,
  EditOutlined,
  FileProtectOutlined,
  FormOutlined,
} from "@ant-design/icons";

/**
 * WhatMakesApplicationEffective Component
 * =======================================
 * Section: Grant Writing Services Australia - What Makes an Application Effective?
 * Verbatim text from Page 4 of 15th Pillar R&D Tax Incentive docx.
 */
export default function WhatMakesApplicationEffective() {
  const criteriaPoints = [
    {
      num: "01",
      text: "answer every criterion directly and within the stated word or character limit",
      label: "Direct & Concise",
    },
    {
      num: "02",
      text: "use factual, specific and supportable statements",
      label: "Factual Precision",
    },
    {
      num: "03",
      text: "explain the project scope, need, activities, timing and responsibilities consistently",
      label: "Consistent Narrative",
    },
    {
      num: "04",
      text: "show how the project aligns with the program objectives and assessment criteria",
      label: "Program Alignment",
    },
    {
      num: "05",
      text: "include a realistic budget supported by quotes or reasonable cost assumptions",
      label: "Realistic Budgeting",
    },
    {
      num: "06",
      text: "describe measurable outcomes without overstating what the project will deliver",
      label: "Measurable Impact",
    },
    {
      num: "07",
      text: "include all mandatory attachments, declarations and approvals",
      label: "Mandatory Evidence",
    },
    {
      num: "08",
      text: "allow time for review and portal submission before the closing date and time",
      label: "Submission Buffer",
    },
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
            Grant Writing Excellence
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Grant Writing Services Australia - What Makes an Application Effective?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            An effective application is tailored to the published criteria. Generic marketing
            material may miss the current program’s objectives or evidence requirements. Assessors
            also need a credible project, logical delivery plan and supporting evidence.
          </p>
        </div>

        {/* 8-Point Effective Application Grid */}
        <div className="mb-12">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400 mb-6 text-center">
            A well-prepared application should generally:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {criteriaPoints.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-6 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between group hover:border-emerald-500/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-black text-emerald-600 dark:text-emerald-400 font-mono">
                      {item.num}
                    </span>
                    <Tag color="default" className="m-0 text-[10px] font-semibold uppercase">
                      {item.label}
                    </Tag>
                  </div>
                  <p className="text-sm text-slate-800 dark:text-zinc-200 leading-relaxed font-normal">
                    {item.text}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/50 dark:border-zinc-800 flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 text-xs font-medium">
                  <CheckCircleOutlined />
                  <span>Criterion Alignment</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Applicant Responsibility Callout */}
        <div className="bg-slate-100/70 dark:bg-zinc-800/50 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-700/80 flex items-center gap-4">
          <FileProtectOutlined className="text-2xl text-slate-500 shrink-0" />
          <p className="text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
            A grant application consultant can assist with structure and presentation, but the
            applicant remains responsible for the truth, completeness and authority of the
            information provided.
          </p>
        </div>
      </div>
    </section>
  );
}
