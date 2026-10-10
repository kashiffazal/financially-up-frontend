"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  FileSearchOutlined,
  FolderOpenOutlined,
  CheckCircleOutlined,
  SendOutlined,
  FileDoneOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * StructuredAuditProcess Component
 * =================================
 * Section 8: A structured audit-response process
 * Verbatim text from Page 3 of '11th Pillar ATO Help.docx'.
 *
 * Implements the 5-phase structured audit framework:
 * Scope -> Evidence -> Position -> Response -> Outcome
 * and provides contextual link back to ATO Help Hub.
 */
export default function StructuredAuditProcess() {
  const processPhases = [
    {
      phase: "Phase 1",
      name: "Scope",
      icon: <FileSearchOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      verbatim: "Scope: identify the exact issues, periods, entities, powers and deadlines.",
      desc: "Clarify the statutory powers invoked, the taxpayer entity involved, targeted tax years, and response deadlines.",
    },
    {
      phase: "Phase 2",
      name: "Evidence",
      icon: <FolderOpenOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      verbatim: "Evidence: preserve, index and reconcile the relevant records.",
      desc: "Assemble, authenticate, and mathematically reconcile all source vouchers, bank files, and supporting ledgers.",
    },
    {
      phase: "Phase 3",
      name: "Position",
      icon: <CheckCircleOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      verbatim: "Position: test the facts and tax treatment, including weaknesses or corrections.",
      desc: "Rigorously stress-test claimed tax positions against tax rulings, statutory provisions, and identify voluntary disclosures if needed.",
    },
    {
      phase: "Phase 4",
      name: "Response",
      icon: <SendOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      verbatim: "Response: answer each request clearly, attach relevant support and keep a record of what was provided.",
      desc: "Submit a cross-referenced, professional response indexed directly to each ATO questionnaire item, maintaining full file copies.",
    },
    {
      phase: "Phase 5",
      name: "Outcome",
      icon: <FileDoneOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      verbatim: "Outcome: review findings, assessments, payment consequences and dispute options.",
      desc: "Analyze the final position paper or notice of amended assessment, evaluating penalty mitigation and Part IVC objection pathways.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="cyan" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            5-Stage Audit Management Framework
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            A structured audit-response process
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            We follow a proven, rigorous 5-step methodology that replaces uncertainty and panic with structured evidence and clear tax-agent advocacy.
          </p>
        </div>

        {/* 5 Phases Horizontal Timeline / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
          {processPhases.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-5 bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm flex flex-col justify-between hover:border-brand-emerald dark:hover:border-brand-emerald transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/60 dark:border-emerald-800/60">
                    {item.phase}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-zinc-800 flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.name}
                </h3>
                <p className="text-xs text-slate-700 dark:text-zinc-200 font-medium mb-2 leading-relaxed">
                  "{item.verbatim}"
                </p>
                <p className="text-[11px] text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-2 border-t border-slate-100 dark:border-zinc-800 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                <CheckCircleOutlined /> Stage Completed
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Link to Broad ATO Help Hub */}
        <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-transparent border border-emerald-500/30 dark:border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1">
              Received an Early Notice or General Letter?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
              For general ATO correspondence that has not progressed to a review or audit, start with our ATO help service.
            </p>
          </div>
          <Link
            href="/services/ato-help"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 font-semibold text-xs sm:text-sm transition-colors shadow-sm"
          >
            Visit ATO Help Hub <ArrowRightOutlined />
          </Link>
        </div>
      </div>
    </section>
  );
}
