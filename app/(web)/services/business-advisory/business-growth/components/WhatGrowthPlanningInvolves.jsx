"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  AuditOutlined,
  DollarOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  FileDoneOutlined,
  SlidersOutlined,
  LineChartOutlined,
  WarningOutlined,
} from "@ant-design/icons";

/**
 * WhatGrowthPlanningInvolves Component
 * =====================================
 * Section 2: What does business growth planning involve?
 * Source: 12th Pillar Business Advisory.docx (Page 4: Business Growth)
 *
 * Implements 100% complete, verbatim SEO text detailing how growth plans connect
 * ambitions to actual working capital resources, the contract-delivery cash lag example,
 * and creating focused, actionable plans that avoid unnecessary bureaucracy.
 */
export default function WhatGrowthPlanningInvolves() {
  const planElements = [
    {
      title: "Product & Customer Focus",
      desc: "Identifying high-margin service lines and profitable client segments rather than chasing unvetted volume.",
    },
    {
      title: "Capacity Planning",
      desc: "Calculating the exact operational, staffing, and machinery bandwidth needed before scaling delivery.",
    },
    {
      title: "Expected Return on Capital",
      desc: "Establishing target margins, payback horizons, and clear commercial hurdle rates for the investment.",
    },
    {
      title: "Structured Review Rhythm",
      desc: "Agreeing milestone dates and operational metrics to review actual performance against the growth plan.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50/70 dark:bg-zinc-950/70 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Planning Methodology
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Does Business Growth Planning Involve?
          </h2>
        </div>

        {/* 2 Primary Verbatim Text Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Grounded in Accounts & Operating Facts */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-4">
                <AuditOutlined />
                <span>Financial Viability &amp; Stress Testing</span>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
                We begin with the accounts and the operating facts. Revenue
                trends, gross margin, overheads, debtor collection, stock and
                debt commitments can show whether a promising idea is
                financially workable. We then examine what would change if
                sales, prices, costs or timing differ from your expectations.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-100 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400">
              Validating strategic ideas against actual balance sheet capacity.
            </div>
          </div>

          {/* Card 2: The Contract Growth Lag Example */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 mb-4">
                <DollarOutlined />
                <span>Connecting Goals to Working Capital</span>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
                An effective growth plan connects a goal to the resources it
                needs. For example, winning a larger contract may require extra
                labour and materials before the customer pays. The contract can
                be profitable on paper yet create a cash shortage during
                delivery. A cash flow forecast helps reveal that gap and the
                funding required to manage it.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-100 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400">
              Profitable contracts can fail without adequate delivery funding.
            </div>
          </div>
        </div>

        {/* Verbatim Paragraph 3 Feature Card: Focused Decisions, Not Unread Documents */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-10 border border-slate-200/80 dark:border-zinc-800 shadow-xs mb-12">
          <div className="max-w-3xl mb-8">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-2">
              <CheckCircleOutlined />
              <span>Tailored Complexity &amp; Actionability</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              A Plan Built to Be Executed, Not Filed Away
            </h3>
            <p className="mt-3 text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
              Your plan might include a small number of decisions: which
              products or customers to focus on, what capacity needs to be
              added, what return is expected and when to review the results.
              The detail should match the size and complexity of the business
              rather than become a document no one uses.
            </p>
          </div>

          {/* 4 Decision Focus Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {planElements.map((el, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200/70 dark:border-zinc-800/80"
              >
                <div className="text-xs font-bold uppercase text-emerald-700 dark:text-emerald-400 mb-1">
                  Focus 0{idx + 1}
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                  {el.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed m-0 font-normal">
                  {el.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section Action Row */}
        <div className="text-center">
          <Link href="/book-an-appointment">
            <Button
              type="primary"
              size="large"
              icon={<ArrowRightOutlined />}
              iconPlacement="end"
              className="rounded-xl font-bold px-7 h-12 shadow-md shadow-brand-primary/20"
            >
              Build a Practical Growth Plan
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
