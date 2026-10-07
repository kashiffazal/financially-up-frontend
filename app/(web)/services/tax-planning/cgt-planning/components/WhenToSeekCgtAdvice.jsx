"use client";

import React from "react";
import {
  HomeOutlined,
  FundOutlined,
  ShopOutlined,
  SwapOutlined,
  FileDoneOutlined,
  SyncOutlined,
  CalendarOutlined,
  CheckCircleFilled,
} from "@ant-design/icons";

/**
 * WhenToSeekCgtAdvice Component
 * =============================
 * Section 2: 7 transaction scenarios where pre-signing CGT advice is critical
 * before choices become fixed under Australian tax law.
 * Verbatim text from Page 8 of the Tax Planning document.
 */
export default function WhenToSeekCgtAdvice() {
  const scenarios = [
    {
      icon: <HomeOutlined className="text-xl text-brand-primary dark:text-emerald-400" />,
      title: "Real Estate & Property Disposals",
      text: "Selling an investment property, former home or other real estate.",
    },
    {
      icon: <FundOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Significant Shareholdings & Portfolios",
      text: "Selling a large shareholding or investment portfolio position.",
    },
    {
      icon: <ShopOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Business Asset Disposals",
      text: "Disposing of business assets or interests where business CGT concessions may need separate review.",
    },
    {
      icon: <SwapOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Related Party Transfers",
      text: "Transferring an asset between related parties or entities.",
    },
    {
      icon: <FileDoneOutlined className="text-xl text-cyan-600 dark:text-cyan-400" />,
      title: "Carried-Forward Losses",
      text: "Dealing with carried-forward capital losses.",
    },
    {
      icon: <SyncOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Asset Use Changes",
      text: "Changing how a property or other asset is used.",
    },
    {
      icon: <CalendarOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Transaction Timing & Tax Years",
      text: "Reviewing a proposed transaction where the timing may affect which income year the gain or loss falls into.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-primary/10 text-brand-primary dark:bg-emerald-500/10 dark:text-emerald-400 mb-4 border border-brand-primary/20 dark:border-emerald-500/20">
            Timing &amp; Decision Triggers
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            When Should You Seek Capital Gains Tax Advice?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
            Capital gains tax advice may be worthwhile before you sign a contract, sell an investment, transfer ownership, restructure an asset-holding arrangement or make a significant business disposal. Once the relevant CGT event has happened, some planning choices may no longer be available.
          </p>
        </div>

        {/* 7 Scenario Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {scenarios.map((item, idx) => (
            <div
              key={idx}
              className={`bg-white dark:bg-zinc-900 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between ${
                idx === 6 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-50 dark:bg-zinc-800 flex items-center justify-center border border-slate-200/80 dark:border-zinc-700 shadow-xs">
                    {item.icon}
                  </div>
                  <CheckCircleFilled className="text-emerald-500 text-lg" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
