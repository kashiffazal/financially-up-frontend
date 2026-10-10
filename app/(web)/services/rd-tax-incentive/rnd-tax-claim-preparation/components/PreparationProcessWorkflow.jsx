"use client";

import React from "react";
import { Tag } from "antd";
import {
  AuditOutlined,
  FileSyncOutlined,
  GlobalOutlined,
  WarningOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * PreparationProcessWorkflow Component
 * ====================================
 * Section: What does the preparation process involve?
 * Verbatim text from Page 2 of 15th Pillar R&D Tax Incentive docx.
 */
export default function PreparationProcessWorkflow() {
  const steps = [
    {
      step: "01",
      icon: <FileSyncOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
      tag: "Scoping & Reconciliations",
      title: "Review of Activities, Allocation & Accounting",
      description:
        "We confirm the company, period and registration status, then review the available activity and cost records. We agree an allocation method where needed, test relevant expenditure rules, reconcile the R&D amount to the accounts and prepare the tax calculation and schedule within the engagement. We discuss any gaps or uncertain items with management and coordinate with technical or specialist advisers where their input is necessary.",
    },
    {
      step: "02",
      icon: <AuditOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
      tag: "Tax Return Integration",
      title: "Integrated Working Papers & Company Return",
      description:
        "The tax return may also require consideration of ordinary deductions, related tax adjustments and the overall company result. R&D tax incentive claim support should therefore be integrated with the tax return preparation rather than added as an unexplained figure. We provide working papers identifying assumptions and records used, and explain what the company needs to confirm before lodgement.",
    },
    {
      step: "03",
      icon: <GlobalOutlined className="text-2xl text-amber-600 dark:text-amber-400" />,
      tag: "Cross-Border Special Rule",
      title: "Overseas Finding Rules & Strict Timing",
      description:
        "Where work is carried out overseas, expenditure should not be added without considering the overseas finding rules. A positive overseas finding is required before eligible overseas expenditure can be claimed. The application must be lodged before the end of the income year in which the overseas activities are conducted or planned, and the Department cannot accept a late overseas-finding application or grant an extension. This issue must be raised before the year ends, not after the return is ready.",
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
            Engagement Lifecycle
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What does the preparation process involve?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A methodical approach ensuring all calculations, technical assumptions,
            and compliance schedules reconcile seamlessly into your Australian company tax return.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="space-y-8 mb-12">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col md:flex-row items-start gap-6 lg:gap-8 group"
            >
              <div className="flex items-center gap-4 shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-zinc-900 flex items-center justify-center border border-slate-200 dark:border-zinc-800 shadow-xs">
                  {item.icon}
                </div>
                <div className="text-3xl font-black text-slate-300 dark:text-zinc-700 font-mono">
                  {item.step}
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Tag
                    color={idx === 2 ? "warning" : "blue"}
                    className="m-0 text-[11px] font-semibold uppercase tracking-wider rounded-full px-2.5 py-0.5 border-none"
                  >
                    {item.tag}
                  </Tag>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Critical Overseas Finding Alert */}
        <div className="bg-amber-50/60 dark:bg-amber-950/20 rounded-2xl p-6 sm:p-7 border border-amber-200/80 dark:border-amber-900/50 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/60 flex items-center justify-center shrink-0 text-amber-800 dark:text-amber-300">
            <WarningOutlined className="text-xl" />
          </div>
          <p className="text-xs sm:text-sm text-amber-950 dark:text-amber-200 leading-relaxed font-normal">
            <strong className="font-semibold text-amber-950 dark:text-amber-100">
              Crucial Statutory Cut-Off:
            </strong>{" "}
            Overseas finding applications must be submitted <em>prior to the end of the income year</em> in which offshore activities are carried out. The Department has no discretion to accept late applications or grant extensions.
          </p>
        </div>
      </div>
    </section>
  );
}
