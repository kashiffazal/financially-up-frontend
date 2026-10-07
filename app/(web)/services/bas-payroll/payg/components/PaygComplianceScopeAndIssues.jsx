"use client";

import React from "react";
import { Tag } from "antd";
import {
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  WarningOutlined,
  AuditOutlined,
  CalculatorOutlined,
  SyncOutlined,
  FileDoneOutlined,
  ToolOutlined,
} from "@ant-design/icons";

/**
 * PaygComplianceScopeAndIssues Component
 * Covers 'What PAYG withholding compliance involves' and 'Common PAYG withholding problems'
 * from Page 8 of 5th Pillar BAS, GST & Payroll.docx.
 */
export default function PaygComplianceScopeAndIssues() {
  const complianceTasks = [
    {
      title: "Registration Verification",
      desc: "Checking that the business is registered for PAYG withholding where required.",
      icon: <SafetyCertificateOutlined className="text-emerald-600 dark:text-emerald-400 text-lg" />,
    },
    {
      title: "Calculation Reviews",
      desc: "Reviewing withholding calculations produced by the payroll system.",
      icon: <CalculatorOutlined className="text-teal-600 dark:text-teal-400 text-lg" />,
    },
    {
      title: "Three-Way Reconciliation",
      desc: "Reconciling payroll reports, general ledger accounts and activity statement labels.",
      icon: <SyncOutlined className="text-blue-600 dark:text-blue-400 text-lg" />,
    },
    {
      title: "Adjustments & Back Pay",
      desc: "Checking the treatment of corrections, back pay or other adjustments.",
      icon: <ToolOutlined className="text-indigo-600 dark:text-indigo-400 text-lg" />,
    },
    {
      title: "STP Total Auditing",
      desc: "Reviewing STP totals where inconsistencies are identified.",
      icon: <AuditOutlined className="text-purple-600 dark:text-purple-400 text-lg" />,
    },
    {
      title: "BAS / IAS Figure Preparation",
      desc: "Preparing PAYG withholding figures for BAS or IAS lodgement within the agreed scope.",
      icon: <FileDoneOutlined className="text-emerald-600 dark:text-emerald-400 text-lg" />,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Part 1: What PAYG withholding compliance involves */}
        <div className="max-w-3xl mb-14">
          <Tag color="cyan" className="brand-section-tag font-bold tracking-wider uppercase text-xs mb-3">
            <CheckCircleOutlined className="mr-1.5" />
            Compliance Scope
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            What PAYG withholding compliance involves
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Good PAYG withholding compliance is not just about calculating a deduction from each pay. The payroll system, employee information, withholding settings, payment categories and activity statement figures need to work together. Errors can arise where employees are set up incorrectly, payroll adjustments are posted outside the payroll system, or withholding figures are copied into an activity statement without reconciliation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {complianceTasks.map((task, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-200/80 dark:border-zinc-700/80 hover:border-emerald-400/60 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-700/60 border border-slate-200/60 dark:border-zinc-600/40 flex items-center justify-center mb-4">
                  {task.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  {task.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {task.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Part 2: Common PAYG withholding problems */}
        <div className="p-8 sm:p-12 rounded-3xl bg-amber-500/5 dark:bg-amber-500/10 border border-amber-500/20">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 flex items-center justify-center shrink-0">
              <WarningOutlined className="text-2xl" />
            </div>
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Common PAYG withholding problems
              </h3>
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
                Common issues include incorrect employee setup, mismatches between payroll and the general ledger, changes to withholding schedules not reflected in software, missed registrations, duplicate payroll adjustments and STP totals that do not reconcile to activity statements. These are easier to correct when the underlying payroll records are reviewed rather than simply changing the reported activity statement amount.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
