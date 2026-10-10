"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  FileTextOutlined,
  CheckCircleOutlined,
  SafetyCertificateOutlined,
  ArrowRightOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

/**
 * WhatHappensAfterDisclosure Component
 * ====================================
 * Section 6: What happens after disclosure?
 * Verbatim text from Page 6 of '11th Pillar ATO Help.docx'.
 *
 * Details the issuance of amended assessments, reviewing calculations,
 * and separating disclosures from penalty remission.
 */
export default function WhatHappensAfterDisclosure() {
  const steps = [
    {
      icon: <FileTextOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "ATO Review & Information Requests",
      body: "The ATO may request further information and issue an amended assessment or other notice.",
      desc: "The ATO case team verifies the calculations against their third-party reporting databases and may seek clarification on specific deductions or offsets.",
    },
    {
      icon: <CheckCircleOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Notice of Amended Assessment Review",
      body: "That notice will show the resulting tax or credit position and any associated amounts. Review it against the disclosure rather than assuming the matter is finished when information is submitted.",
      desc: "We reconcile the notice against our prepared figures, checking that penalties and interest reflect qualifying voluntary disclosure concessions.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="purple" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Post-Submission Procedures
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What happens after disclosure?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            The ATO may request further information and issue an amended assessment or other notice. That notice will show the resulting tax or credit position and any associated amounts. Review it against the disclosure rather than assuming the matter is finished when information is submitted.
          </p>
        </div>

        {/* 2 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-10">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm flex flex-col justify-between hover:border-brand-emerald dark:hover:border-brand-emerald transition-all duration-300"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-zinc-800 flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-200 font-medium leading-relaxed mb-3">
                  {item.body}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800 text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                <SafetyCertificateOutlined /> Formal Assessment Audit
              </div>
            </div>
          ))}
        </div>

        {/* Cross-Link Card to Penalty Remission */}
        <div className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 shrink-0 border border-purple-200/60 dark:border-purple-800/60">
              <InfoCircleOutlined className="text-2xl" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                Already Received an Imposed Penalty?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                If an administrative penalty has already been imposed, our ATO penalty remission page explains the distinct question of asking the ATO to reduce it. A disclosure and a remission request serve different purposes.
              </p>
            </div>
          </div>
          <Link
            href="/services/ato-help/penalty-remission"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition-colors shadow-sm"
          >
            Explore Penalty Remission <ArrowRightOutlined />
          </Link>
        </div>
      </div>
    </section>
  );
}
