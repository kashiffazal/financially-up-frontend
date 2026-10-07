"use client";

import React from "react";
import Link from "next/link";
import { Button } from "antd";
import {
  SafetyCertificateOutlined,
  BarChartOutlined,
  ArrowRightOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

/**
 * BankReconTaxAndReporting Component
 * Covers 'Bank reconciliation and GST or tax records' and
 * 'How bank reconciliation supports management reporting'
 * from Page 8 of 4th Pillar Bookkeeping.docx.
 */
export default function BankReconTaxAndReporting() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Section 1: Bank reconciliation and GST or tax records */}
          <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <SafetyCertificateOutlined className="text-2xl" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                Bank reconciliation and GST or tax records
              </h2>

              <p className="text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                A reconciled bank account does not, by itself, prove that every transaction has the correct tax treatment. The accounting entry still needs appropriate supporting information and classification. GST treatment can depend on the transaction and the evidence held. Where determining that treatment requires interpretation or application of GST law, the work should be included expressly within a BAS or tax service scope.
              </p>

              <p className="text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Financially Up can maintain bookkeeping records and identify items that need clarification. BAS preparation, lodgement, tax-return work and tax advice can be handled within a separately agreed scope where required.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-zinc-800 flex items-center gap-3 text-xs text-slate-500 dark:text-zinc-400">
              <InfoCircleOutlined className="text-brand-primary text-base shrink-0" />
              <span>Registered Tax Agent &amp; BAS Services available under distinct client engagement scopes.</span>
            </div>
          </div>

          {/* Section 2: How bank reconciliation supports management reporting */}
          <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <BarChartOutlined className="text-2xl" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                How bank reconciliation supports management reporting
              </h2>

              <p className="text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Reports are only as useful as the underlying data. If the bank balance is not reconciled, profit and cash reports may include missing or duplicated transactions. Completing reconciliations before regular reporting can therefore improve the reliability of information used by management.
              </p>

              <p className="text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                If you need recurring profit-and-loss, balance-sheet or other internal reporting, our management reporting services can build on reconciled bookkeeping records.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-zinc-800">
              <Link href="/services/bookkeeping/reporting">
                <Button
                  type="link"
                  className="p-0 font-bold text-brand-primary dark:text-emerald-400"
                  icon={<ArrowRightOutlined />}
                  iconPosition="end"
                >
                  Explore Management Reporting Services
                </Button>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
