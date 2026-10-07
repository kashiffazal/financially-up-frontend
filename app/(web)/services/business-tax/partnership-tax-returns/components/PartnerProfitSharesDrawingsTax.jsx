"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  UserDeleteOutlined,
  DollarCircleOutlined,
  SwapOutlined,
  ApartmentOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * PartnerProfitSharesDrawingsTax Component
 * =========================================
 * Section: Partner Profit Shares, Drawings and Tax
 * Features 100% complete, verbatim content from Page 4 of client docx.
 * Clarifies partner status, non-deductible drawings, and profit sharing.
 */
export default function PartnerProfitSharesDrawingsTax() {
  const taxPrinciples = [
    {
      icon: <UserDeleteOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Partners Are Not Employees",
      desc: "Partners are not treated as employees of the partnership merely because they work in the business. They do not receive tax-deductible employee salaries or wages from the partnership.",
    },
    {
      icon: <DollarCircleOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Drawings Are Not Deductible Wages",
      desc: "Amounts withdrawn by partners are not automatically deductible wages. Cash drawings represent personal advances against capital or profit shares, not business tax deductions.",
    },
    {
      icon: <SwapOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Taxable Result vs Cash Transfers",
      desc: "The partnership’s taxable result and each partner’s share need to be considered separately from cash drawings or transfers between the business and partners.",
    },
    {
      icon: <ApartmentOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Profit-Sharing Variations & Loans",
      desc: "Where there are different profit-sharing arrangements, changes in partners, partner loans or unusual allocations, additional review may be appropriate.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="orange" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Tax Principle Clarification
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Partner Profit Shares, Drawings and Tax
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Partners are not treated as employees of the partnership merely because they work in the business. Amounts withdrawn by partners are not automatically deductible wages.
          </p>
        </div>

        {/* 4 Core Tax Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {taxPrinciples.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-800/90 border border-slate-200/90 dark:border-zinc-700/80 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-100 dark:border-zinc-700 flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Advisory Scoping Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-blue-50 dark:from-zinc-900 dark:via-zinc-850 dark:to-zinc-900 border border-emerald-200/80 dark:border-emerald-800/50 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              Routine Return Preparation &amp; Separately Scoped Advice
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
              Financially Up can prepare the return and accounting information, while more detailed tax advice can be separately scoped where the circumstances require it.
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <Link href="/book-an-appointment">
              <Button
                type="primary"
                className="brand-btn-primary w-full md:w-auto text-xs sm:text-sm font-semibold rounded-xl"
                icon={<ArrowRightOutlined />}
                iconPosition="end"
              >
                Discuss Partner Allocations
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
