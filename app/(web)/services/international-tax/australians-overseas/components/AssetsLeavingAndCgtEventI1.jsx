"use client";

import React from "react";
import Link from "next/link";
import {
  HistoryOutlined,
  ExclamationCircleOutlined,
  CheckCircleFilled,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * AssetsLeavingAndCgtEventI1 Component
 * ====================================
 * Section 3: What happens to assets when you leave?
 * Exact verbatim content from Client Document (Page 8).
 */
export default function AssetsLeavingAndCgtEventI1() {
  return (
    <section className="py-16 md:py-20 bg-slate-50 dark:bg-zinc-900/60 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-teal-100 text-teal-800 dark:bg-teal-950/80 dark:text-teal-300 border border-teal-200 dark:border-teal-800/80 mb-4">
            <HistoryOutlined /> Asset Treatment on Departure
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            What Happens to Assets When You Leave?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Ceasing Australian tax residency can trigger CGT event I1 for certain assets that are not taxable Australian property. An individual may choose to disregard all gains and losses at departure, but that choice generally causes the affected assets to be treated as taxable Australian property until a later CGT event or Australian residency resumes. A later sale of Australian real estate has separate rules, including possible restrictions on the main residence exemption and CGT discount. Our Capital Gains International service examines the asset and residency timeline in more detail.
          </p>
        </div>

        {/* Advisory Callout */}
        <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row items-start gap-6">
          <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/50 flex items-center justify-center text-teal-600 dark:text-teal-400 text-2xl shrink-0">
            <ExclamationCircleOutlined />
          </div>
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              Strategic Decision-Making Before Departure
            </h3>
            <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              An Australian expat tax advice engagement can help identify a decision that needs attention before a sale or return lodgement. We do not assume that a former home, shares or foreign property has a simple answer based only on where you live today.
            </p>
            <div className="pt-2">
              <Link
                href="/services/international-tax/capital-gains-international"
                className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 dark:text-teal-400 hover:underline"
              >
                Detailed Capital Gains (International) Analysis <ArrowRightOutlined />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
