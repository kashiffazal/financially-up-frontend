"use client";

import React from "react";
import {
  FileSearchOutlined,
  ClockCircleOutlined,
  ExclamationCircleOutlined,
  FolderOpenOutlined,
} from "@ant-design/icons";

/**
 * WhatIfAtoAsksForInformationLetter Component
 * ===========================================
 * Section 4: Protocol when the ATO issues a request for documentation or questionnaires:
 * question mapping, extension protocols, formal statutory powers, and correcting errors.
 */
export default function WhatIfAtoAsksForInformationLetter() {
  const protocolItems = [
    {
      title: "Confirm Scope & Reconcile to Lodgements",
      text: "Confirm the question, relevant entity, tax period and deadline. Compare the request with what was lodged and gather the supporting records. Organize documents so each item links directly to the ATO’s question.",
      icon: <FileSearchOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
    },
    {
      title: "Index Evidence over Raw File Dumps",
      text: "A concise explanation and indexed evidence are far more useful than an unexplained volume of files. A clear schedule gives the ATO case officer a transparent path through your figures.",
      icon: <FolderOpenOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
    },
    {
      title: "Prompt Extension Requests in Writing",
      text: "If a document is unavailable or the deadline cannot be met, contact the ATO promptly. Ask whether another document or timeframe can be agreed, and retain written confirmation. Never assume silence extends a deadline.",
      icon: <ClockCircleOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
    },
    {
      title: "Address Uncovered Errors Before Submission",
      text: "If review identifies an error, discuss the correct amendment or disclosure pathway before responding. Missing records should be acknowledged and alternative contemporaneous evidence provided rather than unsupported estimates.",
      icon: <ExclamationCircleOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-2">
            Information Requests
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            What if the ATO asks for information?
          </h2>
          <div className="mt-6 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed space-y-4">
            <p>
              Confirm the question, relevant entity, tax period and deadline. Compare the request with what was lodged and gather the supporting records. Organize the documents so each item can be linked to the ATO’s question. A concise explanation and indexed evidence are usually more useful than an unexplained volume of files.
            </p>
            <p>
              If a document is unavailable or the date cannot be met, contact the ATO promptly and explain the position. Ask whether another document or timeframe can be agreed, and retain written confirmation. Do not assume silence extends a deadline. If the request is formal, different legal considerations may apply, including questions about access powers or privilege that require specialist advice.
            </p>
            <p>
              If our review identifies an error, we will discuss the correct amendment or disclosure pathway before responding. Figures must remain supportable. Missing records should be acknowledged and alternative contemporaneous evidence considered rather than replaced with an unsupported estimate.
            </p>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {protocolItems.map((item, idx) => (
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
      </div>
    </section>
  );
}
