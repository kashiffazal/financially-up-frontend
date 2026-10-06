"use client";

import React from "react";
import { Tag, Button } from "antd";
import {
  CompassOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  SafetyCertificateOutlined,
  EyeOutlined,
  ArrowRightOutlined,
  FileSearchOutlined,
} from "@ant-design/icons";
import Link from "next/link";

/**
 * WhatTaxPlanningInvolves Component
 * =================================
 * Section 1 of Tax Planning Hub:
 * "What Do Tax Planning Services Involve?"
 *
 * Content is 100% VERBATIM from the professional SEO specialist document:
 * '3rd Pillar Tax Planning & Advisory Final Content Pages 1-12.docx' (Page 1).
 */
export default function WhatTaxPlanningInvolves() {
  /**
   * The breakdown of review checkpoints directly from Paragraph 2
   */
  const reviewCheckpoints = [
    "Expected income",
    "Deductible expenses",
    "PAYG instalments",
    "GST or BAS obligations",
    "Business structure",
    "Capital gains",
    "Investment or property transactions",
    "Superannuation contributions",
    "Record keeping",
    "Whether a separate specialist opinion is needed",
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <Tag color="green" className="brand-section-tag">
            <CompassOutlined className="mr-1" /> Strategic Advisory Scope
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Do Tax Planning Services Involve?
          </h2>
          {/* Document Paragraph 1 - Verbatim */}
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            Tax planning services involve reviewing your expected financial and
            tax position, identifying issues that may need attention and
            considering lawful options before relevant decisions or deadlines. A
            tax planning accountant can help you understand the tax impact of
            different choices without assuming that one strategy suits every
            taxpayer.
          </p>
        </div>

        {/* 2-Column Split: Verbatim Review Scope & Lawful Principles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Left Column: Paragraph 2 & Structured Checkpoints */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-teal-700 dark:text-teal-400 font-bold text-xs uppercase tracking-wider mb-3">
                <FileSearchOutlined /> Areas Considered in a Review
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                Comprehensive Evaluation Before Deadlines
              </h3>
              {/* Document Paragraph 2 - Verbatim */}
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed mb-6">
                Depending on the circumstances, a review may consider expected
                income, deductible expenses, PAYG instalments, GST or BAS
                obligations, business structure, capital gains, investment or
                property transactions, superannuation contributions, record
                keeping and whether a separate specialist opinion is needed.
              </p>

              {/* Visualized Checkpoints from Document */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-slate-100 dark:border-zinc-800/80">
                {reviewCheckpoints.map((checkpoint, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-zinc-300"
                  >
                    <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 mt-1 shrink-0 text-xs" />
                    <span>{checkpoint}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-zinc-800 flex flex-wrap items-center gap-3">
              <Link href="/book-an-appointment">
                <Button
                  type="primary"
                  size="large"
                  icon={<ArrowRightOutlined />}
                  iconPlacement="end"
                  className="h-11 px-6 rounded-xl font-semibold shadow-md shadow-brand-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  Book a Planning Review
                </Button>
              </Link>
              <Link href="#tax-planning-services">
                <Button
                  size="large"
                  icon={<EyeOutlined />}
                  className="h-11 px-5 rounded-xl font-semibold border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-200 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-all"
                >
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Paragraph 3 - Lawful Decision-Making & Evidence */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-teal-50/70 via-white to-emerald-50/50 dark:from-zinc-900 dark:via-zinc-900 dark:to-teal-950/20 border border-teal-200/80 dark:border-teal-800/70 shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-xl bg-teal-600 text-white flex items-center justify-center mb-5 shadow-sm">
                <SafetyCertificateOutlined className="text-2xl" />
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100/70 dark:bg-teal-900/40 text-teal-800 dark:text-teal-300 text-xs font-semibold mb-3">
                <ClockCircleOutlined /> Lawful & Evidence-Based
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Informed Decisions Within the Law
              </h3>

              {/* Document Paragraph 3 - Verbatim */}
              <blockquote className="m-0 border-l-4 border-teal-500 pl-4 py-1 text-sm sm:text-base text-slate-700 dark:text-zinc-200 font-medium leading-relaxed italic bg-white/70 dark:bg-zinc-800/50 rounded-r-lg">
                &ldquo;Tax planning does not mean manufacturing deductions or
                avoiding tax obligations. It means making informed decisions
                within the law, based on current rules and evidence that can
                support the position taken.&rdquo;
              </blockquote>

              <p className="mt-5 text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                Every planning scenario reviewed by Financially Up adheres
                strictly to Australian taxation legislation, Tax Practitioners
                Board (TPB) requirements, and verifiable record substantiation.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-teal-100 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400">
              Tax Agent Services • TPB Regulated (#26234055)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
