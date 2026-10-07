"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  WarningOutlined,
  CloseCircleFilled,
  ApartmentOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * CommonTrustDistributionIssues Component
 * ========================================
 * Section: Common trust distribution issues
 * Verbatim text from Page 11 of client docx.
 * Features 8 common issues, plus cross-link to Division 7A for corporate beneficiaries.
 */
export default function CommonTrustDistributionIssues() {
  const issues = [
    {
      title: "Distribution resolutions prepared too late or without checking the deed",
      desc: "Executing trustee minutes after 30 June or without verifying deed-specific clauses on income calculation and default beneficiaries.",
    },
    {
      title: "Beneficiaries named who may not be within the permitted class",
      desc: "Distributing trust income to extended relatives, entities, or trusts that do not qualify as eligible beneficiaries under the deed definitions.",
    },
    {
      title: "Trust accounting income differing from taxable net income",
      desc: "Discrepancies arising between distributable accounting profits and Section 95 tax net income due to non-deductible items or timing differences.",
    },
    {
      title: "Capital gains or franked distributions not recorded consistently with the resolution",
      desc: "Mismatch between trustee resolution intentions, financial statement ledger entries, and formal tax-return schedule allocations.",
    },
    {
      title: "Beneficiary information not matching the trust tax return",
      desc: "TFNs, dates of birth, residency status, or distribution amounts on beneficiary tax returns diverging from the lodged trust return.",
    },
    {
      title: "Private-company beneficiaries creating possible Division 7A considerations",
      desc: "Distributing trust net income to a corporate beneficiary where funds remain unpaid or are loaned back to family members.",
    },
    {
      title: "Unpaid or outstanding beneficiary entitlements that require further review",
      desc: "Historical unpaid present entitlements (UPEs) accumulating on trust balance sheets requiring structural legal and tax review.",
    },
    {
      title: "Changes in family or business circumstances that make last year’s approach unsuitable",
      desc: "Adult children turning 18, beneficiaries reaching top tax brackets, marriage or separation making rolled-over prior patterns risky.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="orange" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Year-End Risks
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Common trust distribution issues
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Trust distribution compliance requires close alignment between trust deeds, accounting figures, and tax legislation.
          </p>
        </div>

        {/* 8 Issues Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12">
          {issues.map((item, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 hover:border-orange-400 dark:hover:border-orange-500/50 transition-all duration-300 shadow-sm flex items-start gap-4"
            >
              <div className="w-8 h-8 rounded-lg bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-800 flex items-center justify-center shrink-0 mt-0.5">
                <CloseCircleFilled className="text-orange-500 text-sm" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Division 7A Connection Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-teal-500/10 via-white to-slate-50 dark:from-teal-950/20 dark:via-zinc-900 dark:to-zinc-950 border border-teal-500/20 dark:border-teal-500/30 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <ApartmentOutlined className="text-teal-600 dark:text-teal-400" />
              Private Company Beneficiaries & Division 7A
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Where a private company beneficiary is involved, Division 7A can also become relevant depending on how an unpaid entitlement or financial accommodation is dealt with. See our{" "}
              <Link
                href="/services/business-tax/division-7a"
                className="text-teal-600 dark:text-teal-400 font-semibold underline underline-offset-4 hover:text-teal-700"
              >
                Division 7A
              </Link>{" "}
              page for the broader rules.
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <Link href="/services/business-tax/division-7a">
              <Button
                type="primary"
                className="brand-btn-primary w-full md:w-auto text-xs sm:text-sm font-semibold rounded-xl"
                icon={<ArrowRightOutlined />}
                iconPosition="end"
              >
                Review Division 7A Rules
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
