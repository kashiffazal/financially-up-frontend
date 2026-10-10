"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileTextOutlined,
  UserSwitchOutlined,
  BankOutlined,
  SafetyCertificateOutlined,
  HistoryOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";

/**
 * WhatInformationShouldYouPrepareAppointor Component
 * =================================================
 * Section: What information should you prepare?
 * Verbatim text from Page 9 of client docx (8th Pillar Trust Services.docx).
 * Features 6 structured preparation categories for appointor change reviews.
 */
export default function WhatInformationShouldYouPrepareAppointor() {
  const documents = [
    {
      icon: <FileTextOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Current Deed & Amendments",
      desc: "The current executed trust deed, appointor schedule clauses, and all subsequent amending deeds.",
    },
    {
      icon: <UserSwitchOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Prior Nominations & Succession Deeds",
      desc: "Any prior appointor nominations, deeds of succession, or protector appointment documents.",
    },
    {
      icon: <BankOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Trustee & Corporate Details",
      desc: "Full details of the current trustee, corporate trustee extracts, directors, and shareholder records.",
    },
    {
      icon: <SafetyCertificateOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Family Trust Election (FTE) Records",
      desc: "Family trust election and interposed entity election forms lodged with the ATO.",
    },
    {
      icon: <HistoryOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Recent Tax Returns & Financials",
      desc: "Recent trust financial statements and tax returns, including carried-forward loss schedules.",
    },
    {
      icon: <FileDoneOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Proposed Appointor Legal Drafts",
      desc: "The proposed legal documents or deed prepared for the appointor appointment or retirement.",
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
            What information should you prepare?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Useful documents include the current trust deed and all amendments, any prior appointor nominations or
            succession documents, trustee and corporate trustee details, family trust election information where
            relevant, recent trust tax returns and financial statements, carried-forward loss information, and the
            proposed legal documents for the appointor change.
          </p>
        </div>

        {/* 6 Document Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((item, idx) => (
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
