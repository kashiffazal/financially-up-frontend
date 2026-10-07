"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  DollarOutlined,
  TeamOutlined,
  ArrowRightOutlined,
  WarningOutlined,
  CheckCircleOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";

/**
 * PaygInstalmentsAndWithholdingIas Component
 * Covers 'PAYG instalments and your IAS' and 'PAYG withholding on an IAS'
 * from Page 7 of 5th Pillar BAS, GST & Payroll.docx.
 */
export default function PaygInstalmentsAndWithholdingIas() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950/70 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <Tag color="cyan" className="brand-section-tag font-bold tracking-wider uppercase text-xs mb-3">
            Core Tax Obligations
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            PAYG Obligations Reported on Your Activity Statement
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            An Instalment Activity Statement commonly handles two distinct PAYG mechanisms: income tax instalments on your business earnings, and tax withheld from staff pay runs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* PAYG instalments and your IAS */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 flex items-center justify-center">
                <DollarOutlined className="text-teal-600 dark:text-teal-400 text-xl" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                PAYG instalments and your IAS
              </h3>

              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                PAYG instalments are prepayments towards the income tax that may be payable on business and investment income. The ATO may calculate an instalment amount, or an instalment rate may apply, depending on the taxpayer’s circumstances and reporting method. These instalments are later credited when the relevant income tax return is assessed.
              </p>

              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                If expected income or tax circumstances have materially changed, it may be possible to vary a PAYG instalment. A variation should be based on a reasonable estimate, not simply a desire to reduce the current payment. General interest charge may apply if varied instalments are too low. Financially Up can help review the numbers before a variation is considered, with any broader tax planning or advice scoped separately where required.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-zinc-800/80 flex items-center gap-3 text-xs text-amber-700 dark:text-amber-400 font-medium">
              <WarningOutlined className="text-base shrink-0" />
              <span>Instalment variations must be justifiable with reasonable financial calculations.</span>
            </div>
          </div>

          {/* PAYG withholding on an IAS */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center">
                <TeamOutlined className="text-emerald-600 dark:text-emerald-400 text-xl" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                PAYG withholding on an IAS
              </h3>

              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Businesses that are registered for PAYG withholding generally need to report amounts withheld from relevant payments to the ATO. Depending on the reporting cycle, these amounts may appear on an IAS or another activity statement. The figures should agree with payroll records and other reporting, including Single Touch Payroll where applicable.
              </p>

              <div className="pt-2 space-y-4">
                <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  If your main issue is ongoing employer withholding, see our{" "}
                  <Link
                    href="/services/bas-payroll/payg"
                    className="font-semibold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
                  >
                    PAYG withholding services
                    <ArrowRightOutlined className="text-xs" />
                  </Link>
                  .
                </p>

                <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  For payroll processing and payroll records, our{" "}
                  <Link
                    href="/services/bas-payroll/payroll-services"
                    className="font-semibold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
                  >
                    Payroll Services page
                    <ArrowRightOutlined className="text-xs" />
                  </Link>{" "}
                  covers the operational payroll side in more detail.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-zinc-800/80 flex items-center gap-3 text-xs text-slate-500 dark:text-zinc-400 font-medium">
              <CheckCircleOutlined className="text-base text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>Full reconciliation between STP pay runs and ATO activity statement labels.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
