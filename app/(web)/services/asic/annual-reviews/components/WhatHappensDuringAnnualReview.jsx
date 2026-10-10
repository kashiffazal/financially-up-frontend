"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button, Alert } from "antd";
import {
  FileSearchOutlined,
  DollarOutlined,
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  ClockCircleOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

/**
 * WhatHappensDuringAnnualReview Component
 * =======================================
 * Section 1 of ASIC Annual Review Service (/services/asic/annual-reviews/):
 * 1. "What happens during an ASIC annual review?"
 * 2. 1. Check the company details on the annual statement
 * 3. 2. Pay the annual review fee
 * 4. 3. Address the solvency resolution
 *
 * Implements 100% complete, verbatim content from Page 9 of '7th Pillar ASIC.docx'.
 * Responsive 3-pillar breakdown of core statutory obligations with due date indicators.
 */
export default function WhatHappensDuringAnnualReview() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Three Core Annual Obligations
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What happens during an ASIC annual review?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            ASIC sends an annual statement to registered companies, generally soon after the annual review date. The statement shows key details ASIC currently holds about the company and includes the annual review fee. The company should review the information rather than simply paying the invoice and filing the statement away.
          </p>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
            ASIC identifies three core annual-review obligations: pay the annual review fee by the due date, check and update the company details where necessary, and pass a solvency resolution unless an exception applies because the company has lodged a financial report with ASIC in the previous 12 months.
          </p>
        </div>

        {/* 3 Core Obligations Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Obligation 1: Check Details */}
          <div className="rounded-3xl p-7 sm:p-8 bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between hover:shadow-lg transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center text-lg">
                  <FileSearchOutlined className="text-emerald-600 dark:text-emerald-400" />
                </div>
                <span className="text-xs font-extrabold text-slate-400 dark:text-zinc-500 uppercase tracking-widest">
                  Step 01
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                1. Check the company details on the annual statement
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-3">
                The annual statement can include the company&apos;s addresses, officeholders, share structure and members. These details should be compared with the company&apos;s current records. If the information is wrong because a change occurred earlier, the company should not wait for the annual review to treat that as the effective date of the change.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                ASIC states that company details generally need to be updated within 28 days of the underlying change. If you find an issue during the annual review, our{" "}
                <Link href="/services/asic/company-changes" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                  Company Changes service
                </Link>{" "}
                can help with the relevant update, including address, director and share information where appropriate.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400 font-medium">
              Verify: Addresses, Officeholders & Shares
            </div>
          </div>

          {/* Obligation 2: Pay Fee */}
          <div className="rounded-3xl p-7 sm:p-8 bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between hover:shadow-lg transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-teal-50 dark:bg-teal-950/60 border border-teal-100 dark:border-teal-800/40 flex items-center justify-center text-lg">
                  <DollarOutlined className="text-teal-600 dark:text-teal-400" />
                </div>
                <span className="text-xs font-extrabold text-slate-400 dark:text-zinc-500 uppercase tracking-widest">
                  Step 02
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                2. Pay the annual review fee
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-3">
                The annual review fee is shown on the ASIC annual statement. ASIC says the due date is usually two months after the annual review date. The amount depends on the type of company and ASIC updates its fees from time to time, so the current invoice or ASIC fee schedule should be used rather than relying on an old figure.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                Late fees can apply if the annual review fee is not paid by the due date. A company can also face late fees for company details that were not updated within the required timeframe.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400 font-medium">
              Due Date: <strong>2 months after review date</strong>
            </div>
          </div>

          {/* Obligation 3: Solvency Resolution */}
          <div className="rounded-3xl p-7 sm:p-8 bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between hover:shadow-lg transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-800/40 flex items-center justify-center text-lg">
                  <SafetyCertificateOutlined className="text-blue-600 dark:text-blue-400" />
                </div>
                <span className="text-xs font-extrabold text-slate-400 dark:text-zinc-500 uppercase tracking-widest">
                  Step 03
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                3. Address the solvency resolution
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-3">
                Directors generally need to pass a solvency resolution within two months after the annual review date unless the company lodged a financial report with ASIC during the previous 12 months. A positive solvency resolution means the directors believe the company can pay its debts as and when they become due. The company keeps a record of a positive resolution and does not usually lodge it with ASIC.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                If the directors pass a negative solvency resolution, or do not pass the required resolution within the two-month period, ASIC requires notification within seven days. Solvency is a director responsibility and should be considered on the basis of appropriate evidence rather than treated as an administrative tick-box.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400 font-medium">
              Resolution Window: <strong>2 months (keep on record)</strong>
            </div>
          </div>
        </div>

        {/* Action Callout */}
        <div className="w-full rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-emerald-800 to-teal-900 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h3 className="text-lg sm:text-xl font-extrabold text-white mb-1">
              Annual statement arrived or review date approaching?
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed m-0 font-normal">
              If your annual statement has arrived or your company review date is approaching, Financially Up can help you check what needs attention and organize the relevant ASIC compliance steps.
            </p>
          </div>
          <Link href="/book-an-appointment" className="shrink-0 w-full sm:w-auto">
            <Button
              type="primary"
              size="large"
              icon={<ArrowRightOutlined />}
              iconPosition="end"
              className="w-full sm:w-auto rounded-xl font-bold bg-white text-emerald-950 hover:bg-emerald-50 border-none h-11"
            >
              Book an Appointment
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
