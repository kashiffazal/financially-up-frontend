"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  ExclamationCircleOutlined,
  DollarCircleOutlined,
  FileExclamationOutlined,
  CalendarOutlined,
  AuditOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

/**
 * PenaltiesInterestAndAtoNotices Component
 * ========================================
 * Section 4: Penalties interest and ATO notices.
 * Features 100% complete, verbatim content from Page 11 of the client document.
 */
export default function PenaltiesInterestAndAtoNotices() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Compliance &amp; Statutory Consequences
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Penalties, Interest and ATO Notices
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            The consequences of late lodgment depend on the circumstances. The ATO may impose a failure-to-lodge penalty, but a penalty is not applied automatically in every case. If a tax amount is not paid by its due date, the general interest charge may apply. A request for remission can be considered where relevant, but the ATO decides each request and remission is not guaranteed.
          </p>
        </div>

        {/* 3 Pillars of Statutory Consequences */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1: FTL Penalties & GIC */}
          <div className="p-7 rounded-3xl bg-slate-50/70 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800/60 flex items-center justify-center text-amber-600 dark:text-amber-400 mb-5">
                <DollarCircleOutlined className="text-xl" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                Failure-to-Lodge Penalty &amp; GIC
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-3">
                The consequences of late lodgment depend on the circumstances. The ATO may impose a failure-to-lodge penalty, but a penalty is not applied automatically in every case.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                If a tax amount is not paid by its due date, the general interest charge may apply. A request for remission can be considered where relevant, but the ATO decides each request and remission is not guaranteed.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-200/60 dark:border-zinc-700/60 text-2xs text-slate-500 dark:text-zinc-400 font-medium">
              Remission depends strictly on individual ATO determination.
            </div>
          </div>

          {/* Card 2: Default Assessments & ATO Notices */}
          <div className="p-7 rounded-3xl bg-slate-50/70 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800/60 flex items-center justify-center text-rose-600 dark:text-rose-400 mb-5">
                <FileExclamationOutlined className="text-xl" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                ATO Notices &amp; Default Assessments
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-3">
                If returns remain outstanding, the ATO may contact you, request lodgment or, in some cases, issue a default assessment using available information.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                A default assessment may not reflect all relevant deductions or circumstances. If you receive an ATO notice, check the response date and obtain assistance early enough to prepare an accurate response or outstanding return.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-200/60 dark:border-zinc-700/60 text-2xs text-slate-500 dark:text-zinc-400 font-medium">
              Act promptly to avoid arbitrary default calculations.
            </div>
          </div>

          {/* Card 3: ATO Payment Plans & Separate Scopes */}
          <div className="p-7 rounded-3xl bg-slate-50/70 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/60 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-5">
                <CalendarOutlined className="text-xl" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                ATO Payment Plans &amp; Scope Limits
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-3">
                If an assessment creates a debt that cannot be paid in full, an ATO payment plan may be available depending on the amount and circumstances. Interest can continue to accrue during a payment plan.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                Return preparation and lodgment do not automatically include debt negotiation, objections or remission applications; those services should be discussed and scoped separately where needed.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-200/60 dark:border-zinc-700/60 text-2xs text-slate-500 dark:text-zinc-400 font-medium">
              Transparent practice: separate scoping for debt &amp; objections.
            </div>
          </div>
        </div>

        {/* Warning Callout */}
        <div className="p-6 sm:p-7 rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/50 flex flex-col sm:flex-row items-start gap-4">
          <ExclamationCircleOutlined className="text-amber-600 dark:text-amber-400 text-xl mt-0.5 shrink-0" />
          <div className="text-xs sm:text-sm text-amber-950 dark:text-amber-100 leading-relaxed">
            <span className="font-bold block mb-1">
              Important Compliance Guidance:
            </span>
            If you have received formal ATO correspondence with a specified response date, delaying action can lead to automated default assessments or escalating penalties. Engaging early allows our registered tax agents to review your file on the ATO portal and establish the true status for all prior years.
          </div>
        </div>
      </div>
    </section>
  );
}
