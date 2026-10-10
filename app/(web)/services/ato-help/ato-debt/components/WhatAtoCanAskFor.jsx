"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileTextOutlined,
  FundViewOutlined,
  DollarCircleOutlined,
  LineChartOutlined,
  ProfileOutlined,
  AuditOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * WhatAtoCanAskFor Component
 * ==========================
 * Section 4: What information can the ATO ask for?
 * Verbatim text from Page 2 of '11th Pillar ATO Help.docx'.
 *
 * Outlines the financial disclosures required by the ATO for larger,
 * high-risk, or non-standard payment proposals.
 */
export default function WhatAtoCanAskFor() {
  const disclosureItems = [
    {
      icon: <ProfileOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Assets & Liabilities Statement",
      desc: "Complete summary of property, vehicles, investments, personal loans, business equipment, and existing commercial debt obligations.",
    },
    {
      icon: <DollarCircleOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Income & Expenditure Analysis",
      desc: "Documented average monthly revenue, fixed living or operating overheads, and verifiable discretionary cash flows.",
    },
    {
      icon: <AuditOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Bank Balances & Available Cash Flow",
      desc: "Current statements across all personal, business, trust, and credit card accounts showing liquid capital and working capital reserves.",
    },
    {
      icon: <LineChartOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Efforts to Raise Alternative Funds",
      desc: "Evidence of steps taken to obtain commercial bank refinancing, equity contributions, or private loan options before turning to ATO terms.",
    },
    {
      icon: <FileTextOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Management Accounts & Aged Ledgers",
      desc: "Up-to-date Profit & Loss and Balance Sheet, aged debtor receivables (collectability audit), and aged trade payables.",
    },
    {
      icon: <FundViewOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "12-Month Cash-Flow Forecast",
      desc: "A realistic rolling financial forecast demonstrating the capacity to service proposed debt instalments alongside upcoming tax bills.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="purple" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Financial Disclosure Requirements
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What information can the ATO ask for?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            For some arrangements—particularly larger, higher-risk or more complex matters—the ATO may ask for information about the taxpayer’s financial position. This can include assets and liabilities, income and expenditure, bank balances, available cash flow, steps taken to raise funds and the capacity to meet future tax obligations. A business may need current management accounts, aged receivables and payables, and a cash-flow forecast.
          </p>
        </div>

        {/* 6 Disclosure Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {disclosureItems.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-6 bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm hover:border-brand-emerald dark:hover:border-brand-emerald transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-zinc-800 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Verbatim Analytical Rationale Callout */}
        <div className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 shrink-0 border border-emerald-200/60 dark:border-emerald-800/60">
              <CheckCircleOutlined className="text-2xl" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                Why Detailed Figures Must Reconcile:
              </h4>
              <p className="text-xs sm:text-sm md:text-base text-slate-700 dark:text-zinc-300 leading-relaxed">
                The purpose is to assess whether the proposed arrangement is realistic. Figures should reconcile to the available records and the explanation should address seasonal income, one-off commitments and upcoming obligations where relevant. Unsupported estimates can undermine the proposal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
