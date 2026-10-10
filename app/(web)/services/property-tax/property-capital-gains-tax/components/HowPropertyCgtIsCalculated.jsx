"use client";

import React from "react";
import { Tag } from "antd";
import {
  CalculatorOutlined,
  DollarOutlined,
  BuildOutlined,
  FileProtectOutlined,
  FallOutlined,
  CheckCircleOutlined,
  AlertOutlined,
} from "@ant-design/icons";

/**
 * HowPropertyCgtIsCalculated Component
 * ====================================
 * Section: How is a property capital gain calculated?
 * Features 100% complete, verbatim content from Page 5 of 10th Pillar Property Tax.docx.
 */
export default function HowPropertyCgtIsCalculated() {
  const costBaseElements = [
    {
      num: "01",
      title: "Acquisition Money",
      desc: "Original contract purchase price or deemed market value at acquisition date.",
    },
    {
      num: "02",
      title: "Incidental Purchase Costs",
      desc: "Stamp duty, legal conveyancing, surveyor reports, valuation and loan establishment fees.",
    },
    {
      num: "03",
      title: "Holding Costs (Non-Deductible)",
      desc: "Rates, land tax, insurance, and interest that were NOT claimed as rental deductions.",
    },
    {
      num: "04",
      title: "Capital Enhancements",
      desc: "Invoices for renovations, extensions, structural walls, and title defense costs.",
    },
    {
      num: "05",
      title: "Incidental Disposal Costs",
      desc: "Selling agent commission, marketing campaigns, legal fees, and auctioneer expenses.",
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
            Cost Base &amp; Methodology
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How Is a Property Capital Gain Calculated?
          </h2>
        </div>

        {/* 2 Verbatim Text Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mb-12">
          {/* Paragraph 1 */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-4">
              <CalculatorOutlined />
              <span>Calculation Order &amp; Loss Offsets</span>
            </div>
            {/* Verbatim text from official document */}
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
              Broadly, sale proceeds are compared with the property's cost base. The calculation then applies the relevant CGT rules, including capital losses and any available discount. It is important to follow the correct order: eligible current-year capital losses and carried-forward net capital losses are generally applied before an eligible CGT discount.
            </p>
          </div>

          {/* Paragraph 2 */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 mb-4">
              <BuildOutlined />
              <span>Eligible Cost Base Components</span>
            </div>
            {/* Verbatim text from official document */}
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
              The cost base can include eligible amounts paid to acquire, hold, improve, preserve and sell the property. Common examples include the purchase price, stamp duty, conveyancing costs, agent commission and qualifying capital improvements. The treatment depends on the facts, and an amount is not included simply because it appears on an invoice.
            </p>
          </div>
        </div>

        {/* 5-Element Cost Base Cards */}
        <div className="mb-12">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-4 text-center">
            The 5 Elements of an Australian Real Property CGT Cost Base
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {costBaseElements.map((el, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-zinc-900 rounded-xl p-5 border border-slate-200/80 dark:border-zinc-800 hover:border-emerald-400/50 transition-all shadow-2xs"
              >
                <span className="text-xl font-black text-emerald-600/40 dark:text-emerald-400/40 block mb-2">
                  {el.num}
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-1.5 leading-snug">
                  {el.title}
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
                  {el.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Verbatim Paragraph 3 Banner (Capital Works & Depreciation Adjustments) */}
        <div className="bg-slate-900 text-white dark:bg-zinc-900 rounded-2xl p-6 sm:p-8 border border-slate-800 flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
            <AlertOutlined className="text-2xl" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
              Division 43 Capital Works Cost Base Adjustments
            </span>
            {/* Verbatim text from official document */}
            <p className="text-xs sm:text-sm md:text-base text-slate-200 dark:text-zinc-200 leading-relaxed font-normal">
              Capital works deductions can reduce the cost base or reduced cost base where the law requires an adjustment. This can include deductions already claimed and, in some circumstances, amounts that could still be claimed. Depreciating assets may also require separate treatment rather than being included in the property CGT calculation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
