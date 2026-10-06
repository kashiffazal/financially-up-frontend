"use client";

import React from "react";
import { Tag, Button } from "antd";
import {
  CalendarOutlined,
  ClockCircleOutlined,
  CheckCircleOutlined,
  SafetyCertificateOutlined,
  AlertOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import AdvisoryReassuranceBanner from "@/components/website/AdvisoryReassuranceBanner";

/**
 * AnnualReviewAndSolvency Component
 * =================================
 * Section 3 of ASIC Compliance Hub (/services/asic/):
 * "Annual company reviews and keeping ASIC details current"
 *
 * Content is 100% VERBATIM from the professional SEO specialist document:
 * '7th Pillar ASIC.docx' (Section 1).
 *
 * Background: Lite Brand Gradient.
 */
export default function AnnualReviewAndSolvency() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <Tag color="green" className="brand-section-tag">
            <CalendarOutlined className="mr-1" /> Annual Obligations & Timelines
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.2]">
            Annual company reviews and keeping ASIC details current
          </h2>
          {/* Document Paragraph 1 - Verbatim */}
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            ASIC generally issues an annual statement soon after a company’s annual review date. The company needs to check the details, pay the annual review fee by the due date and address the solvency-resolution requirements. Directors generally must pass a solvency resolution within two months of the review date unless the company lodged the relevant financial report with ASIC during the previous 12 months. Directors should not wait until the annual review to update information that has already changed.
          </p>
        </div>

        {/* 2-Column Split: Solvency Resolution Rule vs 28-Day Notification Window */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          {/* Left Column: Annual Statement & Solvency Requirements */}
          <div className="p-7 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between hover:border-teal-500/40 transition-all">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/50 flex items-center justify-center">
                    <CalendarOutlined className="text-teal-600 dark:text-teal-400 text-xl" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider">
                      Annual Review Cycle
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white m-0">
                      Annual Statements & Solvency Resolutions
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300">
                  2-Month Rule
                </span>
              </div>

              {/* Exact points derived directly from Paragraph 1 */}
              <div className="space-y-3.5 mb-6 text-sm text-slate-700 dark:text-zinc-300">
                <div className="flex items-start gap-3">
                  <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 mt-1 shrink-0" />
                  <span>Annual statement issued soon after company review date</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 mt-1 shrink-0" />
                  <span>Check registered company details and pay annual review fee by due date</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 mt-1 shrink-0" />
                  <span>Pass solvency resolution within 2 months of review date</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 mt-1 shrink-0" />
                  <span>Do not delay updating details that have already changed</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400">
              Directors generally must pass a solvency resolution within two months unless exempt.
            </div>
          </div>

          {/* Right Column: 28-Day Notification Rule & Late Fees */}
          <div className="p-7 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between hover:border-emerald-500/40 transition-all">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 flex items-center justify-center">
                    <ClockCircleOutlined className="text-emerald-600 dark:text-emerald-400 text-xl" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                      Statutory Deadlines
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white m-0">
                      The 28-Day Change Notification Rule
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300">
                  28-Day Limit
                </span>
              </div>

              {/* Document Paragraph 2 - Verbatim */}
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed mb-6 font-normal">
                ASIC states that most company-detail changes must be notified within 28 days. Late lodgement fees can apply when relevant changes are reported outside the required period. That makes regular corporate record maintenance important, particularly for growing businesses where addresses, officeholders or ownership details can change during the year.
              </p>

              <div className="p-4 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/50 text-xs sm:text-sm text-amber-800 dark:text-amber-300 flex items-start gap-2.5">
                <AlertOutlined className="mt-0.5 shrink-0" />
                <span>
                  Late lodgement fees escalate automatically if changes to addresses, officeholders, or share structures are lodged outside the statutory 28-day window.
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-zinc-800 mt-6 text-xs text-slate-500 dark:text-zinc-400">
              Regular corporate maintenance avoids unnecessary late penalties and administrative backlogs.
            </div>
          </div>
        </div>

        {/* Reassurance Banner */}
        <AdvisoryReassuranceBanner
          tag="Corporate Secretarial Reassurance"
          tagIcon="safety"
          title="Never Miss an ASIC Annual Review Deadline"
          description="Appointing Financially Up as your ASIC registered agent means annual statements are delivered directly to our registered agent portal, checked against your financial records, and sent to you with documented solvency minutes ready for signature."
          primaryButton={{
            text: "Appoint Registered Agent",
            href: "/services/asic/registered-agent",
          }}
          showPhone={true}
        />
      </div>
    </section>
  );
}
