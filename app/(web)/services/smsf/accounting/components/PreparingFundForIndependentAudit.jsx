"use client";

import React from "react";
import { Tag } from "antd";
import {
  AuditOutlined,
  FileDoneOutlined,
  CheckCircleOutlined,
  SolutionOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";

/**
 * PreparingFundForIndependentAudit Component
 * ==========================================
 * Implements verbatim SEO content from Page 2 of 9th Pillar SMSF.docx:
 * - Preparing the fund for its independent audit (7 core audit file components).
 */
export default function PreparingFundForIndependentAudit() {
  const auditFileDeliverables = [
    {
      title: "Signed or finalized annual financial statements",
      desc: "Operating statement, statement of financial position, and trustee representation letters.",
    },
    {
      title: "Bank and investment statements supporting year-end balances",
      desc: "Full 1 July to 30 June bank statements, broker confirmations, and platform annual tax summaries.",
    },
    {
      title: "Support for asset valuations",
      desc: "Objective market data, council rate notices, comparable sales, or independent valuation certificates.",
    },
    {
      title: "Contribution and rollover records",
      desc: "Notices of intent (s290-170), SuperStream rollover statements, and member eligibility documentation.",
    },
    {
      title: "Benefit-payment and pension documentation where relevant",
      desc: "Pension commencement minutes, minimum pension payment schedules, and member drawdown confirmations.",
    },
    {
      title: "Minutes, investment strategy documents and material transaction records",
      desc: "Annual investment strategy review, trustee resolutions, and contracts for material transactions.",
    },
    {
      title: "Loan or limited recourse borrowing documents where applicable",
      desc: "Bare trust deeds, loan agreements, interest calculations, and bank repayment statements for LRBA assets.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="purple" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Independent Audit Readiness
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Preparing the fund for its independent audit
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            SMSF accounting and SMSF audit are separate functions. The independent approved auditor examines both the fund&apos;s financial statements and its compliance with superannuation law. A well-prepared accounting file makes it easier to provide the auditor with source documents, trustee records, investment evidence and explanations for material transactions.
          </p>
        </div>

        {/* 7 Audit File Deliverables */}
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-zinc-800 shadow-sm mb-10">
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-200 dark:border-zinc-800">
            <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800/40 flex items-center justify-center shrink-0">
              <SolutionOutlined className="text-xl text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                Comprehensive Audit Workpaper File
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400">
                Financially Up prepares a complete, verified pack for your ASIC-registered approved SMSF auditor.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {auditFileDeliverables.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-slate-50/80 dark:bg-zinc-950/60 border border-slate-200/60 dark:border-zinc-800/80 hover:border-purple-300 dark:hover:border-purple-700/60 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Auditor Independence Safeguard */}
        <div className="p-6 rounded-2xl bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 flex items-start sm:items-center gap-4">
          <SafetyCertificateOutlined className="text-2xl text-purple-600 dark:text-purple-400 shrink-0 mt-0.5 sm:mt-0" />
          <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed m-0 font-normal">
            <span className="font-bold text-slate-900 dark:text-white">Professional Independence Boundary:</span> An SMSF accountant cannot audit the same fund they prepare accounts for. In accordance with APES 110 Code of Ethics and superannuation legislation, your SMSF must be independently examined by an ASIC-approved auditor.
          </p>
        </div>
      </div>
    </section>
  );
}
