"use client";

import React from "react";
import { Tag } from "antd";
import {
  TeamOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  FileSyncOutlined,
  SendOutlined,
  CloudUploadOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

/**
 * WhatDoPayrollServicesInclude Component
 * Covers 'What Do Payroll Services Include?'
 * from Page 4 of 5th Pillar BAS, GST & Payroll.docx.
 */
export default function WhatDoPayrollServicesInclude() {
  const inclusions = [
    {
      icon: <ClockCircleOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Processing regular pay runs using agreed employee and payroll information",
      detail: "Executing weekly, fortnightly, or monthly pay cycles based on verified master employee records and approved inputs.",
    },
    {
      icon: <FileSyncOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Applying payroll data such as ordinary hours, approved leave, allowances, deductions and other authorized adjustments",
      detail: "Accurately applying base salary, overtime rates, annual/sick leave, salary sacrifice arrangements, and expense allowances.",
    },
    {
      icon: <CheckCircleOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Maintaining payroll records and reconciling payroll information against accounting records where included in scope",
      detail: "Balancing wages expense, super clearing accounts, and PAYG withholding liabilities directly against the general ledger.",
    },
    {
      icon: <SendOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Preparing pay information for employees and coordinating employer reporting requirements",
      detail: "Generating compliant digital pay slips for staff and compiling necessary employer compliance summaries.",
    },
    {
      icon: <CloudUploadOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Supporting Single Touch Payroll reporting through compatible payroll software where applicable",
      detail: "Transmitting pay-event files directly to the Australian Taxation Office via certified STP Phase 2 cloud platforms.",
    },
    {
      icon: <ExclamationCircleOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Helping identify payroll data issues that need clarification before a pay run is finalized",
      detail: "Detecting unusual variances, missing timesheets, or unapproved rate changes prior to funds dispersal.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-4 font-bold tracking-wider uppercase text-xs">
            <TeamOutlined className="mr-1.5" />
            Core Scope
          </Tag>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            What Do Payroll Services Include?
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Payroll services cover the recurring work required to calculate and process employee pay, maintain payroll records and support employer reporting. The exact scope depends on your workforce, payroll system and responsibilities retained inside your business.
          </p>
        </div>

        {/* 6 Inclusions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {inclusions.map((item, index) => (
            <div
              key={index}
              className="p-7 rounded-2xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-200/80 dark:border-zinc-700/80 hover:border-emerald-400/60 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-700/60 border border-slate-200/60 dark:border-zinc-600/40 flex items-center justify-center mb-5">
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

        {/* Employer Scope & Fair Work Disclaimer */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200 dark:border-zinc-700 flex items-start gap-4">
          <ExclamationCircleOutlined className="text-xl sm:text-2xl text-slate-500 dark:text-zinc-400 shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            <strong>Operational Boundaries:</strong> Payroll processing does not replace the employer’s responsibility to provide correct employment information, approve changes and meet workplace obligations. Award interpretation, employment law and complex industrial-relations advice may require separate specialist advice.
          </p>
        </div>

      </div>
    </section>
  );
}
