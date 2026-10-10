"use client";

import React from "react";
import {
  BankOutlined,
  GlobalOutlined,
  DollarOutlined,
  LineChartOutlined,
  HomeOutlined,
  SafetyCertificateOutlined,
  FileProtectOutlined,
  TeamOutlined,
  AuditOutlined,
  CompassOutlined,
} from "@ant-design/icons";

/**
 * WhatIsForeignIncomeGrid Component
 * ==================================
 * Section 1: What Is Foreign Income for Australian Tax Purposes?
 * Exact verbatim text from Client Document (Page 2).
 */
export default function WhatIsForeignIncomeGrid() {
  const foreignIncomeTypes = [
    {
      title: "Salary and wages earned overseas",
      desc: "Employment income, bonuses, and allowances derived from offshore employers or roles.",
      icon: <DollarOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      badge: "Employment",
    },
    {
      title: "Foreign contractor or business income",
      desc: "Consulting fees, freelance earnings, or sole trader revenues derived from overseas clients.",
      icon: <TeamOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      badge: "Business",
    },
    {
      title: "Overseas bank interest",
      desc: "Interest earned on foreign bank deposits, term deposits, and offshore savings accounts.",
      icon: <BankOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      badge: "Interest",
    },
    {
      title: "Dividends from foreign companies",
      desc: "Dividends and corporate distributions from shares held in companies registered abroad.",
      icon: <LineChartOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      badge: "Dividends",
    },
    {
      title: "Foreign rental property income",
      desc: "Rental yields and lease payments derived from real estate located outside Australia.",
      icon: <HomeOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      badge: "Rental",
    },
    {
      title: "Foreign pensions and annuities",
      desc: "Superannuation, government pensions, occupational pensions, or retirement annuities abroad.",
      icon: <SafetyCertificateOutlined className="text-xl text-cyan-600 dark:text-cyan-400" />,
      badge: "Pensions",
    },
    {
      title: "Royalties",
      desc: "Offshore payments for intellectual property, patents, copyrights, books, or media licensing.",
      icon: <FileProtectOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      badge: "Royalties",
    },
    {
      title: "Foreign trust or distribution income",
      desc: "Distributions from offshore trusts, estates, foundations, or foreign unit investment trusts.",
      icon: <AuditOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      badge: "Trusts",
    },
    {
      title: "Certain foreign capital gains",
      desc: "Gains realized on the sale of offshore properties, shares, cryptocurrency, or investments.",
      icon: <LineChartOutlined className="text-xl text-orange-600 dark:text-orange-400" />,
      badge: "Capital Gains",
    },
    {
      title: "Other overseas investment income",
      desc: "Managed fund yields, foreign mutual funds, foreign currency gains, and hybrid securities.",
      icon: <GlobalOutlined className="text-xl text-sky-600 dark:text-sky-400" />,
      badge: "Investments",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-slate-50 dark:bg-zinc-900/60 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-teal-100 text-teal-800 dark:bg-teal-950/80 dark:text-teal-300 border border-teal-200 dark:border-teal-800/80 mb-4">
            <GlobalOutlined /> Scope of Foreign Earnings
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            What Is Foreign Income for Australian Tax Purposes?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Foreign income is generally income or gains connected with sources outside Australia. Depending on your circumstances, it may include:
          </p>
        </div>

        {/* 10 Foreign Income Types Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {foreignIncomeTypes.map((item, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 hover:border-teal-500/50 dark:hover:border-teal-500/50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-zinc-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400">
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Document Bottom Note */}
        <div className="mt-10 p-6 rounded-2xl bg-teal-50/70 dark:bg-teal-950/30 border border-teal-200/80 dark:border-teal-800/60">
          <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-medium">
            Whether an amount is taxable in Australia depends on factors including your tax residency, the nature of the income and any specific exemption or international agreement that applies.
          </p>
        </div>
      </div>
    </section>
  );
}
