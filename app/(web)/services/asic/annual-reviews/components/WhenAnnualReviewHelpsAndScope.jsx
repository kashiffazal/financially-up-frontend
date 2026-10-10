"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button, Alert } from "antd";
import {
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  CalendarOutlined,
  TeamOutlined,
  AuditOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * WhenAnnualReviewHelpsAndScope Component
 * ======================================
 * Section 2 of ASIC Annual Review Service (/services/asic/annual-reviews/):
 * 1. "When an ASIC annual review service can help"
 * 2. "How Financially Up can help" (6 scope points)
 *
 * Implements 100% complete, verbatim content from Page 9 of '7th Pillar ASIC.docx'.
 * Clean White alternating section, registered agent workflow connection, and 6-point scope breakdown.
 */
export default function WhenAnnualReviewHelpsAndScope() {
  const scopeItems = [
    "Reviewing the annual statement against the information you provide",
    "Identifying company details that may need updating",
    "Assisting with relevant ASIC notifications and company-detail changes",
    "Helping track annual review dates and the annual review process",
    "Supporting maintenance of company records and resolutions within the agreed scope",
    "Escalating tax, accounting, solvency or legal issues that require separate professional consideration",
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subsection 1: When an ASIC annual review service can help */}
        <div className="w-full mb-16 sm:mb-20">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <Tag color="cyan" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
              Director Support & Relief
            </Tag>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              When an ASIC annual review service can help
            </h2>
          </div>

          <div className="bg-slate-50 dark:bg-zinc-900/80 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-zinc-800 shadow-xs space-y-6">
            <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
              Annual-review support is useful where directors are busy, the company&apos;s records are maintained by an external accountant, multiple companies have different review dates, or the annual statement reveals old information that needs correction. It can also help where a business owner is unsure which documents should be retained after the review.
            </p>
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
              If Financially Up acts as the company&apos;s{" "}
              <Link href="/services/asic/registered-agent" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                ASIC Registered Agent
              </Link>
              , the annual statement can be received through the registered-agent arrangement and the review can be managed as part of an agreed ongoing compliance scope.
            </p>
          </div>
        </div>

        {/* Subsection 2: How Financially Up can help */}
        <div className="w-full">
          <div className="text-center mb-10">
            <Tag color="green" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
              Scope of Assistance
            </Tag>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              How Financially Up can help
            </h2>
          </div>

          <div className="bg-slate-50 dark:bg-zinc-900/80 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-zinc-800 shadow-xs mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {scopeItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/60 dark:border-zinc-800"
                >
                  <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 mt-1 shrink-0 text-sm" />
                  <span className="text-xs sm:text-sm text-slate-800 dark:text-zinc-200 font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal pt-4 mt-6 border-t border-slate-200/70 dark:border-zinc-800 m-0">
              Annual-review administration is distinct from the company&apos;s broader accounting, tax-return and bookkeeping obligations. Where financial records need attention before directors can properly consider solvency, that accounting work may need to be scoped separately.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
