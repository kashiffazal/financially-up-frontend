"use client";

import React from "react";
import { Tag } from "antd";
import {
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  FolderOpenOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

/**
 * HowFinanciallyUpHelpsStructureAdvice Component
 * Covers 'What Financially Up can help with' and 'Information that helps us assess the options'
 * from Page 5 of 6th Pillar Business Structures.docx.
 */
export default function HowFinanciallyUpHelpsStructureAdvice() {
  const serviceOfferings = [
    "Reviewing the current or proposed business activities and risk profile",
    "Comparing common entity options (sole trader, partnership, company, trust)",
    "Explaining tax and accounting implications across profit, drawings, and distributions",
    "Identifying likely registration, regulatory, and annual compliance obligations",
    "Coordinating the next accounting, ABN, and setup steps once a structure is selected",
  ];

  const usefulInformation = [
    "Proposed business activities and industry sector",
    "Current or projected annual turnover and profit margins",
    "Owners, directors, partners, beneficiaries, and related parties",
    "Existing business assets, debts, and equipment",
    "Funding arrangements and borrowing requirements",
    "Employee hiring projections and contractor usage",
    "Plans to retain working capital versus distributing profits",
    "Likely future investors, partners, or equity plans",
    "Medium-term growth targets and exit/succession objectives",
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Card 1: What Financially Up can help with */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 flex items-center justify-center">
                  <SafetyCertificateOutlined className="text-xl" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  What Financially Up can help with
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Our accountant business structure advice can include reviewing the current or proposed activities, comparing common entity options, explaining tax and accounting implications, identifying likely registration and compliance obligations, and coordinating the next accounting steps once a structure is selected.
              </p>

              <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/70 dark:border-zinc-700 space-y-2.5">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                  Advisory Scope:
                </h4>
                <ul className="space-y-2">
                  {serviceOfferings.map((offering, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-zinc-300">
                      <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                      <span>{offering}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200/60 dark:border-blue-900/40 flex items-start gap-2.5 text-xs text-slate-600 dark:text-zinc-300">
                <InfoCircleOutlined className="text-sm text-blue-600 shrink-0 mt-0.5" />
                <span>
                  We do not present structure selection as a purely tax-driven exercise. If legal documents, asset-protection advice, shareholder agreements, partnership agreements, trust deeds or other legal work are needed, an appropriately qualified legal adviser may also be required.
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Information that helps us assess the options */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 flex items-center justify-center">
                  <FolderOpenOutlined className="text-xl" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Information that helps us assess the options
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Useful information helps us model tax liabilities, administrative overhead, and commercial fit across each potential entity. Existing entity documents and registrations are also relevant when reviewing a current structure.
              </p>

              <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/70 dark:border-zinc-700 space-y-2">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                  Assessment Information Checklist:
                </h4>
                <ul className="space-y-2">
                  {usefulInformation.map((info, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-zinc-300">
                      <CheckCircleOutlined className="text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
                      <span>{info}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-zinc-700/80 flex items-center gap-2 text-xs text-slate-500 dark:text-zinc-400 font-medium">
              <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400" />
              <span>Rigorous assessment translating your vision into an optimal structure.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
