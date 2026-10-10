"use client";

import React from "react";
import { Tag } from "antd";
import {
  BankOutlined,
  FileProtectOutlined,
  ReconciliationOutlined,
  AuditOutlined,
  ApartmentOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";

/**
 * WhatDoesCorporateTrusteeAccountantDo Component
 * ==============================================
 * Section: What does a corporate trustee accountant do?
 * Verbatim text from Page 5 of client docx (8th Pillar Trust Services.docx).
 * Explains the distinction between legal capacity of the trustee company and
 * trust tax accounting, statutory bookkeeping, ASIC administration, and loan reviews.
 */
export default function WhatDoesCorporateTrusteeAccountantDo() {
  const deliverables = [
    {
      icon: <ApartmentOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Capacity & Ownership Alignment",
      desc: "Ensuring transactions, asset titles, and contracts correctly reflect the company acting purely in its capacity as trustee rather than in its own right.",
    },
    {
      icon: <ReconciliationOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Dual Ledger Bookkeeping",
      desc: "Keeping trust income, expenses, and asset balances strictly partitioned from any proprietary accounts of the corporate trustee entity.",
    },
    {
      icon: <FileProtectOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Year-End Accounts & Tax Preparation",
      desc: "Preparing financial statements and trust tax returns in strict compliance with trust deed terms and ATO Section 95 rules.",
    },
    {
      icon: <BankOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "ASIC Administration & Corporate Governance",
      desc: "Maintaining the trustee company’s registered office, annual review fees, director details, and corporate registers with ASIC.",
    },
    {
      icon: <AuditOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Loan Accounts & Beneficiary Balances",
      desc: "Reviewing beneficiary entitlements, unpaid present entitlements (UPEs), and related-party loan accounts to prevent Division 7A exposure.",
    },
    {
      icon: <SafetyCertificateOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Distribution Planning Coordination",
      desc: "Coordinating with 30 June trust distribution resolutions and specialist advisory whenever complex transactions or structural changes occur.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Role & Responsibilities
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What does a corporate trustee accountant do?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A corporate trustee accountant helps keep the trust&apos;s accounting and tax records aligned with the company
            that acts as trustee. The company may hold legal title to trust assets and enter transactions in its capacity
            as trustee, while the trust&apos;s income, expenses, distributions and tax reporting are dealt with under the
            trust rules.
          </p>
          <p className="mt-3 text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
            The work can include year-end trust accounts, tax-return preparation where required, trustee-company
            bookkeeping, ASIC administration for the company, review of loans and beneficiary balances, and coordination
            with distribution planning or other specialist tax work when separately engaged.
          </p>
        </div>

        {/* 6 Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliverables.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
