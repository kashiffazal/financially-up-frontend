"use client";

import React from "react";
import { Button } from "antd";
import {
  BankOutlined,
  DollarOutlined,
  CheckCircleOutlined,
  SyncOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import Link from "next/link";

/**
 * AsicVsTaxCompliance Component
 * =============================
 * Section 5: ASIC Corporate Compliance vs ATO Tax Compliance.
 *
 * Visually contrasts corporate secretarial responsibilities (ASIC) with
 * income tax reporting (ATO), illustrating why both must be kept aligned.
 *
 * Background: Lite Brand Gradient.
 */
export default function AsicVsTaxCompliance() {
  const asicFeatures = [
    "Governed by the Corporations Act 2001 and enforced by ASIC",
    "Maintains public registers of officeholders, addresses, and share capital",
    "Requires annual company review fees and formal solvency resolutions",
    "Notifies corporate changes (Form 484) within 28 days of occurrence",
    "Manages the legal existence and good standing of the Pty Ltd entity",
  ];

  const atoFeatures = [
    "Governed by the Income Tax Assessment Act and administered by the ATO",
    "Reports annual company taxable income, allowable deductions, and tax payable",
    "Manages quarterly Business Activity Statements (GST, PAYGW, and PAYGI)",
    "Issues franking account dividend statements to company shareholders",
    "Monitors Division 7A shareholder loans and superannuation guarantee compliance",
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-800/60 mb-4">
            <SyncOutlined className="text-teal-600 dark:text-teal-400 text-xs sm:text-sm" />
            <span className="text-xs font-semibold text-teal-800 dark:text-teal-300 tracking-wide uppercase">
              Distinct Regulatory Regimes
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            ASIC Compliance vs Company Tax Compliance
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
            An ASIC filing records corporate legal information; it does not determine the tax treatment of the underlying transaction. A company can be fully tax-compliant with the ATO while still having overdue corporate updates with ASIC.
          </p>
        </div>

        {/* 2-Column Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left: ASIC Corporate Compliance */}
          <div className="p-7 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/50 flex items-center justify-center">
                    <BankOutlined className="text-teal-600 dark:text-teal-400 text-lg" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-teal-600 dark:text-teal-400 tracking-wider uppercase">
                      Corporate Governance
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0">
                      ASIC Corporate Compliance
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300">
                  ASIC Register
                </span>
              </div>

              <ul className="space-y-3.5 mb-6">
                {asicFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                    <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400">
              Focus: Legal structure, registered records, solvency & officeholder authority.
            </div>
          </div>

          {/* Right: ATO Company Tax Compliance */}
          <div className="p-7 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 flex items-center justify-center">
                    <DollarOutlined className="text-emerald-600 dark:text-emerald-400 text-lg" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase">
                      Tax & Accounting
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0">
                      ATO Company Tax Compliance
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300">
                  ATO Tax Returns
                </span>
              </div>

              <ul className="space-y-3.5 mb-6">
                {atoFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                    <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400">
              Focus: Income calculation, capital allowances, franking credits & statutory tax payments.
            </div>
          </div>
        </div>

        {/* Integration Callout */}
        <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
          <div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white m-0">
              Ensure Both Registers Stay Synchronised
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 m-0 mt-1">
              Financially Up connects your ASIC registered agent administration directly with your company tax compliance, eliminating discrepancies between corporate filings and tax returns.
            </p>
          </div>
          <Link href="/book-an-appointment" className="shrink-0">
            <Button
              type="primary"
              size="large"
              icon={<ArrowRightOutlined />}
              iconPosition="end"
              className="h-11 px-6 rounded-xl font-semibold shadow-md shadow-brand-primary/20"
            >
              Discuss Corporate Setup
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
