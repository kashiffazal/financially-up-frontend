"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  CalculatorOutlined,
  FileDoneOutlined,
  HistoryOutlined,
  StopOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * MarginSchemeDevelopment Component
 * =================================
 * Section: Margin scheme considerations.
 * Features 100% complete, verbatim content from Page 3 of 10th Pillar Property Tax.docx.
 */
export default function MarginSchemeDevelopment() {
  const marginChecks = [
    {
      icon: <HistoryOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Acquisition History Verification",
      description: "If the site was acquired through a fully taxable supply without the margin scheme, the scheme cannot subsequently be applied upon resale.",
    },
    {
      icon: <FileDoneOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Written Agreement Before Settlement",
      description: "The vendor and purchaser must enter into an explicit written agreement (usually via contract clause) that the margin scheme applies.",
    },
    {
      icon: <CalculatorOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Calculation of Margin",
      description: "GST is calculated as 1/11th of the margin (sale price minus acquisition consideration or approved valuation), not the full sale price.",
    },
    {
      icon: <StopOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "No Purchaser Input Tax Credit",
      description: "Purchasers of property under the margin scheme cannot claim an input tax credit for any GST included in the purchase price.",
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
            Specialist GST Calculation
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Margin Scheme Considerations
          </h2>
        </div>

        {/* 2 Verbatim Text Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mb-12">
          {/* Paragraph 1 */}
          <div className="bg-slate-50/80 dark:bg-zinc-900/80 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-4">
              <CheckCircleOutlined />
              <span>Eligibility &amp; Written Agreement</span>
            </div>
            {/* Verbatim text from official document */}
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
              The GST margin scheme may be available for an eligible taxable sale of real property. It is not automatic. Eligibility depends on how the property was acquired and other conditions, and the seller and purchaser generally need to agree in writing that the margin scheme will apply before settlement.
            </p>
          </div>

          {/* Paragraph 2 */}
          <div className="bg-slate-50/80 dark:bg-zinc-900/80 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 mb-4">
              <HistoryOutlined />
              <span>Early Acquisition Document Review</span>
            </div>
            {/* Verbatim text from official document */}
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
              If the margin scheme is being considered, it should be reviewed early rather than after settlement. The acquisition documents can be critical to determining whether the scheme is available.
            </p>
          </div>
        </div>

        {/* 4 Margin Scheme Condition Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {marginChecks.map((item, idx) => (
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

        {/* Detailed GST Subpage Link */}
        <div className="text-center">
          <Link href="/services/property-tax/gst-on-property">
            <Button
              type="default"
              size="large"
              className="brand-btn-secondary h-11 px-6 font-semibold"
            >
              Explore In-Depth GST on Property &amp; Margin Scheme Guidance <ArrowRightOutlined />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
