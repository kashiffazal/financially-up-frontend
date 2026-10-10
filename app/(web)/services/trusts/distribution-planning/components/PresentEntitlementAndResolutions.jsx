"use client";

import React from "react";
import { Tag } from "antd";
import {
  AuditOutlined,
  DollarOutlined,
  CalendarOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * PresentEntitlementAndResolutions Component
 * ==========================================
 * Section: Present entitlement and clear trustee resolutions
 * Verbatim text from Page 11 of client docx (8th Pillar Trust Services.docx).
 * Covers ATO resolution guidelines, entitlement calculation methodology,
 * franked distribution deadlines (end of income year), and capital gain stream timelines (31 August).
 */
export default function PresentEntitlementAndResolutions() {
  const resolutionAspects = [
    {
      icon: <AuditOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "No Single Standard Form",
      desc: "The ATO states that there is no single standard form of distribution resolution because trust deeds differ. What matters is that the resolution is effective under the deed and clearly identifies the beneficiary entitlement.",
    },
    {
      icon: <DollarOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Calculation Methodology vs Fixed Dollar",
      desc: "A resolution does not always need to specify a final dollar amount if it provides a clear method for calculating the entitlement, although the deed may impose its own requirements.",
    },
    {
      icon: <CalendarOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Written Records & Streaming Timelines",
      desc: "Written records provide evidence of what the trustee decided and when. Franked distribution records are needed by the end of the income year; capital gain specific entitlements generally by 31 August (unless dealt with by 30 June or deed required).",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950/60 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Resolution Standards
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Present entitlement and clear trustee resolutions
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            The ATO states that there is no single standard form of distribution resolution because trust deeds differ.
            What matters is that the resolution is effective under the deed and clearly identifies the beneficiary
            entitlement. A resolution does not always need to specify a final dollar amount if it provides a clear
            method for calculating the entitlement, although the deed may impose its own requirements.
          </p>
        </div>

        {/* 3 Resolution Aspects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {resolutionAspects.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Record-Keeping Callout */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row items-start md:items-center gap-5">
          <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 flex items-center justify-center shrink-0">
            <CheckCircleOutlined className="text-xl text-teal-600 dark:text-teal-400" />
          </div>
          <div className="space-y-1">
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              Franked Distribution &amp; Capital Gains Streaming Records
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Written records are generally preferable because they provide evidence of what the trustee decided and
              when. For franked distributions, the record creating a beneficiary&apos;s specific entitlement generally
              needs to be made by the end of the income year. For capital gains, the specific-entitlement record
              generally needs to be made by 31 August after year end, although an earlier decision may be required
              where the gain forms part of trust income dealt with by 30 June or the deed requires it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
