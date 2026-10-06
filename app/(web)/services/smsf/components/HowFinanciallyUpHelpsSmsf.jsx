"use client";

import React from "react";
import { Button } from "antd";
import {
  BankOutlined,
  CalculatorOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
  HistoryOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";
import Link from "next/link";

/**
 * HowFinanciallyUpHelpsSmsf Component
 * ==================================
 * Section 8: How Financially Up can help.
 *
 * Implements 100% exact copy from "How Financially Up can help" in 9th Pillar SMSF.docx.
 *
 * Features:
 * - Verbatim paragraphs explaining ongoing accounting/tax support and incomplete record remediation.
 * - Distinct service pathways:
 *   • SMSF Establishment: For funds at the beginning of the process (setup & registration).
 *   • SMSF Accounting: For established operating funds (annual accounts & reporting).
 * - Remediation assistance highlight for incomplete or backlog records.
 *
 * Background: Lite Brand Gradient.
 */
export default function HowFinanciallyUpHelpsSmsf() {
  const ongoingServices = [
    "Year-end bank and investment reconciliations",
    "Annual financial statements (operating statement & balance sheet)",
    "SMSF tax reporting and annual return lodgement",
    "Member-account information and contribution cap tracking",
    "Audit preparation and independent auditor liaison",
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Verbatim Title & Copy */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-800/60 mb-4">
            <SafetyCertificateOutlined className="text-teal-600 dark:text-teal-400 text-xs sm:text-sm" />
            <span className="text-xs font-semibold text-teal-800 dark:text-teal-300 tracking-wide uppercase">
              How Financially Up Can Help
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How Financially Up can help
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
            Financially Up can provide ongoing SMSF accounting and tax support, including year-end reconciliations, annual financial statements, SMSF tax reporting, member-account information and audit preparation. Where records are incomplete, we can identify what is missing and help organize the accounting information needed to move the fund toward completion.
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed">
            If you are at the beginning of the process, our SMSF establishment service focuses on the setup and registration steps. If your fund is already operating and you mainly need annual accounts and reporting, our SMSF accounting service provides the narrower annual accounting focus.
          </p>
        </div>

        {/* 2 Focused Pathway Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Pathway 1: SMSF Establishment (Beginning of the process) */}
          <div className="p-7 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm hover:border-teal-500/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/50 flex items-center justify-center">
                  <BankOutlined className="text-xl text-teal-600 dark:text-teal-400" />
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300">
                  New Funds
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                SMSF Establishment & Setup
              </h3>
              <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed mb-6">
                If you are at the beginning of the process, our SMSF establishment service focuses on the setup and registration steps, including trustee structure selection, deed coordination, ABN/TFN applications, and fund bank account setup.
              </p>
            </div>

            <Link href="/services/smsf/establishment">
              <Button
                type="primary"
                size="large"
                icon={<ArrowRightOutlined />}
                iconPlacement="end"
                className="w-full h-11 rounded-xl font-semibold shadow-md shadow-brand-primary/20 hover:scale-[1.01] transition-all"
              >
                Explore SMSF Setup
              </Button>
            </Link>
          </div>

          {/* Pathway 2: SMSF Accounting (Operating fund) */}
          <div className="p-7 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm hover:border-teal-500/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 flex items-center justify-center">
                  <CalculatorOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300">
                  Operating Funds
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                SMSF Accounting & Annual Accounts
              </h3>
              <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed mb-6">
                If your fund is already operating and you mainly need annual accounts and reporting, our SMSF accounting service provides the narrower annual accounting focus, including financial statements, tax reporting, and audit preparation.
              </p>
            </div>

            <Link href="/services/smsf/accounting">
              <Button
                type="primary"
                size="large"
                icon={<ArrowRightOutlined />}
                iconPlacement="end"
                className="w-full h-11 rounded-xl font-semibold shadow-md shadow-brand-primary/20 hover:scale-[1.01] transition-all"
              >
                Explore SMSF Accounting
              </Button>
            </Link>
          </div>
        </div>

        {/* Remediation & Incomplete Records Highlight */}
        <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 text-xl">
              <HistoryOutlined />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white m-0">
                Incomplete or Backlog Records?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 m-0 mt-1 max-w-2xl leading-relaxed">
                Where records are incomplete, we can identify what is missing and help organize the accounting information needed to move the fund toward completion.
              </p>
            </div>
          </div>

          <Link href="/book-an-appointment" className="shrink-0 w-full sm:w-auto">
            <Button
              size="large"
              icon={<ArrowRightOutlined />}
              iconPlacement="end"
              className="w-full sm:w-auto h-11 px-6 rounded-xl font-semibold border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-200 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-all"
            >
              Book an Appointment
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
