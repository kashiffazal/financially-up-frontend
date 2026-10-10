"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  FileTextOutlined,
  AuditOutlined,
  TeamOutlined,
  BankOutlined,
  BulbOutlined,
  CalendarOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * WhatToBringToGrowthDiscussion Component
 * =======================================
 * Section 6: What to bring to the first discussion.
 * Source: 12th Pillar Business Advisory.docx (Page 4: Business Growth)
 *
 * Implements 100% complete, verbatim SEO text detailing preparation items
 * for an initial commercial consultation, scope agreement, and baseline verification.
 */
export default function WhatToBringToGrowthDiscussion() {
  const preparationItems = [
    {
      icon: <FileTextOutlined className="text-emerald-600 dark:text-emerald-400" />,
      title: "Recent Financial Statements",
      desc: "Profit & Loss statements and balance sheets for recent trading years.",
    },
    {
      icon: <AuditOutlined className="text-teal-600 dark:text-teal-400" />,
      title: "Management Reports",
      desc: "Monthly management accounting summaries and up-to-date trial balances.",
    },
    {
      icon: <TeamOutlined className="text-blue-600 dark:text-blue-400" />,
      title: "Current Debtors List",
      desc: "Aged receivables report showing debtor payment terms and overdue balances.",
    },
    {
      icon: <BankOutlined className="text-indigo-600 dark:text-indigo-400" />,
      title: "Loan & Finance Details",
      desc: "Commercial debt facilities, equipment leases, interest rates, and balances.",
    },
    {
      icon: <BulbOutlined className="text-amber-600 dark:text-amber-400" />,
      title: "Opportunity Description",
      desc: "A short description of the expansion, contract, new location, or new hire.",
    },
    {
      icon: <CalendarOutlined className="text-rose-600 dark:text-rose-400" />,
      title: "Existing Budget or Forecast",
      desc: "Bring any existing projections or models, even if rough or incomplete.",
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
            Consultation Preparation
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What to Bring to the First Discussion
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Recent financial statements, management reports, a current debtors
            list, loan details and a short description of the opportunity
            provide a useful starting point. Bring any existing budget or
            forecast, even if it is rough. We can agree which figures need
            checking and the scope of analysis before further work begins.
          </p>
        </div>

        {/* 6 Preparation Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {preparationItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-slate-200/80 dark:border-zinc-800 shadow-2xs hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-zinc-800 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed m-0 font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Action Row */}
        <div className="text-center">
          <Link href="/book-an-appointment">
            <Button
              type="primary"
              size="large"
              icon={<ArrowRightOutlined />}
              iconPlacement="end"
              className="rounded-xl font-bold px-7 h-12 shadow-md shadow-brand-primary/20"
            >
              Book an Initial Discussion
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
