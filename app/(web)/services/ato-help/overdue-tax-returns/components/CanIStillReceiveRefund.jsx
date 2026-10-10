"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  DollarCircleOutlined,
  BankOutlined,
  CalculatorOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

/**
 * CanIStillReceiveRefund Component
 * ================================
 * Section 4: Can I still receive a refund for an old year?
 * Verbatim text from Page 4 of '11th Pillar ATO Help.docx'.
 *
 * Details the three possible outcomes of late lodgment (refund, nil, debt),
 * older refund rules, and payment plan options if a balance is due.
 */
export default function CanIStillReceiveRefund() {
  const outcomes = [
    {
      icon: <DollarCircleOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Potential Tax Refund",
      desc: "If excess PAYG withholding was remitted by your employers, or substantial allowable deductions and tax offsets apply, the ATO will issue a refund.",
      detail:
        "Entitlement to older refunds and the practical lodgment pathway can depend on the relevant year and circumstances.",
    },
    {
      icon: <CalculatorOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Nil Assessment (Balanced Position)",
      desc: "Where tax payable matches tax already withheld or your taxable income was below taxable thresholds, no payment or refund is triggered.",
      detail:
        "Lodging still removes the compliance flag from your account and prevents automated ATO enforcement letters.",
    },
    {
      icon: <BankOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Tax Debt & Payment Arrangement",
      desc: "Where untaxed business income, capital gains, or under-withheld amounts generate a debt, we establish the accurate figure.",
      detail:
        "Where a debt results, we can help you understand the assessment and discuss available payment options with the ATO where needed.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="cyan" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Financial Outcomes
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Can I still receive a refund for an old year?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            An overdue return may result in a refund, a tax debt or no amount payable. The outcome depends on the income, withholding, deductions, offsets and other facts for that year. Do not rely on an estimated refund before the return is prepared and assessed. Entitlement to older refunds and the practical lodgment pathway can depend on the relevant year and circumstances.
          </p>
        </div>

        {/* 3 Outcome Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {outcomes.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm flex flex-col justify-between hover:border-brand-emerald dark:hover:border-brand-emerald transition-all duration-300"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-zinc-800 flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-3">
                  {item.desc}
                </p>
                <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
                  {item.detail}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-zinc-800 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                <CheckCircleOutlined /> Clear Tax Position
              </div>
            </div>
          ))}
        </div>

        {/* Payment Plan Transition Callout */}
        <div className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 shrink-0 border border-emerald-200/60 dark:border-emerald-800/60">
              <InfoCircleOutlined className="text-2xl" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1">
                Lodging Accurately vs Managing Debt
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                A payment arrangement is separate from the requirement to lodge accurate returns. If your unlodged returns produce an amount payable, we seamlessly assist you with negotiating an ATO payment arrangement once all years are assessed.
              </p>
            </div>
          </div>
          <Link
            href="/services/ato-help/ato-debt"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 font-semibold text-xs sm:text-sm transition-colors shadow-sm"
          >
            Explore ATO Debt Help <ArrowRightOutlined />
          </Link>
        </div>
      </div>
    </section>
  );
}
