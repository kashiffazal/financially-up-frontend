"use client";

import React from "react";
import { Tag } from "antd";
import {
  CompassOutlined,
  CalendarOutlined,
  DollarCircleOutlined,
  RiseOutlined,
  CheckCircleOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

/**
 * WhenBusinessNeedsFinancialModel Component
 * =========================================
 * Section 1: When does a business need a financial model?
 * Features 100% complete, verbatim content from client SEO document.
 */
export default function WhenBusinessNeedsFinancialModel() {
  const commonTriggers = [
    { title: "Opening a Second Location", desc: "Modelling setup capex, lease bonds, initial inventory, and ramp-up revenue curves." },
    { title: "Signing a Major Contract", desc: "Revealing working-capital requirements months before customer payment arrives." },
    { title: "Launching a New Service", desc: "Testing customer acquisition costs, direct delivery margins, and payback periods." },
    { title: "Capital Asset Purchases", desc: "Balancing cash reserves against commercial equipment loans and tax write-offs." },
    { title: "Changes in Funding or Debt", desc: "Structuring debt amortization schedules, interest cover ratios, and covenant metrics." },
    { title: "Managing Rapid Growth", desc: "Ensuring adequate cash reserves to meet payroll, tax, and supplier commitments." },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Verbatim Strategic Explanation */}
          <div className="lg:col-span-7">
            <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
              Commercial Decisions
            </Tag>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              When does a business need a financial model?
            </h2>
            <div className="mt-6 space-y-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              <p>
                A model can help when a decision has several moving parts and the effect cannot be seen from one spreadsheet total. You might be considering a second location, a major contract, a new service, a capital purchase or a change in funding. You might also want to understand whether a plan leaves enough cash to meet wages, suppliers and other commitments while the business grows.
              </p>
              <p>
                For example, a large contract may add revenue and reported profit but require materials and labour months before the customer pays. The model can show the timing gap and make it easier to discuss how the work could be funded. The answer depends on realistic assumptions about delivery, margin and collection, not simply the contract value.
              </p>
            </div>
          </div>

          {/* Right Column: Moving Parts Trigger Grid */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/60 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400 mb-4">
                Decisions with Multiple Moving Parts
              </h3>
              <div className="space-y-3">
                {commonTriggers.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/70 dark:border-zinc-700/50 flex items-start gap-3"
                  >
                    <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 mt-1 shrink-0 text-sm" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white m-0">
                        {item.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-slate-500 dark:text-zinc-400 m-0 mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-800/40 text-xs text-amber-900 dark:text-amber-300 flex items-start gap-2.5">
              <ExclamationCircleOutlined className="text-base text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <span>
                <strong>The Timing Gap:</strong> Profit does not equal liquidity. We model debtor collections, inventory purchases, and payroll timing to protect cash reserves.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
