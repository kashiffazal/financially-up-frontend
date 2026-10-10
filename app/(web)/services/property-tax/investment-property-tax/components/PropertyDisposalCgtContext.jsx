"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  LineChartOutlined,
  CompassOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * PropertyDisposalCgtContext Component
 * ====================================
 * Section: What happens when the investment property is sold?
 * Features 100% complete, verbatim content from Page 2 of 10th Pillar Property Tax.docx.
 */
export default function PropertyDisposalCgtContext() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Disposals &amp; Exit Strategies
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Happens When the Investment Property Is Sold?
          </h2>
        </div>

        {/* 2 Context Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mb-12">
          {/* Card 1: Verbatim Paragraph 1 */}
          <div className="bg-slate-50/80 dark:bg-zinc-900/80 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-4">
                <LineChartOutlined />
                <span>Annual Rental vs Full CGT Review</span>
              </div>
              {/* Verbatim copy from official document */}
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
                The annual rental-property page does not replace a full capital gains tax review. Sale costs, acquisition costs, ownership history, capital improvements and previous capital works deductions can all affect the CGT calculation.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200/70 dark:border-zinc-800">
              <Link href="/services/property-tax/property-capital-gains-tax">
                <Button
                  type="default"
                  className="brand-btn-secondary w-full sm:w-auto font-medium"
                >
                  Explore Property Capital Gains Tax <ArrowRightOutlined />
                </Button>
              </Link>
            </div>
          </div>

          {/* Card 2: Verbatim Paragraph 2 */}
          <div className="bg-slate-50/80 dark:bg-zinc-900/80 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 mb-4">
                <CompassOutlined />
                <span>Separately Scoped Proactive Planning</span>
              </div>
              {/* Verbatim copy from official document */}
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
                If a disposal is planned or has occurred, see our Capital Gains Tax service. If you are making decisions before a purchase, refinance or sale, our Property Tax Planning service covers separately scoped proactive planning.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200/70 dark:border-zinc-800">
              <Link href="/services/tax-planning/property-tax-planning">
                <Button
                  type="default"
                  className="brand-btn-secondary w-full sm:w-auto font-medium"
                >
                  Explore Property Tax Planning <ArrowRightOutlined />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
