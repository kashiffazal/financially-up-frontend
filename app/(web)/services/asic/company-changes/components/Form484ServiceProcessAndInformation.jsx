"use client";

import React from "react";
import { Tag, Alert } from "antd";
import {
  FileSearchOutlined,
  FormOutlined,
  SendOutlined,
  CheckCircleOutlined,
  KeyOutlined,
  CalendarOutlined,
  IdcardOutlined,
  SolutionOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

/**
 * Form484ServiceProcessAndInformation Component
 * ============================================
 * Section 4 of Change Company Details (/services/asic/company-changes/):
 * 1. "How our ASIC Form 484 service works"
 * 2. "What information may be required?"
 *
 * Implements 100% complete, verbatim content from Page 3 of '7th Pillar ASIC.docx'.
 * Clean White alternating section with 3-step workflow and documentation checklist.
 */
export default function Form484ServiceProcessAndInformation() {
  const steps = [
    {
      step: "01",
      icon: <FileSearchOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Identify & Cross-Check",
      desc: "Identify the exact company event and compare information held by ASIC against the company’s internal records.",
    },
    {
      step: "02",
      icon: <FormOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Determine Lodgement & Missing Details",
      desc: "Determine the applicable company update, request required supporting documents, consents, or resolutions.",
    },
    {
      step: "03",
      icon: <SendOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Prepare & Submit Lodgement",
      desc: "Prepare and lodge the relevant ASIC notification within the agreed scope, providing confirmation records.",
    },
  ];

  const infoPills = [
    { icon: <CalendarOutlined />, label: "Latest ASIC annual statement" },
    { icon: <KeyOutlined />, label: "Corporate key or portal access details" },
    { icon: <SolutionOutlined />, label: "Current & proposed addresses" },
    { icon: <IdcardOutlined />, label: "Officeholder details & cessation dates" },
    { icon: <IdcardOutlined />, label: "Director ID confirmation" },
    { icon: <SolutionOutlined />, label: "Member & share structure records" },
    { icon: <CheckCircleOutlined />, label: "Board resolutions & written consents" },
    { icon: <SolutionOutlined />, label: "Updated internal share register" },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subsection 1: How our ASIC Form 484 service works */}
        <div className="w-full mb-16 sm:mb-20">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <Tag color="green" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
              Workflow & Execution
            </Tag>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              How our ASIC Form 484 service works
            </h2>
          </div>

          <div className="bg-slate-50 dark:bg-zinc-900/80 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-zinc-800 shadow-xs space-y-6">
            <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
              The process normally begins by identifying the exact company event and checking the information held by ASIC against the company’s internal records. We then determine the applicable company update, request any missing details and prepare or lodge the relevant notification within the agreed scope.
            </p>

            {/* 3 Step Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              {steps.map((s, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/70 dark:border-zinc-800 relative hover:border-emerald-400/50 transition-colors"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center">
                      {s.icon}
                    </div>
                    <span className="text-xs font-extrabold text-slate-300 dark:text-zinc-600">
                      {s.step}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                    {s.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal pt-3 border-t border-slate-200/70 dark:border-zinc-800">
              Where Financially Up is acting as the company’s ASIC registered agent, the ongoing administration can also be managed through the registered-agent workflow. For one-off changes, a separate registered-agent appointment may not be necessary.
            </p>
          </div>
        </div>

        {/* Subsection 2: What information may be required? */}
        <div className="w-full">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <Tag color="blue" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
              Supporting Documentation
            </Tag>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              What information may be required?
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Depending on the change, we may request the latest annual statement, corporate key or portal information, current and proposed addresses, officeholder details, dates of appointment or cessation, director ID confirmation where relevant, member and share information, resolutions, consents and an updated share register.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {infoPills.map((pill, i) => (
              <div
                key={i}
                className="p-3.5 rounded-xl bg-slate-50 dark:bg-zinc-900/80 border border-slate-200/70 dark:border-zinc-800 flex items-center gap-2.5 text-xs text-slate-700 dark:text-zinc-300 font-medium"
              >
                <span className="text-emerald-600 dark:text-emerald-400 text-sm shrink-0">
                  {pill.icon}
                </span>
                <span>{pill.label}</span>
              </div>
            ))}
          </div>

          <Alert
            type="info"
            showIcon
            icon={<ExclamationCircleOutlined className="text-lg text-blue-600 dark:text-blue-400" />}
            className="rounded-2xl border border-blue-200/80 dark:border-blue-800/60 bg-blue-50/70 dark:bg-blue-950/30 p-4 sm:p-5"
            title={
              <span className="text-sm font-bold text-slate-900 dark:text-white">
                Incomplete or Disputed Company Records
              </span>
            }
            description={
              <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed m-0 mt-1 font-normal">
                For older or disputed changes, more information may be needed. If company records are incomplete, the first step may be to establish what can be supported before any date or ownership information is lodged with ASIC.
              </p>
            }
          />
        </div>
      </div>
    </section>
  );
}
