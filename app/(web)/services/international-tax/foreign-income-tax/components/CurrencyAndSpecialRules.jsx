"use client";

import React from "react";
import Link from "next/link";
import {
  TransactionOutlined,
  QuestionCircleOutlined,
  IdcardOutlined,
  GlobalOutlined,
  BookOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * CurrencyAndSpecialRules Component
 * ==================================
 * Section 5: Currency Conversion, Bank Transfers, Temporary/Foreign Residents & Tax Treaties
 * Exact verbatim text from Client Document (Page 2).
 */
export default function CurrencyAndSpecialRules() {
  const bankTransferQuestions = [
    "What does the money represent?",
    "When was the underlying income derived?",
    "What was your tax residency at that time?",
    "Was the amount already reported?",
    "Was foreign tax paid?",
    "Is the payment income, capital, a loan, a gift or existing savings?",
  ];

  const treatyDeterminants = [
    "Which country can tax particular income",
    "Whether a reduced withholding-tax rate applies",
    "How double taxation is relieved",
    "How dual-residency issues are addressed",
  ];

  return (
    <section className="py-16 md:py-20 bg-slate-50 dark:bg-zinc-900/60 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-100 text-indigo-800 dark:bg-indigo-950/80 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/80 mb-4">
            <TransactionOutlined /> Regulatory Framework
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Currency Translation & Complex Cross-Border Rules
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Tax reporting across borders requires navigating strict ATO exchange rate methodologies, characterising fund transfers, and reviewing bilateral tax treaties.
          </p>
        </div>

        {/* 2-Column Split: Top Level */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Card 1: Currency Conversion */}
          <div className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/50 flex items-center justify-center text-amber-600 dark:text-amber-400 text-2xl mb-5">
                <TransactionOutlined />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Foreign Currency Must Be Converted to Australian Dollars
              </h3>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Foreign income, relevant deductions and foreign tax paid must generally be converted into Australian dollars before inclusion in an Australian tax return. Depending on the rules and circumstances, the applicable method may use the exchange rate at the time of the transaction or an appropriate average rate.
              </p>
              <p className="mt-4 text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                The ATO provides foreign exchange information and a foreign income conversion calculator. Using the correct conversion method is important because the Australian-dollar amount reported may differ significantly from the amount appearing on a foreign tax return.
              </p>
            </div>
            <div className="mt-6 pt-5 border-t border-slate-100 dark:border-zinc-800 text-xs font-medium text-slate-500 dark:text-zinc-400">
              Complies with ATO Schedule 26 / statutory spot and average rates.
            </div>
          </div>

          {/* Card 2: Does Transferring Foreign Money Create Tax? */}
          <div className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/50 flex items-center justify-center text-teal-600 dark:text-teal-400 text-2xl mb-5">
                <QuestionCircleOutlined />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Does Transferring Foreign Money to Australia Create Tax?
              </h3>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                A bank transfer itself does not normally determine whether income is taxable. For example, transferring personal savings accumulated before becoming an Australian tax resident is different from receiving overseas income while you are an Australian resident.
              </p>
              <h4 className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-zinc-300">
                The relevant questions usually include:
              </h4>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {bankTransferQuestions.map((q, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-slate-50 dark:bg-zinc-800/60 text-xs font-medium text-slate-700 dark:text-zinc-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                    <span>{q}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3-Column Split: Lower Level Special Rules */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 3: Temporary Residents */}
          <div className="p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center text-blue-600 dark:text-blue-400 text-lg mb-4">
                <IdcardOutlined />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                Foreign Income and Temporary Residents
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Some people who are Australian residents for tax purposes may also qualify as temporary residents for Australian tax purposes. Special rules can exempt certain foreign income and capital gains for qualifying temporary residents. However, not all foreign income is necessarily exempt, and an individual's visa and family circumstances can affect whether the temporary-resident definition is satisfied.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800">
              <Link
                href="/services/international-tax/new-migrants-tax"
                className="text-xs font-semibold text-teal-600 dark:text-teal-400 hover:underline inline-flex items-center gap-1"
              >
                New Migrants Tax Guide <ArrowRightOutlined />
              </Link>
            </div>
          </div>

          {/* Card 4: Foreign Residents */}
          <div className="p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/50 flex items-center justify-center text-purple-600 dark:text-purple-400 text-lg mb-4">
                <GlobalOutlined />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                Foreign Residents and Overseas Income
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                A foreign resident for Australian tax purposes is generally taxed in Australia on Australian-sourced income rather than worldwide income. However, Australian reporting obligations can still arise for Australian income, Australian assets and particular transactions.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800">
              <Link
                href="/services/international-tax/australians-overseas"
                className="text-xs font-semibold text-teal-600 dark:text-teal-400 hover:underline inline-flex items-center gap-1"
              >
                Expat & Non-Resident Services <ArrowRightOutlined />
              </Link>
            </div>
          </div>

          {/* Card 5: Tax Treaties */}
          <div className="p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 text-lg mb-4">
                <BookOutlined />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                Tax Treaties and Foreign Income
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-3">
                Australia has tax treaties with many countries. A treaty may help determine:
              </p>
              <div className="space-y-1.5 text-xs text-slate-600 dark:text-zinc-300 font-normal">
                {treatyDeterminants.map((t, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                A treaty does not automatically make foreign income tax-free in Australia. Its specific provisions need to be considered together with Australian domestic law.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
