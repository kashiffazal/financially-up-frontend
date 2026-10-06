"use client";

import React from "react";
import { Tag, Button } from "antd";
import {
  CalendarOutlined,
  CheckCircleOutlined,
  FileDoneOutlined,
  DollarCircleOutlined,
  ApartmentOutlined,
  BookOutlined,
  InfoCircleOutlined,
  AlertOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import AdvisoryReassuranceBanner from "@/components/website/AdvisoryReassuranceBanner";

/**
 * CommonAreasAndYearEnd Component
 * ===============================
 * Sections 5 & 6 of Tax Planning Hub:
 * - "Common Areas Reviewed in Tax Planning"
 * - "Year-End Tax Planning"
 *
 * Content is 100% VERBATIM from the professional SEO specialist document:
 * '3rd Pillar Tax Planning & Advisory Final Content Pages 1-12.docx' (Page 1).
 */
export default function CommonAreasAndYearEnd() {
  /**
   * The 5 primary common review areas directly cited in Paragraph 1
   */
  const reviewScopeAreas = [
    {
      icon: <DollarCircleOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Timing & Character of Income",
      desc: "Evaluating when income is derived and its tax character.",
    },
    {
      icon: <FileDoneOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Deductibility of Expenses",
      desc: "Assessing allowable business and personal deductions.",
    },
    {
      icon: <BookOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Supporting Records",
      desc: "Verifying substantiation and record integrity.",
    },
    {
      icon: <CalendarOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Expected Payment Obligations",
      desc: "Forecasting PAYG, BAS, and upcoming tax liabilities.",
    },
    {
      icon: <ApartmentOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Planned Transactions",
      desc: "Reviewing proposed asset disposals, acquisitions, or restructures.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        {/* ========================================================= */}
        {/* SECTION 5: Common Areas Reviewed in Tax Planning          */}
        {/* ========================================================= */}
        <div>
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <Tag color="green" className="brand-section-tag">
              <CheckCircleOutlined className="mr-1" /> Scope & Boundaries
            </Tag>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Common Areas Reviewed in Tax Planning
            </h2>
            {/* Document Paragraph 1 - Verbatim */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
              The scope depends on the decision and information available.
              Common areas include the timing and character of income,
              deductibility of expenses, supporting records, expected payment
              obligations and planned transactions.
            </p>
          </div>

          {/* 5 Common Area Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
            {reviewScopeAreas.map((area, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50/80 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-500/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-800 shadow-2xs flex items-center justify-center mb-3">
                    {area.icon}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                    {area.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-zinc-400 m-0 leading-relaxed">
                    {area.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Document Paragraph 2 - Verbatim Notice Box (Crucial Regulatory & Advisory Boundaries) */}
          <div className="p-6 sm:p-8 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-800/60 text-slate-800 dark:text-zinc-200">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-400 flex items-center justify-center shrink-0">
                <InfoCircleOutlined className="text-xl" />
              </div>
              <div className="space-y-2">
                <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white m-0">
                  Regulatory Scope &amp; Professional Boundaries
                </h4>
                {/* Document Paragraph 2 - Verbatim */}
                <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed m-0 font-normal">
                  For businesses, structure can affect tax, registration and legal
                  obligations, so changes should be considered before they are
                  implemented. For individuals, capital gains, property income and
                  superannuation may involve specific rules and timing
                  requirements. Financial product advice and investment
                  recommendations are separate from tax planning and may require
                  an appropriately authorised financial adviser. Legal advice may
                  require an appropriately qualified legal adviser.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* SECTION 6: Year-End Tax Planning                          */}
        {/* ========================================================= */}
        <div className="pt-10 border-t border-slate-200/80 dark:border-zinc-800">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <Tag color="cyan" className="brand-section-tag">
              <CalendarOutlined className="mr-1" /> Pre-30 June Checkpoint
            </Tag>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Year-End Tax Planning
            </h2>
            {/* Document Paragraph 1 - Verbatim */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
              Year-end planning is a practical checkpoint, but it should not be
              treated as a last-minute exercise. A review before 30 June may help
              identify incomplete records, expected tax liabilities, deductible
              expenses that have already been incurred, planned transactions and
              any actions that need to occur within the relevant financial year.
            </p>
          </div>

          {/* Document Paragraph 2 - Verbatim Callout Card (Eligibility Criteria & Notice of Intent) */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-teal-50/70 via-white to-emerald-50/40 dark:from-zinc-900 dark:via-zinc-900 dark:to-teal-950/20 border border-teal-200/80 dark:border-teal-800/80 shadow-sm">
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-teal-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <AlertOutlined className="text-2xl" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
                    Statutory Eligibility &amp; Formal Documentation
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white m-0">
                    Meeting Strict Australian Timing &amp; Notice Rules
                  </h3>
                </div>
              </div>

              {/* Document Paragraph 2 - Verbatim */}
              <blockquote className="m-0 border-l-4 border-teal-500 pl-4 py-2 text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-medium bg-white/80 dark:bg-zinc-800/60 rounded-r-xl">
                Some strategies are subject to specific eligibility criteria,
                timing rules, caps or documentation requirements. For example,
                claiming a deduction for an eligible personal super contribution
                generally requires a valid notice of intent to be given to the
                fund within the required time and an acknowledgement from the
                fund before the deduction is claimed. Financially Up reviews
                these matters based on the current rules and your circumstances
                rather than assuming a tax benefit will apply.
              </blockquote>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-slate-500 dark:text-zinc-400 m-0">
                  Ensure compliance before statutory 30 June deadlines pass.
                </p>
                <Link href="/book-an-appointment">
                  <Button
                    type="primary"
                    size="large"
                    icon={<ArrowRightOutlined />}
                    iconPlacement="end"
                    className="h-11 px-6 rounded-xl font-semibold shadow-md shadow-brand-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    Schedule Pre-30 June Review
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
