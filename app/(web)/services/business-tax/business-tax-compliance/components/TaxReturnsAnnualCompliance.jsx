"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  BankOutlined,
  TeamOutlined,
  ShopOutlined,
  UserOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * TaxReturnsAnnualCompliance Component
 * =====================================
 * Section: Tax Returns and Annual Compliance
 * Features 100% complete, verbatim content from Page 8 of client docx.
 * Entity-specific return structures and cross-service coordination.
 */
export default function TaxReturnsAnnualCompliance() {
  const entityStructures = [
    {
      icon: (
        <BankOutlined className="text-xl text-teal-600 dark:text-teal-400" />
      ),
      title: "Pty Ltd Companies",
      desc: "Lodges a separate Company Tax Return reporting commercial profit, corporate tax at 25% or 30%, and franking account balances.",
      linkText: "Company Tax Returns",
      href: "/services/business-tax/company-tax-returns",
    },
    {
      icon: (
        <ShopOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />
      ),
      title: "Family & Unit Trusts",
      desc: "Lodges an annual Trust Tax Return distributing net income to beneficiaries under effective pre-30 June distribution resolutions.",
      linkText: "Trust Tax Returns",
      href: "/services/business-tax/trust-tax-returns",
    },
    {
      icon: (
        <TeamOutlined className="text-xl text-blue-600 dark:text-blue-400" />
      ),
      title: "Business Partnerships",
      desc: "Lodges a Partnership Tax Return allocating net profit shares or flow-through business losses to individual partner tax returns.",
      linkText: "Partnership Tax Returns",
      href: "/services/business-tax/partnership-tax-returns",
    },
    {
      icon: (
        <UserOutlined className="text-xl text-purple-600 dark:text-purple-400" />
      ),
      title: "Sole Traders",
      desc: "Reports business income, deductible operating expenses, and vehicle/home-based costs directly in the personal tax return.",
      linkText: "Sole Trader Tax",
      href: "/services/business-tax/sole-trader-tax",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="blue"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Annual Filing Obligations
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Tax Returns and Annual Compliance
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Annual income tax compliance starts with reliable accounting and tax
            records. The return required depends on the entity. Companies,
            trusts and partnerships lodge their own entity returns, while a sole
            trader generally reports business income and deductions in their
            individual tax return.
          </p>
        </div>

        {/* 4 Entity Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {entityStructures.map((entity, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-800/90 border border-slate-200/90 dark:border-zinc-700/80 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-100 dark:border-zinc-700 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                  {entity.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {entity.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                  {entity.desc}
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 dark:border-zinc-700/80">
                <Link href={entity.href}>
                  <Button
                    type="link"
                    className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1 h-auto text-xs"
                    icon={<ArrowRightOutlined className="text-[11px]" />}
                    iconPlacement="end"
                  >
                    {entity.linkText}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Coordinated Annual Close Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-50/80 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              Coordinated Corporate Close &amp; Year-End Accounting
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Where the business is a company, our Company Tax Returns service
              covers the company return in more detail. Broader annual close
              work can also be coordinated through Year-End Accounting.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0 w-full md:w-auto">
            <Link href="/services/business-tax/company-tax-returns">
              <Button
                type="default"
                className="brand-btn-outline text-xs sm:text-sm font-semibold rounded-xl"
              >
                Company Tax Returns
              </Button>
            </Link>
            <Link href="/services/business-tax/year-end-accounting">
              <Button
                type="primary"
                className="brand-btn-primary text-xs sm:text-sm font-semibold rounded-xl"
                icon={<ArrowRightOutlined />}
                iconPlacement="end"
              >
                Year-End Accounting
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
