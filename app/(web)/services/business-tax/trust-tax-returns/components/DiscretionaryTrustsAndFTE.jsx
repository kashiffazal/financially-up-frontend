"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  SafetyCertificateOutlined,
  TeamOutlined,
  CheckCircleOutlined,
  ExclamationCircleOutlined,
  FileProtectOutlined,
  ApartmentOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * DiscretionaryTrustsAndFTE Component
 * ==================================
 * Section: Discretionary Trusts and Family Trust Elections
 * Features 100% complete, verbatim content from Page 3 of client docx.
 * Explains FTE tax impact on loss recoupment, franking credit flow-through, and family group distribution boundaries.
 */
export default function DiscretionaryTrustsAndFTE() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Structure &amp; Elections
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Discretionary Trusts and Family Trust Elections
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Discretionary trusts are commonly used to hold business or investment assets. A trust may be treated as a family trust for tax purposes if the trustee has made a valid family trust election. This does not mean that a “family trust” and a discretionary trust are necessarily two separate trust structures.
          </p>
        </div>

        {/* 2 Focus Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Card 1: What FTE Affects */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center mb-5">
                <FileProtectOutlined className="text-2xl text-brand-primary dark:text-emerald-400" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                Tax Consequences of an FTE
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-5">
                A family trust election can affect the trust loss rules, franking credit rules and distributions outside the family group. The trust’s actual structure, deed and election status should be checked rather than assumed from its name.
              </p>

              <div className="space-y-3 bg-slate-50 dark:bg-zinc-950/60 rounded-xl p-4 border border-slate-200/80 dark:border-zinc-800">
                <div className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 text-sm mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                    <strong>Trust Loss Recoupment:</strong> Concessional rules for offsetting prior-year tax losses without failing the 50% stake test.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 text-sm mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                    <strong>Franking Credit Passing:</strong> Satisfying holding period rules to pass franking credits through to beneficiaries.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 text-sm mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                    <strong>Family Trust Distribution Tax (FTDT):</strong> Guarding against punitive 47% tax on distributions outside the specified family group.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400">
              Election status is verified directly against past ATO returns and schedules.
            </div>
          </div>

          {/* Card 2: Verification Methodology & Advisory Scope */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/60 border border-teal-100 dark:border-teal-800/40 flex items-center justify-center mb-5">
                <ApartmentOutlined className="text-2xl text-teal-600 dark:text-teal-400" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                Scoping Election Advice Separately
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-5">
                Detailed advice about whether to make or vary an election can be scoped separately where needed. We ensure your trust operates under the correct legal and tax parameters.
              </p>

              <div className="space-y-3 bg-slate-50 dark:bg-zinc-950/60 rounded-xl p-4 border border-slate-200/80 dark:border-zinc-800">
                <div className="flex items-start gap-2.5">
                  <TeamOutlined className="text-teal-600 dark:text-teal-400 text-sm mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                    <strong>Specified Individual Check:</strong> Reviewing the designated family head nominated in the original election.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <SafetyCertificateOutlined className="text-teal-600 dark:text-teal-400 text-sm mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                    <strong>Interposed Entity Elections (IEE):</strong> Aligning connected corporate entities and partnerships into the family group.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800 flex items-center justify-between">
              <span className="text-xs text-slate-500 dark:text-zinc-400">
                Need FTE advisory?
              </span>
              <Link href="/services/business-tax" className="text-xs font-semibold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1">
                Business Tax Hub <ArrowRightOutlined className="text-[10px]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
