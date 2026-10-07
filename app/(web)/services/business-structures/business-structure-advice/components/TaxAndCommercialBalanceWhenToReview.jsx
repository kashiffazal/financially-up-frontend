"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  SyncOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  DollarOutlined,
  WarningOutlined,
} from "@ant-design/icons";

/**
 * TaxAndCommercialBalanceWhenToReview Component
 * Covers 'Tax is important, but it is not the only factor' and 'When should you review your structure?'
 * from Page 5 of 6th Pillar Business Structures.docx.
 */
export default function TaxAndCommercialBalanceWhenToReview() {
  const reviewTriggers = [
    "Before starting a new business or buying an existing business.",
    "Before bringing in a business partner, investor or new owner.",
    "When a sole trader business is growing in size or risk.",
    "Before moving valuable assets between entities.",
    "When profits, staffing or financing needs change materially.",
    "Before a sale, succession or ownership transition.",
    "When the administration burden no longer matches the business needs.",
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950/70 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Part 1: Tax is important, but not the only factor */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-4 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 flex items-center justify-center">
                <DollarOutlined className="text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                Tax is important, but it is not the only factor
              </h3>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Business structure tax advice can help explain how income, deductions, losses, distributions and owner payments may be treated under different structures. However, the lowest apparent tax outcome is not automatically the right commercial choice. Tax consequences need to be considered alongside control, cash flow, financing, legal risk, compliance costs and future plans.
              </p>
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Where you are considering changing an existing structure rather than choosing one for a new business, the transaction may also have CGT, GST, duty or other consequences. Our{" "}
                <Link
                  href="/services/business-structures/business-restructure"
                  className="font-semibold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
                >
                  business restructuring service
                  <ArrowRightOutlined className="text-xs" />
                </Link>{" "}
                focuses on the tax and accounting considerations of implementing an actual restructure.
              </p>
            </div>

          </div>
        </div>

        {/* Part 2: When should you review your structure? */}
        <div className="max-w-3xl mb-12">
          <Tag color="cyan" className="brand-section-tag font-bold tracking-wider uppercase text-xs mb-3">
            <SyncOutlined className="mr-1.5" />
            Review Milestones
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            When should you review your structure?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A structure that suited a startup may become inefficient as turnover scales, staff expand, or personal liability exposures multiply.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewTriggers.map((trigger, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex items-start gap-4 hover:border-emerald-400/60 transition-all"
            >
              <div className="w-8 h-8 rounded-lg bg-teal-50 dark:bg-teal-950/50 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircleOutlined className="text-base" />
              </div>
              <p className="text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
                {trigger}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
