"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  HomeOutlined,
  BankOutlined,
  LineChartOutlined,
  CalculatorOutlined,
  SafetyOutlined,
  SolutionOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * RelatedPropertySubdivisionRibbon Component
 * ==========================================
 * Section: Related Property Tax Services Ribbon.
 * Enables seamless cross-navigation across Pillar 10 service subpages.
 */
export default function RelatedPropertySubdivisionRibbon() {
  const relatedServices = [
    {
      title: "Investment Property Tax",
      tag: "Pillar 10.1",
      icon: <HomeOutlined className="text-emerald-600 dark:text-emerald-400" />,
      href: "/services/property-tax/investment-property-tax",
      description: "Annual rental returns, deduction reviews, and capital works write-offs.",
    },
    {
      title: "Property Development Tax",
      tag: "Pillar 10.2",
      icon: <BankOutlined className="text-teal-600 dark:text-teal-400" />,
      href: "/services/property-tax/property-development-tax",
      description: "Project tax, GST margin scheme, entity accounting and commercial venture reporting.",
    },
    {
      title: "Property Capital Gains Tax",
      tag: "Pillar 10.4",
      icon: <LineChartOutlined className="text-blue-600 dark:text-blue-400" />,
      href: "/services/property-tax/property-capital-gains-tax",
      description: "Calculating CGT on property disposals, 5-element cost base, and clearance certificates.",
    },
    {
      title: "GST on Property & Margin Scheme",
      tag: "Pillar 10.5",
      icon: <CalculatorOutlined className="text-indigo-600 dark:text-indigo-400" />,
      href: "/services/property-tax/gst-on-property",
      description: "Taxable supplies, margin scheme eligibility, and purchaser settlement withholding.",
    },
    {
      title: "Main Residence Exemption",
      tag: "Pillar 10.7",
      icon: <SafetyOutlined className="text-purple-600 dark:text-purple-400" />,
      href: "/services/property-tax/main-residence",
      description: "Full and partial CGT exemptions, adjacent land rules, and 2-hectare domestic curtilage.",
    },
    {
      title: "Property Ownership Structures",
      tag: "Pillar 10.9",
      icon: <SolutionOutlined className="text-amber-600 dark:text-amber-400" />,
      href: "/services/property-tax/ownership-structures",
      description: "Structuring acquisitions across individual names, trusts, companies, and partnerships.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50 dark:bg-zinc-900/50 border-t border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
              Property Tax Network
            </Tag>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Related Property Tax Services
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-zinc-400 font-normal">
              Explore specialized accounting and tax services across our Property Tax Pillar.
            </p>
          </div>
          <Link
            href="/services/property-tax"
            className="mt-4 md:mt-0 text-xs sm:text-sm font-semibold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1.5"
          >
            View all property tax services <ArrowRightOutlined />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedServices.map((service, idx) => (
            <Link
              key={idx}
              href={service.href}
              className="group bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-slate-200/80 dark:border-zinc-800 hover:border-emerald-500/60 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-zinc-800 border border-slate-200/60 dark:border-zinc-700/60 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {service.icon}
                  </div>
                  <Tag color="default" className="text-[10px] font-semibold text-slate-500 dark:text-zinc-400">
                    {service.tag}
                  </Tag>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-1.5 text-xs text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-zinc-800/80 flex items-center justify-between text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                <span>Learn more</span>
                <ArrowRightOutlined className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
