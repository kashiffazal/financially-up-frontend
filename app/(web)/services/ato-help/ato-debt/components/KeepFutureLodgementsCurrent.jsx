"use client";

import React from "react";
import { Tag } from "antd";
import {
  CalendarOutlined,
  CheckCircleOutlined,
  WarningOutlined,
  ToolOutlined,
  LineChartOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";

/**
 * KeepFutureLodgementsCurrent Component
 * =====================================
 * Section 5: Keep future lodgements and payments current
 * Verbatim text from Page 2 of '11th Pillar ATO Help.docx'.
 *
 * Explains why payment plans do not automatically absorb new liabilities,
 * and how addressing root cash-flow causes prevents compounding defaults.
 */
export default function KeepFutureLodgementsCurrent() {
  const rootCauses = [
    {
      title: "Inadequate Pricing & Margins",
      desc: "Gross margins failing to cover rising overheads and leaving insufficient surplus for GST and income tax remittances.",
    },
    {
      title: "Excessive Owner Drawings",
      desc: "Taking business working capital for personal use before setting aside statutory PAYG withholding and superannuation.",
    },
    {
      title: "Inaccurate Bookkeeping",
      desc: "Delayed reconciliations preventing business owners from seeing true tax liabilities until BAS or annual accounts arrive.",
    },
    {
      title: "Superannuation & Payroll Shortfalls",
      desc: "Late Super Guarantee (SGC) payments turning tax-deductible contributions into non-deductible statutory penalties.",
    },
    {
      title: "Unmonitored PAYG Instalments",
      desc: "Failing to adjust quarterly PAYG instalment rates when trading conditions drop or sudden lumpy profits occur.",
    },
    {
      title: "Weak Cash-Flow Controls",
      desc: "Operating without a separate tax savings account, resulting in GST collections being consumed in routine business cash flow.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="amber" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Sustainable Compliance
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Keep future lodgements and payments current
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A payment plan deals with an agreed debt balance. New liabilities are not automatically absorbed into that plan. Taxpayers are expected to lodge on time, pay new liabilities in full and comply with the arrangement. If new debts arise or instalments are no longer affordable, review the position before another default occurs and contact the ATO promptly.
          </p>
        </div>

        {/* 2-Column Strategic Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Column 1: The Strict Operational Rule */}
          <div className="rounded-2xl p-6 sm:p-8 bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200/60 dark:border-amber-800/60 flex items-center justify-center text-amber-600 dark:text-amber-400 mb-5">
                <CalendarOutlined className="text-2xl" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                No Automatic Absorption of Future Liabilities
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-4">
                When the ATO approves an instalment arrangement, it freezes enforcement on the existing balance on the strict condition that all ongoing tax requirements are met in full.
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                <li className="flex items-start gap-2">
                  <CheckCircleOutlined className="text-emerald-500 mt-1 shrink-0" />
                  <span>Upcoming quarterly BAS must be lodged and paid on time.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleOutlined className="text-emerald-500 mt-1 shrink-0" />
                  <span>Annual tax returns must be submitted within standard or tax-agent deadlines.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleOutlined className="text-emerald-500 mt-1 shrink-0" />
                  <span>Superannuation Guarantee payments must be transferred quarterly without default.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-zinc-700/60 text-xs font-semibold text-amber-600 dark:text-amber-400 flex items-center gap-2">
              <WarningOutlined /> If new debts arise, contact the ATO before default triggers cancellation.
            </div>
          </div>

          {/* Column 2: Verbatim Root Cause Analysis */}
          <div className="rounded-2xl p-6 sm:p-8 bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/60 dark:border-emerald-800/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-5">
                <LineChartOutlined className="text-2xl" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                Fixing the Cause, Not Just the Balance
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-4">
                This is why a debt solution must address the cause, not only the balance. Recurring shortfalls may point to pricing, drawings, payroll, GST, PAYG instalments, poor bookkeeping or weak cash-flow controls. The accounting work and the payment arrangement should tell the same story.
              </p>
              <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/60 dark:border-zinc-700 text-xs text-slate-600 dark:text-zinc-300">
                <strong>Our Holistic Approach:</strong> Financially Up does not just broker an agreement with the ATO; we restructure your accounting and cash-flow routines so you never slide into debt again.
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-zinc-700/60 text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
              <SafetyCertificateOutlined /> The accounting work and payment arrangement must align.
            </div>
          </div>
        </div>

        {/* Root Causes Mini-Grid */}
        <div className="border border-slate-200/80 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 bg-slate-50/50 dark:bg-zinc-900/40">
          <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-4">
            Common Root Causes We Address With Business Clients:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {rootCauses.map((c, i) => (
              <div key={i} className="p-4 rounded-xl bg-white dark:bg-zinc-800 border border-slate-200/60 dark:border-zinc-700">
                <h5 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-1">
                  {c.title}
                </h5>
                <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
