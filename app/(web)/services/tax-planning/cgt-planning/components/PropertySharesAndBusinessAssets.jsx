"use client";

import React from "react";
import Link from "next/link";
import { Button } from "antd";
import {
  HomeOutlined,
  FundOutlined,
  ShopOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * PropertySharesAndBusinessAssets Component
 * =========================================
 * Section 5: Specific CGT evaluation frameworks for real estate, shares/ETFs,
 * and small business CGT concessions.
 * Verbatim text from Page 8 of the Tax Planning document.
 */
export default function PropertySharesAndBusinessAssets() {
  const assetClasses = [
    {
      title: "Real Estate & Property",
      icon: <HomeOutlined className="text-2xl text-brand-primary dark:text-emerald-400" />,
      tag: "Property CGT",
      verbatim:
        "Property CGT planning may involve purchase and sale records, ownership percentages, main-residence history, rental periods, improvements and cost-base records. It should not be treated as a substitute for detailed property tax-return work.",
      highlights: [
        "Contract & settlement records",
        "Ownership proportions across titles",
        "Main-residence exemption & 6-year rule",
        "Apportionment for rental periods",
        "Capital improvements vs repairs",
      ],
      link: null,
    },
    {
      title: "Shares & Investment Portfolios",
      icon: <FundOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
      tag: "Equities & ETFs",
      verbatim:
        "For shares and investments, planning may involve acquisition records, brokerage, corporate actions, prior capital losses and the intended disposal. Our Share Trading & Investment Accountant service covers broader investment-income and share-tax reporting where required.",
      highlights: [
        "Parcel acquisition & brokerage invoices",
        "Corporate actions (splits, demergers, DRP)",
        "Offsetting prior capital loss reserves",
        "AMMA statement cost-base adjustments",
      ],
      link: {
        label: "Share Trading & Investment Accountant",
        href: "/services/individual-tax/share-trading-investment-accountant",
      },
    },
    {
      title: "Business Assets & Small Business Concessions",
      icon: <ShopOutlined className="text-2xl text-amber-600 dark:text-amber-400" />,
      tag: "Enterprise Disposals",
      verbatim:
        "Business asset disposals can involve additional rules, including possible small business CGT concessions where eligibility conditions are met. These concessions are highly fact-dependent and should be reviewed separately rather than assumed to apply.",
      highlights: [
        "15-year exemption review",
        "50% active asset reduction",
        "Retirement exemption ($500k lifetime cap)",
        "Small business rollover relief",
        "Active asset test & $6M net asset value test",
      ],
      link: null,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-zinc-900 border-b border-slate-100 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-primary/10 text-brand-primary dark:bg-emerald-500/10 dark:text-emerald-400 mb-4 border border-brand-primary/20 dark:border-emerald-500/20">
            Asset-Specific Frameworks
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Property, Shares and Business Assets
          </h2>
        </div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {assetClasses.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 dark:bg-zinc-800/60 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-700/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-900 flex items-center justify-center border border-slate-200/80 dark:border-zinc-700 shadow-xs">
                    {item.icon}
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-200/70 dark:bg-zinc-700 text-slate-700 dark:text-zinc-300">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-700 dark:text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                  {item.verbatim}
                </p>
                <div className="border-t border-slate-200/60 dark:border-zinc-700 pt-4 space-y-2">
                  {item.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-zinc-400">
                      <CheckCircleOutlined className="text-emerald-500 mt-0.5 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {item.link && (
                <div className="pt-6 border-t border-slate-200/60 dark:border-zinc-700 mt-6">
                  <Link href={item.link.href}>
                    <Button
                      type="link"
                      className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1.5 text-xs sm:text-sm h-auto"
                      icon={<ArrowRightOutlined className="text-xs" />}
                      iconPosition="end"
                    >
                      {item.link.label}
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
