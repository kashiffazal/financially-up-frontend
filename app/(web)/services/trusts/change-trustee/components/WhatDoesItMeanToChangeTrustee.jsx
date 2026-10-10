"use client";

import React from "react";
import { Tag } from "antd";
import {
  UserSwitchOutlined,
  FileProtectOutlined,
  ReconciliationOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * WhatDoesItMeanToChangeTrustee Component
 * =======================================
 * Section: What does it mean to change the trustee of a trust?
 * Verbatim text from Page 8 of client docx (8th Pillar Trust Services.docx).
 * Explains replacing the officeholder without replacing the trust itself,
 * deed governance, and accounting/tax coordination vs legal drafting.
 */
export default function WhatDoesItMeanToChangeTrustee() {
  const points = [
    {
      icon: <UserSwitchOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Officeholder Replacement",
      desc: "The trustee is the person or company that holds and administers trust property for the beneficiaries in accordance with the trust deed and applicable law. Changing the trustee replaces that officeholder.",
    },
    {
      icon: <FileProtectOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Trust Identity Continues",
      desc: "Replacing the trustee does not mean the trust itself has been replaced. The trust entity continues, but legal ownership records and administrative details must be updated across all stakeholders.",
    },
    {
      icon: <ReconciliationOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Deed-Governed Procedure",
      desc: "The appointment and retirement process is governed by the trust deed and relevant law. A trustee change deed or legal documentation may be required depending on the trust circumstances.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Core Definition
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What does it mean to change the trustee of a trust?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            The trustee is the person or company that holds and administers trust property for the beneficiaries in
            accordance with the trust deed and applicable law. Changing the trustee replaces that officeholder. It does
            not necessarily mean the trust itself has been replaced, but the legal ownership records and administrative
            details may need to be updated.
          </p>
        </div>

        {/* 3 Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {points.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Scope Callout */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-brand-bg-lighter via-white to-slate-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border border-slate-200 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row items-start md:items-center gap-5">
          <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 flex items-center justify-center shrink-0">
            <CheckCircleOutlined className="text-xl text-teal-600 dark:text-teal-400" />
          </div>
          <div className="space-y-1">
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              Accounting Implementation & Legal Boundaries
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              The appointment and retirement process is governed by the trust deed and relevant law. A trustee change
              deed or other legal documentation may be required, depending on the trust and circumstances. Financially
              Up can assist with the accounting and tax consequences and coordinate implementation information, while
              legal drafting or advice about the validity of the appointment may require a lawyer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
