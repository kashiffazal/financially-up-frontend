"use client";

import React from "react";
import { Tag } from "antd";
import {
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  TeamOutlined,
  SwapOutlined,
  WarningOutlined,
  SyncOutlined,
  CalculatorOutlined,
  FileSearchOutlined,
  AuditOutlined,
} from "@ant-design/icons";

/**
 * WhatDoComplianceServicesInvolve Component
 * Covers 'What do payroll compliance services involve?' and 'Who may need a payroll compliance review?'
 * from Page 10 of 5th Pillar BAS, GST & Payroll.docx.
 */
export default function WhatDoComplianceServicesInvolve() {
  const triggerScenarios = [
    {
      title: "Workforce Expansion",
      desc: "Employee numbers or payroll complexity have increased.",
      icon: <TeamOutlined className="text-emerald-600 dark:text-emerald-400 text-xl" />,
    },
    {
      title: "Software Migration",
      desc: "Payroll has moved between software platforms or providers.",
      icon: <SwapOutlined className="text-teal-600 dark:text-teal-400 text-xl" />,
    },
    {
      title: "Unexplained Discrepancies",
      desc: "There are unexplained differences between payroll reports, the general ledger or bank payments.",
      icon: <WarningOutlined className="text-amber-600 dark:text-amber-400 text-xl" />,
    },
    {
      title: "STP & Historical Adjustments",
      desc: "STP corrections or prior-period payroll adjustments are required.",
      icon: <SyncOutlined className="text-blue-600 dark:text-blue-400 text-xl" />,
    },
    {
      title: "Unreconciled Clearing Accounts",
      desc: "PAYG withholding, super or payroll tax accounts do not reconcile cleanly.",
      icon: <CalculatorOutlined className="text-indigo-600 dark:text-indigo-400 text-xl" />,
    },
    {
      title: "Category & Leave Concerns",
      desc: "The business has concerns about pay categories, allowances, deductions or leave balances.",
      icon: <FileSearchOutlined className="text-purple-600 dark:text-purple-400 text-xl" />,
    },
    {
      title: "Proactive Independent Reviews",
      desc: "Management wants an independent payroll process review before year end or another major change.",
      icon: <AuditOutlined className="text-teal-600 dark:text-teal-400 text-xl" />,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Part 1: What do payroll compliance services involve? */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-6">
            <Tag color="cyan" className="brand-section-tag font-bold tracking-wider uppercase text-xs">
              <SafetyCertificateOutlined className="mr-1.5" />
              Comprehensive Review
            </Tag>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              What do payroll compliance services involve?
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              A payroll compliance review looks at whether the payroll information being processed and reported is consistent, supported by records and aligned with the employer's tax and payroll obligations. The exact scope depends on the business, workforce, software and issues identified.
            </p>

            <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              For employers covered by the Fair Work system, prescribed employee records must be kept and compliant pay slips must be provided. Employee records generally need to be kept for seven years. Separately, employers may have ATO obligations for PAYG withholding, STP reporting, superannuation and activity statements. State or territory payroll tax may also apply depending on the wage bill and jurisdiction.
            </p>

            <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal italic">
              Financially Up can review the accounting and payroll data that supports these obligations. Where an issue depends on award interpretation, employment contracts or another workplace-relations question, legal or specialist workplace advice may be required in addition to payroll accounting support.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200 dark:border-zinc-700 shadow-xs space-y-4">
              <div className="flex items-center gap-3 text-brand-primary dark:text-emerald-400">
                <CheckCircleOutlined className="text-2xl" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  7-Year Record Keeping
                </h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Under Australian Fair Work legislation and tax law, employers must maintain complete, accurate payroll records for a minimum of 7 years. Our reviews inspect data integrity across pay history, leave balances, and superannuation remittances.
              </p>
            </div>
          </div>
        </div>

        {/* Part 2: Who may need a payroll compliance review? */}
        <div className="pt-12 border-t border-slate-200/80 dark:border-zinc-800">
          <div className="max-w-3xl mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Who may need a payroll compliance review?
            </h3>
            <p className="text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Payroll compliance services can be useful for small and growing employers as well as established businesses with more complex payroll arrangements. A review may be particularly useful when:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {triggerScenarios.map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-200/80 dark:border-zinc-700/80 hover:border-emerald-400/60 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-700/60 border border-slate-200/60 dark:border-zinc-600/40 flex items-center justify-center mb-5">
                    {item.icon}
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
