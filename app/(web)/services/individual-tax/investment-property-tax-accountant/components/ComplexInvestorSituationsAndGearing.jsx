"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  ApartmentOutlined,
  BranchesOutlined,
  SwapOutlined,
  ClusterOutlined,
  FallOutlined,
  RiseOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * ComplexInvestorSituationsAndGearing Component
 * ==============================================
 * Section 6 & 7: Complex Property Investor Situations, Negative and Positive Gearing.
 * Features 100% complete, verbatim content from Page 5 of the client document.
 */
export default function ComplexInvestorSituationsAndGearing() {
  const complexTriggers = [
    {
      icon: <SwapOutlined className="text-amber-500" />,
      text: "An investment property loan has been refinanced, redrawn or used for mixed purposes",
    },
    {
      icon: <ApartmentOutlined className="text-blue-500" />,
      text: "A property is jointly owned",
    },
    {
      icon: <BranchesOutlined className="text-emerald-500" />,
      text: "A former home has been converted into a rental property",
    },
    {
      icon: <ClusterOutlined className="text-purple-500" />,
      text: "You own multiple investment properties",
    },
    {
      icon: <SwapOutlined className="text-rose-500" />,
      text: "The ownership or use of a property changed during the year",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Advanced Portfolio Management
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Complex Investor Situations and Gearing
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Navigating multi-property portfolios, ownership shifts, converted
            principal residences, and the realistic tax mechanics of negative
            gearing.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Left Column: Complex Scenarios */}
          <div className="lg:col-span-7 bg-white dark:bg-zinc-900 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-primary dark:bg-emerald-400" />
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  Complex Property Investor Situations
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-5">
                Additional review may be useful when:
              </p>

              <div className="space-y-3 mb-6">
                {complexTriggers.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-100 dark:border-zinc-700/50 text-xs sm:text-sm text-slate-700 dark:text-zinc-200 font-medium"
                  >
                    <span className="text-base shrink-0 mt-0.5">
                      {item.icon}
                    </span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 p-4 rounded-2xl bg-slate-50/80 dark:bg-zinc-800/60 border border-slate-200/70 dark:border-zinc-700/70 text-xs text-slate-600 dark:text-zinc-300 leading-relaxed">
                <p>
                  <strong>Former Home Conversion:</strong> For a former home,
                  the date it first produced income, its market value at that
                  time and any period covered by the main residence rules may be
                  relevant to a future CGT calculation.
                </p>
                <p>
                  <strong>Multiple Properties:</strong> Investors with several
                  properties should maintain records for each property so
                  income, expenses, loan use and capital costs can be identified
                  separately. If property income forms part of a broader complex
                  tax position, our{" "}
                  <Link
                    href="/services/individual-tax/high-income-professionals"
                    className="text-brand-primary dark:text-emerald-400 font-bold hover:underline"
                  >
                    High Income Professionals service
                  </Link>{" "}
                  may also be relevant.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800 flex items-center justify-between">
              <span className="text-2xs text-slate-400 dark:text-zinc-500">
                Individual property schedules maintained per asset
              </span>
              <Link href="/book-an-appointment">
                <Button
                  type="link"
                  className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1 h-auto text-xs"
                  icon={<ArrowRightOutlined className="text-xs" />}
                  iconPlacement="end"
                >
                  Book Portfolio Review
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Negative and Positive Gearing */}
          <div className="lg:col-span-5 bg-white dark:bg-zinc-900 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  Negative and Positive Gearing
                </h3>
              </div>

              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200/60 dark:border-rose-900/40">
                  <div className="flex items-center gap-2 font-bold text-rose-700 dark:text-rose-400 text-sm mb-1">
                    <FallOutlined />
                    <span>Negative Gearing</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                    A property is generally negatively geared when deductible
                    rental expenses exceed rental income.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/40">
                  <div className="flex items-center gap-2 font-bold text-emerald-700 dark:text-emerald-400 text-sm mb-1">
                    <RiseOutlined />
                    <span>Positive Gearing</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                    It is positively geared when rental income exceeds
                    deductible expenses.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/40 text-xs text-amber-950 dark:text-amber-200 leading-relaxed">
                <span className="font-bold block mb-1">
                  Our Professional Advisory Note:
                </span>
                The tax effect depends on the investor’s income, ownership,
                property use, documentation and the rules applying to their
                circumstances. Negative gearing does not guarantee a particular
                refund or tax saving.
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800 text-2xs text-slate-400 dark:text-zinc-500">
              Tax deductions apply against your marginal individual tax rate
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
