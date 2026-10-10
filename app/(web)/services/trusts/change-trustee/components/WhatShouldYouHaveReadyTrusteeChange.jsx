"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileTextOutlined,
  UserSwitchOutlined,
  CalendarOutlined,
  HistoryOutlined,
  HomeOutlined,
  BankOutlined,
} from "@ant-design/icons";

/**
 * WhatShouldYouHaveReadyTrusteeChange Component
 * ============================================
 * Section: What should you have ready?
 * Verbatim text from Page 8 of client docx (8th Pillar Trust Services.docx).
 * Features 6 structured preparation cards for trustee transition reviews.
 */
export default function WhatShouldYouHaveReadyTrusteeChange() {
  const documents = [
    {
      icon: <FileTextOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Trust Deed & Amendments",
      desc: "The current executed trust deed, rules for trustee replacement, and all prior variation deeds.",
    },
    {
      icon: <UserSwitchOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Existing & Proposed Trustee Details",
      desc: "Full legal names, addresses, and director/shareholder details of both outgoing and incoming trustees.",
    },
    {
      icon: <CalendarOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Effective Date & Legal Deeds",
      desc: "The proposed effective date and deed of retirement and appointment prepared for the transition.",
    },
    {
      icon: <HistoryOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Recent Financials & Tax Returns",
      desc: "Recent trust balance sheets, profit and loss statements, and tax returns showing asset cost bases and balances.",
    },
    {
      icon: <HomeOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "List of Trust Assets & Titles",
      desc: "Schedule of real estate titles, share portfolios, units, vehicles, equipment, and intellectual property.",
    },
    {
      icon: <BankOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Bank & Corporate Records",
      desc: "Banking facilities, loan agreements, ASIC company extracts, and Director IDs where a company is appointed.",
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
            What should you have ready?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Useful information includes the current trust deed and amendments, details of the existing and proposed
            trustee, the proposed effective date, legal documents prepared for the change, recent trust financial
            statements and tax returns, a list of trust assets and registrations, bank and investment details, and
            corporate records where a company is involved.
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
