"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  ShopOutlined,
  UserSwitchOutlined,
  SwapOutlined,
  ToolOutlined,
  RiseOutlined,
  QuestionCircleOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * WhoNeedsXeroBookkeeper Component
 * =================================
 * Section 2: Who May Need a Xero Bookkeeper?
 * Features 100% complete, verbatim content from Page 2 of client docx.
 */
export default function WhoNeedsXeroBookkeeper() {
  const targetProfiles = [
    {
      icon: <ShopOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Small businesses using Xero but struggling to keep the file current",
      desc: "When business operations take priority, transaction backlogs can build up quickly. We step in to keep your records current week-in, week-out.",
    },
    {
      icon: <UserSwitchOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Owners who want to outsource routine bookkeeping",
      desc: "Free up valuable executive time by delegating data processing, reconciliations, and document management to certified professionals.",
    },
    {
      icon: <SwapOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Businesses that have changed bookkeepers or accounting processes",
      desc: "Smoothly navigate staff transitions or previous process gaps without risking lost transaction history or interrupted compliance.",
    },
    {
      icon: <ToolOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Businesses needing clean-up before BAS or year-end work",
      desc: "Eliminate stressful quarter-end or tax-time scrambles by resolving unreconciled lines, incorrect codes, and suspense balances first.",
    },
    {
      icon: <RiseOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Growing businesses that want a more consistent monthly routine",
      desc: "Establish reliable, predictable month-end closing procedures that provide trustworthy figures for management decisions and cash forecasting.",
    },
    {
      icon: <QuestionCircleOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Owners who need help understanding what information their bookkeeper requires",
      desc: "Get crystal-clear document checklists and collaborative support so you always know what receipts, statements, and details are needed.",
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
            Who may need a Xero bookkeeper?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A Xero bookkeeper can be useful when the software is in place but the records are not being maintained consistently. Common signs include growing numbers of unreconciled transactions, duplicated or unclear accounts, inconsistent expense coding, old items that have never been resolved, or a file that becomes stressful at BAS or tax time.
          </p>
        </div>

        {/* 6 Target Profile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {targetProfiles.map((item, idx) => (
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
            Recognise any of these challenges in your business? Speak with our team to restore order and reliability to your Xero file.
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
