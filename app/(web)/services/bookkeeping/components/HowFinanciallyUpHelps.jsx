"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileTextOutlined,
  SyncOutlined,
  ClearOutlined,
  UsergroupAddOutlined,
  FileDoneOutlined,
  InteractionOutlined,
  ToolOutlined,
} from "@ant-design/icons";

/**
 * HowFinanciallyUpHelps Component
 * ===============================
 * Section 7: How Financially Up can help.
 *
 * Content is 100% VERBATIM from the professional SEO specialist document:
 * '4th Pillar Bookkeeping.docx' (Page 1).
 * Background: Lite Brand Gradient.
 */
export default function HowFinanciallyUpHelps() {
  /**
   * The 6 exact assistance pillars verbatim from Page 1 of the client document
   */
  const servicePillars = [
    {
      icon: <SyncOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Day-to-day transaction recording and coding, where included in scope",
      description:
        "Consistent recording and classification of daily sales, operating expenses, and banking transactions.",
    },
    {
      icon: <FileTextOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Bank and credit-card reconciliations",
      description:
        "Matching accounting file transactions against official bank and card statements to ensure accurate balances.",
    },
    {
      icon: <ClearOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Review and clean-up of bookkeeping records",
      description:
        "Investigating unexplained balances, historical coding errors, and clearing suspense items.",
    },
    {
      icon: <UsergroupAddOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Customer and supplier transaction support where relevant",
      description:
        "Processing supplier bills, managing accounts payable, customer invoices, and debtor records.",
    },
    {
      icon: <FileDoneOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Preparation of bookkeeping records for BAS, tax or accounting work",
      description:
        "Structuring and validating underlying records so accountants can prepare compliance lodgements efficiently.",
    },
    {
      icon: <InteractionOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Coordination with separately scoped payroll, BAS, tax and accounting services",
      description:
        "Seamless alignment between day-to-day bookkeeping routines and registered tax agent compliance services.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 border-t border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <Tag color="green" className="brand-section-tag">
            <ToolOutlined className="mr-1" /> Practical Support
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How Financially Up can help
          </h2>
          {/* Document Introductory Paragraph - Verbatim */}
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            Financially Up can review your current bookkeeping setup, identify
            areas that need clean-up and agree on a practical scope for ongoing
            support. We can work with the accounting records you already have
            and help establish a more consistent process for receiving
            documents, reconciling accounts and resolving queries.
          </p>
        </div>

        {/* 6 Practical Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicePillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-500/50 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-800 flex items-center justify-center mb-4">
                  {pillar.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed m-0 font-normal">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
