"use client";

import React from "react";
import { Tag } from "antd";
import {
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  AuditOutlined,
} from "@ant-design/icons";

/**
 * KeyAreasReviewedInComplianceCheck Component
 * ===========================================
 * Implements verbatim SEO content from Page 8 of 9th Pillar SMSF.docx:
 * - Key areas reviewed in an SMSF compliance check (8 core checkpoints)
 */
export default function KeyAreasReviewedInComplianceCheck() {
  const complianceCheckpoints = [
    {
      title: "Ownership and separation of SMSF assets from personal or business assets",
      desc: "Verifying all bank accounts, property titles, and investment portfolios are strictly registered under trustee names for the fund.",
    },
    {
      title: "Whether investments are consistent with the fund’s trust deed and investment strategy",
      desc: "Testing actual portfolio asset weightings against authorized ranges documented in the fund's governing strategy.",
    },
    {
      title: "Arm’s-length terms and market-value evidence for relevant transactions",
      desc: "Confirming commercial pricing, objective 30 June market values, and absence of preferential related-party advantages.",
    },
    {
      title: "Related-party acquisitions, loans, leases and in-house asset considerations where applicable",
      desc: "Checking commercial real estate lease conditions, business real property exceptions, and the statutory 5% in-house asset limit.",
    },
    {
      title: "Contribution, rollover and benefit-payment records",
      desc: "Validating personal contribution deductibility notices, work test declarations where required, and SuperStream rollovers.",
    },
    {
      title: "Member balances, pension documentation and reporting where relevant",
      desc: "Checking transfer balance cap compliance, minimum annual pension drawdowns, and correct tax-free proportion splits.",
    },
    {
      title: "Accounting records, trustee minutes and supporting documents required for annual audit",
      desc: "Ensuring all source invoices, bank statements, contract notes, and trustee resolutions are assembled for the auditor.",
    },
    {
      title: "Outstanding lodgements, prior audit findings or unresolved ATO correspondence",
      desc: "Reviewing historical tax return lodgements, outstanding prior-year audits, and rectifying past auditor contravention reports.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="green" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Audit Checkpoints
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Key areas reviewed in an SMSF compliance check
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A methodical review examines the fund&apos;s records against statutory superannuation operating standards before accounting and independent audit:
          </p>
        </div>

        {/* 8 Checkpoints Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 w-full">
          {complianceCheckpoints.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800 shadow-2xs hover:border-emerald-400/60 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                {idx + 1}
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
