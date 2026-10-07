"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  CalculatorOutlined,
  FallOutlined,
  PercentageOutlined,
  StopOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
  AlertOutlined,
} from "@ant-design/icons";

/**
 * CryptoCgtLossesAndPersonalUse Component
 * =======================================
 * Section 3: Crypto capital gains, losses and personal-use assets.
 * Features 100% complete, verbatim content from Page 8 of the client document.
 */
export default function CryptoCgtLossesAndPersonalUse() {
  const cards = [
    {
      icon: <CalculatorOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      badge: "Cost Base & Proceeds",
      title: "Calculating Gains & Losses",
      text: "For an investor, a gain or loss is generally worked out by comparing capital proceeds with the asset's cost base or reduced cost base. The cost base may include acquisition and eligible transaction costs. A market-value rule may apply where there are no cash proceeds.",
      subText: "Includes broker and exchange trading fees in cost-base calculation.",
      theme: "border-emerald-200/80 dark:border-emerald-800/40 bg-emerald-50/30 dark:bg-emerald-950/20",
    },
    {
      icon: <FallOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      badge: "Loss Quarantining",
      title: "Capital Loss Application",
      text: "Capital losses can generally reduce capital gains but not salary or other ordinary income. Unused net capital losses may be carried forward. Eligible individuals may be entitled to the CGT discount for assets held for at least 12 months, after applying capital losses and subject to the relevant conditions.",
      subText: "Losses carry forward indefinitely until eligible capital gains arise.",
      theme: "border-rose-200/80 dark:border-rose-800/40 bg-rose-50/30 dark:bg-rose-950/20",
    },
    {
      icon: <PercentageOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      badge: "50% Discount",
      title: "12-Month Holding Discount",
      text: "Individuals who hold crypto tokens for at least 12 months before disposal are generally entitled to a 50% CGT discount on any net capital gain, calculated after applying current and prior-year capital losses.",
      subText: "Exact acquisition timestamp matching across multiple wallet parcels required.",
      theme: "border-blue-200/80 dark:border-blue-800/40 bg-blue-50/30 dark:bg-blue-950/20",
    },
    {
      icon: <StopOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      badge: "Strict Exception",
      title: "Personal-Use Asset Rule",
      text: "The personal-use asset exception is narrow. It depends on crypto being kept or used mainly to buy items for personal use or consumption—not merely on eventually spending an investment. A gain on a qualifying asset acquired for less than $10,000 may be disregarded; losses from personal-use assets are disregarded.",
      subText: "Does not apply if crypto was purchased for investment or speculative gain.",
      theme: "border-amber-200/80 dark:border-amber-800/40 bg-amber-50/30 dark:bg-amber-950/20",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            CGT Concessions &amp; Exemptions
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Crypto Capital Gains, Losses and Personal-Use Assets
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Navigating cost-base adjustments, loss quarantining, the 12-month 50% CGT discount, and the strict conditions of the personal-use asset exemption.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {cards.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-between rounded-3xl p-7 sm:p-8 border ${item.theme} shadow-xs hover:shadow-lg transition-all duration-300`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 flex items-center justify-center shadow-2xs">
                    {item.icon}
                  </div>
                  <Tag className="m-0 font-bold text-2xs uppercase tracking-wider py-0.5 px-2.5 rounded-full border-slate-300 dark:border-zinc-700 bg-white/90 dark:bg-zinc-800/90 text-slate-800 dark:text-zinc-200">
                    {item.badge}
                  </Tag>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                  {item.text}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/60 dark:border-zinc-700/60 text-2xs text-slate-500 dark:text-zinc-400 font-medium">
                {item.subText}
              </div>
            </div>
          ))}
        </div>

        {/* CGT Cross Link Strip */}
        <div className="p-4 sm:p-6 rounded-2xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-200/70 dark:border-zinc-700/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-600 dark:text-zinc-300">
          <span>Need complete details on general Australian capital gains legislation?</span>
          <Link
            href="/services/individual-tax/capital-gains-tax"
            className="text-brand-primary dark:text-emerald-400 font-bold hover:underline inline-flex items-center gap-1 shrink-0"
          >
            Visit Capital Gains Tax Practice <ArrowRightOutlined className="text-xs" />
          </Link>
        </div>
      </div>
    </section>
  );
}
