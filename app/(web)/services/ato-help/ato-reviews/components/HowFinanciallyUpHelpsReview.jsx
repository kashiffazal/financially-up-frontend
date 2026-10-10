"use client";

import React from "react";
import {
  FileSearchOutlined,
  CalendarOutlined,
  AuditOutlined,
  ReconciliationOutlined,
  SendOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

/**
 * HowFinanciallyUpHelpsReview Component
 * =====================================
 * Section 7: Concrete scope of services Financially Up provides during ATO reviews,
 * scope management, transparency on uncertainties, and taxpayer responsibilities.
 */
export default function HowFinanciallyUpHelpsReview() {
  const serviceScope = [
    {
      title: "Notice Analysis & Questions Definition",
      desc: "Reading the ATO notice in detail, isolating specific questions, identifying cited statutory provisions, and cataloguing strict due dates.",
      icon: <FileSearchOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
    },
    {
      title: "Lodgement & Record Auditing",
      desc: "Checking earlier tax returns or activity statements against ledgers, bank statements, and source documents to detect root variances.",
      icon: <AuditOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
    },
    {
      title: "Schedules & Factual Reconciliations",
      desc: "Preparing clean, auditable supporting schedules, calculations, and structured explanations mapped to the ATO questionnaire.",
      icon: <ReconciliationOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
    },
    {
      title: "Gap Identification & Disclosures",
      desc: "Highlighting missing records or evidentiary uncertainties early, assessing whether voluntary disclosures or amendments are needed.",
      icon: <ExclamationCircleOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
    },
    {
      title: "Authorized ATO Communication",
      desc: "Acting as your registered tax agent representative, liaising directly with the case officer, and submitting responses within scope.",
      icon: <SendOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
    },
    {
      title: "Dynamic Scope & Escalation Control",
      desc: "Transparently agreeing on updated scope if the ATO broadens tax periods, requests other entities, or converts the matter to an audit.",
      icon: <CalendarOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-2">
            Professional Assistance
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            How Financially Up helps
          </h2>
          <div className="mt-6 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed space-y-4">
            <p>
              Our ATO review assistance can include reading the notice, defining the questions and due dates, checking earlier lodgements, reconciling source documents, preparing schedules and explanations, and managing authorized communication. We will identify information gaps and explain any uncertainty that cannot be resolved.
            </p>
            <p>
              The work may expand if the ATO adds periods, entities or taxes, or moves to an audit. We agree the scope as it develops and do not promise the outcome. Tax-agent assistance does not remove the taxpayer’s responsibility to provide complete facts, records and instructions.
            </p>
          </div>
        </div>

        {/* 6 Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceScope.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 hover:border-emerald-500 dark:hover:border-emerald-500 shadow-sm transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
