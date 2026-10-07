"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  RiseOutlined,
  ProjectOutlined,
  SyncOutlined,
  EyeOutlined,
  DesktopOutlined,
  TeamOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * WhoMayBenefitAccountsReceivable Component
 * =========================================
 * Section 2: Who May Benefit from Outsourced Accounts Receivable?
 * Features 100% complete, verbatim content from Page 7 of client docx.
 */
export default function WhoMayBenefitAccountsReceivable() {
  const benefitProfiles = [
    {
      icon: <RiseOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Growing businesses with a rising volume of customer invoices",
      desc: "Prevent billing bottlenecks as sales surge, ensuring every client order is dispatched and tracked systematically.",
    },
    {
      icon: <ProjectOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Service businesses that invoice after completing work or at project milestones",
      desc: "Turn timesheet and project deliverable completions into immediate cash inflows with timely progress billing.",
    },
    {
      icon: <SyncOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Businesses with recurring customer billing",
      desc: "Manage monthly retainer cycles, subscriptions, and recurring customer direct debits without manual friction.",
    },
    {
      icon: <EyeOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Owners who want regular oversight of aged receivables",
      desc: "Gain crystal-clear visibility into 30, 60, and 90+ day debtor aging buckets to protect working capital liquidity.",
    },
    {
      icon: <DesktopOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Businesses moving from ad hoc spreadsheets to structured accounting software",
      desc: "Upgrade away from error-prone Excel debtor trackers to structured cloud accounting platforms like Xero.",
    },
    {
      icon: <TeamOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Teams that need reliable bookkeeping support without hiring a full-time accounts receivable employee",
      desc: "Access dedicated professional debtor management without the high fixed overhead of full-time internal salaries.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Client Profile &amp; Scenarios
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Who may benefit from outsourced accounts receivable?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Accounts receivable outsourcing can be useful where the owner or internal team is spending too much time following up invoices, customer records are inconsistent, payment allocations are falling behind, or management wants clearer visibility over debtors.
          </p>
        </div>

        {/* 6 Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {benefitProfiles.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 hover:border-emerald-400/70 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/70 dark:border-zinc-800 flex items-center justify-center mb-5 shadow-xs">
                  {item.icon}
                </div>

                <div className="flex items-start gap-2.5 mb-3">
                  <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-sm mt-1 shrink-0" />
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal pl-6">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-zinc-800/80 flex items-center justify-between text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest pl-6">
                <span>Scenario 0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Strip */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm text-slate-600 dark:text-zinc-300 mb-4 font-normal">
            Tired of chasing overdue customer payments after hours? Let our professional team streamline your debtor cycle.
          </p>
          <Link href="/book-an-appointment">
            <Button
              type="primary"
              size="large"
              icon={<ArrowRightOutlined />}
              iconPosition="end"
              className="font-bold"
            >
              Book an Appointment
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
