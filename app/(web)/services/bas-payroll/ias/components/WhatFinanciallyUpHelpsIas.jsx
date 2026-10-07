"use client";

import React from "react";
import { Tag } from "antd";
import {
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  AuditOutlined,
  DollarOutlined,
  TeamOutlined,
  FileDoneOutlined,
  ToolOutlined,
  QuestionCircleOutlined,
  FolderOpenOutlined,
} from "@ant-design/icons";

/**
 * WhatFinanciallyUpHelpsIas Component
 * Covers 'What Financially Up can help with' and 'What information may be needed?'
 * from Page 7 of 5th Pillar BAS, GST & Payroll.docx.
 */
export default function WhatFinanciallyUpHelpsIas() {
  const helpItems = [
    {
      title: "Reviewing the ATO-Issued IAS",
      desc: "Reviewing the ATO-issued IAS and identifying the reporting obligations shown.",
      icon: <AuditOutlined className="text-emerald-600 dark:text-emerald-400 text-lg" />,
    },
    {
      title: "Reconciling PAYG Withholding",
      desc: "Reconciling PAYG withholding amounts to payroll records.",
      icon: <TeamOutlined className="text-teal-600 dark:text-teal-400 text-lg" />,
    },
    {
      title: "Reviewing PAYG Instalment Figures",
      desc: "Reviewing PAYG instalment figures and the basis for any proposed variation.",
      icon: <DollarOutlined className="text-blue-600 dark:text-blue-400 text-lg" />,
    },
    {
      title: "Preparing Current & Overdue Statements",
      desc: "Preparing and lodging current or overdue IAS periods.",
      icon: <FileDoneOutlined className="text-indigo-600 dark:text-indigo-400 text-lg" />,
    },
    {
      title: "Identifying Underlying Errors",
      desc: "Identifying bookkeeping or payroll issues that should be corrected before lodgement.",
      icon: <ToolOutlined className="text-amber-600 dark:text-amber-400 text-lg" />,
    },
    {
      title: "Explaining Tax Obligations",
      desc: "Explaining what the IAS payment represents and how it relates to later tax obligations.",
      icon: <QuestionCircleOutlined className="text-purple-600 dark:text-purple-400 text-lg" />,
    },
  ];

  const recordsList = [
    "ATO activity statement document",
    "Payroll summaries and wage records",
    "Single Touch Payroll (STP) reports",
    "General ledger or bookkeeping reports",
    "Prior activity statements and historical returns",
    "Details of ATO instalment amounts or rates",
    "Current-year financial information where a PAYG instalment variation is being considered",
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950/70 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Part 1: What Financially Up can help with */}
        <div className="max-w-3xl mb-14">
          <Tag color="green" className="brand-section-tag font-bold tracking-wider uppercase text-xs mb-3">
            <SafetyCertificateOutlined className="mr-1.5" />
            Expert Scope
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            What Financially Up can help with
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Our IAS lodgement service can include reviewing the activity statement period, checking the relevant bookkeeping or payroll figures, reconciling amounts to supporting records, preparing the required IAS labels and lodging the statement within the agreed scope. Where an error is identified in an earlier period, we can first determine whether a revision or other corrective action may be appropriate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {helpItems.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:border-emerald-400/60 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-zinc-800 border border-slate-200/60 dark:border-zinc-700/60 flex items-center justify-center mb-4">
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

        {/* Part 2: What information may be needed? */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <FolderOpenOutlined className="text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  What information may be needed?
                </h3>
              </div>
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                The records required depend on the labels included on the IAS. Common information includes the ATO activity statement, payroll summaries, STP reports, general ledger or bookkeeping reports, prior activity statements, details of ATO instalment amounts or rates, and current-year financial information where a PAYG instalment variation is being considered.
              </p>
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Good records matter because an IAS is not just a payment form. The figures reported to the ATO should be supportable and consistent with the business records used for later tax and accounting work.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="p-6 sm:p-7 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200 dark:border-zinc-700/80">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
                  Common IAS Supporting Records:
                </h4>
                <ul className="space-y-3">
                  {recordsList.map((rec, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-600 dark:text-zinc-300">
                      <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
