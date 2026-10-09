"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  StockOutlined,
  DollarCircleOutlined,
  SafetyCertificateOutlined,
  SolutionOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * CapitalGainsFrankedStreaming Component
 * =====================================
 * Section: Capital gains and franked distributions
 * Verbatim text from Page 11 of client docx.
 * Covers:
 * - Streaming capital gains or franked distributions to specific beneficiaries
 * - Beneficiary tax position impact (50% CGT discount, franking credits)
 * - Why streaming cannot be an after-the-fact tax optimisation
 * - Need for separate scoping for detailed trust distribution advice.
 */
export default function CapitalGainsFrankedStreaming() {
  const streamingStreams = [
    {
      icon: (
        <StockOutlined className="text-xl text-teal-600 dark:text-teal-400" />
      ),
      title: "Streaming Capital Gains",
      desc: "Allocating specific capital gains to individual beneficiaries who can access the 50% CGT discount or offset personal capital losses, requiring deed power and specific entitlement records.",
    },
    {
      icon: (
        <DollarCircleOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />
      ),
      title: "Streaming Franked Distributions",
      desc: "Directing franked dividends and attached franking credits to beneficiaries who can utilize the tax offset effectively, subject to the benchmark rule and holding period rules.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="cyan"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Specific Entitlements & Tax Offsets
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Capital gains and franked distributions
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Where permitted by the trust deed and the tax rules, a trust may be
            able to stream capital gains or franked distributions so that a
            particular beneficiary is specifically entitled to the relevant
            amount. This can affect how the gain or franking credit is dealt
            with in the beneficiary&apos;s tax position.
          </p>
        </div>

        {/* 2 Streaming Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {streamingStreams.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Critical Box: Not an After-the-Fact Exercise */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-brand-bg-lighter via-white to-slate-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border border-slate-200 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <SafetyCertificateOutlined className="text-teal-600 dark:text-teal-400" />
              Rigorous Advance Documentation Required
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Streaming is not simply a matter of choosing the most favourable
              beneficiary after year-end. The entitlement, records, deed and
              integrity rules all need to be considered. Detailed trust
              distribution advice is separately scoped where the facts require
              it.
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
                Scope Streaming Advice
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
