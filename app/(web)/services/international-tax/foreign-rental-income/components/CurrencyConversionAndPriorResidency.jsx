"use client";

import React from "react";
import Link from "next/link";
import {
  TransactionOutlined,
  HistoryOutlined,
  SafetyCertificateOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * CurrencyConversionAndPriorResidency Component
 * =============================================
 * Section 3: Currency conversion, Properties predating Australian residency, and Foreign tax paid
 * Exact verbatim content from Client Document (Page 5).
 */
export default function CurrencyConversionAndPriorResidency() {
  return (
    <section className="py-16 md:py-20 bg-slate-50 dark:bg-zinc-900/60 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Currency Conversion */}
          <div className="p-7 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-amber-50 dark:bg-amber-950/50 flex items-center justify-center text-amber-600 dark:text-amber-400 text-xl mb-5">
                <TransactionOutlined />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                How Foreign Amounts Are Converted to Australian Dollars
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                Foreign rental income, relevant deductions and foreign tax must be translated into Australian dollars before they are included in the Australian return. The appropriate rate depends on the amount and circumstances. A transaction-date rate or a permitted average rate may apply, but one annual rate is not automatically suitable for every figure.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                We review the dates, accounting basis and available exchange evidence, then apply a method consistently. Keep the original-currency records and Australian dollar working papers. This creates a clear trail from the property manager statement to the figures reported in the return.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800 text-xs font-semibold text-slate-500 dark:text-zinc-400">
              Clear audit trail from foreign currency to Australian Tax Return.
            </div>
          </div>

          {/* Card 2: Property Predates Australian Residency */}
          <div className="p-7 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-teal-50 dark:bg-teal-950/50 flex items-center justify-center text-teal-600 dark:text-teal-400 text-xl mb-5">
                <HistoryOutlined />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                What if the Property Predates Australian Residency
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                A property acquired before you became an Australian resident can create future capital gains tax questions. The relevant starting value and later CGT treatment depend on your residency and temporary-resident history, the asset and the applicable rules. Retain purchase and ownership documents, improvement costs, valuation evidence and the dates your Australian status changed. The annual rental calculation does not settle the later disposal outcome.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                If a sale is planned or has occurred, our capital gains tax service covers that separate calculation. For Australian rental deduction principles more broadly, see our investment property tax service.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800">
              <Link
                href="/services/international-tax/capital-gains-international"
                className="text-xs font-semibold text-teal-600 dark:text-teal-400 hover:underline inline-flex items-center gap-1"
              >
                International Capital Gains Tax <ArrowRightOutlined />
              </Link>
            </div>
          </div>

          {/* Card 3: Tax Already Paid Overseas */}
          <div className="p-7 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center text-blue-600 dark:text-blue-400 text-xl mb-5">
                <SafetyCertificateOutlined />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                What if Tax Was Already Paid Overseas
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                Foreign income tax paid on rental income may support a foreign income tax offset where the Australian conditions are met. The offset is separate from rental deductions and is not automatically a dollar-for-dollar refund. The nature and timing of the foreign tax, any refund, the income included in Australia and the applicable offset limit all matter.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Our foreign income tax offset service examines that calculation in detail. A tax treaty may also affect taxing rights or the amount properly payable overseas. We review the Australian implications and identify when advice from a professional in the property's country is needed.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800">
              <Link
                href="/services/international-tax/foreign-tax-offset"
                className="text-xs font-semibold text-teal-600 dark:text-teal-400 hover:underline inline-flex items-center gap-1"
              >
                Foreign Tax Offset (FITO) Rules <ArrowRightOutlined />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
