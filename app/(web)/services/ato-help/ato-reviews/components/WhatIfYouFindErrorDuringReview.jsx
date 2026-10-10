"use client";

import React from "react";
import Link from "next/link";
import {
  AlertOutlined,
  CheckCircleOutlined,
  InfoCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * WhatIfYouFindErrorDuringReview Component
 * ========================================
 * Section 5: Handling errors uncovered during the course of a review,
 * voluntary disclosure considerations, avoiding premature admissions, and penalty effects.
 */
export default function WhatIfYouFindErrorDuringReview() {
  const disclosureRules = [
    {
      title: "Establish Facts & Quantify First",
      text: "Establish the correct facts and figures before deciding how to disclose or correct the issue. The right process depends on the tax, period, type of error and stage of the ATO examination.",
    },
    {
      title: "Potential Penalty Mitigation",
      text: "A voluntary disclosure may reduce an otherwise applicable administrative penalty in appropriate circumstances, but the result and reduction depend on the law and facts.",
    },
    {
      title: "Avoid Hasty, Incomplete Admissions",
      text: "Do not make an incomplete admission merely to respond quickly. A disclosure should identify the error, correct amount, affected period, evidence and method of correction.",
    },
    {
      title: "Tax & Interest Still Apply",
      text: "Interest, tax and other consequences can still apply even where a penalty is reduced. The underlying tax liability remains payable once adjusted.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-2">
              Uncovered Discrepancies
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              What if you find an error during the review?
            </h2>
            <div className="mt-6 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed space-y-4">
              <p>
                Establish the correct facts and figures before deciding how to disclose or correct the issue. The right process depends on the tax, period, type of error and stage of the ATO examination. A voluntary disclosure may reduce an otherwise applicable administrative penalty in appropriate circumstances, but the result and reduction depend on the law and facts.
              </p>
              <p>
                Our voluntary disclosure service explains that separate process. Do not make an incomplete admission merely to respond quickly. A disclosure should identify the error, correct amount, affected period, evidence and method of correction. Interest, tax and other consequences can still apply even where a penalty is reduced.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/services/ato-help/voluntary-disclosure"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-sm transition-all hover:gap-3"
              >
                <span>Explore Voluntary Disclosure Practice</span>
                <ArrowRightOutlined />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 space-y-5">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-200 dark:border-zinc-700">
                <AlertOutlined className="text-2xl text-amber-500" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Principles for Handling Review Discrepancies
                </h3>
              </div>

              {disclosureRules.map((rule, idx) => (
                <div key={idx} className="flex gap-3.5">
                  <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                      {rule.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                      {rule.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
