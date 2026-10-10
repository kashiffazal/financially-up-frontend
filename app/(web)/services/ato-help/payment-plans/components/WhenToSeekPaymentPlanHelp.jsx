"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  ClockCircleOutlined,
  StopOutlined,
  ExclamationCircleOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * WhenToSeekPaymentPlanHelp Component
 * ===================================
 * Section 2: When should you seek help?
 * Verbatim text from Page 7 of '11th Pillar ATO Help.docx'.
 *
 * Explains early engagement timing, avoiding unaffordable promises on the phone,
 * and cross-links to Overdue Tax Returns and ATO Debt Help.
 */
export default function WhenToSeekPaymentPlanHelp() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="amber" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Timely Action & Strategy
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            When should you seek help?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Contact the ATO or your accountant before the due date if you know you cannot pay in full. If the debt is already overdue, early review can help clarify notices, confirm the balance and assess a sustainable arrangement. Delay may increase interest and the risk of recovery action.
          </p>
        </div>

        {/* 2-Column Strategic Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Column 1: Early Pre-Due-Date Action */}
          <div className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-5">
                <ClockCircleOutlined className="text-2xl" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                Act Before Due Dates Expire
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-4">
                Proactively requesting a plan before a debt defaults maintains a positive compliance record on ATO client profiling systems.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                If the debt is already overdue, early review can help clarify notices, confirm the balance and assess a sustainable arrangement. Delay may increase interest and the risk of recovery action.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800 text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
              <CheckCircleOutlined /> Preserves ATO Goodwill
            </div>
          </div>

          {/* Column 2: Avoid Unrealistic Promises */}
          <div className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200/60 dark:border-amber-800/60 flex items-center justify-center text-amber-600 dark:text-amber-400 mb-5">
                <StopOutlined className="text-2xl" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                Never Agree to an Unaffordable Instalment
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-4">
                Do not promise an instalment simply to end a difficult conversation. First test what remains after wages, suppliers, essential living costs, finance commitments and upcoming tax.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                A plan that fails because the instalments were too high may make later negotiations harder and can contribute to firmer debt action where defaults are repeated.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800 text-xs font-semibold text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
              <ExclamationCircleOutlined /> Realistic Cash-Flow Testing Required
            </div>
          </div>
        </div>

        {/* Cross-Link Cards to Overdue Returns & ATO Debt Help */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link
            href="/services/ato-help/overdue-tax-returns"
            className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 hover:border-emerald-500 dark:hover:border-emerald-500 shadow-sm transition-all flex items-center justify-between group"
          >
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                Unlodged Income Tax Returns?
              </h4>
              <p className="text-xs text-slate-500 dark:text-zinc-400 mt-1">
                If outstanding returns prevent the debt from being finalized, lodge them first
              </p>
            </div>
            <ArrowRightOutlined className="text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
          </Link>

          <Link
            href="/services/ato-help/ato-debt"
            className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 hover:border-emerald-500 dark:hover:border-emerald-500 shadow-sm transition-all flex items-center justify-between group"
          >
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                Facing Escalated Debt Recovery?
              </h4>
              <p className="text-xs text-slate-500 dark:text-zinc-400 mt-1">
                For broader debt composition, DPNs or recovery concerns, see ATO debt help
              </p>
            </div>
            <ArrowRightOutlined className="text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
      </div>
    </section>
  );
}
