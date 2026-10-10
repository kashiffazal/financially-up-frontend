"use client";

import React from "react";
import Link from "next/link";
import {
  HistoryOutlined,
  CompassOutlined,
  ArrowRightOutlined,
  CheckCircleFilled,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

/**
 * ResidencyChangesAndEventI1 Component
 * ====================================
 * Section 2: Why do changes in residency matter so much? & CGT Event I1
 * Exact verbatim content from Client Document (Page 7).
 */
export default function ResidencyChangesAndEventI1() {
  return (
    <section className="py-16 md:py-20 bg-white dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-teal-100 text-teal-800 dark:bg-teal-950/80 dark:text-teal-300 border border-teal-200 dark:border-teal-800/80 mb-4">
            <HistoryOutlined /> Cost Base Resets & Event I1
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Why Do Changes in Residency Matter So Much?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            The date you become or cease to be an Australian tax resident can affect which gains Australia taxes and the relevant cost base. Under the ATO's changing-residency guidance, a person who becomes an Australian resident for tax purposes, other than a person who is also a temporary resident, is generally taken to acquire certain CGT assets at their market value on that date. Important exceptions include taxable Australian property and pre-CGT assets. We check the asset and status before relying on a market value.
          </p>
        </div>

        {/* 2-Column Split: CGT Event I1 vs Pre-Existing Asset Example */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Card 1: CGT Event I1 on Ceasing Residency */}
          <div className="p-8 rounded-3xl bg-slate-50 dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-rose-100 text-rose-800 dark:bg-rose-950/80 dark:text-rose-300">
                  Departure Trigger
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  CGT Event I1 on Departure
                </h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                Ceasing Australian tax residency can trigger CGT event I1 for certain assets that are not taxable Australian property. An individual may choose to disregard all gains and losses from that event; if the choice is made, the affected assets are generally treated as taxable Australian property until a later CGT event or Australian residency resumes. The election can materially affect a later sale, so the assets, timing and records should be reviewed before or soon after departure.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-200 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400">
              Crucial election: Pay deemed disposal tax upon departure or retain asset in the Australian CGT net.
            </div>
          </div>

          {/* Card 2: Market Value Reset Example */}
          <div className="p-8 rounded-3xl bg-slate-50 dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-teal-100 text-teal-800 dark:bg-teal-950/80 dark:text-teal-300">
                  Arrival Cost Base
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Deemed Acquisition at Market Value
                </h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                For example, someone who bought a home overseas, then moved to Australia years later and ultimately sold it while an Australian tax resident, may need a defensible market value at the relevant residency change rather than assuming the original purchase price is always the Australian starting point. The facts and applicable exceptions determine the calculation.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-200 dark:border-zinc-800">
              <Link
                href="/services/international-tax/tax-residency"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-600 dark:text-teal-400 hover:underline"
              >
                If residency dates are uncertain, see our Tax Residency service <ArrowRightOutlined />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
