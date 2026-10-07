"use client";

import React from "react";
import { Tag } from "antd";
import {
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  FolderOpenOutlined,
  AuditOutlined,
  BankOutlined,
} from "@ant-design/icons";

/**
 * AccountingSetupForPartnershipAndScope Component
 * Covers 'Accounting setup for a new partnership', 'What Financially Up can help with',
 * and 'Information we may need' from Page 6 of 6th Pillar Business Structures.docx.
 */
export default function AccountingSetupForPartnershipAndScope() {
  const setupChecklist = [
    "Open a bank account appropriate for the partnership and keep business transactions separate from personal transactions.",
    "Set up accounting software and an appropriate chart of accounts.",
    "Record partner capital introduced, drawings and partner-related transactions clearly.",
    "Establish processes for sales, purchases, expenses and supporting documents.",
    "Confirm GST coding and BAS processes if the partnership is registered for GST.",
    "Create a regular bookkeeping and reconciliation process.",
    "Keep records that support tax, GST, payroll and financial reporting obligations.",
  ];

  const infoNeeded = [
    "Legal names, addresses, and TFNs of the partners",
    "Description of proposed commercial activities",
    "Proposed partnership commencement date and projected turnover",
    "Business address and principal place of operations",
    "Ownership and profit-sharing split arrangements",
    "Existing ABNs or entity details if transferring a business",
    "Proposed trading business name",
    "Employee hiring plans and superannuation requirements",
    "Details of assets or capital introduced into the partnership",
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950/70 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Part 1: Accounting setup for a new partnership */}
        <div className="mb-16">
          <div className="max-w-3xl mb-10">
            <Tag color="cyan" className="brand-section-tag font-bold tracking-wider uppercase text-xs mb-3">
              Operational Foundations
            </Tag>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              Accounting setup for a new partnership
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Solid accounting practices keep partner equity, capital contributions, and personal drawings clearly documented from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {setupChecklist.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex items-start gap-3.5"
              >
                <div className="w-7 h-7 rounded-lg bg-teal-50 dark:bg-teal-950/50 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircleOutlined className="text-sm" />
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: What Financially Up can help with & Information we may need */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Card 1: What Financially Up can help with */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <SafetyCertificateOutlined className="text-xl" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  What Financially Up can help with
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                As a partnership accountant in Australia, Financially Up can assist with the tax and accounting side of setup, including structure review, ABN and TFN applications, business name registration where needed, GST and PAYG registrations where relevant, accounting-system setup and the transition into ongoing bookkeeping and tax compliance.
              </p>

              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                The exact scope depends on the partnership and what is already in place. We can also identify when legal, licensing or industry-specific advice needs to sit alongside the accounting work.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 dark:border-zinc-800 flex items-center gap-2 text-xs text-slate-500 dark:text-zinc-400 font-medium">
              <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400" />
              <span>Full compliance onboarding tailored to your specific commercial enterprise.</span>
            </div>
          </div>

          {/* Card 2: Information we may need */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <FolderOpenOutlined className="text-xl" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Information we may need
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                To prepare accurate applications and set up your accounting ledgers, we collect basic details regarding the partners, business activities, and intended operations.
              </p>

              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 space-y-2">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                  Setup Document Checklist:
                </h4>
                <ul className="space-y-2">
                  {infoNeeded.map((info, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-zinc-300">
                      <CheckCircleOutlined className="text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
                      <span>{info}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 dark:border-zinc-800 flex items-center gap-2 text-xs text-slate-500 dark:text-zinc-400 font-medium">
              <CheckCircleOutlined className="text-blue-600 dark:text-blue-400" />
              <span>Accurate partnership identification established across all registers.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
