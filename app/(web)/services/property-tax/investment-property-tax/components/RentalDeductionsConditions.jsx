"use client";

import React from "react";
import { Tag } from "antd";
import {
  LinkOutlined,
  CalendarOutlined,
  StopOutlined,
  FileTextOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * RentalDeductionsConditions Component
 * ====================================
 * Section: When can rental property expenses be deductible?
 * Features 100% complete, verbatim content from Page 2 of 10th Pillar Property Tax.docx.
 */
export default function RentalDeductionsConditions() {
  const deductionCriteria = [
    {
      icon: <LinkOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Sufficient Connection to Income",
      description:
        "The expenditure must have a direct nexus with earning assessable rental income during the relevant financial year.",
    },
    {
      icon: <CalendarOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Rented or Genuinely Available for Rent",
      description:
        "Expenses generally qualify only while tenants occupy the premises or while the property is actively marketed on commercial terms.",
    },
    {
      icon: <StopOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Non-Private & Non-Capital Nature",
      description:
        "Costs cannot be private living expenses or capital alterations. Where partly private, only the apportioned income-producing portion is deductible.",
    },
    {
      icon: <FileTextOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Substance Over Invoice Label",
      description:
        "The label written on an invoice is not decisive. The underlying nature of the work and factual circumstances determine ATO tax deductibility.",
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
            Deductibility Criteria
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            When Can Rental Property Expenses Be Deductible?
          </h2>
        </div>

        {/* 2 Verbatim Text Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mb-12">
          {/* Paragraph 1 */}
          <div className="bg-slate-50/80 dark:bg-zinc-900/80 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-4">
              <CheckCircleOutlined />
              <span>Core Statutory Principles</span>
            </div>
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
              A deduction generally requires a sufficient connection with earning rental income. For many expenses, the property must be rented or genuinely available for rent and the cost cannot be private or capital in nature. Where an expense relates partly to private use, only the income-producing portion may be deductible.
            </p>
          </div>

          {/* Paragraph 2 */}
          <div className="bg-slate-50/80 dark:bg-zinc-900/80 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 mb-4">
              <CheckCircleOutlined />
              <span>Eligible Costs &amp; Invoice Classification</span>
            </div>
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
              Common examples can include property-agent fees, council rates, insurance, eligible interest and certain repairs or maintenance. However, the label on an invoice is not decisive. The underlying work and circumstances determine the tax treatment.
            </p>
          </div>
        </div>

        {/* 4 Supporting Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {deductionCriteria.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-xl p-5 border border-slate-200/70 dark:border-zinc-800 hover:border-emerald-400/50 transition-all shadow-2xs"
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 flex items-center justify-center mb-3">
                {item.icon}
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
