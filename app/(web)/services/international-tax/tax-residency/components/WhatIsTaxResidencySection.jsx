"use client";

import React from "react";
import {
  SafetyCertificateOutlined,
  CompassOutlined,
  HomeOutlined,
  IdcardOutlined,
  CloseCircleOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * WhatIsTaxResidencySection Component
 * ====================================
 * Section 1: What Is Australian Tax Residency? & Common Misconceptions
 * Exact verbatim content from Client Document (Page 3).
 */
export default function WhatIsTaxResidencySection() {
  const notTheSameAs = [
    "Citizenship",
    "Permanent residency for immigration purposes",
    "The nationality shown on your passport",
    "Simply holding an Australian visa",
    "Owning property in Australia",
  ];

  return (
    <section className="py-16 md:py-20 bg-slate-50 dark:bg-zinc-900/60 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-teal-100 text-teal-800 dark:bg-teal-950/80 dark:text-teal-300 border border-teal-200 dark:border-teal-800/80 mb-4">
            <CompassOutlined /> Core Definition
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            What Is Australian Tax Residency?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Australian tax residency determines whether you are treated as an Australian resident or foreign resident for Australian income-tax purposes. It is not the same as:
          </p>
        </div>

        {/* 5 Points: It is not the same as */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
          {notTheSameAs.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 flex items-start gap-3 shadow-xs"
            >
              <CloseCircleOutlined className="text-rose-500 text-lg mt-0.5 shrink-0" />
              <span className="text-sm font-semibold text-slate-800 dark:text-zinc-200 leading-snug">
                {item}
              </span>
            </div>
          ))}
        </div>

        <div className="p-6 rounded-2xl bg-teal-50/80 dark:bg-teal-950/30 border border-teal-200/80 dark:border-teal-800/60 mb-12">
          <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
            A person can therefore be an Australian citizen and a foreign resident for Australian tax purposes, or hold a temporary visa while being an Australian resident for tax purposes. The outcome depends on the applicable tax rules and your actual circumstances.
          </p>
        </div>

        {/* 2 Critical Distinctions: Owning a home vs Citizenship */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Does Owning an Australian Home Make Me a Tax Resident? */}
          <div className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/50 flex items-center justify-center text-amber-600 dark:text-amber-400 text-2xl mb-5">
                <HomeOutlined />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Does Owning an Australian Home Make Me a Tax Resident?
              </h3>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Not by itself. Owning or retaining a home in Australia can be relevant evidence, but it is only part of the overall residency analysis. The way the property is used can also matter. A home kept available for personal use may carry different factual significance from an investment property leased commercially for a long period.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400 font-normal">
              Factual distinction between vacant retention, family availability, and arm's-length leasing.
            </div>
          </div>

          {/* Card 2: Does Australian Citizenship Determine Tax Residency? */}
          <div className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center text-blue-600 dark:text-blue-400 text-2xl mb-5">
                <IdcardOutlined />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Does Australian Citizenship Determine Tax Residency?
              </h3>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                No. Citizenship and tax residency are different legal concepts. An Australian citizen can become a foreign resident for Australian tax purposes, while a non-citizen can become an Australian resident for tax purposes. The residency tests and the person's factual circumstances determine the tax position.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400 font-normal">
              Governed strictly by Section 6(1) of the Income Tax Assessment Act 1936 (ITAA 1936).
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
