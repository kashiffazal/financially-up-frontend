"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  SafetyCertificateOutlined,
  DollarOutlined,
  GlobalOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  CalculatorOutlined,
} from "@ant-design/icons";

/**
 * ForeignTaxPaidAndFito Component
 * ===============================
 * Section 3: What if you paid tax overseas?
 * Features 100% complete, verbatim content from Page 9 of the client document.
 */
export default function ForeignTaxPaidAndFito() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Double Tax Relief
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What If You Paid Tax Overseas?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Paying tax overseas does not automatically remove the Australian
            reporting obligation. If foreign income tax has been paid on an
            amount included in Australian assessable income, you may be eligible
            for a foreign income tax offset (FITO).
          </p>
        </div>

        {/* 2-Column High Impact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-12">
          {/* Card 1: Foreign Income Tax Offset (FITO) */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <CalculatorOutlined className="text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Foreign Income Tax Offset (FITO)
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-zinc-400">
                    Mitigating Double Taxation
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                <p>
                  The offset is subject to eligibility requirements and a limit.
                  It is not necessarily equal to all foreign tax paid, is
                  generally non-refundable and unused amounts generally cannot
                  be carried forward.
                </p>
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/70 dark:border-zinc-700/70 space-y-2">
                  <span className="font-bold text-slate-900 dark:text-white block text-xs uppercase tracking-wider">
                    The $1,000 Cap Rule:
                  </span>
                  <p>
                    Where the total foreign tax claimed exceeds $1,000, the FITO
                    limit generally needs to be calculated. Keep foreign
                    assessments, withholding statements and payment evidence.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800 text-2xs text-slate-400 dark:text-zinc-500">
              Non-refundable tax offset applied against Australian income tax
              payable
            </div>
          </div>

          {/* Card 2: Double Tax Agreements (DTAs) */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/60 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <GlobalOutlined className="text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    International Tax Treaties (DTAs)
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-zinc-400">
                    Bilateral Double Tax Agreements
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                <p>
                  Tax treaties can allocate taxing rights, limit some
                  withholding rates or provide mechanisms for double-tax relief.
                  They do not automatically make foreign income exempt in
                  Australia.
                </p>
                <div className="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/40 text-xs text-amber-950 dark:text-amber-200 leading-relaxed">
                  <span className="font-bold block mb-1">
                    Treaty Determination:
                  </span>
                  Treaty treatment depends on the country, income type,
                  residency position and wording of the agreement. Australia
                  maintains treaties with over 40 jurisdictions (including the
                  US, UK, New Zealand, Canada, Singapore, China, and EU
                  nations).
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800 flex items-center justify-between">
              <span className="text-2xs text-slate-400 dark:text-zinc-500">
                Country-specific DTA review
              </span>
              <Link href="/book-an-appointment">
                <Button
                  type="link"
                  className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1 h-auto text-xs"
                  icon={<ArrowRightOutlined className="text-xs" />}
                  iconPlacement="end"
                >
                  Review Overseas Tax Offset
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
