"use client";

import React from "react";
import { Tag } from "antd";
import {
  ShopOutlined,
  CompassOutlined,
  BranchesOutlined,
  CheckCircleOutlined,
  AlertOutlined,
} from "@ant-design/icons";

/**
 * CommercialPropertyAndFarmlandGst Component
 * ==========================================
 * Section: Can commercial property or farmland be GST-free?
 * Features 100% complete, verbatim content from Page 6 of 10th Pillar Property Tax.docx.
 */
export default function CommercialPropertyAndFarmlandGst() {
  const gstFreeCategories = [
    {
      icon: <ShopOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Going Concern Exemption",
      description: "Sale of a commercial property with active leases in place can be GST-free if both buyer and seller are registered for GST and agree in writing that the supply is of a going concern.",
      tag: "Leased Commercial",
    },
    {
      icon: <CompassOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Eligible Farmland Concession",
      description: "Land that has been used for a farming business for at least 5 years preceding the supply can be GST-free if the purchaser intends that a farming business be carried on on the land.",
      tag: "Rural & Farming",
    },
    {
      icon: <BranchesOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Mixed-Use Apportionment",
      description: "Properties featuring ground-floor retail/commercial premises and upper-floor residential apartments require contract price apportionment for GST calculation.",
      tag: "Retail + Residential",
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
            Specialist Concessions
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Can Commercial Property or Farmland Be GST-Free?
          </h2>
        </div>

        {/* 3 Categories Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {gstFreeCategories.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 dark:bg-zinc-900/70 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-800 border border-slate-200/70 dark:border-zinc-700/60 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <Tag color="cyan" className="font-semibold text-[11px] uppercase">
                    {item.tag}
                  </Tag>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 2 Verbatim Text Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          {/* Paragraph 1 */}
          <div className="bg-slate-50/80 dark:bg-zinc-900/80 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-4">
              <CheckCircleOutlined />
              <span>Strict Statutory Conditions</span>
            </div>
            {/* Verbatim text from official document */}
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
              Commercial property sales can be taxable when the general requirements are met. Some supplies may qualify as GST-free, including an eligible going concern or eligible farmland supplied for continued farming. These treatments have specific conditions and documentation requirements and should not be assumed from the property's label.
            </p>
          </div>

          {/* Paragraph 2 */}
          <div className="bg-slate-50/80 dark:bg-zinc-900/80 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 mb-4">
              <AlertOutlined />
              <span>Mixed-Use Apportionment Review</span>
            </div>
            {/* Verbatim text from official document */}
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
              Mixed-use property may need apportionment because residential and commercial components can have different GST treatment. Leases, floor plans, valuation evidence and the contractual allocation should be reviewed together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
