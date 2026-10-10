"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  ExperimentOutlined,
  SlidersOutlined,
  UsergroupAddOutlined,
  DollarOutlined,
  HomeOutlined,
  ToolOutlined,
  ArrowRightOutlined,
  LineChartOutlined,
  CompassOutlined,
} from "@ant-design/icons";

/**
 * ScenarioPlanningForDecisions Component
 * =====================================
 * Section 6: Scenario planning for business decisions.
 * Source: 12th Pillar Business Advisory.docx (Page 3: Budgeting & Forecasting)
 *
 * Implements 100% complete, verbatim SEO text explaining how alternative scenarios
 * quantify risk and reveal financial consequences before committing capital,
 * with explicit cross-links to Cash Flow Management and Business Advisory Hub.
 */
export default function ScenarioPlanningForDecisions() {
  const scenarioOptions = [
    {
      icon: <DollarOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Sales & Volume Assumptions",
      desc: "Compare conservative, base-case, and stretch revenue targets across service lines.",
    },
    {
      icon: <UsergroupAddOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Staffing & Headcount Levels",
      desc: "Simulate onboarding timelines, training periods, and wage recovery rates before hiring.",
    },
    {
      icon: <SlidersOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Pricing & Fee Restructuring",
      desc: "Model the margin impact of price rises against potential customer volume sensitivity.",
    },
    {
      icon: <HomeOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Rent Commitments & Premises",
      desc: "Evaluate commercial lease commitments and relocation expenses over multi-year terms.",
    },
    {
      icon: <ToolOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Equipment Purchases & Capex",
      desc: "Test cash purchase versus chattel mortgage or asset lease financing options.",
    },
    {
      icon: <ExperimentOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Timing & Phase Options",
      desc: "Stagger strategic capital deployments across quarters to protect working capital.",
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
            Decision Support &amp; Risk Testing
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Scenario Planning for Business Decisions
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Forecasting can also be used to test alternative scenarios before a
            decision is made. A business may want to compare different sales
            assumptions, staffing levels, pricing changes, rent commitments,
            equipment purchases or timing options. Scenario analysis does not
            remove commercial risk, but it can show the financial consequences
            of the assumptions being considered.
          </p>
        </div>

        {/* 6 Scenario Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {scenarioOptions.map((opt, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-md hover:border-emerald-400/60 transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                {opt.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                {opt.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed m-0 font-normal">
                {opt.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Verbatim Supporting Cross-Link Banner */}
        <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-slate-50 dark:from-emerald-950/30 dark:via-zinc-950 dark:to-zinc-900 rounded-2xl p-7 sm:p-9 border border-emerald-200/80 dark:border-emerald-800/40 shadow-xs">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                <CompassOutlined />
                <span>Interconnected Advisory Scopes</span>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed m-0 font-normal">
                If the main concern is specifically the timing of receipts and
                payments, our{" "}
                <Link
                  href="/services/business-advisory/cash-flow-management"
                  className="font-semibold text-brand-primary dark:text-emerald-400 hover:underline"
                >
                  cash flow forecasting service
                </Link>{" "}
                focuses on liquidity and upcoming cash requirements. If the
                business needs a broader review of financial performance and
                management priorities, our{" "}
                <Link
                  href="/services/business-advisory"
                  className="font-semibold text-brand-primary dark:text-emerald-400 hover:underline"
                >
                  business advisory service
                </Link>{" "}
                may be more appropriate.
              </p>
            </div>

            <div className="shrink-0 flex flex-wrap gap-3">
              <Link href="/services/business-advisory/cash-flow-management">
                <Button
                  className="rounded-xl font-bold px-5 h-11 bg-white dark:bg-zinc-900 border-slate-200 dark:border-zinc-700 text-slate-800 dark:text-white"
                  icon={<LineChartOutlined />}
                >
                  Cash Flow Service
                </Button>
              </Link>
              <Link href="/book-an-appointment">
                <Button
                  type="primary"
                  icon={<ArrowRightOutlined />}
                  iconPlacement="end"
                  className="rounded-xl font-bold px-6 h-11 shadow-sm"
                >
                  Model a Scenario
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
