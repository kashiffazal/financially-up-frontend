"use client";

import React from "react";
import Link from "next/link";
import {
  IssuesCloseOutlined,
  CompassOutlined,
  AuditOutlined,
  FileProtectOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * WhatIfYouDisagreeWithAtoPositionReview Component
 * =================================================
 * Section 6: Options when the taxpayer disagrees with preliminary views:
 * providing missing facts early, independent reviews, formal objections, and audit escalation.
 */
export default function WhatIfYouDisagreeWithAtoPositionReview() {
  const escalationPaths = [
    {
      title: "1. Preliminary Stage Engagement",
      description:
        "Provide missing facts and technical reasons while the ATO case officer is still considering them. A later objection is not a substitute for a complete review response.",
      icon: <IssuesCloseOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
    },
    {
      title: "2. Independent Review Availability",
      description:
        "Independent review may be available for certain eligible large business or complex matters prior to finalisation of the audit position.",
      icon: <CompassOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
    },
    {
      title: "3. Formal Part IVC Objection",
      description:
        "A formal objection may be available once an assessment or other reviewable decision is issued. Strict statutory time limits apply from the notice date.",
      icon: <FileProtectOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
    },
    {
      title: "4. Audit Escalation Support",
      description:
        "If unresolved questions cause the ATO to convert the review into a formal audit, our structured audit support assists with expanded representation.",
      icon: <AuditOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-2">
            Dispute Pathways
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            What if you disagree with the ATO’s position?
          </h2>
          <div className="mt-6 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed space-y-4">
            <p>
              First determine whether the ATO has expressed a preliminary concern, reached a final audit position or issued an assessment or another reviewable decision. Provide missing facts and technical reasons at the stage when the ATO is still considering them. A later objection is not a substitute for a complete review response.
            </p>
            <p>
              Independent review may be available for certain eligible matters, and a formal objection may be available after an assessment or other reviewable decision. Rights and time limits vary, so read the notice and act promptly. Complex interpretation, privilege, litigation or formal legal representation may require a tax lawyer or another specialist. If the matter escalates, see our ATO audit support service.
            </p>
          </div>
        </div>

        {/* 4 Escalation Pathway Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {escalationPaths.map((path, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 hover:border-emerald-500 dark:hover:border-emerald-500 shadow-sm transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {path.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {path.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                  {path.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Audit Support Link Banner */}
        <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <AuditOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />
            <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-200">
              Has the review escalated into a formal examination? Visit our dedicated{" "}
              <strong className="text-slate-900 dark:text-white font-semibold">ATO Audit Support practice</strong>{" "}
              for comprehensive representation.
            </p>
          </div>
          <Link
            href="/services/ato-help/ato-audit"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 whitespace-nowrap self-start sm:self-auto"
          >
            Explore Audit Support <ArrowRightOutlined />
          </Link>
        </div>
      </div>
    </section>
  );
}
