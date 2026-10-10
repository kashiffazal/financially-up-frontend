"use client";

import React from "react";
import { Tag } from "antd";
import {
  CloseCircleOutlined,
  WarningOutlined,
  FileExclamationOutlined,
  StopOutlined,
  QuestionCircleOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";

/**
 * CommonAuditProblems Component
 * ==============================
 * Section 7: Common problems that make an audit harder
 * Verbatim text from Page 3 of '11th Pillar ATO Help.docx'.
 *
 * Details the 6 most damaging tactical and procedural mistakes
 * taxpayers make during an ATO audit or review.
 */
export default function CommonAuditProblems() {
  const problems = [
    {
      icon: <FileExclamationOutlined className="text-xl text-red-500" />,
      title: "Incomplete Records & Unreconciled Figures",
      verbatim: "incomplete or inconsistent records and unreconciled lodged figures",
      desc: "Presenting figures that do not reconcile to lodged BAS or income tax returns immediately triggers heightened ATO suspicion.",
    },
    {
      icon: <QuestionCircleOutlined className="text-xl text-amber-500" />,
      title: "Responding Before Understanding the Scope",
      verbatim: "responding before the scope and wording of the request are understood",
      desc: "Providing rushed answers before analyzing the legal basis of the ATO notice risks volunteering irrelevant or damaging data.",
    },
    {
      icon: <StopOutlined className="text-xl text-rose-500" />,
      title: "Conflicting Explanations by Different Parties",
      verbatim: "different explanations being given by different people",
      desc: "When business partners, bookkeepers, or staff give conflicting verbal accounts to an auditor, credibility is severely eroded.",
    },
    {
      icon: <CloseCircleOutlined className="text-xl text-red-500" />,
      title: "Broken Audit Trail to Source Records",
      verbatim: "missing links between source documents, accounting records and the tax position",
      desc: "Failing to demonstrate a clear mathematical bridge connecting receipt, ledger line, and tax return disclosure.",
    },
    {
      icon: <ClockCircleOutlined className="text-xl text-amber-500" />,
      title: "Unexplained Late Responses",
      verbatim: "late responses without communicating with the case officer",
      desc: "Missing deadlines without requesting a formal extension signals non-cooperation and leads to default assessments.",
    },
    {
      icon: <WarningOutlined className="text-xl text-purple-500" />,
      title: "Assuming Processed Returns Are Safe",
      verbatim: "assuming a processed return or refund prevents later ATO review",
      desc: "A processed return or paid refund is issued under Australia's self-assessment system and remains subject to review for years.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="red" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Audit Pitfalls to Avoid
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Common problems that make an audit harder
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Tax audits frequently escalate not because of intentional wrongdoing, but because of poor presentation, inconsistent communication, and broken audit trails.
          </p>
        </div>

        {/* 6 Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-6 bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 hover:border-red-400/60 dark:hover:border-red-400/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-200 font-medium mb-2 leading-relaxed">
                  "{item.verbatim}"
                </p>
                <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-zinc-700/60 flex items-center gap-1.5 text-xs text-red-600 dark:text-red-400 font-semibold">
                <WarningOutlined /> High-Risk Mistake
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
