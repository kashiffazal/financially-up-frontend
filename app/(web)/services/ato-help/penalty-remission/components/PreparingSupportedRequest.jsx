"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileTextOutlined,
  CheckCircleOutlined,
  MedicineBoxOutlined,
  FieldTimeOutlined,
  CarryOutOutlined,
  SafetyCertificateOutlined,
  StopOutlined,
} from "@ant-design/icons";

/**
 * PreparingSupportedRequest Component
 * ===================================
 * Section 5: Preparing a supported request
 * Verbatim text from Page 5 of '11th Pillar ATO Help.docx'.
 *
 * Details the chronology-building process, supported evidence checklist,
 * and our commitment to factual accuracy without exaggerated claims.
 */
export default function PreparingSupportedRequest() {
  const evidenceList = [
    {
      icon: <FileTextOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "ATO Notices & Account Statements",
      verbatim: "ATO notices and relevant account statements",
      desc: "Original Notice of Penalty, running balance account statements, and integrated client account transaction histories.",
    },
    {
      icon: <CheckCircleOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Lodgment Confirmations",
      verbatim: "Lodgment confirmations and prior correspondence",
      desc: "Tax agent lodgment receipts, time-stamped portal confirmations, and copies of late-filed returns showing immediate remediation.",
    },
    {
      icon: <MedicineBoxOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Medical & Third-Party Evidence",
      verbatim: "Medical or other third-party evidence, where relevant and available",
      desc: "Hospital admission letters, certificates from registered medical practitioners, insurance claims, or legal certificates.",
    },
    {
      icon: <FieldTimeOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Records of Disruptive Events",
      verbatim: "Records of events that prevented compliance",
      desc: "Disaster relief notices, severe weather reports, cyber-attack logs, bank platform downtime records, or bereavement notices.",
    },
    {
      icon: <CarryOutOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Steps Taken to Resolve the Issue",
      verbatim: "Evidence of steps taken to resolve the issue",
      desc: "Records proving appointment of registered tax agents, reconstruction of lost bookkeeping, and implementation of compliance systems.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors" id="remission-process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="cyan" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Substantiated Chronology
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Preparing a supported request
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            We start with the penalty notice, the original due date and the date the outstanding document was lodged or the error corrected. We then prepare a chronology that connects the events to the non-compliance. Supporting material may include:
          </p>
        </div>

        {/* 5 Evidence Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {evidenceList.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 hover:border-brand-emerald dark:hover:border-brand-emerald transition-all duration-300 hover:shadow-md flex flex-col justify-between ${
                idx === 4 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-200 font-medium mb-2 leading-relaxed">
                  "{item.verbatim}"
                </p>
                <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-zinc-700/60 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                <CheckCircleOutlined /> Document Ready
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Strict Factuality Warning */}
        <div className="rounded-2xl p-6 sm:p-8 bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 shrink-0 border border-amber-200/60 dark:border-amber-800/60">
              <StopOutlined className="text-2xl" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                Factual Rigour Protects Your Credibility:
              </h4>
              <p className="text-xs sm:text-sm md:text-base text-slate-700 dark:text-zinc-300 leading-relaxed">
                Provide an accurate account. Exaggerated claims or documents that do not relate to the relevant period can weaken a request. We will explain where the available evidence does not support the reason proposed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
