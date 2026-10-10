"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  SafetyOutlined,
  AlertOutlined,
  FileDoneOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * TrustVariationAndCgtResettlementRisk Component
 * ==============================================
 * Section: Trust variation and CGT resettlement risk
 * Verbatim text from Page 7 of client docx (8th Pillar Trust Services.docx).
 * Explains ATO Taxation Determination TD 2012/21, CGT events E1/E2,
 * deed power continuity, and why pre-implementation review is essential.
 */
export default function TrustVariationAndCgtResettlementRisk() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950/60 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Tax Determination TD 2012/21
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Trust variation and CGT resettlement risk
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            One concern in trust restructuring is whether a variation causes the existing trust to end for tax purposes
            and a new trust to arise. ATO Taxation Determination TD 2012/21 explains that a change made under a valid
            power in the trust deed does not, by itself, necessarily cause CGT event E1 or E2. The practical analysis
            still depends on the legal effect of the change and whether the continuity of the trust is maintained.
          </p>
        </div>

        {/* 2 Critical Principle Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 flex items-center justify-center mb-5">
                <SafetyOutlined className="text-xl text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Continuity of the Trust Estate
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Under TD 2012/21, an amendment that is supported by a valid power in the trust deed generally maintains
                the ongoing identity and continuity of the trust estate rather than causing a resettlement.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800 text-xs font-semibold text-teal-600 dark:text-teal-400">
              Protection Against CGT Event E1 & E2
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 flex items-center justify-center mb-5">
                <AlertOutlined className="text-xl text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Pre-Execution Review vs Post-Event Fixes
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                This is why trust restructure tax advice should be obtained before documents are signed. An accountant
                can identify tax-sensitive features, but the legal validity and interpretation of the deed may need to be
                confirmed by a lawyer. The goal is to understand the consequences before implementation, not to try to
                reconstruct the position after the event.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800">
              <Link
                href="/book-an-appointment"
                className="text-xs text-amber-700 dark:text-amber-400 font-semibold inline-flex items-center hover:underline"
              >
                Review Proposed Changes <ArrowRightOutlined className="ml-1 text-xs" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
