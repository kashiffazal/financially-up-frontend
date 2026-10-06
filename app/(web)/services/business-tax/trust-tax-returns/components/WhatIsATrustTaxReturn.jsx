"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  SafetyCertificateOutlined,
  ApartmentOutlined,
  CheckCircleOutlined,
  ExclamationCircleOutlined,
  ArrowRightOutlined,
  FileTextOutlined,
  SolutionOutlined,
} from "@ant-design/icons";

/**
 * WhatIsATrustTaxReturn Component
 * ===============================
 * Section: What Is a Trust Tax Return?
 * Features 100% complete, verbatim content from Page 3 of client docx.
 * Explains trust estate reporting, net income allocation, and comparison with company taxation.
 */
export default function WhatIsATrustTaxReturn() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Trust Fundamentals
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Is a Trust Tax Return?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A trust tax return is the annual income tax return for a trust estate. It reports the trust’s income, deductions, net income for tax purposes and distribution information.
          </p>
        </div>

        {/* 2 Core Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Unique Trust Tax Assessment */}
          <div className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between hover:border-emerald-400/50 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center mb-6">
                <ApartmentOutlined className="text-2xl text-brand-primary dark:text-emerald-400" />
              </div>

              <span className="text-[11px] font-bold text-brand-primary dark:text-emerald-400 uppercase tracking-widest block mb-1">
                Net Income &amp; Flow-Through
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-4">
                Different From Corporate Taxation
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                The trust itself is not taxed in exactly the same way as a company: depending on the circumstances, beneficiaries may be assessed on shares of the trust’s net income, while the trustee may be assessed on some amounts.
              </p>

              <div className="bg-white dark:bg-zinc-900 rounded-xl p-4 border border-slate-200/80 dark:border-zinc-800 space-y-2.5">
                <div className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 text-sm mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                    <strong>Beneficiary Assessment:</strong> Present entitlement to income of the trust estate generally means beneficiaries pay tax at their marginal rates.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 text-sm mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                    <strong>Trustee Assessment:</strong> In specific cases (e.g. non-resident beneficiaries, minors, or undistributed income), tax may be assessed to the trustee.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-200/60 dark:border-zinc-800">
              <span className="text-xs text-slate-500 dark:text-zinc-400 flex items-center gap-1.5">
                <ExclamationCircleOutlined className="text-amber-500" />
                Assessment depends on trust deed rules and effective resolutions.
              </span>
            </div>
          </div>

          {/* Card 2: Connected Accounting & Distribution Decisions */}
          <div className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between hover:border-emerald-400/50 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/60 border border-teal-100 dark:border-teal-800/40 flex items-center justify-center mb-6">
                <FileTextOutlined className="text-2xl text-teal-600 dark:text-teal-400" />
              </div>

              <span className="text-[11px] font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest block mb-1">
                Strategic Alignment
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-4">
                Accounting &amp; Distributions Considered Together
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                That is why trust accounting, distribution decisions and tax-return preparation need to be considered together. A trust tax return accountant should understand both the trust’s financial records and the tax consequences of how income is allocated.
              </p>

              <div className="bg-white dark:bg-zinc-900 rounded-xl p-4 border border-slate-200/80 dark:border-zinc-800 space-y-2.5">
                <div className="flex items-start gap-2.5">
                  <SolutionOutlined className="text-teal-600 dark:text-teal-400 text-sm mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                    <strong>Trust Accounting Records:</strong> Reconciling net commercial trust income, capital gains, and franked dividends.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <SafetyCertificateOutlined className="text-teal-600 dark:text-teal-400 text-sm mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                    <strong>Effective Distribution Minutes:</strong> Ensuring trustee resolutions are legally executed in strict accordance with the deed.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-200/60 dark:border-zinc-800 flex items-center justify-between">
              <span className="text-xs text-slate-500 dark:text-zinc-400">
                Operating a corporate beneficiary?
              </span>
              <Link href="/services/business-tax/company-tax-returns" className="text-xs font-semibold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1">
                Company Tax Returns <ArrowRightOutlined className="text-[10px]" />
              </Link>
            </div>
          </div>
        </div>

        {/* Informative Callout Banner */}
        <div className="p-6 bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-800/40 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
              Managing a Discretionary or Family Trust?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300">
              Ensure your year-end distribution resolutions, net income calculations, and beneficiary tax statements reconcile seamlessly before ATO lodgement.
            </p>
          </div>
          <Link href="/book-an-appointment">
            <Button
              type="primary"
              className="bg-brand-primary hover:bg-brand-primary-hover text-white font-semibold text-xs rounded-xl shadow-xs shrink-0 h-10 px-5"
            >
              Discuss Trust Return
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
