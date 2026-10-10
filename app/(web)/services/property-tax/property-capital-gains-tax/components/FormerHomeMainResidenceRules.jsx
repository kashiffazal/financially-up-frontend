"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  HomeOutlined,
  ClockCircleOutlined,
  RiseOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * FormerHomeMainResidenceRules Component
 * ======================================
 * Section: What if the property was once your home?
 * Features 100% complete, verbatim content from Page 5 of 10th Pillar Property Tax.docx.
 */
export default function FormerHomeMainResidenceRules() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Former Home CGT Rules
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What if the Property Was Once Your Home?
          </h2>
          {/* Verbatim Paragraph 1 */}
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A dwelling can qualify for a full or partial main-residence exemption, depending on ownership, occupancy, income-producing use and other circumstances. Renting out all or part of the property, operating a business from it, delaying occupation or treating another dwelling as a main residence can change the outcome.
          </p>
        </div>

        {/* 2 Core Rules Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Card 1: 6-Year Absence Rule */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-4">
                <ClockCircleOutlined />
                <span>The 6-Year Absence Rule (s 118-145)</span>
              </div>
              {/* Verbatim text from official document */}
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal mb-6">
                The absence rule may allow a former home to continue being treated as a main residence for up to six years while it is used to produce income, or indefinitely during an absence when it is not used to produce income. Conditions and choices about another home apply; it is not an automatic six-year exemption for every rental property.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 dark:border-zinc-800">
              <Link href="/services/property-tax/6-year-rule">
                <Button
                  type="default"
                  className="brand-btn-secondary w-full sm:w-auto font-medium"
                >
                  Explore 6-Year Absence Rule Service <ArrowRightOutlined />
                </Button>
              </Link>
            </div>
          </div>

          {/* Card 2: Market Value Reset Rule */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 mb-4">
                <RiseOutlined />
                <span>Home First Used to Produce Income (s 118-192)</span>
              </div>
              {/* Verbatim text from official document */}
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal mb-6">
                If a home is first used to produce income, the market-value rule may reset the relevant acquisition value at that time, but only if its conditions are satisfied. In broad terms, the property must have qualified for a full main-residence exemption immediately before that first income-producing use. The original cost must not automatically be replaced by a valuation.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 dark:border-zinc-800">
              <Link href="/services/property-tax/main-residence">
                <Button
                  type="default"
                  className="brand-btn-secondary w-full sm:w-auto font-medium"
                >
                  Explore Main Residence Exemption <ArrowRightOutlined />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
