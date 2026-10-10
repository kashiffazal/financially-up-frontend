"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileSearchOutlined,
  SettingOutlined,
  CalculatorOutlined,
  FileDoneOutlined,
  CheckCircleOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

/**
 * HowDevEngagementWorks Component
 * ===============================
 * Section: How a property development accounting engagement works.
 * Features 100% complete, verbatim content from Page 3 of 10th Pillar Property Tax.docx.
 */
export default function HowDevEngagementWorks() {
  const steps = [
    {
      step: "01",
      title: "Initial Fact-Finding & Review",
      description: "Review legal entity structure, purchase contracts, development permits, funding agreements, and current GST registration status.",
      icon: <FileSearchOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
    },
    {
      step: "02",
      title: "Project Account & Ledger Setup",
      description: "Establish dedicated chart of accounts, project job codes, contractor tracking, and cloud accounting software integration.",
      icon: <SettingOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
    },
    {
      step: "03",
      title: "Transaction Coding & BAS Review",
      description: "Code monthly or quarterly invoices, verify valid tax invoices, manage input tax credits, and reconcile purchaser withholdings.",
      icon: <CalculatorOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
    },
    {
      step: "04",
      title: "Year-End Accounts & Tax Returns",
      description: "Prepare project financial statements, reconcile work-in-progress (WIP) or trading stock, and lodge entity tax returns.",
      icon: <FileDoneOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
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
            Engagement Structure
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How a Property Development Accounting Engagement Works
          </h2>
          {/* Verbatim Paragraph 1 */}
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            We begin by reviewing the entity, acquisition documents, project purpose, funding, contracts, GST registration position and existing accounting records. The engagement is then scoped around the work required, such as project-account setup, transaction coding, BAS review, year-end accounts, tax-return preparation or transaction-specific tax advice.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 dark:bg-zinc-900/70 rounded-2xl p-6 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-lg hover:border-emerald-400/60 transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-emerald-600/30 dark:text-emerald-400/30 group-hover:text-emerald-600 transition-colors">
                    {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-800 border border-slate-200/70 dark:border-zinc-700/60 flex items-center justify-center">
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
              <div className="mt-6 pt-3 border-t border-slate-200/70 dark:border-zinc-800 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                <CheckCircleOutlined />
                <span>Development Milestone</span>
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
              Multi-Disciplinary Coordination
            </span>
            {/* Verbatim copy from official document */}
            <p className="text-xs sm:text-sm md:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
              Where the project raises contract, ownership, valuation, finance or financial-product questions, separate legal, valuation or appropriately authorized financial advice may be required. Financially Up’s role is limited to the accounting and tax services agreed with the client.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
