"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  CalendarOutlined,
  HomeOutlined,
  RiseOutlined,
  ApartmentOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * WhenDoesPropertyCgtApply Component
 * ==================================
 * Section: When does property capital gains tax apply?
 * Features 100% complete, verbatim content from Page 5 of 10th Pillar Property Tax.docx.
 */
export default function WhenDoesPropertyCgtApply() {
  const propertyCategories = [
    {
      icon: <CalendarOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Contract Date Governs the Timing",
      description: "For standard property sales, the CGT event (A1) occurs on the date contracts are exchanged, not the settlement date. The gain is reported in the tax year of contract exchange.",
    },
    {
      icon: <HomeOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Main Residence vs Investments",
      description: "Qualifying primary homes may be fully exempt, while rental properties, holiday homes, vacant land, and commercial premises generally require formal CGT calculations.",
    },
    {
      icon: <ApartmentOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Special CGT Circumstances",
      description: "Inherited deceased estates, marriage and relationship breakdowns, pre-CGT assets (acquired prior to 20 Sept 1985), and changes in Australian tax residency require tailored rules.",
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
            CGT Event Triggers
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            When Does Property Capital Gains Tax Apply?
          </h2>
        </div>

        {/* 3 Categories Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {propertyCategories.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 dark:bg-zinc-900/70 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-800 border border-slate-200/70 dark:border-zinc-700/60 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Verbatim Paragraph 1, 2 & 3 Blocks */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {/* Paragraph 1 */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
            <div className="flex items-start gap-3">
              <CheckCircleOutlined className="text-emerald-500 text-lg mt-1 shrink-0" />
              <div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
                  Contract Date vs Settlement Date Rule
                </h4>
                {/* Verbatim text from official document */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  A disposal of property acquired on or after 20 September 1985 generally triggers a CGT event. For a standard sale contract, the event usually occurs when the parties enter into the contract, not when settlement occurs. The capital gain or loss is therefore reported in the income year of the contract date, even if settlement is later.
                </p>
              </div>
            </div>
          </div>

          {/* Paragraph 2 */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
            <div className="flex items-start gap-3">
              <CheckCircleOutlined className="text-emerald-500 text-lg mt-1 shrink-0" />
              <div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
                  Property Asset Scope &amp; Special CGT Rules
                </h4>
                {/* Verbatim text from official document */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  A qualifying main residence may be fully exempt. An investment property, holiday home, vacant land or property used to produce income will generally require a CGT calculation. Special rules can apply to inherited property, relationship breakdowns, pre-CGT interests and changes in tax residency.
                </p>
              </div>
            </div>
          </div>

          {/* Paragraph 3 */}
          <div className="bg-emerald-50/70 dark:bg-emerald-950/20 rounded-2xl p-7 border border-emerald-200 dark:border-emerald-800/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                Development &amp; Subdivision Cross-Over
              </h4>
              {/* Verbatim text from official document */}
              <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
                A sale may instead produce ordinary income where the property was acquired or developed as part of a business or commercial profit-making transaction. Our Property Subdivision Tax page explains the distinct issues arising when land is divided or developed for sale.
              </p>
            </div>
            <Link href="/services/property-tax/property-subdivision-tax">
              <Button
                type="primary"
                className="brand-btn-primary h-10 px-5 font-semibold shrink-0"
              >
                View Subdivision Tax <ArrowRightOutlined />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
