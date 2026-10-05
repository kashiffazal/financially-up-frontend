"use client";

import React from "react";
import { Button } from "antd";
import {
  ApartmentOutlined,
  BankOutlined,
  CheckCircleOutlined,
  SyncOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import Link from "next/link";

/**
 * TrustVsCompanyTaxation Component
 * ================================
 * Section 5: Trust Taxation vs Company Taxation.
 *
 * Visually contrasts flow-through trust taxation with corporate tax treatment,
 * highlighting the 50% CGT discount, retained earnings, and bucket company mechanics.
 *
 * Background: Lite Brand Gradient.
 */
export default function TrustVsCompanyTaxation() {
  const trustFeatures = [
    "Generally treated as a flow-through conduit for Australian tax purposes",
    "Net income taxed in the hands of beneficiaries at their individual marginal tax rates",
    "Eligible for the 50% Capital Gains Tax (CGT) discount on assets held > 12 months",
    "Income retained without present entitlement is taxed to the trustee at 47%",
    "Requires annual distribution resolutions drafted and executed on or before 30 June",
  ];

  const companyFeatures = [
    "Taxed as an independent separate legal entity at a flat 25% (base rate) or 30% rate",
    "Cannot claim the general 50% Capital Gains Tax (CGT) discount",
    "Can retain after-tax profits indefinitely as working capital without penalty",
    "Profits distributed to shareholders via dividends carrying franking credits",
    "Drawings by shareholders or associates strictly governed by Division 7A rules",
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-800/60 mb-4">
            <SyncOutlined className="text-teal-600 dark:text-teal-400 text-xs sm:text-sm" />
            <span className="text-xs font-semibold text-teal-800 dark:text-teal-300 tracking-wide uppercase">
              Comparative Tax Architecture
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Trust Taxation vs Company Taxation
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
            Understanding how trust tax rules differ from corporate tax rules allows trustees and founders to make informed decisions regarding profit retention, asset growth, and capital distributions.
          </p>
        </div>

        {/* 2-Column Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left: Trust Taxation */}
          <div className="p-7 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/50 flex items-center justify-center">
                    <ApartmentOutlined className="text-teal-600 dark:text-teal-400 text-lg" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-teal-600 dark:text-teal-400 tracking-wider uppercase">
                      Flow-Through Entity
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0">
                      Discretionary & Unit Trusts
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300">
                  Trust Net Income
                </span>
              </div>

              <ul className="space-y-3.5 mb-6">
                {trustFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                    <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400">
              Optimal for: Long-term capital growth assets, property portfolios & flexible family distributions.
            </div>
          </div>

          {/* Right: Company Taxation */}
          <div className="p-7 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 flex items-center justify-center">
                    <BankOutlined className="text-emerald-600 dark:text-emerald-400 text-lg" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase">
                      Corporate Tax Rate
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0">
                      Proprietary Limited Company
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300">
                  Company Income Tax
                </span>
              </div>

              <ul className="space-y-3.5 mb-6">
                {companyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                    <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400">
              Optimal for: Active commercial trading, high operational risk & business working capital retention.
            </div>
          </div>
        </div>

        {/* Integration Callout */}
        <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
          <div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white m-0">
              Coordinating Trusts and Companies in Family Groups
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 m-0 mt-1">
              Many Australian family groups utilize both structures: a discretionary trust distributing business profits to a corporate beneficiary (&apos;bucket company&apos;) at 25%, managed with compliant Division 7A loan agreements.
            </p>
          </div>
          <Link href="/book-an-appointment" className="shrink-0">
            <Button
              type="primary"
              size="large"
              icon={<ArrowRightOutlined />}
              iconPosition="end"
              className="h-11 px-6 rounded-xl font-semibold shadow-md shadow-brand-primary/20"
            >
              Discuss Trust Strategy
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
