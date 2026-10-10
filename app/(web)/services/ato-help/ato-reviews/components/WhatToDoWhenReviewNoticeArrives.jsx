"use client";

import React from "react";
import Link from "next/link";
import {
  FileTextOutlined,
  FolderOpenOutlined,
  ClockCircleOutlined,
  SafetyCertificateOutlined,
  ArrowRightOutlined,
  WarningOutlined,
} from "@ant-design/icons";

/**
 * WhatToDoWhenReviewNoticeArrives Component
 * =========================================
 * Section 2: Immediate operational checklist when an ATO review notice lands:
 * letter preservation, records collation, avoiding backdating, and formal extensions.
 */
export default function WhatToDoWhenReviewNoticeArrives() {
  const steps = [
    {
      num: "01",
      title: "Preserve the Full Correspondence",
      description:
        "Keep the complete letter and every attachment. Record its date, reference number, requested items, response deadline and the case officer’s details. Confirm the entity type and periods covered. Verify authenticity if unclear.",
      icon: <FileTextOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
    },
    {
      num: "02",
      title: "Gather Substantiating Records",
      description:
        "Assemble the relevant return or BAS, working papers, ledgers, source documents and earlier correspondence. Preserve electronic files and duplicate everything provided. Maintain detailed call notes and agreed timelines.",
      icon: <FolderOpenOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
    },
    {
      num: "03",
      title: "Identify Gaps Without Backdating",
      description:
        "If a specific receipt or invoice cannot be found, identify the gap transparently and support with contemporaneous secondary evidence (bank statements, supplier statements). Never invent, recreate or backdate documents.",
      icon: <SafetyCertificateOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
    },
    {
      num: "04",
      title: "Confirm Any Extension in Writing",
      description:
        "If the deadline is unworkable, contact the case officer promptly with a practical timetable. The ATO may agree to extra time, but never assume an extension is granted until you have written ATO confirmation.",
      icon: <ClockCircleOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-2">
            Action Protocol
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            What should you do when the notice arrives?
          </h2>
          <div className="mt-6 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed space-y-4">
            <p>
              Keep the complete letter and attachments. Record its date, reference number, requested items, response deadline and the officer’s details. Confirm which individual, company, trust or other entity is involved and whether the request covers one tax period or several. If authenticity is uncertain, verify the communication through official ATO channels.
            </p>
            <p>
              Gather the relevant return or BAS, working papers, ledgers, source documents and earlier correspondence. Preserve electronic records and keep copies of everything supplied. Record calls, agreed dates and follow-up requests. If a record cannot be found, identify the gap and other contemporaneous evidence; do not invent, recreate or backdate a document.
            </p>
            <p>
              If the timeframe is difficult or a request is unclear, contact the case officer promptly. Explain what is outstanding and propose a practical date or response method. The ATO may consider a request for additional time, but an extension must be confirmed rather than assumed.
            </p>
          </div>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 hover:border-emerald-500 dark:hover:border-emerald-500 shadow-sm transition-all duration-300 hover:-translate-y-1 flex gap-5"
            >
              <div className="flex-shrink-0">
                <span className="text-2xl font-black text-emerald-600/30 dark:text-emerald-400/30 font-mono block">
                  {step.num}
                </span>
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mt-2">
                  {step.icon}
                </div>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Advisory Callout linking to ATO Letters */}
        <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-blue-500/10 border border-emerald-500/20 dark:border-emerald-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3">
            <WarningOutlined className="text-xl text-emerald-600 dark:text-emerald-400 mt-1 sm:mt-0 flex-shrink-0" />
            <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-200">
              Unsure about an unfamiliar ATO correspondence code or requirement? Our{" "}
              <strong className="text-slate-900 dark:text-white font-semibold">ATO Letters service</strong>{" "}
              focuses on rapid triage and verifying correspondence authenticity.
            </p>
          </div>
          <Link
            href="/services/ato-help/ato-letters"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 whitespace-nowrap self-start sm:self-auto"
          >
            Review ATO Letters Service <ArrowRightOutlined />
          </Link>
        </div>
      </div>
    </section>
  );
}
