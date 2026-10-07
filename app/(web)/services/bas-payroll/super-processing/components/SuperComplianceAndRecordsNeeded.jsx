"use client";

import React from "react";
import { Tag } from "antd";
import {
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  FolderOpenOutlined,
  InfoCircleOutlined,
  WarningOutlined,
} from "@ant-design/icons";

/**
 * SuperComplianceAndRecordsNeeded Component
 * Covers 'Super contribution processing and compliance responsibilities' and 'What records and information may be needed?'
 * from Page 11 of 5th Pillar BAS, GST & Payroll.docx.
 */
export default function SuperComplianceAndRecordsNeeded() {
  const recordsList = [
    "current employee payroll and super setup details",
    "pay-run reports showing contribution calculations",
    "employee fund and member details held by the employer",
    "payment or clearing-house reports",
    "records of rejected or returned contributions",
    "bank payment records",
    "general-ledger superannuation liability accounts",
    "STP and payroll reports where they are relevant to the reconciliation",
    "details of historical corrections or outstanding contribution issues",
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Part 1: Compliance Responsibilities & Advice Boundary */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 mb-16">
          <div className="max-w-3xl mb-8">
            <Tag color="cyan" className="brand-section-tag font-bold tracking-wider uppercase text-xs mb-3">
              <SafetyCertificateOutlined className="mr-1.5" />
              Employer Obligations & Advice Scope
            </Tag>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Super contribution processing and compliance responsibilities
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Outsourcing the administration does not transfer the employer&apos;s responsibility for meeting super obligations. Employers still need to provide accurate employee information, maintain appropriate records, fund payments and act on contribution exceptions or rejected transactions.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-700/80 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 flex items-center justify-center shrink-0 mt-0.5">
              <InfoCircleOutlined className="text-lg" />
            </div>
            <div className="space-y-2">
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                No Financial Product Advice
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                Superannuation processing is also different from personal financial advice about which super fund or investment option an employee should choose. Financially Up&apos;s service focuses on employer-side payroll, contribution processing, accounting records and related tax administration. It does not include recommendations to choose, switch, buy, sell or hold a financial product. Where financial product advice is needed, an appropriately authorized financial adviser may be required.
              </p>
            </div>
          </div>
        </div>

        {/* Part 2: What records and information may be needed? */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <Tag color="blue" className="brand-section-tag font-bold tracking-wider uppercase text-xs">
              <FolderOpenOutlined className="mr-1.5" />
              Information Checklist
            </Tag>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              What records and information may be needed?
            </h3>

            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              To accurately set up or reconcile your superannuation contribution workflow, having clear payroll ledgers, member IDs, and bank settlement histories is essential.
            </p>

            <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 italic">
              The information needed will depend on whether Financially Up is helping with a regular super payment cycle, a reconciliation issue or a broader payroll clean-up.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-200/80 dark:border-zinc-700/80 shadow-xs">
              <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
                Documentation Requested for Super Workflows:
              </h4>
              <ul className="space-y-2.5">
                {recordsList.map((rec, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-zinc-300">
                    <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
