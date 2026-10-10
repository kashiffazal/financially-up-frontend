"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileTextOutlined,
  FileProtectOutlined,
  SwapOutlined,
  BankOutlined,
  DollarCircleOutlined,
  ApartmentOutlined,
  HomeOutlined,
  CheckCircleOutlined,
  AuditOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

/**
 * RecordsUnitTrustShouldKeep Component
 * ====================================
 * Section: What records should a unit trust keep?
 * Verbatim text from Page 3 of client docx.
 * Checklist of 9 statutory and accounting records, highlighting compliance
 * when multiple unrelated investors or ownership transfers occur.
 */
export default function RecordsUnitTrustShouldKeep() {
  const recordsList = [
    {
      icon: <FileTextOutlined className="text-teal-600 dark:text-teal-400" />,
      title: "Trust Deed & Variations",
      text: "the trust deed and all variations",
    },
    {
      icon: <FileProtectOutlined className="text-blue-600 dark:text-blue-400" />,
      title: "Unit Register & Unit Classes",
      text: "current unit register and details of unit classes",
    },
    {
      icon: <SwapOutlined className="text-purple-600 dark:text-purple-400" />,
      title: "Subscription, Transfer & Redemption Records",
      text: "unit subscription, transfer and redemption records",
    },
    {
      icon: <BankOutlined className="text-emerald-600 dark:text-emerald-400" />,
      title: "Bank & Investment Statements",
      text: "bank and investment statements",
    },
    {
      icon: <DollarCircleOutlined className="text-amber-600 dark:text-amber-400" />,
      title: "Income & Expense Records",
      text: "income and expense records",
    },
    {
      icon: <ApartmentOutlined className="text-rose-600 dark:text-rose-400" />,
      title: "Loan Agreements & Related Accounts",
      text: "loan agreements and related-entity account details",
    },
    {
      icon: <HomeOutlined className="text-cyan-600 dark:text-cyan-400" />,
      title: "Asset Purchase & Sale Documentation",
      text: "asset purchase and sale documentation",
    },
    {
      icon: <CheckCircleOutlined className="text-indigo-600 dark:text-indigo-400" />,
      title: "Trustee Minutes & Distributions",
      text: "trustee minutes and distribution records",
    },
    {
      icon: <AuditOutlined className="text-teal-600 dark:text-teal-400" />,
      title: "Prior-Year Accounts & Tax Returns",
      text: "prior-year accounts and tax returns",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Compliance Records Checklist
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What records should a unit trust keep?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A unit trust compliance accountant may request:
          </p>
        </div>

        {/* 3-Column 9 Records Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {recordsList.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm hover:shadow-md flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 flex items-center justify-center shrink-0 mt-0.5">
                {item.icon}
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-zinc-300 capitalize font-medium flex items-center gap-1.5">
                  <CheckCircleOutlined className="text-emerald-500 text-xs shrink-0" />
                  <span>{item.text}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Critical Unrelated Investors Note */}
        <div className="p-6 sm:p-8 rounded-2xl bg-amber-50/70 dark:bg-zinc-900 border border-amber-200 dark:border-amber-900/60 shadow-sm flex flex-col md:flex-row items-start md:items-center gap-5">
          <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-800 border border-amber-300 dark:border-amber-700 flex items-center justify-center shrink-0">
            <ExclamationCircleOutlined className="text-xl text-amber-600 dark:text-amber-400" />
          </div>
          <div className="space-y-1">
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              Multiple Unrelated Investors & Mid-Year Ownership Changes
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Keeping the unit register and financial records consistent is particularly important where there are
              multiple unrelated investors or ownership has changed during the year.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
