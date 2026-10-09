"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  UserOutlined,
  BankOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
  CalendarOutlined,
  IdcardOutlined,
} from "@ant-design/icons";

/**
 * TheTwoDifferentTaxReturns Component
 * ===================================
 * Section 2: The Two Different Tax Returns.
 * Clearly separates the Deceased Person's Final Individual Return from the Deceased Estate Trust Return.
 * Features 100% complete, verbatim content from Page 13 of the client document.
 */
export default function TheTwoDifferentTaxReturns() {
  const finalReturnItems = [
    "salary, wages or pension income;",
    "bank interest and dividends;",
    "rental or investment income;",
    "capital gains or losses arising before death;",
    "allowable deductions; and",
    "Tax withheld or tax offsets.",
  ];

  const estateReturnItems = [
    "interest on estate bank accounts;",
    "dividends or managed-fund distributions;",
    "rental income;",
    "other investment income; and",
    "a capital gain or capital loss from disposing of an estate asset.",
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Dual Lodgment Structure
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            The Two Different Tax Returns
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Finalizing tax affairs following a death requires distinguishing
            between pre-death personal earnings and post-death estate
            administration income.
          </p>
        </div>

        {/* 2 Column Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-12">
          {/* Card 1: Final Tax Return for the Deceased Person */}
          <div className="p-7 sm:p-9 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <UserOutlined className="text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Final Tax Return for the Deceased Person
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-zinc-400">
                    Period: 1 July to Date of Death • Existing TFN
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-4">
                The deceased person&apos;s final individual tax return covers
                the period from 1 July to the date of death. It may include:
              </p>

              <div className="space-y-2 mb-6">
                {finalReturnItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-200/60 dark:border-zinc-700/60 text-xs sm:text-sm text-slate-700 dark:text-zinc-300 font-medium"
                  >
                    <CheckCircleOutlined className="text-emerald-500 mt-1 shrink-0 text-xs" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                <p>
                  The final return uses the deceased person&apos;s existing TFN.
                  Before lodging it, the legal personal representative should
                  also determine whether any earlier returns remain outstanding.
                </p>
                <p>
                  If no final return is required, the ATO may still need to be
                  notified through the appropriate non-lodgment process.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100 dark:border-zinc-800 flex items-center justify-between">
              <span className="text-2xs text-slate-500 dark:text-zinc-400">
                General return preparation:
              </span>
              <Link href="/services/individual-tax/individual-tax-return">
                <Button
                  type="link"
                  className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1 h-auto text-xs"
                  icon={<ArrowRightOutlined className="text-xs" />}
                  iconPlacement="end"
                >
                  Individual Tax Return Service
                </Button>
              </Link>
            </div>
          </div>

          {/* Card 2: Tax Return for the Deceased Estate */}
          <div className="p-7 sm:p-9 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/60 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <BankOutlined className="text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Tax Return for the Deceased Estate
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-zinc-400">
                    Administration Period • Separate Estate TFN
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-4">
                After death, the estate may derive income while assets are
                collected, managed or distributed. This may include:
              </p>

              <div className="space-y-2 mb-6">
                {estateReturnItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-200/60 dark:border-zinc-700/60 text-xs sm:text-sm text-slate-700 dark:text-zinc-300 font-medium"
                  >
                    <CheckCircleOutlined className="text-blue-500 mt-1 shrink-0 text-xs" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                <p>
                  Where a trust tax return is required, the deceased estate
                  generally needs its own TFN. The estate&apos;s TFN is separate
                  from the deceased person&apos;s TFN.
                </p>
                <div className="p-3.5 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200/70 dark:border-blue-800/40 text-blue-950 dark:text-blue-200 text-xs leading-relaxed">
                  <span className="font-bold block mb-1">
                    Timing of Derivation:
                  </span>
                  The correct treatment depends on when the relevant amount was
                  derived, not simply when it appeared in a bank account.
                  Information received after death may sometimes relate to the
                  deceased person&apos;s pre-death affairs and should be
                  reviewed before preparing either return.
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100 dark:border-zinc-800">
              <span className="text-2xs font-semibold text-slate-500 dark:text-zinc-400 uppercase tracking-wider block">
                Trust Tax Return Lodgment via TPB Tax Agent #26242127
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
