"use client";

import React from "react";
import { Tag } from "antd";
import {
  ShopOutlined,
  SafetyCertificateOutlined,
  FileProtectOutlined,
  DollarOutlined,
  CheckCircleOutlined,
  AlertOutlined,
} from "@ant-design/icons";

/**
 * GstAndWithholdingDevelopment Component
 * ======================================
 * Section: GST can be central to property development.
 * Features 100% complete, verbatim content from Page 3 of 10th Pillar Property Tax.docx.
 */
export default function GstAndWithholdingDevelopment() {
  const gstFocusPoints = [
    {
      icon: <ShopOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Enterprise Test & Registration",
      description: "Development projects commonly satisfy the GST definition of carrying on an enterprise, requiring mandatory GST registration when turnover reaches $75k.",
    },
    {
      icon: <FileProtectOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Supplier Notification Mandate",
      description: "Vendors of residential premises must provide formal written notification to purchasers before settlement specifying whether withholding is required.",
    },
    {
      icon: <DollarOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Purchaser Settlement Withholding",
      description: "Purchasers withhold 1/11th of the contract price (or 7% under the margin scheme) and remit directly to the ATO at settlement via Form 1 & Form 2.",
    },
    {
      icon: <SafetyCertificateOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "BAS Credit Reconciliation",
      description: "The developer accounts for the full gross supply on its Business Activity Statement and receives credit for the amount remitted by the purchaser.",
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
            GST &amp; Settlement Compliance
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            GST Can Be Central to Property Development
          </h2>
        </div>

        {/* 2 Verbatim Text Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mb-12">
          {/* Paragraph 1 */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-4">
              <CheckCircleOutlined />
              <span>Enterprise &amp; Purchaser Withholding</span>
            </div>
            {/* Verbatim text from official document */}
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
              Property development activities may amount to an enterprise for GST purposes. Where an entity is registered or required to be registered and makes a taxable supply, GST can apply to a property sale. For certain sales of new residential premises or potential residential land, the purchaser must withhold the required amount from the contract price and pay it to the ATO at settlement. The developer still reports the sale and GST through its own activity statement, subject to the applicable rules.
            </p>
          </div>

          {/* Paragraph 2 */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 mb-4">
              <AlertOutlined />
              <span>Pre-Contract Review &amp; Professional Roles</span>
            </div>
            {/* Verbatim text from official document */}
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
              GST treatment should be reviewed before contracts are signed because the contract wording, price, supplier notification, input tax credits and settlement process may all be affected. Legal and conveyancing professionals deal with the contract and settlement documentation within their scope, while GST advice and reporting should be handled by an appropriately registered tax or BAS agent where required.
            </p>
          </div>
        </div>

        {/* 4 GST Pillars Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gstFocusPoints.map((item, idx) => (
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
