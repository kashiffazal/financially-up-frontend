"use client";

import React from "react";
import { Tag } from "antd";
import {
  FolderOpenOutlined,
  CheckCircleOutlined,
  SolutionOutlined,
  InfoCircleOutlined,
  FileDoneOutlined,
  TableOutlined,
  AuditOutlined,
  MailOutlined,
} from "@ant-design/icons";

/**
 * RecordsNeededAndHowFinanciallyUpHelps Component
 * Covers 'Records and Information We May Need' and 'How Financially Up Can Help'
 * from Page 5 of 5th Pillar BAS, GST & Payroll.docx.
 */
export default function RecordsNeededAndHowFinanciallyUpHelps() {
  const records = [
    {
      title: "Detailed payroll reports & summary registers",
      icon: <TableOutlined className="text-emerald-600 dark:text-emerald-400 text-lg" />,
    },
    {
      title: "Employee setup details & TFN declarations",
      icon: <FileDoneOutlined className="text-teal-600 dark:text-teal-400 text-lg" />,
    },
    {
      title: "Prior STP submission summaries & pay event IDs",
      icon: <AuditOutlined className="text-blue-600 dark:text-blue-400 text-lg" />,
    },
    {
      title: "Year-to-date payroll earnings data & leave logs",
      icon: <TableOutlined className="text-indigo-600 dark:text-indigo-400 text-lg" />,
    },
    {
      title: "Payroll clearing accounts & general ledger reconciliations",
      icon: <CheckCircleOutlined className="text-purple-600 dark:text-purple-400 text-lg" />,
    },
    {
      title: "Activity statements (BAS/IAS) & ATO error notices",
      icon: <MailOutlined className="text-rose-600 dark:text-rose-400 text-lg" />,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Part 1: Records and Information We May Need */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-4 font-bold tracking-wider uppercase text-xs">
            <FolderOpenOutlined className="mr-1.5" />
            Information Checklist
          </Tag>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Records and Information We May Need
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Depending on the issue, useful information may include payroll reports, employee setup details, prior STP submission summaries, year-to-date payroll data, payroll clearing accounts, activity statements and any ATO messages or error notices. The aim is to reconcile the underlying records before submitting or correcting reported figures.
          </p>
        </div>

        {/* 6 Records Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {records.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-200/80 dark:border-zinc-700/80 hover:border-emerald-400/60 transition-all flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-700/60 border border-slate-200/60 dark:border-zinc-600/40 flex items-center justify-center shrink-0 mt-0.5">
                {item.icon}
              </div>
              <p className="text-sm font-medium text-slate-800 dark:text-zinc-200 leading-snug pt-2">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* Part 2: How Financially Up Can Help */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 space-y-4">
          <div className="flex items-center gap-2 text-brand-primary dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
            <SolutionOutlined />
            End-To-End Delivery
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            How Financially Up Can Help
          </h3>
          <p className="text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Financially Up can provide STP payroll services for businesses needing practical support with setup, recurring reporting, corrections and year-end finalization. We can also coordinate STP with broader payroll, bookkeeping and BAS work where those services are included in the engagement.
          </p>
          <div className="pt-2 flex items-start gap-3 text-xs sm:text-sm text-slate-500 dark:text-zinc-400 border-t border-slate-200 dark:border-zinc-700">
            <InfoCircleOutlined className="text-base text-brand-primary shrink-0 mt-0.5" />
            <span>
              Our role is to help with payroll-related accounting and tax reporting. Employment contracts, award interpretation and legal workplace matters are outside routine STP compliance work and may require separate advice.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
