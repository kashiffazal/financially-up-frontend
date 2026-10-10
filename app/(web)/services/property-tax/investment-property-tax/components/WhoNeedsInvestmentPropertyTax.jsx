"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  UserOutlined,
  TeamOutlined,
  HomeOutlined,
  SwapOutlined,
  ToolOutlined,
  FileExclamationOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * WhoNeedsInvestmentPropertyTax Component
 * ========================================
 * Section: Who needs investment property tax support?
 * Features 100% complete, verbatim content from Page 2 of 10th Pillar Property Tax.docx.
 */
export default function WhoNeedsInvestmentPropertyTax() {
  const investorProfiles = [
    {
      icon: <UserOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "First-Time Property Landlords",
      description:
        "Investors purchasing their first rental property who need guidance setting up proper record-keeping, understanding what expenses are deductible, and navigating their first rental schedule.",
    },
    {
      icon: <TeamOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Joint & Co-Owners",
      description:
        "Spouses, family members, or business partners holding property together who must report income and deductions strictly aligned with their legal ownership percentages on title.",
    },
    {
      icon: <HomeOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Multi-Property Portfolio Owners",
      description:
        "Landlords managing multiple residential or commercial properties requiring consolidated accounting, individual property schedules, and portfolio-wide cash flow tracking.",
    },
    {
      icon: <SwapOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Refinanced or Redrawn Loans",
      description:
        "Borrowers who have altered loan facilities, split loans, or redrawn capital where tracing the purpose of borrowings is required to support tax-deductible interest claims.",
    },
    {
      icon: <ToolOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Substantial Work & Renovations",
      description:
        "Owners who have undertaken major repairs, structural changes, or cosmetic updates requiring careful classification between immediate repairs and capital improvements.",
    },
    {
      icon: <FileExclamationOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Private Use or Incomplete Records",
      description:
        "Landlords whose properties experienced periods of vacancy, private holiday use, non-commercial family rentals, or where prior-year cost records require reconstruction.",
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
            Client Profile & Eligibility
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Who Needs Investment Property Tax Support?
          </h2>
          {/* Verbatim copy from official document */}
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Investment property tax support is suitable for landlords who need to report rental income and expenses accurately, including first-time investors, joint owners and investors with more than one property. Professional review becomes more valuable when a loan has been refinanced or redrawn, the property was vacant or used privately, major work was completed, ownership changed, or records from earlier years are incomplete.
          </p>
        </div>

        {/* 6 Investor Scenarios Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {investorProfiles.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between bg-slate-50/70 dark:bg-zinc-900/70 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-lg hover:border-emerald-500/60 transition-all duration-300 group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-800 border border-slate-200/70 dark:border-zinc-700/60 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Inline Booking Callout */}
        <div className="bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/40 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1">
              Unsure How Particular Rental Expenses Should Be Treated?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 font-normal">
              An initial consultation can clarify your rental records, interest apportionment, and appropriate return scope.
            </p>
          </div>
          <Link href="/book-an-appointment">
            <Button
              type="primary"
              size="large"
              className="brand-btn-primary h-11 px-6 font-semibold"
            >
              Book an Appointment <ArrowRightOutlined />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
