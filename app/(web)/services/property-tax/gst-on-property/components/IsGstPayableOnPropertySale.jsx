"use client";

import React from "react";
import { Tag } from "antd";
import {
  ShopOutlined,
  DollarOutlined,
  GlobalOutlined,
  FileProtectOutlined,
  CheckCircleOutlined,
  AlertOutlined,
} from "@ant-design/icons";

/**
 * IsGstPayableOnPropertySale Component
 * ====================================
 * Section: Is GST payable when property is sold?
 * Features 100% complete, verbatim content from Page 6 of 10th Pillar Property Tax.docx.
 */
export default function IsGstPayableOnPropertySale() {
  const taxableSupplyElements = [
    {
      icon: <DollarOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Made for Consideration",
      description: "The transfer of real estate occurs for monetary payment, asset exchange, or debt extinguishment.",
    },
    {
      icon: <ShopOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Course or Furtherance of Enterprise",
      description: "Conducted as part of an active business, commercial adventure, or one-off profit-making venture.",
    },
    {
      icon: <GlobalOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Connected with Australia",
      description: "The land or real property asset is geographically situated within Australia.",
    },
    {
      icon: <FileProtectOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Registered or Required to Register",
      description: "The seller holds active GST registration or exceeds statutory turnover thresholds ($75k / $150k non-profit).",
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
            Taxable Supply Assessment
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Is GST Payable When Property Is Sold?
          </h2>
          {/* Verbatim Paragraph 1 */}
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A property sale is generally taxable only when made for consideration in the course or furtherance of an enterprise, connected with Australia, and the seller is registered or required to be registered for GST. An exemption or input-taxed treatment may alter the result.
          </p>
        </div>

        {/* 4 Taxable Supply Elements */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {taxableSupplyElements.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 dark:bg-zinc-900/70 rounded-2xl p-6 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-lg transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-white dark:bg-zinc-800 border border-slate-200/70 dark:border-zinc-700/60 flex items-center justify-center mb-4">
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
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-4">
              <CheckCircleOutlined />
              <span>Private Sale vs One-Off Enterprise</span>
            </div>
            {/* Verbatim text from official document */}
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
              A private sale of a family home will ordinarily be different from a sale made through a property-development enterprise. However, a single project can still amount to an enterprise. The owner's purpose, activities, organization, scale and commercial character must be considered rather than relying only on the number of transactions.
            </p>
          </div>

          {/* Paragraph 3 */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-4">
              <AlertOutlined />
              <span>Projected GST Turnover Analysis</span>
            </div>
            {/* Verbatim text from official document */}
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
              GST registration and turnover require careful analysis for property projects. The sale price can be significant, but not every property disposal is treated identically for projected GST turnover. Obtain advice before assuming that being unregistered means GST cannot apply.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
