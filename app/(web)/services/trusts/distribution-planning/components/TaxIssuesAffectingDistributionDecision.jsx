"use client";

import React from "react";
import { Tag } from "antd";
import {
  SafetyCertificateOutlined,
  WarningOutlined,
  SlidersOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * TaxIssuesAffectingDistributionDecision Component
 * =================================================
 * Section: Tax issues that can affect a distribution decision
 * Verbatim text from Page 11 of client docx (8th Pillar Trust Services.docx).
 * Explains why the lowest tax rate is not the sole factor, character of income,
 * trust losses, franking credits, capital gains, residency, and Section 100A reimbursement agreements.
 */
export default function TaxIssuesAffectingDistributionDecision() {
  const issues = [
    {
      icon: <SlidersOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Beyond Lowest Apparent Tax Rates",
      desc: "The lowest apparent tax rate is not the only issue. A trust distribution accountant may need to consider the character of the trust's income, beneficiary circumstances, losses, franking credits, capital gains, residency, trust elections, existing entitlements and related-party arrangements.",
    },
    {
      icon: <SafetyCertificateOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Specific Eligibility Rules",
      desc: "Some of these matters have their own eligibility rules and should not be treated as automatic. Beneficiary circumstances and elections require careful cross-checking against current tax law.",
    },
    {
      icon: <WarningOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Section 100A Reimbursement Agreements",
      desc: "Section 100A can also be relevant where a beneficiary is made entitled to trust income but an arrangement provides the economic benefit to another person in circumstances that fall within the reimbursement-agreement rules.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Tax Integrity & Section 100A
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Tax issues that can affect a distribution decision
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            The lowest apparent tax rate is not the only issue. A trust distribution accountant may need to consider
            the character of the trust&apos;s income, beneficiary circumstances, losses, franking credits, capital
            gains, residency, trust elections, existing entitlements and related-party arrangements. Some of these
            matters have their own eligibility rules and should not be treated as automatic.
          </p>
        </div>

        {/* 3 Issues Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {issues.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Section 100A Fact-Specific Callout */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-brand-bg-lighter via-white to-slate-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border border-slate-200 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row items-start md:items-center gap-5">
          <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 flex items-center justify-center shrink-0">
            <CheckCircleOutlined className="text-xl text-teal-600 dark:text-teal-400" />
          </div>
          <div className="space-y-1">
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              Fact-Specific Section 100A Assessment
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              The application of section 100A is fact-specific, so ordinary family arrangements should not be treated as
              automatically problematic, nor should every redirection of benefits be assumed acceptable. Each
              distribution must reflect the authentic economic benefit of the entitled beneficiary.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
