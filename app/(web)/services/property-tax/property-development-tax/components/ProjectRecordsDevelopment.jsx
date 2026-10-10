"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileTextOutlined,
  FileDoneOutlined,
  ToolOutlined,
  TeamOutlined,
  BankOutlined,
  DollarCircleOutlined,
  CalculatorOutlined,
  AuditOutlined,
  ShareAltOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * ProjectRecordsDevelopment Component
 * ====================================
 * Section: Property development accounting and project records.
 * Features 100% complete, verbatim content from Page 3 of 10th Pillar Property Tax.docx.
 */
export default function ProjectRecordsDevelopment() {
  const recordsList = [
    {
      icon: <FileTextOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "purchase and settlement documents",
      detail: "Contracts for sale of land, settlement adjustments, stamp duty assessment, and title registration fees.",
      tag: "Acquisition",
    },
    {
      icon: <FileDoneOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "development approvals and project agreements",
      detail: "Council DA notices, Section 7.11/94 contributions, construction certificates, and joint venture/project agreements.",
      tag: "Planning & Approvals",
    },
    {
      icon: <ToolOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "construction and contractor invoices",
      detail: "Progress claims, builder contracts (ABIC/Master Builders), subcontractor invoices, variations, and retention sums.",
      tag: "Construction",
    },
    {
      icon: <TeamOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "architect, engineer, surveyor and consultant costs",
      detail: "Architectural drawings, structural engineering reports, geotechnical surveys, and acoustic consultant fees.",
      tag: "Consultants",
    },
    {
      icon: <BankOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "loan statements and finance costs",
      detail: "Development facility statements, lender line fees, valuation fees, interest capitalization, and broker commissions.",
      tag: "Funding & Finance",
    },
    {
      icon: <DollarCircleOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "sales contracts, deposits and settlement statements",
      detail: "Pre-sale contracts, agent trust deposit receipts, settlement direction sheets, and purchaser adjustments.",
      tag: "Sales & Settlements",
    },
    {
      icon: <CalculatorOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "GST tax invoices and BAS records",
      detail: "Valid tax invoices for all input tax credits claimed, quarterly/monthly BAS lodgements, and ATO portal statements.",
      tag: "GST Records",
    },
    {
      icon: <AuditOutlined className="text-xl text-cyan-600 dark:text-cyan-400" />,
      title: "legal and conveyancing costs",
      detail: "Solicitor fees for site acquisition, drafting off-the-plan contracts, easement negotiations, and strata titling.",
      tag: "Legal & Titles",
    },
    {
      icon: <ShareAltOutlined className="text-xl text-emerald-700 dark:text-emerald-300" />,
      title: "entity distributions, loans and inter-entity transactions where relevant",
      detail: "Division 7A loan agreements, trustee distribution resolutions, intercompany loan accounts, and journal entries.",
      tag: "Inter-Entity Flows",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Project Accounting Infrastructure
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Property Development Accounting and Project Records
          </h2>
          {/* Verbatim Paragraph 1 */}
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A property developer accountant helps create a consistent record of acquisition, finance, construction, professional fees, GST, settlements and project income. Good project accounting makes it easier to understand profitability and prepare tax and BAS reporting.
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-700 dark:text-zinc-200 font-semibold">
            Depending on the project, records may include:
          </p>
        </div>

        {/* 9 Records Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {recordsList.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between bg-slate-50/70 dark:bg-zinc-900/70 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-lg hover:border-emerald-400/60 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-800 border border-slate-200/70 dark:border-zinc-700/60 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <Tag color="cyan" className="text-[11px] font-semibold uppercase">
                    {item.tag}
                  </Tag>
                </div>

                <div className="flex items-start gap-2.5 mb-3">
                  <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-sm mt-1 shrink-0" />
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug capitalize-first">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed pl-6 font-normal">
                  {item.detail}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/70 dark:border-zinc-800 flex items-center justify-between text-xs text-slate-400 dark:text-zinc-500 font-medium">
                <span>Record Item 0{idx + 1}</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                  Essential Audit Trail
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
