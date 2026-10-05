"use client";

import React from "react";
import { Tag, Button } from "antd";
import {
  SolutionOutlined,
  CheckCircleOutlined,
  UserOutlined,
  ShopOutlined,
  PieChartOutlined,
  LineChartOutlined,
  FileTextOutlined,
  FileProtectOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import Link from "next/link";

/**
 * WhatInformationNeeded Component
 * ===============================
 * Section 7: What Information Is Needed for Setup?
 *
 * Detailed checklist of the 6 essential categories of data and documentation
 * required to establish or review a business structure accurately.
 *
 * Background: Lite Brand Gradient.
 */
export default function WhatInformationNeeded() {
  const checklistCards = [
    {
      icon: <UserOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Owners, Directors & Director IDs",
      tag: "Identity & Consent",
      items: [
        "Full legal names, residential addresses, and dates of birth",
        "Tax File Numbers (TFNs) for all associates and partners",
        "Mandatory 15-digit Director IDs for all proposed directors",
        "Signed written consent to act as director or secretary",
      ],
    },
    {
      icon: <ShopOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Enterprise Activities & Start Date",
      tag: "Commercial Scope",
      items: [
        "Detailed description of main business activities and industry",
        "Genuine business commencement date or planned launch date",
        "Principal place of business and registered office addresses",
        "Online domain names, websites, or social trading channels",
      ],
    },
    {
      icon: <PieChartOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Ownership Percentages & Shares",
      tag: "Capital Structure",
      items: [
        "Number, value, and classes of shares to be issued (Pty Ltd)",
        "Member share allocations and written shareholder consents",
        "Partnership profit and loss distribution ratios",
        "Trust beneficiary designations and corporate trustee setup",
      ],
    },
    {
      icon: <LineChartOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Turnover Forecasts & Thresholds",
      tag: "Statutory Triggers",
      items: [
        "Expected first-year turnover to assess GST compulsory threshold ($75k)",
        "Anticipated employee headcount and payroll schedules for PAYG",
        "Quarterly or monthly BAS reporting cycle preferences",
        "State or territory payroll tax aggregation considerations",
      ],
    },
    {
      icon: <FileTextOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Existing Entities, ABNs & Numbers",
      tag: "Current Records",
      items: [
        "Existing sole trader, partnership, or corporate ABNs and ACNs",
        "Prior activity statements, tax returns, and balance sheets",
        "Company constitution, replaceable rules, or existing trust deeds",
        "Authorised contact details for ATO and ASIC correspondence",
      ],
    },
    {
      icon: <FileProtectOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Commercial Contracts & Assets",
      tag: "Asset Inventory",
      items: [
        "Commercial premises leases, hire-purchase, or loan agreements",
        "Valuable plant, equipment, tooling, or vehicle registrations",
        "Registered trademarks, intellectual property, and patents",
        "Customer contracts or vendor agreements transferring to the new entity",
      ],
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-800/60 mb-4">
            <SolutionOutlined className="text-teal-600 dark:text-teal-400 text-xs sm:text-sm" />
            <span className="text-xs font-semibold text-teal-800 dark:text-teal-300 tracking-wide uppercase">
              Onboarding Checklist
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Information Is Needed for Setup?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
            Providing accurate information early prevents registrations from being created under the wrong entity or with conflicting details across ASIC and the Australian Business Register.
          </p>
        </div>

        {/* 6 Checklist Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {checklistCards.map((card, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm hover:border-teal-500/40 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-zinc-800 flex items-center justify-center">
                    {card.icon}
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 font-mono">
                    {card.tag}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-4">
                  {card.title}
                </h3>
                <ul className="space-y-2.5">
                  {card.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed"
                    >
                      <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 mt-1 shrink-0 text-xs" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Helper */}
        <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
          <div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white m-0">
              Not sure which details apply to your entity?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 m-0 mt-1">
              Book an appointment with Financially Up. We&apos;ll walk you through the checklist and coordinate your setup.
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
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
