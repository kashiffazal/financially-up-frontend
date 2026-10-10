"use client";

import React from "react";
import Link from "next/link";
import {
  BankOutlined,
  ExclamationCircleOutlined,
  WarningOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * WhatIfLetterSaysYouOweMoney Component
 * =====================================
 * Section 5: Responding to letters demanding tax payments, reconciling accounts,
 * separating collection from underlying assessment validity, and identifying recovery risks.
 */
export default function WhatIfLetterSaysYouOweMoney() {
  const steps = [
    {
      title: "1. Reconcile How the Balance Arose",
      text: "Check how the balance arose before paying or proposing instalments. Review the assessment, account transactions, credits, payments, returns and BAS that make up the debt.",
    },
    {
      title: "2. Verify Assessment Accuracy First",
      text: "Confirm whether the amount is final, under review or affected by an outstanding lodgement. A payment arrangement addresses collection; it does not correct an assessment that is wrong.",
    },
    {
      title: "3. Evaluate Cash Flow & Ongoing Tax",
      text: "If the balance is correct but cannot be paid in full, consider cash flow, ongoing tax liabilities and the cost of continuing GIC before committing to an instalment proposal.",
    },
    {
      title: "4. Urgent Escalation for Firmer Action",
      text: "If recovery action, a garnishee notice, director penalty notice (DPN) or insolvency proceedings are mentioned, obtain advice immediately. A routine correspondence review will not suffice.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-2">
            Debt & Demands
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            What if the letter says you owe money?
          </h2>
          <div className="mt-6 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed space-y-4">
            <p>
              Check how the balance arose before paying or proposing instalments. Review the assessment, account transactions, credits, payments, returns and BAS that make up the debt. Confirm whether the amount is final, under review or affected by an outstanding lodgement. A payment arrangement addresses collection; it does not correct an assessment that is wrong.
            </p>
            <p>
              If the balance is correct but cannot be paid in full, consider cash flow, ongoing tax and the cost of continuing GIC before proposing a plan. If recovery action, a garnishee notice, director penalty notice or insolvency issue is mentioned, obtain advice immediately because a general correspondence review may not be enough.
            </p>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 hover:border-emerald-500 dark:hover:border-emerald-500 shadow-sm transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Firmer Action Alert Box */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-rose-500/10 to-orange-500/10 border border-amber-500/20 dark:border-amber-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3">
            <WarningOutlined className="text-2xl text-amber-600 dark:text-amber-400 mt-1 sm:mt-0 flex-shrink-0" />
            <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-200">
              Facing imminent recovery action, garnishee notices, or a DPN? Visit our dedicated{" "}
              <strong className="text-slate-900 dark:text-white font-semibold">ATO Debt Help practice</strong>{" "}
              for immediate legal and debt risk intervention.
            </p>
          </div>
          <Link
            href="/services/ato-help/ato-debt"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-amber-600 dark:text-amber-400 hover:text-amber-700 whitespace-nowrap self-start sm:self-auto"
          >
            Review Debt Help Practice <ArrowRightOutlined />
          </Link>
        </div>
      </div>
    </section>
  );
}
