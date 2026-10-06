"use client";

import React from "react";
import {
  FileSearchOutlined,
  AuditOutlined,
  FormOutlined,
  FolderOpenOutlined,
  TeamOutlined,
  ExclamationCircleOutlined,
  SolutionOutlined,
} from "@ant-design/icons";

/**
 * HowFinanciallyUpHelpsAto Component
 * =================================
 * Section 6: How Financially Up can assist with ATO matters
 *
 * Implements verbatim content from '11th Pillar ATO Help.docx' (Page 1: 1- ATO Help Australia).
 * Details the 6 structured checkpoints of our registered tax agent assistance,
 * from correspondence reviews and account balance checks to return preparation,
 * ATO communications, and legal/insolvency referral boundaries.
 *
 * Background: Lite Brand Gradient.
 */
export default function HowFinanciallyUpHelpsAto() {
  /**
   * The exact 6 assistance scope items from client document
   */
  const assistanceScopeItems = [
    {
      title: "reviewing ATO letters, account statements, tax periods and due dates",
      icon: <FileSearchOutlined className="text-teal-600 dark:text-teal-400 text-lg" />,
      tag: "Letters & Deadlines",
    },
    {
      title: "checking lodged returns, activity statements and relevant account balances",
      icon: <AuditOutlined className="text-blue-600 dark:text-blue-400 text-lg" />,
      tag: "Accounts & Balances",
    },
    {
      title: "preparing or correcting outstanding tax work within scope",
      icon: <FormOutlined className="text-emerald-600 dark:text-emerald-400 text-lg" />,
      tag: "Lodgements & Corrections",
    },
    {
      title: "assembling records, reconciliations and clear explanations requested by the ATO",
      icon: <FolderOpenOutlined className="text-amber-600 dark:text-amber-400 text-lg" />,
      tag: "Records & Workpapers",
    },
    {
      title: "communicating with the ATO as your registered tax agent where authorised",
      icon: <TeamOutlined className="text-purple-600 dark:text-purple-400 text-lg" />,
      tag: "Agent Communication",
    },
    {
      title: "identifying when a separate debt, audit, objection, legal or insolvency process may be required",
      icon: <ExclamationCircleOutlined className="text-rose-600 dark:text-rose-400 text-lg" />,
      tag: "Specialist Referrals",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-800/60 mb-4">
            <SolutionOutlined className="text-teal-600 dark:text-teal-400 text-xs sm:text-sm" />
            <span className="text-xs font-semibold text-teal-800 dark:text-teal-300 tracking-wide uppercase">
              Assistance Scope
            </span>
          </div>

          {/* Exact H2 Heading from Document */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How Financially Up can assist with ATO matters
          </h2>

          {/* Exact Verbatim Introductory Paragraph from Document */}
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            We first review the correspondence and available account information, identify what is
            missing and separate the immediate response from any underlying accounting or tax work.
            Depending on the matter and agreed scope, assistance may include:
          </p>
        </div>

        {/* 6 Assistance Scope Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {assistanceScopeItems.map((item, index) => (
            <div
              key={index}
              className="group p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:border-teal-500/50 dark:hover:border-teal-500/50 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-zinc-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400">
                    {item.tag}
                  </span>
                </div>
                <p className="text-sm sm:text-base font-medium text-slate-800 dark:text-zinc-200 leading-snug group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors m-0 capitalize-first">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
