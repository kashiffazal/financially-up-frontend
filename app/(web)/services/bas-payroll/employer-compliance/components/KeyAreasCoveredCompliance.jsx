"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  FileTextOutlined,
  DollarOutlined,
  ThunderboltOutlined,
  CalendarOutlined,
  BankOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * KeyAreasCoveredCompliance Component
 * Covers 'Key areas covered in payroll compliance' from Page 10 of 5th Pillar BAS, GST & Payroll.docx.
 */
export default function KeyAreasCoveredCompliance() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950/70 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <Tag color="green" className="brand-section-tag font-bold tracking-wider uppercase text-xs mb-3">
            Core Pillars
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Key areas covered in payroll compliance
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A reliable payroll system requires alignment across multiple legislative frameworks, from Fair Work record-keeping rules to ATO reporting and state revenue offices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* 1. Payroll records and pay slips */}
          <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <FileTextOutlined className="text-lg" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Payroll records and pay slips
              </h3>

              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Good payroll compliance starts with reliable records. Employee pay details, hours where required, leave, deductions, super information and other payroll data should be recorded in a way that supports both payroll processing and later review. Pay slips must contain prescribed information and generally need to be provided within one working day of pay day.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800 flex items-center gap-2 text-xs text-emerald-700 dark:text-emerald-400 font-medium">
              <CheckCircleOutlined className="text-sm shrink-0" />
              <span>Full compliance with Fair Work Regulations 2009.</span>
            </div>
          </div>

          {/* 2. PAYG withholding and activity statements */}
          <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                <DollarOutlined className="text-lg" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                PAYG withholding and activity statements
              </h3>

              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Employers who withhold amounts from payments need to report and pay those amounts to the ATO in accordance with their reporting cycle. Payroll settings, withholding calculations and activity statement figures should therefore be capable of being reconciled.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800">
              <p className="text-xs text-slate-600 dark:text-zinc-400">
                If the issue is primarily about activity statement preparation or lodgement, Financially Up&apos;s{" "}
                <Link
                  href="/services/bas-payroll"
                  className="font-semibold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
                >
                  BAS, GST & Payroll service
                  <ArrowRightOutlined className="text-[10px]" />
                </Link>{" "}
                provides the broader compliance context.
              </p>
            </div>
          </div>

          {/* 3. Single Touch Payroll */}
          <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <ThunderboltOutlined className="text-lg" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Single Touch Payroll
              </h3>

              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                STP reports payroll information to the ATO from payroll-enabled software. Payroll changes, corrections and year-end finalization can affect what employees see in their income statements.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800">
              <p className="text-xs text-slate-600 dark:text-zinc-400">
                Businesses that need dedicated STP support can also refer to our{" "}
                <Link
                  href="/services/bas-payroll/stp"
                  className="font-semibold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
                >
                  Single Touch Payroll service
                  <ArrowRightOutlined className="text-[10px]" />
                </Link>
                .
              </p>
            </div>
          </div>

          {/* 4. Superannuation and Payday Super */}
          <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between md:col-span-2 lg:col-span-2">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                <CalendarOutlined className="text-lg" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Superannuation and Payday Super
              </h3>

              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                From 1 July 2026, Payday Super changes the timing and administration of employer super guarantee contributions. Super guarantee is calculated on qualifying earnings for each payday, and employers generally need to ensure the contribution is received by the employee&apos;s super fund within seven business days of payday, subject to applicable exceptions or extended timeframes. Payroll systems and payment processes therefore need to work together more closely than under the former quarterly model.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800">
              <p className="text-xs text-slate-600 dark:text-zinc-400">
                For businesses that want help with the operational side of contributions, our{" "}
                <Link
                  href="/services/bas-payroll/super-processing"
                  className="font-semibold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
                >
                  Super Processing service
                  <ArrowRightOutlined className="text-[10px]" />
                </Link>{" "}
                focuses on contribution processing and related administration.
              </p>
            </div>
          </div>

          {/* 5. Payroll tax and jurisdiction-specific obligations */}
          <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                <BankOutlined className="text-lg" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Payroll tax and jurisdiction-specific obligations
              </h3>

              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Payroll tax is administered by state and territory revenue authorities, not the ATO. Registration thresholds, rates, grouping rules and taxable wage definitions vary by jurisdiction. A payroll compliance review can help identify whether the payroll data needed for a payroll tax assessment is available and consistent, but the exact liability depends on the relevant state or territory rules.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800">
              <p className="text-xs text-slate-600 dark:text-zinc-400">
                For this specific area, see our{" "}
                <Link
                  href="/services/bas-payroll/payroll-tax"
                  className="font-semibold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
                >
                  Payroll Tax service
                  <ArrowRightOutlined className="text-[10px]" />
                </Link>
                .
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
