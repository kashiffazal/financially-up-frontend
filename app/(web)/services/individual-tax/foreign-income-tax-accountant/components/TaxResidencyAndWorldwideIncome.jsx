"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  GlobalOutlined,
  UserOutlined,
  SwapOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

/**
 * TaxResidencyAndWorldwideIncome Component
 * ========================================
 * Section 1 & 2: How is foreign income taxed in Australia? & Why tax residency matters.
 * Features 100% complete, verbatim content from Page 9 of the client document.
 */
export default function TaxResidencyAndWorldwideIncome() {
  const residentCategories = [
    {
      title: "Australian Tax Residents",
      badge: "Worldwide Income",
      desc: "Australian tax residents generally declare income from Australia and overseas, even when the money remains offshore.",
      theme:
        "border-emerald-200/80 dark:border-emerald-800/40 bg-emerald-50/40 dark:bg-emerald-950/20",
    },
    {
      title: "Foreign Residents",
      badge: "Australian-Sourced Only",
      desc: "Foreign residents generally declare Australian-sourced income and certain Australian capital gains.",
      theme:
        "border-blue-200/80 dark:border-blue-800/40 bg-blue-50/40 dark:bg-blue-950/20",
    },
    {
      title: "Temporary Residents",
      badge: "Concessional Treatment",
      desc: "Temporary residents generally receive concessions for most foreign income and capital gains, although exceptions can apply, including to some foreign employment income.",
      theme:
        "border-purple-200/80 dark:border-purple-800/40 bg-purple-50/40 dark:bg-purple-950/20",
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
            Residency &amp; Worldwide Scope
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How Is Foreign Income Taxed in Australia?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            The starting point is your Australian tax residency and the nature
            and source of the income.
          </p>
        </div>

        {/* 3 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {residentCategories.map((cat, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-7 border ${cat.theme} shadow-xs hover:shadow-md transition-all flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 flex items-center justify-center text-lg">
                    <GlobalOutlined className="text-brand-primary dark:text-emerald-400" />
                  </div>
                  <Tag className="m-0 font-bold text-2xs uppercase tracking-wider py-0.5 px-2.5 rounded-full border-slate-300 dark:border-zinc-700 bg-white/90 dark:bg-zinc-800/90 text-slate-800 dark:text-zinc-200">
                    {cat.badge}
                  </Tag>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {cat.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {cat.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/50 dark:border-zinc-700/50 flex items-center gap-1.5 text-2xs text-brand-primary dark:text-emerald-400 font-medium">
                <CheckCircleOutlined />
                <span>Australian Taxation Framework</span>
              </div>
            </div>
          ))}
        </div>

        {/* Foreign Income Types Detail */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-200/70 dark:border-zinc-700/70 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-12">
          <p className="m-0">
            Foreign income can include employment income, dividends, interest,
            pensions, annuities, rental income, business income and gains from
            overseas assets. An exemption or special rule may apply in limited
            circumstances, so the treatment should be based on the relevant
            facts rather than citizenship or where the money was deposited.
          </p>
        </div>

        {/* Why Tax Residency Matters Deep Dive */}
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-7 sm:p-10 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
          <div className="max-w-3xl mb-6">
            <span className="text-2xs font-bold uppercase tracking-wider text-brand-primary dark:text-emerald-400 block mb-1">
              Statutory Criteria
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Why Tax Residency Matters
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            <div className="space-y-4">
              <p>
                Tax residency is not decided only by citizenship, visa status,
                property ownership or the number of days spent in Australia.
                Australian domestic law contains several residency tests, and
                the outcome depends on your living arrangements, connections,
                work, assets, family circumstances and intentions.
              </p>
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/70 dark:border-zinc-700/70">
                <span className="font-bold text-slate-900 dark:text-white block mb-1">
                  Residency Transition Years:
                </span>
                Residency requires particular attention if you moved to
                Australia, departed during the year, returned after working
                overseas or may be resident in two countries.
              </div>
            </div>

            <div className="space-y-4">
              <p>
                If both countries treat you as a resident, a tax treaty may
                contain tie-breaker rules for treaty purposes. The domestic
                rules, treaty and dates of any residency change may all affect
                the return.
              </p>
              <div className="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-800/40 text-xs text-emerald-950 dark:text-emerald-200">
                <span className="font-bold block mb-1">
                  Our Professional Role:
                </span>
                A foreign income tax accountant can review the relevant
                information for Australian tax-return purposes and identify when
                separately scoped residency or treaty advice is required.
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-2xs text-slate-400 dark:text-zinc-500">
              Tax treaty tie-breaker analysis available where dual tax residency
              arises
            </span>
            <Link href="/book-an-appointment">
              <Button
                type="primary"
                className="brand-btn-primary font-bold text-xs h-10 px-5"
                icon={<ArrowRightOutlined />}
                iconPlacement="end"
              >
                Assess Tax Residency Status
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
