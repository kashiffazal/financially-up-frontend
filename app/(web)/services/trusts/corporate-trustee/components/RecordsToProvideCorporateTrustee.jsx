"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileTextOutlined,
  BankOutlined,
  TeamOutlined,
  HistoryOutlined,
  AccountBookOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";

/**
 * RecordsToProvideCorporateTrustee Component
 * ==========================================
 * Section: What records should you provide?
 * Verbatim text from Page 5 of client docx (8th Pillar Trust Services.docx).
 * Features 6 essential client document types for trust and corporate trustee reviews.
 */
export default function RecordsToProvideCorporateTrustee() {
  const records = [
    {
      icon: <FileTextOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Trust Deed & Variations",
      desc: "The trust deed and any variations or trustee appointment documents.",
    },
    {
      icon: <BankOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "ASIC Company Statement",
      desc: "ASIC company statement and current company details.",
    },
    {
      icon: <TeamOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Director & Shareholder Information",
      desc: "Director and shareholder information for the trustee company.",
    },
    {
      icon: <HistoryOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Prior Financials & Returns",
      desc: "Prior financial statements and tax returns for the trust.",
    },
    {
      icon: <AccountBookOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Banking, Property & Loan Records",
      desc: "Bank, investment, property, loan and beneficiary records.",
    },
    {
      icon: <FileDoneOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Prior Distribution Resolutions",
      desc: "Prior distribution resolutions and year-end working papers where available.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Client Preparation Checklist
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What records should you provide?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            To ensure a seamless accounting and tax review for both the trust and trustee company, please have the
            following documents accessible for our team.
          </p>
        </div>

        {/* 6 Records Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {records.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-4">
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
