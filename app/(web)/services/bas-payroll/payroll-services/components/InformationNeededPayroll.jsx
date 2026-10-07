"use client";

import React from "react";
import { Tag } from "antd";
import {
  FolderOpenOutlined,
  CheckCircleOutlined,
  SolutionOutlined,
  InfoCircleOutlined,
  IdcardOutlined,
  CalendarOutlined,
  DollarOutlined,
  FileTextOutlined,
  AuditOutlined,
} from "@ant-design/icons";

/**
 * InformationNeededPayroll Component
 * Covers 'What Information May Be Needed?' and 'How Financially Up Can Help'
 * from Page 4 of 5th Pillar BAS, GST & Payroll.docx.
 */
export default function InformationNeededPayroll() {
  const items = [
    {
      title: "Employee Details & Onboarding",
      desc: "Full legal names, TFN declarations, contact details, date of birth, and emergency contacts.",
      icon: <IdcardOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
    },
    {
      title: "Tax & Superannuation Records",
      desc: "Super choice forms, fund USI/ABN details, member numbers, and employee withholding variations.",
      icon: <AuditOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
    },
    {
      title: "Approved Pay Rates & Hours",
      desc: "Signed employment agreements, approved hourly/salary rates, timesheets, and overtime records.",
      icon: <DollarOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
    },
    {
      title: "Leave Accruals & Requests",
      desc: "Annual leave, personal/carer's leave, unpaid absences, and statutory public holiday arrangements.",
      icon: <CalendarOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
    },
    {
      title: "Allowances & Deductions",
      desc: "Authorized tool/travel allowances, child support garnishees, and voluntary salary sacrifice entries.",
      icon: <FileTextOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
    },
    {
      title: "Prior-Period Payroll Ledgers",
      desc: "Year-to-date earnings summaries, prior STP pay events, and clearing account reconciliations.",
      icon: <CheckCircleOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Part 1: What Information May Be Needed? */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-4 font-bold tracking-wider uppercase text-xs">
            <FolderOpenOutlined className="mr-1.5" />
            Checklist
          </Tag>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            What Information May Be Needed?
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            The information required depends on your payroll system and workforce. It may include employee details, tax and super information, employment status, approved pay rates, timesheets, leave records, allowances, deductions, payroll adjustments and previous payroll reports. Employers should also keep the records required under workplace and tax rules.
          </p>
        </div>

        {/* 6 Information Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-200/80 dark:border-zinc-700/80 hover:border-emerald-400/60 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-700/60 border border-slate-200/60 dark:border-zinc-600/40 flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Part 2: How Financially Up Can Help */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 space-y-4">
          <div className="flex items-center gap-2 text-brand-primary dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
            <SolutionOutlined />
            Our Practice Scope
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            How Financially Up Can Help
          </h3>
          <p className="text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Financially Up can provide payroll processing services as a defined ongoing or periodic service. We can help review your payroll workflow, process approved payroll information, coordinate STP reporting and support payroll-related bookkeeping and employer reporting where included in scope.
          </p>
          <div className="pt-2 flex items-start gap-3 text-xs sm:text-sm text-slate-500 dark:text-zinc-400 border-t border-slate-200 dark:border-zinc-700">
            <InfoCircleOutlined className="text-base text-brand-primary shrink-0 mt-0.5" />
            <span>
              Where an issue requires employment-law interpretation, award advice or another specialist service outside our accounting and tax scope, that work may need to be obtained separately.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
