"use client";

import React from "react";
import { Tag } from "antd";
import {
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  FolderOpenOutlined,
  FileDoneOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

/**
 * HowFinanciallyUpHelpsPayg Component
 * Covers 'What information may be needed?' and 'How Financially Up can help'
 * from Page 8 of 5th Pillar BAS, GST & Payroll.docx.
 */
export default function HowFinanciallyUpHelpsPayg() {
  const records = [
    "Payroll reports for the relevant period",
    "Employee setup information and TFN declarations",
    "Single Touch Payroll (STP) reports and filing receipts",
    "Prior BAS or IAS activity statements",
    "Payroll clearing and withholding ledger account balances",
    "Details of any corrections or manual adjustments already made",
  ];

  const serviceCapabilities = [
    "PAYG withholding registration and ATO role setup",
    "Review of assigned withholding reporting cycles",
    "Reconciliation of withholding ledger balances against payroll pay runs",
    "Preparation of accurate PAYG withholding figures for BAS or IAS lodgement",
    "Diagnostic reviews of historical withholding discrepancies",
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950/70 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Card 1: What information may be needed? */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                  <FolderOpenOutlined className="text-xl" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  What information may be needed?
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                For PAYG withholding work, we may request payroll reports for the relevant period, employee setup information, STP reports, prior BAS or IAS statements, payroll clearing and withholding ledger balances, and details of any corrections already made. The records required will depend on whether the engagement is registration, reconciliation, lodgement support or historical clean-up.
              </p>

              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200 dark:border-zinc-700/80 space-y-3">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                  Key Documentation Checklist:
                </h4>
                <ul className="space-y-2.5">
                  {records.map((rec, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-zinc-300">
                      <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 mt-0.5 shrink-0" />
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Card 2: How Financially Up can help */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <FileDoneOutlined className="text-xl" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  How Financially Up can help
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Financially Up can provide PAYG withholding compliance services as a defined part of your payroll and activity statement process. We can help with registration, review of reporting cycles, reconciliation of withholding balances and preparation of PAYG withholding figures for lodgement. Where a matter involves employment law, award interpretation or other legal questions, separate specialist advice may be needed.
              </p>

              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200 dark:border-zinc-700/80 space-y-3">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                  Scope of Support:
                </h4>
                <ul className="space-y-2.5">
                  {serviceCapabilities.map((cap, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-zinc-300">
                      <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800 flex items-center gap-2.5 text-xs text-slate-500 dark:text-zinc-400 font-medium">
              <InfoCircleOutlined className="text-sm text-blue-500 shrink-0" />
              <span>Coordinated with your external legal or award advisors whenever required.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
