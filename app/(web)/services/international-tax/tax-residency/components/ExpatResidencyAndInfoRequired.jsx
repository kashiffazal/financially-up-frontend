"use client";

import React from "react";
import {
  TeamOutlined,
  FileSearchOutlined,
  ExclamationCircleOutlined,
  CheckCircleFilled,
} from "@ant-design/icons";

/**
 * ExpatResidencyAndInfoRequired Component
 * =======================================
 * Section 5: Tax Residency Advice for Expats & Information Needed for Review
 * Exact verbatim content from Client Document (Page 3).
 */
export default function ExpatResidencyAndInfoRequired() {
  const expatTriggers = [
    "You retain substantial assets or family ties in Australia",
    "Your overseas assignment has changed or been extended",
    "You regularly return to Australia",
    "Your spouse remains in another country",
    "You maintain homes in more than one jurisdiction",
    "Your work arrangements change during the year",
    "You have returned to Australia earlier than originally expected",
  ];

  const infoNeeded = [
    "Dates you entered and left Australia",
    "Countries where you lived",
    "Visas held",
    "Homes available to you in each country",
    "Lease agreements or property ownership",
    "Employment arrangements",
    "Spouse and family locations",
    "Bank and investment accounts",
    "Business interests",
    "Australian assets",
    "Memberships and social ties",
    "Expected duration of overseas or Australian stays",
    "Previous Australian tax returns",
    "Foreign tax-residency documents",
  ];

  return (
    <section className="py-16 md:py-20 bg-slate-50 dark:bg-zinc-900/60 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Tax Residency Advice for Expats */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-teal-100 text-teal-800 dark:bg-teal-950/80 dark:text-teal-300 border border-teal-200 dark:border-teal-800/80 mb-4">
              <TeamOutlined /> Expatriate Practice
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              Tax Residency Advice for Expats
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Australians working overseas and expatriates living in Australia often require expat tax residency advice because assumptions based on travel duration can produce incorrect tax outcomes. A residency review is particularly useful where:
            </p>

            <div className="mt-6 space-y-3">
              {expatTriggers.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 flex items-start gap-3 shadow-xs"
                >
                  <ExclamationCircleOutlined className="text-teal-600 dark:text-teal-400 mt-0.5 shrink-0 text-base" />
                  <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-zinc-200 leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs sm:text-sm text-slate-500 dark:text-zinc-400 italic">
              The actual facts should be reviewed for each relevant period.
            </p>
          </div>

          {/* Right Column: Information Needed for a Tax Residency Review */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-100 text-blue-800 dark:bg-blue-950/80 dark:text-blue-300 border border-blue-200 dark:border-blue-800/80 mb-4">
              <FileSearchOutlined /> Evidence & Audit Trail
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              Information Needed for a Tax Residency Review
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              A tax residency accountant Australia may request information about:
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {infoNeeded.map((info, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 flex items-start gap-2.5 shadow-xs"
                >
                  <CheckCircleFilled className="text-blue-600 dark:text-blue-400 text-sm mt-0.5 shrink-0" />
                  <span className="text-xs font-medium text-slate-800 dark:text-zinc-200 leading-tight">
                    {info}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-800/60 text-xs sm:text-sm text-slate-700 dark:text-zinc-300 font-medium leading-relaxed">
              The review becomes more reliable when the evidence supports the timeline and circumstances described.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
