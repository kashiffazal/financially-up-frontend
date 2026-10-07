"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  ClockCircleOutlined,
  CalendarOutlined,
  FileTextOutlined,
  ExclamationCircleOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * OverdueVsUnlodgedExplanation Component
 * =====================================
 * Section 1 & 2: What are overdue or unlodged tax returns? & What if several years are outstanding?
 * Features 100% complete, verbatim content from Page 11 of the client document.
 */
export default function OverdueVsUnlodgedExplanation() {
  const definitions = [
    {
      term: "Overdue Tax Return",
      badge: "Past Due",
      desc: "An overdue tax return is a return that was required but was not lodged by its due date.",
      icon: <ClockCircleOutlined className="text-amber-500" />,
      tagColor: "orange",
    },
    {
      term: "Unlodged Tax Return",
      badge: "Still Outstanding",
      desc: "An unlodged return remains outstanding and has not yet been submitted to the ATO.",
      icon: <ExclamationCircleOutlined className="text-rose-500" />,
      tagColor: "red",
    },
    {
      term: "Late Tax Return",
      badge: "Lodged After Deadline",
      desc: "A late tax return is lodged after the applicable statutory deadline.",
      icon: <CalendarOutlined className="text-purple-500" />,
      tagColor: "purple",
    },
    {
      term: "Prior-Year Return",
      badge: "Earlier Income Year",
      desc: "A prior-year return relates to an earlier income year that still needs to be prepared.",
      icon: <FileTextOutlined className="text-blue-500" />,
      tagColor: "blue",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Clarifying Status &amp; Obligations
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Are Overdue or Unlodged Tax Returns?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            An overdue tax return is a return that was required but was not lodged by its due date. An unlodged return remains outstanding, while a late tax return is lodged after the applicable deadline. A prior-year return relates to an earlier income year that still needs to be prepared.
          </p>
        </div>

        {/* 4 Terminology Definitions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {definitions.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 flex flex-col justify-between shadow-2xs hover:shadow-xs transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/60 dark:border-zinc-700/60 flex items-center justify-center text-lg">
                    {item.icon}
                  </div>
                  <Tag color={item.tagColor} className="font-semibold text-2xs uppercase tracking-wider">
                    {item.badge}
                  </Tag>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.term}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Non-Lodgment Advice vs Amendments Callouts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Card 1: Non-Lodgment Advice */}
          <div className="p-7 sm:p-8 rounded-3xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-800/50 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-bold text-xs uppercase tracking-wider mb-3">
                <CheckCircleOutlined /> Not Everyone Must Lodge Every Year
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                Non-Lodgment Advice (NLA) Assessment
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                Not every person needs to lodge a tax return for every year. If a return was not required, the appropriate step may be to lodge a non-lodgment advice rather than a tax return. This must be checked separately for each year because income, residency, government payments, investments and other circumstances can change.
              </p>
            </div>
          </div>

          {/* Card 2: Amendments Are Different */}
          <div className="p-7 sm:p-8 rounded-3xl bg-blue-50/60 dark:bg-blue-950/20 border border-blue-200/80 dark:border-blue-800/50 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-blue-800 dark:text-blue-300 font-bold text-xs uppercase tracking-wider mb-3">
                <FileTextOutlined /> Already Lodged Returns
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                Amendments vs Unlodged Returns
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                An amendment is different. It applies where a return has already been lodged but needs to be corrected. Amendment time limits and procedures depend on the circumstances, so an amended return should not be treated as an unlodged return.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-blue-200/60 dark:border-blue-800/40">
              <Link href="/services/individual-tax/tax-return-amendments">
                <Button
                  type="link"
                  className="p-0 font-bold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1.5 h-auto text-xs sm:text-sm"
                  icon={<ArrowRightOutlined className="text-xs" />}
                  iconPosition="end"
                >
                  View Tax Return Amendments Service
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Section 2: What If Several Years Are Outstanding? */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80">
          <div className="max-w-3xl mb-8">
            <span className="text-2xs font-bold uppercase tracking-wider text-brand-primary dark:text-emerald-400 block mb-1">
              Multi-Year Resolution
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              What If Several Years Are Outstanding?
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
              Tax returns for multiple years are usually handled year by year. The process starts by confirming which years remain outstanding and whether a return or non-lodgment advice is required for each year. Income, deductions, private health insurance, study-loan obligations, investments, residency and family circumstances may differ between years.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/70 dark:border-zinc-700/70">
              <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-2">
                Year-by-Year Legislative Rules
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                Catching up can involve reviewing ATO information, gathering supporting records, checking deductions for each year and preparing returns under the rules relevant to those years. It may also involve reviewing ATO notices, balances or post-lodgment requirements.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/70 dark:border-zinc-700/70 flex flex-col justify-between">
              <div>
                <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-2">
                  Sole Trader Income in Outstanding Years
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                  If an outstanding year includes sole-trader income and expenses, our Sole Trader Tax Return service may also be relevant.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-zinc-800">
                <Link href="/services/individual-tax/sole-trader-tax-return">
                  <Button
                    type="link"
                    className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1.5 h-auto text-xs"
                    icon={<ArrowRightOutlined className="text-xs" />}
                    iconPosition="end"
                  >
                    Sole Trader Tax Return Service
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
