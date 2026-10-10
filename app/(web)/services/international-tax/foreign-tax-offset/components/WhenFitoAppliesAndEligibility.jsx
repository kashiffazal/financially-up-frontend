"use client";

import React from "react";
import {
  SafetyCertificateOutlined,
  AuditOutlined,
  CheckCircleFilled,
  ExclamationCircleOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

/**
 * WhenFitoAppliesAndEligibility Component
 * =======================================
 * Section 1: When a foreign income tax offset may apply & Which foreign taxes need closer checking
 * Exact verbatim content from Client Document (Page 6).
 */
export default function WhenFitoAppliesAndEligibility() {
  return (
    <section className="py-16 md:py-20 bg-slate-50 dark:bg-zinc-900/60 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Card 1: When a foreign income tax offset may apply */}
          <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 shadow-sm flex flex-col justify-between h-full">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/50 flex items-center justify-center text-teal-600 dark:text-teal-400 text-2xl mb-5">
                <SafetyCertificateOutlined />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
                When a Foreign Income Tax Offset May Apply
              </h2>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                Eligibility generally requires foreign income tax to have been paid and the corresponding income or gain to be included in Australian assessable income. The tax, taxpayer and income must be connected. We review who derived the income, who paid the tax, when payment occurred, the nature of the charge and whether any foreign refund or credit changes the final amount.
              </p>
              <div className="p-4 rounded-xl bg-teal-50/70 dark:bg-teal-950/30 border border-teal-200/80 dark:border-teal-800/60">
                <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
                  If foreign income is not assessable in Australia because of your residency or another rule, foreign tax paid on it does not automatically qualify. This is particularly important for new arrivals and people who may be temporary residents for tax purposes. The correct sequence is to establish the Australian treatment of the income first, then consider relief from double taxation.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800 text-xs font-semibold text-slate-500 dark:text-zinc-400">
              Strict statutory nexus required between taxpayer, income, and foreign tax paid.
            </div>
          </div>

          {/* Card 2: Which foreign taxes need closer checking */}
          <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 shadow-sm flex flex-col justify-between h-full">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center text-blue-600 dark:text-blue-400 text-2xl mb-5">
                <AuditOutlined />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
                Which Foreign Taxes Need Closer Checking
              </h2>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                Foreign tax may be withheld from salary, dividends or interest, or paid after a foreign return is assessed for rent, business income or a capital gain. A withholding statement may not show the final liability if a later assessment creates extra tax or a refund. Evidence should identify the country, taxpayer, income period, tax type and amount actually paid.
              </p>
              <div className="p-4 rounded-xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/60">
                <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
                  The charge must fall within the Australian definition of foreign income tax and be correctly imposed under the relevant foreign law, taking account of any applicable tax treaty. Taxes on wealth, inheritance or other amounts are not automatically income taxes for FITO purposes. If a treaty limits the foreign country's taxing right, tax exceeding the treaty amount may require action overseas rather than a larger Australian offset.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800 text-xs font-semibold text-slate-500 dark:text-zinc-400">
              Only qualifying foreign income taxes under Division 770 ITAA 1997 qualify.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
