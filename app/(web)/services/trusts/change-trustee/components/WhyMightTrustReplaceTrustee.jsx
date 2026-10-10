"use client";

import React from "react";
import { Tag } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";

/**
 * WhyMightTrustReplaceTrustee Component
 * =====================================
 * Section: Why might a trust replace its trustee?
 * Verbatim text from Page 8 of client docx (8th Pillar Trust Services.docx).
 * Features 6 common reasons why trusts replace individual or corporate trustees.
 */
export default function WhyMightTrustReplaceTrustee() {
  const reasons = [
    "an individual trustee is retiring, has died or no longer wishes to act",
    "the family or business wants to move from an individual trustee to a corporate trustee",
    "an existing corporate trustee is being replaced as part of succession or governance planning",
    "the deed requires a replacement after a particular event",
    "control or administration of the trust is being reorganized",
    "a trustee is no longer suitable or able to perform the role, subject to the deed and legal requirements.",
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950/60 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Trigger Events
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why might a trust replace its trustee?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Trustee transitions occur across private family and business trusts for a wide range of operational,
            succession, risk management, and governance reasons.
          </p>
        </div>

        {/* 6 Reasons Checklist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((text, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm hover:shadow-md flex items-start gap-4"
            >
              <div className="w-8 h-8 rounded-full bg-teal-50 dark:bg-teal-950/50 border border-teal-200 dark:border-teal-800/60 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 text-sm" />
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-200 leading-relaxed font-normal capitalize-first">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
