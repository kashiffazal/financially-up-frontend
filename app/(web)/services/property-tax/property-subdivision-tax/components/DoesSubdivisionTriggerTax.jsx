"use client";

import React from "react";
import { Tag } from "antd";
import {
  ApartmentOutlined,
  CheckCircleOutlined,
  InfoCircleOutlined,
  DollarOutlined,
} from "@ant-design/icons";

/**
 * DoesSubdivisionTriggerTax Component
 * ===================================
 * Section: Does subdividing land trigger tax?
 * Features 100% complete, verbatim content from Page 4 of 10th Pillar Property Tax.docx.
 */
export default function DoesSubdivisionTriggerTax() {
  const comparisonItems = [
    {
      icon: <ApartmentOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Subdivision Event Alone",
      status: "No Immediate CGT Event",
      description: "Subdividing one parcel into separate titles does not trigger CGT while ownership remains unchanged. Each resulting lot becomes a separate CGT asset retaining the original acquisition date.",
    },
    {
      icon: <DollarOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Eventual Lot Disposal",
      status: "Tax Trigger Point",
      description: "Disposal occurs upon entering the sale contract for each individual lot, requiring either CGT calculation or ordinary income profit determination.",
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
            Statutory Trigger Points
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Does Subdividing Land Trigger Tax?
          </h2>
        </div>

        {/* 2 Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {comparisonItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 dark:bg-zinc-900/70 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-800 border border-slate-200/70 dark:border-zinc-700/60 flex items-center justify-center">
                  {item.icon}
                </div>
                <Tag color={idx === 0 ? "green" : "blue"} className="font-semibold text-xs uppercase">
                  {item.status}
                </Tag>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Verbatim Paragraph 1, 2 & 3 Combined Content Block */}
        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
            <div className="flex items-start gap-3">
              <CheckCircleOutlined className="text-emerald-500 text-lg mt-1 shrink-0" />
              <div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
                  Separate CGT Assets &amp; Original Acquisition Date
                </h4>
                {/* Verbatim text from official document */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  Subdividing one parcel into separate lots does not, by itself, trigger a CGT event while ownership remains unchanged. Each resulting lot becomes a separate CGT asset. It generally retains the acquisition date of the original land, and a later disposal can produce a capital gain or loss.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
            <div className="flex items-start gap-3">
              <CheckCircleOutlined className="text-emerald-500 text-lg mt-1 shrink-0" />
              <div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
                  Subdivision as the First Step in Tax Analysis
                </h4>
                {/* Verbatim text from official document */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  Subdivision is only the first step in the analysis. The sale proceeds may instead be ordinary income if the land was acquired or the project was undertaken as part of a property-development business or a commercial profit-making transaction. GST is considered under separate rules.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-emerald-50/70 dark:bg-emerald-950/20 rounded-2xl p-7 border border-emerald-200 dark:border-emerald-800/40">
            <div className="flex items-start gap-3">
              <InfoCircleOutlined className="text-emerald-600 dark:text-emerald-400 text-lg mt-1 shrink-0" />
              <div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
                  Scale Alone Does Not Decide Tax Outcomes
                </h4>
                {/* Verbatim text from official document */}
                <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
                  For this reason, the tax on subdividing land in Australia cannot be determined from the number of lots alone. A homeowner selling one unused part of a long-held property may have a different outcome from a person who acquires land, undertakes extensive works and markets multiple lots for profit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
