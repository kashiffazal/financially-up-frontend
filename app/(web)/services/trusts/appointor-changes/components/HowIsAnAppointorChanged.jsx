"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  FileTextOutlined,
  HistoryOutlined,
  FileDoneOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * HowIsAnAppointorChanged Component
 * =================================
 * Section: How is an appointor changed?
 * Verbatim text from Page 9 of client docx (8th Pillar Trust Services.docx).
 * Explains deed-specific succession mechanisms (nomination, automatic clauses, deed of amendment),
 * legal documentation requirements, and accounting vs legal scope demarcation.
 */
export default function HowIsAnAppointorChanged() {
  const mechanisms = [
    {
      icon: <FileTextOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Current Appointor Nomination",
      desc: "Where the deed explicitly empowers the current appointor during their lifetime to execute a written nomination naming their successor or co-appointor.",
    },
    {
      icon: <HistoryOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Automatic Succession Provisions",
      desc: "Deed clauses providing for immediate automatic succession to named individuals (e.g. spouse, adult children) upon death or verified legal incapacity.",
    },
    {
      icon: <FileDoneOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Formal Deed of Amendment",
      desc: "Where the deed requires exercising the formal amendment power to alter the schedule of appointors, requiring strict compliance with deed power rules.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Appointment Mechanics
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How is an appointor changed?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            The process depends on the trust deed. Some deeds allow the current appointor to nominate a successor, some
            provide an automatic successor on death or incapacity, and others require a formal deed of amendment or
            appointment. If the deed does not clearly authorize the intended change, legal advice may be needed before
            any action is taken.
          </p>
        </div>

        {/* 3 Mechanisms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {mechanisms.map((item, idx) => (
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

        {/* Verbatim Scope Callout Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-brand-bg-lighter via-white to-slate-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border border-slate-200 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 flex items-center justify-center shrink-0">
              <CheckCircleOutlined className="text-xl text-teal-600 dark:text-teal-400" />
            </div>
            <div className="space-y-1">
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                Legal Execution & Accounting Scope Separation
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                A change of appointor should be supported by appropriate legal documents and reflected consistently in
                the trust records. Financially Up does not present legal drafting as an accounting service; we can work
                with the executed documents and advise on the accounting and tax matters within scope.
              </p>
            </div>
          </div>
          <Link
            href="/book-an-appointment"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 transition-colors shadow-sm shrink-0"
          >
            Review Scope <ArrowRightOutlined className="ml-2 text-xs" />
          </Link>
        </div>
      </div>
    </section>
  );
}
