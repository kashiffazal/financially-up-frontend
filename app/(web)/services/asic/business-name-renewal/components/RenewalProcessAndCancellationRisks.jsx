"use client";

import React from "react";
import { Tag, Alert } from "antd";
import {
  CreditCardOutlined,
  ExclamationCircleOutlined,
  ClockCircleOutlined,
  HistoryOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";

/**
 * RenewalProcessAndCancellationRisks Component
 * ============================================
 * Section 3 of Business Name Renewal (/services/asic/business-name-renewal/):
 * 1. "How does ASIC business name renewal work?"
 * 2. "What happens if a business name is not renewed on time?"
 *
 * Implements 100% complete, verbatim content from Page 4 of '7th Pillar ASIC.docx'.
 * Explains ASIC Connect workflow, statutory 2-month cancellation notice, and 6-month restoration period.
 */
export default function RenewalProcessAndCancellationRisks() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subsection 1: How does ASIC business name renewal work? */}
        <div className="w-full mb-16 sm:mb-20">
          <div className="text-center mb-10">
            <Tag color="green" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
              Portal Lodgement & Execution
            </Tag>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              How does ASIC business name renewal work?
            </h2>
          </div>

          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-zinc-800 shadow-xs space-y-6">
            <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
              ASIC provides a direct business name renewal process and also allows renewal through ASIC Connect. Once the renewal is available, the holder can choose a one-year or three-year period, review the information, make the required declaration and pay the ASIC renewal fee. ASIC updates the Business Names Register with the next renewal date after payment is received and processed.
            </p>

            {/* 3 Process Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-950/70 border border-slate-200/60 dark:border-zinc-800">
                <CreditCardOutlined className="text-emerald-600 dark:text-emerald-400 text-lg mb-2 block" />
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Period Selection
                </h4>
                <p className="text-xs text-slate-500 dark:text-zinc-400 mt-1 leading-relaxed">
                  Choose 1-year or 3-year term directly according to commercial plans.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-950/70 border border-slate-200/60 dark:border-zinc-800">
                <SafetyCertificateOutlined className="text-teal-600 dark:text-teal-400 text-lg mb-2 block" />
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Holder Declaration
                </h4>
                <p className="text-xs text-slate-500 dark:text-zinc-400 mt-1 leading-relaxed">
                  Review recorded information and confirm ongoing eligibility.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-950/70 border border-slate-200/60 dark:border-zinc-800">
                <ClockCircleOutlined className="text-blue-600 dark:text-blue-400 text-lg mb-2 block" />
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Register Updated
                </h4>
                <p className="text-xs text-slate-500 dark:text-zinc-400 mt-1 leading-relaxed">
                  Next renewal date logged on ASIC Business Names Register instantly upon payment.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Subsection 2: What happens if a business name is not renewed on time? */}
        <div className="w-full">
          <div className="text-center mb-10">
            <Tag color="volcano" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
              Cancellation Risks & Statutory Windows
            </Tag>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              What happens if a business name is not renewed on time?
            </h2>
          </div>

          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-zinc-800 shadow-xs space-y-6 mb-8">
            <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
              If the renewal is not completed, ASIC may begin the process of cancelling the business name. ASIC states that the most common reason it cancels a business name is failure to renew by the due date. If ASIC sends a notice of intention to cancel for non-renewal, the holder can generally stop the cancellation by renewing within two months of receiving the notice.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
              If ASIC has cancelled a business name because it was not renewed, the holder can ask ASIC to restore it within six months of cancellation. The name cannot be registered by someone else for at least six months after cancellation. Once the restoration period has ended, a fresh registration may only be possible if the name remains available, so missed renewals should be addressed promptly.
            </p>

            {/* 2 Statutory Milestones */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/40">
                <div className="flex items-center gap-2 mb-2">
                  <ClockCircleOutlined className="text-amber-600 dark:text-amber-400" />
                  <h4 className="text-sm font-bold text-amber-950 dark:text-amber-300 m-0">
                    2 Months to Stop Cancellation
                  </h4>
                </div>
                <p className="text-xs text-slate-600 dark:text-zinc-300 m-0 leading-relaxed">
                  Renew within two months of receiving ASIC’s intention-to-cancel notice to prevent formal deregistration.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-rose-50/70 dark:bg-rose-950/20 border border-rose-200/80 dark:border-rose-900/40">
                <div className="flex items-center gap-2 mb-2">
                  <HistoryOutlined className="text-rose-600 dark:text-rose-400" />
                  <h4 className="text-sm font-bold text-rose-950 dark:text-rose-300 m-0">
                    6 Months Restoration Window
                  </h4>
                </div>
                <p className="text-xs text-slate-600 dark:text-zinc-300 m-0 leading-relaxed">
                  Request restoration within 6 months of cancellation while third parties are legally blocked from registering the title.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
