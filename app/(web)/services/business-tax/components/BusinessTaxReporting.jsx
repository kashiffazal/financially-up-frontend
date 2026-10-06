"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  FileTextOutlined,
  CalculatorOutlined,
  CheckCircleOutlined,
  DollarOutlined,
  CalendarOutlined,
  LineChartOutlined,
  SafetyCertificateOutlined,
  UserSwitchOutlined,
  BulbOutlined,
  ExclamationCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * BusinessTaxReporting Component
 * ===============================
 * Section 4: Business Income, Expenses and Tax Reporting.
 *
 * Covers assessable business income, deductions, capital expenditure treatment,
 * and organizes the 9 primary accounting and compliance areas.
 *
 * All text is 100% VERBATIM from the professional SEO specialist document:
 * '2nd pillar Business Tax Final Pages.docx'.
 */
export default function BusinessTaxReporting() {
  /**
   * The 9 Accounting and Compliance Areas from the client document (verbatim)
   */
  const complianceAreas = [
    {
      num: "01",
      icon: <FileTextOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Business Income Tax Returns",
      text: "Business income tax returns for relevant entity types",
    },
    {
      num: "02",
      icon: <CalculatorOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Year-End Financial Statements",
      text: "Year-end financial statements and accounts preparation",
    },
    {
      num: "03",
      icon: <CheckCircleOutlined className="text-xl text-cyan-600 dark:text-cyan-400" />,
      title: "Income & Deduction Reviews",
      text: "Business income and deduction reviews",
    },
    {
      num: "04",
      icon: <DollarOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "GST & BAS Accounting Support",
      text: "GST and BAS-related accounting support where relevant",
    },
    {
      num: "05",
      icon: <CalendarOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "PAYG Instalment & Tax Payments",
      text: "PAYG instalment and tax-payment considerations",
    },
    {
      num: "06",
      icon: <LineChartOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Business Assets & Depreciation",
      text: "Accounting for business assets and depreciation where applicable",
    },
    {
      num: "07",
      icon: <SafetyCertificateOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Carried-Forward Losses",
      text: "Business loss and carried-forward loss considerations",
    },
    {
      num: "08",
      icon: <UserSwitchOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Related-Party & Director Accounts",
      text: "Related-party, shareholder or director account reviews where relevant",
    },
    {
      num: "09",
      icon: <BulbOutlined className="text-xl text-orange-600 dark:text-orange-400" />,
      title: "Tax Planning & Advisory Work",
      text: "Tax planning or advisory work where separately scoped",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-zinc-950 border-b border-slate-100 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <Tag color="green" className="brand-section-tag">
            Accounting &amp; Deductions
          </Tag>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.2]">
            Business Income, Expenses and Tax Reporting
          </h2>
        </div>

        {/* Narrative Feature Cards (Verbatim Paragraphs 1 & 2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="p-7 sm:p-8 rounded-2xl bg-slate-50/70 dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs space-y-4 hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 flex items-center justify-center text-brand-primary dark:text-emerald-400 font-bold">
              1
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0 tracking-tight">
              Assessable Business Income &amp; Deductions
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed m-0 font-normal">
              Most income earned from carrying on a business is assessable for
              income tax purposes. Businesses may also be able to claim
              deductions for expenses incurred in earning assessable business
              income, subject to the tax rules and appropriate records. Some
              costs are deductible immediately, while others may need to be
              treated as capital expenditure, depreciated or dealt with under
              specific provisions.
            </p>
          </div>

          <div className="p-7 sm:p-8 rounded-2xl bg-slate-50/70 dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs space-y-4 hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-lg bg-teal-50 dark:bg-teal-950/50 flex items-center justify-center text-teal-600 dark:text-teal-400 font-bold">
              2
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0 tracking-tight">
              Reconciling Accounts &amp; Commercial Accuracy
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed m-0 font-normal">
              A small business accountant should therefore do more than copy
              bookkeeping totals into a tax return. Year-end work should
              consider whether the accounting records reconcile, whether private
              and business amounts have been separated correctly, whether asset
              purchases have been classified properly and whether the tax
              treatment matches the underlying transaction.
            </p>
          </div>
        </div>

        {/* Sub-Heading for 9 Practice Areas (Verbatim from Document) */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Accounting and Compliance Areas We Can Assist With
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 mt-2 font-normal">
            Targeted service scopes tailored to your business structure and records.
          </p>
        </div>

        {/* 9 Compliance Area Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {complianceAreas.map((area) => (
            <div
              key={area.num}
              className="p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:border-brand-primary/40 dark:hover:border-emerald-600/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-800 flex items-center justify-center shadow-2xs">
                    {area.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400 dark:text-zinc-500">
                    {area.num}
                  </span>
                </div>

                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
                  {area.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal m-0">
                  {area.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Scope Boundary Notice from Client Document (verbatim) */}
        <div className="rounded-xl p-5 sm:p-6 bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <ExclamationCircleOutlined className="text-brand-primary dark:text-emerald-400 text-lg mt-0.5 shrink-0" />
            <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed m-0 font-normal">
              These services are scoped according to the business and its
              records. Specialist advice, restructuring or tax planning is not
              assumed to be included in routine return preparation and can be
              discussed separately where needed.
            </p>
          </div>

          <Link href="/book-an-appointment" className="shrink-0">
            <Button
              type="primary"
              size="middle"
              icon={<ArrowRightOutlined />}
              iconPlacement="end"
              className="bg-brand-primary hover:bg-brand-primary-hover border-none font-bold text-xs h-10 px-5 rounded-lg shadow-sm"
            >
              Book an Appointment
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
