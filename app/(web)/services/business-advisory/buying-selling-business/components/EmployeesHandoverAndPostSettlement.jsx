"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  TeamOutlined,
  CalendarOutlined,
  DollarOutlined,
  RiseOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  BankOutlined,
  AuditOutlined,
} from "@ant-design/icons";

/**
 * EmployeesHandoverAndPostSettlement Component
 * ============================================
 * Section 4: What about employees and the handover?
 * Source: 12th Pillar Business Advisory.docx (Page 6: Buying and Selling a Business)
 *
 * Implements 100% complete, verbatim SEO text detailing employee entitlements,
 * payroll registrations, seller net proceeds vs tax liabilities, buyer opening
 * balance sheet and cash flow modeling, plus cross-links to Business Growth.
 */
export default function EmployeesHandoverAndPostSettlement() {
  const handoverAspects = [
    {
      icon: <TeamOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Employee Entitlements",
      desc: "Annual leave, long service leave accruals, and whether liabilities are adjusted off purchase price at settlement.",
    },
    {
      icon: <AuditOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Payroll Registrations",
      desc: "Setting up new Single Touch Payroll (STP), worker compensation policies, and state payroll tax thresholds.",
    },
    {
      icon: <DollarOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Seller Net Proceeds",
      desc: "Modeling gross transaction proceeds after paying debt discharges, staff payouts, trade payables, and CGT liabilities.",
    },
    {
      icon: <BankOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Buyer Working Capital Plan",
      desc: "Opening balance sheet, initial inventory funding, and forward 13-week cash flow buffer for initial post-settlement months.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50/70 dark:bg-zinc-950/70 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Operational Transition &amp; Liquidity
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What About Employees and the Handover?
          </h2>
        </div>

        {/* 2 Primary Verbatim Text Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Entitlements and Legal Allocation */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-3">
                <TeamOutlined />
                <span>Entitlements &amp; Registrations</span>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
                A transaction can affect employee entitlements, payroll
                reporting, registrations, licences and ongoing customer
                relationships. Which obligations remain with the seller or
                transfer to the buyer depends on the structure and applicable
                law. Both parties should identify these matters early rather
                than leave them to settlement week.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-100 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400">
              Early entitlement audits avoid tense last-minute settlement disputes.
            </div>
          </div>

          {/* Card 2: Seller Net Proceeds vs Buyer Capital Plans */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 mb-3">
                <DollarOutlined />
                <span>Post-Completion Working Capital</span>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
                For the seller, tax and payment obligations should be considered
                alongside the proposed proceeds. For the buyer, an opening
                balance sheet, funding plan and first months of cash flow help
                show what capital is needed after completion.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-100 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400">
              Ensuring the acquiring entity has sufficient working capital post-completion.
            </div>
          </div>
        </div>

        {/* 4 Handover Aspects Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {handoverAspects.map((aspect, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 p-5 rounded-xl border border-slate-200/80 dark:border-zinc-800 shadow-2xs"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-50 dark:bg-zinc-800 flex items-center justify-center mb-3">
                {aspect.icon}
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                {aspect.title}
              </h4>
              <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed m-0 font-normal">
                {aspect.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Verbatim Supporting Cross-Link Banner: Business Growth Integration */}
        <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-slate-50 dark:from-emerald-950/30 dark:via-zinc-950 dark:to-zinc-900 rounded-2xl p-7 sm:p-9 border border-emerald-200/80 dark:border-emerald-800/40 shadow-xs">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                <RiseOutlined />
                <span>Post-Acquisition Growth &amp; Capacity</span>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed m-0 font-normal">
                Our{" "}
                <Link
                  href="/services/business-advisory/business-growth"
                  className="font-semibold text-brand-primary dark:text-emerald-400 hover:underline"
                >
                  business growth service
                </Link>{" "}
                explains the post-acquisition forecast and capacity questions.
              </p>
            </div>

            <div className="shrink-0">
              <Link href="/services/business-advisory/business-growth">
                <Button
                  type="primary"
                  icon={<ArrowRightOutlined />}
                  iconPlacement="end"
                  className="rounded-xl font-bold px-6 h-11 shadow-sm"
                >
                  Explore Business Growth
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
