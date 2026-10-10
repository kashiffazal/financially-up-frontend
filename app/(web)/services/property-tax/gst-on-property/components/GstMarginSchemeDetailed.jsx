"use client";

import React from "react";
import { Tag } from "antd";
import {
  CalculatorOutlined,
  HistoryOutlined,
  FileDoneOutlined,
  StopOutlined,
  AuditOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * GstMarginSchemeDetailed Component
 * =================================
 * Section: What is the GST margin scheme?
 * Features 100% complete, verbatim content from Page 6 of 10th Pillar Property Tax.docx.
 */
export default function GstMarginSchemeDetailed() {
  const marginKeyFacts = [
    {
      icon: <CalculatorOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Margin Calculation",
      description: "GST is worked out as 1/11th of the statutory margin (sale price minus acquisition consideration or approved valuation), not the full sale price.",
    },
    {
      icon: <HistoryOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Acquisition History Restrictions",
      description: "The scheme is unavailable if the vendor acquired the property through a fully taxable supply without the margin scheme applied.",
    },
    {
      icon: <FileDoneOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Written Agreement Mandate",
      description: "Seller and buyer must agree in writing to apply the scheme on or before settlement (usually via explicit contract clauses).",
    },
    {
      icon: <StopOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "No Purchaser Input Tax Credit",
      description: "Purchasers of real estate under the margin scheme cannot claim a GST credit on the purchase price, regardless of their GST registration.",
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
            Margin Scheme Mechanism
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Is the GST Margin Scheme?
          </h2>
          {/* Verbatim Paragraph 1 */}
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            The margin scheme is an alternative way to calculate GST on an eligible taxable sale of real property. It does not make the sale GST-free and the margin is not simply the accounting profit. Eligibility and the calculation depend on how and when the seller acquired the property and the applicable valuation or consideration rules.
          </p>
        </div>

        {/* 4 Margin Key Facts Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {marginKeyFacts.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 dark:bg-zinc-900/70 rounded-2xl p-6 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-lg transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-800 border border-slate-200/70 dark:border-zinc-700/60 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* 2 Verbatim Text Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          {/* Paragraph 2 */}
          <div className="bg-slate-50/80 dark:bg-zinc-900/80 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-4">
              <HistoryOutlined />
              <span>Eligibility &amp; Prior Acquisition History</span>
            </div>
            {/* Verbatim text from official document */}
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
              The margin scheme is not available for every sale. For example, the seller's acquisition history may prevent its use. The seller and purchaser must generally agree in writing to apply the scheme on or before the supply is made, subject to limited ATO discretion to allow more time.
            </p>
          </div>

          {/* Paragraph 3 */}
          <div className="bg-slate-50/80 dark:bg-zinc-900/80 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 mb-4">
              <AuditOutlined />
              <span>Purchaser Restrictions &amp; Professional Roles</span>
            </div>
            {/* Verbatim text from official document */}
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
              A purchaser cannot claim a GST credit for GST included in a purchase price worked out under the margin scheme. The contract, earlier acquisition documents and any valuation are therefore central to a review. A GST margin scheme accountant can calculate the tax position, while the solicitor or conveyancer remains responsible for legal drafting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
