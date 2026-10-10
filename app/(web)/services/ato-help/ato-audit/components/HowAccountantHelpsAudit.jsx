"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  FileSearchOutlined,
  CheckSquareOutlined,
  ExclamationCircleOutlined,
  ScheduleOutlined,
  CommentOutlined,
  ClockCircleOutlined,
  SafetyCertificateOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * HowAccountantHelpsAudit Component
 * =================================
 * Section 4: How can an accountant help during an audit?
 * Verbatim text from Page 3 of '11th Pillar ATO Help.docx'.
 *
 * Implements 7 core action deliverables and contextual cross-links to
 * tax return amendments and business tax compliance services.
 */
export default function HowAccountantHelpsAudit() {
  const deliverables = [
    {
      num: "01",
      icon: <FileSearchOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Define Audit Scope & Boundaries",
      desc: "review the ATO notice and define the review or audit scope",
      detail:
        "Clarifying precisely what years, transactions, and statutory provisions the case officer is authorized to examine, preventing unwarranted scope creep.",
    },
    {
      num: "02",
      icon: <CheckSquareOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Reconcile Returns to General Ledger",
      desc: "check the return, BAS or transaction against the accounting records",
      detail:
        "Auditing lodged tax returns and BAS against software general ledgers, trial balances, and original bank statements.",
    },
    {
      num: "03",
      icon: <ExclamationCircleOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Detect Factual Gaps & Discrepancies",
      desc: "identify missing documents, reconciliation differences and factual gaps",
      detail:
        "Spotting evidentiary vulnerabilities early so they can be addressed transparently before presenting workpapers to the ATO.",
    },
    {
      num: "04",
      icon: <ScheduleOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Prepare Clear Evidence Schedules",
      desc: "prepare schedules, explanations and supporting information",
      detail:
        "Building structured, indexed workpaper packs that map every ATO questionnaire item to its corresponding evidence.",
    },
    {
      num: "05",
      icon: <CommentOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Act as Authorized ATO Liaison",
      desc: "communicate with the ATO as an authorised registered tax agent",
      detail:
        "Handling all telephone calls, correspondence, and meetings with the ATO audit team, protecting your statutory rights.",
    },
    {
      num: "06",
      icon: <ClockCircleOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Track Timelines & Milestone Deadlines",
      desc: "track requests, due dates, responses and outstanding items",
      detail:
        "Maintaining a rigorous audit diary and negotiating formal extension agreements whenever complex records require more time.",
    },
    {
      num: "07",
      icon: <SafetyCertificateOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Formulate Next Steps (Amendment or Objection)",
      desc: "identify issues requiring an amendment, objection, legal opinion or specialist tax advice",
      detail:
        "Determining whether adjustments require formal objection submissions, voluntary disclosures, or independent legal counsel.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="cyan" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Professional Tax Agent Value
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How can an accountant help during an audit?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            An experienced tax agent provides strategic clarity, shields you from direct stress, and ensures that evidence presented to the ATO is mathematically and legally coherent.
          </p>
        </div>

        {/* 7 Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {deliverables.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm hover:border-brand-emerald dark:hover:border-brand-emerald transition-all duration-300 hover:shadow-md flex flex-col justify-between ${
                idx === 6 ? "md:col-span-2 lg:col-span-3 bg-gradient-to-r from-white via-white to-emerald-50/30 dark:from-zinc-900 dark:via-zinc-900 dark:to-emerald-950/20" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-slate-300 dark:text-zinc-600">
                    {item.num}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-zinc-800 flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-200 font-medium leading-relaxed mb-2">
                  "{item.desc}"
                </p>
                <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                  {item.detail}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-zinc-800 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                <CheckCircleOutlined /> Direct Agent Representation
              </div>
            </div>
          ))}
        </div>

        {/* Interconnected Service Navigation Cards */}
        <div className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
            Corrections & Underlying Business Tax Compliance
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-6 font-normal">
            If a review identifies an error in a previously lodged individual return, our tax return amendments service addresses the separate correction process where an amendment is appropriate. For businesses, business tax compliance may be relevant where underlying lodgements or accounts need to be corrected or brought up to date.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/services/individual-tax"
              className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200 dark:border-zinc-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-colors flex items-center justify-between group"
            >
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  Tax Return Amendments Service
                </h4>
                <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
                  Proactively amend historical returns when discrepancies are uncovered
                </p>
              </div>
              <ArrowRightOutlined className="text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
            </Link>

            <Link
              href="/services/business-tax"
              className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200 dark:border-zinc-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-colors flex items-center justify-between group"
            >
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  Business Tax Compliance Hub
                </h4>
                <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
                  Bring company, trust, or partnership financial records up to date
                </p>
              </div>
              <ArrowRightOutlined className="text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
