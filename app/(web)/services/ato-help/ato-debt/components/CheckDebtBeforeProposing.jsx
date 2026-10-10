"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  AuditOutlined,
  FileDoneOutlined,
  FileSyncOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
  SplitCellsOutlined,
} from "@ant-design/icons";

/**
 * CheckDebtBeforeProposing Component
 * ==================================
 * Section 3: Check the debt before proposing a payment plan
 * Verbatim text from Page 2 of '11th Pillar ATO Help.docx'.
 *
 * Details the steps required to verify that the ATO balance is accurate,
 * bring unlodged BAS and tax returns up to date, and separate account streams.
 */
export default function CheckDebtBeforeProposing() {
  const checkSteps = [
    {
      icon: <FileDoneOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Confirm All Lodgements Are Current",
      desc: "Review whether all returns and BAS are lodged before proposing terms. The ATO routinely refuses or cancels payment arrangements if lodgements remain outstanding.",
    },
    {
      icon: <FileSyncOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Audit Pending Credits & Amendments",
      desc: "Check whether pending refunds, carry-forward tax losses, R&D credits, or prior-period amendments are due to adjust the overall debt balance.",
    },
    {
      icon: <AuditOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Reconcile ATO Portal to Accounting Software",
      desc: "Verify whether the ATO running balance account (ICA) precisely agrees with your general ledger, payroll liabilities, and balance sheet records.",
    },
    {
      icon: <SplitCellsOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Separate Income Tax vs BAS Debt Streams",
      desc: "Identify the specific tax type. Income tax (Client Account) and activity statement debts (Integrated Client Account) often require separate online payment arrangements.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="cyan" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Due Diligence First
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Check the debt before proposing a payment plan
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            An arrangement should be based on the correct debt. Review whether all returns and BAS are lodged, whether credits or amendments are pending, and whether the ATO account agrees with the underlying accounting records. Also identify the tax type: income tax and activity statement debts may require separate online payment plans.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {checkSteps.map((step, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-6 bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 hover:border-brand-emerald dark:hover:border-brand-emerald transition-all duration-300 hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-zinc-700/60 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                <CheckCircleOutlined /> Pre-Submission Check
              </div>
            </div>
          ))}
        </div>

        {/* Interconnected Service Navigation Cards */}
        <div className="rounded-2xl p-6 sm:p-8 bg-slate-50 dark:bg-zinc-800/50 border border-slate-200/80 dark:border-zinc-700/80">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
            Interconnected Tax Compliance & Catch-Up Services
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-6 font-normal">
            For businesses with incomplete obligations, business tax compliance may need to be addressed alongside the debt. If activity statements are outstanding, our BAS lodgement service covers preparation and lodgement within scope. If historical individual returns created or contributed to the debt, see prior-year and overdue tax returns.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/services/ato-help/overdue-bas"
              className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-colors flex items-center justify-between group"
            >
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  Overdue BAS Catch-Up Service
                </h4>
                <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
                  Reconcile GST, PAYG withholding, and super liabilities
                </p>
              </div>
              <ArrowRightOutlined className="text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
            </Link>

            <Link
              href="/services/ato-help/overdue-tax-returns"
              className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-colors flex items-center justify-between group"
            >
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  Prior-Year & Overdue Tax Returns
                </h4>
                <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
                  Lodge multiple back-years and reconstruct missing tax records
                </p>
              </div>
              <ArrowRightOutlined className="text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
