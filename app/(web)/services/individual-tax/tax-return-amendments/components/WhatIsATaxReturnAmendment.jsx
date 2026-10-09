"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  FileTextOutlined,
  ExclamationCircleOutlined,
  QuestionCircleOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";

/**
 * WhatIsATaxReturnAmendment Component
 * ===================================
 * Section 1: What is a tax return amendment?
 * Distinguishes an amendment from an overdue return and an objection.
 * Features 100% complete, verbatim content from Page 12 of the client document.
 */
export default function WhatIsATaxReturnAmendment() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Correction Framework
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Is a Tax Return Amendment?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A tax return amendment is a request to change information in a
            return that has already been lodged and processed. It may be needed
            to correct an error, include omitted information or replace an
            amount when more accurate information becomes available.
          </p>
        </div>

        {/* 3 Distinctions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-12">
          {/* Card 1: Tax Return Amendment */}
          <div className="p-7 rounded-3xl bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-800/60 flex flex-col justify-between shadow-2xs">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-900 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-5">
                <FileTextOutlined className="text-xl" />
              </div>
              <Tag
                color="green"
                className="font-bold text-2xs uppercase tracking-wider mb-2"
              >
                Processed Return
              </Tag>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Tax Return Amendment
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                A tax return amendment is a request to change information in a
                return that has already been lodged and processed. It may be
                needed to correct an error, include omitted information or
                replace an amount when more accurate information becomes
                available.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-emerald-200/60 dark:border-emerald-800/40">
              <span className="text-2xs font-semibold text-emerald-800 dark:text-emerald-300">
                Core focus: Information correction
              </span>
            </div>
          </div>

          {/* Card 2: Overdue / Unlodged Return */}
          <div className="p-7 rounded-3xl bg-slate-50/70 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 flex flex-col justify-between shadow-2xs">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center text-amber-500 mb-5">
                <ExclamationCircleOutlined className="text-xl" />
              </div>
              <Tag
                color="orange"
                className="font-bold text-2xs uppercase tracking-wider mb-2"
              >
                Unprocessed / Missing
              </Tag>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Overdue or Unlodged Return
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                An amendment is different from an overdue return. An overdue or
                unlodged return has not yet been lodged, whereas an amendment
                corrects a return that has already been processed.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-zinc-700/60">
              <Link href="/services/individual-tax/prior-year-overdue-tax-returns">
                <Button
                  type="link"
                  className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1 h-auto text-xs"
                  icon={<ArrowRightOutlined className="text-xs" />}
                  iconPlacement="end"
                >
                  Prior-Year &amp; Overdue Service
                </Button>
              </Link>
            </div>
          </div>

          {/* Card 3: Formal Objection */}
          <div className="p-7 rounded-3xl bg-slate-50/70 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 flex flex-col justify-between shadow-2xs">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center text-blue-500 mb-5">
                <QuestionCircleOutlined className="text-xl" />
              </div>
              <Tag
                color="blue"
                className="font-bold text-2xs uppercase tracking-wider mb-2"
              >
                Disputed Decision
              </Tag>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Formal ATO Objection
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                It is also different from an objection. An amendment generally
                corrects information originally provided in the return. An
                objection may be relevant where you disagree with an assessment
                or another objectionable ATO decision, or where the normal
                amendment period has expired.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-zinc-700/60">
              <span className="text-2xs font-semibold text-slate-500 dark:text-zinc-400">
                Core focus: Legal dispute of ATO decision
              </span>
            </div>
          </div>
        </div>

        {/* Notice of Assessment Prerequisite Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-200/70 dark:border-zinc-700/70 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="max-w-2xl">
            <span className="font-bold text-slate-900 dark:text-white block text-sm sm:text-base mb-1">
              Prerequisite: Notice of Assessment Processing
            </span>
            The original return must generally be fully processed by the ATO
            before an amendment request can be accepted. Lodging an amendment
            while the initial return is still processing can cause processing
            delays or rejections.
          </div>
          <Link href="/book-an-appointment" className="shrink-0">
            <Button
              type="primary"
              className="brand-btn-primary font-bold text-xs sm:text-sm"
            >
              Review Your Assessment
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
