"use client";

import React from "react";
import { Tag } from "antd";
import {
  SlidersOutlined,
  CalendarOutlined,
  TeamOutlined,
  ShopOutlined,
  BankOutlined,
  FieldTimeOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * ForecastInputsAndDrivers Component
 * ==================================
 * Section 3: What goes into a useful forecast?
 * Features 100% complete, verbatim content from client SEO document.
 */
export default function ForecastInputsAndDrivers() {
  const drivers = [
    {
      icon: <CalendarOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Seasonal demand and changes in product or service mix",
      desc: "Incorporating monthly fluctuations in demand, cyclic holidays, and shifts between high and low margin lines.",
    },
    {
      icon: <TeamOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Direct labour, materials and supplier terms",
      desc: "Tying cost of goods and staff wages directly to production, billable capacity, and negotiated supplier lead-times.",
    },
    {
      icon: <SlidersOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Fixed and variable operating costs",
      desc: "Separating unavoidable baseline overheads from scaling costs that expand as volume grows.",
    },
    {
      icon: <FieldTimeOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Customer payment timing, inventory and supplier payments",
      desc: "Modelling debtor ageing cycles (30, 60, 90+ days), stock holding lead times, and creditor cash outflows.",
    },
    {
      icon: <BankOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Capital purchases, loans and repayments",
      desc: "Factoring in initial deposits, monthly principal and interest obligations, balloon payments, and depreciation schedules.",
    },
    {
      icon: <CalendarOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "A suitable period and reporting frequency for the decision",
      desc: "Selecting rolling 12-month, 3-year, or 5-year horizons with monthly or quarterly detail matched to the commercial question.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <Tag color="blue" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Dynamic Model Drivers
          </Tag>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What goes into a useful forecast?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A sound model distinguishes an input from a result. You may provide expected sales volumes, pricing, staff numbers, debtor collection patterns and planned purchases; the model then calculates projected margins, cash balances and funding needs. Depending on the business, we may include:
          </p>
        </div>

        {/* 6 Model Drivers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {drivers.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/50 border border-slate-200/80 dark:border-zinc-700/60 hover:bg-white dark:hover:bg-zinc-800 hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-700 shadow-sm flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white capitalize mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal m-0">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Verbatim Business.gov.au Reference Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-blue-50/70 dark:bg-blue-950/20 border border-blue-200/70 dark:border-blue-800/40 text-sm sm:text-base text-blue-950 dark:text-blue-200 leading-relaxed">
          <p className="m-0 font-medium">
            <strong>Government Business Guidance:</strong> Business.gov.au explains that a cash flow statement can help forecast finances and identify potential shortages or surpluses. We keep cash projections separate from accounting profit, because an apparently profitable plan can still have a period of cash pressure.
          </p>
        </div>
      </div>
    </section>
  );
}
