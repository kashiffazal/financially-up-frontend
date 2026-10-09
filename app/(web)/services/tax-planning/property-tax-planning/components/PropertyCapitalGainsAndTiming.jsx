"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  AuditOutlined,
  HomeOutlined,
  CalendarOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * PropertyCapitalGainsAndTiming Component
 * =======================================
 * Section 5: Capital gains and timing.
 * Verbatim text from Page 5 of '3rd Pillar Tax Planning & Advisory Final Content Pages 1-12.docx'.
 *
 * Explains CGT event A1 contract date timing, 5-element cost base exclusions
 * (previously claimed deductions), historical property usage, and cross-links to specialist services.
 */
export default function PropertyCapitalGainsAndTiming() {
  const crossServices = [
    {
      title: "Investment Property Tax",
      desc: "For detailed annual rental-property tax reporting, schedule preparation, and depreciation claims.",
      href: "/services/individual-tax/investment-property-tax-accountant",
      btnText: "Explore Rental Property Tax",
      icon: (
        <HomeOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />
      ),
    },
    {
      title: "Capital Gains Tax",
      desc: "For the detailed tax calculation on a property sale, cost-base modeling, and concession reviews.",
      href: "/services/individual-tax/capital-gains-tax",
      btnText: "Explore CGT Service",
      icon: (
        <AuditOutlined className="text-xl text-teal-600 dark:text-teal-400" />
      ),
    },
    {
      title: "Personal Tax Planning",
      desc: "Broader individual planning across multi-source salary, bonuses, shares, and personal super.",
      href: "/services/tax-planning/personal-tax-planning",
      btnText: "Explore Personal Planning",
      icon: (
        <CalendarOutlined className="text-xl text-blue-600 dark:text-blue-400" />
      ),
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
            Capital Gains Timing
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Capital Gains and Timing
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Selling an investment property may trigger CGT. For a disposal under
            a contract, CGT event A1 generally occurs when the contract is
            entered into rather than at settlement; other CGT events can have
            different timing. Eligible acquisition, ownership, improvement and
            disposal costs may form part of the cost base, but the treatment
            depends on the cost and circumstances, and amounts already claimed
            as deductions generally cannot also be included. Prior use of the
            property can also affect the calculation.
          </p>
          <p className="mt-3 text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
            Because CGT can depend on the property’s history, keeping purchase
            documents, improvement costs, sale records and records of periods of
            private or income-producing use is important. Detailed CGT
            calculations are covered more fully in Financially Up’s Capital
            Gains Tax service.
          </p>
        </div>

        {/* 3 Cross-Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10">
          {crossServices.map((card, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between hover:border-emerald-400/60 transition-all duration-300 group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                  {card.icon}
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2.5">
                  {card.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 font-normal leading-relaxed mb-6">
                  {card.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-zinc-800">
                <Link href={card.href}>
                  <Button
                    type="primary"
                    size="large"
                    icon={<ArrowRightOutlined />}
                    iconPlacement="end"
                    className="w-full rounded-xl font-bold bg-brand-primary dark:bg-emerald-500 text-white hover:bg-brand-primary/90 h-10 text-xs sm:text-sm"
                  >
                    {card.btnText}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
