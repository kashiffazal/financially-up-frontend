"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  FolderOpenOutlined,
  BankOutlined,
  AuditOutlined,
  ClockCircleOutlined,
  TeamOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * RecordsNeededYearEndAccounting Component
 * =======================================
 * Section: What Records May Be Needed?
 * Features 100% complete, verbatim content from Page 7 of client docx.
 * 10 Record items and statutory retention comparison (5-year tax vs 7-year company records).
 */
export default function RecordsNeededYearEndAccounting() {
  const recordCategories = [
    {
      category: "Software & Banking Facilities",
      icon: (
        <BankOutlined className="text-xl text-teal-600 dark:text-teal-400" />
      ),
      items: [
        "Accounting software access",
        "Bank and credit-card statements",
        "Loan statements and commercial finance agreements",
      ],
    },
    {
      category: "Assets, Purchases & Stock",
      icon: (
        <AuditOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />
      ),
      items: [
        "Asset purchase and sale documents",
        "Inventory information and end-of-year stock counts",
      ],
    },
    {
      category: "Payroll & Indirect Taxes",
      icon: (
        <TeamOutlined className="text-xl text-blue-600 dark:text-blue-400" />
      ),
      items: [
        "Payroll reports and STP finalisation summaries",
        "BAS records and GST calculation sheets",
      ],
    },
    {
      category: "Prior Accounts & One-Off Events",
      icon: (
        <FolderOpenOutlined className="text-xl text-purple-600 dark:text-purple-400" />
      ),
      items: [
        "Prior-year accounts and balance sheets",
        "Details of unusual or one-off transactions",
      ],
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="cyan"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Documentation Checklist
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Records May Be Needed?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Useful year-end information can include accounting software access,
            bank and credit-card statements, loan statements, asset purchase and
            sale documents, payroll reports, BAS records, inventory information,
            finance agreements, prior-year accounts and details of unusual or
            one-off transactions.
          </p>
        </div>

        {/* 4 Record Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {recordCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-11 h-11 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center shrink-0">
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

        {/* Missing Records Support & Statutory Retention Rules */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Missing Records Assistance */}
          <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-teal-50 via-white to-emerald-50/50 dark:from-zinc-900 dark:via-zinc-850 dark:to-zinc-900 border border-teal-200/80 dark:border-zinc-700 shadow-sm flex flex-col justify-between">
            <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
              Missing Records &amp; Gap Resolution
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-normal mb-4">
              Complete source records make it easier to resolve balances without
              assumptions. Where information is missing, we can identify the
              gaps and explain what supporting material is needed before the
              accounts are finalized.
            </p>
            <div>
              <Link href="/book-an-appointment">
                <Button
                  type="default"
                  className="brand-btn-outline text-xs font-semibold rounded-xl"
                  icon={<ArrowRightOutlined />}
                  iconPlacement="end"
                >
                  Send Records for Review
                </Button>
              </Link>
            </div>
          </div>

          {/* Statutory 5-Year vs 7-Year Retention */}
          <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-blue-50 via-white to-indigo-50/50 dark:from-zinc-900 dark:via-zinc-850 dark:to-zinc-900 border border-blue-200/80 dark:border-blue-800/50 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <ClockCircleOutlined className="text-blue-600 dark:text-blue-400 text-base" />
                <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                  Statutory Retention Periods
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
                Business tax records generally need to be kept for five years,
                although some records may need to be retained for longer.
                Companies must generally keep their financial records for at
                least seven years. The applicable period depends on the entity
                and the type of record.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
