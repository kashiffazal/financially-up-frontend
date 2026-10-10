"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileTextOutlined,
  TeamOutlined,
  HistoryOutlined,
  AccountBookOutlined,
  BankOutlined,
  EditOutlined,
} from "@ant-design/icons";

/**
 * WhatInformationShouldYouPrepare Component
 * =========================================
 * Section: What information should you prepare?
 * Verbatim text from Page 7 of client docx (8th Pillar Trust Services.docx).
 * Features 6 structured document readiness cards for trust restructuring reviews.
 */
export default function WhatInformationShouldYouPrepare() {
  const documents = [
    {
      icon: <FileTextOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Current Trust Deed & Variations",
      desc: "The original executed trust deed and all subsequent amending deeds, variations, and schedules.",
    },
    {
      icon: <TeamOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Trustee & Appointer Details",
      desc: "Full legal names and details of the current and proposed trustee, appointer, and guardian roles.",
    },
    {
      icon: <AccountBookOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Unit or Beneficiary Information",
      desc: "Current unit register, beneficiary classes, distribution records, and Family Trust Election documents.",
    },
    {
      icon: <HistoryOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Recent Tax Returns & Financials",
      desc: "The most recent trust tax returns, balance sheets, profit and loss statements, and tax loss schedules.",
    },
    {
      icon: <BankOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Assets, Liabilities & Corporate Records",
      desc: "Asset schedules, loan balances, beneficiary loan accounts, and ASIC company records for corporate trustees.",
    },
    {
      icon: <EditOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Description of Proposed Change",
      desc: "A clear written outline describing the commercial, family, or operational goals of the proposed restructure.",
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
            What information should you prepare?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Useful documents typically include the current trust deed and all amending deeds, details of the trustee
            and appointer, unit or beneficiary information, recent trust tax returns and financial statements, asset
            and liability schedules, relevant company records for a corporate trustee, loan balances and a clear
            description of the proposed change.
          </p>
        </div>

        {/* 6 Document Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((item, idx) => (
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
