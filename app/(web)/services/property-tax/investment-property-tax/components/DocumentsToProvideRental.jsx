"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileTextOutlined,
  BankOutlined,
  DollarCircleOutlined,
  ToolOutlined,
  ApartmentOutlined,
  BarChartOutlined,
  AuditOutlined,
  UsergroupAddOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * DocumentsToProvideRental Component
 * ===================================
 * Section: What documents should you provide?
 * Features 100% complete, verbatim content from Page 2 of 10th Pillar Property Tax.docx.
 */
export default function DocumentsToProvideRental() {
  const documents = [
    {
      icon: <FileTextOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Annual Rental-Agent Statements",
      description: "End-of-financial-year summary statements showing gross rent, management commission, letting fees, and repairs disbursed.",
    },
    {
      icon: <BankOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Bank & Loan Statements",
      description: "Full 12-month statements for all investment mortgages, showing interest charged, monthly fees, redraws, and loan splits.",
    },
    {
      icon: <DollarCircleOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Rates & Insurance Notices",
      description: "Council rates, water service charges, emergency services levies, and landlord & building insurance renewal notices.",
    },
    {
      icon: <ToolOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Repair & Maintenance Invoices",
      description: "Itemised contractor invoices, plumber/electrician receipts, and materials purchased for upkeep during the financial year.",
    },
    {
      icon: <ApartmentOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Body Corporate Statements",
      description: "Quarterly strata levy notices, sinking fund contributions, special levies, and meeting minutes regarding structural repairs.",
    },
    {
      icon: <BarChartOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Depreciation Schedules",
      description: "Comprehensive Quantity Surveyor tax depreciation schedules detailing Division 40 and Division 43 deductions.",
    },
    {
      icon: <AuditOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Purchase Settlement Documents",
      description: "Conveyancing settlement adjustments, contract of sale, stamp duty receipt, and initial legal invoices for acquired properties.",
    },
    {
      icon: <UsergroupAddOutlined className="text-xl text-cyan-600 dark:text-cyan-400" />,
      title: "Renovations & Private Use Logs",
      description: "Receipts for capital additions and detailed logs of any dates the property was used privately or rented to family at discount.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Preparation Checklist
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Documents Should You Provide?
          </h2>
          {/* Verbatim Paragraph 1 */}
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Useful documents commonly include annual rental-agent statements, bank and loan statements, rates and insurance notices, repair and maintenance invoices, body corporate statements, depreciation schedules, purchase settlement documents and records of any renovations or private use.
          </p>
        </div>

        {/* 8 Document Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {documents.map((doc, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-lg hover:border-emerald-400/60 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center mb-4">
                {doc.icon}
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                {doc.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
                {doc.description}
              </p>
            </div>
          ))}
        </div>

        {/* Verbatim Paragraph 2 Banner */}
        <div className="bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/40 rounded-2xl p-6 sm:p-8 flex items-start gap-4">
          <CheckCircleOutlined className="text-2xl text-emerald-600 dark:text-emerald-400 mt-1 shrink-0" />
          <div>
            <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-1">
              Co-Ownership &amp; Legal Title Alignment
            </h4>
            {/* Verbatim copy from official document */}
            <p className="text-xs sm:text-sm md:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
              For jointly owned property, the legal ownership details are also important because rental income and expenses generally need to be reported consistently with the ownership position.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
