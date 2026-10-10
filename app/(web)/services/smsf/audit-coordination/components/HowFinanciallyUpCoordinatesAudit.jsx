"use client";

import React from "react";
import { Tag } from "antd";
import {
  AuditOutlined,
  CheckCircleOutlined,
  SolutionOutlined,
  SafetyCertificateOutlined,
  FileSearchOutlined,
} from "@ant-design/icons";

/**
 * HowFinanciallyUpCoordinatesAudit Component
 * ==========================================
 * Implements verbatim SEO content from Page 7 of 9th Pillar SMSF.docx:
 * - How Financially Up coordinates the SMSF annual audit
 * - Pre-audit review, workpaper assembly, query management & professional boundaries
 */
export default function HowFinanciallyUpCoordinatesAudit() {
  const coordinationSteps = [
    {
      title: "Pre-Audit File Health Check",
      desc: "We review the accounting records for obvious gaps, unreconciled transactions, or missing statements before the auditor receives the file.",
    },
    {
      title: "Workpaper Pack Compilation",
      desc: "Preparing annual financial statements, trial balances, member statements, and comprehensive supporting schedules in a standardized digital pack.",
    },
    {
      title: "Direct Query Management",
      desc: "Where the auditor raises queries, we help locate accounting evidence, explain transactions within our scope and work with the trustees to obtain missing records.",
    },
    {
      title: "Statutory Boundary Delineation",
      desc: "If an issue is more than a documentation question—such as a potential rule breach or legal dispute—we identify that distinction early for specialist legal/financial input.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="blue" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Liaison & Coordination Process
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How Financially Up coordinates the SMSF annual audit
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A practical SMSF audit service starts before the auditor receives the file. We review the accounting records for obvious gaps, prepare the annual financial statements and supporting work papers, then provide the agreed audit package to the independent auditor. Where the auditor raises queries, we help locate accounting evidence, explain transactions within our scope and work with the trustees to obtain missing records.
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            If an issue is more than a documentation question - for example, a possible breach of the super rules, a disputed legal arrangement or a matter requiring regulated financial product advice - we identify that distinction early. The trustee may need separate legal or appropriately authorized financial advice depending on the issue.
          </p>
        </div>

        {/* 4 Coordination Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 w-full">
          {coordinationSteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-md hover:border-blue-400/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/40 flex items-center justify-center mb-4">
                  <FileSearchOutlined className="text-xl text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Auditor Independence Safeguard Banner */}
        <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 w-full shadow-xs flex items-start sm:items-center gap-4">
          <SafetyCertificateOutlined className="text-2xl text-purple-600 dark:text-purple-400 shrink-0 mt-0.5 sm:mt-0" />
          <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed m-0 font-normal">
            <span className="font-bold text-slate-900 dark:text-white">Strict Independence Requirement:</span> Financially Up prepares the accounts and coordinates the audit process. The statutory financial and compliance audit must be carried out independently by an ASIC-approved SMSF auditor who satisfies APES 110 independence standards.
          </p>
        </div>
      </div>
    </section>
  );
}
