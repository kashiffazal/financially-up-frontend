"use client";

import React from "react";
import { Tag, Button } from "antd";
import {
  ShopOutlined,
  CheckCircleOutlined,
  FileProtectOutlined,
  ArrowRightOutlined,
  SafetyCertificateOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import Link from "next/link";

/**
 * BasHelpSmallBusiness Component
 * ==============================
 * Section 5 of BAS, GST & Payroll Hub:
 * "BAS help for small business"
 *
 * Content is 100% VERBATIM from the professional SEO specialist document:
 * '5th Pillar BAS, GST & Payroll.docx' (Page 1).
 *
 * Background: Lite Brand Gradient.
 */
export default function BasHelpSmallBusiness() {
  /**
   * Key practical support pillars derived directly from Document Paragraph 2
   */
  const practicalSupportItems = [
    {
      title: "Review the Bookkeeping",
      description:
        "Examining day-to-day transactions, sales journals, supplier payments and GST classifications.",
    },
    {
      title: "Identify Items for Clarification",
      description:
        "Flagging ambiguous transactions, missing tax invoices, or coding anomalies before figures are submitted.",
    },
    {
      title: "Prepare Relevant BAS Information",
      description:
        "Calculating figures accurately from reconciled accounting records so every label is fully substantiated.",
    },
    {
      title: "Assist with Timely Lodgement",
      description:
        "Submitting the activity statement to the ATO within statutory deadlines or registered agent extensions.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <Tag color="green" className="brand-section-tag">
            <ShopOutlined className="mr-1" /> Small Business Practice
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            BAS help for small business
          </h2>
          {/* Document Paragraph 1 - Verbatim */}
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            Small-business owners often need BAS help because the reporting sits
            on top of normal trading, invoicing, supplier payments and payroll.
            The practical challenge is not only submitting a form; it is making
            sure the underlying records support what is reported.
          </p>
        </div>

        {/* 2-Column Showcase: Supporting Records vs Separately Scoped Advice */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Left Column: Practical Routine Compliance Support (Paragraph 2 Part A) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-teal-700 dark:text-teal-400 font-bold text-xs uppercase tracking-wider mb-3">
                <FileProtectOutlined /> Practical BAS Support
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                Underlying Records That Support Lodgement
              </h3>
              {/* Document Paragraph 2 Part A - Verbatim */}
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed mb-6">
                Financially Up can review the bookkeeping, identify items that
                need clarification, prepare the relevant BAS information and
                assist with lodgement.
              </p>

              {/* 4 Support Points Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100 dark:border-zinc-800/80">
                {practicalSupportItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-50/80 dark:bg-zinc-800/50 border border-slate-100 dark:border-zinc-800"
                  >
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white mb-1">
                      <CheckCircleOutlined className="text-teal-600 dark:text-teal-400" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed m-0">
                      {item.description}
                    </p>
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
                  className="h-11 px-6 rounded-xl font-semibold shadow-md shadow-brand-primary/20 hover:scale-[1.02] active:scale-[0.99] transition-all"
                >
                  Book BAS Appointment
                </Button>
              </Link>
              <Link href="/services/bas-payroll/bas-lodgement">
                <Button
                  size="large"
                  className="h-11 px-5 rounded-xl font-semibold border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-200 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-all"
                >
                  BAS Lodgement Details
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Transparent Advisory Boundary (Paragraph 2 Part B) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-teal-50/40 dark:bg-teal-950/20 border border-teal-200/80 dark:border-teal-800/60 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-teal-800 dark:text-teal-300 font-bold text-xs uppercase tracking-wider mb-3">
                <SafetyCertificateOutlined /> Clear Service Scoping
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                Separately Scoped Tax Advice
              </h3>
              {/* Document Paragraph 2 Part B - Verbatim */}
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed mb-6">
                Where a GST treatment issue, prior-period error or broader tax
                question requires separate advice, that work can be scoped
                appropriately rather than treated as routine BAS preparation.
              </p>

              <div className="space-y-3 pt-2 border-t border-teal-200/60 dark:border-teal-800/40">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                  <ExclamationCircleOutlined className="text-amber-600 dark:text-amber-400 mt-1 shrink-0 text-xs" />
                  <span>
                    Complex GST treatments (e.g. margin scheme, international
                    supplies, property)
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                  <ExclamationCircleOutlined className="text-amber-600 dark:text-amber-400 mt-1 shrink-0 text-xs" />
                  <span>
                    Prior-period error rectification and ATO voluntary
                    disclosures
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                  <ExclamationCircleOutlined className="text-amber-600 dark:text-amber-400 mt-1 shrink-0 text-xs" />
                  <span>
                    Broader business income tax and structure planning
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 rounded-xl bg-white dark:bg-zinc-900 border border-teal-200/60 dark:border-teal-800/60 text-xs text-slate-600 dark:text-zinc-400">
              <strong className="text-slate-900 dark:text-white block mb-1">
                Transparent Professional Practice
              </strong>
              Routine compliance is kept cost-effective, while specialist
              advisory matters are clearly identified before any additional work
              is undertaken.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
