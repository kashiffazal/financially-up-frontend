"use client";

import React from "react";
import { Button } from "antd";
import {
  HomeOutlined,
  CheckCircleOutlined,
  SafetyCertificateOutlined,
  BankOutlined,
  DollarOutlined,
  LineChartOutlined,
  EyeOutlined,
  ArrowRightOutlined,
  AuditOutlined,
  FileDoneOutlined,
  CalculatorOutlined,
  ApartmentOutlined,
} from "@ant-design/icons";
import Link from "next/link";

/**
 * WhatPropertyTaxAccountantHelpsWith Component
 * ============================================
 * Section: "What does a property tax accountant help with?"
 * Directly reflects the exact content and 8 review areas from Page 1 of
 * '10th Pillar Property Tax.docx'.
 *
 * Background: Lite Brand Gradient with Dark Mode compatibility.
 */
export default function WhatPropertyTaxAccountantHelpsWith() {
  /**
   * 8 Exact Review Areas from Document:
   * "Common areas we may review include:
   *  - rental income and deductible expenses
   *  - interest and the purpose of borrowings
   *  - repairs, maintenance, depreciating assets and capital works
   *  - ownership percentages and entity reporting
   *  - capital gains tax when an investment property is sold
   *  - GST where property activities amount to an enterprise or involve taxable supplies
   *  - year-end accounting and records for property-owning entities
   *  - the interaction between property transactions and broader business tax compliance."
   */
  const exactReviewAreas = [
    {
      title: "Rental Income and Deductible Expenses",
      verbatim: "Rental income and deductible expenses",
      icon: <DollarOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      desc: "Reconciling gross rent, managing agent statements, and claiming legitimate running expenses.",
    },
    {
      title: "Interest and the Purpose of Borrowings",
      verbatim: "Interest and the purpose of borrowings",
      icon: <CalculatorOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      desc: "Tracing borrowed funds, loan redraws, and apportioning interest for income-producing purposes.",
    },
    {
      title: "Repairs, Maintenance, Depreciating Assets and Capital Works",
      verbatim: "Repairs, maintenance, depreciating assets and capital works",
      icon: <LineChartOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      desc: "Distinguishing immediate deductible repairs from capital works and Division 40 & 43 write-offs.",
    },
    {
      title: "Ownership Percentages and Entity Reporting",
      verbatim: "Ownership percentages and entity reporting",
      icon: <ApartmentOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      desc: "Aligning tax reporting with legal titles across individuals, partnerships, trusts, and companies.",
    },
    {
      title: "Capital Gains Tax When an Investment Property is Sold",
      verbatim: "Capital gains tax when an investment property is sold",
      icon: <HomeOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      desc: "Reconstructing 5-element cost bases, applying the 50% discount, and calculating CGT obligations.",
    },
    {
      title: "GST Where Activities Amount to an Enterprise or Taxable Supplies",
      verbatim: "GST where property activities amount to an enterprise or involve taxable supplies",
      icon: <BankOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      desc: "Assessing enterprise thresholds, registration requirements, and margin scheme rules on sales.",
    },
    {
      title: "Year-End Accounting and Records for Property-Owning Entities",
      verbatim: "Year-end accounting and records for property-owning entities",
      icon: <AuditOutlined className="text-xl text-cyan-600 dark:text-cyan-400" />,
      desc: "Preparing annual financial statements, trust distributions, and corporate compliance schedules.",
    },
    {
      title: "Interaction Between Property and Broader Business Tax",
      verbatim: "The interaction between property transactions and broader business tax compliance.",
      icon: <FileDoneOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      desc: "Integrating property asset transactions with business operations, payroll, BAS, and income tax.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Verbatim H2 and Lead Paragraph from Document */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-800/60 mb-4">
            <SafetyCertificateOutlined className="text-teal-600 dark:text-teal-400 text-xs sm:text-sm" />
            <span className="text-xs font-semibold text-teal-800 dark:text-teal-300 tracking-wide uppercase">
              Australian Property Taxation
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What does a property tax accountant help with?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A property tax accountant reviews how Australian income tax, CGT, GST and accounting rules apply to property ownership and transactions. The work depends on the property’s use, the owner, the source and use of finance, and whether the activity is an investment, business or profit-making undertaking. An individual landlord with one long-term rental property therefore has different reporting issues from a company developing townhouses for sale.
          </p>
        </div>

        {/* Lead subhead for review areas: "Common areas we may review include:" */}
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 m-0">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-500"></span>
            Common areas we may review include:
          </h3>
          <span className="text-xs font-medium text-slate-500 dark:text-zinc-400">
            8 Core Review Focus Areas
          </span>
        </div>

        {/* 8 Verbatim Review Areas in Modern Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-14">
          {exactReviewAreas.map((item, index) => (
            <div
              key={index}
              className="group p-5 sm:p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:border-teal-500/50 dark:hover:border-teal-500/50 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-zinc-800 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {item.verbatim}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed m-0 font-normal">
                  {item.desc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-zinc-800/80 flex items-center gap-1.5 text-xs text-teal-600 dark:text-teal-400 font-medium">
                <CheckCircleOutlined className="text-xs" />
                <span>ATO Compliant Review</span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Consultation Banner */}
        <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white m-0">
                Discuss Your Property Review Scope With Our Team
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed m-0">
                Whether you need assistance with rental deductions, loan interest apportionment, capital gains calculations, or development GST, Financially Up is here to help.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <Link href="/book-an-appointment">
                <Button
                  type="primary"
                  size="large"
                  icon={<ArrowRightOutlined />}
                  iconPlacement="end"
                  className="h-11 px-6 rounded-xl font-semibold shadow-md shadow-brand-primary/20 hover:scale-[1.02] active:scale-[0.99] transition-all"
                >
                  Book an Appointment
                </Button>
              </Link>
              <Link href="#property-services-overview">
                <Button
                  size="large"
                  icon={<EyeOutlined />}
                  className="h-11 px-5 rounded-xl font-semibold border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-200 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-all"
                >
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
