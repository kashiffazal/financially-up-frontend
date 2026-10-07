"use client";

import React from "react";
import { Tag } from "antd";
import {
  CloudUploadOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  CheckCircleOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

/**
 * WhatIsSingleTouchPayroll Component
 * Covers 'What Is Single Touch Payroll?' and 'When Is STP Reporting Required?'
 * from Page 5 of 5th Pillar BAS, GST & Payroll.docx.
 */
export default function WhatIsSingleTouchPayroll() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Part 1: What Is Single Touch Payroll? */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-6">
            <Tag color="blue" className="brand-section-tag font-bold tracking-wider uppercase text-xs">
              <CloudUploadOutlined className="mr-1.5" />
              ATO Reporting System
            </Tag>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              What Is Single Touch Payroll?
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Single Touch Payroll, or STP, is the ATO reporting system used by employers to report payroll information such as salaries and wages, PAYG withholding and super-related information through enabled payroll software. For most employers, STP reporting occurs as part of the payroll process.
            </p>

            <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              STP does not calculate every employer obligation for you. Accurate reporting still depends on correct employee setup, payroll data, classifications and payroll processing.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200 dark:border-zinc-700 shadow-xs space-y-4">
              <div className="flex items-center gap-3 text-brand-primary dark:text-emerald-400">
                <ExclamationCircleOutlined className="text-2xl" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Reporting vs Calculation
                </h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Single Touch Payroll is the digital communication protocol connecting your payroll platform directly with the Australian Taxation Office. It does not replace accurate award setup, correct tax withholding scales, or super rules.
              </p>
            </div>
          </div>
        </div>

        {/* Part 2: When Is STP Reporting Required? */}
        <div className="pt-12 border-t border-slate-200/80 dark:border-zinc-800">
          <div className="max-w-3xl mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">
              When Is STP Reporting Required?
            </h3>
            <p className="text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
              Employers generally need to lodge STP pay-event information on or before the relevant payday, subject to the rules and concessions that apply to their circumstances. At the end of the financial year, employers generally make an STP finalization declaration so employees can see their income statement as tax ready.
            </p>
            <p className="text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              The standard finalization due date for employees is generally 14 July, although different rules or concessions can apply in specific circumstances. If payroll information is later corrected, the STP data may also need to be updated and re-finalized.
            </p>
          </div>

          {/* Key Timelines */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-200/80 dark:border-zinc-700/80 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                <ClockCircleOutlined className="text-xl" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                  On or Before Every Payday
                </h4>
                <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  Each recurring pay run (weekly, fortnightly, or monthly) must trigger an STP pay event file lodged to the ATO on or prior to the date salaries are disbursed.
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-200/80 dark:border-zinc-700/80 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                <CalendarOutlined className="text-xl" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                  Annual 14 July Finalization
                </h4>
                <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  Year-end finalization declaration confirming all employee year-to-date figures are complete, allowing employees to access tax-ready pre-fill for tax returns.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
