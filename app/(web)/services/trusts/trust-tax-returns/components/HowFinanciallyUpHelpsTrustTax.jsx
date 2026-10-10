"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  BookOutlined,
  ReconciliationOutlined,
  FileDoneOutlined,
  AlertOutlined,
  TeamOutlined,
  AuditOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * HowFinanciallyUpHelpsTrustTax Component
 * =======================================
 * Section: How Financially Up can help
 * Verbatim text from Page 6 of client docx (8th Pillar Trust Services.docx).
 * Lists the 6 core accounting, tax preparation, reconciliation, and lodgement deliverables.
 */
export default function HowFinanciallyUpHelpsTrustTax() {
  const deliverables = [
    {
      icon: <BookOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Year-End Trust Accounts",
      desc: "Prepare or review year-end trust accounts from available bookkeeping records.",
    },
    {
      icon: <ReconciliationOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Comprehensive Ledgers Reconciliation",
      desc: "Reconcile income, expenses, assets, liabilities and beneficiary balances.",
    },
    {
      icon: <FileDoneOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Trust Tax Return & Distribution Statement",
      desc: "Prepare the trust tax return and statement of distribution where required.",
    },
    {
      icon: <AlertOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Pre-Lodgement Resolution of Tax Issues",
      desc: "Identify missing records or tax issues that need to be resolved before lodgement.",
    },
    {
      icon: <TeamOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Beneficiary Tax Alignment",
      desc: "Coordinate beneficiary tax information with related individual or entity returns where separately engaged.",
    },
    {
      icon: <AuditOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "ATO Representation & Prior-Year Lodgements",
      desc: "Assist with ATO correspondence or prior-year lodgements where separately scoped.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Professional Deliverables
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How Financially Up can help
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            We provide structured accounting, reconciliation, and tax lodgement support tailored to Australian private
            and family trust structures.
          </p>
        </div>

        {/* 6 Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {deliverables.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Callout Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-brand-bg-lighter via-white to-slate-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border border-slate-200 dark:border-zinc-800 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              Need Prior-Year or Current-Year Trust Lodgement?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Book an appointment to review your trust accounts and agree on an efficient lodgement timetable.
            </p>
          </div>
          <Link
            href="/book-an-appointment"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 transition-colors shadow-sm shrink-0"
          >
            Book an Appointment <ArrowRightOutlined className="ml-2 text-xs" />
          </Link>
        </div>
      </div>
    </section>
  );
}
