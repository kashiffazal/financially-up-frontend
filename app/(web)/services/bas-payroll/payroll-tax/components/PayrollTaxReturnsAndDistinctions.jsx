"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  CalendarOutlined,
  SwapOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";

/**
 * PayrollTaxReturnsAndDistinctions Component
 * Covers 'Payroll tax returns and annual reconciliation' and 'Payroll tax vs PAYG withholding'
 * from Page 9 of 5th Pillar BAS, GST & Payroll.docx.
 */
export default function PayrollTaxReturnsAndDistinctions() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          
          {/* Card 1: Payroll tax returns and annual reconciliation */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 flex items-center justify-center">
                <CalendarOutlined className="text-lg" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Payroll tax returns and annual reconciliation
              </h3>

              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Registered employers may have periodic return and payment obligations as well as an annual reconciliation, depending on the jurisdiction and the size of the liability. The exact lodgement dates and return frequency should be checked with the relevant state or territory revenue office rather than assumed to be the same across Australia.
              </p>

              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Our payroll tax return services can include compiling taxable wage categories, reconciling them to payroll and general ledger records, preparing return figures and identifying differences that need investigation before lodgement.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-zinc-700/80 flex items-center gap-2.5 text-xs text-purple-700 dark:text-purple-400 font-medium">
              <FileDoneOutlined className="text-base shrink-0" />
              <span>Full end-of-year annual reconciliation across all operating states.</span>
            </div>
          </div>

          {/* Card 2: Payroll tax vs PAYG withholding */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 flex items-center justify-center">
                <SwapOutlined className="text-lg" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Payroll tax vs PAYG withholding
              </h3>

              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Payroll tax and PAYG withholding are separate obligations. PAYG withholding is a federal system under which amounts are withheld from certain payments and remitted to the ATO. Payroll tax is imposed by states and territories on an employer’s taxable wages once the relevant rules are met.
              </p>

              <div className="pt-2 space-y-3">
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300">
                  If you need help with employer withholding, see our{" "}
                  <Link
                    href="/services/bas-payroll/payg"
                    className="font-semibold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
                  >
                    PAYG withholding services
                    <ArrowRightOutlined className="text-xs" />
                  </Link>
                  .
                </p>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300">
                  For ongoing payroll processing, see our{" "}
                  <Link
                    href="/services/bas-payroll/payroll-services"
                    className="font-semibold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
                  >
                    Payroll Services page
                    <ArrowRightOutlined className="text-xs" />
                  </Link>
                  .
                </p>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300">
                  If your issue relates to benefits provided to employees, our{" "}
                  <Link
                    href="/services/bas-payroll/fringe-benefits-tax"
                    className="font-semibold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
                  >
                    Fringe Benefits Tax page
                    <ArrowRightOutlined className="text-xs" />
                  </Link>{" "}
                  may also be relevant.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-zinc-700/80 flex items-center gap-2.5 text-xs text-emerald-700 dark:text-emerald-400 font-medium">
              <CheckCircleOutlined className="text-base shrink-0" />
              <span>Independent state tax separate from federal ATO compliance.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
