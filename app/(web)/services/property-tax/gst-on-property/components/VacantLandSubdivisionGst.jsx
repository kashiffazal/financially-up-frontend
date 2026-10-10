"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  ApartmentOutlined,
  CompassOutlined,
  DollarOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * VacantLandSubdivisionGst Component
 * ==================================
 * Section: GST on vacant land and subdivision projects.
 * Features 100% complete, verbatim content from Page 6 of 10th Pillar Property Tax.docx.
 */
export default function VacantLandSubdivisionGst() {
  const landCategories = [
    {
      title: "Potential Residential Land",
      description: "Vacant land capable of residential use under applicable planning laws. Subject to purchaser withholding when sold to individual buyers.",
    },
    {
      title: "Farmland & Rural Holdings",
      description: "Eligible farmland used for farming business for at least 5 years preceding sale may qualify as a GST-free supply if buyer continues farming.",
    },
    {
      title: "Commercial & Industrial Land",
      description: "Generally treated as a taxable supply unless sold as an eligible going concern between registered entities.",
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
            Vacant Land &amp; Subdivision
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            GST on Vacant Land and Subdivision Projects
          </h2>
          {/* Verbatim Paragraph 1 */}
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Vacant land is not automatically subject to GST. The seller must first satisfy the taxable-supply requirements, including the enterprise and registration tests. Potential residential land, farmland and commercial land can also have specific rules or exceptions.
          </p>
        </div>

        {/* 3 Categories Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {landCategories.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-lg transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center mb-4">
                <CompassOutlined className="text-emerald-600 dark:text-emerald-400 text-lg" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Verbatim Paragraph 2 Banner (Subdivision Tax Cross-Link) */}
        <div className="bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/40 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">
              Subdividing and Selling Land?
            </h4>
            {/* Verbatim text from official document */}
            <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 font-normal">
              If you plan to divide and sell land, income tax needs a separate review. Our Property Subdivision Tax page explains why CGT or ordinary income may arise alongside GST.
            </p>
          </div>
          <Link href="/services/property-tax/property-subdivision-tax">
            <Button
              type="primary"
              size="large"
              className="brand-btn-primary h-11 px-6 font-semibold shrink-0"
            >
              View Property Subdivision Tax <ArrowRightOutlined />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
