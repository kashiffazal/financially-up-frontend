"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  SafetyCertificateOutlined,
  CalendarOutlined,
  DollarCircleOutlined,
  RetweetOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * HowTheFourConcessionsDiffer Component
 * =====================================
 * Section: How the four concessions differ
 * Verbatim text from Page 12 of client docx.
 * Covers in full verbatim detail:
 * 1. 15-year exemption (lines 772–773)
 * 2. 50% active asset reduction (lines 774–775)
 * 3. Retirement exemption (lines 776–777)
 * 4. Small business rollover (lines 778–779)
 * Concludes with verbatim link to Capital Gains Tax page (line 780).
 */
export default function HowTheFourConcessionsDiffer() {
  const concessions = [
    {
      icon: <CalendarOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "15-year exemption",
      tag: "Total Disregard",
      tagColor: "cyan",
      content:
        "This concession can disregard an eligible capital gain where the asset has been continuously owned for at least 15 years and additional requirements are met. For an individual, this includes conditions connected with retirement at age 55 or over, or permanent incapacity. Companies and trusts have further stakeholder requirements.",
    },
    {
      icon: <DollarCircleOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "50% active asset reduction",
      tag: "50% Tax Cut",
      tagColor: "emerald",
      content:
        "Where the conditions are satisfied, this concession can reduce an eligible capital gain by 50%. It is distinct from the general CGT discount, and companies are not entitled to the general CGT discount.",
    },
    {
      icon: <SafetyCertificateOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Retirement exemption",
      tag: "Lifetime Limit ($500k)",
      tagColor: "blue",
      content:
        "The retirement exemption can disregard eligible capital gains up to a lifetime limit under the legislation. Additional payment and superannuation requirements can apply, including where the relevant individual is under 55.",
    },
    {
      icon: <RetweetOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Small business rollover",
      tag: "Tax Deferral",
      tagColor: "orange",
      content:
        "The rollover can defer all or part of an eligible capital gain. Later CGT consequences can arise depending on what happens with replacement assets or other rollover conditions.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50/50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Comparative Breakdown
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How the four concessions differ
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Each concession provides a distinct tax mechanism to disregard, reduce, or defer capital gains arising from eligible business assets.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {concessions.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <Tag color={item.tagColor} className="font-semibold text-xs">
                    {item.tag}
                  </Tag>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Link to Capital Gains Tax Service */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-brand-bg-lighter via-white to-slate-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border border-slate-200 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <CheckCircleOutlined className="text-teal-600 dark:text-teal-400" />
              General CGT Concepts vs Small Business Concessions
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              For general CGT concepts such as cost base, capital proceeds and capital losses, see our{" "}
              <Link
                href="/services/individual-tax/capital-gains-tax"
                className="text-teal-600 dark:text-teal-400 font-semibold underline underline-offset-4 hover:text-teal-700"
              >
                Capital Gains Tax
              </Link>{" "}
              page. This page is specifically about the small business concessions.
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <Link href="/services/individual-tax/capital-gains-tax">
              <Button
                type="primary"
                className="brand-btn-primary w-full md:w-auto text-xs sm:text-sm font-semibold rounded-xl"
                icon={<ArrowRightOutlined />}
                iconPosition="end"
              >
                General CGT Guidance
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
