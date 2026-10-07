"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  HomeOutlined,
  LineChartOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  FileSearchOutlined,
} from "@ant-design/icons";

/**
 * InvestmentAndRentalPropertyConsiderations Component
 * ===================================================
 * Section 5: Investment and Rental Property Considerations.
 * Verbatim text from Page 3 of '3rd Pillar Tax Planning & Advisory Final Content Pages 1-12.docx'.
 *
 * Covers dividends, distributions, interest, repairs vs capital expenditure,
 * depreciation, and links to the Investment Property Tax specialist service.
 */
export default function InvestmentAndRentalPropertyConsiderations() {
  const propertyReviewElements = [
    "Expected gross rental receipts & property management summaries",
    "Interest deductions & apportionment of refinanced loan balances",
    "Immediate repairs & maintenance versus capital improvement works",
    "Division 40 plant & equipment and Division 43 capital works schedules",
    "Land tax assessments, council rates, insurances & body corporate fees",
    "Holding costs and cost base additions for prospective future sale",
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Assets &amp; Portfolios
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Investment and Rental Property Considerations
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Investment income can involve more than reporting cash received. Dividends, managed fund distributions, interest, foreign income and capital gains may each have different tax treatment and record requirements.
          </p>
          <p className="mt-3 text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
            Rental property planning may involve expected rental income, deductible expenses, financing records, repairs versus capital expenditure, depreciation-related information and a possible future sale. The treatment depends on the property and the facts.
          </p>
        </div>

        {/* 2 Focused Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Card 1: Investment Income Beyond Cash Received */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/60 border border-teal-100 dark:border-teal-800/40 flex items-center justify-center mb-6">
                <LineChartOutlined className="text-xl text-teal-600 dark:text-teal-400" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                Investments &amp; Portfolio Nuances
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-6">
                Tax planning identifies the distinct tax characteristics of varied asset classes before annual statements arrive.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200/80 dark:border-zinc-800">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-1">Managed Funds (AMMA Statements)</h4>
                  <p className="text-xs text-slate-500 dark:text-zinc-400 font-normal">Attributed income, capital gains tax components, and tax-deferred adjustments.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200/80 dark:border-zinc-800">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-1">Australian Share Portfolios</h4>
                  <p className="text-xs text-slate-500 dark:text-zinc-400 font-normal">Franked vs unfranked dividends, franking credit offsets, and DRP cost bases.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200/80 dark:border-zinc-800">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-1">Overseas &amp; Foreign Income</h4>
                  <p className="text-xs text-slate-500 dark:text-zinc-400 font-normal">Foreign tax offsets (FITO), withholding taxes, and exchange rate conversions.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Rental Properties & Dedicated Compliance Link */}
          <div className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center mb-6">
                <HomeOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                Rental Property Structuring
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                For detailed rental-property compliance and tax-return support, see Investment Property Tax.
              </p>

              <div className="space-y-2 mb-6">
                {propertyReviewElements.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-xs mt-1 shrink-0" />
                    <span className="text-xs text-slate-600 dark:text-zinc-300 font-normal">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200/80 dark:border-zinc-800">
              <Link href="/services/individual-tax/investment-property-tax-accountant">
                <Button
                  type="primary"
                  size="large"
                  icon={<ArrowRightOutlined />}
                  iconPosition="end"
                  className="w-full rounded-xl font-bold bg-brand-primary dark:bg-emerald-500 text-white hover:bg-brand-primary/90 h-11"
                >
                  Explore Investment Property Tax
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
