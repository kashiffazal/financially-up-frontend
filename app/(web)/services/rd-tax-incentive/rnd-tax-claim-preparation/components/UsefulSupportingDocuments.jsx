"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileTextOutlined,
  ExperimentOutlined,
  TeamOutlined,
  SolutionOutlined,
  BookOutlined,
  GlobalOutlined,
  AuditOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";

/**
 * UsefulSupportingDocuments Component
 * ===================================
 * Section: What supporting documents are useful?
 * Verbatim text from Page 2 of 15th Pillar R&D Tax Incentive docx.
 */
export default function UsefulSupportingDocuments() {
  const documents = [
    {
      icon: <FileTextOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Registration details & activity scopes",
      description: "Registration application, number and descriptions of activities",
    },
    {
      icon: <ExperimentOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Experimental evidence & hypotheses",
      description: "Project plans, hypotheses, dated experiment and test records",
    },
    {
      icon: <TeamOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Labour records & time tracking",
      description: "Payroll, timesheets and evidence of work allocation",
    },
    {
      icon: <SolutionOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Third-party & contractor documentation",
      description: "Contractor agreements, invoices and proof of services delivered",
    },
    {
      icon: <BookOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "General ledger & cost reconciliations",
      description: "Ledger reports, material purchases and cost reconciliations",
    },
    {
      icon: <GlobalOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Grants, related parties & offshore work",
      description: "Details of grants, other funding, related parties and overseas work",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50/60 dark:bg-zinc-950/60 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs"
          >
            Substantiation Evidence
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What supporting documents are useful?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A supportable R&amp;D claim aligns technical milestones with detailed accounting ledgers.
            Gathering contemporaneous evidence early protects your company in the event of an ATO or AusIndustry review.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {documents.map((doc, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:border-emerald-500/50 hover:shadow-md transition-all duration-300 flex items-start gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-800/80 flex items-center justify-center shrink-0 border border-slate-200/60 dark:border-zinc-700/60 group-hover:bg-emerald-50 dark:group-hover:bg-emerald-950/40 group-hover:border-emerald-200 dark:group-hover:border-emerald-800/60 transition-colors">
                {doc.icon}
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 block mb-1">
                  Item 0{idx + 1}
                </span>
                <p className="text-sm font-semibold text-slate-900 dark:text-white leading-relaxed">
                  {doc.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Explanatory Alert Callout */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
          <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-3">
            <AuditOutlined className="text-base" />
            <span>Regulator Substantiation Standard</span>
          </div>
          <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
            The technical records explain what the company did and why; the financial records
            substantiate what it spent on those activities. If records contradict a proposed
            description or do not separate routine work, we identify the issue before treating the
            expenditure as claimable. The company must be able to support its self-assessment if a
            regulator reviews it later.
          </p>
        </div>
      </div>
    </section>
  );
}
