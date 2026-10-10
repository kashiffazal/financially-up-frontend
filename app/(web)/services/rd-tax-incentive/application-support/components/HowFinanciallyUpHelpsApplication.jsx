"use client";

import React from "react";
import { Tag } from "antd";
import {
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  AlertOutlined,
} from "@ant-design/icons";

/**
 * HowFinanciallyUpHelpsApplication Component
 * ==========================================
 * Section: How Financially Up Can Help
 * Verbatim text from Page 5 of 15th Pillar R&D Tax Incentive docx.
 */
export default function HowFinanciallyUpHelpsApplication() {
  const serviceScope = [
    "initial R&D application-readiness and deadline review",
    "review of company, project and activity information",
    "assistance organizing core and supporting activity information",
    "R&D registration support and application preparation",
    "review of records, evidence and documentation gaps",
    "coordination of accounting data used for the tax claim",
    "assistance preparing R&D expenditure schedules and reconciliations",
    "R&D tax claim support as part of company tax compliance where agreed",
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
            Engagement Scope
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How Financially Up Can Help
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Within an agreed scope, Financially Up provides end-to-end guidance from initial readiness
            checks to ATO return lodgement.
          </p>
        </div>

        {/* 8 Support Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12">
          {serviceScope.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-6 border border-slate-200/80 dark:border-zinc-800 flex items-start gap-3.5 hover:border-emerald-500/40 transition-colors"
            >
              <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 mt-1 shrink-0 text-base" />
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 block mb-0.5">
                  Support Capability 0{idx + 1}
                </span>
                <span className="text-sm sm:text-base font-medium text-slate-900 dark:text-white capitalize">
                  {item}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 2 Advisory Distinction Notes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-100/70 dark:bg-zinc-800/40 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-700/80">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
              Government Grants &amp; Broader Compliance
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Related government grant support should be scoped separately because funding can affect
              the accounting and tax analysis. Our company tax return services can support broader
              compliance where agreed.
            </p>
          </div>

          <div className="bg-slate-100/70 dark:bg-zinc-800/40 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-700/80">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
              Responsibility &amp; Specialist Boundaries
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              The company remains responsible for the accuracy of information supplied and for
              self-assessing eligibility. Where legal interpretation, specialist science, engineering
              or other technical expertise is needed beyond our scope, additional professional advice
              may be required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
