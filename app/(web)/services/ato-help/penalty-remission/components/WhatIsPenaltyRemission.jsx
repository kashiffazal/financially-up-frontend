"use client";

import React from "react";
import { Tag } from "antd";
import {
  SafetyCertificateOutlined,
  AuditOutlined,
  FileProtectOutlined,
  CheckCircleOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";

/**
 * WhatIsPenaltyRemission Component
 * =================================
 * Section 1: What is ATO penalty remission?
 * Verbatim text from Page 5 of '11th Pillar ATO Help.docx'.
 *
 * Explains the discretionary nature of penalty remission and distinguishes
 * it from disputing the valid legal basis of a penalty imposition.
 */
export default function WhatIsPenaltyRemission() {
  const remissionAspects = [
    {
      icon: <FileProtectOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Discretionary Administrative Relief",
      lead: "Remission is the ATO's decision to reduce or remove a penalty that has been imposed.",
      desc: "It is discretionary and depends on the facts and the legal and administrative rules for that penalty.",
    },
    {
      icon: <SafetyCertificateOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Causal Explanation & Remediation",
      lead: "A request should identify the penalty, explain why the relevant obligation was not met and include evidence of the circumstances and steps taken to put matters right.",
      desc: "The ATO must be satisfied that non-compliance was not reckless and that full lodgement has now occurred.",
    },
    {
      icon: <AuditOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Remission vs Formal Dispute",
      lead: "It is important to distinguish remission from disputing whether a penalty was correctly imposed.",
      desc: "An objection or another review pathway may be appropriate if the underlying facts or assessment are in dispute. We can help identify the issue and the appropriate next step.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="cyan" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Administrative Relief Explained
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What is ATO penalty remission?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Remission is the ATO's decision to reduce or remove a penalty that has been imposed. It is discretionary and depends on the facts and the legal and administrative rules for that penalty. A request should identify the penalty, explain why the relevant obligation was not met and include evidence of the circumstances and steps taken to put matters right.
          </p>
        </div>

        {/* 3 Aspect Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {remissionAspects.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-6 sm:p-8 bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 hover:border-brand-emerald dark:hover:border-brand-emerald transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-5">
                  {item.icon}
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
                <CheckCircleOutlined /> Statutory Assessment
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
