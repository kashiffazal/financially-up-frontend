"use client";

import React from "react";
import { Tag } from "antd";
import {
  ExclamationCircleOutlined,
  CommentOutlined,
  AuditOutlined,
  FileDoneOutlined,
  WarningOutlined,
  SafetyCertificateOutlined,
  RightCircleOutlined,
} from "@ant-design/icons";

/**
 * DisagreeingWithAtoPosition Component
 * ====================================
 * Section 6: What happens if you disagree with the ATO position?
 * Verbatim text from Page 3 of '11th Pillar ATO Help.docx'.
 *
 * Covers:
 * - Preliminary views, position papers, and amended assessments.
 * - Small Business Independent Review (pre-assessment avenue).
 * - Formal Objections (Part IVC) and strict statutory deadlines.
 * - Tax agent scope boundaries vs Tax Litigation Lawyer representation.
 */
export default function DisagreeingWithAtoPosition() {
  const disputeAvenues = [
    {
      icon: <CommentOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      tag: "Stage 1 • Informal Review",
      title: "Direct Case Officer Discussions",
      desc: "Address factual misunderstandings or missing evidence collaboratively before formal position papers are finalized.",
    },
    {
      icon: <AuditOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      tag: "Stage 2 • Pre-Assessment",
      title: "Small-Business Independent Review",
      desc: "The small-business independent review occurs before an assessment and does not remove the right to object later.",
    },
    {
      icon: <FileDoneOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      tag: "Stage 3 • Formal Rights",
      title: "Part IVC Formal Objection",
      desc: "Formal objection to an assessment or other reviewable decision. Objection rights and time limits vary with the decision, so act promptly.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="red" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Dispute Resolution & Objections
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What happens if you disagree with the ATO position?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            An audit may produce a preliminary view, position paper, amended assessment or another decision. Before treating the matter as a formal dispute, check which stage has been reached and whether the ATO is inviting a response. Factual errors, missing evidence and technical disagreement should be separated and addressed clearly.
          </p>
        </div>

        {/* 3 Dispute Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {disputeAvenues.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm flex flex-col justify-between hover:border-brand-emerald dark:hover:border-brand-emerald transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-zinc-800 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-xs font-semibold text-slate-700 dark:text-zinc-300 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-zinc-800">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                <RightCircleOutlined /> Structured Resolution Path
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Scope & Legal Demarcation Alert */}
        <div className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 shrink-0 border border-blue-200/60 dark:border-blue-800/60">
              <SafetyCertificateOutlined className="text-2xl" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                Our Tax Accounting Scope vs Specialized Legal Representation:
              </h4>
              <p className="text-xs sm:text-sm md:text-base text-slate-700 dark:text-zinc-300 leading-relaxed">
                Financially Up can help explain tax and accounting issues and assist with objection-related tax work within scope. Litigation, complex statutory interpretation, privilege questions or formal legal representation may require an appropriately qualified tax lawyer or other specialist.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
