"use client";

import React from "react";
import {
  FileTextOutlined,
  IdcardOutlined,
  HistoryOutlined,
  AuditOutlined,
  WarningOutlined,
} from "@ant-design/icons";

/**
 * WhatInformationToHaveReadyRepresentation Component
 * ==================================================
 * Section 6: Checklist of records to assemble when seeking representation,
 * including prior adviser files, and advice not to delay if records are partial.
 */
export default function WhatInformationToHaveReadyRepresentation() {
  const documentItems = [
    {
      title: "ATO Letters & Notices",
      desc: "The complete ATO letter, notice of assessment, or secure portal message, including all attachments and reference numbers.",
      icon: <FileTextOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
    },
    {
      title: "Entity Identifiers",
      desc: "Your TFN, ABN, ACN, and authorized contact details for the individual, company, trust, or partnership involved.",
      icon: <IdcardOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
    },
    {
      title: "Lodgements & Ledgers",
      desc: "Relevant tax returns, BAS, bookkeeping ledgers, recent bank statements, and account transaction histories.",
      icon: <AuditOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
    },
    {
      title: "Timeline & Prior Adviser Papers",
      desc: "A brief factual timeline of what has happened, along with any correspondence or work papers prepared by a previous accountant.",
      icon: <HistoryOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-2">
            Preparation Checklist
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            What information should you have ready?
          </h2>
          <div className="mt-6 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed space-y-4">
            <p>
              The right documents depend on the issue. A useful starting point is the ATO letter or message, your TFN or ABN details where appropriate, relevant tax returns or BAS, recent account statements, prior correspondence, bookkeeping or financial records, and a short timeline of what has happened. If another adviser has previously handled the matter, their correspondence or work papers may also be relevant.
            </p>
            <p>
              Do not delay seeking help simply because the records are incomplete. One purpose of the initial review is to identify what is missing and what should be obtained before a response is made.
            </p>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {documentItems.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 hover:border-emerald-500 dark:hover:border-emerald-500 shadow-sm transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Partial Records Advice Banner */}
        <div className="p-6 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 flex items-start sm:items-center gap-4">
          <WarningOutlined className="text-2xl text-emerald-600 dark:text-emerald-400 mt-1 sm:mt-0 flex-shrink-0" />
          <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed">
            <strong className="text-slate-900 dark:text-white font-semibold">Do not wait for 100% complete records:</strong>{" "}
            Missing documents are common in complex ATO matters. We help identify information gaps early so alternative evidence can be gathered before ATO response deadlines pass.
          </p>
        </div>
      </div>
    </section>
  );
}
