"use client";

import React from "react";
import { Tag, Button } from "antd";
import {
  RiseOutlined,
  UsergroupAddOutlined,
  SafetyCertificateOutlined,
  ApartmentOutlined,
  BranchesOutlined,
  SwapOutlined,
  WarningOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import Link from "next/link";

/**
 * WhenToReviewStructure Component
 * ===============================
 * Section 6: When Should You Review an Existing Structure?
 *
 * Details the 6 primary business triggers that prompt a structure review,
 * and warns about tax, CGT, GST, and stamp duty implications of restructuring.
 *
 * Background: Clean White.
 */
export default function WhenToReviewStructure() {
  const reviewTriggers = [
    {
      icon: <RiseOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Revenue Growth & Higher Tax Brackets",
      description:
        "As sole trader or partnership profits expand into top individual tax rates (up to 47%), moving to a company structure can allow retained profits at 25% corporate rates.",
      tag: "Tax Optimization",
    },
    {
      icon: <SafetyCertificateOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Increasing Commercial Liability",
      description:
        "Taking on significant supplier debt, entering commercial premises leases, or undertaking high-risk projects increases the urgency of limited liability company protection.",
      tag: "Asset Protection",
    },
    {
      icon: <UsergroupAddOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Admitting New Partners or Investors",
      description:
        "Introducing co-founders, angel investors, or offering employee share options requires a formal share-based corporate entity rather than a personal arrangement.",
      tag: "Equity & Ownership",
    },
    {
      icon: <ApartmentOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Separating Operating Risk from Assets",
      description:
        "When purchasing commercial property, heavy machinery, or valuable intellectual property, establishing an asset-holding trust separate from the trading entity protects core wealth.",
      tag: "Holding Entities",
    },
    {
      icon: <BranchesOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Succession, Sale, or Exit Planning",
      description:
        "Preparing the enterprise for a trade sale or family handover. Structuring cleanly early helps maximize eligibility for CGT Small Business 15-year or 50% concessions.",
      tag: "Exit Readiness",
    },
    {
      icon: <SwapOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Sole Trader to Company Roll-Over",
      description:
        "Transitioning an active sole trader business into an incorporated entity without triggering punitive tax, utilizing available statutory restructure roll-overs.",
      tag: "Entity Roll-Over",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <Tag color="green" className="brand-section-tag">
            Lifecycle & Evolution
          </Tag>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.2]">
            When Should You Review an Existing Structure?
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            A structure that suited a new venture may become inefficient or risky as the business expands. Reviewing your setup ensures your entity continues to protect your personal assets and align with commercial goals.
          </p>
        </div>

        {/* 6 Trigger Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {reviewTriggers.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/80 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-500/40 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-white dark:bg-zinc-800 shadow-2xs flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200/60 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 font-mono">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed m-0 font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Restructure Warning & Statutory Concessions Banner */}
        <div className="rounded-2xl bg-amber-50/80 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/50 p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center shrink-0 mt-1">
                <WarningOutlined className="text-amber-700 dark:text-amber-400 text-lg" />
              </div>
              <div className="space-y-1 max-w-3xl">
                <h4 className="text-base font-bold text-amber-950 dark:text-amber-200 m-0">
                  Review Tax & Legal Consequences Before Implementing Any Restructure
                </h4>
                <p className="text-xs sm:text-sm text-amber-900/90 dark:text-amber-300/90 leading-relaxed m-0">
                  Transferring business assets, customer goodwill, or intellectual property from one entity to another can trigger capital gains tax (CGT), GST liabilities, and state stamp duty. However, eligible businesses may access statutory relief such as the <strong>Small Business Restructure Roll-over (SBRR)</strong>. Always conduct a formal review prior to executing transfers.
                </p>
              </div>
            </div>

            <div className="shrink-0 flex flex-wrap items-center gap-3">
              <Link href="/book-an-appointment">
                <Button
                  type="primary"
                  size="large"
                  icon={<ArrowRightOutlined />}
                  iconPosition="end"
                  className="h-11 px-6 rounded-xl font-semibold shadow-md shadow-brand-primary/20"
                >
                  Book Restructure Review
                </Button>
              </Link>
              <Link href="/services/business-structures/business-restructure">
                <Button
                  size="large"
                  className="h-11 px-5 rounded-xl font-semibold border-amber-300 dark:border-amber-800 text-amber-950 dark:text-amber-200 hover:bg-amber-100/50 dark:hover:bg-amber-900/30"
                >
                  Restructure Advisory
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
