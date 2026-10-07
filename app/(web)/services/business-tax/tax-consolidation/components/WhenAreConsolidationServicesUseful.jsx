"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  ApartmentOutlined,
  BranchesOutlined,
  UsergroupAddOutlined,
  DisconnectOutlined,
  DollarCircleOutlined,
  CalculatorOutlined,
  HistoryOutlined,
  AuditOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * WhenAreConsolidationServicesUseful Component
 * ============================================
 * Section: When are tax consolidation services useful?
 * Verbatim text from Page 13 of client docx.
 * Features 8 common corporate group trigger scenarios.
 */
export default function WhenAreConsolidationServicesUseful() {
  const triggers = [
    {
      icon: <ApartmentOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "A holding company has acquired or is establishing wholly owned subsidiaries",
      desc: "Expanding corporate structures with new operating, property-holding, or intellectual property subsidiary entities.",
    },
    {
      icon: <BranchesOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "A group is considering whether to form a consolidated group",
      desc: "Weighing the irrevocable decision to consolidate against ongoing stand-alone entity filing requirements.",
    },
    {
      icon: <UsergroupAddOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "A new company, trust or partnership may join an existing consolidated group",
      desc: "Acquiring a new business or bringing existing group entities into an established consolidated tax group.",
    },
    {
      icon: <DisconnectOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "A subsidiary is being sold or otherwise leaving the group",
      desc: "Divesting a business unit or de-merging a subsidiary requiring exit tax-cost setting and liability allocations.",
    },
    {
      icon: <DollarCircleOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "The group has carried-forward tax losses or complex tax attributes",
      desc: "Managing continuity of ownership tests (COT), business continuity tests (BCT), and available fraction limits.",
    },
    {
      icon: <CalculatorOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "An acquisition requires tax cost-setting calculations",
      desc: "Performing detailed Allocable Cost Amount (ACA) calculations to reset tax cost bases of acquired business assets.",
    },
    {
      icon: <HistoryOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Historic consolidation records are incomplete or need review",
      desc: "Reconciling historical tax cost setting spreadsheets, entry ACA calculations, and missing ATO notices.",
    },
    {
      icon: <AuditOutlined className="text-xl text-cyan-600 dark:text-cyan-400" />,
      title: "The head company needs support with annual consolidated-group tax compliance",
      desc: "Preparing the consolidated company income tax return, head company schedules, and franking account updates.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50/50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Corporate Triggers
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            When are tax consolidation services useful?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Corporate groups encounter distinct inflection points where specialized consolidation advisory and calculations are essential.
          </p>
        </div>

        {/* 8 Triggers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12">
          {triggers.map((item, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 flex items-center justify-center shrink-0 mt-0.5">
                {item.icon}
              </div>
              <div className="space-y-1">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Prompt */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-brand-bg-lighter via-white to-slate-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border border-slate-200 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              Evaluate Your Group Consolidation Position
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Whether forming a new tax consolidated group or preparing annual head company returns, Financially Up provides clear statutory guidance.
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <Link href="/book-an-appointment">
              <Button
                type="primary"
                className="brand-btn-primary w-full md:w-auto text-xs sm:text-sm font-semibold rounded-xl"
                icon={<ArrowRightOutlined />}
                iconPosition="end"
              >
                Discuss Group Situation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
