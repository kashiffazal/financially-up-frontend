"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  HomeOutlined,
  StopOutlined,
  AlertOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * BackyardBlockExemptionRules Component
 * =====================================
 * Section: What happens when land beside your home is sold?
 * Features 100% complete, verbatim content from Page 4 of 10th Pillar Property Tax.docx.
 */
export default function BackyardBlockExemptionRules() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Main Residence Interaction
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Happens When Land Beside Your Home Is Sold?
          </h2>
        </div>

        {/* 2 Context Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mb-12">
          {/* Card 1: Verbatim Paragraph 1 */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-4">
              <StopOutlined />
              <span>No Automatic Main Residence Exemption</span>
            </div>
            {/* Verbatim text from official document */}
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
              Living in a home does not automatically exempt a vacant lot sold separately. The main-residence exemption generally requires the land to be sold as part of the same CGT event as the dwelling and the relevant conditions to be met. A separately sold backyard block will ordinarily require its own tax calculation.
            </p>
          </div>

          {/* Card 2: Verbatim Paragraph 2 */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 mb-4">
                <AlertOutlined />
                <span>Pre-Sale Advisory Requirement</span>
              </div>
              {/* Verbatim text from official document */}
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
                If you intend to retain the existing home and sell the new lot, obtain subdivision tax advice before assuming the sale is exempt. Acquisition history, private and income-producing use, the allocation of cost base, development activity and the sale arrangement may all affect the outcome.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800">
              <Link href="/services/property-tax/main-residence">
                <Button
                  type="default"
                  className="brand-btn-secondary w-full sm:w-auto font-medium"
                >
                  Explore Main Residence CGT Rules <ArrowRightOutlined />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Crucial Advisory Warning Callout */}
        <div className="bg-amber-50/80 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/40 rounded-2xl p-6 sm:p-8 flex items-start gap-4">
          <AlertOutlined className="text-2xl text-amber-600 dark:text-amber-400 mt-1 shrink-0" />
          <div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">
              Retaining Dwelling vs Selling Subdivided Backyard
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Under section 118-120 of the ITAA 1997, adjacent land used primarily for private domestic purposes qualifies for the main residence exemption only if disposed of to the same person and at the same time as the dwelling. Selling the subdivided lot on its own invalidates the exemption for that lot.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
