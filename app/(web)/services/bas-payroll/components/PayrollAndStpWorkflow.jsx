"use client";

import React from "react";
import { Button } from "antd";
import {
  TeamOutlined,
  DollarCircleOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  FieldTimeOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import Link from "next/link";

/**
 * PayrollAndStpWorkflow Component
 * ===============================
 * Section 5: Payroll, STP Phase 2 & Superannuation Guarantee.
 * Covers modern payroll processing, automated STP reporting, and super clearing house management.
 * Background: Lite Brand Gradient.
 */
export default function PayrollAndStpWorkflow() {
  const stpPoints = [
    "Full Single Touch Payroll (STP Phase 2) disaggregated wage data compliance",
    "Real-time electronic lodgement to the ATO on or before each pay day",
    "Accurate PAYG withholding tax deductions based on current tax tables",
    "End-of-year STP finalisation declarations replacing traditional payment summaries",
  ];

  const superPoints = [
    "Strict calculation of mandatory Superannuation Guarantee (SG) rates",
    "Compliance with quarterly Super Guarantee cut-off deadlines (28th of the month)",
    "Small Business Superannuation Clearing House (SBSCH) or direct software clearing",
    "Avoidance of costly ATO Superannuation Guarantee Charge (SGC) non-deductible penalties",
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 border-t border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-800/60 mb-4">
            <TeamOutlined className="text-teal-600 dark:text-teal-400 text-xs sm:text-sm" />
            <span className="text-xs font-semibold text-teal-800 dark:text-teal-300 tracking-wide uppercase">
              Employer Responsibilities
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Payroll, STP Phase 2 & Superannuation Guarantee
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
            Australian employer compliance requires precision. We ensure your payroll is processed on time, STP data is lodged with the ATO every pay run, and superannuation obligations are met without penalty.
          </p>
        </div>

        {/* 2 Major Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-12">
          {/* STP Phase 2 Column */}
          <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm hover:border-teal-500/50 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-teal-50 dark:bg-teal-950/50 border border-teal-200 dark:border-teal-800 flex items-center justify-center">
                  <SolutionOutlined className="text-2xl text-teal-600 dark:text-teal-400" />
                </div>
                <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/50 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                  STP Phase 2
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                Single Touch Payroll (STP)
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 leading-relaxed mb-6">
                Direct ATO transmission of gross salary, allowances, paid leave, overtime, and PAYG withholding every single pay cycle.
              </p>

              <div className="space-y-3 mb-8">
                {stpPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                    <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 mt-1 shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link href="/services/bas-payroll/stp" className="w-full block">
              <Button
                type="primary"
                size="large"
                icon={<ArrowRightOutlined />}
                iconPlacement="end"
                className="w-full h-12 rounded-xl font-semibold shadow-md shadow-brand-primary/20 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center"
              >
                Explore STP Reporting
              </Button>
            </Link>
          </div>

          {/* Superannuation Guarantee Column */}
          <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm hover:border-emerald-500/50 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center">
                  <DollarCircleOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />
                </div>
                <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                  Super Clearing
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                Super Guarantee Compliance
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 leading-relaxed mb-6">
                Timely electronic clearing of employee super contributions to comply with SuperStream standards and avoid non-deductible penalties.
              </p>

              <div className="space-y-3 mb-8">
                {superPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                    <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 mt-1 shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link href="/services/bas-payroll/super-processing" className="w-full block">
              <Button
                type="primary"
                size="large"
                icon={<ArrowRightOutlined />}
                iconPlacement="end"
                className="w-full h-12 rounded-xl font-semibold shadow-md shadow-brand-primary/20 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center"
              >
                Explore Super Processing
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
