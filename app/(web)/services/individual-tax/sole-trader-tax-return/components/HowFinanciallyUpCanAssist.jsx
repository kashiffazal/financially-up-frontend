"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  FileTextOutlined,
  SearchOutlined,
  PercentageOutlined,
  CarOutlined,
  FileSyncOutlined,
  QuestionCircleOutlined,
  CheckCircleFilled,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * HowFinanciallyUpCanAssist Component
 * ===================================
 * Section 3: How Financially Up Can Assist.
 * Features 100% complete, verbatim content from Page 4 of the client document.
 */
export default function HowFinanciallyUpCanAssist() {
  const serviceItems = [
    {
      title: "preparing and lodging your individual tax return with sole trader business income",
      detail: "Complete preparation of your individual return including business schedules, income statement reconciliations, and direct ATO portal submission.",
      icon: <FileTextOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
    },
    {
      title: "reviewing income, expenses and supporting records",
      detail: "Thorough verification of your gross revenue, invoices, supplier receipts, and accounting software exports to substantiate claims.",
      icon: <SearchOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
    },
    {
      title: "separating private and business-use amounts",
      detail: "Careful apportionment of phone, internet, vehicle, travel, and personal equipment expenses according to ATO substantiation rules.",
      icon: <PercentageOutlined className="text-xl text-cyan-600 dark:text-cyan-400" />,
    },
    {
      title: "considering assets, vehicles and home-based business costs",
      detail: "Assessment of motor vehicle logbook vs cents-per-km methods, home office running costs, and depreciating machinery or tools.",
      icon: <CarOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
    },
    {
      title: "reviewing GST, BAS and PAYG information where relevant",
      detail: "Reconciling annual tax figures with lodged Business Activity Statements and tracking PAYG income tax instalment credits.",
      icon: <FileSyncOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
    },
    {
      title: "identifying matters requiring clarification",
      detail: "Proactive review of ambiguous transactions, unusual expense spikes, or missing documents before drafting schedules.",
      icon: <QuestionCircleOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
    },
    {
      title: "explaining the return and outcome before lodgement",
      detail: "Clear walkthrough of your net taxable income, estimated refund or tax payable, and obtaining your approval before submission.",
      icon: <CheckCircleFilled className="text-xl text-emerald-600 dark:text-emerald-400" />,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Service Capabilities
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How Financially Up Can Assist
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            An accountant for sole traders can bring business and personal tax information together in one return. Financially Up can assist with:
          </p>
        </div>

        {/* 7 Assistance Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {serviceItems.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-lg hover:border-emerald-400/60 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center transition-transform group-hover:scale-110">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest">
                    Scope 0{idx + 1}
                  </span>
                </div>

                <div className="flex items-start gap-2.5 mb-3">
                  <CheckCircleFilled className="text-brand-primary dark:text-emerald-400 text-sm mt-1 shrink-0" />
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug capitalize-first">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed pl-6 font-normal">
                  {item.detail}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-zinc-800/80 text-xs text-emerald-600 dark:text-emerald-400 font-semibold flex items-center justify-between">
                <span>Included Service</span>
                <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Full Review <ArrowRightOutlined className="text-[10px]" />
                </span>
              </div>
            </div>
          ))}

          {/* 8th Card: Non-Business Cross-Link Callout Card */}
          <div className="flex flex-col justify-between rounded-3xl p-6 sm:p-7 bg-gradient-to-br from-slate-900 via-zinc-900 to-emerald-950 text-white shadow-xl border border-emerald-800/40 relative overflow-hidden">
            <div>
              <Tag color="cyan" className="font-bold text-xs uppercase mb-3 px-3 py-1">
                Personal Only?
              </Tag>
              <h3 className="text-lg sm:text-xl font-extrabold text-white mb-2 leading-snug">
                Non-Business Individual Returns
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6 font-normal">
                If you only need help with personal income that does not involve a business, see our Individual Tax Return Services.
              </p>
            </div>
            <div>
              <Link href="/services/individual-tax/individual-tax-return">
                <Button
                  type="primary"
                  size="large"
                  icon={<ArrowRightOutlined />}
                  iconPosition="end"
                  className="w-full rounded-xl font-bold bg-white text-emerald-950 hover:bg-emerald-50 hover:text-emerald-900 border-none h-11"
                >
                  View Individual Tax Return Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
