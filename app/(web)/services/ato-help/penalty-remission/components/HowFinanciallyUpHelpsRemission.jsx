"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileSearchOutlined,
  AuditOutlined,
  FileDoneOutlined,
  CheckCircleOutlined,
  CompassOutlined,
} from "@ant-design/icons";

/**
 * HowFinanciallyUpHelpsRemission Component
 * =======================================
 * Section 7: How Financially Up can help
 * Verbatim text from Page 5 of '11th Pillar ATO Help.docx'.
 *
 * Explains our end-to-end review and submission assistance,
 * evaluating cost-benefit value and preparing concise submissions.
 */
export default function HowFinanciallyUpHelpsRemission() {
  const steps = [
    {
      num: "01",
      icon: <FileSearchOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Review the Nature of the Charge",
      desc: "We analyze your ATO notice to classify whether the charge is a Failure-to-Lodge penalty, an administrative penalty, or statutory interest (GIC/SIC).",
    },
    {
      num: "02",
      icon: <AuditOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Assess Facts & Identify Missing Evidence",
      desc: "We test your chronological timeline against ATO administrative guidelines, identifying documentary gaps and gathering third-party evidence.",
    },
    {
      num: "03",
      icon: <FileDoneOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Prepare a Concise, Aligned Request",
      desc: "We draft a persuasive, factual remission submission directly referencing ATO Law Administration Practice Statements (PS LA).",
    },
    {
      num: "04",
      icon: <CompassOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Evaluate Decision & Advise Next Steps",
      desc: "We interpret the ATO's written determination and discuss available next steps, ensuring the scope and likely value of further work are agreed upfront.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="cyan" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Our Service Scope
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How Financially Up can help
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            We review the nature of the charge, assess the relevant facts, identify missing evidence and prepare a concise request aligned with the ATO's process. We can also help you understand the decision and discuss available next steps. The scope and likely value of further work can be agreed after we review your notice.
          </p>
        </div>

        {/* 4 Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-6 bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 hover:border-brand-emerald dark:hover:border-brand-emerald transition-all duration-300 hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-slate-300 dark:text-zinc-600">
                    {item.num}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200/60 dark:border-zinc-700/60 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                <CheckCircleOutlined /> Professional Service
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
