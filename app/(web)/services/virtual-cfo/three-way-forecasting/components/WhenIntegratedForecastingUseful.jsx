"use client";

import React from "react";
import { Tag } from "antd";
import {
  BankOutlined,
  CompassOutlined,
  DollarCircleOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * WhenIntegratedForecastingUseful Component
 * ========================================
 * Section 2: When is integrated forecasting useful?
 * Features 100% complete, verbatim content from client SEO document.
 */
export default function WhenIntegratedForecastingUseful() {
  const triggerMoments = [
    { title: "Opening a New Site", desc: "Balancing fit-out leases, asset depreciation, and initial operating deficits." },
    { title: "Significant Headcount Growth", desc: "Understanding the lag between payroll liabilities and customer payments." },
    { title: "Securing Major Commercial Contracts", desc: "Evaluating upfront inventory purchasing against milestone invoicing." },
    { title: "Equipment & Asset Financing", desc: "Linking capex asset value, debt liabilities, and cash loan payments." },
    { title: "Discussions with Lenders & Banks", desc: "Supplying comprehensive 3-way balance sheet and debt-coverage covenants." },
    { title: "Managing Material Debt & Inventory", desc: "Navigating uneven cash receipts and working capital fluctuations." },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <Tag color="blue" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Strategic Use Cases
          </Tag>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            When is integrated forecasting useful?
          </h2>
          <div className="mt-4 space-y-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            <p>
              A three way forecast is useful when management needs to understand how a decision changes both results and financial position. This may arise before a new site, significant hiring, a major contract, equipment financing or discussions with a lender. It can also support a recurring planning cycle when a business has material debt, inventory or uneven cash receipts.
            </p>
            <p>
              Not every decision needs three statements. A short-term cash question may be answered by a focused cash flow forecast; the additional balance sheet work is useful when assets, debt, working capital and retained results materially affect the plan. Our three statement forecasting services are scoped to the purpose, period and level of detail needed.
            </p>
          </div>
        </div>

        {/* Triggers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {triggerMoments.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-mono font-bold text-blue-600 dark:text-blue-400 block mb-2">
                  Application 0{idx + 1}
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal m-0">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Business.gov.au Reference Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed">
          <p className="m-0 font-medium">
            <strong>Government Business Guidance:</strong> Business.gov.au explains that a cash flow forecast can be prepared from estimated figures for future periods, and that cash statements help identify potential shortages and surpluses. Connecting that cash view to projected profit and financial position provides a broader picture, while still depending on the quality of the inputs.
          </p>
        </div>
      </div>
    </section>
  );
}
