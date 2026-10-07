"use client";

import React from "react";
import { Tag } from "antd";
import {
  SafetyCertificateOutlined,
  CalendarOutlined,
  CarOutlined,
  CoffeeOutlined,
  HomeOutlined,
  DollarOutlined,
  GiftOutlined,
} from "@ant-design/icons";

/**
 * WhatIsFbtAndWhenNeeded Component
 * Covers 'What Is Fringe Benefits Tax?' and 'When Might You Need an FBT Accountant?'
 * from Page 6 of 5th Pillar BAS, GST & Payroll.docx.
 */
export default function WhatIsFbtAndWhenNeeded() {
  const commonBenefits = [
    {
      icon: <CarOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Company Cars & Private Travel",
      desc: "Vehicles provided to employees or their associates that are available for private journeys or garaged at home.",
    },
    {
      icon: <CoffeeOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Meal Entertainment & Functions",
      desc: "Providing food, drink, recreation, staff parties, corporate lunches, or event tickets to team members.",
    },
    {
      icon: <DollarOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Expense Reimbursements",
      desc: "Reimbursing private employee expenses such as school fees, personal health insurance, or utility accounts.",
    },
    {
      icon: <GiftOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Low-Interest or Interest-Free Loans",
      desc: "Providing commercial or personal finance to employees below the statutory benchmark interest rate.",
    },
    {
      icon: <HomeOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Housing & Accommodation",
      desc: "Providing free or subsidized residential premises, holiday units, or temporary living away from home allowances.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Part 1: What Is Fringe Benefits Tax? */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-6">
            <Tag color="purple" className="brand-section-tag font-bold tracking-wider uppercase text-xs">
              <SafetyCertificateOutlined className="mr-1.5" />
              Tax Definition
            </Tag>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              What Is Fringe Benefits Tax?
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Fringe benefits tax is a tax paid by employers on certain benefits provided to employees or their associates in connection with employment. It is separate from income tax and is administered on an FBT year that generally runs from 1 April to 31 March.
            </p>

            <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Not every employee benefit is subject to FBT. Exemptions, concessions and valuation rules can apply depending on the type of benefit and the circumstances. That is why FBT should be reviewed by benefit category rather than treated as a single blanket calculation.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200 dark:border-zinc-700 shadow-xs space-y-4">
              <div className="flex items-center gap-3 text-brand-primary dark:text-emerald-400">
                <CalendarOutlined className="text-2xl" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  The FBT Year (1 April – 31 March)
                </h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Unlike corporate income tax which follows the standard 1 July to 30 June fiscal year, Fringe Benefits Tax operates on its own dedicated 12-month calendar ending on 31 March.
              </p>
            </div>
          </div>
        </div>

        {/* Part 2: When Might You Need an FBT Accountant? */}
        <div className="pt-12 border-t border-slate-200/80 dark:border-zinc-800">
          <div className="max-w-3xl mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">
              When Might You Need an FBT Accountant?
            </h3>
            <p className="text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
              You may need a fringe benefits tax accountant if your business provides benefits such as vehicles available for private use, expense reimbursements, entertainment, loans, accommodation or other non-cash benefits to employees or their associates. The actual FBT treatment depends on the facts and applicable rules.
            </p>
            <p className="text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              An FBT review can also be useful if the business has changed remuneration practices, introduced new benefits, acquired vehicles, reimbursed private expenses or has not reviewed FBT for some time.
            </p>
          </div>

          {/* 5 Benefit Types Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonBenefits.map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-200/80 dark:border-zinc-700/80 hover:border-emerald-400/60 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-700/60 border border-slate-200/60 dark:border-zinc-600/40 flex items-center justify-center mb-5">
                    {item.icon}
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
