"use client";

import React from "react";
import { Tag } from "antd";
import {
  SafetyCertificateOutlined,
  CalendarOutlined,
  WarningOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import AdvisoryReassuranceBanner from "@/components/website/AdvisoryReassuranceBanner";

/**
 * June30DistributionNotice Component
 * ==================================
 * Section 4: June 30 Distribution Resolutions & Timing Rules.
 *
 * Explains the strict 30 June distribution resolution deadline,
 * the 47% default trustee tax rate risk, and franking credit streaming rules.
 *
 * Background: Clean White.
 */
export default function June30DistributionNotice() {
  const timingRules = [
    {
      icon: <CalendarOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Strict 30 June Execution Deadline",
      description:
        "Trustee distribution resolutions must be formally made and documented on or before 30 June. Resolutions cannot be backdated or treated as an afterthought during year-end tax preparation.",
      tag: "Statutory Deadline",
    },
    {
      icon: <WarningOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "47% Default Trustee Tax Assessment",
      description:
        "If a valid resolution is not executed by 30 June, no beneficiary is presently entitled. Under Section 99A, trust income may be assessed directly to the trustee at the top marginal rate of 47%.",
      tag: "Tax Risk",
    },
    {
      icon: <DollarOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "CGT & Franking Credit Streaming",
      description:
        "Streaming net capital gains or franked dividends to specific beneficiaries requires explicit streaming powers within the trust deed and precise drafting in the 30 June resolution.",
      tag: "Streaming Rules",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <Tag color="green" className="brand-section-tag">
            Critical Compliance Window
          </Tag>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.2]">
            June 30 Distribution Resolutions & Timing Rules
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            For discretionary trusts, establishing beneficiary present entitlement before 30 June is a mandatory statutory requirement. Effective planning ensures distributions are legally valid and tax-optimised.
          </p>
        </div>

        {/* 3 Timing Rule Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {timingRules.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50/80 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-500/50 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-800 shadow-2xs flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-300">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Advisory Reassurance Banner */}
        <AdvisoryReassuranceBanner
          tag="Year-End Trust Governance"
          tagIcon="safety"
          title="Plan Your Trust Distributions Before 30 June"
          description="Avoid costly default tax rates and Section 100A integrity challenges. Financially Up models your trust's estimated taxable income in May and June, drafts compliant distribution minutes, and ensures present entitlement is established before statutory deadlines."
          primaryButton={{
            text: "Book Distribution Advice",
            href: "/services/trusts/distribution-planning",
          }}
          showPhone={true}
        />
      </div>
    </section>
  );
}
