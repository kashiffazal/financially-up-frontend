"use client";

import React from "react";
import Link from "next/link";
import {
  CompassOutlined,
  GlobalOutlined,
  HomeOutlined,
  CalculatorOutlined,
  LineChartOutlined,
  TeamOutlined,
  ArrowRightOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";

/**
 * RelatedInternationalTaxRibbon Component
 * ========================================
 * Cross-links across all Pillar 14 International Tax sub-services.
 */
export default function RelatedInternationalTaxRibbon() {
  const siblingSubServices = [
    {
      title: "Tax Residency Advice",
      description: "Assessments under the 4 statutory residency tests and DTA tie-breaker provisions.",
      href: "/services/international-tax/tax-residency",
      icon: <CompassOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      tag: "Pillar 14.2",
    },
    {
      title: "New Migrants Tax",
      description: "Tax rules for new arrivals, temporary visa holders, and first-year lodgements.",
      href: "/services/international-tax/new-migrants-tax",
      icon: <GlobalOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      tag: "Pillar 14.3",
    },
    {
      title: "Foreign Rental Property",
      description: "Australian tax rules for offshore real estate, allowable deductions, and records.",
      href: "/services/international-tax/foreign-rental-income",
      icon: <HomeOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      tag: "Pillar 14.4",
    },
    {
      title: "Foreign Tax Offsets (FITO)",
      description: "Claiming foreign income tax offsets to relieve double taxation under Section 770-10.",
      href: "/services/international-tax/foreign-tax-offset",
      icon: <CalculatorOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      tag: "Pillar 14.5",
    },
    {
      title: "International Capital Gains",
      description: "CGT on offshore properties, shares, market value resets, and CGT Event I1.",
      href: "/services/international-tax/capital-gains-international",
      icon: <LineChartOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      tag: "Pillar 14.6",
    },
    {
      title: "Australians Overseas",
      description: "Expat tax returns, managing Australian rental property, and non-resident CGT withholding.",
      href: "/services/international-tax/australians-overseas",
      icon: <TeamOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      tag: "Pillar 14.7",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-slate-50 dark:bg-zinc-900/60 border-t border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-slate-200/70 text-slate-800 dark:bg-zinc-800 dark:text-zinc-300 mb-3">
              <AppstoreOutlined /> International Tax Portfolio
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              Explore Related International Tax Services
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-zinc-400 font-normal">
              Specialist advice across all cross-border taxation, expat reporting, and foreign asset areas.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Link
              href="/services/international-tax"
              className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300"
            >
              View Full International Tax Hub <ArrowRightOutlined />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siblingSubServices.map((sub, idx) => (
            <Link
              key={idx}
              href={sub.href}
              className="group p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-500/50 dark:hover:border-teal-500/50 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-zinc-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {sub.icon}
                  </div>
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400">
                    {sub.tag}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors mb-2">
                  {sub.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                  {sub.description}
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-zinc-800/80 flex items-center justify-between text-xs font-semibold text-teal-600 dark:text-teal-400 group-hover:translate-x-0.5 transition-transform">
                <span>Learn more</span>
                <ArrowRightOutlined />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
