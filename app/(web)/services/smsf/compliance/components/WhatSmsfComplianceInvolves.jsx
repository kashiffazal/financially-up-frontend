"use client";

import React from "react";
import { Tag } from "antd";
import {
  SafetyCertificateOutlined,
  BankOutlined,
  CheckCircleOutlined,
  AuditOutlined,
} from "@ant-design/icons";

/**
 * WhatSmsfComplianceInvolves Component
 * ====================================
 * Implements verbatim SEO content from Page 8 of 9th Pillar SMSF.docx:
 * - What does SMSF compliance involve?
 * - Trustee fiduciary responsibilities and varying risk profiles
 */
export default function WhatSmsfComplianceInvolves() {
  const corePrinciples = [
    {
      title: "Sole Purpose Test",
      desc: "Maintaining the fund strictly for the permitted purpose of providing retirement or death benefits to members or their dependants.",
    },
    {
      title: "Separation of Fund Assets",
      desc: "Keeping all SMSF monies, titles, and bank accounts strictly separate from the personal or business assets of trustees and directors.",
    },
    {
      title: "Investment Strategy Governance",
      desc: "Formulating, documenting, and regularly reviewing an investment strategy addressing risk, diversification, liquidity, and member insurance.",
    },
    {
      title: "Statutory Reporting & Auditing",
      desc: "Fulfilling annual accounts preparation, independent compliance and financial audit, and timely SMSF annual return lodgement.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="cyan" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Regulatory Foundation
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What does SMSF compliance involve?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            SMSF trustee compliance covers much more than lodging an annual return. Trustees need to maintain the fund for permitted retirement or death-benefit purposes, keep fund assets and money separate from personal or business assets, follow investment restrictions, document trustee decisions, maintain an appropriate investment strategy and meet annual accounting, audit and reporting requirements.
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            The exact compliance issues depend on what the fund owns and does. A simple cash-and-listed-investment fund may have a very different risk profile from an SMSF with property, an LRBA, related-party dealings or pension accounts.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {corePrinciples.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-md hover:border-cyan-400/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-800/40 flex items-center justify-center mb-4">
                  <SafetyCertificateOutlined className="text-xl text-cyan-600 dark:text-cyan-400" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Advisory Boundaries Notice */}
        <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 flex items-start sm:items-center gap-4 shadow-xs">
          <AuditOutlined className="text-2xl text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5 sm:mt-0" />
          <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed m-0 font-normal">
            <span className="font-bold text-slate-900 dark:text-white">Trustee Legal Responsibility:</span> Financially Up provides SMSF compliance support by reviewing accounting records, identifying transactions or documentation that may need attention, helping trustees prepare for annual accounting and audit, and coordinating tax and reporting work within our scope. We do not replace the trustees’ legal responsibilities, an independent SMSF auditor or regulated financial product advice.
          </p>
        </div>
      </div>
    </section>
  );
}
