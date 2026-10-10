"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileTextOutlined,
  FundOutlined,
  DollarCircleOutlined,
  LinkOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * ThreePartsOfThreeWayForecast Component
 * =====================================
 * Section 1: What are the three parts of a three way forecast?
 * Features 100% complete, verbatim content from client SEO document.
 */
export default function ThreePartsOfThreeWayForecast() {
  const threeStatements = [
    {
      title: "Forecast Profit & Loss Statement",
      icon: <FileTextOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
      tag: "Trading Performance",
      color: "blue",
      desc: "Estimates income and expenses over the planned periods, showing accounting profitability and gross margins.",
    },
    {
      title: "Forecast Balance Sheet",
      icon: <FundOutlined className="text-2xl text-teal-600 dark:text-teal-400" />,
      tag: "Financial Position",
      color: "cyan",
      desc: "Shows the expected position of assets, liabilities and equity at each future date, tracking net worth and debt obligations.",
    },
    {
      title: "Forecast Cash Flow Statement",
      icon: <DollarCircleOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
      tag: "Liquidity Timing",
      color: "green",
      desc: "Tracks exactly when money is expected to come in and go out, preventing profitable plans from causing funding shortages.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Integrated Statements
          </Tag>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What are the three parts of a three way forecast?
          </h2>
          <div className="mt-4 space-y-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            <p>
              The forecast profit and loss statement estimates income and expenses over the planned periods. The forecast balance sheet shows the expected position of assets, liabilities and equity at each date. The forecast cash flow statement tracks when money is expected to come in and go out. The three are linked: changes in trading activity, working capital, investment and finance affect more than one statement.
            </p>
            <p>
              For example, an equipment purchase may reduce cash and add an asset, while borrowing may add cash and a liability. Future repayments affect cash and the loan balance; depreciation affects accounting profit over time. A connected forecast helps keep those relationships consistent instead of treating a profit projection as a complete financing plan.
            </p>
            <p>
              The model should also reflect debtor collections, stock purchases and supplier payments where material. Sales recorded this month may be collected later. That timing can create a cash requirement even when the profit and loss forecast shows a positive result.
            </p>
          </div>
        </div>

        {/* 3 Statements Connected Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {threeStatements.map((st, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/50 border border-slate-200/80 dark:border-zinc-700/60 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-700 shadow-sm flex items-center justify-center">
                    {st.icon}
                  </div>
                  <Tag color={st.color} className="text-xs font-semibold m-0">
                    {st.tag}
                  </Tag>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {st.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal m-0">
                  {st.desc}
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-200/60 dark:border-zinc-700/60 flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <LinkOutlined />
                <span>Interconnected Dynamic Model</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
