"use client";

import React from "react";
import Link from "next/link";
import {
  CheckCircleFilled,
  ExclamationCircleOutlined,
  ArrowRightOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

/**
 * WorldwideIncomeDeclaration Component
 * =====================================
 * Section 2: Do Australian Residents Need to Declare Foreign Income?
 * Exact verbatim text from Client Document (Page 2).
 */
export default function WorldwideIncomeDeclaration() {
  const reportingConditions = [
    {
      title: "The money stays in an overseas bank account",
      desc: "Income does not need to be remitted or physically wired to Australia to trigger assessability.",
    },
    {
      title: "You do not transfer it to Australia",
      desc: "Retaining funds in foreign denominated currency accounts does not exempt you from Australian tax obligations.",
    },
    {
      title: "Foreign tax has already been withheld",
      desc: "Having tax deducted by a foreign government or payer does not automatically exclude it from your Australian return.",
    },
    {
      title: "The income was earned in another currency",
      desc: "Earnings in USD, EUR, GBP, INR, or any foreign currency must be declared using accepted ATO translation methods.",
    },
    {
      title: "The overseas country has already included it in a foreign tax return",
      desc: "Filing an overseas tax return does not replace your legal Australian worldwide lodgement requirement.",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading and Context */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-100 text-blue-800 dark:bg-blue-950/80 dark:text-blue-300 border border-blue-200 dark:border-blue-800/80 mb-4">
              <GlobalOutlined /> Worldwide Taxation Principle
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              Do Australian Residents Need to Declare Foreign Income?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Australian residents for tax purposes are generally taxed on their worldwide assessable income. This means assessable foreign income may need to be reported even if:
            </p>

            <div className="mt-8 p-6 rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/60">
              <div className="flex gap-3">
                <ExclamationCircleOutlined className="text-xl text-amber-600 dark:text-amber-400 mt-1 shrink-0" />
                <div className="space-y-3">
                  <p className="text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
                    Tax treatment can differ for foreign residents and for people who qualify for Australia's temporary-resident rules. If your residency position is uncertain, it should usually be resolved before the foreign income calculation.
                  </p>
                  <p className="text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
                    Where the residency position needs a separate factual review, our{" "}
                    <Link
                      href="/services/international-tax/tax-residency"
                      className="font-semibold text-teal-600 dark:text-teal-400 hover:underline inline-flex items-center gap-1"
                    >
                      Tax Residency service <ArrowRightOutlined className="text-xs" />
                    </Link>{" "}
                    addresses that question before the foreign-income calculations are finalised.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 5 Specific Conditions */}
          <div className="lg:col-span-7 space-y-4">
            {reportingConditions.map((cond, index) => (
              <div
                key={index}
                className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 hover:border-blue-500/40 dark:hover:border-blue-500/40 transition-all flex items-start gap-4"
              >
                <CheckCircleFilled className="text-xl text-teal-600 dark:text-teal-400 mt-1 shrink-0" />
                <div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-1">
                    {cond.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                    {cond.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
