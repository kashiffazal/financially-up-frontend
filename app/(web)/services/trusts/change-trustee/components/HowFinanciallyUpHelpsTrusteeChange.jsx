"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  FileSearchOutlined,
  ReconciliationOutlined,
  AuditOutlined,
  RiseOutlined,
  FileDoneOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * HowFinanciallyUpHelpsTrusteeChange Component
 * ============================================
 * Section: How Financially Up can help with a trustee change
 * Verbatim text from Page 8 of client docx (8th Pillar Trust Services.docx).
 * Covers tax position reviews, practical registration coordination,
 * and links to Trust Restructuring & Trust Tax Returns services.
 */
export default function HowFinanciallyUpHelpsTrusteeChange() {
  const deliverables = [
    {
      icon: <FileSearchOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Trust Tax Position Review",
      desc: "Reviewing the trust accounting and tax position, assessing prior-year tax returns, loss schedules, and Family Trust Election status.",
    },
    {
      icon: <ReconciliationOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Identify Affected Registrations",
      desc: "Identifying all statutory records, ABR registrations, bank mandates, and asset titles that need updating following the change.",
    },
    {
      icon: <AuditOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Coordinate Implementation Updates",
      desc: "Helping coordinate updates within our professional scope and ensuring tax records continue to reflect the trust correctly.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Service Capabilities
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How Financially Up can help with a trustee change
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Financially Up can review the trust accounting and tax position, identify records and registrations
            affected by the change, help coordinate updates within our scope and ensure the tax records continue to
            reflect the trust correctly. If the trustee change forms part of a wider reorganization, our trust
            restructuring service addresses the broader tax and accounting implications.
          </p>
        </div>

        {/* 3 Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {deliverables.map((item, idx) => (
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

        {/* Verbatim Link Callout Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-brand-bg-lighter via-white to-slate-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border border-slate-200 dark:border-zinc-800 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl space-y-2">
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Broader Restructuring & Annual Tax Return Lodgement
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Where ongoing annual compliance is also required, our{" "}
                <Link
                  href="/services/trusts/trust-tax-returns"
                  className="text-teal-600 dark:text-teal-400 font-semibold hover:underline"
                >
                  Trust Tax Returns
                </Link>{" "}
                service deals with preparation and lodgement of the trust return separately. If you are undertaking a
                broader reorganization, explore our{" "}
                <Link
                  href="/services/trusts/trust-restructuring"
                  className="text-teal-600 dark:text-teal-400 font-semibold hover:underline"
                >
                  Trust Restructuring
                </Link>{" "}
                service.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/services/trusts/trust-restructuring"
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 dark:text-zinc-200 bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700 transition-colors"
              >
                <RiseOutlined className="mr-2" />
                Trust Restructuring <ArrowRightOutlined className="ml-2 text-xs" />
              </Link>
              <Link
                href="/services/trusts/trust-tax-returns"
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 transition-colors shadow-sm"
              >
                <FileDoneOutlined className="mr-2" />
                Trust Tax Returns <ArrowRightOutlined className="ml-2 text-xs" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
