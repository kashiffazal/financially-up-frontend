"use client";

import React from "react";
import { Tag, Button } from "antd";
import {
  HomeOutlined,
  LineChartOutlined,
  CompassOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import Link from "next/link";

/**
 * PropertyTaxPillarsComparison Component
 * =======================================
 * Integrates three key connected sections directly from '10th Pillar Property Tax.docx':
 * 1. "Rental property tax and annual reporting" (Lines 34–36)
 * 2. "Capital gains tax on property" (Lines 37–39)
 * 3. "Property tax planning versus tax compliance" (Lines 40–42)
 *
 * Each card preserves the verbatim text from the client document,
 * complete with contextual links to the dedicated service pages.
 *
 * Background: Lite Brand Gradient with Dark Mode compatibility.
 */
export default function PropertyTaxPillarsComparison() {
  const pillars = [
    {
      id: "rental-reporting",
      icon: <HomeOutlined className="text-2xl text-teal-600 dark:text-teal-400" />,
      tag: "Annual Compliance",
      title: "Rental property tax and annual reporting",
      paragraphs: [
        "For a residential rental property, the ATO requires rental income to be declared and allows deductions only where the relevant rules are satisfied. Expenses generally need to relate to the period the property is rented or genuinely available for rent. Some costs may be immediately deductible, while others may be capital works, depreciating assets or part of the CGT cost base.",
        "If your main need is annual rental property reporting, see our Investment Property Tax service. That page focuses on income, deductions and the tax return treatment of an investment property rather than broader development or structuring issues.",
      ],
      highlights: [
        "Gross rental income & agent statement reconciliation",
        "Immediate deductions vs capital works & decline in value",
        "Genuine availability & private-use apportionments",
      ],
      linkText: "Investment Property Tax Service",
      linkHref: "/services/property-tax/investment-property-tax",
    },
    {
      id: "capital-gains",
      icon: <LineChartOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
      tag: "Disposal Calculations",
      title: "Capital gains tax on property",
      paragraphs: [
        "Selling an investment property can trigger a CGT event, but the calculation can depend on acquisition costs, sale costs, ownership changes, capital improvements, capital works adjustments and other facts. The main residence rules, inherited property rules and entity ownership can also change the analysis.",
        "Our Capital Gains Tax service covers detailed CGT calculation and reporting. This property-tax page stays focused on coordinating the wider property accounting and tax position.",
      ],
      highlights: [
        "5-element cost base reconstruction upon sale",
        "Division 43 capital works clawback adjustments",
        "Main residence & partial absence exemptions",
      ],
      linkText: "Capital Gains Tax Service",
      linkHref: "/services/property-tax/property-capital-gains-tax",
    },
    {
      id: "planning-vs-compliance",
      icon: <CompassOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
      tag: "Proactive Advisory",
      title: "Property tax planning versus tax compliance",
      paragraphs: [
        "Property tax planning is proactive work undertaken before or around a transaction, while annual compliance is about correctly recording and reporting what has already occurred. Planning may include reviewing ownership, financing, timing and expected tax consequences before a purchase, sale, refinance or development decision is locked in.",
        "Where proactive planning is needed, our Property Tax Planning service is separately scoped. Financially Up does not treat tax planning as automatically included in routine tax return preparation or bookkeeping.",
      ],
      highlights: [
        "Pre-transaction ownership structure reviews",
        "Borrowing purpose & loan tracing strategy",
        "Timing and anticipated commercial tax consequences",
      ],
      linkText: "Property Tax Planning Service",
      linkHref: "/services/tax-planning",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <Tag color="green" className="brand-section-tag">
            Core Service Disciplines
          </Tag>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.2]">
            Rental Reporting, Capital Gains & Strategic Planning
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            Understanding how annual rental compliance, capital gains tax events, and proactive tax planning interact ensures every property transaction is backed by clear facts and appropriate service scopes.
          </p>
        </div>

        {/* 3 Detailed Pillar Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm hover:border-teal-500/40 dark:hover:border-teal-500/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header with Icon and Tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-zinc-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {pillar.icon}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 font-mono">
                    {pillar.tag}
                  </span>
                </div>

                {/* Verbatim Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {pillar.title}
                </h3>

                {/* Verbatim Paragraphs from Client Document */}
                <div className="space-y-3 mb-6">
                  {pillar.paragraphs.map((para, pIdx) => (
                    <p
                      key={pIdx}
                      className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal m-0"
                    >
                      {para}
                    </p>
                  ))}
                </div>

                {/* Highlights Checklist */}
                <ul className="space-y-2 pt-4 border-t border-slate-100 dark:border-zinc-800 mb-6">
                  {pillar.highlights.map((item, hIdx) => (
                    <li
                      key={hIdx}
                      className="flex items-start gap-2 text-xs text-slate-700 dark:text-zinc-300"
                    >
                      <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 mt-0.5 shrink-0 text-xs" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Link to Sub-Page */}
              <div className="pt-4 border-t border-slate-100 dark:border-zinc-800">
                <Link
                  href={pillar.linkHref}
                  className="inline-flex items-center justify-between w-full text-xs font-semibold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
                >
                  <span>{pillar.linkText}</span>
                  <ArrowRightOutlined className="text-[11px] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Separately Scoped Service Clarification Banner */}
        <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white m-0">
                Need Help Clarifying the Appropriate Service Scope?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 m-0 mt-1">
                Whether you need routine annual rental return lodgement, a transaction-specific CGT calculation, or separately scoped tax planning before purchase, book an appointment to discuss your portfolio.
              </p>
            </div>
            <Link href="/book-an-appointment" className="shrink-0">
              <Button
                type="primary"
                size="large"
                icon={<ArrowRightOutlined />}
                iconPlacement="end"
                className="h-11 px-6 rounded-xl font-semibold shadow-md shadow-brand-primary/20"
              >
                Book an Appointment
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
