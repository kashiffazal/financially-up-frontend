"use client";

import React from "react";
import {
  FileTextOutlined,
  CalendarOutlined,
  AimOutlined,
  HistoryOutlined,
} from "@ant-design/icons";

/**
 * WhatShouldYouCheckFirstLetter Component
 * ========================================
 * Section 1: Crucial triage checklist upon opening an ATO letter:
 * entity name, notice type, statutory dates, requested actions, and historical chain.
 */
export default function WhatShouldYouCheckFirstLetter() {
  const triagePoints = [
    {
      title: "Notice Type & Identifiers",
      desc: "Read the notice type, issue date, reference number, taxpayer or entity name, and exact tax account (e.g. Integrated Client Account or Income Tax Account).",
      icon: <FileTextOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
    },
    {
      title: "Statutory & Strict Dates",
      desc: "Note any response, lodgement, payment, or objection date. Keep the envelope or electronic notification if postal service timing could impact deadlines.",
      icon: <CalendarOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
    },
    {
      title: "Nature of Requested Action",
      desc: "Identify whether the ATO is seeking documents, asking for an explanation, proposing an adjustment, or communicating a formal decision already made.",
      icon: <AimOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
    },
    {
      title: "Correspondence Sequence",
      desc: "If the notice refers to an earlier letter, assessment, or phone conversation, locate that material too to establish the latest legal position.",
      icon: <HistoryOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-2">
            Initial Triage
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            What should you check first?
          </h2>
          <div className="mt-6 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed space-y-4">
            <p>
              Read the notice type, issue date, reference number, taxpayer or entity name, tax account and action requested. Note any response, lodgement, payment or objection date. Identify whether the ATO is seeking documents, asking for an explanation, proposing an adjustment or communicating a decision already made.
            </p>
            <p>
              Keep the envelope or electronic notification if timing could matter. If the notice refers to an earlier letter, assessment or phone conversation, locate that material too. A sequence of correspondence often explains why the ATO is contacting you and which document states the latest position.
            </p>
          </div>
        </div>

        {/* 4 Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {triagePoints.map((point, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 hover:border-emerald-500 dark:hover:border-emerald-500 shadow-sm transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {point.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {point.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {point.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
