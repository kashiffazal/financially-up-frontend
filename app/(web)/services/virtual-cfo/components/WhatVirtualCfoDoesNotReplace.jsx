"use client";

import React from "react";
import { Button } from "antd";
import {
  SafetyCertificateOutlined,
  BookOutlined,
  AuditOutlined,
  FileDoneOutlined,
  CompassOutlined,
  BankOutlined,
  ArrowRightOutlined,
  ToolOutlined,
} from "@ant-design/icons";
import Link from "next/link";

/**
 * WhatVirtualCfoDoesNotReplace Component
 * =====================================
 * Section 7: What a virtual CFO service does not replace.
 *
 * Implements 100% verbatim content from '13th Pillar Virtual CFO.docx' (Section 1 - Virtual CFO).
 * Clearly establishes the professional boundaries between Virtual CFO work and bookkeeping,
 * tax preparation, audit, legal counsel, and regulated advice, and guides users needing record clean-up.
 *
 * Background: Clean White.
 */
export default function WhatVirtualCfoDoesNotReplace() {
  /**
   * The 5 professional functions distinguished verbatim in Paragraph 1
   */
  const boundaries = [
    {
      icon: <BookOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Bookkeeping",
      role: "Transactional Processing",
      description: "Day-to-day invoice entry, payroll processing, and weekly bank reconciliations.",
    },
    {
      icon: <FileDoneOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Tax Return Preparation",
      role: "Statutory Lodgements",
      description: "Preparing and lodging annual company tax returns and compliance schedules with the ATO.",
    },
    {
      icon: <AuditOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Audit & Assurance",
      role: "Independent Audit",
      description: "Statutory audits and formal independent assurance opinions on financial reports.",
    },
    {
      icon: <CompassOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Legal Advice",
      role: "Legal Counsel",
      description: "Drafting shareholder agreements, commercial contracts, or formal legal representation.",
    },
    {
      icon: <BankOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Regulated Product Advice",
      role: "Financial Advisory",
      description: "Advice on regulated financial products, wealth investments, or AFSL retail recommendations.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 border-t border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-800/60 mb-4">
            <SafetyCertificateOutlined className="text-teal-600 dark:text-teal-400 text-xs sm:text-sm" />
            <span className="text-xs font-semibold text-teal-800 dark:text-teal-300 tracking-wide uppercase">
              Professional Boundaries & Advisory Scope
            </span>
          </div>

          {/* Exact H2 Heading from Document */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What a virtual CFO service does not replace
          </h2>

          {/* Exact Verbatim Paragraph 1 from Document */}
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A virtual CFO service is not automatically the same as bookkeeping, tax return preparation, audit, legal advice or regulated financial product advice. Those functions can interact, but they have different purposes and professional boundaries. Financially Up can coordinate accounting, tax, bookkeeping and business advisory work within scope. Where legal advice or regulated financial product advice is required, an appropriately qualified or authorised professional may also be needed.
          </p>
        </div>

        {/* 5 Distinct Professional Boundaries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 mb-12">
          {boundaries.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-50/80 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-500/40 shadow-2xs hover:shadow-sm transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-800 flex items-center justify-center mb-3.5 shadow-2xs">
                  {item.icon}
                </div>
                <span className="text-[10px] font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider block mb-1">
                  {item.role}
                </span>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed m-0 font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bookkeeping Gateway Box (Exact Verbatim Paragraph 2) */}
        <div className="rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200 dark:border-zinc-800 p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 text-xs font-semibold">
                <ToolOutlined />
                <span>Foundational Ledger Integrity</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white m-0">
                Starting with Reliable Accounting Records
              </h3>
              {/* Exact Verbatim Paragraph 2 from Document */}
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal m-0">
                If the records themselves need regular processing or clean-up before management reporting is reliable, our bookkeeping services may be the more appropriate starting point.
              </p>
            </div>

            <div className="shrink-0 w-full sm:w-auto">
              <Link href="/services/bookkeeping">
                <Button
                  type="primary"
                  size="large"
                  icon={<ArrowRightOutlined />}
                  iconPlacement="end"
                  className="w-full sm:w-auto h-11 px-6 rounded-xl font-semibold shadow-xs hover:scale-[1.01] transition-all"
                >
                  Bookkeeping Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
