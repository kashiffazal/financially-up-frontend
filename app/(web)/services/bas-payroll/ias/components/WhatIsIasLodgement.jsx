"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileTextOutlined,
  CheckCircleOutlined,
  CalendarOutlined,
  DollarOutlined,
  TeamOutlined,
  RiseOutlined,
  AlertOutlined,
} from "@ant-design/icons";

/**
 * WhatIsIasLodgement Component
 * Covers 'What is IAS lodgement?' and 'Who may need IAS preparation services?'
 * from Page 7 of 5th Pillar BAS, GST & Payroll.docx.
 */
export default function WhatIsIasLodgement() {
  const taxpayerScenarios = [
    {
      title: "Employers Withholding Tax",
      desc: "Businesses that withhold tax from employee or other reportable payments.",
      icon: <TeamOutlined className="text-emerald-600 dark:text-emerald-400 text-xl" />,
    },
    {
      title: "PAYG Instalment Payers",
      desc: "Sole traders, companies, trusts or investors paying PAYG income tax instalments.",
      icon: <DollarOutlined className="text-teal-600 dark:text-teal-400 text-xl" />,
    },
    {
      title: "Monthly Reporting Schedules",
      desc: "Businesses that receive an IAS between quarterly BAS periods because some obligations are reported more frequently.",
      icon: <CalendarOutlined className="text-blue-600 dark:text-blue-400 text-xl" />,
    },
    {
      title: "Instalment Variation Reviews",
      desc: "Taxpayers who need to review or vary a PAYG instalment amount or rate where the rules allow and the estimate can be supported.",
      icon: <RiseOutlined className="text-indigo-600 dark:text-indigo-400 text-xl" />,
    },
    {
      title: "Backlogged or Overdue Statements",
      desc: "Businesses with overdue or unreconciled IAS periods that need their records brought up to date before lodgement.",
      icon: <AlertOutlined className="text-amber-600 dark:text-amber-400 text-xl" />,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Part 1: What is IAS lodgement? */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-6">
            <Tag color="blue" className="brand-section-tag font-bold tracking-wider uppercase text-xs">
              <FileTextOutlined className="mr-1.5" />
              Activity Statement
            </Tag>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              What is IAS lodgement?
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              IAS lodgement is the process of preparing and submitting the Instalment Activity Statement issued by the ATO for the relevant reporting period. Unlike a Business Activity Statement, an IAS generally does not contain GST reporting labels. It is commonly used for PAYG instalments, PAYG withholding and, in some circumstances, other instalment obligations shown on the ATO-issued form.
            </p>

            <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              The important point is that the form itself determines what must be reported. An IAS lodgement service should therefore start with the ATO statement and the taxpayer’s underlying records rather than assuming every IAS contains the same obligations.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200 dark:border-zinc-700 shadow-xs space-y-4">
              <div className="flex items-center gap-3 text-brand-primary dark:text-emerald-400">
                <CalendarOutlined className="text-2xl" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Form-Specific Obligations
                </h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Because an IAS is tailored to your registered tax roles, an accountant begins by inspecting your personalized ATO activity statement document to verify exactly which labels are due.
              </p>
            </div>
          </div>
        </div>

        {/* Part 2: Who may need IAS preparation services? */}
        <div className="pt-12 border-t border-slate-200/80 dark:border-zinc-800">
          <div className="max-w-3xl mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Who may need IAS preparation services?
            </h3>
            <p className="text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              IAS preparation may be relevant to a range of taxpayers. A sole trader or investor may receive an IAS because they are in the PAYG instalment system. A business with employees may have a PAYG withholding obligation. Some entities have both obligations on the same activity statement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {taxpayerScenarios.map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-200/80 dark:border-zinc-700/80 hover:border-emerald-400/60 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-700/60 border border-slate-200/60 dark:border-zinc-600/40 flex items-center justify-center mb-5">
                    {item.icon}
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
