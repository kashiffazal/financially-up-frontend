"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileTextOutlined,
  FileDoneOutlined,
  BankOutlined,
  AccountBookOutlined,
  AuditOutlined,
  SwapOutlined,
} from "@ant-design/icons";

/**
 * RecordsToHaveReadyBareTrust Component
 * =====================================
 * Section: What records should you have ready?
 * Verbatim text from Page 4 of client docx (8th Pillar Trust Services.docx).
 * Lists the 6 essential documentation types needed for bare trust accounting reviews.
 */
export default function RecordsToHaveReadyBareTrust() {
  const records = [
    {
      icon: <FileTextOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Trust Deed & Declarations",
      desc: "Trust deed, declaration of trust or other document establishing the arrangement.",
    },
    {
      icon: <FileDoneOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Contract & Settlement Statements",
      desc: "Purchase contract, settlement statement and title or asset-registration information.",
    },
    {
      icon: <BankOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Loan & Finance Documents",
      desc: "Loan and finance documents, bank statements and interest records.",
    },
    {
      icon: <AccountBookOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Asset Income & Expense Records",
      desc: "Income and expense records connected with the asset.",
    },
    {
      icon: <AuditOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "GST, Tax Invoices & BAS Data",
      desc: "GST registrations, tax invoices and BAS information where relevant.",
    },
    {
      icon: <SwapOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Disposal & Ownership Changes",
      desc: "Any documents dealing with a change of trustee, beneficiary, ownership or proposed disposal.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950/60 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Client Preparation Checklist
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What records should you have ready?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Having the relevant documentation ready ensures our accounting team can quickly assess ownership
            arrangements, loan flows, and statutory lodgement obligations.
          </p>
        </div>

        {/* 6 Records Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {records.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
