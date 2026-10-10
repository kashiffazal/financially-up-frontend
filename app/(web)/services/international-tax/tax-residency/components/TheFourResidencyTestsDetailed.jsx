"use client";

import React from "react";
import {
  CompassOutlined,
  HomeOutlined,
  CalendarOutlined,
  SafetyCertificateOutlined,
  ExclamationCircleOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * TheFourResidencyTestsDetailed Component
 * =======================================
 * Section 3: The Four Australian Statutory Tax Residency Tests
 * Exact verbatim content from Client Document (Page 3).
 */
export default function TheFourResidencyTestsDetailed() {
  const residesFactors = [
    "Your physical presence in Australia",
    "The purpose of your stay",
    "Your intention",
    "Your family connections",
    "Employment or business ties",
    "Where you maintain a home",
    "Your assets",
    "Your social and living arrangements",
    "Your pattern of travel",
  ];

  return (
    <section className="py-16 md:py-20 bg-slate-50 dark:bg-zinc-900/60 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-teal-100 text-teal-800 dark:bg-teal-950/80 dark:text-teal-300 border border-teal-200 dark:border-teal-800/80 mb-4">
            <CompassOutlined /> Statutory Framework
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            What Are the Australian Tax Residency Tests?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Australian tax law contains four tests that are relevant to determining individual residency. You generally need to satisfy only one of the applicable tests to be treated as an Australian resident for tax purposes.
          </p>
        </div>

        {/* The 4 Tests Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Test 1: Resides test */}
          <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/50 flex items-center justify-center text-teal-600 dark:text-teal-400 text-2xl">
                  <CompassOutlined />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-teal-100 text-teal-800 dark:bg-teal-950/80 dark:text-teal-300">
                  Primary Test
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                1. Resides test
              </h3>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-5">
                The resides test is the primary test. It considers whether you reside in Australia according to the ordinary meaning of residing here. Relevant circumstances can include:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-5">
                {residesFactors.map((f, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-4 border-t border-slate-100 dark:border-zinc-800 text-xs font-semibold text-slate-500 dark:text-zinc-400">
              There is no single factor that determines every case.
            </div>
          </div>

          {/* Test 2: Domicile test */}
          <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center text-blue-600 dark:text-blue-400 text-2xl">
                  <HomeOutlined />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-950/80 dark:text-blue-300">
                  Permanent Place of Abode
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                2. Domicile test
              </h3>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                The domicile test can be relevant where your legal domicile is in Australia. In broad terms, a person with an Australian domicile may still be treated as an Australian resident unless the Commissioner is satisfied that their permanent place of abode is outside Australia.
              </p>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                This can be especially important for Australians who move overseas. The analysis can involve matters such as the intended duration of the overseas move, living arrangements, connections retained with Australia and the nature of the person's overseas home.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 dark:border-zinc-800 text-xs font-semibold text-slate-500 dark:text-zinc-400">
              Assesses permanence abroad vs retaining an Australian domicile of origin.
            </div>
          </div>

          {/* Test 3: 183-day test */}
          <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/50 flex items-center justify-center text-amber-600 dark:text-amber-400 text-2xl">
                  <CalendarOutlined />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300">
                  Physical Presence
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                3. 183-day test
              </h3>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                The 183-day test can apply where a person is physically present in Australia for 183 days or more during an income year, whether continuously or intermittently. The test also considers whether the person’s usual place of abode is outside Australia and whether they intend to take up residence here, so the day count is not the only requirement.
              </p>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Likewise, spending fewer than 183 days in Australia does not automatically make someone a foreign resident if another residency test is satisfied.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 dark:border-zinc-800 text-xs font-semibold text-slate-500 dark:text-zinc-400">
              Evaluates continuous or intermittent days alongside usual place of abode.
            </div>
          </div>

          {/* Test 4: Commonwealth superannuation fund test */}
          <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 dark:bg-purple-950/50 flex items-center justify-center text-purple-600 dark:text-purple-400 text-2xl">
                  <SafetyCertificateOutlined />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-100 text-purple-800 dark:bg-purple-950/80 dark:text-purple-300">
                  Government Posts
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                4. Commonwealth superannuation fund test
              </h3>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                This specific test applies to certain Australian Government employees working at Australian posts overseas who are contributing members of the CSS or PSS schemes. It can also extend to their spouse and children under 16. It does not apply merely because a person has an Australian superannuation account.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 dark:border-zinc-800 text-xs font-semibold text-slate-500 dark:text-zinc-400">
              Limited strictly to qualifying CSS/PSS scheme contributors.
            </div>
          </div>
        </div>

        {/* Callout: Is the 183-Day Rule Enough to Determine Residency? */}
        <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800">
          <div className="flex items-start gap-4">
            <ExclamationCircleOutlined className="text-2xl text-amber-500 mt-1 shrink-0" />
            <div className="space-y-3">
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                Is the 183-Day Rule Enough to Determine Residency?
              </h4>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                No. The number of days spent in Australia can be relevant, but Australian tax residency cannot always be determined by counting days alone. For example, a person who lives overseas for most of an income year may still need to consider the resides and domicile tests.
              </p>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Similarly, a person who arrives in Australia part-way through the year may become an Australian resident based on their broader circumstances even though they have not yet spent 183 days here. A proper tax residency review Australia service considers the complete facts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
