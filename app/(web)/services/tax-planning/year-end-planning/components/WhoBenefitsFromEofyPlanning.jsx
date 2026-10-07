"use client";

import React from "react";
import {
  ShopOutlined,
  UserOutlined,
  DollarCircleOutlined,
  ShoppingCartOutlined,
  CalculatorOutlined,
  SafetyCertificateOutlined,
  FolderOpenOutlined,
  CheckCircleFilled,
} from "@ant-design/icons";

/**
 * WhoBenefitsFromEofyPlanning Component
 * =====================================
 * Section 2: 7 key beneficiary groups for EOFY planning across
 * business owners, investors, and individuals.
 * Verbatim text from Page 7 of the Tax Planning document.
 */
export default function WhoBenefitsFromEofyPlanning() {
  const beneficiaryProfiles = [
    {
      icon: <ShopOutlined className="text-xl text-brand-primary dark:text-emerald-400" />,
      title: "Business Owners with Changing Profit",
      text: "Business owners expecting a material change in profit, drawings, tax obligations or cash flow.",
    },
    {
      icon: <UserOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Individuals with Multiple Incomes",
      text: "Individuals with multiple income sources, bonuses, investments, rental property or capital gains.",
    },
    {
      icon: <DollarCircleOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Asset Sellers & Investors",
      text: "People planning to sell property, shares or other CGT assets.",
    },
    {
      icon: <ShoppingCartOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Capital Equipment Buyers",
      text: "Businesses considering significant asset purchases or year-end expenditure.",
    },
    {
      icon: <CalculatorOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "PAYG Instalment Payers",
      text: "Taxpayers whose PAYG instalments may no longer reflect their current income position.",
    },
    {
      icon: <SafetyCertificateOutlined className="text-xl text-cyan-600 dark:text-cyan-400" />,
      title: "Superannuation Contributors",
      text: "People considering personal deductible superannuation contributions, where eligible and appropriate.",
    },
    {
      icon: <FolderOpenOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Taxpayers with Record Gaps",
      text: "Anyone whose records are incomplete and who wants to identify gaps before tax-return preparation begins.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-primary/10 text-brand-primary dark:bg-emerald-500/10 dark:text-emerald-400 mb-4 border border-brand-primary/20 dark:border-emerald-500/20">
            Client Scenarios &amp; Eligibility
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Who May Benefit From EOFY Tax Planning?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
            EOFY tax planning can be useful when your income, business activity or investment position has changed during the year, or when a significant transaction is expected before or shortly after 30 June.
          </p>
        </div>

        {/* 7 Beneficiary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {beneficiaryProfiles.map((item, idx) => (
            <div
              key={idx}
              className={`bg-white dark:bg-zinc-900 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between ${
                idx === 6 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-50 dark:bg-zinc-800 flex items-center justify-center border border-slate-200/80 dark:border-zinc-700 shadow-xs">
                    {item.icon}
                  </div>
                  <CheckCircleFilled className="text-emerald-500 text-lg" />
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
