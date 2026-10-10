"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  ShopOutlined,
  UsergroupAddOutlined,
  TeamOutlined,
  BankOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  QuestionCircleOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";

/**
 * WhenBusinessValuationIsNeeded Component
 * =======================================
 * Section 1: When might you need a business valuation?
 * Source: 12th Pillar Business Advisory.docx (Page 5: Business Valuations)
 *
 * Implements 100% complete, verbatim SEO text detailing common commercial valuation drivers
 * and the fundamental questions regarding purpose, scope, date, and audience.
 */
export default function WhenBusinessValuationIsNeeded() {
  const commonReasons = [
    {
      icon: <ShopOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Preparing for a Business Sale",
      desc: "Establishing a realistic, evidence-backed commercial valuation range before bringing the business to market.",
    },
    {
      icon: <CheckCircleOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Considering an Acquisition",
      desc: "Testing an asking price, verifying maintainable earnings, and evaluating transaction terms for a prospective purchase.",
    },
    {
      icon: <UsergroupAddOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Bringing in a New Owner or Partner",
      desc: "Valuing an equity stake, partnership interest, or share issue for incoming directors and executive shareholders.",
    },
    {
      icon: <TeamOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Succession & Transition Planning",
      desc: "Establishing a fair commercial benchmark for intergenerational handovers, management buy-outs, or phased exits.",
    },
    {
      icon: <BankOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Investor or Lender Discussions",
      desc: "Informing external discussions with private equity, angel investors, or commercial lenders requiring structured figures.",
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
            Purpose &amp; Drivers
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            When Might You Need a Business Valuation?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Common reasons include preparing for a sale, considering an
            acquisition, bringing in a new owner, succession planning or
            testing whether a proposed price is reasonable. A valuation can also
            inform discussions with investors or lenders. Each purpose can
            require a different basis, date, level of investigation and
            documentation.
          </p>
        </div>

        {/* 5 Common Reasons Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {commonReasons.map((reason, idx) => (
            <div
              key={idx}
              className={`bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-md hover:border-emerald-400/60 transition-all duration-300 ${
                idx === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 flex items-center justify-center mb-4">
                {reason.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                {reason.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed m-0 font-normal">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Verbatim Paragraph 2 Feature Card: The First Question */}
        <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-slate-50 dark:from-emerald-950/30 dark:via-zinc-950 dark:to-zinc-900 rounded-2xl p-7 sm:p-10 border border-emerald-200/80 dark:border-emerald-800/40 shadow-xs mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 mb-2">
              <QuestionCircleOutlined />
              <span>Framing the Valuation Mandate</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              Beyond “What is My Business Worth?”
            </h3>
            <p className="mt-3 text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
              The first question is therefore not simply &ldquo;What is my business
              worth?&rdquo; It is &ldquo;What interest or assets are being valued, for
              whom, at what date and for what decision?&rdquo; We agree these points
              before selecting an approach or requesting extensive records.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-emerald-200/60 dark:border-emerald-800/40 text-xs">
            <div className="p-3 bg-white/80 dark:bg-zinc-900/80 rounded-lg border border-slate-200 dark:border-zinc-800 text-center font-medium text-slate-700 dark:text-zinc-300">
              What Interest / Asset?
            </div>
            <div className="p-3 bg-white/80 dark:bg-zinc-900/80 rounded-lg border border-slate-200 dark:border-zinc-800 text-center font-medium text-slate-700 dark:text-zinc-300">
              For Whom?
            </div>
            <div className="p-3 bg-white/80 dark:bg-zinc-900/80 rounded-lg border border-slate-200 dark:border-zinc-800 text-center font-medium text-slate-700 dark:text-zinc-300">
              At What Valuation Date?
            </div>
            <div className="p-3 bg-white/80 dark:bg-zinc-900/80 rounded-lg border border-slate-200 dark:border-zinc-800 text-center font-medium text-slate-700 dark:text-zinc-300">
              For What Decision?
            </div>
          </div>
        </div>

        {/* Action Row */}
        <div className="text-center">
          <Link href="/book-an-appointment">
            <Button
              type="primary"
              size="large"
              icon={<ArrowRightOutlined />}
              iconPlacement="end"
              className="rounded-xl font-bold px-7 h-12 shadow-md shadow-brand-primary/20"
            >
              Discuss Valuation Purpose
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
