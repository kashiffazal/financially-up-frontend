"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  AuditOutlined,
  CheckCircleOutlined,
  FileSyncOutlined,
  DatabaseOutlined,
  FileDoneOutlined,
  TeamOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * HowRestructureAccountantHelps Component
 * Covers 'How a business restructure accountant can help' and ongoing tax compliance
 * from Page 8 of 6th Pillar Business Structures.docx.
 */
export default function HowRestructureAccountantHelps() {
  const scopePoints = [
    {
      title: "Structure Evaluation",
      desc: "Reviewing the existing structure and proposed destination structure.",
    },
    {
      title: "Asset & Liability Analysis",
      desc: "Identifying assets, liabilities, loans and balances that may need to move or be dealt with.",
    },
    {
      title: "Concession & Roll-Over Review",
      desc: "Considering tax consequences and whether relevant roll-overs or concessions may need detailed review.",
    },
    {
      title: "Registrations Support",
      desc: "Assisting with company, ABN and tax registrations within the agreed scope.",
    },
    {
      title: "Opening Balances & General Ledger",
      desc: "Planning opening balances and accounting records for the new entity.",
    },
    {
      title: "Operational Systems Alignment",
      desc: "Coordinating bookkeeping, GST, payroll or other systems where operations are moving.",
    },
    {
      title: "Reconciliation & Migration Data",
      desc: "Preparing or reconciling accounting information needed for the transition.",
    },
    {
      title: "Professional Scope Boundaries",
      desc: "Identifying matters that require legal, finance or other specialist advice.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Section Header */}
        <div className="max-w-3xl">
          <Tag color="cyan" className="brand-section-tag font-bold tracking-wider uppercase text-xs mb-3">
            <AuditOutlined className="mr-1.5" />
            Accounting & Tax Support Scope
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How a business restructure accountant can help
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A business restructure accountant helps connect the proposed commercial change with its tax and accounting consequences. Within the agreed accounting and tax scope, Financially Up may assist with:
          </p>
        </div>

        {/* 8 Assistance Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {scopePoints.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 shadow-xs flex flex-col justify-between hover:border-emerald-500/50 hover:shadow-sm transition-all"
            >
              <div className="space-y-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 font-bold flex items-center justify-center text-sm">
                  {idx + 1}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Ongoing Business Tax Compliance Callout */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-50/80 to-teal-50/80 dark:from-emerald-950/20 dark:to-teal-950/20 border border-emerald-200/80 dark:border-emerald-800/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xs">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-400 font-bold text-base sm:text-lg">
              <FileDoneOutlined className="text-xl" />
              Continuing Obligations After Restructuring
            </div>
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed max-w-3xl">
              After implementation, ongoing obligations remain important. Our <strong className="text-slate-900 dark:text-white">Business Tax Compliance</strong> service covers continuing tax-compliance work rather than the one-off restructure process.
            </p>
          </div>
          <Link
            href="/services/business-tax/business-tax-compliance"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-primary hover:bg-brand-primary-hover text-white font-semibold shadow-md transition-all shrink-0 text-sm"
          >
            Business Tax Compliance
            <ArrowRightOutlined className="text-xs" />
          </Link>
        </div>

      </div>
    </section>
  );
}
