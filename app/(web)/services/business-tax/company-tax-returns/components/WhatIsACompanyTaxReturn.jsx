"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  BankOutlined,
  ApartmentOutlined,
  CheckCircleOutlined,
  ExclamationCircleOutlined,
  ArrowRightOutlined,
  FileTextOutlined,
  SolutionOutlined,
} from "@ant-design/icons";

/**
 * WhatIsACompanyTaxReturn Component
 * =================================
 * Section: What Is a Company Tax Return?
 * Features 100% complete, verbatim content from Page 2 of client docx.
 * Explains statutory filing obligations, taxable income/loss rules, and entity independence.
 */
export default function WhatIsACompanyTaxReturn() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Entity & Compliance Fundamentals
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Is a Company Tax Return?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A company tax return is the annual income tax return for a company. It reports items such as assessable income, deductible expenses, taxable income or tax loss and other information required by the ATO.
          </p>
        </div>

        {/* 2 Core Pillar Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Annual Lodgment Obligation */}
          <div className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between hover:border-emerald-400/50 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center mb-6">
                <BankOutlined className="text-2xl text-brand-primary dark:text-emerald-400" />
              </div>

              <span className="text-[11px] font-bold text-brand-primary dark:text-emerald-400 uppercase tracking-widest block mb-1">
                Statutory Lodgement Mandate
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-4">
                Annual ATO Reporting Obligation
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                Most companies are required to lodge a company tax return for each income year unless a specific exemption or non-lodgment position applies. Having no taxable income or making a tax loss does not, by itself, remove the lodgment obligation. The company’s circumstances and the ATO requirements for the relevant year should be checked.
              </p>

              <div className="bg-white dark:bg-zinc-900 rounded-xl p-4 border border-slate-200/80 dark:border-zinc-800 space-y-2.5">
                <div className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 text-sm mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                    <strong>Assessable Income & Deductions:</strong> Full reconciliation of gross business revenue and allowable business claims.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 text-sm mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                    <strong>Taxable Income or Loss:</strong> Accurate calculation of corporate net taxable balance or carry-forward tax losses.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-200/60 dark:border-zinc-800">
              <span className="text-xs text-slate-500 dark:text-zinc-400 flex items-center gap-1.5">
                <ExclamationCircleOutlined className="text-amber-500" />
                Nil income or commercial losses do not automatically waive lodgement.
              </span>
            </div>
          </div>

          {/* Card 2: Distinct Separation of Filings */}
          <div className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between hover:border-emerald-400/50 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/60 border border-teal-100 dark:border-teal-800/40 flex items-center justify-center mb-6">
                <ApartmentOutlined className="text-2xl text-teal-600 dark:text-teal-400" />
              </div>

              <span className="text-[11px] font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest block mb-1">
                Legal Entity Independence
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-4">
                Separate From BAS, Payroll & Personal Returns
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                The company return is different from BAS, payroll reporting and the personal tax returns of directors or shareholders. Those obligations may interact with the company’s accounts, but they are not the same filing.
              </p>

              <div className="bg-white dark:bg-zinc-900 rounded-xl p-4 border border-slate-200/80 dark:border-zinc-800 space-y-2.5">
                <div className="flex items-start gap-2.5">
                  <FileTextOutlined className="text-teal-600 dark:text-teal-400 text-sm mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                    <strong>BAS & GST Lodgements:</strong> Periodic reporting covering goods and services tax and PAYG withholding.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <SolutionOutlined className="text-teal-600 dark:text-teal-400 text-sm mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                    <strong>Director Personal Returns:</strong> Individual declarations for wages, director fees, and franked dividends received.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-200/60 dark:border-zinc-800 flex items-center justify-between">
              <span className="text-xs text-slate-500 dark:text-zinc-400">
                Pty Ltd structure creates a distinct legal entity taxpayer.
              </span>
              <Link href="/services/business-tax" className="text-xs font-semibold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1">
                Business Hub <ArrowRightOutlined className="text-[10px]" />
              </Link>
            </div>
          </div>
        </div>

        {/* Informative Subtext Banner */}
        <div className="p-6 bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-800/40 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
              Operating Through a Proprietary Limited (Pty Ltd) Company?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300">
              Ensure your year-end accounts and statutory corporate income tax schedules align before lodging with the Australian Taxation Office.
            </p>
          </div>
          <Link href="/book-an-appointment">
            <Button
              type="primary"
              className="bg-brand-primary hover:bg-brand-primary-hover text-white font-semibold text-xs rounded-xl shadow-xs shrink-0 h-10 px-5"
            >
              Discuss Company Return
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
