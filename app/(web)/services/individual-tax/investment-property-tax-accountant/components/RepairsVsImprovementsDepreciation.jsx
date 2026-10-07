"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  ToolOutlined,
  BuildOutlined,
  AppstoreOutlined,
  SafetyCertificateOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";

/**
 * RepairsVsImprovementsDepreciation Component
 * ===========================================
 * Section 5: Repairs, Improvements, Capital Works and Depreciating Assets.
 * Features 100% complete, verbatim content from Page 5 of the client document.
 */
export default function RepairsVsImprovementsDepreciation() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            ATO Focus Area
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Repairs, Improvements, Capital Works and Depreciating Assets
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Distinguishing immediate maintenance from capital works and plant depreciation is one of the most critical compliance areas for Australian rental property owners.
          </p>
        </div>

        {/* 2-Column High Impact Comparison & Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Repairs vs Improvements */}
          <div className="flex flex-col justify-between bg-slate-50/70 dark:bg-zinc-800/60 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-700/80 shadow-xs">
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <ToolOutlined className="text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Repairs vs Improvements &amp; Initial Repairs
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-zinc-400">
                    Immediate Deduction vs Capital Treatment
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-emerald-100 dark:border-zinc-700">
                  <div className="flex items-center gap-2 font-bold text-emerald-800 dark:text-emerald-300 text-sm mb-1.5">
                    <CheckCircleOutlined />
                    <span>Eligible Ordinary Repairs (Immediately Deductible)</span>
                  </div>
                  <p>
                    A repair generally restores something that has become worn or damaged. An eligible repair relating to damage that occurred while the property was used to earn rental income may be immediately deductible.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-amber-100 dark:border-zinc-700">
                  <div className="flex items-center gap-2 font-bold text-amber-800 dark:text-amber-300 text-sm mb-1.5">
                    <CloseCircleOutlined />
                    <span>Initial Repairs &amp; Substantial Improvements (Capital Treatment)</span>
                  </div>
                  <p>
                    Work completed to correct damage or defects that existed when the property was acquired may be an initial repair and receive capital treatment. Replacing an entire item, substantially improving the property or adding something new may also be treated differently from an ordinary repair.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-zinc-700/60 text-2xs text-slate-500 dark:text-zinc-400">
              Tax treatment hinges on defect timeline and whether function is enhanced
            </div>
          </div>

          {/* Card 2: Capital Works & Depreciating Assets */}
          <div className="flex flex-col justify-between bg-slate-50/70 dark:bg-zinc-800/60 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-700/80 shadow-xs">
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/60 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <BuildOutlined className="text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Capital Works &amp; Depreciating Assets
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-zinc-400">
                    Division 43 &amp; Division 40 Deductions Over Time
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-blue-100 dark:border-zinc-700">
                  <div className="flex items-center gap-2 font-bold text-blue-800 dark:text-blue-300 text-sm mb-1.5">
                    <BuildOutlined />
                    <span>Capital Works (Structural Improvements)</span>
                  </div>
                  <p>
                    Capital works generally relate to structural improvements, building alterations and certain construction expenditure. Where the requirements are met, deductions may be available over time rather than in the year the cost is incurred.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-purple-100 dark:border-zinc-700">
                  <div className="flex items-center gap-2 font-bold text-purple-800 dark:text-purple-300 text-sm mb-1.5">
                    <AppstoreOutlined />
                    <span>Depreciating Assets (Plant &amp; Equipment)</span>
                  </div>
                  <p>
                    Depreciating assets are generally separate items with a limited effective life, such as certain appliances or equipment. A deduction for their decline in value may be available where the eligibility requirements are met.
                  </p>
                  <div className="mt-2 text-2xs p-2 rounded-lg bg-amber-50 dark:bg-amber-950/30 text-amber-900 dark:text-amber-200 border border-amber-200/60 dark:border-amber-800/40">
                    <strong>Second-Hand Asset Restriction:</strong> Restrictions can apply to previously used or second-hand assets in residential rental properties, so depreciation should not be assumed solely because an item appears on a depreciation schedule.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-zinc-700/60 text-2xs text-slate-500 dark:text-zinc-400">
              Quantity surveyor report analysis included in our review process
            </div>
          </div>
        </div>

        {/* Action Bar */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-50 via-white to-emerald-50 dark:from-zinc-800/90 dark:via-zinc-850 dark:to-zinc-800/90 border border-emerald-200/80 dark:border-emerald-800/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 m-0 text-center sm:text-left">
            Have an existing quantity surveyor depreciation schedule? We verify second-hand asset restrictions and apply eligible claims accurately.
          </p>
          <Link href="/book-an-appointment" className="shrink-0">
            <Button
              type="primary"
              className="brand-btn-primary font-bold text-xs sm:text-sm h-10 px-5"
              icon={<ArrowRightOutlined />}
              iconPosition="end"
            >
              Verify Depreciation Schedule
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
