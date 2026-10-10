"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  DollarOutlined,
  LineChartOutlined,
  ToolOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  TeamOutlined,
  ShopOutlined,
  FileProtectOutlined,
} from "@ant-design/icons";

/**
 * ProfitCashFlowAndCapacity Component
 * ====================================
 * Section 3: Profit, cash flow and capacity are different questions.
 * Source: 12th Pillar Business Advisory.docx (Page 4: Business Growth)
 *
 * Implements 100% complete, verbatim SEO text distinguishing profit, liquidity,
 * and operational capacity, referencing Australian Government cash flow guidance,
 * and addressing operational management demands created by expansion.
 */
export default function ProfitCashFlowAndCapacity() {
  const threePillars = [
    {
      icon: <DollarOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
      title: "1. Profit",
      subtitle: "Trading Results Over Time",
      desc: "Measures trading margin after accounting for revenue and earned expenses. However, paper profit cannot pay next week's wages without cleared funds.",
    },
    {
      icon: <LineChartOutlined className="text-2xl text-teal-600 dark:text-teal-400" />,
      title: "2. Cash Flow",
      subtitle: "Bank Balance Timing",
      desc: "Tracks exactly when customer money clears and supplier outlays leave the bank account. Slow-paying debtors or stock build-ups drain liquidity rapidly.",
    },
    {
      icon: <ToolOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
      title: "3. Capacity",
      subtitle: "Operational Bandwidth",
      desc: "Encompasses staffing, supervision, inventory systems, and premises throughput. Operating over capacity leads to errors, delays, and margin erosion.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Core Commercial Dynamics
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Profit, Cash Flow and Capacity are Different Questions
          </h2>
        </div>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {threePillars.map((pil, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-7 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 flex items-center justify-center mb-4">
                  {pil.icon}
                </div>
                <div className="text-xs font-bold uppercase text-emerald-700 dark:text-emerald-400 mb-1">
                  {pil.subtitle}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                  {pil.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed m-0 font-normal">
                  {pil.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 2 Verbatim Text Cards (Gov Guidance on Cash + Data Completeness) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Paragraph 1 */}
          <div className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-3">
                <LineChartOutlined />
                <span>Australian Government Business Guidance</span>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
                Profit measures the result of trading over a period; cash flow
                tracks when money actually arrives and leaves. Both matter. A
                business can report a profit while carrying slow-paying
                debtors, large inventory or tax amounts due before receipts
                arrive. The Australian Government&apos;s business guidance recommends
                forecasting cash flow when testing changes to operations.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-200 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400">
              Cash flow forecasts test whether working capital survives the expansion.
            </div>
          </div>

          {/* Paragraph 2 */}
          <div className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 mb-3">
                <CheckCircleOutlined />
                <span>Data Integrity Before Projections</span>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
                We can review management reports and build a forecast based on
                known commitments and reasonable scenarios. We can also assess
                whether the bookkeeping provides timely figures. If the
                underlying data is incomplete, part of the work is to establish
                reliable information before relying on a projection.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-200 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400">
              Projections must be anchored in reconciled historical data.
            </div>
          </div>
        </div>

        {/* Verbatim Paragraph 3 Feature Banner: Operational Demands of Growth */}
        <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-slate-50 dark:from-emerald-950/30 dark:via-zinc-950 dark:to-zinc-900 rounded-2xl p-7 sm:p-9 border border-emerald-200/80 dark:border-emerald-800/40 shadow-xs mb-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                <TeamOutlined />
                <span>Managing Operational Demands</span>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed m-0 font-normal">
                Growth also creates operational demands. Hiring may need
                payroll processes and supervision; expanding locations may need
                stock controls and consistent reporting. Financially Up can
                address the accounting, tax and financial management
                implications and help identify operational or legal questions
                for other advisers.
              </p>
            </div>

            <div className="shrink-0">
              <Link href="/book-an-appointment">
                <Button
                  type="primary"
                  icon={<ArrowRightOutlined />}
                  iconPlacement="end"
                  className="rounded-xl font-bold px-6 h-11"
                >
                  Plan Capacity Scaling
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
