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
 * Covers assessable business income, deductions, capital asset depreciation,
 * and visually organizes the 9 primary accounting and compliance areas.
 */
export default function BusinessTaxReporting() {
  /**
   * The 9 Accounting & Compliance Areas from the client document
   */
  const complianceAreas = [
    {
      num: "01",
      icon: <FileTextOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Business Income Tax Returns",
      description:
        "Preparation and lodgment of annual company, trust, partnership, and sole trader tax returns according to ATO specifications.",
    },
    {
      num: "02",
      icon: <CalculatorOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Year-End Financial Statements",
      description:
        "Compilation of balance sheets, profit & loss statements, notes, and general ledger reconciliations for management and tax reporting.",
    },
    {
      num: "03",
      icon: <CheckCircleOutlined className="text-xl text-cyan-600 dark:text-cyan-400" />,
      title: "Income & Deduction Reviews",
      description:
        "Scrutiny of commercial revenue streams, allowable deductions, prepayments, and substantiation documentation under ATO rules.",
    },
    {
      num: "04",
      icon: <DollarOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "GST & BAS Accounting Support",
      description:
        "Reconciling annual GST accounts with quarterly Business Activity Statements (BAS) and adjusting input tax credit anomalies.",
    },
    {
      num: "05",
      icon: <CalendarOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "PAYG Instalment Management",
      description:
        "Evaluating quarterly Pay As You Go (PAYG) instalment rates and planning for future corporate and personal tax liabilities.",
    },
    {
      num: "06",
      icon: <LineChartOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Business Assets & Depreciation",
      description:
        "Maintaining fixed-asset registers, calculating instant asset write-offs, general depreciation pools, and capital allowance deductions.",
    },
    {
      num: "07",
      icon: <SafetyCertificateOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Business Loss & Carried-Forward Rules",
      description:
        "Navigating company continuity of ownership and business continuity tests to safeguard and utilize carried-forward tax losses.",
    },
    {
      num: "08",
      icon: <UserSwitchOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Related-Party & Director Loans",
      description:
        "Reviewing director drawings, shareholder loan accounts, and Division 7A benchmark interest requirements to prevent deemed dividends.",
    },
    {
      num: "09",
      icon: <BulbOutlined className="text-xl text-orange-600 dark:text-orange-400" />,
      title: "Strategic Tax Planning",
      description:
        "Pre-30 June tax planning, timing of capital transactions, distribution modelling, and corporate group structuring (separately scoped).",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50/60 dark:bg-zinc-950 border-t border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <Tag color="green" className="brand-section-tag">
            Accounting &amp; Deductions
          </Tag>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.2]">
            Business Income, Expenses &amp; Tax Reporting
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            Most income earned from carrying on a business is assessable for
            income tax purposes. We ensure your revenue, claims, and accounts
            reconcile seamlessly before lodging with the ATO.
          </p>
        </div>

        {/* Narrative Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          <div className="p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 flex items-center justify-center text-brand-primary dark:text-emerald-400 font-bold">
              1
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0 tracking-tight">
              Assessable Income &amp; Legitimate Deductions
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed m-0 font-normal">
              Businesses can claim deductions for expenses incurred in gaining or
              producing assessable income, provided they are supported by
              valid records. Some expenditures qualify for immediate deductions,
              while others must be capitalized, depreciated over effective
              lives, or handled under specific statutory tax provisions.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-lg bg-teal-50 dark:bg-teal-950/50 flex items-center justify-center text-teal-600 dark:text-teal-400 font-bold">
              2
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0 tracking-tight">
              Commercial Scrutiny Beyond Raw Bookkeeping
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed m-0 font-normal">
              A qualified small business accountant should never just copy
              software totals into a tax return. Year-end work must confirm that
              reconciliations balance, private amounts are strictly quarantined
              from business accounts, capital asset purchases are correctly
              classified, and the tax treatment reflects economic reality.
            </p>
          </div>
        </div>

        {/* Sub-Heading for 9 Practice Areas */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            Accounting and Compliance Areas We Can Assist With
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 mt-1 font-normal">
            Targeted service scopes tailored to your business structure and records.
          </p>
        </div>

        {/* 9 Compliance Area Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {complianceAreas.map((area) => (
            <div
              key={area.num}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:border-brand-primary/40 dark:hover:border-emerald-600/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-zinc-800 flex items-center justify-center shadow-2xs">
                    {area.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400 dark:text-zinc-500">
                    {area.num}
                  </span>
                </div>

                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
                  {area.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal m-0">
                  {area.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Scope Boundary Notice from Client Document */}
        <div className="rounded-xl p-5 sm:p-6 bg-slate-100/80 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <ExclamationCircleOutlined className="text-brand-primary dark:text-emerald-400 text-lg mt-0.5 shrink-0" />
            <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed m-0 font-normal">
              <strong>Individualized Engagement Scope:</strong> These services
              are scoped according to your business and its records. Specialist
              advice, corporate restructuring, or detailed tax planning is not
              assumed to be included in routine return preparation and can be
              quoted and scoped separately where required.
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
              Scope My Business
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
