"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  FileTextOutlined,
  CalendarOutlined,
  CalculatorOutlined,
  AuditOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * CorporateTrusteeTaxAdviceAndAnnualTax Component
 * ===============================================
 * Section: Corporate trustee tax advice and annual tax work
 * Verbatim text from Page 5 of client docx (8th Pillar Trust Services.docx).
 * Distinguishes trustee companies acting solely in trustee capacity versus trading companies,
 * links to Trust Tax Returns and Trust Distribution Planning services.
 */
export default function CorporateTrusteeTaxAdviceAndAnnualTax() {
  const distinctions = [
    {
      icon: <CalculatorOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Trustee Capacity Tax Profile",
      desc: "A trustee company acting only in that capacity generally has no trading turnover of its own and may have a nil company tax return or lodging exemption.",
    },
    {
      icon: <AuditOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Trust Net Income & Section 95",
      desc: "The trust’s own net taxable income, franking credits, capital gains, and beneficiary present entitlements must be assessed and lodged under trust tax rules.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Tax Scope & Advisory
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Corporate trustee tax advice and annual tax work
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Corporate trustee tax advice depends on the trust type, beneficiaries, income sources and transactions. A
            trustee company acting only in that capacity may have a different tax profile from a company carrying on
            business in its own right. The trust&apos;s own tax obligations, beneficiary entitlements and any trustee
            assessment must be reviewed separately.
          </p>
        </div>

        {/* 2 Distinctions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {distinctions.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Cross-Linking Callout Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-brand-bg-lighter via-white to-slate-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border border-slate-200 dark:border-zinc-800 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl space-y-2">
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Year-End Returns & Pre-30 June Distribution Planning
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Where the engagement is specifically for annual trust lodgement, our{" "}
                <Link
                  href="/services/trusts/trust-tax-returns"
                  className="text-teal-600 dark:text-teal-400 font-semibold hover:underline"
                >
                  Trust Tax Returns
                </Link>{" "}
                service focuses on the return and year-end reporting. If there are trust distribution decisions before
                year end,{" "}
                <Link
                  href="/services/trusts/distribution-planning"
                  className="text-teal-600 dark:text-teal-400 font-semibold hover:underline"
                >
                  Trust Distribution Planning
                </Link>{" "}
                is separately scoped planning work.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/services/trusts/trust-tax-returns"
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 dark:text-zinc-200 bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700 transition-colors"
              >
                <FileTextOutlined className="mr-2" />
                Trust Tax Returns <ArrowRightOutlined className="ml-2 text-xs" />
              </Link>
              <Link
                href="/services/trusts/distribution-planning"
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 transition-colors shadow-sm"
              >
                <CalendarOutlined className="mr-2" />
                Distribution Planning <ArrowRightOutlined className="ml-2 text-xs" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
