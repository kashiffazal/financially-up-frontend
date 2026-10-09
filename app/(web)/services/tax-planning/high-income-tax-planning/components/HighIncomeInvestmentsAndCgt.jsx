"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  LineChartOutlined,
  AuditOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

/**
 * HighIncomeInvestmentsAndCgt Component
 * =====================================
 * Section 4: Investments, property and capital gains.
 * Verbatim text from Page 4 of '3rd Pillar Tax Planning & Advisory Final Content Pages 1-12.docx'.
 *
 * Explains how dividends, distributions, interest, and rental income differ from CGT,
 * details CGT event A1 contract timing, and links to High-Income Professionals, CGT, and Personal Planning.
 */
export default function HighIncomeInvestmentsAndCgt() {
  const serviceCards = [
    {
      title: "High-Income Professionals",
      desc: "For detailed reporting of salary, bonuses, executive packaging, and complex investment income schedules.",
      href: "/services/individual-tax/high-income-professionals",
      btnText: "Explore High-Income Service",
      icon: (
        <LineChartOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />
      ),
    },
    {
      title: "Capital Gains Tax",
      desc: "For disposals of property, shares, crypto, or other CGT assets, covering detailed cost-base calculations.",
      href: "/services/individual-tax/capital-gains-tax",
      btnText: "Explore CGT Service",
      icon: (
        <AuditOutlined className="text-xl text-teal-600 dark:text-teal-400" />
      ),
    },
    {
      title: "Personal Tax Planning",
      desc: "For broader individual planning, pre-30 June timing reviews, and personal superannuation strategies.",
      href: "/services/tax-planning/personal-tax-planning",
      btnText: "Explore Personal Planning",
      icon: (
        <CalendarOutlined className="text-xl text-blue-600 dark:text-blue-400" />
      ),
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Portfolios &amp; CGT
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Investments, Property and Capital Gains
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Investment transactions can affect taxable income in different ways.
            Dividends, distributions, interest and rental income are generally
            dealt with differently from capital gains, and the treatment of a
            transaction depends on the asset and circumstances.
          </p>
          <p className="mt-3 text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
            If you are planning to sell an asset, timing can matter. For a
            disposal under a contract, CGT event A1 generally occurs when the
            contract is entered into rather than at settlement. Other CGT events
            can have different timing, so the transaction and documents should
            be reviewed. The full CGT calculation belongs on a dedicated review,
            but considering a proposed disposal before signing can help identify
            the records and tax consequences that may follow.
          </p>
        </div>

        {/* 3 Interlinked Specialist Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10">
          {serviceCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between hover:border-emerald-400/60 transition-all duration-300 group"
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

              <div className="pt-4 border-t border-slate-200/80 dark:border-zinc-800">
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
