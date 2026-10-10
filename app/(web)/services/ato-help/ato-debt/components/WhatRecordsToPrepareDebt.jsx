"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileTextOutlined,
  AuditOutlined,
  BankOutlined,
  ProfileOutlined,
  CalculatorOutlined,
  FundProjectionScreenOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * WhatRecordsToPrepareDebt Component
 * ==================================
 * Section 8: What records should you prepare?
 * Verbatim text from Page 2 of '11th Pillar ATO Help.docx'.
 *
 * Provides a structured checklist of documents for individuals and businesses
 * entering an ATO debt review or payment plan negotiation.
 */
export default function WhatRecordsToPrepareDebt() {
  const essentialRecords = [
    {
      icon: <FileTextOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "ATO Debt Notice or Account Statement",
      desc: "Latest Statement of Account, notice of demand, or Integrated Client Account running statement showing total balance and penalty breakdowns.",
    },
    {
      icon: <AuditOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Recent Tax Returns & BAS",
      desc: "Copies of your most recently lodged income tax returns, monthly/quarterly Business Activity Statements, and notices of assessment.",
    },
    {
      icon: <BankOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Current Bookkeeping & Bank Balances",
      desc: "Real-time bank account statements across all trading and savings accounts, credit cards, and merchant clearing facilities.",
    },
    {
      icon: <ProfileOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Other Debts & Financial Commitments",
      desc: "Details of other liabilities, vehicle/equipment finance agreements, commercial leases, mortgages, and personal creditor obligations.",
    },
    {
      icon: <CalculatorOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Realistic Summary of Income & Expenditure",
      desc: "Documented average monthly revenue, fixed overheads, living expenses, and historical cash draws.",
    },
    {
      icon: <FundProjectionScreenOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Business Financial Reports & Forecast",
      desc: "Businesses may also need current profit and loss and balance-sheet reports, aged receivables and payables, payroll liabilities and a forecast showing how the proposed instalments and new tax will be funded.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="blue" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Client Preparation Checklist
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What records should you prepare?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Have the ATO debt notice or account statement, recent tax returns and BAS, current bookkeeping records, bank balances, details of other debts and commitments, and a realistic summary of income and expenditure. Businesses may also need current profit and loss and balance-sheet reports, aged receivables and payables, payroll liabilities and a forecast showing how the proposed instalments and new tax will be funded.
          </p>
        </div>

        {/* 6 Records Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {essentialRecords.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-6 bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm hover:border-brand-emerald dark:hover:border-brand-emerald transition-all duration-300 hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-zinc-800 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-zinc-800/80 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                <CheckCircleOutlined /> Document Ready
              </div>
            </div>
          ))}
        </div>

        {/* Helpful Tip */}
        <div className="rounded-2xl p-6 bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 text-center">
          <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300">
            <strong>Missing records or overdue accounting?</strong> Don't let incomplete paperwork delay you. Financially Up can help reconcile your files, reconstruct missing data, and gather required records from the ATO tax agent portal.
          </p>
        </div>
      </div>
    </section>
  );
}
