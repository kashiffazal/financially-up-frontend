"use client";

import React from "react";
import { Tag } from "antd";
import {
  SafetyCertificateOutlined,
  CalendarOutlined,
  WarningOutlined,
  ThunderboltOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * WhatAreSuperProcessingServices Component
 * Covers 'What are superannuation processing services?' and 'What changed with Payday Super from 1 July 2026?'
 * from Page 11 of 5th Pillar BAS, GST & Payroll.docx.
 */
export default function WhatAreSuperProcessingServices() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Part 1: What are superannuation processing services? */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-6">
            <Tag color="cyan" className="brand-section-tag font-bold tracking-wider uppercase text-xs">
              <CalendarOutlined className="mr-1.5" />
              Employer Superannuation
            </Tag>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              What are superannuation processing services?
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Super processing services cover the administrative and accounting steps involved in moving employer super contribution information from payroll to the relevant payment process and then reconciling the result. Depending on the business, this can include checking payroll contribution data, preparing payment files or workflows, monitoring exceptions, recording payments and reconciling super liability accounts.
            </p>

            <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              The service does not replace the employer's legal responsibility for superannuation obligations. It is designed to help the business operate the process accurately and consistently, with clear records supporting what has been calculated and paid.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200 dark:border-zinc-700 shadow-xs space-y-4">
              <div className="flex items-center gap-3 text-brand-primary dark:text-emerald-400">
                <SafetyCertificateOutlined className="text-2xl" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Operational Support
                </h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                We handle the heavy lifting of clearing house uploads, contribution data validation, and clearing ledger reconciliations so your business stays on top of super guarantee deadlines.
              </p>
            </div>
          </div>
        </div>

        {/* Part 2: What changed with Payday Super from 1 July 2026? */}
        <div className="p-8 sm:p-12 rounded-3xl bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-4 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 flex items-center justify-center">
                <ThunderboltOutlined className="text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                What changed with Payday Super from 1 July 2026?
              </h3>
            </div>

            <div className="lg:col-span-8 space-y-4 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              <p>
                From 1 July 2026, the super guarantee obligation arises with each payday. Contributions are calculated using qualifying earnings under the Payday Super rules and generally need to be received by the employee&apos;s super fund within seven business days of payday, subject to specified exceptions or extended timeframes.
              </p>
              <p>
                This is a significant operational change from the former quarterly contribution model. Employers need payroll and superannuation payment processes that can identify errors quickly, because rejected contributions, incorrect member details or delayed payment instructions can affect whether a contribution reaches the fund on time.
              </p>
              <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 flex items-start gap-3 text-xs sm:text-sm text-amber-900 dark:text-amber-200">
                <WarningOutlined className="text-base text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <span>
                  The ATO&apos;s Small Business Superannuation Clearing House closed on 1 July 2026. Businesses that previously relied on it need another compliant payment solution. The appropriate platform or provider depends on the employer&apos;s payroll and super setup.
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
