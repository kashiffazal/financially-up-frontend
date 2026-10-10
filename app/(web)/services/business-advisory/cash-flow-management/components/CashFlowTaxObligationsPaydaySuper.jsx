"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  FileProtectOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  AlertOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";

/**
 * CashFlowTaxObligationsPaydaySuper Component
 * ===========================================
 * Section 6: Cash flow and tax obligations.
 * Source: 12th Pillar Business Advisory.docx (Page 2: Cash Flow Management)
 *
 * Implements 100% complete, verbatim SEO text detailing statutory tax timing,
 * the Payday Super transition taking effect from 1 July 2026 (7-day rule),
 * and the separation between cash forecasting and overdue ATO compliance.
 */
export default function CashFlowTaxObligationsPaydaySuper() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="red"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Statutory Liquidity &amp; Reform
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Cash Flow and Tax Obligations
          </h2>
        </div>

        {/* 2 Primary Verbatim Text Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Statutory Cash Pressure & Payday Super */}
          <div className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400 mb-4">
                <FileProtectOutlined className="text-base" />
                <span>Statutory Outflows &amp; Timetables</span>
              </div>

              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal mb-4">
                Tax and super obligations can create significant cash pressure
                if they are omitted from the forecast. Depending on the
                business, planning may need to allow for GST, PAYG withholding,
                PAYG instalments, income tax and employee super. From 1 July
                2026, employers generally need to make super guarantee
                contributions for employee earnings on the Payday Super timetable.
                The ATO says the fund must generally receive the contribution
                within seven business days after payday, with exceptions
                including some new employees. The business’s actual obligations
                and dates should be checked against its entity, payroll and
                reporting circumstances.
              </p>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-200 dark:border-zinc-800 flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-zinc-400">
              <ClockCircleOutlined className="text-rose-600 dark:text-rose-400" />
              <span>Super transitions from quarterly to 7 business days post-payday.</span>
            </div>
          </div>

          {/* Card 2: Overdue Lodgements Separation */}
          <div className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-4">
                <AlertOutlined className="text-base" />
                <span>Overdue Lodgements &amp; Debt Treatment</span>
              </div>

              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal mb-4">
                Where tax or BAS obligations are already overdue, a forecast can
                support planning but does not resolve the outstanding compliance
                matter. The overdue lodgment or debt still needs to be addressed
                separately.
              </p>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-200 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="text-xs text-slate-500 dark:text-zinc-400">
                Requires direct ATO payment arrangement or lodgement
              </span>
              <Link
                href="/services/ato-help"
                className="text-xs font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
              >
                <span>View ATO Help Services</span>
                <ArrowRightOutlined className="text-[10px]" />
              </Link>
            </div>
          </div>
        </div>

        {/* Payday Super 2026 Visual Diagnostic Box */}
        <div className="bg-gradient-to-r from-rose-500/10 via-amber-500/10 to-emerald-500/10 dark:from-rose-950/30 dark:via-zinc-950 dark:to-emerald-950/30 rounded-2xl p-7 sm:p-9 border border-rose-200/80 dark:border-rose-900/40">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-800 dark:text-rose-400 mb-3">
            <CalendarOutlined />
            <span>Payday Super Implementation Roadmap • Starting 1 July 2026</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            <div className="bg-white/80 dark:bg-zinc-900/80 rounded-xl p-5 border border-slate-200/80 dark:border-zinc-800">
              <div className="text-xs font-bold uppercase text-slate-500 dark:text-zinc-400 mb-1">
                Phase 1: Current Rule
              </div>
              <div className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                Quarterly Super Deadlines
              </div>
              <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed m-0 font-normal">
                Super is currently paid 28 days after each quarter-end, creating large seasonal quarterly cash outlays.
              </p>
            </div>

            <div className="bg-white/80 dark:bg-zinc-900/80 rounded-xl p-5 border border-rose-300 dark:border-rose-800/60 shadow-xs">
              <div className="text-xs font-bold uppercase text-rose-600 dark:text-rose-400 mb-1">
                Phase 2: From 1 July 2026
              </div>
              <div className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                Payday Super Timetable
              </div>
              <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed m-0 font-normal">
                Super contributions must generally reach the fund within 7 business days of each payroll cycle.
              </p>
            </div>

            <div className="bg-white/80 dark:bg-zinc-900/80 rounded-xl p-5 border border-emerald-300 dark:border-emerald-800/60 shadow-xs">
              <div className="text-xs font-bold uppercase text-emerald-600 dark:text-emerald-400 mb-1">
                Strategic Impact
              </div>
              <div className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                Continuous Weekly Liquidity
              </div>
              <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed m-0 font-normal">
                Forecast models must synchronize weekly and fortnightly payroll cycles to prevent accidental SG shortfall penalties.
              </p>
            </div>
          </div>
        </div>

        {/* Action Row */}
        <div className="mt-12 text-center">
          <Link href="/book-an-appointment">
            <Button
              type="primary"
              size="large"
              icon={<ArrowRightOutlined />}
              iconPlacement="end"
              className="rounded-xl font-bold px-7 h-12 shadow-md shadow-brand-primary/20"
            >
              Align Cash Flow with Tax Deadlines
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
