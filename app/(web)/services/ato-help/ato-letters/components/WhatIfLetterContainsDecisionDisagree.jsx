"use client";

import React from "react";
import Link from "next/link";
import {
  FileProtectOutlined,
  ClockCircleOutlined,
  BranchesOutlined,
  SafetyCertificateOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * WhatIfLetterContainsDecisionDisagree Component
 * ===============================================
 * Section 6: Rights and procedures when an ATO letter delivers an adverse decision:
 * Part IVC objection time limits (60 days to 4 years), formal preservation of rights,
 * distinction between GIC and administrative penalties, and specialist referrals.
 */
export default function WhatIfLetterContainsDecisionDisagree() {
  const disputeConsiderations = [
    {
      title: "Strict Statutory Time Limits",
      text: "The ATO states that objection periods can vary from 60 days to four years depending on the decision, so use the instructions and date on the particular notice rather than assuming one universal deadline.",
      icon: <ClockCircleOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
    },
    {
      title: "Preserve Formal Appeal Rights",
      text: "An assessment, penalty decision, private ruling or objection decision carries specific review rights. An informal phone call or ordinary reply letter will not preserve your statutory objection rights.",
      icon: <FileProtectOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
    },
    {
      title: "GIC vs Administrative Penalties",
      text: "A notice of GIC is legally distinct from an imposed failure-to-lodge (FTL) penalty. They follow separate legislative remission tests, criteria, and objection rights.",
      icon: <BranchesOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
    },
    {
      title: "Clarification vs Formal Dispute",
      text: "We can identify whether the next step appears to be clarification, an amendment, remission request, objection or referral for specialist legal advice. No outcome can be promised.",
      icon: <SafetyCertificateOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-2">
            Disputed Decisions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            What if the letter contains a decision you disagree with?
          </h2>
          <div className="mt-6 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed space-y-4">
            <p>
              An assessment, penalty decision, private ruling or objection decision may carry specific review rights and time limits. A phone call or ordinary reply may not preserve those rights. The ATO states that objection periods can vary from 60 days to four years depending on the decision, so use the instructions and date on the particular notice rather than assuming one universal deadline.
            </p>
            <p>
              We can identify whether the next step appears to be clarification, an amendment, remission request, objection or referral for specialist legal advice. A notice of GIC is different from an imposed failure-to-lodge penalty. Our ATO penalty remission page explains the penalty pathway and its distinction from interest. No remission, objection or appeal outcome can be promised.
            </p>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {disputeConsiderations.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 hover:border-emerald-500 dark:hover:border-emerald-500 shadow-sm transition-all duration-300 hover:-translate-y-1 flex gap-5"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 flex items-center justify-center flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Link to Penalty Remission */}
        <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <SafetyCertificateOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />
            <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-200">
              Disputing late lodgement penalties or interest charges? Visit our dedicated{" "}
              <strong className="text-slate-900 dark:text-white font-semibold">ATO Penalty Remission practice</strong>{" "}
              to review specific remission criteria.
            </p>
          </div>
          <Link
            href="/services/ato-help/penalty-remission"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 whitespace-nowrap self-start sm:self-auto"
          >
            Review Penalty Remission <ArrowRightOutlined />
          </Link>
        </div>
      </div>
    </section>
  );
}
