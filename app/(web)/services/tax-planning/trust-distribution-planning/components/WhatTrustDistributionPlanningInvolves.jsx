"use client";

import React from "react";
import {
  ApartmentOutlined,
  CompassOutlined,
  SafetyCertificateOutlined,
  WarningOutlined,
} from "@ant-design/icons";

/**
 * WhatTrustDistributionPlanningInvolves Component
 * ===============================================
 * Section 1: Detailed explanation of trust distribution planning,
 * discretionary trusts, Family Trust Elections (FTE), and integrity rules.
 * Verbatim text from Page 10 of the Tax Planning document.
 */
export default function WhatTrustDistributionPlanningInvolves() {
  const corePrinciples = [
    {
      icon: <ApartmentOutlined className="text-2xl text-brand-primary dark:text-emerald-400" />,
      title: "Trustee Distribution Powers",
      description:
        "Trust distribution planning is the process of reviewing the trust’s expected income and the trustee’s available distribution powers before the trustee makes legally effective decisions about beneficiary entitlements.",
    },
    {
      icon: <CompassOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
      title: "Context & Beneficiary Analysis",
      description:
        "The appropriate outcome depends on the deed, the type of trust, the nature of the income and the circumstances of the beneficiaries.",
    },
    {
      icon: <SafetyCertificateOutlined className="text-2xl text-purple-600 dark:text-purple-400" />,
      title: "Family Trust Elections (FTE)",
      description:
        "A discretionary trust is commonly used by family groups. A family trust election is a tax election available to an eligible trust; it does not create a separate generic trust structure.",
    },
    {
      icon: <WarningOutlined className="text-2xl text-amber-600 dark:text-amber-400" />,
      title: "Distribution Tax Exposure",
      description:
        "A valid FTE affects trust-loss and franking-credit rules and may expose distributions outside the family group to family trust distribution tax.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-zinc-900 border-b border-slate-100 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-primary/10 text-brand-primary dark:bg-emerald-500/10 dark:text-emerald-400 mb-4 border border-brand-primary/20 dark:border-emerald-500/20">
            Advisory Scope &amp; Foundations
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            What Does Trust Distribution Planning Involve?
          </h2>
        </div>

        {/* Verbatim Content Paragraphs */}
        <div className="max-w-4xl mx-auto mb-14 space-y-6 text-slate-700 dark:text-zinc-300 text-base sm:text-lg leading-relaxed">
          <p className="bg-slate-50 dark:bg-zinc-800/60 p-6 sm:p-7 rounded-2xl border border-slate-200/80 dark:border-zinc-700/80 shadow-sm">
            Trust distribution planning is the process of reviewing the trust’s expected income and the trustee’s available distribution powers before the trustee makes legally effective decisions about beneficiary entitlements. The appropriate outcome depends on the deed, the type of trust, the nature of the income and the circumstances of the beneficiaries.
          </p>
          <p className="bg-slate-50 dark:bg-zinc-800/60 p-6 sm:p-7 rounded-2xl border border-slate-200/80 dark:border-zinc-700/80 shadow-sm">
            A discretionary trust is commonly used by family groups, but the term “family trust” is often used informally and can also have a specific tax meaning. A family trust election is a tax election available to an eligible trust; it does not create a separate generic trust structure. Whether an election is appropriate can have consequences beyond the annual distribution decision and should be considered separately.
          </p>
          <p className="bg-slate-50 dark:bg-zinc-800/60 p-6 sm:p-7 rounded-2xl border border-slate-200/80 dark:border-zinc-700/80 shadow-sm">
            A valid family trust election can affect the trust-loss and franking-credit rules and may expose distributions outside the family group to family trust distribution tax. The election status and family group should be checked rather than assumed from the trust’s name.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {corePrinciples.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50 dark:bg-zinc-800/50 rounded-2xl p-6 border border-slate-200/70 dark:border-zinc-700/60 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 flex items-center justify-center mb-5 border border-slate-200/80 dark:border-zinc-700/80 shadow-xs">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
