"use client";

import React from "react";
import Link from "next/link";
import {
  StockOutlined,
  CalculatorOutlined,
  HomeOutlined,
  UserOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * RelatedInvestmentTaxRibbon Component
 * ====================================
 * Section 9: Contextual navigation connecting investors to adjacent individual tax
 * and tax planning services across Financially Up.
 */
export default function RelatedInvestmentTaxRibbon() {
  const relatedLinks = [
    {
      title: "Share Trading & Investment Accountant",
      desc: "Annual reporting for shares, dividends, ETFs, foreign income and brokerage accounts.",
      href: "/services/individual-tax/share-trading-investment-accountant",
      icon: <StockOutlined className="text-xl text-brand-primary dark:text-emerald-400" />,
      tag: "Pillar 1.5 • Compliance",
    },
    {
      title: "Capital Gains Tax Planning",
      desc: "Detailed CGT calculation, 50% general discount qualification and disposal timing.",
      href: "/services/tax-planning/cgt-planning",
      icon: <CalculatorOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      tag: "Pillar 3.7 • Advisory",
    },
    {
      title: "Investment Property Tax Accountant",
      desc: "Rental schedules, interest deductions, depreciation schedules and capital works.",
      href: "/services/individual-tax/investment-property-tax-accountant",
      icon: <HomeOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      tag: "Pillar 1.4 • Compliance",
    },
    {
      title: "Personal Tax Planning",
      desc: "Comprehensive strategy for salary, investment portfolios, deductions and tax minimization.",
      href: "/services/tax-planning/personal-tax-planning",
      icon: <UserOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      tag: "Pillar 3.2 • Advisory",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white dark:bg-zinc-900 border-b border-slate-100 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-primary/10 text-brand-primary dark:bg-emerald-500/10 dark:text-emerald-400 mb-3 border border-brand-primary/20 dark:border-emerald-500/20">
              Connected Advisory &amp; Compliance Services
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              Explore Related Services for Investors
            </h2>
          </div>
          <Link
            href="/services/tax-planning"
            className="inline-flex items-center text-sm font-semibold text-brand-primary dark:text-emerald-400 hover:underline mt-4 md:mt-0 group"
          >
            View all Tax Planning services
            <ArrowRightOutlined className="ml-1.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedLinks.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="group bg-slate-50 dark:bg-zinc-800/50 hover:bg-white dark:hover:bg-zinc-800 rounded-2xl p-6 border border-slate-200/80 dark:border-zinc-700/80 hover:border-brand-primary/50 dark:hover:border-emerald-500/50 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 flex items-center justify-center border border-slate-200/80 dark:border-zinc-700 shadow-2xs group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400 dark:text-zinc-500 tracking-wider">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-brand-primary dark:group-hover:text-emerald-400 transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200/60 dark:border-zinc-700/60 flex items-center justify-between text-xs font-semibold text-brand-primary dark:text-emerald-400">
                <span>View service</span>
                <ArrowRightOutlined className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
