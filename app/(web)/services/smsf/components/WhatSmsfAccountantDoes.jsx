"use client";

import React from "react";
import { Button } from "antd";
import {
  AuditOutlined,
  SafetyCertificateOutlined,
  LineChartOutlined,
  FileTextOutlined,
  FileDoneOutlined,
  ArrowRightOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import Link from "next/link";

/**
 * WhatSmsfAccountantDoes Component
 * ================================
 * Section 2 of SMSF Hub:
 * Implements exact text from "What does an SMSF accountant do?" in 9th Pillar SMSF.docx.
 *
 * Features:
 * - Verbatim introductory paragraph detailing core accountant responsibilities.
 * - 4 interactive role cards derived directly from the exact duties named in the document.
 * - Prominent statutory independence highlight featuring the verbatim ASIC audit requirement.
 *
 * Background: Lite Brand Gradient.
 */
export default function WhatSmsfAccountantDoes() {
  // 4 Core Accounting Duties identified verbatim in the document
  const coreDuties = [
    {
      icon: <FileTextOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Maintaining & Reviewing Records",
      description:
        "Maintaining or reviewing accounting records, reconciling bank accounts, and organizing fund investment transactions.",
      tag: "Accounting Records",
    },
    {
      icon: <FileDoneOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Preparing Financial Statements",
      description:
        "Preparing annual financial statements, including the operating statement and statement of financial position.",
      tag: "Financial Accounts",
    },
    {
      icon: <LineChartOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "SMSF Annual Return Preparation",
      description:
        "Preparing the SMSF annual return, calculating fund tax liabilities, franking credit refunds, and member reporting.",
      tag: "Annual Tax Return",
    },
    {
      icon: <AuditOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Auditor Information Coordination",
      description:
        "Coordinating information, source records, and supporting schedules for the fund's approved independent SMSF auditor.",
      tag: "Audit Coordination",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Verbatim Title & Copy */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-800/60 mb-4">
            <SafetyCertificateOutlined className="text-teal-600 dark:text-teal-400 text-xs sm:text-sm" />
            <span className="text-xs font-semibold text-teal-800 dark:text-teal-300 tracking-wide uppercase">
              Accounting & Compliance Roles
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What does an SMSF accountant do?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
            An SMSF accountant supports the financial, tax and reporting side of the fund. The exact work depends on the fund&apos;s investments, member activity and stage of life, but commonly includes maintaining or reviewing accounting records, preparing annual financial statements, preparing the SMSF annual return and coordinating information for the fund&apos;s approved SMSF auditor.
          </p>
        </div>

        {/* 4 Core Duties Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {coreDuties.map((duty, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:border-teal-500/50 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-zinc-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {duty.icon}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400">
                    {duty.tag}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {duty.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                  {duty.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Statutory Auditor Independence Highlight - Exact Copy from Document */}
        <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Narrative with Verbatim Copy */}
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 text-xs font-semibold mb-4">
                <AuditOutlined />
                <span>Auditor Independence Requirement</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                The auditor must remain independent
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed mb-6">
                Every SMSF is required to have its financial statements and compliance audited each income year by an approved SMSF auditor registered with ASIC. Accounting and tax preparation can support the audit process, but the accountant does not replace the independent audit.
              </p>
              <div className="flex flex-wrap items-center gap-3">
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
                <Link href="#smsf-services-overview">
                  <Button
                    size="large"
                    icon={<EyeOutlined />}
                    className="h-11 px-5 rounded-xl font-semibold border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-200 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-all"
                  >
                    Explore SMSF Services
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Statutory Card */}
            <div className="lg:col-span-4 bg-slate-50 dark:bg-zinc-950/60 rounded-xl p-5 sm:p-6 border border-slate-200/80 dark:border-zinc-800/80 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center text-lg">
                <SafetyCertificateOutlined />
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                Statutory Separation
              </h4>
              <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                ASIC regulations require the approved SMSF auditor to be completely independent of the accounting firm that prepares the fund&apos;s financial statements and tax return.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
