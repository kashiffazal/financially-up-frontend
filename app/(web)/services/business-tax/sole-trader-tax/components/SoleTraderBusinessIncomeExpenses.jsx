"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  DollarOutlined,
  ToolOutlined,
  CarOutlined,
  HomeOutlined,
  LaptopOutlined,
  SafetyCertificateOutlined,
  AuditOutlined,
  TeamOutlined,
  FundProjectionScreenOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * SoleTraderBusinessIncomeExpenses Component
 * ==========================================
 * Section: Business Income and Expenses
 * Features 100% complete, verbatim content from Page 5 of client docx.
 * Covers business-vs-private apportionment and 9 critical deduction review areas.
 */
export default function SoleTraderBusinessIncomeExpenses() {
  const expenseCategories = [
    {
      icon: (
        <ToolOutlined className="text-xl text-teal-600 dark:text-teal-400" />
      ),
      title: "Equipment & Tools",
      desc: "Commercial tools, trade equipment, machinery, and specialized business apparatus.",
    },
    {
      icon: (
        <LaptopOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />
      ),
      title: "Software & Technology",
      desc: "Cloud accounting subscriptions, industry apps, domain hosting, and IT infrastructure.",
    },
    {
      icon: (
        <AuditOutlined className="text-xl text-blue-600 dark:text-blue-400" />
      ),
      title: "Professional Fees",
      desc: "Accounting fees, legal advisory, business consulting, and industry memberships.",
    },
    {
      icon: (
        <SafetyCertificateOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />
      ),
      title: "Business Insurance",
      desc: "Public liability, professional indemnity, commercial vehicle, and tool insurance.",
    },
    {
      icon: (
        <FundProjectionScreenOutlined className="text-xl text-purple-600 dark:text-purple-400" />
      ),
      title: "Advertising & Marketing",
      desc: "Website development, digital campaigns, social media ads, signage, and promotions.",
    },
    {
      icon: (
        <TeamOutlined className="text-xl text-cyan-600 dark:text-cyan-400" />
      ),
      title: "Subcontractor Costs",
      desc: "Payments to bona fide independent subcontractors and specialized trade assistants.",
    },
    {
      icon: (
        <CarOutlined className="text-xl text-amber-600 dark:text-amber-400" />
      ),
      title: "Motor Vehicle Expenses",
      desc: "Travel between job sites, client visits, fuel, maintenance, and logbook substantiation.",
    },
    {
      icon: (
        <HomeOutlined className="text-xl text-rose-600 dark:text-rose-400" />
      ),
      title: "Home-Based Business Costs",
      desc: "Dedicated home office heating, lighting, internet, phone, and depreciation costs.",
    },
    {
      icon: (
        <DollarOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />
      ),
      title: "Asset Purchases & Capital",
      desc: "Depreciating assets, simplified depreciation pool, and balancing adjustments.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="orange"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Deductions &amp; Apportionment
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Business Income and Expenses
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Sole traders generally need to report income earned from the
            business and can claim deductions for expenses that satisfy the
            applicable tax rules. Where an expense has both business and private
            use, only the business-related portion may be deductible.
          </p>
        </div>

        {/* 9 Expense Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {expenseCategories.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-800/90 border border-slate-200/90 dark:border-zinc-700/80 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-100 dark:border-zinc-700 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Treatment Notice */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-blue-50 dark:from-zinc-900 dark:via-zinc-850 dark:to-zinc-900 border border-emerald-200/80 dark:border-emerald-800/50 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              Substantiation, Depreciation &amp; Private Use Rules
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
              Common areas requiring review can include equipment, software,
              professional fees, insurance, advertising, subcontractor costs,
              motor vehicle expenses, home-based business costs and asset
              purchases. The treatment of each item can vary, particularly where
              capital expenditure, depreciation, private use or specific
              substantiation rules apply.
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <Link href="/book-an-appointment">
              <Button
                type="primary"
                className="brand-btn-primary w-full md:w-auto text-xs sm:text-sm font-semibold rounded-xl"
                icon={<ArrowRightOutlined />}
                iconPlacement="end"
              >
                Review Your Deductions
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
