"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  UserAddOutlined,
  RiseOutlined,
  CalculatorOutlined,
  ThunderboltOutlined,
  WarningOutlined,
  AuditOutlined,
  CheckCircleOutlined,
  FileDoneOutlined,
  ArrowRightOutlined,
  SyncOutlined,
} from "@ant-design/icons";

/**
 * WhoBenefitsAndCapabilitiesSuper Component
 * Covers 'Who may benefit from outsourced superannuation services?' and 'What can Financially Up help with?'
 * from Page 11 of 5th Pillar BAS, GST & Payroll.docx.
 */
export default function WhoBenefitsAndCapabilitiesSuper() {
  const benefitScenarios = [
    {
      title: "First-Time Employers",
      desc: "The business has recently hired employees for the first time.",
      icon: <UserAddOutlined className="text-emerald-600 dark:text-emerald-400 text-lg" />,
    },
    {
      title: "Growing Teams",
      desc: "Employee numbers are growing and super administration is becoming harder to track.",
      icon: <RiseOutlined className="text-teal-600 dark:text-teal-400 text-lg" />,
    },
    {
      title: "Unreconciled Clearing Accounts",
      desc: "Payroll and super liability accounts do not reconcile cleanly.",
      icon: <CalculatorOutlined className="text-blue-600 dark:text-blue-400 text-lg" />,
    },
    {
      title: "Payday Super Transitions",
      desc: "The business is transitioning to Payday Super processes.",
      icon: <ThunderboltOutlined className="text-indigo-600 dark:text-indigo-400 text-lg" />,
    },
    {
      title: "Payment Exception Audits",
      desc: "Contribution errors or rejected payments need to be investigated.",
      icon: <WarningOutlined className="text-amber-600 dark:text-amber-400 text-lg" />,
    },
    {
      title: "Fund Details Verification",
      desc: "Employee fund details or payroll setup require review.",
      icon: <AuditOutlined className="text-purple-600 dark:text-purple-400 text-lg" />,
    },
    {
      title: "Integrated Bookkeeping Controls",
      desc: "Management wants super contribution processing integrated with regular bookkeeping and payroll controls.",
      icon: <SyncOutlined className="text-emerald-600 dark:text-emerald-400 text-lg" />,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950/70 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Part 1: Who may benefit */}
        <div className="mb-20">
          <div className="max-w-3xl mb-12">
            <Tag color="cyan" className="brand-section-tag font-bold tracking-wider uppercase text-xs mb-3">
              Target Employers
            </Tag>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              Who may benefit from outsourced superannuation services?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Superannuation processing services can suit employers who want to reduce the manual administration around recurring contributions, especially where payroll is processed internally but the contribution workflow needs additional support. The service may also be useful when:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {benefitScenarios.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-zinc-800 border border-slate-200/60 dark:border-zinc-700/60 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: What can Financially Up help with? */}
        <div className="pt-12 border-t border-slate-200/80 dark:border-zinc-800">
          <div className="max-w-3xl mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">
              What can Financially Up help with?
            </h3>
            <p className="text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Our structured service bridges the gap between calculating employee wages and executing clearing house payments on time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 1. Contribution data from payroll */}
            <div className="p-7 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <CalculatorOutlined className="text-lg" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                  Contribution data from payroll
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  Reliable superannuation payment processing starts with accurate payroll information. We can help review the contribution amounts generated from payroll, identify obvious data inconsistencies and reconcile the payroll output to accounting records. Where the underlying issue is an employee&apos;s industrial entitlement, employment classification or award interpretation, specialist workplace advice may be needed.
                </p>
              </div>
            </div>

            {/* 2. Payment workflow and administration */}
            <div className="p-7 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                  <FileDoneOutlined className="text-lg" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                  Payment workflow and administration
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  Depending on the agreed scope and the systems used by the business, Financially Up can assist with the administrative steps required to prepare and process employer super contributions through the business&apos;s chosen compliant payment solution. This may include organizing contribution data, checking payment status and following up exceptions that need the employer&apos;s attention.
                </p>
              </div>
            </div>

            {/* 3. Reconciliation of super liabilities */}
            <div className="p-7 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <SyncOutlined className="text-lg" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                  Reconciliation of super liabilities
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  A super liability in the accounts should be explainable. We can compare payroll-calculated contributions, payments and general-ledger balances so that old or unusual amounts can be investigated. This is especially important when payroll corrections, reversals, back pay or rejected contributions have occurred.
                </p>
              </div>
            </div>

            {/* 4. Coordination with payroll and STP */}
            <div className="p-7 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                  <ThunderboltOutlined className="text-lg" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                  Coordination with payroll and STP
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  Super processing works best when it is coordinated with payroll rather than handled later as a separate exercise.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-zinc-800/80 space-y-2 text-xs">
                <p className="text-slate-600 dark:text-zinc-400">
                  If your business also needs recurring pay-run support, see our{" "}
                  <Link
                    href="/services/bas-payroll/payroll-services"
                    className="font-semibold text-brand-primary dark:text-emerald-400 hover:underline"
                  >
                    Payroll Services
                  </Link>
                  .
                </p>
                <p className="text-slate-600 dark:text-zinc-400">
                  For payroll reporting issues, our{" "}
                  <Link
                    href="/services/bas-payroll/stp"
                    className="font-semibold text-brand-primary dark:text-emerald-400 hover:underline"
                  >
                    Single Touch Payroll service
                  </Link>{" "}
                  explains the separate STP reporting process.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
