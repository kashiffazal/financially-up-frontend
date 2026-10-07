"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  SyncOutlined,
  SwapOutlined,
  FileTextOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

/**
 * PaygReportingAndDistinctions Component
 * Covers 'PAYG withholding and payroll reporting', 'PAYG withholding vs PAYG instalments',
 * and 'Activity statements and PAYG withholding' from Page 8 of 5th Pillar BAS, GST & Payroll.docx.
 */
export default function PaygReportingAndDistinctions() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950/70 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <Tag color="blue" className="brand-section-tag font-bold tracking-wider uppercase text-xs mb-3">
            <SyncOutlined className="mr-1.5" />
            Reporting Systems
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            How PAYG Withholding Integrates with Your Business
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            PAYG withholding sits at the intersection of Single Touch Payroll, general ledger bookkeeping, and ATO activity statements. Understanding its place prevents reporting mismatches.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          
          {/* Card 1: PAYG withholding and payroll reporting */}
          <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                <SyncOutlined className="text-lg" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                PAYG withholding and payroll reporting
              </h3>

              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                PAYG withholding does not operate in isolation. Employers generally report payroll information through Single Touch Payroll as each pay event is reported, while the withholding liability is also reflected on the relevant activity statement. These systems should reconcile to the payroll ledger and year-to-date records.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-100 dark:border-zinc-800/80 space-y-3">
              <p className="text-xs text-slate-600 dark:text-zinc-400">
                Our{" "}
                <Link
                  href="/services/bas-payroll/stp"
                  className="font-semibold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
                >
                  Single Touch Payroll page
                  <ArrowRightOutlined className="text-[10px]" />
                </Link>{" "}
                explains STP reporting in more detail.
              </p>
              <p className="text-xs text-slate-600 dark:text-zinc-400">
                If you need recurring payroll processing rather than PAYG compliance work alone, see{" "}
                <Link
                  href="/services/bas-payroll/payroll-services"
                  className="font-semibold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
                >
                  Payroll Services
                  <ArrowRightOutlined className="text-[10px]" />
                </Link>
                .
              </p>
            </div>
          </div>

          {/* Card 2: PAYG withholding vs PAYG instalments */}
          <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                <SwapOutlined className="text-lg" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                PAYG withholding vs PAYG instalments
              </h3>

              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                PAYG withholding and PAYG instalments are different systems. PAYG withholding relates to amounts withheld from payments made to employees and certain other payees. PAYG instalments are prepayments towards the taxpayer’s own income tax on business and investment income.
              </p>

              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                This distinction matters because a business can have both obligations at the same time. If your main issue is a PAYG instalment appearing on an Instalment Activity Statement, see our{" "}
                <Link
                  href="/services/bas-payroll/ias"
                  className="font-semibold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
                >
                  IAS lodgement service
                  <ArrowRightOutlined className="text-[10px]" />
                </Link>
                . A PAYG instalment accountant can review the instalment reporting separately from employer withholding obligations.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-100 dark:border-zinc-800/80 flex items-center gap-2 text-xs text-purple-600 dark:text-purple-400 font-medium">
              <ExclamationCircleOutlined className="text-sm shrink-0" />
              <span>Two separate ATO systems reporting distinct tax liabilities.</span>
            </div>
          </div>

          {/* Card 3: Activity statements and PAYG withholding */}
          <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <FileTextOutlined className="text-lg" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Activity statements and PAYG withholding
              </h3>

              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Withheld amounts are generally reported to the ATO through the activity statement issued for the relevant reporting period. Depending on the business’s registrations and reporting cycle, the statement may be a BAS or IAS. The due date is shown on the activity statement and can vary according to reporting cycle and agent arrangements.
              </p>

              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Financially Up can coordinate PAYG withholding figures with BAS lodgement where relevant. Our{" "}
                <Link
                  href="/services/bas-payroll/bas-lodgement"
                  className="font-semibold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
                >
                  BAS Lodgement page
                  <ArrowRightOutlined className="text-[10px]" />
                </Link>{" "}
                covers broader activity statement preparation including GST.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-100 dark:border-zinc-800/80 flex items-center gap-2 text-xs text-blue-600 dark:text-blue-400 font-medium">
              <CheckCircleOutlined className="text-sm shrink-0" />
              <span>Accurate coordination between W1/W2 labels and STP pay event records.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
