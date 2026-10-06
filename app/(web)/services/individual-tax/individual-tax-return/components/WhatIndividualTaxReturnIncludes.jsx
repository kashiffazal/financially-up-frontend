"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  CheckCircleOutlined,
  InfoCircleOutlined,
  ArrowRightOutlined,
  WalletOutlined,
  DollarOutlined,
  LineChartOutlined,
  FileSearchOutlined,
  AuditOutlined,
} from "@ant-design/icons";

/**
 * WhatIndividualTaxReturnIncludes Component
 * =========================================
 * Section 1: What Individual Tax Return Services Include.
 * Features 100% complete, verbatim content from Page 2 of client docx.
 * Always utilizes Ant Design Button components for interactive actions.
 */
export default function WhatIndividualTaxReturnIncludes() {
  const scopeItems = [
    {
      icon: <WalletOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "reviewing salary and wage income and other income information",
      detail: "Detailed review of PAYG payment summaries, employment allowances, and employer pre-fill records.",
    },
    {
      icon: <DollarOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "considering work-related expenses and other deductions relevant to your circumstances",
      detail: "Careful assessment of eligible occupational deductions, vehicle logbooks, home office claims, and self-education.",
    },
    {
      icon: <LineChartOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "reviewing investment income, rental property records, capital gains, crypto asset transactions or foreign income",
      detail: "Rigorous reconciliation of property schedules, CGT events, dividends, franking credits, overseas assets, and crypto trading logs.",
    },
    {
      icon: <FileSearchOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "identifying information that is missing or requires clarification",
      detail: "Proactive identification of incomplete schedules, ambiguous transactions, or necessary documentation prior to drafting.",
    },
    {
      icon: <AuditOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "preparing the return and explaining the key figures before lodgement",
      detail: "Preparation of complete ATO schedules, transparent walkthrough of calculations, and client approval prior to submission.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Practice Scope Overview
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Individual Tax Return Services Include
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Individual tax return services involve reviewing your personal tax information, preparing your income tax return and lodging it with the Australian Taxation Office after you have reviewed and approved it. Depending on your circumstances and the agreed work, the service may include:
          </p>
        </div>

        {/* 5 Scope Items Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {scopeItems.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between bg-white dark:bg-zinc-900 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-lg hover:border-emerald-400/60 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest">
                    Scope 0{idx + 1}
                  </span>
                </div>

                <div className="flex items-start gap-2.5 mb-3">
                  <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-sm mt-1 shrink-0" />
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug capitalize-first">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed pl-6 font-normal">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}

          {/* 6th Card: Book an Appointment CTA Card */}
          <div className="flex flex-col justify-between rounded-2xl p-6 sm:p-7 bg-gradient-to-br from-emerald-800 to-teal-900 text-white shadow-lg border border-emerald-700/60 relative overflow-hidden">
            <div className="relative z-10">
              <span className="text-[11px] font-extrabold text-emerald-200 uppercase tracking-widest block mb-2">
                Get Started
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-white mb-2 leading-snug">
                Book Your Personal Tax Consultation
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed mb-6 font-normal">
                Speak directly with an Australian registered tax accountant to review your income, deductions, and lodgement requirements.
              </p>
            </div>
            <div className="relative z-10">
              <Link href="/book-an-appointment">
                <Button
                  type="primary"
                  size="large"
                  icon={<ArrowRightOutlined />}
                  iconPosition="end"
                  className="w-full rounded-xl font-bold bg-white text-emerald-900 hover:bg-emerald-50 hover:text-emerald-950 border-none h-11"
                >
                  Book an Appointment
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer / Statutory Note from Client Document */}
        <div className="rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/50 p-5 sm:p-6 flex items-start gap-3.5 w-full">
          <InfoCircleOutlined className="text-amber-600 dark:text-amber-400 text-lg mt-0.5 shrink-0" />
          <p className="text-xs sm:text-sm text-amber-900 dark:text-amber-200 leading-relaxed font-normal">
            <strong>Important Regulatory Notice:</strong> The treatment of any item depends on your circumstances, supporting records and Australian tax law. Financially Up does not promise a particular refund, deduction or tax saving.
          </p>
        </div>
      </div>
    </section>
  );
}
