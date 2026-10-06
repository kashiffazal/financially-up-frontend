"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  CalendarOutlined,
  ClockCircleOutlined,
  ExclamationCircleOutlined,
  CheckCircleOutlined,
  FileDoneOutlined,
  DeploymentUnitOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * TrustDistributionsYearEnd Component
 * ===================================
 * Section: Trust Distributions and Year-End Decisions
 * Features 100% complete, verbatim content from Page 3 of client docx.
 * Explains pre-30 June distribution minutes, streaming capital gains & franked dividends, and present entitlement rules.
 */
export default function TrustDistributionsYearEnd() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Year-End Deadlines &amp; Streaming
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Trust Distributions and Year-End Decisions
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            For a discretionary trust, the trustee generally needs to make and document distribution decisions by the time required under the trust deed and tax law, commonly by 30 June.
          </p>
        </div>

        {/* 2 Strategic Focus Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Card 1: 30 June Resolution Mandate */}
          <div className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-7 sm:p-9 border-2 border-emerald-400/40 dark:border-emerald-700/40 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 text-brand-primary dark:text-emerald-400 flex items-center justify-center">
                  <CalendarOutlined className="text-2xl" />
                </div>
                <span className="text-[10px] font-extrabold uppercase px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/40">
                  Strict 30 June Deadline
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                Effective Resolution Under the Deed
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-5">
                The resolution must be effective under the deed and create the intended beneficiary entitlement. A later cash payment does not, by itself, create the required present entitlement.
              </p>

              <div className="space-y-3 bg-white dark:bg-zinc-900 rounded-xl p-4 border border-slate-200/80 dark:border-zinc-800">
                <div className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 text-sm mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                    <strong>Present Entitlement Created:</strong> Must be legally perfected on or prior to 30 June in accordance with deed powers.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 text-sm mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                    <strong>Cash Payments Do Not Substituted Minutes:</strong> Transferring money after 30 June cannot retrospectively create legal entitlement.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400">
              Late resolutions can result in default trustee taxation at 47%.
            </div>
          </div>

          {/* Card 2: Streaming & Potential Trustee Assessment */}
          <div className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-900/40 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                  <DeploymentUnitOutlined className="text-2xl" />
                </div>
                <span className="text-[10px] font-extrabold uppercase px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-800/40">
                  Tax Streaming Rules
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                Capital Gains &amp; Franked Distributions Streaming
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-5">
                Additional requirements can apply when capital gains or franked distributions are streamed to particular beneficiaries. If trust income is not effectively dealt with, the trustee may be assessed on some or all of the relevant net income. Specialist tax or legal advice may be appropriate where the deed, entitlement or proposed distribution is unclear.
              </p>

              <div className="space-y-3 bg-white dark:bg-zinc-900 rounded-xl p-4 border border-slate-200/80 dark:border-zinc-800">
                <div className="flex items-start gap-2.5">
                  <FileDoneOutlined className="text-teal-600 dark:text-teal-400 text-sm mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                    <strong>Specific Entitlement Recording:</strong> Ensuring franking credits and CGT discounts pass through intact to eligible beneficiaries.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <ExclamationCircleOutlined className="text-amber-500 text-sm mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                    <strong>Trustee Assessment Risk:</strong> Ineffective streaming causes net income to be assessed at top marginal rates under section 99A.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-zinc-800 flex items-center justify-between">
              <span className="text-xs text-slate-500 dark:text-zinc-400">
                Need streaming advice?
              </span>
              <Link href="/services/business-tax/trust-distribution-tax" className="text-xs font-semibold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1">
                Trust Distribution Tax <ArrowRightOutlined className="text-[10px]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
