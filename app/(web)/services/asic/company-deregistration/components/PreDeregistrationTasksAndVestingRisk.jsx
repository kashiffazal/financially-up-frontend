"use client";

import React from "react";
import { Tag, Alert } from "antd";
import {
  CheckCircleOutlined,
  DollarOutlined,
  FileDoneOutlined,
  TeamOutlined,
  FileSyncOutlined,
  StopOutlined,
  CalendarOutlined,
  WarningOutlined,
} from "@ant-design/icons";

/**
 * PreDeregistrationTasksAndVestingRisk Component
 * ==============================================
 * Section 2 of Company Deregistration (/services/asic/company-deregistration/):
 * 1. "What needs to happen before you deregister a company with ASIC?"
 * 2. "Why should company assets be dealt with before deregistration?"
 *
 * Implements 100% complete, verbatim content from Page 5 of '7th Pillar ASIC.docx'.
 * Clean White alternating section with 7-point checklist and legal vesting warnings.
 */
export default function PreDeregistrationTasksAndVestingRisk() {
  const tasks = [
    {
      icon: <FileSyncOutlined className="text-emerald-600 dark:text-emerald-400" />,
      title: "finalizing outstanding bookkeeping and reconciling bank, loan and shareholder accounts",
      desc: "Reconcile director loan accounts, shareholder balances, and ensure commercial transactions are fully accounted for.",
    },
    {
      icon: <DollarOutlined className="text-teal-600 dark:text-teal-400" />,
      title: "collecting debtors and paying creditors or otherwise resolving remaining liabilities",
      desc: "Settle outstanding supplier balances, pay company liabilities, and collect remaining receivables before closing accounts.",
    },
    {
      icon: <CheckCircleOutlined className="text-blue-600 dark:text-blue-400" />,
      title: "dealing with company assets before deregistration",
      desc: "Dispose of, transfer, or distribute company equipment, intellectual property, and vehicles prior to lodging.",
    },
    {
      icon: <TeamOutlined className="text-indigo-600 dark:text-indigo-400" />,
      title: "reviewing final payroll, superannuation and employee obligations where applicable",
      desc: "Finalize Single Touch Payroll (STP), clear superannuation guarantee contributions, and provide final employee statements.",
    },
    {
      icon: <FileDoneOutlined className="text-purple-600 dark:text-purple-400" />,
      title: "preparing and lodging outstanding BAS, income tax returns or other tax obligations where required",
      desc: "Lodge all historical and final tax returns with the ATO to ensure the tax agent portal shows a zero balance.",
    },
    {
      icon: <StopOutlined className="text-amber-600 dark:text-amber-400" />,
      title: "reviewing GST, PAYG and other registrations and determining the appropriate cancellation steps",
      desc: "Formally cancel business registrations (ABN, GST, PAYG withholding) at the appropriate time with the ATO.",
    },
    {
      icon: <CalendarOutlined className="text-rose-600 dark:text-rose-400" />,
      title: "checking ASIC fees, annual review matters and company records",
      desc: "Ensure no outstanding annual review invoices or late fees exist on the ASIC corporate register.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mb-16 sm:mb-20">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <Tag color="cyan" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
              Pre-Closure Due Diligence
            </Tag>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              What needs to happen before you deregister a company with ASIC?
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Closing the company usually involves more than lodging the ASIC application. Before deregistration, the company&apos;s affairs should be brought to a position where the directors and members can accurately assess the eligibility criteria and avoid leaving property or liabilities behind. Depending on the company, this may involve:
            </p>
          </div>

          {/* 7 Tasks Grid */}
          <div className="space-y-4 mb-16">
            {tasks.map((task, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-zinc-900/80 border border-slate-200/70 dark:border-zinc-800 flex items-start gap-4 hover:border-emerald-400/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center shrink-0 mt-0.5 text-lg">
                  {task.icon}
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug capitalize-first mb-1">
                    {task.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed font-normal m-0">
                    {task.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Subsection 2: Why should company assets be dealt with before deregistration? */}
          <div className="bg-amber-50/70 dark:bg-amber-950/20 rounded-3xl p-6 sm:p-10 border border-amber-200/80 dark:border-amber-900/40 shadow-xs space-y-4">
            <div className="flex items-center gap-2.5 mb-2">
              <WarningOutlined className="text-amber-600 dark:text-amber-400 text-xl" />
              <h3 className="text-lg sm:text-xl font-extrabold text-amber-950 dark:text-amber-200 m-0">
                Why should company assets be dealt with before deregistration?
              </h3>
            </div>
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
              On deregistration, property the company owned generally vests in ASIC, while property the company held on trust immediately before deregistration vests in the Commonwealth. Former officeholders can lose the ability to deal with property registered in the company&apos;s name. This is one reason why bank accounts, vehicles, intellectual property, receivables and other assets should be reviewed before the company is deregistered.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
