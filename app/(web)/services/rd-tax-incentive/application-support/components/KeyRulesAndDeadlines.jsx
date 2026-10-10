"use client";

import React from "react";
import { Tag } from "antd";
import {
  DollarOutlined,
  GlobalOutlined,
  ClockCircleOutlined,
  WarningOutlined,
  AlertOutlined,
} from "@ant-design/icons";

/**
 * KeyRulesAndDeadlines Component
 * ==============================
 * Section 1: The $20,000 Expenditure Rule
 * Section 2: Overseas R&D Activities
 * Section 3: R&D Registration Support and the 10-Month Deadline
 * Verbatim text from Page 5 of 15th Pillar R&D Tax Incentive docx.
 */
export default function KeyRulesAndDeadlines() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50/60 dark:bg-zinc-950/60 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs"
          >
            Critical Statutory Rules
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Key Expenditure Rules &amp; Strict Deadlines
          </h2>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Card 1: $20,000 Expenditure Rule */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <DollarOutlined className="text-2xl" />
                </div>
                <div>
                  <Tag color="green" className="m-0 text-[11px] font-semibold uppercase">
                    Minimum Threshold
                  </Tag>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    The $20,000 Expenditure Rule
                  </h3>
                </div>
              </div>
              <p className="text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                As a general rule, an R&amp;D entity needs at least $20,000 of eligible notional
                deductions for an income year before it can claim an R&amp;D tax offset. Exceptions can
                apply, including certain expenditure to a registered research service provider and
                monetary contributions under the Cooperative Research Centres Program.
              </p>
              <p className="text-xs text-slate-500 dark:text-zinc-400 italic">
                The threshold is assessed under the R&amp;D tax rules. Total project spending is not a
                substitute for an eligible expenditure calculation.
              </p>
            </div>
          </div>

          {/* Card 2: Overseas R&D Activities */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-800 flex items-center justify-center text-amber-600 dark:text-amber-400">
                  <GlobalOutlined className="text-2xl" />
                </div>
                <div>
                  <Tag color="warning" className="m-0 text-[11px] font-semibold uppercase">
                    Offshore Projects
                  </Tag>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Overseas R&amp;D Activities
                  </h3>
                </div>
              </div>
              <p className="text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                Special rules apply to expenditure on R&amp;D activities outside Australia. An overseas
                finding is generally required. The application must be submitted before the end of the
                income year in which the activities are conducted or planned. The Department cannot
                accept a late application or grant an extension.
              </p>
              <p className="text-xs text-slate-500 dark:text-zinc-400 italic">
                A positive overseas finding is not the annual R&amp;D registration. The company must still
                include the relevant activities in its R&amp;D registration and reference the finding
                when claiming with the ATO. Cross-border R&amp;D should therefore be identified well before
                year-end, not when the company tax return is being finalized.
              </p>
            </div>
          </div>

          {/* Card 3: 10-Month Deadline */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-800 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <ClockCircleOutlined className="text-2xl" />
                </div>
                <div>
                  <Tag color="blue" className="m-0 text-[11px] font-semibold uppercase">
                    AusIndustry Cut-Off
                  </Tag>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    10-Month Registration Deadline
                  </h3>
                </div>
              </div>
              <p className="text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                The 10-month deadline applies to registration with the Department. The company tax return
                and R&amp;D tax schedule are separate ATO compliance steps. Waiting for the company return
                deadline can leave the registration late, particularly where the tax return is due more
                than 10 months after year-end.
              </p>
              <p className="text-xs text-slate-500 dark:text-zinc-400 italic">
                Confirm the legal entity and balancing date, then work backwards from the statutory date.
                Allow time for technical review, reconciliations and authorized submission. If the
                deadline has passed or information needs to be varied, obtain advice promptly.
              </p>
            </div>
          </div>
        </div>

        {/* Alert Summary Box */}
        <div className="bg-amber-50/60 dark:bg-amber-950/20 rounded-2xl p-6 sm:p-7 border border-amber-200/80 dark:border-amber-900/50 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/60 flex items-center justify-center shrink-0 text-amber-800 dark:text-amber-300">
            <WarningOutlined className="text-xl" />
          </div>
          <p className="text-xs sm:text-sm text-amber-950 dark:text-amber-200 leading-relaxed font-normal">
            <strong className="font-semibold text-amber-950 dark:text-amber-100">
              Crucial Compliance Warning:
            </strong>{" "}
            Neither overseas findings nor annual activity registrations allow discretionary extensions. Aligning with an R&amp;D tax agent well before year-end ensures all cut-offs are strictly observed.
          </p>
        </div>
      </div>
    </section>
  );
}
