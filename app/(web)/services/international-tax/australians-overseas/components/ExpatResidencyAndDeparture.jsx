"use client";

import React from "react";
import Link from "next/link";
import {
  CompassOutlined,
  GlobalOutlined,
  UserSwitchOutlined,
  CheckCircleFilled,
  ExclamationCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * ExpatResidencyAndDeparture Component
 * ====================================
 * Section 1: Did moving overseas change your tax residency? & What if you remain an Australian tax resident?
 * Exact verbatim content from Client Document (Page 8).
 */
export default function ExpatResidencyAndDeparture() {
  const circumstancesToCheck = [
    "Where you lived and worked overseas",
    "Whether you established a permanent home abroad",
    "What happened to your Australian home",
    "Whether your family or economic ties changed",
    "Documentation and consistent timeline of moves",
    "Bilateral double tax agreements (DTAs) with the host country",
  ];

  return (
    <section className="py-16 md:py-20 bg-slate-50 dark:bg-zinc-900/60 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Card 1: Did moving overseas change your tax residency? */}
          <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 shadow-sm flex flex-col justify-between h-full">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/50 flex items-center justify-center text-teal-600 dark:text-teal-400 text-2xl mb-5">
                <CompassOutlined />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
                Did Moving Overseas Change Your Tax Residency?
              </h2>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                A departure date or overseas visa does not settle Australian tax residency by itself. The Australian tests consider your circumstances, including living arrangements, intentions, ties and the nature of your stay. The 183-day test is one test, not a general rule that less than six months in Australia always means you are a foreign resident. A change can occur part way through an income year, so the timing matters.
              </p>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                We ask where you lived and worked, whether you established a home abroad, what happened to your Australian home, and whether your family or economic ties changed. Documents and a consistent timeline are more useful than a single label such as “expat”. A tax treaty may need review if another country also regards you as a resident.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800">
              <Link
                href="/services/international-tax/tax-residency"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-600 dark:text-teal-400 hover:underline"
              >
                Where outcome is uncertain, see our Tax Residency service <ArrowRightOutlined />
              </Link>
            </div>
          </div>

          {/* Card 2: What if you remain an Australian tax resident? */}
          <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 shadow-sm flex flex-col justify-between h-full">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center text-blue-600 dark:text-blue-400 text-2xl mb-5">
                <GlobalOutlined />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
                What if You Remain an Australian Tax Resident?
              </h2>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                Australian tax residents generally declare their worldwide income, subject to applicable rules and exceptions. That can include foreign salary, investment income and overseas rent even if money stays in another country or foreign tax was withheld. Australian salary, rent and other income also remain relevant. We check the income type and period, any exemption, and whether a foreign income tax offset may be available.
              </p>
              <div className="p-4 rounded-xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/60 mb-4">
                <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
                  The ATO's guidance for people living overseas who remain Australian tax residents explains that an Australian return is still required where the lodgement obligation applies, and that foreign employment income must be considered. If your move was temporary, do not assume an overseas payroll or foreign tax return replaces your Australian return.
                </p>
              </div>
              <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
                Our foreign rental income service covers a property held abroad. Where foreign tax was paid on income included in an Australian assessment, foreign income tax offset advice addresses the relief calculation. Our Foreign Income Tax service can then address which overseas income and foreign tax information belong in an Australian return.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800">
              <Link
                href="/services/international-tax/foreign-income-tax"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-600 dark:text-teal-400 hover:underline"
              >
                Explore Foreign Income Tax Reporting <ArrowRightOutlined />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
