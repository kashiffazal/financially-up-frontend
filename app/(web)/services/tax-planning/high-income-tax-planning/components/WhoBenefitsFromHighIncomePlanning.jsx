"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  TrophyOutlined,
  UserOutlined,
  HomeOutlined,
  ApartmentOutlined,
  LineChartOutlined,
  SafetyCertificateOutlined,
  RiseOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * WhoBenefitsFromHighIncomePlanning Component
 * ===========================================
 * Section 2: Who may benefit from proactive planning?
 * Verbatim text from Page 4 of '3rd Pillar Tax Planning & Advisory Final Content Pages 1-12.docx'.
 *
 * Details the 7 distinct high-income taxpayer scenarios where forward-looking advice
 * protects cash flow and prevents avoidable end-of-year tax bracket surprises.
 */
export default function WhoBenefitsFromHighIncomePlanning() {
  const beneficiaryProfiles = [
    {
      icon: <TrophyOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      scenario: "Executives expecting bonuses, commissions or equity-related income",
      detail: "Evaluate top marginal rate thresholds, withholding adjustments, and vesting milestones before payouts occur.",
    },
    {
      icon: <UserOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      scenario: "Professionals with salary plus investment, property or business income",
      detail: "Address the compounding tax impact of multi-tier professional earnings, consulting fees, and private investments.",
    },
    {
      icon: <HomeOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      scenario: "Individuals selling property, shares or other CGT assets",
      detail: "Analyze contract timing, 50% CGT discounts, and capital losses to model net tax outcomes before signing contracts.",
    },
    {
      icon: <ApartmentOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      scenario: "People with multiple employers or income streams",
      detail: "Prevent significant tax debt notices caused by under-withholding across multiple concurrent executive roles.",
    },
    {
      icon: <LineChartOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      scenario: "Investors with significant distributions, dividends, interest or rental income",
      detail: "Plan around annual trust allocations, franking credits, foreign tax offsets, and positive rental cash flows.",
    },
    {
      icon: <SafetyCertificateOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      scenario: "Individuals considering deductible personal super contributions, subject to eligibility and contribution limits",
      detail: "Maximize concessional contribution caps, carry-forward unused amounts, and navigate Division 293 thresholds.",
    },
    {
      icon: <RiseOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      scenario: "Taxpayers whose income has increased substantially from a previous year",
      detail: "Prepare for higher tax brackets, Medicare Levy Surcharge tiers, and increased PAYG quarterly instalments.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Client Profiles
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Who May Benefit from Proactive Planning?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Tax planning for high income earners can be useful when your income or asset position is changing, or when one transaction could materially affect the year’s tax outcome.
          </p>
        </div>

        {/* 7 Scenarios Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {beneficiaryProfiles.map((item, idx) => (
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
                    Profile 0{idx + 1}
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
              Navigating high or shifting income streams this year?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 font-normal">
              Consult with our registered tax accountants to model your obligations before year end.
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
              Consult an Advisor
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
