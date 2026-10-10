"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  FileSyncOutlined,
  FileProtectOutlined,
  AuditOutlined,
  CalendarOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * DisclosureVsAmendmentVsObjection Component
 * ==========================================
 * Section 3: Voluntary disclosure or tax return amendment?
 * Verbatim text from Page 6 of '11th Pillar ATO Help.docx'.
 *
 * Differentiates routine amendments, formal audit disclosures, Part IVC objections,
 * and links to unlodged back returns.
 */
export default function DisclosureVsAmendmentVsObjection() {
  const channels = [
    {
      icon: <FileSyncOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      tag: "Self-Initiated Correction",
      title: "Tax Return Amendment",
      lead: "An amendment corrects a return or assessment already lodged.",
      desc: "An unprompted disclosure before an ATO review may be processed in much the same way as the relevant return or statement.",
    },
    {
      icon: <FileProtectOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      tag: "Under Active Audit",
      title: "Voluntary Disclosure in Examination",
      lead: "Once an examination is under way, information may need to be provided through the disclosure process for that review.",
      desc: "Requires formal submission to the appointed ATO case auditor, providing calculation workpapers and contextual reasons.",
    },
    {
      icon: <AuditOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      tag: "Disputed Assessment",
      title: "Part IVC Formal Objection",
      lead: "If you disagree with an assessment raised by the ATO, an objection rather than a disclosure may be the appropriate path.",
      desc: "Disputes the legal correctness of the ATO's position rather than conceding an error.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="cyan" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Choosing the Right Channel
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Voluntary disclosure or tax return amendment?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            An amendment corrects a return or assessment already lodged. An unprompted disclosure before an ATO review may be processed in much the same way as the relevant return or statement. Once an examination is under way, information may need to be provided through the disclosure process for that review. If you disagree with an assessment raised by the ATO, an objection rather than a disclosure may be the appropriate path.
          </p>
        </div>

        {/* 3 Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {channels.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-6 sm:p-8 bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 hover:border-brand-emerald dark:hover:border-brand-emerald transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 shadow-sm border border-slate-200 dark:border-zinc-700 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-xs font-semibold text-slate-700 dark:text-zinc-300 px-2.5 py-1 rounded-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-200 font-medium leading-relaxed mb-2">
                  {item.lead}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-zinc-700/60 text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                <CheckCircleOutlined /> Accurate Legal Framing
              </div>
            </div>
          ))}
        </div>

        {/* Cross-Link Card to Overdue Returns */}
        <div className="rounded-2xl p-6 sm:p-8 bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">
              Never Lodged the Return in the First Place?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
              We identify the distinction before preparing documents so the facts reach the ATO through the correct channel. An unlodged return is a separate issue; see our overdue tax returns page.
            </p>
          </div>
          <Link
            href="/services/ato-help/overdue-tax-returns"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition-colors shadow-sm"
          >
            Overdue Tax Returns Service <ArrowRightOutlined />
          </Link>
        </div>
      </div>
    </section>
  );
}
