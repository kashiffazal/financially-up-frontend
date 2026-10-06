"use client";

import React from "react";
import { Tag, Button } from "antd";
import {
  GlobalOutlined,
  CheckCircleOutlined,
  CalculatorOutlined,
  ArrowRightOutlined,
  InfoCircleOutlined,
  FileProtectOutlined,
} from "@ant-design/icons";
import Link from "next/link";

/**
 * DoubleTaxAgreementsAndFito Component
 * ====================================
 * Section 7: Foreign Income and Double Taxation
 *
 * Implements the exact copy from Section 1 of the SEO document:
 * - Relief under Australia's foreign income tax offset (FITO) system
 * - Crucial limitation: offsets are not automatically equal to every amount paid overseas
 * - Why foreign income and foreign tax information must be reviewed together
 *
 * Background: Clean White
 */
export default function DoubleTaxAgreementsAndFito() {
  const fitoKeyPoints = [
    "Applies to eligible circumstances where foreign tax was paid on income included in Australian assessable income",
    "Foreign tax must satisfy Australian statutory requirements to qualify as an allowable tax offset",
    "Prevents double taxation by offsetting eligible foreign tax directly against Australian tax payable",
    "Requires proper documentation and verification of foreign tax assessments and official payment receipts",
  ];

  const treatyKeyPoints = [
    "Bilateral tax treaties determine which country has primary or sole taxing rights over specific income",
    "Limits the rate of foreign withholding tax that can be legally imposed on dividends, interest and royalties",
    "Affects the maximum amount of foreign tax that can be recognised and claimed as an offset in Australia",
    "Contains tie-breaker rules where an individual or entity is deemed resident under the domestic laws of both nations",
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <Tag color="green" className="brand-section-tag">
            Double Taxation Relief
          </Tag>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.2]">
            Foreign Income and Double Taxation
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            A common concern is whether the same income will be taxed twice. Australia&apos;s foreign income tax offset system can provide relief in eligible circumstances where foreign income tax has been paid on income that is also included in Australian assessable income.
          </p>
        </div>

        {/* 2-Column Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Left: Australia's FITO System */}
          <div className="p-7 sm:p-8 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 flex items-center justify-center">
                    <CalculatorOutlined className="text-emerald-600 dark:text-emerald-400 text-lg" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase">
                      Australian Tax Offset
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0">
                      Foreign Income Tax Offset (FITO)
                    </h3>
                  </div>
                </div>
                <Tag color="green" className="font-semibold px-2.5 py-0.5 rounded-full">
                  Tax Relief
                </Tag>
              </div>

              <ul className="space-y-3 mb-6">
                {fitoKeyPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                    <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-200/60 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400">
              Purpose: Provides credit for foreign income tax paid on income also taxed in Australia.
            </div>
          </div>

          {/* Right: Bilateral Tax Treaties */}
          <div className="p-7 sm:p-8 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-teal-50 dark:bg-teal-950/50 flex items-center justify-center">
                    <GlobalOutlined className="text-teal-600 dark:text-teal-400 text-lg" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-teal-600 dark:text-teal-400 tracking-wider uppercase">
                      Bilateral Agreements
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0">
                      Double Tax Treaties
                    </h3>
                  </div>
                </div>
                <Tag color="cyan" className="font-semibold px-2.5 py-0.5 rounded-full">
                  Taxing Rights
                </Tag>
              </div>

              <ul className="space-y-3 mb-6">
                {treatyKeyPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                    <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 mt-0.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-200/60 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400">
              Purpose: Allocates taxing rights between nations and governs recognition limits.
            </div>
          </div>
        </div>

        {/* Essential Rule Callout (Verbatim Paragraph 2 from doc) */}
        <div className="rounded-2xl bg-gradient-to-r from-teal-50/80 via-emerald-50/60 to-white dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-950 border border-teal-200/80 dark:border-teal-800/60 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <FileProtectOutlined className="text-teal-600 dark:text-teal-400 text-2xl mt-1 shrink-0" />
              <div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white m-0 mb-2">
                  Why Foreign Income and Foreign Tax Must Be Reviewed Together
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed m-0 max-w-3xl">
                  However, an offset is not automatically equal to every amount paid overseas. The foreign tax must satisfy Australian requirements, and tax treaties can affect which country has taxing rights and the amount of foreign tax recognised. This is why both the foreign income and foreign tax information should be reviewed together.
                </p>
              </div>
            </div>
            <Link href="/services/international-tax/foreign-tax-offset" className="shrink-0">
              <Button
                type="primary"
                icon={<ArrowRightOutlined />}
                iconPlacement="end"
                className="font-semibold h-10 px-5 rounded-xl shadow-xs"
              >
                FITO Offset Guidance
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
