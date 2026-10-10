"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  ShopOutlined,
  HomeOutlined,
  RocketOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * WhenMightTrustAbnBeRequired Component
 * =====================================
 * Section: When might trust ABN registration be required?
 * Verbatim text from Page 10 of client docx (8th Pillar Trust Services.docx).
 * Covers enterprise activities, commercial business commencement, property leasing,
 * and cross-links to Family Trust and Unit Trust service pages.
 */
export default function WhenMightTrustAbnBeRequired() {
  const situations = [
    {
      icon: <ShopOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Family Trust Commencing a Business",
      desc: "Where a discretionary family trust operates an active commercial business, provides goods or services, or engages in trading operations within Australia.",
    },
    {
      icon: <RocketOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Unit Trust Commercial Activities",
      desc: "Where a fixed unit trust undertakes commercial undertakings, syndicated investments, joint ventures, or active commercial operations requiring an ABN.",
    },
    {
      icon: <HomeOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Leasing or Renting Property",
      desc: "Enterprise activities can include, in some circumstances, leasing or renting property. The facts matter, so an ABN should not be obtained merely because a trust exists.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950/60 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Enterprise Qualification
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            When might trust ABN registration be required?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            ABN entitlement depends on the trust&apos;s activities. A trust may be entitled to an ABN where it is
            carrying on or starting an enterprise in Australia. Enterprise activities can include operating a business
            and, in some circumstances, leasing or renting property. The facts matter, so an ABN should not be obtained
            merely because a trust exists.
          </p>
        </div>

        {/* 3 Situations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {situations.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Context Callout with Cross-Links to Family Trust & Unit Trust */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <CheckCircleOutlined className="text-teal-600 dark:text-teal-400" />
              Establishing Trusts as Part of a Wider Commercial Structure
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Common situations where a trust ABN application may need to be considered include a family trust commencing
              a business, a unit trust undertaking commercial activities, or an established trust beginning activities
              that amount to an enterprise. If the trust is being established as part of a wider structure, our{" "}
              <Link
                href="/services/trusts/family-trust"
                className="text-teal-600 dark:text-teal-400 font-semibold hover:underline"
              >
                Family Trust service
              </Link>{" "}
              and{" "}
              <Link
                href="/services/trusts/unit-trust"
                className="text-teal-600 dark:text-teal-400 font-semibold hover:underline"
              >
                Unit Trust service
              </Link>{" "}
              explain the accounting and tax context for those structures separately.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
            <Link
              href="/services/trusts/family-trust"
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 dark:text-zinc-200 bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700 transition-colors"
            >
              Family Trust Hub <ArrowRightOutlined className="ml-2 text-xs" />
            </Link>
            <Link
              href="/services/trusts/unit-trust"
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 dark:text-zinc-200 bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700 transition-colors"
            >
              Unit Trust Hub <ArrowRightOutlined className="ml-2 text-xs" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
