"use client";

import React from "react";
import { Tag } from "antd";
import {
  CalendarOutlined,
  WarningOutlined,
  CloseCircleOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";

/**
 * PaydaySuperAndCommonStpIssues Component
 * Covers 'Superannuation and Current Payroll Reporting' (Payday Super from 1 July 2026)
 * and 'Common STP Problems' from Page 5 of 5th Pillar BAS, GST & Payroll.docx.
 */
export default function PaydaySuperAndCommonStpIssues() {
  const commonIssues = [
    "Incorrect employee personal and tax details",
    "Duplicated employee records across software migrations",
    "Incorrect year-to-date (YTD) opening balances",
    "Reporting wages under the wrong payroll categories (disaggregation)",
    "Missed pay events or late pay-event transmissions",
    "Software migrations resulting in broken BMS identifiers",
    "Year-end finalization figures that do not reconcile to payroll records",
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Part 1: Superannuation and Current Payroll Reporting */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs mb-16">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-brand-primary dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
              <CalendarOutlined />
              Statutory Update
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Superannuation and Current Payroll Reporting
            </h3>
            <p className="text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              From 1 July 2026, Payday Super changed the timing of super guarantee contributions. Employers generally need to ensure contributions are received by the employee&apos;s super fund within seven business days of payday, subject to the applicable exceptions. Payroll and STP processes should therefore use the current rules rather than older quarterly-payment assumptions.
            </p>
            <p className="text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              The exact super treatment can depend on the worker, payment and circumstances, so any unusual arrangements should be reviewed separately.
            </p>
          </div>

          <div className="mt-6 p-4 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-800/60 flex items-start gap-3">
            <ClockCircleOutlined className="text-lg text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
            <span className="text-xs sm:text-sm text-emerald-900 dark:text-emerald-200 leading-relaxed">
              <strong>Payday Super Requirement:</strong> Move away from traditional quarterly super clearing deadlines. Super contributions must be scheduled and received within 7 business days of each employee payday.
            </span>
          </div>
        </div>

        {/* Part 2: Common STP Problems */}
        <div className="max-w-3xl mb-12">
          <Tag color="volcano" className="brand-section-tag mb-4 font-bold tracking-wider uppercase text-xs">
            <WarningOutlined className="mr-1.5" />
            Error Resolution
          </Tag>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Common STP Problems
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
            Common issues include incorrect employee details, duplicated employees, incorrect year-to-date balances, reporting under the wrong payroll categories, missed pay events, software migrations and year-end figures that do not reconcile to payroll records.
          </p>

          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A single touch payroll accountant can help review the accounting and tax-reporting side of these problems. Employment-law or entitlement disputes are separate matters and may require specialist workplace advice.
          </p>
        </div>

        {/* Common Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {commonIssues.map((issue, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex items-start gap-3.5 hover:border-rose-400/60 transition-all"
            >
              <CloseCircleOutlined className="text-rose-500 text-lg shrink-0 mt-0.5" />
              <p className="text-sm font-medium text-slate-800 dark:text-zinc-200 leading-snug">
                {issue}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
