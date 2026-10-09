"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  ShopOutlined,
  UserOutlined,
  ApartmentOutlined,
  FileDoneOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * HowSoleTraderDiffersIndividual Component
 * =========================================
 * Section: How This Page Differs From a Basic Individual Tax Return
 * Features 100% complete, verbatim content from Page 5 of client docx.
 * Distinguishes sole trader business schedules from basic salary/wage personal returns.
 */
export default function HowSoleTraderDiffersIndividual() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="blue"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Service Scope Clarification
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How This Page Differs From a Basic Individual Tax Return
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            This service is designed around people actively carrying on a
            business as a sole trader. It focuses on business income, business
            deductions, accounting records and related compliance. For a return
            that is primarily salary, investment or other personal income, see
            our Individual Tax Return service.
          </p>
        </div>

        {/* 2 Comparative Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Active Business Sole Trader */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-teal-50/60 via-white to-emerald-50/40 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border border-teal-200/80 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
                  <ShopOutlined className="text-xl" />
                </div>
                <div>
                  <Tag
                    color="green"
                    className="font-semibold text-xs uppercase tracking-wider mb-1"
                  >
                    Current Service
                  </Tag>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    Active Sole Trader Business
                  </h3>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                Focuses on trading revenue, allowable business operating
                deductions, equipment depreciation, business-use percentages,
                GST/BAS working papers, and business schedules.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-200/80 dark:border-zinc-800">
              <span className="text-xs text-teal-700 dark:text-teal-400 font-semibold">
                Designed for contractors, trades, professional sole
                practitioners &amp; freelancers.
              </span>
            </div>
          </div>

          {/* Card 2: Basic Individual Tax Return */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <UserOutlined className="text-xl" />
                </div>
                <div>
                  <Tag
                    color="blue"
                    className="font-semibold text-xs uppercase tracking-wider mb-1"
                  >
                    Personal Tax Return
                  </Tag>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    Salary, Investment &amp; Personal Income
                  </h3>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                For individuals whose income is primarily salary and wages (PAYG
                payment summaries), dividends, managed fund distributions, or
                personal rental property investments.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-200/80 dark:border-zinc-700">
              <Link href="/services/individual-tax/individual-tax-return">
                <Button
                  type="link"
                  className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1 h-auto text-xs sm:text-sm"
                  icon={<ArrowRightOutlined className="text-xs" />}
                  iconPlacement="end"
                >
                  Go to Individual Tax Return Service
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Growth & Financial Statements Callout Strip */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-50/80 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <ApartmentOutlined className="text-teal-600 dark:text-teal-400" />
              Expanding Operations or Need Formal Reports?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              For broader business tax and accounting support as your operations
              grow, see Business Tax &amp; Accounting. Where formal year-end
              reports are needed, our Business Financial Statements service may
              also be relevant.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0 w-full md:w-auto">
            <Link href="/services/business-tax/business-financial-statements">
              <Button
                type="default"
                className="brand-btn-outline text-xs sm:text-sm font-semibold rounded-xl"
              >
                Business Financial Statements
              </Button>
            </Link>
            <Link href="/services/business-tax">
              <Button
                type="primary"
                className="brand-btn-primary text-xs sm:text-sm font-semibold rounded-xl"
                icon={<ArrowRightOutlined />}
                iconPlacement="end"
              >
                Business Tax Hub
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
