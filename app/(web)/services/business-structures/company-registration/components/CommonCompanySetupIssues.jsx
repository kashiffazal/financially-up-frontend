"use client";

import React from "react";
import { Tag } from "antd";
import {
  WarningOutlined,
  CheckCircleOutlined,
  SafetyCertificateOutlined,
  AuditOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

/**
 * CommonCompanySetupIssues Component
 * Covers 'Common company setup issues' and 'How Financially Up can help'
 * from Page 2 of 6th Pillar Business Structures.docx.
 */
export default function CommonCompanySetupIssues() {
  const commonIssues = [
    "Unclear ownership structures or unregistered shareholders",
    "Incorrect share allocations and confusing equity classes",
    "Missing or delayed written director consents and director IDs",
    "Inconsistent names and addresses across ASIC, ABN, and bank records",
    "Registering a company before evaluating whether it is commercially appropriate",
  ];

  const supportScope = [
    "Confirming all statutory information needed for ASIC registration",
    "Coordinating the online incorporation application seamlessly",
    "Assisting with subsequent ABN, TFN, GST, and PAYG withholding registrations",
    "Establishing the chart of accounts and opening accounting balances for ongoing compliance",
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Card 1: Common company setup issues */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 flex items-center justify-center">
                  <WarningOutlined className="text-xl" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Common company setup issues
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Registration errors can be inconvenient to correct, especially where the wrong people, addresses or share details are recorded. Common issues include unclear ownership, incorrect share allocations, missing director consent, inconsistent names across registrations, or registering a company before the owners have properly considered whether it is the right structure.
              </p>

              <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900/80 border border-slate-200/70 dark:border-zinc-700 space-y-2.5">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                  Frequent Setup Bottlenecks:
                </h4>
                <ul className="space-y-2">
                  {commonIssues.map((issue, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-zinc-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                      <span>{issue}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 italic">
                A careful setup process focuses on getting the core facts correct first, then coordinating the tax registrations and accounting records around the registered company.
              </p>
            </div>
          </div>

          {/* Card 2: How Financially Up can help */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 flex items-center justify-center">
                  <SafetyCertificateOutlined className="text-xl" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  How Financially Up can help
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Financially Up can assist with the company setup process from an accounting and tax perspective. This can include confirming the information needed for registration, helping coordinate the incorporation process, assisting with ABN and tax registrations, and establishing the accounting information needed for future compliance.
              </p>

              <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900/80 border border-slate-200/70 dark:border-zinc-700 space-y-2.5">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                  Our Setup Assistance:
                </h4>
                <ul className="space-y-2">
                  {supportScope.map((scope, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-zinc-300">
                      <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                      <span>{scope}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200/60 dark:border-blue-900/40 flex items-start gap-2.5 text-xs text-slate-600 dark:text-zinc-300">
                <InfoCircleOutlined className="text-sm text-blue-600 shrink-0 mt-0.5" />
                <span>
                  Where the proposed arrangement involves legal agreements, complex ownership terms, trust arrangements or other legal matters, appropriately qualified legal advice may also be required.
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
