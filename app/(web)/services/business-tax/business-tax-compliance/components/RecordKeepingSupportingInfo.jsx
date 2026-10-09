"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  FolderOpenOutlined,
  BankOutlined,
  AuditOutlined,
  ClockCircleOutlined,
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * RecordKeepingSupportingInfo Component
 * =====================================
 * Section: Record Keeping and Supporting Information
 * Features 100% complete, verbatim content from Page 8 of client docx.
 * 8 Record items, 5-year retention rules, and a strict no-guesswork policy.
 */
export default function RecordKeepingSupportingInfo() {
  const recordCategories = [
    {
      category: "Invoicing & Banking",
      icon: (
        <BankOutlined className="text-xl text-teal-600 dark:text-teal-400" />
      ),
      items: [
        "Invoices and receipts for all business transactions",
        "Bank and credit-card statements verifying payments",
      ],
    },
    {
      category: "Payroll & Human Resources",
      icon: (
        <AuditOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />
      ),
      items: [
        "Payroll information, STP reports and wage reconciliations",
        "Superannuation guarantee payment confirmations",
      ],
    },
    {
      category: "Assets & Legal Agreements",
      icon: (
        <FolderOpenOutlined className="text-xl text-blue-600 dark:text-blue-400" />
      ),
      items: [
        "Asset records, purchase invoices and disposal contracts",
        "Commercial contracts, leases and finance agreements",
      ],
    },
    {
      category: "Accounting & Tax Calculations",
      icon: (
        <SafetyCertificateOutlined className="text-xl text-purple-600 dark:text-purple-400" />
      ),
      items: [
        "Accounting reports and trial balance exports",
        "Supporting tax calculations, workpapers and depreciation schedules",
      ],
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="cyan"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Documentation Standards
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Record Keeping and Supporting Information
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            The ATO requires businesses to keep records that explain
            transactions relevant to their tax and superannuation affairs.
            Depending on the matter, records may include invoices, receipts,
            bank statements, payroll information, asset records, contracts,
            calculations and accounting reports.
          </p>
        </div>

        {/* 4 Record Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {recordCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-800/90 border border-slate-200/90 dark:border-zinc-700/80 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-11 h-11 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-100 dark:border-zinc-700 flex items-center justify-center shrink-0">
                  {cat.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  {cat.category}
                </h3>
              </div>
              <ul className="space-y-2.5">
                {cat.items.map((item, itemIdx) => (
                  <li
                    key={itemIdx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal"
                  >
                    <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 text-xs mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 2 Advisory Callouts: Statutory Retention & No Guesswork */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Statutory 5-Year Rule */}
          <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-emerald-50 via-white to-teal-50/50 dark:from-zinc-900 dark:via-zinc-850 dark:to-zinc-900 border border-emerald-200/80 dark:border-emerald-800/50 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <ClockCircleOutlined className="text-emerald-600 dark:text-emerald-400 text-base" />
                <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                  Statutory Retention Periods
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
                Business tax records generally need to be kept for five years,
                although some records must be retained for longer depending on
                the transaction, asset, loss or legal requirement. Companies
                also have separate corporate record-keeping obligations.
              </p>
            </div>
          </div>

          {/* No Guesswork Policy */}
          <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-blue-50 via-white to-indigo-50/50 dark:from-zinc-900 dark:via-zinc-850 dark:to-zinc-900 border border-blue-200/80 dark:border-blue-800/50 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <AuditOutlined className="text-blue-600 dark:text-blue-400 text-base" />
                <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                  Evidence-Based Preparation (No Guesswork)
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                Financially Up can identify the records needed for the work
                being prepared. We do not recommend guessing figures where
                source information is unavailable; missing information should be
                addressed using appropriate records and a supportable method.
              </p>
            </div>
            <div>
              <Link href="/book-an-appointment">
                <Button
                  type="default"
                  className="brand-btn-outline text-xs font-semibold rounded-xl"
                  icon={<ArrowRightOutlined />}
                  iconPlacement="end"
                >
                  Verify Your Records
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
