"use client";

import React from "react";
import {
  ApartmentOutlined,
  UsergroupAddOutlined,
  CalculatorOutlined,
  SafetyCertificateOutlined,
  DollarCircleOutlined,
  BankOutlined,
  TeamOutlined,
  AuditOutlined,
  FileProtectOutlined,
} from "@ant-design/icons";

/**
 * CommonRestructuringIssuesToReview Component
 * ===========================================
 * Section 4: 9 critical pre-transaction mapping issues to review before
 * executing asset transfers, signing contracts, or altering entity structures.
 * Verbatim text from Page 11 of the Tax Planning document.
 */
export default function CommonRestructuringIssuesToReview() {
  const issues = [
    {
      number: "01",
      icon: <ApartmentOutlined className="text-xl text-brand-primary dark:text-emerald-400" />,
      title: "Assets, Contracts & Employees Moving",
      text: "Which assets, liabilities, contracts and employees are actually moving.",
    },
    {
      number: "02",
      icon: <UsergroupAddOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Ownership Continuity Verification",
      text: "Who owns the business before and after the restructure.",
    },
    {
      number: "03",
      icon: <CalculatorOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "CGT, GST & Trading Stock Impacts",
      text: "Whether the transfer creates CGT, GST, depreciation or trading-stock consequences.",
    },
    {
      number: "04",
      icon: <SafetyCertificateOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Rollover Relief Eligibility",
      text: "Whether any tax roll-over may be available and whether its conditions are satisfied.",
    },
    {
      number: "05",
      icon: <DollarCircleOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Existing Entity Loan Balances",
      text: "Existing shareholder, director, partner or beneficiary loan balances.",
    },
    {
      number: "06",
      icon: <BankOutlined className="text-xl text-cyan-600 dark:text-cyan-400" />,
      title: "Bank Finance & Lender Consents",
      text: "Bank finance, security arrangements and lender consent where relevant.",
    },
    {
      number: "07",
      icon: <TeamOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Payroll & Employment Administration",
      text: "Payroll, superannuation and employment administration where an employing entity changes.",
    },
    {
      number: "08",
      icon: <AuditOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Tax & Business Registrations",
      text: "ABN, GST, PAYG withholding and other registrations that may need review.",
    },
    {
      number: "09",
      icon: <FileProtectOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "State Duties & Legal Agreements",
      text: "State duties, legal documents, contracts and licenses that may require separate professional advice.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-primary/10 text-brand-primary dark:bg-emerald-500/10 dark:text-emerald-400 mb-4 border border-brand-primary/20 dark:border-emerald-500/20">
            Pre-Action Mapping
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Common Restructuring Issues to Review Before Acting
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
            A restructure should generally be mapped before transactions occur. Once an asset has been transferred or a contract signed, some tax consequences may already have arisen.
          </p>
        </div>

        {/* 9 Issues Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {issues.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-zinc-800 flex items-center justify-center border border-slate-200/80 dark:border-zinc-700 shadow-xs">
                    {item.icon}
                  </div>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300">
                    {item.number}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
