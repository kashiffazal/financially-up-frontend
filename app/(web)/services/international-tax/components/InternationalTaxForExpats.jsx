"use client";

import React from "react";
import { Tag, Button } from "antd";
import {
  TeamOutlined,
  CheckCircleOutlined,
  CalendarOutlined,
  DollarOutlined,
  LineChartOutlined,
  HomeOutlined,
  AuditOutlined,
  GlobalOutlined,
  FileDoneOutlined,
  SafetyCertificateOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import Link from "next/link";

/**
 * InternationalTaxForExpats Component
 * ===================================
 * Section 5: International Tax for Expats
 *
 * Implements the exact copy from Section 1 of the SEO document:
 * - When an expat tax accountant is required
 * - The 8 core factors considered in an international tax review
 * - The golden rule: residency reviewed on actual facts, not visa/passport/day assumptions
 *
 * Background: Clean White
 */
export default function InternationalTaxForExpats() {
  /**
   * The 8 Considerations for an International Tax Review (Exact from document)
   */
  const reviewConsiderations = [
    {
      icon: <CalendarOutlined className="text-teal-600 dark:text-teal-400 text-lg" />,
      title: "Residency Timing",
      text: "When Australian tax residency started or ended",
    },
    {
      icon: <DollarOutlined className="text-blue-600 dark:text-blue-400 text-lg" />,
      title: "Income Apportionment",
      text: "Australian and foreign income during different periods",
    },
    {
      icon: <LineChartOutlined className="text-emerald-600 dark:text-emerald-400 text-lg" />,
      title: "Offshore Portfolios",
      text: "Foreign investments",
    },
    {
      icon: <HomeOutlined className="text-purple-600 dark:text-purple-400 text-lg" />,
      title: "Real Estate",
      text: "Property ownership",
    },
    {
      icon: <AuditOutlined className="text-amber-600 dark:text-amber-400 text-lg" />,
      title: "Capital Gains",
      text: "Capital gains tax considerations",
    },
    {
      icon: <SafetyCertificateOutlined className="text-rose-600 dark:text-rose-400 text-lg" />,
      title: "Foreign Tax Offsets",
      text: "Foreign tax already paid",
    },
    {
      icon: <GlobalOutlined className="text-cyan-600 dark:text-cyan-400 text-lg" />,
      title: "Bilateral Treaties",
      text: "Applicable tax treaties",
    },
    {
      icon: <FileDoneOutlined className="text-indigo-600 dark:text-indigo-400 text-lg" />,
      title: "Compliance Records",
      text: "Documentation and record keeping",
    },
  ];

  /**
   * 4 Expat Personas from verbatim document text
   */
  const expatExamples = [
    "Australians working overseas",
    "People returning to Australia after several years abroad",
    "Temporary residents working in Australia",
    "Foreign nationals who have established significant ties here",
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <Tag color="green" className="brand-section-tag">
            Expat Tax Advisory
          </Tag>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.2]">
            International Tax for Expats
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            An expat tax accountant Australia service is often required where a person has connections with both Australia and another country. Examples include Australians working overseas, people returning to Australia after several years abroad, temporary residents working in Australia and foreign nationals who have established significant ties here.
          </p>
        </div>

        {/* 4 Expat Profile Chips */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12">
          {expatExamples.map((example, idx) => (
            <div
              key={idx}
              className="p-3.5 sm:p-4 rounded-xl bg-slate-50 dark:bg-zinc-900/70 border border-slate-200/80 dark:border-zinc-800 flex items-center gap-3"
            >
              <TeamOutlined className="text-teal-600 dark:text-teal-400 text-base shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-zinc-200">
                {example}
              </span>
            </div>
          ))}
        </div>

        {/* 8 Review Considerations Grid */}
        <div className="rounded-2xl bg-slate-50/70 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800 p-6 sm:p-8 lg:p-10 mb-10">
          <div className="max-w-2xl mb-8">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              An international tax review may consider:
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 m-0">
              Cross-border situations require examining both domestic tax law and international treaties to ensure complete accuracy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
            {reviewConsiderations.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-500/40 hover:shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-zinc-800 flex items-center justify-center mb-3.5">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider block mb-1">
                    {item.title}
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-zinc-200 m-0 leading-snug">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Golden Principle Reassurance Callout (Verbatim from document) */}
          <div className="p-5 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 text-lg mt-0.5 shrink-0" />
              <p className="text-xs sm:text-sm font-semibold text-emerald-950 dark:text-emerald-200 m-0 leading-relaxed">
                Residency should be reviewed based on the actual facts rather than assumptions based on a visa, passport or number of days alone.
              </p>
            </div>
            <Link href="/book-an-appointment" className="shrink-0">
              <Button
                type="primary"
                icon={<ArrowRightOutlined />}
                iconPlacement="end"
                className="font-semibold h-9 px-4 rounded-lg shadow-2xs"
              >
                Discuss Your Position
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
