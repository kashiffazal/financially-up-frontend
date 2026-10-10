"use client";

import React from "react";
import Link from "next/link";
import {
  AuditOutlined,
  CheckCircleOutlined,
  ExclamationCircleOutlined,
  FileDoneOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * DoubleTaxAndFitoSection Component
 * ==================================
 * Section 4: What If Foreign Tax Has Already Been Paid? & What Is a Foreign Income Tax Offset?
 * Exact verbatim content from Client Document (Page 2).
 */
export default function DoubleTaxAndFitoSection() {
  const fitoLimitations = [
    "Not every overseas payment qualifies as foreign income tax",
    "The tax must generally have been properly imposed",
    "Treaty limits may affect the foreign tax amount recognised",
    "The offset can be subject to an Australian calculation limit",
  ];

  const supportingRecords = [
    "Foreign tax assessments",
    "Withholding certificates",
    "Payslips",
    "Dividend statements",
    "Foreign income statements",
    "Evidence of tax actually paid",
  ];

  return (
    <section className="py-16 md:py-20 bg-white dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: What If Foreign Tax Has Already Been Paid? */}
          <div className="p-8 rounded-3xl bg-slate-50 dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 flex flex-col justify-between h-full">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/80 mb-4">
                <AuditOutlined /> Double Taxation Relief
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                What If Foreign Tax Has Already Been Paid?
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Paying tax overseas does not necessarily remove the Australian reporting requirement. Where qualifying foreign income tax has been paid on income or gains included for Australian tax purposes, a foreign income tax offset, commonly called a FITO, may be available. Entitlement depends on the Australian rules and evidence of the foreign tax paid.
              </p>
              <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                The FITO system is designed to provide relief from double taxation in eligible cases. However:
              </p>

              <div className="mt-5 space-y-3">
                {fitoLimitations.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <ExclamationCircleOutlined className="text-amber-500 mt-1 shrink-0 text-base" />
                    <span className="text-sm text-slate-700 dark:text-zinc-300 font-normal">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-xl bg-teal-50/80 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-800/60">
                <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-200 font-medium">
                  For this reason, both the gross foreign income and the tax paid overseas should be reviewed.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-zinc-800">
              <Link
                href="/services/international-tax/foreign-tax-offset"
                className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 dark:text-teal-400 hover:underline"
              >
                Learn more in our Foreign Tax Offset (FITO) specialist guide <ArrowRightOutlined />
              </Link>
            </div>
          </div>

          {/* Right Column: What Is a Foreign Income Tax Offset? */}
          <div className="p-8 rounded-3xl bg-slate-50 dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 flex flex-col justify-between h-full">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-100 text-blue-800 dark:bg-blue-950/80 dark:text-blue-300 border border-blue-200 dark:border-blue-800/80 mb-4">
                <FileDoneOutlined /> Offset Mechanics
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                What Is a Foreign Income Tax Offset?
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                A foreign income tax offset is an Australian tax offset that may provide relief where eligible foreign income tax has been paid on income or gains included for Australian tax purposes. It is not a deduction from income, and the claim may be limited by the Australian FITO calculation.
              </p>

              <h3 className="mt-8 text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-zinc-200 mb-4">
                Supporting records may include:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {supportingRecords.map((rec, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 flex items-center gap-3"
                  >
                    <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 shrink-0 text-base" />
                    <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-zinc-200">
                      {rec}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 p-4 rounded-xl bg-slate-100/80 dark:bg-zinc-800/50 text-xs text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
              Unlike a tax deduction which simply lowers assessable income, a tax offset directly reduces your final Australian tax payable dollar-for-dollar up to the statutory limit.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
