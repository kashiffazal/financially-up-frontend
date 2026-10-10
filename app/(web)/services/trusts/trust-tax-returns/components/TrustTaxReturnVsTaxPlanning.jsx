"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  HistoryOutlined,
  CompassOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * TrustTaxReturnVsTaxPlanning Component
 * =====================================
 * Section: Trust tax return versus tax planning
 * Verbatim text from Page 6 of client docx (8th Pillar Trust Services.docx).
 * Explains the distinction between retrospective compliance reporting and
 * forward-looking pre-year-end strategic distribution advice.
 */
export default function TrustTaxReturnVsTaxPlanning() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Scope Clarity
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Trust tax return versus tax planning
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Trust tax return preparation is retrospective compliance work: it reports what happened during the income
            year and the beneficiary entitlements and tax information that need to be disclosed. Tax planning is
            different. It considers future or pre-year-end decisions before they are implemented. If planning or
            specialist advice is needed, Financially Up can scope that separately rather than treating it as
            automatically included in annual return preparation.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Card 1: Annual Trust Return */}
          <div className="p-8 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 flex items-center justify-center mb-5">
                <HistoryOutlined className="text-xl text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Annual Trust Tax Return (Retrospective)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Reports historical financial accounts, Section 95 net taxable income, and distribution resolutions
                already established by the trustee by 30 June.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-zinc-700 text-xs text-teal-600 dark:text-teal-400 font-semibold">
              Statutory Compliance & Lodgement
            </div>
          </div>

          {/* Card 2: Trust Tax Planning */}
          <div className="p-8 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 flex items-center justify-center mb-5">
                <CompassOutlined className="text-xl text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Trust Tax Planning (Prospective)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Models projected income before 30 June, evaluates Section 100A risks, tests marginal tax brackets, and
                structures tax-effective beneficiary distributions.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-zinc-700">
              <Link
                href="/services/trusts/distribution-planning"
                className="text-xs text-blue-600 dark:text-blue-400 font-semibold inline-flex items-center hover:underline"
              >
                Explore Distribution Planning <ArrowRightOutlined className="ml-1 text-xs" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
