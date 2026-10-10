"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  HistoryOutlined,
  FileProtectOutlined,
  AuditOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * AppointorSuccessionAndEstatePlanning Component
 * ==============================================
 * Section: Appointor succession and estate planning
 * Verbatim text from Page 9 of client docx (8th Pillar Trust Services.docx).
 * Covers interaction with wills, estate planning documents, testamentary nominations,
 * tax loss impacts, election testing, and entity record alignment.
 */
export default function AppointorSuccessionAndEstatePlanning() {
  const successionAreas = [
    {
      icon: <FileProtectOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Interaction With Wills & Estate Plans",
      desc: "Trust deeds may specify a successor, permit a testamentary nomination, or interact directly with a will or power of attorney.",
    },
    {
      icon: <AuditOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Control & Loss Rules Testing",
      desc: "Identifying whether proposed succession shifts control under statutory trust loss tests, debt deduction provisions, or active elections.",
    },
    {
      icon: <HistoryOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Related Entity Record Alignment",
      desc: "Updating trust registers, corporate trustee shares, and family group entity records consistently with the executed succession documents.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Intergenerational Continuity
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Appointor succession and estate planning
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Appointor succession often becomes important when the current controller of a family trust dies or becomes
            unable to act. The trust deed may specify a successor, permit a nomination, or interact with a will or
            other estate-planning document. These legal interactions can be significant, so estate-planning and legal
            advice may be required alongside the tax and accounting review.
          </p>
        </div>

        {/* 3 Succession Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {successionAreas.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-4">
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

        {/* Verbatim Accounting Perspective Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-brand-bg-lighter via-white to-slate-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border border-slate-200 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1 max-w-2xl">
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              Accounting & Tax Alignment Objective
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              From an accounting and tax perspective, the aim is to identify whether the proposed succession changes
              control, affects trust loss rules or elections, or needs corresponding updates to the trust and related
              entity records.
            </p>
          </div>
          <Link
            href="/book-an-appointment"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 transition-colors shadow-sm shrink-0"
          >
            Discuss Succession <ArrowRightOutlined className="ml-2 text-xs" />
          </Link>
        </div>
      </div>
    </section>
  );
}
