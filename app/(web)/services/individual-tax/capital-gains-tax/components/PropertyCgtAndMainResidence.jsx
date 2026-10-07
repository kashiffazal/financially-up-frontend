"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  HomeOutlined,
  ClockCircleOutlined,
  DollarOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
  AlertOutlined,
} from "@ant-design/icons";

/**
 * PropertyCgtAndMainResidence Component
 * =====================================
 * Section 5 & 6: Capital Gains Tax on Property & Main Residence and Former Home CGT.
 * Features 100% complete, verbatim content from Page 6 of the client document.
 */
export default function PropertyCgtAndMainResidence() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Real Property Rules
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Property CGT and the Main Residence Exemption
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Australian tax guidelines for selling residential property, converting primary residences, the 6-year absence rule, and first-income-use market valuations.
          </p>
        </div>

        {/* 2 Equal Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-12">
          {/* Left Column: Capital Gains Tax on Property */}
          <div className="flex flex-col justify-between bg-slate-50/70 dark:bg-zinc-800/60 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-700/80 shadow-xs">
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <HomeOutlined className="text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Capital Gains Tax on Property
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-zinc-400">
                    Apportionment &amp; Records
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                <p>
                  Property CGT can be more complex where an investment property was previously a home, was used partly for private purposes, has multiple owners, or has undergone significant improvements. The calculation may require purchase and sale contracts, settlement statements, ownership details, records of eligible costs, use of the property and its main-residence history.
                </p>
                <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-emerald-100 dark:border-zinc-700">
                  <span className="font-bold text-slate-900 dark:text-white block mb-1">
                    Mixed-Use Apportionment:
                  </span>
                  Where a property has been used as both a main residence and an income-producing asset, a full or partial main residence exemption may be relevant and the calculation may require apportionment.
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-zinc-700/60 flex items-center justify-between">
              <span className="text-2xs text-slate-500 dark:text-zinc-400">
                Holding phase guidance also available
              </span>
              <Link href="/services/individual-tax/investment-property-tax-accountant">
                <Button
                  type="link"
                  className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1 h-auto text-xs"
                  icon={<ArrowRightOutlined className="text-xs" />}
                  iconPosition="end"
                >
                  View Investment Property Tax
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Main Residence & Former Home CGT */}
          <div className="flex flex-col justify-between bg-slate-50/70 dark:bg-zinc-800/60 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-700/80 shadow-xs">
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/60 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <ClockCircleOutlined className="text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Main Residence and Former Home CGT
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-zinc-400">
                    6-Year Absence &amp; Market Value Rules
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                <p>
                  A home may qualify for a full or partial main residence exemption, but a home is not automatically CGT-free in every situation. The outcome can depend on the ownership period, how the property was used, whether it produced income, the taxpayer&apos;s residency status and the applicable main-residence rules.
                </p>

                <div className="p-3.5 rounded-2xl bg-white dark:bg-zinc-900 border border-blue-100 dark:border-zinc-700">
                  <span className="font-bold text-slate-900 dark:text-white block mb-1">
                    The 6-Year Absence Rule:
                  </span>
                  If you move out and rent your former home, you may be able to choose to continue treating it as your main residence for CGT purposes for up to six years while it produces income. This six-year rule is not automatic, and eligibility depends on the relevant conditions and your circumstances, including whether another dwelling is treated as your main residence during the same period, subject to limited exceptions.
                </div>

                <div className="p-3.5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/40 text-xs text-amber-950 dark:text-amber-200">
                  <span className="font-bold block mb-1">
                    First-Used to Produce Income Market Value Rule:
                  </span>
                  A separate market value rule may apply when a home is first used to produce income after 20 August 1996 and a full main residence exemption would have been available immediately before that first income-producing use. Where the conditions are met, the property may be treated as having been acquired at its market value at that time. This rule does not apply to every former home or property transaction, so a valuation and the property&apos;s complete use history may need review.
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-zinc-700/60 text-2xs text-slate-500 dark:text-zinc-400">
              Valuation evidence at the date of first rental must be retained
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
