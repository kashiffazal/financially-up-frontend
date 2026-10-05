"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  BankOutlined,
  SafetyCertificateOutlined,
  ApartmentOutlined,
  UserOutlined,
  ArrowRightOutlined,
  InfoCircleOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * WhatBusinessAccountantDoes Component
 * ====================================
 * Section 1: Explores the core role of a business tax accountant and contrasts
 * how different Australian business entities (Company, Trust, Partnership, Sole Trader)
 * are taxed and reported differently.
 *
 * Adopts modern card aesthetics with Tailwind CSS, brand CSS variables,
 * Ant Design icons, and verified accessible typography.
 */
export default function WhatBusinessAccountantDoes() {
  /**
   * The 4 Core Business Entity Structures and their distinct reporting logic
   */
  const entityStructures = [
    {
      id: "company",
      title: "Company (Pty Ltd)",
      badge: "Separate Taxpayer",
      tagColor: "blue",
      icon: <BankOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
      bgGradient: "from-blue-500/10 via-blue-500/5 to-transparent",
      borderColor: "border-blue-200 dark:border-blue-900/60",
      description:
        "A proprietary limited company is a separate legal and tax entity. It lodges its own company tax return, pays corporate tax rates, manages franking credits, and must adhere to Division 7A director loan rules.",
      link: "/services/business-tax/company-tax-returns",
      linkText: "Company tax returns",
    },
    {
      id: "trust",
      title: "Trust Entities",
      badge: "Flow-Through Entity",
      tagColor: "purple",
      icon: <ApartmentOutlined className="text-2xl text-purple-600 dark:text-purple-400" />,
      bgGradient: "from-purple-500/10 via-purple-500/5 to-transparent",
      borderColor: "border-purple-200 dark:border-purple-900/60",
      description:
        "Discretionary and unit trusts lodge annual trust tax returns, prepare financial accounts, and report distributions to beneficiaries. Proper trustee resolutions must be executed before 30 June.",
      link: "/services/business-tax/trust-tax-returns",
      linkText: "Trust tax returns",
    },
    {
      id: "partnership",
      title: "Partnerships",
      badge: "Shared Enterprise",
      tagColor: "amber",
      icon: <SafetyCertificateOutlined className="text-2xl text-amber-600 dark:text-amber-400" />,
      bgGradient: "from-amber-500/10 via-amber-500/5 to-transparent",
      borderColor: "border-amber-200 dark:border-amber-900/60",
      description:
        "Partnerships lodge an information return showing total business income and deductions, then distribute net profit or loss shares to each individual or corporate partner according to the partnership agreement.",
      link: "/services/business-tax/partnership-tax-returns",
      linkText: "Partnership tax returns",
    },
    {
      id: "sole-trader",
      title: "Sole Traders",
      badge: "Individual Return",
      tagColor: "emerald",
      icon: <UserOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
      bgGradient: "from-emerald-500/10 via-emerald-500/5 to-transparent",
      borderColor: "border-emerald-200 dark:border-emerald-900/60",
      description:
        "Sole traders report business income and expenses directly through the business schedule of their individual tax return, balancing ABN revenue, personal tax brackets, and PAYG instalments.",
      link: "/services/business-tax/sole-trader-tax",
      linkText: "Sole trader tax",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <Tag color="green" className="brand-section-tag">
            Core Function &amp; Scope
          </Tag>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.2]">
            What Does a Business Tax Accountant Do?
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            A business tax accountant helps a business prepare accurate tax and
            accounting information, meet relevant lodgment obligations and
            understand how tax rules apply to its activities.
          </p>
        </div>

        {/* Informative Intro Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-14">
          <div className="lg:col-span-7 space-y-4 text-slate-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
            <p className="m-0">
              The work typically includes preparing annual income tax returns,
              reviewing business revenue streams and deductible expenses,
              preparing formal financial statements, reconciling year-end
              accounts, and identifying complex tax matters that warrant
              separate strategic advice.
            </p>
            <p className="m-0">
              The exact work depends fundamentally on your entity. A company,
              trust, partnership and sole trader are{" "}
              <strong className="text-slate-900 dark:text-white font-semibold">
                not taxed or reported in the same way
              </strong>
              . That is why our broader business tax services start with the
              structure you operate through rather than treating every business
              as if it has identical obligations.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-brand-primary dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
                <CheckCircleOutlined /> Comprehensive Scope
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white m-0">
                Beyond Standard Data Entry
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed m-0 font-normal">
                We review whether your books reconcile with bank records, ensure
                private amounts are quarantined from business deductions, verify
                asset depreciation schedules, and align tax positions with
                commercial realities.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Interactive Entity Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {entityStructures.map((entity) => (
            <div
              key={entity.id}
              className={`rounded-2xl p-6 bg-gradient-to-b ${entity.bgGradient} bg-white dark:bg-zinc-900 border ${entity.borderColor} flex flex-col justify-between shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 group`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-800 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                    {entity.icon}
                  </div>
                  <Tag color={entity.tagColor} className="m-0 text-[11px] font-semibold">
                    {entity.badge}
                  </Tag>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
                  {entity.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal mb-6">
                  {entity.description}
                </p>
              </div>

              <Link
                href={entity.link}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-brand-primary hover:text-brand-primary-hover dark:text-emerald-400 pt-3 border-t border-slate-100 dark:border-zinc-800 transition-colors"
              >
                <span>{entity.linkText}</span>
                <ArrowRightOutlined className="text-xs group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom Scope Assurance Note */}
        <div className="rounded-xl p-4 sm:p-5 bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-800/40 flex items-start gap-3">
          <InfoCircleOutlined className="text-brand-primary dark:text-emerald-400 text-lg mt-0.5 shrink-0" />
          <p className="text-xs sm:text-sm text-emerald-950 dark:text-emerald-200 leading-relaxed m-0 font-normal">
            <strong>Structure-First Philosophy:</strong> Our business tax
            advisory is structured around your commercial entity type. Whether
            you operate a family business, professional practice, or corporate
            group, we match our compliance workflows to your exact statutory
            filing duties.
          </p>
        </div>
      </div>
    </section>
  );
}
