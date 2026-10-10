"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileTextOutlined,
  SolutionOutlined,
  AuditOutlined,
  CalculatorOutlined,
  SafetyCertificateOutlined,
  AlertOutlined,
} from "@ant-design/icons";

/**
 * WhatApplicationSupportIncludes Component
 * ========================================
 * Section: What Does R&D Tax Incentive Application Support Include?
 * Verbatim text from Page 5 of 15th Pillar R&D Tax Incentive docx.
 */
export default function WhatApplicationSupportIncludes() {
  const supportElements = [
    {
      icon: <FileTextOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Application Planning",
      desc: "Timeline planning, eligibility validation checkpoints, and portal registration structure.",
    },
    {
      icon: <SolutionOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Activity Descriptions",
      desc: "Reviewing technical narratives to reflect hypotheses, experiments, and technical uncertainties accurately.",
    },
    {
      icon: <AuditOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Record Review",
      desc: "Assessing contemporaneous project notes, test results, payroll records, and contractor documentation.",
    },
    {
      icon: <CalculatorOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Expenditure Coordination",
      desc: "Reconciling the R&D schedule with general ledger accounts and overall company tax compliance.",
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
            Advisory Demarcation
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Does R&amp;D Tax Incentive Application Support Include?
          </h2>
        </div>

        {/* Verbatim Document Copy Card */}
        <div className="max-w-4xl mx-auto bg-white dark:bg-zinc-900 rounded-3xl p-8 sm:p-10 border border-slate-200/80 dark:border-zinc-800 shadow-xs mb-12">
          <p className="text-base sm:text-lg text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
            Support can include application planning, activity descriptions, record review and
            coordination of the expenditure schedule with company tax compliance. Management and
            technical personnel still need to explain what was attempted, how outcomes were evaluated
            and what records substantiate the work. An adviser can organize and test that information,
            but should not invent activities, evidence or expenditure.
          </p>
        </div>

        {/* 4 Support Pillar Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {supportElements.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-slate-200/80 dark:border-zinc-800 shadow-xs"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-800 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                {item.title}
              </h4>
              <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
