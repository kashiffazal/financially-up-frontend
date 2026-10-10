"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  BookOutlined,
  FileDoneOutlined,
  BankOutlined,
  AuditOutlined,
  DollarCircleOutlined,
  SafetyCertificateOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * WhatFinanciallyUpHelpsCorporateTrustee Component
 * ===============================================
 * Section: What Financially Up can help with
 * Verbatim text from Page 5 of client docx (8th Pillar Trust Services.docx).
 * Lists the 6 core accounting, tax, ASIC administration, and legal coordination deliverables.
 */
export default function WhatFinanciallyUpHelpsCorporateTrustee() {
  const deliverables = [
    {
      icon: <BookOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Trust & Company Records",
      desc: "Trust and trustee-company accounting records.",
    },
    {
      icon: <FileDoneOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Year-End Accounts & Tax Prep",
      desc: "Year-end accounts and trust tax preparation where required.",
    },
    {
      icon: <BankOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "ASIC Administration",
      desc: "ASIC administration and company-detail maintenance for the trustee company.",
    },
    {
      icon: <AuditOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Beneficiary Entitlements",
      desc: "Accounting for beneficiary entitlements, distributions and relevant balances.",
    },
    {
      icon: <DollarCircleOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "GST/BAS & Registrations",
      desc: "GST/BAS and other tax registrations where they apply.",
    },
    {
      icon: <SafetyCertificateOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Legal Adviser Coordination",
      desc: "Coordination with legal advisers when deed or trustee-appointment documents need legal work.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950/60 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Service Capabilities
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Financially Up can help with
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            We provide full-spectrum accounting, annual compliance, ASIC registry maintenance, and legal liaison for
            trusts with corporate trustees across Australia.
          </p>
        </div>

        {/* 6 Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {deliverables.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-4">
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

        {/* Action Callout Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              Ready to Align Your Trust and Trustee Company?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Book a consultation to review your corporate trustee registers, ledger separation, and annual tax lodgements.
            </p>
          </div>
          <Link
            href="/book-an-appointment"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 transition-colors shadow-sm shrink-0"
          >
            Book an Appointment <ArrowRightOutlined className="ml-2 text-xs" />
          </Link>
        </div>
      </div>
    </section>
  );
}
