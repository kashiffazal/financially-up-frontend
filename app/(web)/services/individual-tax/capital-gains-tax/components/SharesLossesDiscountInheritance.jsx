"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  LineChartOutlined,
  FallOutlined,
  PercentageOutlined,
  GiftOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * SharesLossesDiscountInheritance Component
 * =========================================
 * Section 7, 8, 9 & 10: CGT on Shares, Capital Losses, The CGT Discount & Inherited Assets.
 * Features 100% complete, verbatim content from Page 6 of the client document.
 */
export default function SharesLossesDiscountInheritance() {
  const cards = [
    {
      icon: <LineChartOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      badge: "Equity & Funds",
      title: "CGT on Shares and Other Investments",
      text: "CGT can also apply when you dispose of shares, exchange traded funds, managed fund units or other investment assets. Investment-platform and annual tax reports can assist, but they may still need review where there are multiple parcels, brokerage costs, reinvestments, corporate actions, carried-forward losses or managed-fund capital gain distributions.",
      subText: "Financially Up's Individual Tax Return service can assist with reporting investment-related CGT as part of a tax return where that work is within the agreed scope.",
      theme: "border-emerald-200/80 dark:border-emerald-800/40 bg-emerald-50/30 dark:bg-emerald-950/20",
    },
    {
      icon: <FallOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      badge: "Loss Quarantining",
      title: "Capital Losses",
      text: "A capital loss generally arises when the capital proceeds are less than the asset's reduced cost base. Capital losses are generally applied against capital gains before an eligible CGT discount is applied. They are not generally deducted from salary or other ordinary income. Unused net capital losses may generally be carried forward to reduce eligible capital gains in a later year.",
      subText: "Capital losses are quarantined against capital gains and cannot offset employment salary.",
      theme: "border-rose-200/80 dark:border-rose-800/40 bg-rose-50/30 dark:bg-rose-950/20",
    },
    {
      icon: <PercentageOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      badge: "50% Concession",
      title: "The CGT Discount",
      text: "Eligible individuals may generally be able to apply a 50% CGT discount to an eligible capital gain where the asset has been owned for at least 12 months and the other conditions are satisfied. Eligibility can be affected by the type of asset, the taxpayer and residency circumstances. The discount reduces an eligible capital gain; it is not a 50% reduction in the tax rate and does not apply automatically to every gain.",
      subText: "Applies after deducting current-year and prior-year carried-forward capital losses.",
      theme: "border-blue-200/80 dark:border-blue-800/40 bg-blue-50/30 dark:bg-blue-950/20",
    },
    {
      icon: <GiftOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      badge: "Deceased Estates",
      title: "Inherited Assets and CGT",
      text: "Receiving an inherited asset does not necessarily result in CGT at that time. CGT considerations can arise if the asset is later disposed of. The treatment can depend on the type of asset, how and when the deceased acquired it, the deceased person's circumstances, the beneficiary's circumstances, and any applicable main-residence or other CGT rules. Inherited assets should be reviewed individually because the relevant cost base and available exemptions can differ.",
      subText: "Cost base determined by date of death and deceased acquisition history.",
      theme: "border-purple-200/80 dark:border-purple-800/40 bg-purple-50/30 dark:bg-purple-950/20",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Investments &amp; Concessions
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Shares, Capital Losses, the CGT Discount and Inherited Assets
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Australian tax mechanics for equity disposals, capital loss quarantining, the 12-month 50% discount test, and inherited estate assets.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-between rounded-3xl p-7 sm:p-8 border ${card.theme} shadow-xs hover:shadow-lg transition-all duration-300`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 flex items-center justify-center shadow-2xs">
                    {card.icon}
                  </div>
                  <Tag className="m-0 font-bold text-2xs uppercase tracking-wider py-0.5 px-2.5 rounded-full border-slate-300 dark:border-zinc-700 bg-white/90 dark:bg-zinc-800/90 text-slate-800 dark:text-zinc-200">
                    {card.badge}
                  </Tag>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                  {card.text}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/60 dark:border-zinc-700/60 text-2xs text-slate-500 dark:text-zinc-400 font-medium">
                {card.subText}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
