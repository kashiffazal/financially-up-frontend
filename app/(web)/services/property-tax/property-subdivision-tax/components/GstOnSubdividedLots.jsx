"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  CalculatorOutlined,
  ShopOutlined,
  DollarOutlined,
  FileProtectOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * GstOnSubdividedLots Component
 * =============================
 * Section: Could GST apply to a subdivided lot?
 * Features 100% complete, verbatim content from Page 4 of 10th Pillar Property Tax.docx.
 */
export default function GstOnSubdividedLots() {
  const gstConditions = [
    {
      icon: <ShopOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Enterprise Criteria",
      description: "GST applies if the subdivision amounts to carrying on an enterprise (even a one-off project), rather than the mere private realization of a capital asset.",
    },
    {
      icon: <DollarOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Contract Pricing & Cash Flow",
      description: "If taxable, GST reduces net proceeds by 1/11th unless prices are agreed 'plus GST' or the margin scheme is validly applied.",
    },
    {
      icon: <FileProtectOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Potential Residential Land Withholding",
      description: "Subdivided vacant land sold to individuals for residential development requires purchaser withholding and formal vendor notification notices.",
    },
    {
      icon: <CalculatorOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Input Tax Credits on Civil Costs",
      description: "Enterprise registration allows claiming GST credits on civil contractor invoices, surveying, power/water connections, and project fees.",
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
            Goods &amp; Services Tax (GST)
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Could GST Apply to a Subdivided Lot?
          </h2>
        </div>

        {/* 2 Verbatim Text Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mb-12">
          {/* Paragraph 1 */}
          <div className="bg-slate-50/80 dark:bg-zinc-900/80 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-4">
              <CheckCircleOutlined />
              <span>Taxable Supply &amp; Enterprise Requirements</span>
            </div>
            {/* Verbatim text from official document */}
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
              GST does not apply merely because land is subdivided. It can apply when the sale is made in the course or furtherance of an enterprise, the property is connected with Australia, the seller is registered or required to be registered, and the other requirements for a taxable supply are met. A one-off project can still amount to an enterprise, while a private realization of an asset may not.
            </p>
          </div>

          {/* Paragraph 2 */}
          <div className="bg-slate-50/80 dark:bg-zinc-900/80 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 mb-4">
              <FileProtectOutlined />
              <span>Settlement Withholding &amp; Cash Flow</span>
            </div>
            {/* Verbatim text from official document */}
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
              If the sale is taxable, GST can affect the contract price, project cash flow, entitlement to GST credits and activity-statement reporting. Sales of new residential premises or potential residential land may also involve purchaser withholding at settlement and supplier notification requirements.
            </p>
          </div>
        </div>

        {/* 4 Conditions Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {gstConditions.map((item, idx) => (
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

        {/* Verbatim Cross-Link Block (Paragraph 3) */}
        <div className="bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/40 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">
              Need Comprehensive Guidance on Property GST?
            </h4>
            {/* Verbatim text from official document */}
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 font-normal">
              Our GST on Property page explains these separate GST questions in more detail.
            </p>
          </div>
          <Link href="/services/property-tax/gst-on-property">
            <Button
              type="primary"
              size="large"
              className="brand-btn-primary h-11 px-6 font-semibold shrink-0"
            >
              Explore GST on Property <ArrowRightOutlined />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
