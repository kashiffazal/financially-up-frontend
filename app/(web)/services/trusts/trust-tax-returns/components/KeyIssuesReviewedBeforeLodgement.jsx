"use client";

import React from "react";
import { Tag } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";

/**
 * KeyIssuesReviewedBeforeLodgement Component
 * ==========================================
 * Section: Key issues reviewed before lodgement
 * Verbatim text from Page 6 of client docx (8th Pillar Trust Services.docx).
 * Features 10 essential pre-lodgement review items for trust tax returns.
 */
export default function KeyIssuesReviewedBeforeLodgement() {
  const issues = [
    "Trust deed and any relevant variations.",
    "Year-end financial accounts, bank reconciliations and supporting records.",
    "Income from business, rent, interest, dividends, managed funds or other investments.",
    "Deductible expenses and whether any expenditure is capital rather than immediately deductible.",
    "Capital gains and losses, including asset purchase and sale records.",
    "Franking credits and other tax offsets where relevant.",
    "Trustee distribution resolutions and beneficiary entitlements.",
    "Loans, unpaid entitlements and related-party balances where relevant.",
    "GST/BAS records where the trust is registered or carrying on an enterprise.",
    "Prior-year tax positions, losses or elections that may affect the current year.",
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Quality Assurance
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Key issues reviewed before lodgement
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Every trust tax return prepared by Financially Up undergoes a rigorous 10-point technical review to ensure
            statutory accuracy, eliminate ATO audit exposure, and protect beneficiary tax outcomes.
          </p>
        </div>

        {/* 10 Issues Checklist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {issues.map((text, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm flex items-start gap-4"
            >
              <div className="w-8 h-8 rounded-full bg-teal-50 dark:bg-teal-950/50 border border-teal-200 dark:border-teal-800/60 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 text-sm" />
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
