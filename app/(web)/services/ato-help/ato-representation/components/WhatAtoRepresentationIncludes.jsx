"use client";

import React from "react";
import {
  FileSearchOutlined,
  CommentOutlined,
  BranchesOutlined,
  AuditOutlined,
} from "@ant-design/icons";

/**
 * WhatAtoRepresentationIncludes Component
 * ========================================
 * Section 1: Foundations of ATO tax agent representation:
 * scope identification, checking account histories, liaison, and separate scopes.
 */
export default function WhatAtoRepresentationIncludes() {
  const scopeItems = [
    {
      title: "Core Scope & Account Review",
      desc: "Identifying the specific tax issue, relevant Integrated Client Account or Income Tax Account, and the desired compliance outcome.",
      icon: <FileSearchOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
    },
    {
      title: "Direct ATO Liaison",
      desc: "Reviewing correspondence, checking ATO portal data, communicating with case officers, and responding to clarification requests.",
      icon: <CommentOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
    },
    {
      title: "Coordinating Records",
      desc: "Organizing and substantiating source records, reconciliations, and lodgement figures required to satisfy ATO enquiries.",
      icon: <AuditOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
    },
    {
      title: "Distinct Service Separation",
      desc: "Representation does not automatically bundle every overdue return, objection, or legal opinion; additional tasks are scoped separately.",
      icon: <BranchesOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-2">
            Pillar 11.9 • Professional Representation
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            What do ATO representation services include?
          </h2>
          <div className="mt-6 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed space-y-4">
            <p>
              ATO representation normally starts by identifying the issue, relevant account or obligation and the outcome sought. Depending on the engagement, it may include reviewing correspondence, checking ATO information, contacting the ATO, responding to requests and coordinating supporting records.
            </p>
            <p>
              Financially Up's role depends on the matter and the authority you provide. A representation engagement does not automatically include preparing every overdue return, objection, audit response or specialist tax opinion. If additional work is required, that scope can be identified separately.
            </p>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {scopeItems.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 hover:border-emerald-500 dark:hover:border-emerald-500 shadow-sm transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
