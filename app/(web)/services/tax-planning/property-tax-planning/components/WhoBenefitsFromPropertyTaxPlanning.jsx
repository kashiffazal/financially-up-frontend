"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  HomeOutlined,
  DollarOutlined,
  SwapOutlined,
  ToolOutlined,
  AppstoreAddOutlined,
  AuditOutlined,
  CalendarOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * WhoBenefitsFromPropertyTaxPlanning Component
 * ============================================
 * Section 2: Who may benefit from property tax planning?
 * Verbatim text from Page 5 of '3rd Pillar Tax Planning & Advisory Final Content Pages 1-12.docx'.
 *
 * Details the 7 distinct property investor scenarios where proactive tax advice
 * ensures optimal structuring, interest deductibility, and CGT minimization.
 */
export default function WhoBenefitsFromPropertyTaxPlanning() {
  const investorScenarios = [
    {
      icon: <HomeOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      scenario: "Buying an investment property personally, jointly or through another structure",
      detail: "Evaluate ownership titles, negative gearing impact, land tax thresholds, and legal structure alternatives.",
    },
    {
      icon: <DollarOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      scenario: "Changing how borrowed funds will be used",
      detail: "Avoid contaminating deductible debt when redrawing loan equity or converting investment funds for private use.",
    },
    {
      icon: <SwapOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      scenario: "Moving into or out of a property that has been rented",
      detail: "Establish market valuation cost-bases and apply the 6-year temporary absence rule to preserve main residence exemptions.",
    },
    {
      icon: <ToolOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      scenario: "Undertaking repairs, renovations or capital improvements",
      detail: "Categorize expenditures correctly across immediate repairs, capital works (Division 43), and depreciating assets.",
    },
    {
      icon: <AppstoreAddOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      scenario: "Adding another property to an existing portfolio",
      detail: "Model overall cash flows, state land tax thresholds across jurisdictions, and debt serviceability buffers.",
    },
    {
      icon: <AuditOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      scenario: "Selling a rental property or other property that may have CGT implications",
      detail: "Analyze contract signing dates, calculate 5-element cost bases, and verify 12-month 50% CGT discount eligibility.",
    },
    {
      icon: <CalendarOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      scenario: "Reviewing records before year end or before a major transaction",
      detail: "Reconcile rental ledgers, property depreciation reports, and council rate notices before 30 June statutory cut-offs.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Investor Scenarios
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Who May Benefit from Property Tax Planning?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Tax planning for property investors can be useful for first-time investors, people expanding a portfolio, joint owners, investors considering a refinance or renovation, and anyone planning to sell or change the use of a property.
          </p>
        </div>

        {/* 7 Scenarios Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {investorScenarios.map((item, idx) => (
            <div
              key={idx}
              className={`bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-lg hover:border-emerald-400/60 transition-all duration-300 flex flex-col justify-between group ${
                idx === 6 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest">
                    Scenario 0{idx + 1}
                  </span>
                </div>

                <div className="flex items-start gap-2.5 mb-2.5">
                  <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-sm mt-1 shrink-0" />
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug">
                    {item.scenario}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed pl-6 font-normal">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Booking Prompt Strip */}
        <div className="rounded-2xl bg-slate-100/80 dark:bg-zinc-800/60 border border-slate-200 dark:border-zinc-700/80 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              Planning a property acquisition, refinance, or sale?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 font-normal">
              Speak with an Australian property tax specialist before signing contracts or adjusting loan structures.
            </p>
          </div>
          <Link href="/book-an-appointment" className="shrink-0">
            <Button
              type="primary"
              size="large"
              icon={<ArrowRightOutlined />}
              iconPosition="end"
              className="rounded-xl font-bold bg-brand-primary dark:bg-emerald-500 text-white hover:bg-brand-primary/90 h-11 px-6 shadow-xs"
            >
              Consult a Property Advisor
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
