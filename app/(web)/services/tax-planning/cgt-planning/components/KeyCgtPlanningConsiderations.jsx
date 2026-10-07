"use client";

import React from "react";
import Link from "next/link";
import { Button } from "antd";
import {
  CalculatorOutlined,
  DollarCircleOutlined,
  PercentageOutlined,
  HomeOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * KeyCgtPlanningConsiderations Component
 * =====================================
 * Section 3: Cost base vs reduced cost base elements, capital loss quarantining,
 * 50% discount conditions, main residence nuances, and service cross-links.
 * Verbatim text from Page 8 of the Tax Planning document.
 */
export default function KeyCgtPlanningConsiderations() {
  const cards = [
    {
      icon: <CalculatorOutlined className="text-xl text-brand-primary dark:text-emerald-400" />,
      title: "Cost Base & Capital Proceeds",
      text: "For most CGT events, the calculation starts with the capital proceeds and the asset’s cost base or reduced cost base. The correct cost base may include more than the original purchase price, but not every cost can be included and amounts already claimed as deductions may affect the calculation.",
    },
    {
      icon: <DollarCircleOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Capital Loss Quarantining",
      text: "Capital losses are generally applied against capital gains, not against salary or other ordinary income. Unused net capital losses may generally be carried forward, subject to the rules that apply to the taxpayer.",
    },
    {
      icon: <PercentageOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "50% General CGT Discount",
      text: "Individuals and some trusts may be eligible for the CGT discount for qualifying assets held for at least 12 months, but the discount is not automatic and can be affected by the taxpayer’s circumstances, including residency.",
    },
    {
      icon: <HomeOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Property & Main Residence Nuances",
      text: "Property transactions can also involve main-residence rules, periods of income-producing use and other fact-specific issues.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-zinc-900 border-b border-slate-100 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-primary/10 text-brand-primary dark:bg-emerald-500/10 dark:text-emerald-400 mb-4 border border-brand-primary/20 dark:border-emerald-500/20">
            Calculation Foundations
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Key CGT Planning Considerations
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-14">
          {cards.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 dark:bg-zinc-800/60 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-700/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-900 flex items-center justify-center mb-5 border border-slate-200/80 dark:border-zinc-700 shadow-xs">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Service Integration Notice */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-slate-900 to-slate-800 dark:from-zinc-900 dark:to-zinc-800 text-white rounded-3xl p-8 sm:p-10 shadow-xl">
          <div className="mb-6">
            <h3 className="text-lg sm:text-xl font-bold mb-2">
              Comprehensive Post-Sale Compliance &amp; Rental Property Tax
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              If you need the detailed calculation after a transaction, our Capital Gains Tax service covers CGT reporting and calculation. Property investors can also refer to our Investment Property Tax service for rental-property tax issues.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-start gap-4 pt-4 border-t border-white/10">
            <Link href="/services/individual-tax/capital-gains-tax">
              <Button
                type="link"
                className="p-0 font-bold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1.5 text-xs sm:text-sm h-auto"
                icon={<ArrowRightOutlined className="text-xs" />}
                iconPosition="end"
              >
                Capital Gains Tax Service
              </Button>
            </Link>
            <span className="text-slate-500 hidden sm:inline">•</span>
            <Link href="/services/individual-tax/investment-property-tax-accountant">
              <Button
                type="link"
                className="p-0 font-bold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1.5 text-xs sm:text-sm h-auto"
                icon={<ArrowRightOutlined className="text-xs" />}
                iconPosition="end"
              >
                Investment Property Tax Service
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
