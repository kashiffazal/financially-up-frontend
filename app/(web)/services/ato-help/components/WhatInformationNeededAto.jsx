"use client";

import React from "react";
import {
  FileTextOutlined,
  IdcardOutlined,
  AuditOutlined,
  FolderOpenOutlined,
  CalendarOutlined,
  PhoneOutlined,
  ExclamationCircleOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";

/**
 * WhatInformationNeededAto Component
 * ==================================
 * Section 7: What should you have ready?
 *
 * Implements verbatim content from '11th Pillar ATO Help.docx' (Page 1: 1- ATO Help Australia).
 * Provides the preparation checklist for initial ATO review and warns trustees/taxpayers
 * never to delay seeking assistance just because records are incomplete.
 *
 * Background: Clean White.
 */
export default function WhatInformationNeededAto() {
  const documentChecklist = [
    {
      title: "ATO Letter or Notice",
      desc: "The complete statutory letter, formal demand, secure portal notice, or review questionnaire.",
      icon: <FileTextOutlined className="text-teal-600 dark:text-teal-400 text-lg" />,
      tag: "Notice Copy",
    },
    {
      title: "Tax File or Entity Details",
      desc: "Individual TFN, ABN, Australian Company Number (ACN), or trust establishment details.",
      icon: <IdcardOutlined className="text-blue-600 dark:text-blue-400 text-lg" />,
      tag: "Entity Data",
    },
    {
      title: "Recent Notices of Assessment",
      desc: "Prior notices of assessment, running balance statements, and integrated client account statements.",
      icon: <AuditOutlined className="text-emerald-600 dark:text-emerald-400 text-lg" />,
      tag: "Assessments",
    },
    {
      title: "Copies of Lodged Returns or BAS",
      desc: "Previously lodged income tax returns, monthly/quarterly BAS, or activity statements.",
      icon: <CalendarOutlined className="text-amber-600 dark:text-amber-400 text-lg" />,
      tag: "Prior Forms",
    },
    {
      title: "Bookkeeping & Transaction Documents",
      desc: "Accounting software ledgers, bank feeds, invoices, or records relating to the transaction questioned.",
      icon: <FolderOpenOutlined className="text-purple-600 dark:text-purple-400 text-lg" />,
      tag: "Source Records",
    },
    {
      title: "Previous ATO Call Reference Details",
      desc: "Date of contact, ATO officer name or service reference number, and any previously agreed action.",
      icon: <PhoneOutlined className="text-rose-600 dark:text-rose-400 text-lg" />,
      tag: "Call Records",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 border-t border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-800/60 mb-4">
            <FileTextOutlined className="text-teal-600 dark:text-teal-400 text-xs sm:text-sm" />
            <span className="text-xs font-semibold text-teal-800 dark:text-teal-300 tracking-wide uppercase">
              Preparation Checklist
            </span>
          </div>

          {/* Exact H2 Heading from Document */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What should you have ready?
          </h2>

          {/* Exact Verbatim Paragraph 1 from Document */}
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Useful starting information includes the ATO letter or notice, the relevant tax file or
            entity details, recent notices of assessment, account statements, copies of lodged returns
            or BAS, bookkeeping records and documents relating to the transaction being questioned. If
            you already spoke with the ATO, include the date, officer&apos;s name or reference number
            and any agreed action.
          </p>
        </div>

        {/* 6 Document Checklist Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {documentChecklist.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50/80 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-500/50 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-white dark:bg-zinc-800 shadow-2xs flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-300">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed m-0 font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Exact Verbatim Deadline Advice Callout from Document */}
        <div className="rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/60 p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
          <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
            <ClockCircleOutlined className="text-xl" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-bold text-slate-900 dark:text-white m-0">
              Do Not Delay Because Records Are Missing
            </h3>
            {/* Exact Verbatim Paragraph 2 from Document */}
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal m-0">
              Do not delay the first review solely because a document is missing. Bring what you have,
              explain the gap and identify where the record may be available. The first task may be to
              map the missing information, reconstruct records or request time to respond. An extension
              is never automatic, so an approaching deadline should be raised promptly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
