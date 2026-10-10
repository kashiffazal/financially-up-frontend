"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileSearchOutlined,
  CheckSquareOutlined,
  FileDoneOutlined,
  EditOutlined,
  CalculatorOutlined,
  AuditOutlined,
  SafetyCertificateOutlined,
  TrophyOutlined,
} from "@ant-design/icons";

/**
 * WhatGrantConsultantDoes Component
 * =================================
 * Section: What Does a Government Grant Consultant Do?
 * Verbatim text from Page 4 of 15th Pillar R&D Tax Incentive docx.
 */
export default function WhatGrantConsultantDoes() {
  const supportItems = [
    {
      icon: <FileSearchOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Guidelines & Criteria Review",
      description: "reviewing the published grant guidelines, eligibility rules and assessment criteria",
    },
    {
      icon: <CheckSquareOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Applicant & Project Fit",
      description: "checking whether the applicant and proposed project appear to fit the program",
    },
    {
      icon: <FileDoneOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Mandatory Document Identification",
      description: "identifying mandatory documents, financial information and supporting evidence",
    },
    {
      icon: <EditOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Structuring Responses",
      description: "helping structure responses to selection or merit criteria",
    },
    {
      icon: <CalculatorOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Project Budgets & Costs",
      description: "assisting with project budgets, cost information and financial data",
    },
    {
      icon: <AuditOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Consistency & Clarity Review",
      description: "reviewing the application for consistency, clarity and completeness",
    },
    {
      icon: <SafetyCertificateOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Acquittal & Reporting Readiness",
      description: "identifying reporting, record-keeping and acquittal requirements if funding is awarded",
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
            Advisory Scope
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Does a Government Grant Consultant Do?
          </h2>
        </div>

        {/* Verbatim Lead Paragraph Card */}
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs mb-12 space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
            <TrophyOutlined />
            <span>Practical Assessment &amp; Competitive Merit Principles</span>
          </div>
          <p className="text-base sm:text-lg text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
            A government grants consultant assists with the practical work of assessing and preparing a
            grant application. This does not mean that funding is guaranteed or that every business will
            qualify. Decisions are made by the administering authority under the rules for the relevant
            program. Competitive grants may also be assessed on merit against other eligible applications,
            so satisfying basic eligibility is not the same as securing funding.
          </p>
          <p className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider text-xs">
            Depending on the engagement, support may include:
          </p>
        </div>

        {/* 7 Scope Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {supportItems.map((item, idx) => (
            <div
              key={idx}
              className={`bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:border-emerald-500/40 transition-colors flex flex-col justify-between ${
                idx === 6 ? "sm:col-span-2 lg:col-span-3 xl:col-span-1" : ""
              }`}
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-slate-50 dark:bg-zinc-800 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
              <span className="text-[10px] font-bold uppercase text-slate-400 dark:text-zinc-500 mt-4 block">
                Scope 0{idx + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
