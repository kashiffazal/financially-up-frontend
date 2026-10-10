"use client";

import React from "react";
import { Tag } from "antd";
import {
  FolderOpenOutlined,
  CheckCircleFilled,
  FileDoneOutlined,
} from "@ant-design/icons";

/**
 * InformationToPrepareCfo Component
 * =================================
 * Section 7: Information to prepare
 * Features 100% complete, verbatim content from client SEO document.
 */
export default function InformationToPrepareCfo() {
  const prepItems = [
    {
      title: "access to the accounting platform and recent management reports",
      desc: "Inviting your CFO to Xero, MYOB, or QuickBooks plus exporting past monthly reports.",
    },
    {
      title: "current budget or forecast, if one exists",
      desc: "Any spreadsheets, targets, or draft models your team currently references.",
    },
    {
      title: "banking, debt and major commitment information",
      desc: "Loan contracts, lease agreements, equipment finance schedules, and overdraft limits.",
    },
    {
      title: "key customer, supplier or staffing information that affects forecasts",
      desc: "Major client contracts, payment terms, key supplier price locks, and upcoming hiring plans.",
    },
    {
      title: "current business priorities and planned changes",
      desc: "Strategic goals, planned capital expenditures, new market rollouts, or operational reorganisations.",
    },
    {
      title: "existing KPIs, board reports or lender reports where relevant",
      desc: "Covenant compliance metrics, investor updates, or internal performance scorecards.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Client Onboarding Checklist
          </Tag>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Information to prepare
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            To design an outsourced finance arrangement tailored to your operating rhythm, having the following records ready accelerates the initial scoping discussion:
          </p>
        </div>

        {/* 6 Preparation Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {prepItems.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/50 border border-slate-200/80 dark:border-zinc-700/60 hover:bg-white dark:hover:bg-zinc-800 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100/60 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-mono font-bold text-sm">
                    0{index + 1}
                  </div>
                  <FileDoneOutlined className="text-lg text-slate-400 dark:text-zinc-500" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white capitalize mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal m-0">
                  {item.desc}
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-200/60 dark:border-zinc-700/60 flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <CheckCircleFilled className="text-xs" />
                <span>Essential Discovery Input</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
