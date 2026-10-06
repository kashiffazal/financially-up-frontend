"use client";

import React from "react";
import { Tag } from "antd";
import {
  HomeOutlined,
  ApartmentOutlined,
  BankOutlined,
  CalculatorOutlined,
  ClockCircleOutlined,
  ShopOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import EntityRoutingBanner from "@/components/website/EntityRoutingBanner";

/**
 * WhoNeedsPropertyTaxSupport Component
 * ====================================
 * Section: "Who is property tax accounting for?"
 * Incorporates the exact heading and verbatim paragraphs from Page 1 of
 * '10th Pillar Property Tax.docx'.
 *
 * Background: Lite Brand Gradient with Dark Mode compatibility.
 */
export default function WhoNeedsPropertyTaxSupport() {
  /**
   * 6 Profiles aligning with the document's client personas
   */
  const propertyProfiles = [
    {
      id: "first-time-investors",
      icon: <HomeOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      tag: "First-Time Investors",
      title: "First-Time Property Investors",
      description:
        "Landlords needing help establishing reliable records, classifying initial repairs vs improvements, and understanding annual rental tax return reporting.",
      href: "/services/property-tax/investment-property-tax",
      actionText: "Rental property tax",
    },
    {
      id: "portfolio-owners",
      icon: <ApartmentOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      tag: "Portfolios",
      title: "Multi-Property Portfolio Owners",
      description:
        "Investors holding multiple investment properties with mixed private and income-producing use, requiring coordinated portfolio accounts.",
      href: "/services/property-tax/ownership-structures",
      actionText: "Portfolio structuring",
    },
    {
      id: "property-developers",
      icon: <BankOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      tag: "Developers",
      title: "Property Developers & Builders",
      description:
        "Commercial builders and active developers requiring coordinated entity accounts, GST and BAS work, and margin scheme calculations.",
      href: "/services/property-tax/property-development-tax",
      actionText: "Development tax",
    },
    {
      id: "property-entities",
      icon: <CalculatorOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      tag: "Entities",
      title: "Property-Owning Entities",
      description:
        "Companies, family discretionary trusts, and unit trusts holding property assets, needing end-of-year financial statements and distribution minutes.",
      href: "/services/property-tax/ownership-structures",
      actionText: "Entity accounting",
    },
    {
      id: "renovating-refinancing",
      icon: <ClockCircleOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      tag: "Refinance & Renos",
      title: "Refinancing & Renovating Owners",
      description:
        "Owners navigating substantial renovations, loan redraws, or converting a former home into a rental property under the 6-year absence rule.",
      href: "/services/property-tax/6-year-rule",
      actionText: "6-year rule advisory",
    },
    {
      id: "transaction-planning",
      icon: <ShopOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      tag: "Disposals & Planning",
      title: "Sellers & Pre-Transaction Planners",
      description:
        "Owners planning a purchase, sale, or subdivision needing transaction review or separately scoped planning before a commercial decision is finalized.",
      href: "/services/property-tax/property-capital-gains-tax",
      actionText: "Property CGT",
    },
  ];

  return (
    <section
      id="who-is-property-tax-accounting-for"
      className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 border-t border-b border-slate-200/80 dark:border-zinc-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Verbatim H2 and Paragraphs from Document */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <Tag color="green" className="brand-section-tag">
            Client Profiles
          </Tag>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.2]">
            Who is property tax accounting for?
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            This service is for property investors, landlords, developers and property-owning entities whose tax position extends beyond entering rent and expenses into a return. It can be especially relevant where several properties, mixed private and income-producing use, entity ownership, refinancing, substantial renovations, development activity or a sale create connected accounting and tax questions.
          </p>

          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            A first-time investor may need help establishing reliable records and understanding annual reporting. An experienced investor or developer may instead need coordinated entity accounts, GST and BAS work, transaction review or separately scoped planning before a commercial decision is finalized.
          </p>
        </div>

        {/* 6 Profile Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {propertyProfiles.map((profile, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 flex flex-col justify-between hover:border-teal-500/40 dark:hover:border-teal-500/40 hover:shadow-md hover:-translate-y-1 transition-all duration-200 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-zinc-800 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                    {profile.icon}
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 font-mono">
                    {profile.tag}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {profile.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                  {profile.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-zinc-800/80">
                <Link
                  href={profile.href}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
                >
                  <span>{profile.actionText}</span>
                  <ArrowRightOutlined className="text-[11px]" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Entity Routing Banner */}
        <EntityRoutingBanner
          tag="Property Tax Pathways"
          description="Whether you need annual rental property schedules for an investment portfolio or strategic tax advice for a new property development, choose your pathway below."
          buttons={[
            {
              label: "Investment Property Tax",
              href: "/services/property-tax/investment-property-tax",
              type: "primary",
            },
            {
              label: "Property Development Tax",
              href: "/services/property-tax/property-development-tax",
              type: "secondary",
            },
          ]}
        />
      </div>
    </section>
  );
}
