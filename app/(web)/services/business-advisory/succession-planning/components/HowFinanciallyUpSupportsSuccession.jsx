"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  AimOutlined,
  FileSearchOutlined,
  DollarOutlined,
  ExperimentOutlined,
  CheckSquareOutlined,
  ArrowRightOutlined,
  LineChartOutlined,
} from "@ant-design/icons";

/**
 * HowFinanciallyUpSupportsSuccession Component
 * ============================================
 * Section 5: How Financially Up supports the process
 * Source: 12th Pillar Business Advisory.docx (Lines 526-528)
 *
 * Implements 100% complete, verbatim SEO text explaining our accounting role,
 * scenario modelling, data gap discovery, and flexible modular sequencing.
 */
export default function HowFinanciallyUpSupportsSuccession() {
  const supportSteps = [
    {
      icon: <AimOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Clarify Owner Objectives",
      desc: "Establishing target exit timing, post-handover involvement, and required capital realization.",
    },
    {
      icon: <DollarOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Accounts & Cash Flow Needs",
      desc: "Reviewing financial statements, working capital requirements, and ongoing retirement income draws.",
    },
    {
      icon: <FileSearchOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Identify Record Gaps",
      desc: "Uncovering documentation, contract, or ledger deficiencies before they derail negotiations.",
    },
    {
      icon: <ExperimentOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Model Transition Scenarios",
      desc: "Testing alternative structural pathways, vendor finance options, and post-transfer profitability.",
    },
    {
      icon: <CheckSquareOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Action Roadmap Tracking",
      desc: "Tracking pre-settlement milestones and preparing materials for solicitors, bankers, and buyers.",
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
            Advisory Partnership
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How Financially Up Supports the Process
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            We can help clarify the owner&apos;s goals, review financial
            statements and cash needs, identify gaps in records, model
            alternative transition scenarios and track the actions needed before
            a proposed handover. Our role as a succession planning accountant is
            to make the financial and tax issues visible and help you prepare
            for informed discussions with the other people and advisers
            involved.
          </p>
        </div>

        {/* 5 Support Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-12">
          {supportSteps.map((step, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-2xl bg-slate-50/70 dark:bg-zinc-950/70 border border-slate-200/80 dark:border-zinc-800 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between ${
                idx === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 flex items-center justify-center mb-3 text-lg">
                  {step.icon}
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed font-normal m-0">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pre-Sale Performance & Modular Scope Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-emerald-50/60 via-slate-50/40 to-white dark:from-emerald-950/20 dark:via-zinc-900 dark:to-zinc-950/40 border border-emerald-200/80 dark:border-emerald-800/50">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
            Tailored Scope Aligned to Your Specific Timeline
          </h3>
          <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal mb-6">
            If the proposed transition depends on maintaining performance before
            a sale, profitability consulting may help identify where results
            need closer analysis. We can also discuss whether a separate
            valuation or transaction engagement is appropriate. The scope and
            sequence should fit the decision, not a fixed template.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link href="/services/business-advisory/profitability">
              <Button
                type="default"
                icon={<LineChartOutlined />}
                className="rounded-xl font-semibold bg-white dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 text-xs sm:text-sm"
              >
                Profitability Consulting
              </Button>
            </Link>

            <Link href="/services/business-advisory/business-valuations">
              <Button
                type="default"
                icon={<ArrowRightOutlined />}
                className="rounded-xl font-semibold bg-white dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 text-xs sm:text-sm"
              >
                Business Valuations
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
