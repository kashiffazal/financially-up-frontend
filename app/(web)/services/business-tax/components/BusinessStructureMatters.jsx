"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  BankOutlined,
  ApartmentOutlined,
  UserOutlined,
  TeamOutlined,
  ArrowRightOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

/**
 * BusinessStructureMatters Component
 * ==================================
 * Section 5: Business Structure Matters.
 *
 * Explains how entity structure dictates who reports income, loss utilization,
 * profit distribution/retention, and statutory filing obligations.
 *
 * All text is 100% VERBATIM from the professional SEO specialist document:
 * '2nd pillar Business Tax Final Pages.docx'.
 */
export default function BusinessStructureMatters() {
  const structureComparisons = [
    {
      title: "Company (Pty Ltd)",
      icon: <BankOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      taxpayer: "Separate Legal Taxpayer",
      taxRate: "25% (Base Rate) or 30%",
      losses: "Carried forward subject to COT/BCT tests",
      profits: "Retained or distributed as franked dividends",
      link: "/services/business-tax/company-tax-returns",
      linkText: "Company tax returns",
    },
    {
      title: "Trusts",
      icon: <ApartmentOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      taxpayer: "Flow-Through Entity",
      taxRate: "Taxed at beneficiary marginal rates",
      losses: "Trapped in trust (Trust Loss Rules apply)",
      profits: "Distributed annually before 30 June",
      link: "/services/business-tax/trust-tax-returns",
      linkText: "Trust tax returns",
    },
    {
      title: "Partnerships",
      icon: <TeamOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      taxpayer: "Information Return Only",
      taxRate: "Partners taxed on their profit share",
      losses: "Distributed directly to partners",
      profits: "Shared according to partnership agreement",
      link: "/services/business-tax/partnership-tax-returns",
      linkText: "Partnership tax returns",
    },
    {
      title: "Sole Traders",
      icon: <UserOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      taxpayer: "Individual Person",
      taxRate: "Individual marginal tax rates",
      losses: "Subject to Non-Commercial Loss Rules",
      profits: "Treated as personal taxable income",
      link: "/services/business-tax/sole-trader-tax",
      linkText: "Sole trader tax",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-950 dark:via-zinc-900/40 dark:to-zinc-950 border-b border-slate-100 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
          <Tag color="green" className="brand-section-tag">
            Entity Comparison
          </Tag>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.2]">
            Business Structure Matters
          </h2>
        </div>

        {/* Narrative Context Box - 100% Verbatim from Client Document */}
        <div className="w-full mb-12 p-7 sm:p-9 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 text-slate-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed space-y-4 shadow-xs">
          <p className="m-0">
            Your structure affects who reports the income, how losses may be
            dealt with, how profits can be distributed or retained and what
            returns need to be lodged. A company is a separate taxpayer, while a
            sole trader reports business income through an individual tax
            return. Trusts and partnerships have their own reporting rules and
            can also create tax consequences for beneficiaries or partners.
          </p>
          <div className="pt-4 border-t border-slate-100 dark:border-zinc-800 flex items-start sm:items-center gap-3">
            <InfoCircleOutlined className="text-brand-primary dark:text-emerald-400 text-lg shrink-0 mt-0.5 sm:mt-0" />
            <p className="m-0 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
              If you operate as a sole trader, our{" "}
              <Link
                href="/services/business-tax/sole-trader-tax"
                className="text-brand-primary dark:text-emerald-400 font-semibold hover:underline"
              >
                Sole Trader Tax Return
              </Link>{" "}
              service is focused on that structure. This business tax accountant
              page remains the broader entry point for business accounting, tax
              and compliance needs.
            </p>
          </div>
        </div>

        {/* Structure Comparison Grid - 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {structureComparisons.map((item, idx) => (
            <div
              key={idx}
              className="p-7 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-md hover:border-brand-primary/40 dark:hover:border-emerald-600/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-brand-primary-soft dark:bg-emerald-950/70 flex items-center justify-center group-hover:scale-105 transition-transform shadow-2xs">
                    {item.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white m-0 tracking-tight group-hover:text-brand-primary dark:group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-xs text-slate-600 dark:text-zinc-400">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-100 dark:border-zinc-800">
                    <span className="block font-bold text-slate-900 dark:text-white mb-0.5">
                      Taxpayer Status
                    </span>
                    <span>{item.taxpayer}</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-100 dark:border-zinc-800">
                    <span className="block font-bold text-slate-900 dark:text-white mb-0.5">
                      Applicable Rates
                    </span>
                    <span>{item.taxRate}</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-100 dark:border-zinc-800">
                    <span className="block font-bold text-slate-900 dark:text-white mb-0.5">
                      Loss Treatment
                    </span>
                    <span>{item.losses}</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-100 dark:border-zinc-800">
                    <span className="block font-bold text-slate-900 dark:text-white mb-0.5">
                      Profit Allocation
                    </span>
                    <span>{item.profits}</span>
                  </div>
                </div>
              </div>

              <Link
                href={item.link}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-brand-primary dark:text-emerald-400 pt-3 border-t border-slate-100 dark:border-zinc-800 hover:text-brand-primary-hover transition-colors"
              >
                <span>View {item.linkText}</span>
                <ArrowRightOutlined className="text-xs group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
