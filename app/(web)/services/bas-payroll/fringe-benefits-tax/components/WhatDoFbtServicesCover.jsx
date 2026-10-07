"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileTextOutlined,
  CheckCircleOutlined,
  CalculatorOutlined,
  AuditOutlined,
  DollarOutlined,
  TeamOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

/**
 * WhatDoFbtServicesCover Component
 * Covers 'What Do FBT Tax Return Services Cover?'
 * from Page 6 of 5th Pillar BAS, GST & Payroll.docx.
 */
export default function WhatDoFbtServicesCover() {
  const inclusions = [
    {
      icon: <FileTextOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Reviewing employee benefits and identifying categories that may require FBT consideration",
      detail: "Auditing company card expenditures, asset usage, and reimbursement claims to classify fringe benefit types.",
    },
    {
      icon: <AuditOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Checking whether exemptions, concessions or specific valuation methods may apply",
      detail: "Evaluating minor and infrequent exemptions, otherwise deductible rules, and work-related vehicle exemptions.",
    },
    {
      icon: <CalculatorOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Calculating taxable values using the appropriate available information",
      detail: "Comparing statutory formula vs operating cost methods for motor vehicles and grossing up taxable amounts.",
    },
    {
      icon: <DollarOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Reviewing employee contributions and other relevant adjustments where applicable",
      detail: "Verifying post-tax employee recipient contributions made before 31 March to reduce or extinguish FBT liabilities.",
    },
    {
      icon: <CheckCircleOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Preparing the FBT return and related work papers where a return is required",
      detail: "Compiling comprehensive statutory workpapers and lodging the formal annual FBT return with the ATO.",
    },
    {
      icon: <TeamOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Helping identify reportable fringe benefits amounts for employee reporting where relevant",
      detail: "Determining individual employee reportable amounts (RFBA) exceeding $2,000 for income statement disclosure.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-4 font-bold tracking-wider uppercase text-xs">
            <CalculatorOutlined className="mr-1.5" />
            Compliance Scope
          </Tag>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            What Do FBT Tax Return Services Cover?
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            FBT tax return services can be scoped to the benefits and records relevant to your business. Depending on the engagement, assistance may include:
          </p>
        </div>

        {/* 6 Inclusions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {inclusions.map((item, index) => (
            <div
              key={index}
              className="p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:border-emerald-400/60 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-800 border border-slate-200/60 dark:border-zinc-700/60 flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Advisory Boundaries Disclaimer */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 flex items-start gap-4">
          <ExclamationCircleOutlined className="text-xl sm:text-2xl text-slate-500 dark:text-zinc-400 shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            <strong>Advisory Scope:</strong> FBT compliance services do not automatically include remuneration strategy, legal employment advice or financial product advice. Separate advice may be required for broader remuneration or legal structuring decisions.
          </p>
        </div>

      </div>
    </section>
  );
}
