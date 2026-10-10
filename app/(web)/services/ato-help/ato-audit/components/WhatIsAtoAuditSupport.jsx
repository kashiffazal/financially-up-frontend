"use client";

import React from "react";
import { Tag } from "antd";
import {
  SafetyCertificateOutlined,
  SearchOutlined,
  FileProtectOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  AuditOutlined,
} from "@ant-design/icons";

/**
 * WhatIsAtoAuditSupport Component
 * ===============================
 * Section 1: What is ATO audit support?
 * Verbatim text from Page 3 of '11th Pillar ATO Help.docx'.
 *
 * Explains the distinction between an early risk review and a formal audit,
 * emphasizing evidence-based, structured cooperation.
 */
export default function WhatIsAtoAuditSupport() {
  const auditLevels = [
    {
      icon: <SearchOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
      tag: "Initial Stage",
      title: "ATO Risk Review",
      lead: "A risk review may initially seek broad information so the ATO can identify specific issues.",
      desc: "Often initiated via questionnaire or data-matching flag to test whether lodgements conform to industry benchmarks and ATO compliance profiles.",
    },
    {
      icon: <AuditOutlined className="text-2xl text-amber-600 dark:text-amber-400" />,
      tag: "In-Depth Investigation",
      title: "Comprehensive ATO Audit",
      lead: "An audit is generally more comprehensive and can involve closer examination of documents, processes and relevant people.",
      desc: "Involves statutory questionnaires, scrutiny of internal governance, third-party data requests, and formal position papers.",
    },
    {
      icon: <FileProtectOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
      tag: "Statutory Scope",
      title: "Governed by Stated Notice",
      lead: "The label on the correspondence, the stated scope and any formal notice determine what is required.",
      desc: "Every response must be strictly aligned with the statutory provisions and tax periods specified in the formal communication.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="cyan" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Understanding the Enquiry
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What is ATO audit support?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            ATO audit support is professional assistance during a tax review or audit. It is not about hiding information or disputing every point. It is about understanding the ATO’s questions, checking the taxpayer’s position against the records and applicable law, and providing clear, relevant responses within the required timeframes.
          </p>
        </div>

        {/* 3 Scope Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {auditLevels.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-6 sm:p-8 bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 hover:border-brand-emerald dark:hover:border-brand-emerald transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 shadow-sm border border-slate-200/60 dark:border-zinc-700 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-xs font-semibold text-slate-700 dark:text-zinc-300 px-2.5 py-1 rounded-full bg-white dark:bg-zinc-900 border border-slate-200/60 dark:border-zinc-700">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-200 font-medium leading-relaxed mb-2">
                  {item.lead}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-zinc-700/60 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                <CheckCircleOutlined /> Professional Audit Management
              </div>
            </div>
          ))}
        </div>

        {/* Objective & Strategic Posture Banner */}
        <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-blue-500/10 via-blue-500/5 to-transparent border border-blue-500/30 dark:border-blue-500/20">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-blue-500/20 text-blue-600 dark:text-blue-400 shrink-0">
              <ClockCircleOutlined className="text-2xl" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                Our Non-Confrontational, Evidence-Based Stance:
              </h4>
              <p className="text-xs sm:text-sm md:text-base text-slate-700 dark:text-zinc-300 leading-relaxed">
                We believe that clear communication and well-indexed evidence resolve ATO enquiries faster and far more effectively than adversarial delays. By presenting substantiated facts upfront, we help keep review scopes tightly bounded and minimize stress.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
