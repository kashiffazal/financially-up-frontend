"use client";

import React from "react";
import { Tag } from "antd";
import {
  UserSwitchOutlined,
  ReconciliationOutlined,
  FilterOutlined,
  FileDoneOutlined,
  CheckCircleOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

/**
 * RentalTaxReturnProcess Component
 * =================================
 * Section: How the rental property tax-return process works.
 * Features 100% complete, verbatim content from Page 2 of 10th Pillar Property Tax.docx.
 */
export default function RentalTaxReturnProcess() {
  const steps = [
    {
      step: "01",
      title: "Ownership & Timeline Confirmation",
      description:
        "Confirm legal ownership percentages, tenancy dates, periods of vacancy, private holiday usage, and any major events during the income year.",
      icon: <UserSwitchOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
    },
    {
      step: "02",
      title: "Reconcile Income & Support Documents",
      description:
        "Review real estate agent statements, tenant payments, insurance receipts, mortgage statements, rates notices, and water invoices.",
      icon: <ReconciliationOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
    },
    {
      step: "03",
      title: "Classify Expenses & Apportionment",
      description:
        "Classify immediate deductions vs capital improvements, apply Division 40 & 43 depreciation schedules, and calculate required interest apportionments.",
      icon: <FilterOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
    },
    {
      step: "04",
      title: "Rental Schedule & Return Review",
      description:
        "Draft the ATO rental schedule, review net rental gain/loss figures with you, obtain written approval, and securely lodge the tax return.",
      icon: <FileDoneOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
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
            Engagement Workflow
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How the Rental Property Tax-Return Process Works
          </h2>
          {/* Verbatim Paragraph 1 */}
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            We first confirm ownership, rental dates, periods of private use and any major events during the year. We then reconcile rental income, review the supporting documents, classify expenses and identify items that need apportionment or treatment over time. Questions are raised where an invoice description or loan transaction does not show the underlying purpose clearly.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-lg hover:border-emerald-400/60 transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-emerald-600/30 dark:text-emerald-400/30 group-hover:text-emerald-600 transition-colors">
                    {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-100 dark:border-zinc-800 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                <CheckCircleOutlined />
                <span>Standard Review Step</span>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Paragraph 2 Banner */}
        <div className="bg-slate-50/90 dark:bg-zinc-900/90 rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-zinc-800 flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-800/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
            <InfoCircleOutlined className="text-2xl" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block mb-1">
              Service Scope Boundaries
            </span>
            {/* Verbatim copy from official document */}
            <p className="text-xs sm:text-sm md:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
              The agreed service may cover the rental schedule and tax-return reporting only. A property disposal, ownership restructure, development activity or proposed transaction may require a separate CGT, GST or tax-planning engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
