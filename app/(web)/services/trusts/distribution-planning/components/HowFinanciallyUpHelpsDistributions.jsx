"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  CalculatorOutlined,
  FileDoneOutlined,
  ApartmentOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * HowFinanciallyUpHelpsDistributions Component
 * ===========================================
 * Section: How Financially Up can help
 * Verbatim text from Page 11 of client docx (8th Pillar Trust Services.docx).
 * Covers management figures review, year-end estimation, resolution accounting coordination,
 * reconciliation with annual returns, and link to Trust Tax Returns service.
 */
export default function HowFinanciallyUpHelpsDistributions() {
  const services = [
    {
      icon: <CalculatorOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Prepare & Review Management Figures",
      desc: "Financially Up can prepare or review management figures and estimate the trust's year-end position before 30 June.",
    },
    {
      icon: <ApartmentOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Identify Tax Issues & Coordinate Resolutions",
      desc: "Identify tax issues affecting potential distributions and coordinate the accounting information for the trustee's resolution.",
    },
    {
      icon: <FileDoneOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Tax Return Reconciliation",
      desc: "Ensure the final distribution records can be reconciled with the annual trust tax return. Where specialist legal or financial-product advice is required, that work is separately scoped.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950/60 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Professional Assistance
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How Financially Up can help
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Financially Up can prepare or review management figures, estimate the trust&apos;s year-end position, identify
            tax issues affecting potential distributions, coordinate the accounting information for the trustee&apos;s
            resolution, and ensure the final distribution records can be reconciled with the annual trust tax return.
            Where specialist legal or financial-product advice is required, that work is separately scoped.
          </p>
        </div>

        {/* 3 Service Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {services.map((item, idx) => (
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

        {/* Cross-Link Callout to Trust Tax Returns */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <CheckCircleOutlined className="text-teal-600 dark:text-teal-400" />
              Annual Preparation &amp; Lodgement Work
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              After year end, the actual accounts and tax return need to reflect the trustee&apos;s valid resolution and
              the trust&apos;s final income. Our{" "}
              <Link
                href="/services/trusts/trust-tax-returns"
                className="text-teal-600 dark:text-teal-400 font-semibold hover:underline"
              >
                Trust Tax Returns service
              </Link>{" "}
              covers the annual preparation and lodgement work.
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <Link
              href="/services/trusts/trust-tax-returns"
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 dark:text-zinc-200 bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700 transition-colors w-full md:w-auto"
            >
              Trust Tax Returns Hub <ArrowRightOutlined className="ml-2 text-xs" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
