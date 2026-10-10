"use client";

import React from "react";
import { Tag } from "antd";
import {
  CheckCircleOutlined,
  AlertOutlined,
} from "@ant-design/icons";

/**
 * OngoingAccountingAndComplianceIssues Component
 * ==============================================
 * Section: Ongoing accounting and compliance issues
 * Verbatim text from Page 5 of client docx (8th Pillar Trust Services.docx).
 * Features 7 compliance principles and the critical warning against treating
 * the trustee company and trust as interchangeable entities.
 */
export default function OngoingAccountingAndComplianceIssues() {
  const issues = [
    "Keeping trust transactions separate from the trustee company’s own transactions.",
    "Recording assets and liabilities in a way that reflects the company acting in its trustee capacity.",
    "Preparing trust financial information and a trust tax return where required.",
    "Maintaining beneficiary, distribution and loan-account records.",
    "Managing GST, PAYG or other registrations where applicable.",
    "Keeping the trustee company’s ASIC details, directors, registered office and annual review matters current.",
    "Reviewing related-party or private-company issues separately where the facts raise Division 7A or other tax questions.",
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950/60 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Governance & Separation
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Ongoing accounting and compliance issues
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Managing a trust with a corporate trustee requires rigorous ongoing separation across accounting entries,
            statutory tax reporting, and corporate regulator requirements.
          </p>
        </div>

        {/* 7 Issue Checklist Bullets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12">
          {issues.map((text, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm flex items-start gap-4"
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

        {/* Verbatim Interchangeability Warning Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-amber-500/10 via-white to-slate-50 dark:from-amber-950/30 dark:via-zinc-900 dark:to-zinc-950 border border-amber-200 dark:border-amber-800/60 shadow-sm space-y-3">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-800 flex items-center justify-center shrink-0">
              <AlertOutlined className="text-lg text-amber-700 dark:text-amber-400" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                Never Treat Trustee Company and Trust as Interchangeable
              </h4>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                The trustee company should not be treated as interchangeable with the trust. Poor separation can create
                confusion over who owns assets, who owes money and which entity has a tax or reporting obligation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
