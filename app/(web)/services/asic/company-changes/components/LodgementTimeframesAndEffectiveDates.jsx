"use client";

import React from "react";
import { Tag, Alert } from "antd";
import {
  ClockCircleOutlined,
  CalendarOutlined,
  FileSearchOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

/**
 * LodgementTimeframesAndEffectiveDates Component
 * ==============================================
 * Section 2 of Change Company Details (/services/asic/company-changes/):
 * "How long do you have to update company details with ASIC?"
 *
 * Implements 100% complete, verbatim content from Page 3 of '7th Pillar ASIC.docx'.
 * Clean White alternating section with 28-day statutory deadline cards and effective date rules.
 */
export default function LodgementTimeframesAndEffectiveDates() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <Tag color="volcano" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
              Statutory Deadlines & Effective Dates
            </Tag>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              How long do you have to update company details with ASIC?
            </h2>
          </div>

          <div className="bg-slate-50 dark:bg-zinc-900/80 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-zinc-800 shadow-xs space-y-6 mb-8">
            <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
              For many common Form 484 changes, ASIC requires lodgement within 28 days after the date of change. Late fees can apply where the relevant notification is lodged after the required period.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
              The effective date matters. It should reflect what actually happened and be supported by the company’s records. If an old change was never lodged, it may be necessary to reconcile minutes, consents, registers or other documents before submitting the update.
            </p>

            {/* 3 Core Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200/70 dark:border-zinc-800">
              <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/60 dark:border-zinc-800">
                <ClockCircleOutlined className="text-amber-600 dark:text-amber-400 text-lg mb-2 block" />
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  28-Day Notification Window
                </h4>
                <p className="text-xs text-slate-500 dark:text-zinc-400 mt-1 leading-relaxed">
                  Strict deadline applies from the date the change legally took place.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/60 dark:border-zinc-800">
                <CalendarOutlined className="text-teal-600 dark:text-teal-400 text-lg mb-2 block" />
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Accurate Effective Date
                </h4>
                <p className="text-xs text-slate-500 dark:text-zinc-400 mt-1 leading-relaxed">
                  Must record the true historical date rather than an arbitrary lodgement date.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/60 dark:border-zinc-800">
                <FileSearchOutlined className="text-indigo-600 dark:text-indigo-400 text-lg mb-2 block" />
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Historical Reconciliation
                </h4>
                <p className="text-xs text-slate-500 dark:text-zinc-400 mt-1 leading-relaxed">
                  Reconcile board minutes, member consents, and registers for unlodged updates.
                </p>
              </div>
            </div>
          </div>

          <Alert
            type="warning"
            showIcon
            icon={<ExclamationCircleOutlined className="text-lg text-amber-600 dark:text-amber-400" />}
            className="rounded-2xl border border-amber-200/80 dark:border-amber-800/60 bg-amber-50/70 dark:bg-amber-950/30 p-4 sm:p-5"
            title={
              <span className="text-sm font-bold text-slate-900 dark:text-white">
                ASIC Statutory Late Lodgement Fees
              </span>
            }
            description={
              <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed m-0 mt-1 font-normal">
                ASIC applies substantial statutory late lodgement fees if notifications exceed the 28-day window ($93 if up to 1 month late, and $395 if more than 1 month late). Timely reporting protects your company from unnecessary penalties.
              </p>
            }
          />
        </div>
      </div>
    </section>
  );
}
