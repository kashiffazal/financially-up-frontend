"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  RiseOutlined,
  ShopOutlined,
  UserAddOutlined,
  FileDoneOutlined,
  ToolOutlined,
  AppstoreAddOutlined,
  AlertOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * WhenBusinessNeedsGrowthAdvice Component
 * =======================================
 * Section 1: When does a business need growth advice?
 * Source: 12th Pillar Business Advisory.docx (Page 4: Business Growth)
 *
 * Implements 100% complete, verbatim SEO text detailing common expansion triggers,
 * the operational strain of rapid growth, and why irreversible commitments require financial clarity.
 */
export default function WhenBusinessNeedsGrowthAdvice() {
  const expansionTriggers = [
    {
      icon: <ShopOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Another Location or Site",
      desc: "Evaluating multi-site lease commitments, duplicate overheads, and initial fit-out capital.",
    },
    {
      icon: <UserAddOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "New Staff & Recruitment",
      desc: "Checking wage affordability, onboarding lead times, and productivity ramp-up periods.",
    },
    {
      icon: <FileDoneOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Winning a Larger Contract",
      desc: "Funding front-loaded materials and labor outlays before client invoice payments arrive.",
    },
    {
      icon: <ToolOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Additional Equipment",
      desc: "Analyzing machinery payback periods, finance leases, and productive capacity gains.",
    },
    {
      icon: <AppstoreAddOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Launching a New Service",
      desc: "Modeling unit economics, direct cost structures, and break-even sales thresholds.",
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
            Growth Triggers &amp; Timing
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            When Does a Business Need Growth Advice?
          </h2>
        </div>

        {/* 2 Primary Verbatim Text Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mb-12">
          {/* Card 1: Expansion Decisions & Busy Owner Trap */}
          <div className="bg-slate-50/80 dark:bg-zinc-950/80 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-4">
                <RiseOutlined />
                <span>Expansion Pressures &amp; Bottlenecks</span>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
                You may be considering another location, new staff, a larger
                contract, additional equipment or a new service. You may
                already be growing but find that cash is tighter and the owner
                is busier. Both situations benefit from a closer look at
                margins, capacity and working capital.
              </p>
            </div>
            <div className="mt-6 pt-5 border-t border-slate-200 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400">
              When revenue increases while cash reserves decrease, margins need immediate review.
            </div>
          </div>

          {/* Card 2: Hard-to-Reverse Commitments */}
          <div className="bg-slate-50/80 dark:bg-zinc-950/80 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 mb-4">
                <AlertOutlined />
                <span>Irreversible Commitments &amp; Affordability</span>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
                There is no set turnover at which an adviser becomes useful. A
                small business growth consultant can be most valuable when a
                decision requires money or commitments that are hard to
                reverse. The aim is to establish what the business can afford,
                which outcomes matter and how progress will be measured.
              </p>
            </div>
            <div className="mt-6 pt-5 border-t border-slate-200 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400">
              Clarity on what the balance sheet can afford before entering binding commitments.
            </div>
          </div>
        </div>

        {/* 5 Expansion Scenarios Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {expansionTriggers.map((trig, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-950 rounded-2xl p-5 border border-slate-200/80 dark:border-zinc-800 shadow-2xs hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                {trig.icon}
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                {trig.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed m-0 font-normal">
                {trig.desc}
              </p>
            </div>
          ))}
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
              Evaluate Your Growth Move
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
