"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileSearchOutlined,
  CalculatorOutlined,
  SendOutlined,
  AuditOutlined,
  CheckCircleOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";

/**
 * HowFinanciallyUpHelpsDisclosure Component
 * =========================================
 * Section 7: How Financially Up can help
 * Verbatim text from Page 6 of '11th Pillar ATO Help.docx'.
 *
 * Details our 4-phase disclosure engagement process and sets clear
 * professional boundaries regarding complex legal matters.
 */
export default function HowFinanciallyUpHelpsDisclosure() {
  const steps = [
    {
      num: "01",
      icon: <FileSearchOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Review Original Reporting",
      desc: "We analyze the original tax returns or activity statements to understand what was disclosed, identifying the exact source and nature of the omission.",
    },
    {
      num: "02",
      icon: <CalculatorOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Reconstruct Corrected Position",
      desc: "We recalculate taxable income, allowable deductions, and tax liabilities using the verified records and applicable tax law.",
    },
    {
      num: "03",
      icon: <SendOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Determine Pathway & Prepare Calculations",
      desc: "We assess whether an online amendment, formal voluntary disclosure schedule, or audit response pack is required, preparing clear supporting schedules.",
    },
    {
      num: "04",
      icon: <AuditOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Liaise with the ATO & Explain Outcome",
      desc: "We communicate with the ATO within the agreed scope, advocate for maximum statutory penalty concessions, and explain the final assessment.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="cyan" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Our Client Services
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How Financially Up can help
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            As your ATO voluntary disclosure accountant, Financially Up can review the original reporting, reconstruct the corrected position, assess the appropriate lodgment or disclosure pathway and prepare supporting calculations. We can communicate with the ATO within the agreed scope and help you understand its response.
          </p>
        </div>

        {/* 4 Process Cards */}
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
                <CheckCircleOutlined /> Direct Tax Agent Service
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Scope Boundaries Callout */}
        <div className="rounded-2xl p-6 sm:p-8 bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 shrink-0 border border-blue-200/60 dark:border-blue-800/60">
              <SafetyCertificateOutlined className="text-2xl" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                Service Boundaries & Legal Counsel:
              </h4>
              <p className="text-xs sm:text-sm md:text-base text-slate-700 dark:text-zinc-300 leading-relaxed">
                Complex disputes, allegations of deliberate conduct or other legal matters may require separate legal advice. We will make the service boundaries clear before proceeding.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
