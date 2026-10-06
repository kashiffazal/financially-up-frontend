"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  TrophyOutlined,
  StockOutlined,
  LineChartOutlined,
  HomeOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * HighIncomeCommonScenarios Component
 * ====================================
 * Section 3: Common Situations We Can Assist With.
 * Features 100% complete, verbatim content from Page 3 of the client document.
 * Highlights the 4 major high-earner scenarios with contextual links to specialized sub-services.
 */
export default function HighIncomeCommonScenarios() {
  const scenarios = [
    {
      title: "Executive remuneration and bonuses",
      description:
        "Salary, bonuses, allowances, salary packaging and reportable fringe benefits may appear across different records. We can review how the available information should be reflected in your return.",
      icon: <TrophyOutlined className="text-2xl text-amber-600 dark:text-amber-400" />,
      badge: "Executive Packages",
      link: null,
    },
    {
      title: "Employee share schemes",
      description:
        "Employee shares, options and other equity incentives can create income-tax and capital-gains considerations. Treatment depends on the arrangement, relevant dates and documents issued. We can review the information and explain how it may affect your return.",
      icon: <StockOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
      badge: "ESS & Equity Plans",
      link: {
        label: "See Employee Share Schemes Service",
        href: "/services/individual-tax/employee-share-schemes",
      },
    },
    {
      title: "Investments and capital gains",
      description:
        "Shares, managed funds, crypto assets and other investments may generate income or capital gains events. A sale or transfer may require complete transaction and cost records.",
      subText: "See our Capital Gains Tax service.",
      icon: <LineChartOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
      badge: "CGT & Portfolios",
      link: {
        label: "See Capital Gains Tax Service",
        href: "/services/individual-tax/capital-gains-tax",
      },
    },
    {
      title: "Investment properties",
      description:
        "Rental income, interest, repairs, depreciation information and capital improvements may require different tax treatment. We can review the relevant records.",
      subText: "See our Investment Property Tax service for detailed support.",
      icon: <HomeOutlined className="text-2xl text-teal-600 dark:text-teal-400" />,
      badge: "Property Portfolios",
      link: {
        label: "See Investment Property Tax Service",
        href: "/services/individual-tax/investment-property-tax-accountant",
      },
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Specialized Practice Scenarios
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Common Situations We Can Assist With
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            High income earners frequently hold multi-layered financial portfolios requiring specialist accounting across remuneration, equity, property and capital investments.
          </p>
        </div>

        {/* 4 Scenarios Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {scenarios.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between bg-white dark:bg-zinc-900 rounded-3xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-xl hover:border-emerald-500/50 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center transition-transform group-hover:scale-110">
                    {item.icon}
                  </div>
                  <Tag className="text-xs font-bold uppercase tracking-wider bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 border-none px-3 py-1">
                    {item.badge}
                  </Tag>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                  {item.description}
                </p>

                {item.subText && (
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 italic mb-4 font-normal">
                    {item.subText}
                  </p>
                )}
              </div>

              <div className="pt-5 border-t border-slate-100 dark:border-zinc-800/80">
                {item.link ? (
                  <Link href={item.link.href}>
                    <Button
                      type="link"
                      className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline flex items-center gap-2 group-hover:gap-3 transition-all h-auto text-sm"
                      icon={<ArrowRightOutlined className="text-xs" />}
                      iconPosition="end"
                    >
                      {item.link.label}
                    </Button>
                  </Link>
                ) : (
                  <Link href="/book-an-appointment">
                    <Button
                      type="link"
                      className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline flex items-center gap-2 group-hover:gap-3 transition-all h-auto text-sm"
                      icon={<ArrowRightOutlined className="text-xs" />}
                      iconPosition="end"
                    >
                      Book Remuneration Consultation
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
