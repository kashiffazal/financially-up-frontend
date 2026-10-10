"use client";

import React from "react";
import { Tag } from "antd";
import {
  BankOutlined,
  PercentageOutlined,
  SafetyCertificateOutlined,
  InfoCircleOutlined,
  WarningOutlined,
  DesktopOutlined,
  FileProtectOutlined,
} from "@ant-design/icons";

/**
 * PaymentPlansAndThreshold Component
 * ==================================
 * Section 2: ATO payment plans and the $200,000 online threshold
 * Verbatim text from Page 2 of '11th Pillar ATO Help.docx'.
 *
 * Covers:
 * - The $200,000 self-service threshold for eligible taxpayers and tax agents.
 * - Compounding General Interest Charge (GIC).
 * - Key Statutory Law Update: Non-deductibility of GIC from 1 July 2025.
 */
export default function PaymentPlansAndThreshold() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="blue" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            ATO Policy & Rules
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            ATO payment plans and the $200,000 online threshold
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            As at September 2026, the ATO states that eligible taxpayers with debt of $200,000 or less may be able to set up a payment plan through its online services. Larger debts, or cases that cannot be handled through the self-service option, generally require direct contact with the ATO.
          </p>
        </div>

        {/* 2-Column Focus Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Card 1: The $200,000 Threshold & Agent Access */}
          <div className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/50 border border-blue-200/60 dark:border-blue-800/60 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <DesktopOutlined className="text-2xl" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-blue-700 dark:text-blue-300 uppercase tracking-wide">
                    Self-Service vs Manual
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    Online Threshold & Portal Access
                  </h3>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                <p>
                  As at September 2026, the ATO states that eligible taxpayers with debt of $200,000 or less may be able to set up a payment plan through its online services. Larger debts, or cases that cannot be handled through the self-service option, generally require direct contact with the ATO.
                </p>
                <p>
                  Registered tax agents can use Online services for agents for eligible client payment plans of $200,000 or less where there is no existing plan; some payment methods remain client-only.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100 dark:border-zinc-800 flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-zinc-400">
              <InfoCircleOutlined className="text-blue-500" />
              <span>Debts over $200,000 require formal agent negotiations and detailed financial disclosures.</span>
            </div>
          </div>

          {/* Card 2: Compounding GIC & Statutory Reform */}
          <div className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-950/50 border border-amber-200/60 dark:border-amber-800/60 flex items-center justify-center text-amber-600 dark:text-amber-400">
                  <PercentageOutlined className="text-2xl" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-amber-700 dark:text-amber-300 uppercase tracking-wide">
                    Interest Compounding
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    General Interest Charge (GIC) Mechanics
                  </h3>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                <p>
                  A payment plan does not make the debt interest-free. General interest charge (GIC) generally continues to accrue on unpaid amounts and compounds daily. The ATO sets GIC rates quarterly, so a fixed rate should not be assumed.
                </p>
                <p>
                  From 1 July 2025, GIC and shortfall interest charge incurred on or after that date are not tax deductible. Earlier interest may have different treatment.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100 dark:border-zinc-800 flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-zinc-400">
              <WarningOutlined className="text-amber-500" />
              <span>GIC compounds daily on overdue tax balances until fully cleared.</span>
            </div>
          </div>
        </div>

        {/* Critical Statutory Alert: 1 July 2025 Reform */}
        <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-red-500/10 via-red-500/5 to-transparent border border-red-500/30 dark:border-red-500/20">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-red-500/20 text-red-600 dark:text-red-400 shrink-0">
              <FileProtectOutlined className="text-2xl" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-red-100 dark:bg-red-950/70 border border-red-200 dark:border-red-800 text-xs font-bold text-red-700 dark:text-red-300 mb-2">
                Statutory Change In Force
              </div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1.5">
                GIC Is No Longer Tax Deductible (From 1 July 2025)
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed">
                From 1 July 2025, General Interest Charge (GIC) and Shortfall Interest Charge (SIC) incurred on or after that date are <strong>not tax deductible</strong>. Prior to this date, taxpayers could often claim GIC as a deduction, softening the net impact. Under current legislation, every dollar of interest is paid from post-tax cash, making rapid debt reduction and structured plans far more critical.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
