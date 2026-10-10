"use client";

import React from "react";
import {
  CreditCardOutlined,
  FileSyncOutlined,
  TeamOutlined,
  DisconnectOutlined,
  DollarOutlined,
} from "@ant-design/icons";

/**
 * WhyBasLodgmentsBecomeOverdue Component
 * =====================================
 * Section 2: 5 frequent causes why business activity statements fall behind:
 * unreconciled banking, poor GST coding, STP payroll discrepancies, dormant ABNs, and payment avoidance.
 */
export default function WhyBasLodgmentsBecomeOverdue() {
  const causes = [
    {
      title: "Unreconciled Bank & Card Feeds",
      desc: "bank and credit-card transactions have not been reconciled for several months or quarters",
      icon: <CreditCardOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
    },
    {
      title: "Incomplete or Inconsistent Records",
      desc: "sales or expense records are incomplete, duplicated or coded inconsistently",
      icon: <FileSyncOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
    },
    {
      title: "Payroll & PAYGW Discrepancies",
      desc: "payroll and PAYG withholding figures need to be reconciled before the BAS is prepared",
      icon: <TeamOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
    },
    {
      title: "Dormant Registrations Left Open",
      desc: "the business stopped trading but GST or other registrations were not reviewed",
      icon: <DisconnectOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
    },
    {
      title: "Tax Debt Avoidance",
      desc: "the owner avoided lodging because they expected a tax debt they could not pay immediately.",
      icon: <DollarOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-2">
            Root Causes
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Why do BAS lodgments become overdue?
          </h2>
          <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
            Common causes include unreconciled accounts, incomplete sales or expense records, payroll differences, uncertain GST coding and inactive periods where registrations remained open.
          </p>
        </div>

        {/* 5 Causes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {causes.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 hover:border-emerald-500 dark:hover:border-emerald-500 shadow-sm transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between ${
                idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
