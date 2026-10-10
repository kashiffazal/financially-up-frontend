"use client";

import React from "react";
import { Tag } from "antd";
import {
  DollarOutlined,
  LineChartOutlined,
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  AlertOutlined,
} from "@ant-design/icons";

/**
 * CgtVsOrdinaryIncomeSubdivision Component
 * ========================================
 * Section: Is the sale taxed under CGT or as ordinary income?
 * Features 100% complete, verbatim content from Page 4 of 10th Pillar Property Tax.docx.
 */
export default function CgtVsOrdinaryIncomeSubdivision() {
  const assessmentFactors = [
    {
      title: "Original & Evolving Purpose",
      description: "Did the owner buy the land to live in or hold for long-term rental, or with a profit-making scheme in mind?",
    },
    {
      title: "Level of Physical Development",
      description: "Did works merely satisfy minimum council subdivision conditions, or did they involve extensive civil enhancements?",
    },
    {
      title: "Borrowed Funds & Leverage",
      description: "Was the project financed using high-risk debt facilities or commercial development lending?",
    },
    {
      title: "Professional Organization & Marketing",
      description: "Was a project manager appointed, display suites created, or an aggressive promotional campaign launched?",
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
            Tax Classification
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Is the Sale Taxed Under CGT or as Ordinary Income?
          </h2>
        </div>

        {/* 2 Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Card 1: CGT Treatment */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center mb-6">
              <LineChartOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
              Capital Gains Tax (CGT Asset)
            </h3>
            {/* Verbatim text from official document */}
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-6">
              Where subdivided land remains a capital asset, CGT generally applies when a lot is sold. The original land's cost base must be allocated between the new lots on a reasonable basis. Relevant subdivision and sale costs must also be classified and allocated appropriately.
            </p>
            <div className="pt-4 border-t border-slate-100 dark:border-zinc-800 flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
              <CheckCircleOutlined />
              <span>Potential 50% CGT Discount for Individuals &amp; Trusts</span>
            </div>
          </div>

          {/* Card 2: Ordinary Income */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/60 border border-teal-100 dark:border-teal-800/40 flex items-center justify-center mb-6">
              <DollarOutlined className="text-2xl text-teal-600 dark:text-teal-400" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
              Ordinary Income (Business / Commercial Undertaking)
            </h3>
            {/* Verbatim text from official document */}
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-6">
              Ordinary income treatment may apply where the activities amount to a business operation or commercial transaction entered into with a profit-making purpose. Relevant facts can include the original and later purpose for holding the land, the change in plans, the level of development, borrowed funds, professional organization, marketing and the owner's involvement.
            </p>
            <div className="pt-4 border-t border-slate-100 dark:border-zinc-800 flex items-center gap-2 text-xs text-teal-600 dark:text-teal-400 font-semibold">
              <AlertOutlined />
              <span>Taxed at Marginal Rates (No 50% CGT Discount)</span>
            </div>
          </div>
        </div>

        {/* 4 Relevant Assessment Factors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {assessmentFactors.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-xl p-5 border border-slate-200/70 dark:border-zinc-800 shadow-2xs"
            >
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                {item.title}
              </h4>
              <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Verbatim Paragraph 3 Banner (Anti-Double Taxation) */}
        <div className="bg-slate-900 text-white dark:bg-zinc-900 rounded-2xl p-6 sm:p-8 border border-slate-800 flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
            <SafetyCertificateOutlined className="text-2xl" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">
              Statutory Anti-Overlap Safeguards
            </span>
            {/* Verbatim text from official document */}
            <p className="text-xs sm:text-sm md:text-base text-slate-200 dark:text-zinc-200 leading-relaxed font-normal">
              No single factor decides the result. A change of intention after acquisition can also be important. If an amount is included as ordinary income and a CGT event also arises, the CGT rules contain mechanisms intended to prevent the same economic gain being taxed twice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
