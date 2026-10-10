"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileSearchOutlined,
  SaveOutlined,
  StopOutlined,
  BranchesOutlined,
  WarningOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * WhatToDoWhenAuditStarts Component
 * =================================
 * Section 2: What should you do when an ATO audit starts?
 * Verbatim text from Page 3 of '11th Pillar ATO Help.docx'.
 *
 * Sets out immediate practical instructions for taxpayers who have received
 * an ATO audit or review notification.
 */
export default function WhatToDoWhenAuditStarts() {
  const actionProtocols = [
    {
      icon: <FileSearchOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "1. Read Notice & Record Deadlines",
      body: "Read the notice carefully and record the response date. Identify the tax periods, entities, transactions and issues being examined, the case officer’s details and the records requested.",
    },
    {
      icon: <SaveOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "2. Preserve Source Documents",
      body: "Preserve relevant source records, correspondence and working papers. Avoid deleting, altering or recreating documents in a way that obscures their origin.",
    },
    {
      icon: <StopOutlined className="text-xl text-red-600 dark:text-red-400" />,
      title: "3. Avoid Unexplained Data Dumps",
      body: "Do not send a large, unexplained data dump before understanding the request. A good response maps each question to an answer and supporting evidence.",
    },
    {
      icon: <BranchesOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "4. Agree Extensions Formally",
      body: "If the request is unclear, unusually broad or difficult to complete by the date given, raise that with the case officer promptly. Any extension or alternative response format must be agreed; it should not be assumed.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="amber" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Immediate Response Protocol
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What should you do when an ATO audit starts?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Read the notice carefully and record the response date. Identify the tax periods, entities, transactions and issues being examined, the case officer’s details and the records requested. Preserve relevant source records, correspondence and working papers. Avoid deleting, altering or recreating documents in a way that obscures their origin.
          </p>
        </div>

        {/* 4 Protocol Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-10">
          {actionProtocols.map((item, idx) => (
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
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.body}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800 text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                <CheckCircleOutlined /> Recommended Practice
              </div>
            </div>
          ))}
        </div>

        {/* Tactical Guidance Banner */}
        <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/30 dark:border-amber-500/20">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-amber-500/20 text-amber-600 dark:text-amber-400 shrink-0">
              <WarningOutlined className="text-2xl" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                Why Document Integrity Is Non-Negotiable:
              </h4>
              <p className="text-xs sm:text-sm md:text-base text-slate-700 dark:text-zinc-300 leading-relaxed">
                Recreating invoices or backdating contracts without clearly noting their reconstructed status can trigger severe penalties under false and misleading statement provisions. Always preserve existing records as they stand; our team will assist in preparing a transparent explanation for any missing documentation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
