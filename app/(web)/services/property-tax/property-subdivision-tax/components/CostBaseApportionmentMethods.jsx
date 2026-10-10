"use client";

import React from "react";
import { Tag } from "antd";
import {
  PieChartOutlined,
  CompassOutlined,
  ToolOutlined,
  FileDoneOutlined,
  CheckCircleOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

/**
 * CostBaseApportionmentMethods Component
 * ======================================
 * Section: How is the cost of the original land divided?
 * Features 100% complete, verbatim content from Page 4 of 10th Pillar Property Tax.docx.
 */
export default function CostBaseApportionmentMethods() {
  const allocationMethods = [
    {
      badge: "Method 01",
      title: "Relative Market Value Basis",
      description: "Best practice where subdivided lots differ materially in size, frontage, topography, or zoning. Uses registered valuations at the date of subdivision.",
      icon: <PieChartOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
    },
    {
      badge: "Method 02",
      title: "Land Area Basis",
      description: "Appropriate where the original parcel is divided into uniform, homogeneous vacant lots with identical attributes, access, and street value.",
      icon: <CompassOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
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
            Cost Base Allocation
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How Is the Cost of the Original Land Divided?
          </h2>
          {/* Verbatim Paragraph 1 */}
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            The cost base of the original parcel is divided between the subdivided lots on a reasonable basis. Depending on the facts, an area basis may be reasonable, but relative market values or another method may better reflect materially different lots. The chosen method should be supportable and applied consistently.
          </p>
        </div>

        {/* 2 Methods Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {allocationMethods.map((method, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 dark:bg-zinc-900/70 rounded-2xl p-7 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <Tag color="cyan" className="font-semibold text-xs uppercase">
                  {method.badge}
                </Tag>
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-800 border border-slate-200/70 dark:border-zinc-700/60 flex items-center justify-center">
                  {method.icon}
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                {method.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                {method.description}
              </p>
            </div>
          ))}
        </div>

        {/* Verbatim Paragraph 2 Banner */}
        <div className="bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/40 rounded-2xl p-6 sm:p-8 flex items-start gap-4">
          <ToolOutlined className="text-2xl text-emerald-600 dark:text-emerald-400 mt-1 shrink-0" />
          <div>
            <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-1">
              Classifying Subdivision &amp; Civil Works Invoices
            </h4>
            {/* Verbatim text from official document */}
            <p className="text-xs sm:text-sm md:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
              Surveying, planning, infrastructure, legal, financing and selling costs do not all receive the same tax treatment. Some may form part of a CGT cost base, some may be deductible or included in the cost of revenue assets, and others may need apportionment. A subdivision tax accountant should review the records rather than treating every invoice as an immediate deduction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
