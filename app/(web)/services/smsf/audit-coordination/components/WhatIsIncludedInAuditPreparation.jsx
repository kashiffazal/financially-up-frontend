"use client";

import React from "react";
import { Tag } from "antd";
import {
  FolderOpenOutlined,
  CheckCircleOutlined,
  SolutionOutlined,
} from "@ant-design/icons";

/**
 * WhatIsIncludedInAuditPreparation Component
 * ==========================================
 * Implements verbatim SEO content from Page 7 of 9th Pillar SMSF.docx:
 * - What is included in SMSF audit preparation? (7 core audit file components)
 */
export default function WhatIsIncludedInAuditPreparation() {
  const auditDeliverables = [
    {
      title: "Bank statements and cash reconciliations for the year",
      desc: "Full 12-month statements for all transactional bank accounts and cash management funds reconciled to 30 June.",
    },
    {
      title: "Investment statements, contract notes, dividend and distribution records",
      desc: "Platform annual tax statements, broker transaction summaries, contract notes, and franking credit documentation.",
    },
    {
      title: "Evidence of property ownership, rental activity and year-end market values where relevant",
      desc: "Certificates of title, commercial/residential leases, rental statements, council rates, and objective valuation evidence.",
    },
    {
      title: "Member contribution and rollover records, pension payment information and member balances",
      desc: "Employer SG confirmations, contribution notices (s290-170), SuperStream rollover statements, and pension commencement documents.",
    },
    {
      title: "Trustee minutes, resolutions and investment-strategy records relevant to the year",
      desc: "Written investment strategy, minutes reviewing diversification, liquidity and insurance, plus major transaction approvals.",
    },
    {
      title: "Loan agreements, LRBA records or related-party documentation where the fund has those arrangements",
      desc: "Bare trust deeds, executed loan agreements, amortization schedules, and arm's-length benchmarking records.",
    },
    {
      title: "Prior-year financial statements, audit reports and evidence that earlier issues have been addressed",
      desc: "Opening trial balances, preceding annual tax returns, auditor management letters, and proof of rectified prior matters.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="cyan" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Workpaper Pack Deliverables
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What is included in SMSF audit preparation?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            The exact file depends on the fund, but SMSF audit preparation commonly involves finalizing the annual accounts and assembling records that allow the auditor to verify the fund’s financial position and compliance history.
          </p>
        </div>

        {/* 7 Workpaper Deliverables Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 w-full">
          {auditDeliverables.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800 shadow-2xs hover:border-purple-400/60 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
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
