"use client";

import React from "react";
import { Tag, Button } from "antd";
import {
  CompassOutlined,
  GlobalOutlined,
  DollarOutlined,
  CreditCardOutlined,
  HomeOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import EntityRoutingBanner from "@/components/website/EntityRoutingBanner";

/**
 * WhenNeedInternationalTaxAccountant Component
 * ============================================
 * Section 4: When Might You Need an International Tax Accountant?
 *
 * Implements the exact 5 scenarios from Section 1 of the SEO document:
 * 1. You have moved to Australia (links to Tax Residency)
 * 2. You are leaving Australia or living overseas (links to Australians Overseas)
 * 3. You receive income from overseas (with 8 income types + links to Foreign Income Tax)
 * 4. You have paid tax in another country (links to Foreign Tax Offset)
 * 5. You own overseas investments or property (links to Foreign Rental / CGT)
 *
 * Background: Lite Brand Gradient
 */
export default function WhenNeedInternationalTaxAccountant() {
  /**
   * The 8 overseas income types listed under scenario 3 (Exact from document)
   */
  const overseasIncomeTypes = [
    "Salary or employment income",
    "Overseas business income",
    "Foreign interest",
    "Overseas dividends",
    "Foreign rental income",
    "Foreign pensions or annuities",
    "Income from foreign trusts or entities",
    "Gains involving overseas assets",
  ];

  return (
    <section
      id="when-need-international-tax-accountant"
      className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-800/60 mb-4">
            <GlobalOutlined className="text-teal-600 dark:text-teal-400 text-xs sm:text-sm" />
            <span className="text-xs font-semibold text-teal-800 dark:text-teal-300 tracking-wide uppercase">
              Cross-Border Scenarios
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            When Might You Need an International Tax Accountant?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
            Professional international tax advice may be useful when your affairs involve both Australia and another country.
          </p>
        </div>

        {/* 5 Scenario Cards */}
        <div className="space-y-6 sm:space-y-8 mb-14">
          {/* Row 1: Scenarios 1 & 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Scenario 1: You have moved to Australia */}
            <div className="p-7 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/50 flex items-center justify-center">
                    <CompassOutlined className="text-teal-600 dark:text-teal-400 text-xl" />
                  </div>
                  <Tag color="cyan" className="font-semibold px-2.5 py-0.5 rounded-full">
                    Arriving in Australia
                  </Tag>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                  You have moved to Australia
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-4">
                  If you have recently arrived in Australia, determining when you became an Australian resident for tax purposes can affect what income must be reported. Tax residency is different from citizenship or immigration status. Our dedicated Tax Residency service explains this area in more detail.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 dark:border-zinc-800">
                <Link
                  href="/services/international-tax/tax-residency"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 group"
                >
                  <span>Explore Tax Residency service</span>
                  <ArrowRightOutlined className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Scenario 2: You are leaving Australia or living overseas */}
            <div className="p-7 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center">
                    <GlobalOutlined className="text-blue-600 dark:text-blue-400 text-xl" />
                  </div>
                  <Tag color="blue" className="font-semibold px-2.5 py-0.5 rounded-full">
                    Departing or Living Overseas
                  </Tag>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                  You are leaving Australia or living overseas
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-4">
                  Moving overseas does not automatically mean that you stop being an Australian resident for tax purposes. Your living arrangements, intentions, family, assets and other connections may need to be reviewed. A change in residency can also affect the Australian tax treatment of income and some assets.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 dark:border-zinc-800">
                <Link
                  href="/services/international-tax/australians-overseas"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 group"
                >
                  <span>Explore Australians Overseas advisory</span>
                  <ArrowRightOutlined className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Scenario 3: You receive income from overseas (Featured Card with 8 income items) */}
          <div className="p-7 sm:p-8 lg:p-10 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 flex items-center justify-center">
                    <DollarOutlined className="text-emerald-600 dark:text-emerald-400 text-xl" />
                  </div>
                  <Tag color="green" className="font-semibold px-2.5 py-0.5 rounded-full">
                    Worldwide Assessable Income
                  </Tag>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white m-0">
                  You receive income from overseas
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed">
                  Australian residents for tax purposes are generally required to report assessable income from Australian and foreign sources, subject to applicable exemptions and special rules.
                </p>
                <div className="pt-2">
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 m-0 mb-3">
                    For detailed assistance with reporting overseas income, see our Foreign Income Tax service.
                  </p>
                  <Link href="/services/international-tax/foreign-income-tax">
                    <Button
                      type="primary"
                      icon={<ArrowRightOutlined />}
                      iconPlacement="end"
                      className="font-semibold h-10 px-5 rounded-xl shadow-xs"
                    >
                      Foreign Income Tax Service
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right: The 8 Income Types */}
              <div className="lg:col-span-6 bg-slate-50/80 dark:bg-zinc-950/60 rounded-xl p-5 sm:p-6 border border-slate-200/80 dark:border-zinc-800/80">
                <h4 className="text-xs font-bold text-slate-800 dark:text-zinc-200 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400" />
                  <span>Reportable Foreign Income Sources</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {overseasIncomeTypes.map((type, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-slate-200/60 dark:border-zinc-800 text-xs text-slate-700 dark:text-zinc-300 font-medium"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                      <span>{type}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Row 3: Scenarios 4 & 5 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Scenario 4: You have paid tax in another country */}
            <div className="p-7 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-950/50 flex items-center justify-center">
                    <CreditCardOutlined className="text-amber-600 dark:text-amber-400 text-xl" />
                  </div>
                  <Tag color="gold" className="font-semibold px-2.5 py-0.5 rounded-full">
                    Double Tax Relief
                  </Tag>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                  You have paid tax in another country
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-3">
                  Paying tax overseas does not necessarily mean the income can be excluded from an Australian tax return. Depending on the circumstances, a foreign income tax offset may be available in Australia for qualifying foreign tax paid on income that is also included for Australian tax purposes.
                </p>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed mb-4">
                  The amount that can be recognised depends on the applicable Australian rules and, where relevant, the tax treaty between Australia and the foreign country.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 dark:border-zinc-800">
                <Link
                  href="/services/international-tax/foreign-tax-offset"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 group"
                >
                  <span>Explore Foreign Tax Offset service</span>
                  <ArrowRightOutlined className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Scenario 5: You own overseas investments or property */}
            <div className="p-7 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-950/50 flex items-center justify-center">
                    <HomeOutlined className="text-purple-600 dark:text-purple-400 text-xl" />
                  </div>
                  <Tag color="purple" className="font-semibold px-2.5 py-0.5 rounded-full">
                    Global Assets & Holdings
                  </Tag>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                  You own overseas investments or property
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-4">
                  Foreign shares, bank accounts, investment funds, rental properties and other assets can create Australian tax reporting considerations. The tax treatment may depend on your residency status, the nature of the asset, when it was acquired, how it is held and whether you are entitled to any special treatment.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 dark:border-zinc-800 flex items-center gap-4">
                <Link
                  href="/services/international-tax/foreign-rental-income"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 group"
                >
                  <span>Foreign rental tax</span>
                  <ArrowRightOutlined className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/services/international-tax/capital-gains-international"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200 group"
                >
                  <span>Offshore CGT</span>
                  <ArrowRightOutlined className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Pathways Banner */}
        <EntityRoutingBanner
          tag="Cross-Border Pathways"
          description="Whether you have just arrived in Australia, are moving abroad, or need to reconcile overseas income and foreign tax credits, choose your pathway below."
          buttons={[
            {
              label: "Tax Residency Determinations",
              href: "/services/international-tax/tax-residency",
              type: "primary",
            },
            {
              label: "Foreign Income & FITO Offsets",
              href: "/services/international-tax/foreign-income-tax",
              type: "secondary",
            },
          ]}
        />
      </div>
    </section>
  );
}
