"use client";

import React from "react";
import {
  FundOutlined,
  DollarCircleOutlined,
  SwapOutlined,
  HistoryOutlined,
  HomeOutlined,
  ApartmentOutlined,
  FileSearchOutlined,
  CheckCircleFilled,
} from "@ant-design/icons";

/**
 * WhoBenefitsFromInvestmentTaxPlanning Component
 * ===============================================
 * Section 2: Highlights the 7 investor scenarios who benefit from investment tax planning.
 * Verbatim text from Page 12 of the Tax Planning document.
 */
export default function WhoBenefitsFromInvestmentTaxPlanning() {
  const investorProfiles = [
    {
      icon: <FundOutlined className="text-xl text-brand-primary dark:text-emerald-400" />,
      title: "Portfolio Diversification",
      desc: "Investors with shares, ETFs, managed funds or multiple investment accounts.",
    },
    {
      icon: <DollarCircleOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Income & Distribution Streams",
      desc: "People receiving significant dividends, franking credits, interest or managed-fund distributions.",
    },
    {
      icon: <SwapOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Asset Disposals & Realisations",
      desc: "Investors considering the sale of shares, property or another CGT asset.",
    },
    {
      icon: <HistoryOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Loss Quarantining & Gains",
      desc: "Taxpayers carrying forward capital losses or expecting a material capital gain.",
    },
    {
      icon: <HomeOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Property Portfolio Strategy",
      desc: "Property investors reviewing ownership, income, expenses or a future disposal.",
    },
    {
      icon: <ApartmentOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Multi-Entity Ownership",
      desc: "People with investments held through different entities or ownership arrangements.",
    },
    {
      icon: <FileSearchOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Cost Base Reconstruction",
      desc: "Investors whose records do not clearly show acquisition costs, corporate actions or prior cost-base adjustments.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-100 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-primary/10 text-brand-primary dark:bg-emerald-500/10 dark:text-emerald-400 mb-4 border border-brand-primary/20 dark:border-emerald-500/20">
            Investor Profiles
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
            Who May Benefit From Tax Planning for Investments?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300">
            Tax planning for investments can be useful where the investment position has become more complicated or a significant transaction is being considered.
          </p>
        </div>

        {/* 7 Investor Scenarios Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {investorProfiles.map((profile, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-zinc-900 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between ${
                index === 6 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-800 flex items-center justify-center border border-slate-100 dark:border-zinc-700">
                    {profile.icon}
                  </div>
                  <span className="text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-wider">
                    Profile 0{index + 1}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {profile.title}
                </h3>
                <p className="text-slate-600 dark:text-zinc-300 text-sm leading-relaxed">
                  {profile.desc}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-zinc-800 flex items-center text-xs font-medium text-brand-primary dark:text-emerald-400">
                <CheckCircleFilled className="mr-1.5" />
                Strategic tax analysis applicable
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
