"use client";

import React from "react";
import {
  TransactionOutlined,
  HistoryOutlined,
  CheckCircleFilled,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

/**
 * CurrencyAndDelayedForeignTax Component
 * ======================================
 * Section 3: Currency conversion & What if foreign tax is paid after the Australian return
 * Exact verbatim content from Client Document (Page 6).
 */
export default function CurrencyAndDelayedForeignTax() {
  return (
    <section className="py-16 md:py-20 bg-slate-50 dark:bg-zinc-900/60 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Card 1: Currency Conversion */}
          <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 shadow-sm flex flex-col justify-between h-full">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/50 flex items-center justify-center text-amber-600 dark:text-amber-400 text-2xl mb-5">
                <TransactionOutlined />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                How Currency Conversion Affects the Claim
              </h3>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                Foreign income, related deductions and foreign tax paid must be translated into Australian dollars before the Australian return and FITO calculation are completed. The appropriate exchange rate can depend on the transaction and timing. A tax payment made in a later period may require a different conversion from the income to which it relates.
              </p>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Keep the original-currency documents and the exchange-rate working papers. We reconcile the foreign income, deductions, withholding, assessment, payment and any refund so the Australian figures can be traced to their source.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800 text-xs font-semibold text-slate-500 dark:text-zinc-400">
              Transaction-date vs timing-specific foreign exchange reconciliation.
            </div>
          </div>

          {/* Card 2: Foreign Tax Paid After the Return */}
          <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 shadow-sm flex flex-col justify-between h-full">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/50 flex items-center justify-center text-teal-600 dark:text-teal-400 text-2xl mb-5">
                <HistoryOutlined />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                What if Foreign Tax Is Paid After the Australian Return?
              </h3>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                Foreign tax can be paid before or after the income year in which the related income is derived, but a FITO generally arises when the foreign tax is paid and is applied to the Australian year in which the related income or gain was included. If the Australian assessment has already issued, a special amendment rule may allow the offset to be claimed later. The ATO guidance provides a four-year period from payment of the foreign income tax for this type of amendment.
              </p>
              <div className="p-4 rounded-xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/60">
                <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
                  A later foreign refund, reassessment or credit can also reduce the foreign tax that counts toward the offset. The Australian claim may then need amendment. Keep final assessments and refund notices rather than relying only on the amount first withheld.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800 text-xs font-semibold text-slate-500 dark:text-zinc-400">
              Special statutory 4-year amendment window under Section 770-190 ITAA 1997.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
