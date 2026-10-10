"use client";

import React from "react";
import { Tag, Alert } from "antd";
import {
  UserDeleteOutlined,
  ClockCircleOutlined,
  StopOutlined,
  ExclamationCircleOutlined,
  SafetyCertificateOutlined,
  FileProtectOutlined,
} from "@ant-design/icons";

/**
 * RemovingDirectorAnd28DayPeriod Component
 * ========================================
 * Section 2 of Change Director ASIC (/services/asic/director-changes/):
 * 1. "Removing a director or recording a resignation"
 * 2. "The 28-day ASIC notification period matters"
 *
 * Implements 100% complete, verbatim content from Page 6 of '7th Pillar ASIC.docx'.
 * Clean White alternating section with sole director resignation restrictions and 28-day cessation date override rules.
 */
export default function RemovingDirectorAnd28DayPeriod() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subsection 1: Removing a director or recording a resignation */}
        <div className="w-full mb-16 sm:mb-20">
          <div className="text-center mb-10">
            <Tag color="volcano" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
              Resignation & Removal Governance
            </Tag>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Removing a director or recording a resignation
            </h2>
          </div>

          <div className="bg-slate-50 dark:bg-zinc-900/80 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-zinc-800 shadow-xs space-y-6">
            <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
              A director may resign by giving written notice to the company, subject to the law and the company&apos;s circumstances. In a proprietary company, members may also remove a director by resolution under the applicable replaceable rule where it applies. A company constitution can affect governance requirements, so a disputed or unusual removal may require legal advice.
            </p>

            <div className="p-5 rounded-2xl bg-amber-50/80 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/40 flex items-start gap-3.5">
              <StopOutlined className="text-amber-600 dark:text-amber-400 text-lg mt-0.5 shrink-0" />
              <div>
                <h4 className="text-sm font-bold text-amber-950 dark:text-amber-200 mb-1">
                  Sole Director Resignation Restriction
                </h4>
                <p className="text-xs sm:text-sm text-amber-900/90 dark:text-amber-300/90 leading-relaxed m-0 font-normal">
                  A company cannot leave itself without a director. ASIC also states that a person who is the company&apos;s only director cannot simply resign or retire without another director replacing them. This rule is important when a sole-director company is being closed or ownership is changing.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Subsection 2: The 28-day ASIC notification period matters */}
        <div className="w-full">
          <div className="text-center mb-10">
            <Tag color="red" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
              Critical Statutory Rule
            </Tag>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              The 28-day ASIC notification period matters
            </h2>
          </div>

          <div className="bg-slate-50 dark:bg-zinc-900/80 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-zinc-800 shadow-xs space-y-6 mb-8">
            <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
              ASIC requires many officeholder changes to be notified within 28 days. Late notification can result in a late fee. For director cessations, the timing has an additional consequence: if ASIC is notified more than 28 days after the director ended the role, ASIC generally records the cessation date as the date the change was notified rather than the earlier claimed date.
            </p>
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
              Correcting an earlier cessation date can require a separate application to ASIC or, in some circumstances, a court process. That makes it particularly important to deal with a resignation or removal promptly and keep the underlying written records.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/60 dark:border-zinc-800">
                <ClockCircleOutlined className="text-rose-600 dark:text-rose-400 text-lg mb-2 block" />
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Date Override Risk
                </h4>
                <p className="text-xs text-slate-500 dark:text-zinc-400 mt-1 leading-relaxed m-0">
                  Notifying past 28 days forces ASIC to set the cessation date to the lodgement date, extending statutory director liability.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/60 dark:border-zinc-800">
                <FileProtectOutlined className="text-teal-600 dark:text-teal-400 text-lg mb-2 block" />
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  ASIC Court or Formal Process
                </h4>
                <p className="text-xs text-slate-500 dark:text-zinc-400 mt-1 leading-relaxed m-0">
                  Rectifying a late cessation date requires complex formal ASIC applications (Form 502) or expensive court proceedings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
