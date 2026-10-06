"use client";

import React from "react";
import { Tag, Button } from "antd";
import {
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  BankOutlined,
  FileSearchOutlined,
  SolutionOutlined,
  MailOutlined,
  SyncOutlined,
  ArrowRightOutlined,
  AuditOutlined,
} from "@ant-design/icons";
import Link from "next/link";

/**
 * WhatAsicComplianceCovers Component
 * ==================================
 * Section 1 of ASIC Compliance Hub (/services/asic/):
 * "What do ASIC compliance services cover?"
 *
 * Content is 100% VERBATIM from the professional SEO specialist document:
 * '7th Pillar ASIC.docx' (Section 1).
 *
 * Background: Lite Brand Gradient.
 */
export default function WhatAsicComplianceCovers() {
  /**
   * 6 Support inclusions directly and verbatim from the document
   */
  const supportInclusions = [
    {
      icon: <FileSearchOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      text: "reviewing ASIC annual statements and checking the registered details",
      tag: "Annual Statements",
    },
    {
      icon: <BankOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      text: "assisting with changes to registered office or principal place of business",
      tag: "Registered Office",
    },
    {
      icon: <SolutionOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      text: "lodging changes involving directors or secretaries where the required company decisions and consents are in place",
      tag: "Officeholders",
    },
    {
      icon: <AuditOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      text: "updating certain share, member or ultimate holding company information",
      tag: "Share Register",
    },
    {
      icon: <MailOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      text: "helping manage ASIC correspondence and common filing requirements",
      tag: "Correspondence",
    },
    {
      icon: <SyncOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      text: "coordinating with the company’s accounting records where a corporate change also affects tax, payroll, bookkeeping or financial reporting.",
      tag: "Accounting Link",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <Tag color="green" className="brand-section-tag">
            <SafetyCertificateOutlined className="mr-1" /> Corporate Governance
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What do ASIC compliance services cover?
          </h2>
          {/* Document Paragraph 1 - Verbatim */}
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            ASIC compliance work focuses on the company information and corporate filings that must be kept current with the Australian Securities and Investments Commission. It is different from preparing a company tax return. A company can be tax-compliant while still having overdue corporate changes, and the reverse can also occur.
          </p>
        </div>

        {/* Inclusions Grid */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-400">
              Depending on the company and the work requested, support may include:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportInclusions.map((item, idx) => (
              <div
                key={idx}
                className="group p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:border-teal-500/50 dark:hover:border-teal-500/50 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/50 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {item.icon}
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400">
                      {item.tag}
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 mt-1 shrink-0 text-sm" />
                    <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-medium m-0">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Concluding Paragraph Callout - Verbatim */}
        <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm p-6 sm:p-8 lg:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 text-xs font-semibold mb-3">
              <SafetyCertificateOutlined />
              <span>Registered Agent Representation</span>
            </div>
            {/* Document Concluding Paragraph - Verbatim */}
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed m-0">
              For companies that want an ongoing point of contact for ASIC administration, Financially Up can also assist with an ASIC registered agent service. Company directors remain responsible for their legal duties even where an agent or accountant assists with administration.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <Link href="/book-an-appointment">
              <Button
                type="primary"
                size="large"
                icon={<ArrowRightOutlined />}
                iconPlacement="end"
                className="h-11 px-6 rounded-xl font-semibold shadow-md shadow-brand-primary/20 hover:scale-[1.02] active:scale-[0.99] transition-all"
              >
                Book an Appointment
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
