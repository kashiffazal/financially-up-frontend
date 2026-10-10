"use client";

import React from "react";
import { Tag } from "antd";
import {
  BankOutlined,
  StopOutlined,
  SafetyCertificateOutlined,
  FileProtectOutlined,
} from "@ant-design/icons";

/**
 * WhoCanBeEligible Component
 * ==========================
 * Section: Who can be eligible?
 * Verbatim text from Page 3 of 15th Pillar R&D Tax Incentive docx.
 */
export default function WhoCanBeEligible() {
  const eligibleEntities = [
    "A corporation incorporated under Australian law",
    "An Australian-resident corporation incorporated overseas",
    "A qualifying foreign corporation carrying on business in Australia through a permanent establishment under an applicable double tax agreement",
  ];

  const ineligibleEntities = [
    "Sole traders",
    "Partnerships",
    "Most trusts (unless specific corporate trustee exceptions apply)",
    "Individuals acting on their own account",
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50/60 dark:bg-zinc-950/60 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs"
          >
            Entity Qualification
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Who can be eligible?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            The claimant must be an eligible R&amp;D entity, and the activities and expenditure must
            satisfy separate statutory conditions.
          </p>
        </div>

        {/* Verbatim Explanatory Lead Paragraph */}
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs mb-10">
          <p className="text-base sm:text-lg text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
            The claimant must be an eligible R&amp;D entity, and the activities and expenditure must satisfy
            separate conditions. Broadly, an R&amp;D entity is a corporation incorporated under Australian
            law, an Australian-resident corporation incorporated overseas, or a qualifying foreign
            corporation carrying on business in Australia through a permanent establishment under an
            applicable double tax agreement. Sole traders, partnerships and most trusts are not R&amp;D
            entities. Ownership, control and who conducted the activities matter, especially within a
            corporate group or where contractors performed the work.
          </p>
        </div>

        {/* Comparison Grid: Eligible vs Ineligible */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Eligible Card */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-8 border border-emerald-200/70 dark:border-emerald-900/50 shadow-xs">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 flex items-center justify-center border border-emerald-100 dark:border-emerald-800/40 text-emerald-600 dark:text-emerald-400">
                <BankOutlined className="text-2xl" />
              </div>
              <div>
                <Tag color="green" className="m-0 font-semibold uppercase text-[11px] mb-1">
                  Qualifying Corporate Bodies
                </Tag>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Eligible R&amp;D Entities
                </h3>
              </div>
            </div>
            <ul className="space-y-3">
              {eligibleEntities.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <SafetyCertificateOutlined className="text-emerald-600 dark:text-emerald-400 mt-1 shrink-0" />
                  <span className="text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ineligible Card */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-rose-50 dark:bg-rose-950/30 flex items-center justify-center border border-rose-100 dark:border-rose-900/40 text-rose-600 dark:text-rose-400">
                <StopOutlined className="text-2xl" />
              </div>
              <div>
                <Tag color="red" className="m-0 font-semibold uppercase text-[11px] mb-1">
                  Non-Corporate Structures
                </Tag>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Ineligible Claimant Entities
                </h3>
              </div>
            </div>
            <ul className="space-y-3">
              {ineligibleEntities.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                  <span className="text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Administration & Self-Assessment Responsibilities */}
        <div className="bg-slate-100/70 dark:bg-zinc-900/90 rounded-2xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 mb-3">
            <FileProtectOutlined />
            <span>Dual Agency Administration &amp; Self-Assessment Responsibilities</span>
          </div>
          <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
            The ATO and the Department of Industry administer different aspects of the R&amp;D tax incentive.
            The business must self-assess its eligibility; registration does not remove the company&apos;s
            responsibility to have accurate activity descriptions and expenditure records. We clarify who
            contracted for the work, who incurred costs, who bore the risk and what rights and control the
            company had over the results.
          </p>
        </div>
      </div>
    </section>
  );
}
