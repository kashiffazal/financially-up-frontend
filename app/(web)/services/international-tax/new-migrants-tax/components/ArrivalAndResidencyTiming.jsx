"use client";

import React from "react";
import Link from "next/link";
import {
  UserAddOutlined,
  CompassOutlined,
  CalendarOutlined,
  IdcardOutlined,
  CheckCircleFilled,
  ExclamationCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * ArrivalAndResidencyTiming Component
 * ===================================
 * Section 1: Are you an Australian tax resident when you arrive & How residency changes the income you report
 * Exact verbatim content from Client Document (Page 4).
 */
export default function ArrivalAndResidencyTiming() {
  const evidenceFactors = [
    "Travel records and flight itineraries",
    "Accommodation arrangements in Australia",
    "Employment contracts and terms",
    "Location of spouse and immediate family",
    "Overseas homes available to you",
    "Bank and investment activity",
    "Plans supported by what you actually did",
  ];

  return (
    <section className="py-16 md:py-20 bg-slate-50 dark:bg-zinc-900/60 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-teal-100 text-teal-800 dark:bg-teal-950/80 dark:text-teal-300 border border-teal-200 dark:border-teal-800/80 mb-4">
            <UserAddOutlined /> Arrival Timeline & Status
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Are You an Australian Tax Resident When You Arrive?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Tax residency depends on the Australian tax tests and your facts, including living arrangements, intentions, family and economic ties, and the pattern of your presence in Australia. The resides test is the primary test. The domicile, 183-day and Commonwealth superannuation tests may also be relevant. A visa type or a simple day count does not always determine the answer by itself, and the tax tests are not the same as immigration residency rules.
          </p>
        </div>

        {/* 2 Column Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Left Column: Mid-Year Changes & Evidence */}
          <div className="lg:col-span-7 p-7 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/50 flex items-center justify-center text-teal-600 dark:text-teal-400 text-xl">
                  <CalendarOutlined />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  Residency Status Changes Part-Way Through the Year
                </h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-5">
                Your residency status may change part way through an income year. Evidence can include:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-5">
                {evidenceFactors.map((ev, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                    <span>{ev}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-4 border-t border-slate-100 dark:border-zinc-800 text-xs font-semibold text-slate-600 dark:text-zinc-400">
              We review the timeline and supporting information before deciding which period and income should be reported.
            </div>
          </div>

          {/* Right Column: How Residency Changes What You Report */}
          <div className="lg:col-span-5 p-7 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center text-blue-600 dark:text-blue-400 text-xl">
                  <IdcardOutlined />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  How Residency Changes the Income You Report
                </h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                An Australian resident for tax purposes generally declares income from Australia and overseas, subject to applicable rules and exceptions. A foreign resident generally declares Australian-sourced income. The place where income is paid, the currency used and the location of a bank account do not alone determine whether the income belongs in an Australian return.
              </p>
              <div className="p-4 rounded-xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/60">
                <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
                  Some people who are Australian residents also qualify as temporary residents for tax purposes. Temporary-resident treatment can change how certain foreign-source income and capital gains are taxed, but it has specific eligibility conditions and exceptions. It does not follow automatically from holding any temporary visa. We check tax residency, temporary-resident status and the type of income separately.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800">
              <Link
                href="/services/international-tax/tax-residency"
                className="text-xs font-semibold text-teal-600 dark:text-teal-400 hover:underline inline-flex items-center gap-1"
              >
                Comprehensive Tax Residency Advice <ArrowRightOutlined />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
