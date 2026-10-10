"use client";

import React from "react";
import { Tag } from "antd";
import {
  DashboardOutlined,
  EyeOutlined,
  AppstoreOutlined,
  BankOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * WhenFinanceDashboardHelps Component
 * ===================================
 * Section 1: When does a finance dashboard help?
 * Features 100% complete, verbatim content from client SEO document.
 */
export default function WhenFinanceDashboardHelps() {
  const personas = [
    {
      title: "Business Owner Watching Cash",
      role: "Liquidity Oversight",
      icon: <EyeOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      tag: "Cash & Buffer",
      desc: "Needs daily or weekly customer receipts, unpaid debtor invoices, and upcoming payroll/tax commitments.",
    },
    {
      title: "Management Team Allocating Capacity",
      role: "Operations & Efficiency",
      icon: <AppstoreOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      tag: "Margins & Work",
      desc: "Requires gross margin and productivity by activity or service line, measured consistently across periods.",
    },
    {
      title: "Board & Advisory Committee",
      role: "Governance & Strategy",
      icon: <BankOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      tag: "Macro Trend",
      desc: "Needs a high-level performance picture with executive commentary, benchmarks, and a defined monthly reporting date.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Visual Clarity
          </Tag>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            When does a finance dashboard help?
          </h2>
          <div className="mt-4 space-y-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            <p>
              You may be receiving accounting reports but still struggle to find the key movements. You may oversee several services or locations, need a quicker view of cash and margin, or want managers to discuss the same numbers. Financial reporting dashboard services can help when a short, repeatable summary would make regular reviews more useful.
            </p>
            <p>
              The dashboard should match the decisions. An owner watching short-term cash may need receipts, unpaid invoices and upcoming commitments. A management team deciding how to allocate capacity may need margin and productivity by activity, provided those figures can be measured consistently. A board may need a higher-level picture with commentary and a defined reporting date.
            </p>
          </div>
        </div>

        {/* Persona Decision Alignment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {personas.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/50 border border-slate-200/80 dark:border-zinc-700/60 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-700 shadow-sm flex items-center justify-center">
                    {item.icon}
                  </div>
                  <Tag color="cyan" className="text-xs font-semibold m-0">
                    {item.tag}
                  </Tag>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-3">
                  {item.role}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal m-0">
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
