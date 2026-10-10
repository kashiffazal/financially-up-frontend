"use client";

import React from "react";
import { Tag } from "antd";
import {
  LineChartOutlined,
  CheckCircleOutlined,
  SafetyCertificateOutlined,
  SolutionOutlined,
} from "@ant-design/icons";

/**
 * AnnualPropertyAccountingAndTaxWork Component
 * ============================================
 * Implements verbatim SEO content from Page 4 of 9th Pillar SMSF.docx:
 * - Annual SMSF property accounting and tax work (8-point workflow)
 * - Objective 30 June market valuation standards and independent valuation rules
 */
export default function AnnualPropertyAccountingAndTaxWork() {
  const propertyTasks = [
    {
      title: "Reconcile rent received to bank statements and property-manager statements",
      desc: "Matching gross tenant rental income and property manager disbursement statements against fund bank ledgers.",
    },
    {
      title: "Classify property expenses according to their accounting and tax treatment",
      desc: "Delineating deductible revenue outgoings from capital improvements, council rates, water, and insurance.",
    },
    {
      title: "Separate loan principal, interest and other borrowing-related amounts where borrowing is permitted",
      desc: "Ensuring loan repayments are correctly bifurcated between deductible interest and liability principal reductions.",
    },
    {
      title: "Review purchase, sale and settlement records",
      desc: "Verifying adjustment sheets, conveyancing invoices, and capital acquisition records.",
    },
    {
      title: "Maintain cost-base and capital expenditure records for a future disposal",
      desc: "Tracking initial cost base, title acquisition fees, and subsequent capital improvements for future CGT calculations.",
    },
    {
      title: "Record capital works or depreciating-asset information where relevant",
      desc: "Maintaining Division 43 construction write-off schedules and Division 40 plant & equipment asset registers.",
    },
    {
      title: "Support the annual market-value figure with objective and supportable evidence",
      desc: "Collating annual valuation documentation satisfying ATO market valuation guidelines for 30 June reporting.",
    },
    {
      title: "Prepare property schedules and evidence for the independent SMSF auditor and annual return",
      desc: "Assembling an organized workpaper pack with lease agreements, tenant receipts, and valuation support.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="green" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Annual Compliance Workflow
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Annual SMSF property accounting and tax work
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Every income year, an SMSF generally needs financial statements, an independent audit and an SMSF annual return. Property increases the supporting work because income and expenses must be traceable, the asset must be reported at market value and the auditor must be able to review objective evidence.
          </p>
        </div>

        {/* 8-Point Property Workflow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-14">
          {propertyTasks.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-2xs hover:border-emerald-400/60 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                {idx + 1}
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Valuation Methodology Banner */}
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/40 flex items-center justify-center shrink-0">
              <LineChartOutlined className="text-3xl text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">
                Annual Market Valuation Rules for Trustees
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Trustees are responsible for valuing all fund assets at market value when preparing the fund&apos;s accounts and statements. A qualified independent valuation is not automatically required every year, but the valuation must be based on objective and supportable data, reassessed annually and supplied to the auditor. Independent valuation may be appropriate when the property is a significant fund asset or the valuation is complex.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
