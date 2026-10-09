"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  UserOutlined,
  DollarOutlined,
  LineChartOutlined,
  HomeOutlined,
  AuditOutlined,
  SafetyCertificateOutlined,
  ThunderboltOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * WhoBenefitsFromPersonalPlanning Component
 * =========================================
 * Section 2: Who May Benefit From Planning?
 * Verbatim text from Page 3 of '3rd Pillar Tax Planning & Advisory Final Content Pages 1-12.docx'.
 *
 * Details the 7 distinct taxpayer circumstances where personal tax planning
 * provides essential clarity on bonuses, investments, property, CGT, and superannuation.
 */
export default function WhoBenefitsFromPersonalPlanning() {
  const beneficiaryProfiles = [
    {
      icon: (
        <DollarOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />
      ),
      scenario:
        "Employees expecting a significant bonus, equity-related payment or change in income.",
      detail:
        "Evaluate tax brackets, withholding variations, and timing before large lump-sum bonuses or vestings land.",
    },
    {
      icon: (
        <LineChartOutlined className="text-xl text-teal-600 dark:text-teal-400" />
      ),
      scenario:
        "Individuals with salary plus dividends, interest, managed funds or other investment income.",
      detail:
        "Understand how investment cash distributions, franking credits, and attribution rules impact total assessable income.",
    },
    {
      icon: (
        <HomeOutlined className="text-xl text-blue-600 dark:text-blue-400" />
      ),
      scenario:
        "Property investors reviewing rental income, expenses or a planned sale.",
      detail:
        "Clarify deductibility of borrowing expenses, repairs vs capital works, and model expected outcomes before selling.",
    },
    {
      icon: (
        <AuditOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />
      ),
      scenario:
        "People planning to sell shares, property or another CGT asset.",
      detail:
        "Assess contract dates, 12-month 50% CGT discounts, cost base records, and offsettable carried-forward capital losses.",
    },
    {
      icon: (
        <SafetyCertificateOutlined className="text-xl text-amber-600 dark:text-amber-400" />
      ),
      scenario:
        "Individuals considering deductible personal super contributions where relevant conditions apply.",
      detail:
        "Review concessional caps, carry-forward unused amounts, and ensure valid Notice of Intent forms are submitted.",
    },
    {
      icon: (
        <ThunderboltOutlined className="text-xl text-purple-600 dark:text-purple-400" />
      ),
      scenario:
        "High-income taxpayers or people with several interacting tax issues.",
      detail:
        "Manage Division 293 tax, Medicare Levy Surcharge thresholds, and multifaceted personal tax interactions.",
    },
    {
      icon: (
        <UserOutlined className="text-xl text-rose-600 dark:text-rose-400" />
      ),
      scenario:
        "Taxpayers making a major financial decision and wanting to understand the Australian tax consequences first.",
      detail:
        "Gain complete forward visibility so there are no surprises or irreversible tax outcomes after transactions complete.",
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
            Taxpayer Profiles
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Who May Benefit From Planning?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Tax planning for individuals may be useful when income is changing,
            investment activity is increasing or a significant transaction is
            expected. It can also help when circumstances have become more
            complicated than a standard salary-and-wages return.
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
              Do any of these scenarios apply to your tax year?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 font-normal">
              Book a planning session with a registered tax agent to review your
              position before the financial year closes.
            </p>
          </div>
          <Link href="/book-an-appointment" className="shrink-0">
            <Button
              type="primary"
              size="large"
              icon={<ArrowRightOutlined />}
              iconPlacement="end"
              className="rounded-xl font-bold bg-brand-primary dark:bg-emerald-500 text-white hover:bg-brand-primary/90 h-11 px-6 shadow-xs"
            >
              Book Personal Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
