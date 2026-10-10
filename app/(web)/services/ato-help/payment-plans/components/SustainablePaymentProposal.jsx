"use client";

import React from "react";
import { Tag } from "antd";
import {
  LineChartOutlined,
  DollarCircleOutlined,
  StopOutlined,
  CheckCircleOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";

/**
 * SustainablePaymentProposal Component
 * =====================================
 * Section 5: What makes a payment proposal sustainable?
 * Verbatim text from Page 7 of '11th Pillar ATO Help.docx'.
 *
 * Emphasizes realistic cash-flow management, setting aside tax as it arises,
 * and treating payment plans as an administrative tool rather than a substitute for viable cash flow.
 */
export default function SustainablePaymentProposal() {
  const pillars = [
    {
      icon: <LineChartOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Current Figures & Fluctuation Buffers",
      lead: "A workable proposal uses current figures, allows for normal fluctuations and shows how both the instalments and new tax will be funded.",
      desc: "Allowing a cash cushion for seasonal lulls, debtor delays, and supplier price rises ensures instalments never default.",
    },
    {
      icon: <DollarCircleOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Real-Time Tax Quarantine",
      lead: "For a business, this may require separating GST, PAYG withholding or income-tax amounts as they arise rather than waiting for the next due date.",
      desc: "Setting up automated transfers to a separate tax savings account prevents routine operational expenses from consuming statutory funds.",
    },
    {
      icon: <StopOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Fixing Underlying Shortfalls First",
      lead: "If the cash-flow forecast shows another shortfall, the underlying cause should be addressed before an instalment amount is proposed.",
      desc: "A payment plan is an administration tool, not a substitute for viable cash-flow management.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="cyan" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Financial Realism
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What makes a payment proposal sustainable?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A workable proposal uses current figures, allows for normal fluctuations and shows how both the instalments and new tax will be funded. For a business, this may require separating GST, PAYG withholding or income-tax amounts as they arise rather than waiting for the next due date. If the cash-flow forecast shows another shortfall, the underlying cause should be addressed before an instalment amount is proposed. A payment plan is an administration tool, not a substitute for viable cash-flow management.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-6 sm:p-8 bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 hover:border-brand-emerald dark:hover:border-brand-emerald transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-200 font-medium leading-relaxed mb-2">
                  {item.lead}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-zinc-700/60 text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                <CheckCircleOutlined /> Sustainability Standard
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
