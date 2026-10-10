"use client";

import React from "react";
import { Tag } from "antd";
import {
  ProfileOutlined,
  DollarCircleOutlined,
  BankOutlined,
  FundProjectionScreenOutlined,
  AuditOutlined,
  CheckCircleOutlined,
  CalculatorOutlined,
} from "@ant-design/icons";

/**
 * WhatInformationNeededPaymentPlan Component
 * ==========================================
 * Section 4: What information may be needed?
 * Verbatim text from Page 7 of '11th Pillar ATO Help.docx'.
 *
 * Details the disclosure checklist: statements, management accounts,
 * aged ledgers, and rolling cash-flow models.
 */
export default function WhatInformationNeededPaymentPlan() {
  const disclosureItems = [
    {
      icon: <DollarCircleOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Amount Owed & Hardship Cause",
      desc: "The exact debt balance broken down across income tax and activity statements, and a factual explanation of why immediate payment is difficult.",
    },
    {
      icon: <ProfileOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Income, Expenses, Assets & Liabilities",
      desc: "Documented personal or business revenue, fixed operating costs, property, vehicles, and commercial or personal creditor obligations.",
    },
    {
      icon: <BankOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Bank Balances & Available Finance",
      desc: "Recent bank statements across all accounts, credit facilities, overdrafts, and evidence of any refinancing efforts explored.",
    },
    {
      icon: <CalculatorOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Past Payments & Proposed Terms",
      desc: "Records of lump-sum goodwill payments already made, and proposed instalment amounts and payment frequencies.",
    },
    {
      icon: <AuditOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Management Accounts & Aged Ledgers",
      desc: "Current Profit & Loss, Balance Sheet, aged receivables (debtor collectability), and aged trade payables.",
    },
    {
      icon: <FundProjectionScreenOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "12-Month Cash-Flow Forecast",
      desc: "A realistic forward cash-flow projection proving capacity to meet instalments alongside upcoming tax bills.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="purple" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Financial Disclosure Checklist
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What information may be needed?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            The ATO may ask about the amount owed, why payment is difficult, income and expenses, assets and liabilities, other debts, available finance, payments already made and the proposed instalments. The level of detail depends on the debt and arrangement. A business may need current management accounts, bank balances, aged receivables and payables, and a cash-flow forecast.
          </p>
        </div>

        {/* 6 Disclosure Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {disclosureItems.map((item, idx) => (
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

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-zinc-800 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                <CheckCircleOutlined /> Document Ready
              </div>
            </div>
          ))}
        </div>

        {/* What to Bring Callout */}
        <div className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm">
          <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
            What to Bring to Your Appointment:
          </h4>
          <p className="text-xs sm:text-sm md:text-base text-slate-700 dark:text-zinc-300 leading-relaxed">
            Bring ATO statements or notices, recent bank and bookkeeping records, details of other liabilities and a realistic estimate of future income and essential expenditure. We can identify which tax accounts and periods are involved, reconcile credits or payments, and test whether the proposed instalment is affordable alongside upcoming liabilities.
          </p>
        </div>
      </div>
    </section>
  );
}
