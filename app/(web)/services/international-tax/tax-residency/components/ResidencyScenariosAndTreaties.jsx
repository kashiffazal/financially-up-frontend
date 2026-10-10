"use client";

import React from "react";
import Link from "next/link";
import {
  UserAddOutlined,
  IdcardOutlined,
  GlobalOutlined,
  UserDeleteOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * ResidencyScenariosAndTreaties Component
 * =======================================
 * Section 4: Moving, Leaving, Temporary Residents, and Dual Residency / Treaties
 * Exact verbatim content from Client Document (Page 3).
 */
export default function ResidencyScenariosAndTreaties() {
  const dualResidencyFactors = [
    "Where a permanent home is available",
    "Where personal and economic relations are closer",
    "Habitual residence",
    "Nationality",
    "Further agreement between the countries' tax authorities",
  ];

  const leavingQuestions = [
    "Why you left Australia",
    "How long you expected to remain overseas",
    "Whether the move is temporary or indefinite",
    "What accommodation you established overseas",
    "Whether you retained a home in Australia",
    "Where your spouse or family lives",
    "Where you work",
    "What personal and financial connections remain in Australia",
    "Whether your behaviour is consistent with the stated intention",
  ];

  return (
    <section className="py-16 md:py-20 bg-white dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-100 text-indigo-800 dark:bg-indigo-950/80 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/80 mb-4">
            <GlobalOutlined /> Cross-Border Transitions
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Residency Changes, Dual Residency & Treaties
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Whether arriving in Australia, departing for an overseas contract, or managing ties across jurisdictions, timing and statutory definitions dictate the tax consequences.
          </p>
        </div>

        {/* 2-Column Split: Moving In vs Temporary Residents */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Card 1: Moving to Australia */}
          <div className="p-7 sm:p-8 rounded-3xl bg-slate-50 dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/50 flex items-center justify-center text-teal-600 dark:text-teal-400 text-2xl mb-5">
                <UserAddOutlined />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Tax Residency When Moving to Australia
              </h3>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                A person moving to Australia may become an Australian resident for tax purposes from a particular date rather than automatically from the beginning of the financial year. The relevant date depends on the circumstances.
              </p>
              <p className="mt-4 text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Once a person becomes an Australian resident, Australian obligations can extend to foreign income, subject to applicable exemptions and special rules. For CGT, a new resident is generally taken to acquire certain assets that are not taxable Australian property at their market value when residency begins, unless an exception such as temporary-resident treatment applies. The records and valuation implications should be reviewed separately.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-zinc-800">
              <Link
                href="/services/international-tax/new-migrants-tax"
                className="text-xs font-semibold text-teal-600 dark:text-teal-400 hover:underline inline-flex items-center gap-1"
              >
                Learn more in New Migrants Tax <ArrowRightOutlined />
              </Link>
            </div>
          </div>

          {/* Card 2: Temporary Residents */}
          <div className="p-7 sm:p-8 rounded-3xl bg-slate-50 dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center text-blue-600 dark:text-blue-400 text-2xl mb-5">
                <IdcardOutlined />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Temporary Residents
              </h3>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                “Temporary resident” has a specific meaning under Australian tax law and should not be confused with simply being an Australian resident who happens to hold a temporary visa.
              </p>
              <p className="mt-4 text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                A qualifying temporary resident can be an Australian resident for tax purposes while still receiving special treatment for certain foreign income and capital gains. The rules depend on matters including visa status and whether the individual or their spouse is an Australian resident within the meaning of the relevant social-security provisions.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-zinc-800 text-xs font-medium text-slate-500 dark:text-zinc-400">
              Subdivision 768-R of the Income Tax Assessment Act 1997.
            </div>
          </div>
        </div>

        {/* 2-Column Split: Dual Residency & Treaties vs Leaving Australia */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 3: Dual Residency */}
          <div className="p-7 sm:p-8 rounded-3xl bg-slate-50 dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-2xl mb-5">
                <GlobalOutlined />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Can You Be a Tax Resident of Two Countries?
              </h3>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Yes, it is possible for two countries' domestic laws to treat the same person as a tax resident. Where Australia has a double tax agreement with the other country, the treaty may contain rules for determining how dual residency is dealt with for treaty purposes.
              </p>
              <h4 className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-zinc-300">
                Depending on the treaty, relevant matters can include:
              </h4>
              <div className="mt-3 space-y-2">
                {dualResidencyFactors.map((f, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                The wording differs between treaties, so the relevant agreement needs to be considered rather than applying a single universal test.
              </p>
            </div>
          </div>

          {/* Card 4: Leaving Australia */}
          <div className="p-7 sm:p-8 rounded-3xl bg-slate-50 dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/50 flex items-center justify-center text-amber-600 dark:text-amber-400 text-2xl mb-5">
                <UserDeleteOutlined />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Tax Residency When Leaving Australia
              </h3>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Leaving Australia does not automatically end Australian tax residency on the date of departure. Important questions can include:
              </p>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-slate-700 dark:text-zinc-300">
                {leavingQuestions.map((q, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                    <span>{q}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                The residency analysis should reflect what actually occurred, not simply the original travel plan. Where residency ceases, separate Australian tax issues can arise in relation to income and capital assets.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-zinc-800">
              <Link
                href="/services/international-tax/australians-overseas"
                className="text-xs font-semibold text-teal-600 dark:text-teal-400 hover:underline inline-flex items-center gap-1"
              >
                Learn more in Australians Overseas <ArrowRightOutlined />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
