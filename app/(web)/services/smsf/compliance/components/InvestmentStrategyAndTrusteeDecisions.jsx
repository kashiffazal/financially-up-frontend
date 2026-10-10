"use client";

import React from "react";
import { Tag } from "antd";
import {
  LineChartOutlined,
  FileTextOutlined,
  CheckCircleOutlined,
  AlertOutlined,
} from "@ant-design/icons";

/**
 * InvestmentStrategyAndTrusteeDecisions Component
 * ===============================================
 * Implements verbatim SEO content from Page 8 of 9th Pillar SMSF.docx:
 * - Investment strategy and trustee decisions (risk, diversification, liquidity, member insurance)
 */
export default function InvestmentStrategyAndTrusteeDecisions() {
  const strategyComponents = [
    {
      title: "Risk & Return Profile",
      desc: "Balancing investment risk against expected returns to align with member retirement objectives.",
    },
    {
      title: "Asset Diversification",
      desc: "Managing exposure across equities, cash, real estate, and fixed interest to minimize portfolio volatility.",
    },
    {
      title: "Liquidity & Liability Matching",
      desc: "Ensuring adequate cash flow to pay fund expenses, tax liabilities, and mandatory pension minimums.",
    },
    {
      title: "Member Insurance Consideration",
      desc: "Documenting formal consideration of whether life, TPD, or income protection insurance should be held for fund members.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="blue" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Governance & Strategy
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Investment strategy and trustee decisions
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            An SMSF must have a written investment strategy that reflects the fund’s circumstances and is reviewed regularly. The strategy should address matters such as risk, diversification, liquidity and the ability to meet liabilities, and trustees must consider whether insurance should be held for members. The strategy should be a real governance document rather than a generic template that has no connection to the fund’s investments.
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Where the fund makes a major change - for example, acquiring property, using an LRBA or moving heavily into one asset class - trustees should consider whether the investment strategy and supporting minutes need to be updated.
          </p>
        </div>

        {/* 4 Strategy Factors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {strategyComponents.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-md hover:border-blue-400/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/40 flex items-center justify-center mb-4">
                  <LineChartOutlined className="text-xl text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Major Asset Allocation Change Callout */}
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-xs w-full flex items-start gap-4">
          <FileTextOutlined className="text-2xl text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed m-0 font-normal">
            <span className="font-bold text-slate-900 dark:text-white">Active Strategy Review Requirement:</span> The ATO scrutinizes funds with high asset concentration (such as a single commercial property). Trustees must hold formal meetings and execute minutes documenting how high concentration aligns with liquidity needs and insurance requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
