"use client";

import React from "react";
import Link from "next/link";
import {
  DollarOutlined,
  TransactionOutlined,
  HomeOutlined,
  CalculatorOutlined,
  ArrowRightOutlined,
  CheckCircleFilled,
} from "@ant-design/icons";

/**
 * NewMigrantIncomeAndTransfers Component
 * ======================================
 * Section 2: What income may need attention
 * Exact verbatim content from Client Document (Page 4).
 */
export default function NewMigrantIncomeAndTransfers() {
  const commonIncomeSources = [
    { title: "Australian earnings", desc: "Salary, wage allowances, contractor payments, self-employment income and local bank interest." },
    { title: "Overseas earnings", desc: "Offshore employment salary, overseas pensions, foreign dividends, managed fund distributions or rental yields." },
    { title: "Foreign bank accounts", desc: "Account capital balances are not taxable income, but interest derived on the balance must be declared." },
    { title: "Capital transfers vs new income", desc: "Remitting pre-existing accumulated savings to Australia is distinct from earning new revenue." },
  ];

  return (
    <section className="py-16 md:py-20 bg-white dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/80 mb-4">
            <DollarOutlined /> Revenue Classification
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            What Income May Need Attention
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Your first Australian year may include salary, allowances, self-employment income and bank interest, as well as overseas salary, pensions, dividends, managed investments or rent. The source, timing and tax character of each amount matter. A foreign bank account balance is not itself taxable income, although interest earned on the account may need to be declared. Transferring existing savings to Australia is also different from earning new income, so keep records showing the source of significant transfers.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {commonIncomeSources.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 flex flex-col justify-between"
            >
              <div>
                <CheckCircleFilled className="text-teal-600 dark:text-teal-400 text-xl mb-3" />
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Retaining Offshore Property & Double Tax Relief Callout */}
        <div className="p-8 rounded-3xl bg-slate-50 dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/50 flex items-center justify-center text-amber-600 dark:text-amber-400 text-xl">
                <HomeOutlined />
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                Retaining an Overseas Property
              </h4>
            </div>
            <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              If you retain a property overseas, our foreign rental property tax service addresses its income, expenses, ownership and supporting documents.
            </p>
            <Link
              href="/services/international-tax/foreign-rental-income"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-600 dark:text-teal-400 hover:underline"
            >
              Foreign Rental Property Tax <ArrowRightOutlined />
            </Link>
          </div>

          <div className="space-y-4 md:border-l md:border-slate-200 md:dark:border-zinc-800 md:pl-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/50 flex items-center justify-center text-teal-600 dark:text-teal-400 text-xl">
                <CalculatorOutlined />
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                Foreign Tax Already Paid
              </h4>
            </div>
            <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              If tax was paid on income included in your Australian assessment, foreign income tax offset advice deals with the separate question of possible relief. These questions are fact dependent, especially where income relates to periods before and after Australian residency began.
            </p>
            <Link
              href="/services/international-tax/foreign-tax-offset"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-600 dark:text-teal-400 hover:underline"
            >
              Foreign Tax Offset (FITO) Guidance <ArrowRightOutlined />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
