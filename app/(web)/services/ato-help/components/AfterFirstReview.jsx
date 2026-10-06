"use client";

import React from "react";
import {
  SolutionOutlined,
  CheckCircleOutlined,
  SyncOutlined,
  FormOutlined,
  SafetyCertificateOutlined,
  AuditOutlined,
  DollarOutlined,
} from "@ant-design/icons";

/**
 * AfterFirstReview Component
 * ==========================
 * Section 9: What happens after the first review?
 *
 * Implements verbatim content from '11th Pillar ATO Help.docx' (Page 1: 1- ATO Help Australia).
 * Outlines the transparent post-review roadmap, from immediate single-step lodgements
 * to multi-step record reconstruction, scope agreements, and specialist referrals.
 *
 * Background: Clean White.
 */
export default function AfterFirstReview() {
  const sequentialSteps = [
    {
      title: "Reconstructing Records",
      desc: "Rebuilding bank feeds, invoices, or ledgers where historical documentation is incomplete.",
      icon: <SyncOutlined className="text-teal-600 dark:text-teal-400" />,
    },
    {
      title: "Reconciling Accounts",
      desc: "Matching accounting figures against ATO running balance accounts and assessment notices.",
      icon: <AuditOutlined className="text-blue-600 dark:text-blue-400" />,
    },
    {
      title: "Correcting Returns",
      desc: "Drafting formal amendments or lodging outstanding returns and activity statements.",
      icon: <FormOutlined className="text-amber-600 dark:text-amber-400" />,
    },
    {
      title: "Responding to Questions",
      desc: "Submitting formal, substantiated written replies to specific ATO questionnaire items.",
      icon: <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400" />,
    },
    {
      title: "Dealing with Resulting Balances",
      desc: "Negotiating manageable payment arrangements or submitting penalty remission requests.",
      icon: <DollarOutlined className="text-purple-600 dark:text-purple-400" />,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 border-t border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-800/60 mb-4">
            <SolutionOutlined className="text-teal-600 dark:text-teal-400 text-xs sm:text-sm" />
            <span className="text-xs font-semibold text-teal-800 dark:text-teal-300 tracking-wide uppercase">
              Transparent Roadmap
            </span>
          </div>

          {/* Exact H2 Heading from Document */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What happens after the first review?
          </h2>

          {/* Exact Verbatim Paragraph from Document */}
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            The next step may be straightforward, such as lodging an outstanding form or providing a
            document. It may instead require a sequence of work: reconstructing records, reconciling
            accounts, correcting a return, responding to questions and then dealing with any resulting
            balance. We will explain the proposed scope and the information required before
            substantive work proceeds. If the matter falls outside our service scope, we will identify
            the type of specialist assistance that may be needed rather than implying that one
            appointment resolves every ATO issue.
          </p>
        </div>

        {/* Sequential Progression Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 mb-10">
          {sequentialSteps.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-50/80 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-800 flex items-center justify-center mb-3 shadow-2xs">
                  {item.icon}
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed m-0 font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Scope Integrity & Honest Specialist Referrals Callout */}
        <div className="rounded-2xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-slate-900 dark:text-white m-0">
              Clear Scope Agreement Before Substantive Work Proceeds
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 m-0 font-normal">
              You receive full visibility over estimated professional fees, required documents, and realistic resolution timeframes before we begin.
            </p>
          </div>
          <span className="shrink-0 text-xs font-semibold px-3 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300 border border-teal-200/80 dark:border-teal-800/60">
            Transparent Pricing & Scope
          </span>
        </div>
      </div>
    </section>
  );
}
