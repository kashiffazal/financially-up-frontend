"use client";

import React from "react";
import { Tag } from "antd";
import {
  DollarOutlined,
  CarOutlined,
  ClockCircleOutlined,
  CheckCircleOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

/**
 * WhenNeedGstRegistration Component
 * Covers 'When do you need to register for GST?' and 'Voluntary GST registration'
 * from Page 3 of 5th Pillar BAS, GST & Payroll.docx.
 */
export default function WhenNeedGstRegistration() {
  const specialRules = [
    {
      icon: <CarOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Taxi & Ride-Sourcing Travel",
      desc: "Mandatory GST registration from day one, regardless of your annual turnover level (e.g., Uber, Didi, taxi operators).",
    },
    {
      icon: <DollarOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Fuel Tax Credit Claimants",
      desc: "Businesses intending to claim fuel tax credits for business machinery, vehicles, or heavy transport must be GST registered.",
    },
    {
      icon: <ClockCircleOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "21-Day Statutory Window",
      desc: "Once your enterprise meets or projects to exceed the threshold, the ATO generally requires registration within 21 days.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Part 1: When do you need to register for GST? */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-4 font-bold tracking-wider uppercase text-xs">
            <DollarOutlined className="mr-1.5" />
            Statutory Thresholds
          </Tag>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            When do you need to register for GST?
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
            For most businesses or enterprises, the compulsory registration threshold is $75,000 of GST turnover. The test considers both current GST turnover—the current month and previous 11 months—and projected GST turnover—the current month and next 11 months. A business with current GST turnover at or above the threshold may not need to register if its projected GST turnover is below the threshold. New businesses must also consider whether projected turnover is likely to meet the threshold.
          </p>

          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Some registration rules apply regardless of the ordinary turnover threshold, including when an enterprise provides taxi, limousine or ride-sourcing travel. Registration is also required if the business wants to claim fuel tax credits. Once a business is required to register, the ATO generally requires registration within 21 days. A GST registration accountant can help identify which rule applies before the registration is completed.
          </p>
        </div>

        {/* 3 Special Rules Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {specialRules.map((rule, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-200/80 dark:border-zinc-700/80 hover:border-emerald-400/60 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-700/60 border border-slate-200/60 dark:border-zinc-600/40 flex items-center justify-center mb-5">
                  {rule.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  {rule.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {rule.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Part 2: Voluntary GST registration */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 shadow-xs">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-brand-primary dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
              <CheckCircleOutlined />
              Commercial Considerations
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Voluntary GST registration
            </h3>
            <p className="text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              A business below the compulsory threshold may be able to register voluntarily. That choice can have practical consequences because a voluntarily registered business generally needs to account for GST on taxable sales, lodge activity statements and maintain GST records. Voluntary registration is therefore a business and compliance decision, not simply a way to claim back GST on purchases.
            </p>
            <p className="text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              ATO guidance states that a business that voluntarily registers will generally need to stay registered for at least 12 months. Before registering, it is useful to consider the nature of customers, pricing, expected purchases, administration and whether the business expects to cross the threshold soon.
            </p>
          </div>

          <div className="mt-6 p-4 rounded-xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/60 flex items-start gap-3">
            <InfoCircleOutlined className="text-lg text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <span className="text-xs sm:text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
              <strong>12-Month Commitment:</strong> Voluntary registration cannot be casually discarded if reporting proves burdensome. Evaluating your B2B vs B2C client mix is essential prior to applying.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
