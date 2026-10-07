"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  AuditOutlined,
  ReconciliationOutlined,
  CalculatorOutlined,
  FileProtectOutlined,
  CheckCircleOutlined,
  ApartmentOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * PartnershipAccountingCompliance Component
 * ==========================================
 * Section: Partnership Accounting and Compliance Support
 * Features 100% complete, verbatim content from Page 4 of client docx.
 * Covers year-end figures, reconciliations, GST, BAS, PAYG, and superannuation.
 */
export default function PartnershipAccountingCompliance() {
  const accountingScopes = [
    {
      icon: <AuditOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Reviewing Bookkeeping Data",
      desc: "Examining general ledger transactions, journals, reconciliations, and chart of accounts integrity.",
    },
    {
      icon: <ReconciliationOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Reconciling Bank & Balance Sheet",
      desc: "Balancing business trading accounts, credit facilities, commercial loans, and partner capital/current accounts.",
    },
    {
      icon: <CalculatorOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Preparing Year-End Figures",
      desc: "Finalizing accurate profit and loss figures, balance sheet schedules, and tax adjustments for lodgment.",
    },
    {
      icon: <FileProtectOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Checking Income & Expenses",
      desc: "Verifying business income, claiming allowable operating deductions, and preparing tax lodgment schedules.",
    },
  ];

  const employerObligations = [
    {
      label: "Goods & Services Tax (GST)",
      detail: "Quarterly or monthly BAS lodgment and GST reconciliations.",
    },
    {
      label: "PAYG Withholding (PAYGW)",
      detail: "Tax withheld from employee wages and reported via Single Touch Payroll (STP).",
    },
    {
      label: "Superannuation Guarantee",
      detail: "Mandatory employer super contributions for eligible employees.",
    },
    {
      label: "Activity Statements (BAS / IAS)",
      detail: "Timely lodgments meeting ATO compliance milestones throughout the year.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Year-End Accounting &amp; Compliance
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Partnership Accounting and Compliance Support
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Good partnership accounting starts with complete records. Depending on the business, our partnership accounting services may include reviewing bookkeeping data, reconciling bank and balance-sheet accounts, preparing year-end figures, checking business income and expenses and preparing the information required for tax lodgment.
          </p>
        </div>

        {/* 4 Accounting Scopes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {accountingScopes.map((scope, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-4">
                {scope.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                {scope.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                {scope.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Employer & Statutory Obligations Panel */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-brand-bg-lighter via-white to-slate-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border border-slate-200 dark:border-zinc-800 shadow-sm mb-12">
          <div className="max-w-3xl mb-6">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
              GST, BAS &amp; Employer Obligations
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Where relevant, the partnership may also have GST, BAS, PAYG withholding, superannuation or other employer obligations. These obligations are separate from the annual partnership tax return and should be managed according to the registrations and activities of the business.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {employerObligations.map((obl, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white dark:bg-zinc-800 border border-slate-200/80 dark:border-zinc-700"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 text-xs shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                    {obl.label}
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed">
                  {obl.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Cross-Service Reference Strip */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-50/80 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <ApartmentOutlined className="text-teal-600 dark:text-teal-400" />
              Need Broader Business Reporting or Accounting?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              For broader reporting needs, see our Business Financial Statements service. For an overview of the wider tax and accounting support available to businesses, see Business Tax &amp; Accounting.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0 w-full md:w-auto">
            <Link href="/services/business-tax/business-financial-statements">
              <Button
                type="default"
                className="brand-btn-outline text-xs sm:text-sm font-semibold rounded-xl"
              >
                Business Financial Statements
              </Button>
            </Link>
            <Link href="/services/business-tax">
              <Button
                type="primary"
                className="brand-btn-primary text-xs sm:text-sm font-semibold rounded-xl"
                icon={<ArrowRightOutlined />}
                iconPosition="end"
              >
                Business Tax Hub
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
