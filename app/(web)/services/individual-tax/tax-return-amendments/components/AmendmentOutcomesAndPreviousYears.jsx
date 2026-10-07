"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  SafetyCertificateOutlined,
  DollarCircleOutlined,
  ClockCircleOutlined,
  CheckCircleOutlined,
  InfoCircleOutlined,
  AuditOutlined,
} from "@ant-design/icons";

/**
 * AmendmentOutcomesAndPreviousYears Component
 * ===========================================
 * Section 4 & 5: What Happens After an Amendment & Can You Amend Previous Years.
 * Features 100% complete, verbatim content from Page 12 of the client document.
 */
export default function AmendmentOutcomesAndPreviousYears() {
  const outcomes = [
    { title: "additional tax to pay;", tag: "Liability" },
    { title: "a larger refund;", tag: "Refund" },
    { title: "a reduced refund;", tag: "Adjustment" },
    { title: "no change to the amount payable or refundable; or", tag: "Nil Impact" },
    { title: "changes to other tax calculations.", tag: "Tax Offsets/Levies" },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 4: What Happens After an Amendment */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
              ATO Determinations &amp; Notice of Assessment
            </Tag>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              What Happens After an Amendment
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              The ATO may accept the amendment, request further information or make a different decision based on the information available. If the amendment is processed, the ATO will generally issue an amended notice of assessment.
            </p>
          </div>

          {/* 5 Outcomes Badges Grid */}
          <div className="max-w-4xl mx-auto mb-10">
            <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white block mb-4">
              Depending on the correction, the result may be:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {outcomes.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-50/80 dark:bg-zinc-800/60 border border-slate-200/70 dark:border-zinc-700/70 flex items-center justify-between"
                >
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-zinc-200">
                    {item.title}
                  </span>
                  <Tag color="blue" className="text-2xs font-bold uppercase shrink-0 ml-2">
                    {item.tag}
                  </Tag>
                </div>
              ))}
            </div>
          </div>

          {/* Shortfall Interest Charge & Voluntary Disclosure Callouts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="p-6 sm:p-7 rounded-3xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-200/80 dark:border-zinc-700/80 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
              <span className="font-bold text-slate-900 dark:text-white block mb-1">
                Debt Offsetting &amp; Shortfall Interest Charge (SIC):
              </span>
              Any refund may also be applied against existing ATO or other government debts where the law permits. If the amendment increases the tax payable, shortfall interest charge may apply. A penalty may also be considered where an incorrect statement created a tax shortfall, depending on the nature of the error and the taxpayer&apos;s conduct.
            </div>

            <div className="p-6 sm:p-7 rounded-3xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-800/60 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
              <span className="font-bold text-emerald-900 dark:text-emerald-200 block mb-1">
                Voluntary Correction vs Audit Findings:
              </span>
              Voluntarily correcting an error may affect the ATO&apos;s penalty treatment, but it does not guarantee that interest or penalties will be reduced or remitted. Proactive disclosure before an ATO audit or enquiry is initiated generally provides the best pathway for penalty mitigation.
            </div>
          </div>
        </div>

        {/* Section 5: Can You Amend Previous Years */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
              Statutory Time Limits
            </Tag>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Can You Amend Previous Years?
            </h2>
            <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              There are time limits for requesting an amendment. Most individuals generally have two years from the day after the ATO gives the notice of assessment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mb-8">
            {/* Card 1: Sole Traders & Business Taxpayers */}
            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/70 dark:border-zinc-700/70 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-primary dark:text-emerald-400 uppercase tracking-wider mb-2">
                  <ClockCircleOutlined /> Two-Year vs Four-Year Rules
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  Sole Trader Statutory Windows
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                  Sole traders generally had a two-year amendment period for 2023-24 and earlier income years. For 2024-25 and later income years, eligible sole traders and other qualifying business taxpayers may generally have four years to request an amendment. Different rules can apply, so the relevant income year, assessment date and circumstances should be checked.
                </p>
              </div>
            </div>

            {/* Card 2: Expired Periods & Objections */}
            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/70 dark:border-zinc-700/70 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
                  <AuditOutlined /> Expired Time Limits
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  Objections &amp; Extension of Time
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                  If the amendment period has expired, an objection may need to be considered. If the objection period has also expired, a request for an extension of time to object may be required. Availability and acceptance depend on the circumstances.
                </p>
              </div>
            </div>
          </div>

          {/* Multiple Years Review Rule */}
          <div className="p-4 rounded-xl bg-slate-100 dark:bg-zinc-700/50 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 text-center font-medium">
            Where several years are affected, each lodged return should be reviewed separately. Amending one year does not automatically correct another year.
          </div>
        </div>
      </div>
    </section>
  );
}
