"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileTextOutlined,
  CheckCircleOutlined,
  AuditOutlined,
  DollarOutlined,
  SyncOutlined,
  SearchOutlined,
  SendOutlined,
} from "@ant-design/icons";

/**
 * WhatIsIncludedBasLodgement Component
 * Covers 'What is included in a BAS lodgement service?'
 * from Page 2 of 5th Pillar BAS, GST & Payroll.docx.
 */
export default function WhatIsIncludedBasLodgement() {
  const inclusions = [
    {
      icon: <SearchOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Reviewing sales and purchase information relevant to the BAS period",
      detail: "Examining total revenue, client billings, supplier invoices, and operating expenses allocated to the quarter or month.",
    },
    {
      icon: <DollarOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Checking GST on taxable sales and eligible business purchases",
      detail: "Verifying standard 10% GST calculations, GST-free supplies, export transactions, and input taxed expense items.",
    },
    {
      icon: <AuditOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Reviewing PAYG withholding or PAYG instalment labels where they apply",
      detail: "Confirming employee payroll withholding deductions (W1/W2) and company/individual income tax instalments (T7/1A).",
    },
    {
      icon: <SyncOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Reconciling key figures back to the accounting records",
      detail: "Cross-referencing general ledger tax accounts, bank statements, and activity statement summary reports.",
    },
    {
      icon: <CheckCircleOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Identifying missing records, coding issues or unusual transactions",
      detail: "Flagging missing tax invoices, personal drawings incorrectly marked as expenses, or duplicate entries.",
    },
    {
      icon: <SendOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Preparing and lodging the BAS once the information is ready",
      detail: "Compiling formal ATO activity statement schedules and transmitting electronically via the secure tax agent portal.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-4 font-bold tracking-wider uppercase text-xs">
            <FileTextOutlined className="mr-1.5" />
            Service Scope
          </Tag>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            What is included in a BAS lodgement service?
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            The work typically starts with the records for the relevant period. Transactions are reviewed, GST coding is checked where applicable, key accounts are reconciled and the activity-statement figures are prepared for lodgement. If something does not make sense, it should be clarified before the BAS is submitted rather than guessed.
          </p>
        </div>

        {/* 6 Inclusions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {inclusions.map((item, index) => (
            <div
              key={index}
              className="p-7 rounded-2xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-200/80 dark:border-zinc-700/80 hover:border-emerald-400/60 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-700/60 border border-slate-200/60 dark:border-zinc-600/40 flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
