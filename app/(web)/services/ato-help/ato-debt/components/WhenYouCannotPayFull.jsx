"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  ClockCircleOutlined,
  DollarCircleOutlined,
  CalculatorOutlined,
  ExclamationCircleOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * WhenYouCannotPayFull Component
 * ==============================
 * Section 1: What should you do if you cannot pay an ATO debt in full?
 * Verbatim text from Page 2 of '11th Pillar ATO Help.docx'.
 *
 * Implements practical guidance on early engagement, realistic cash-flow forecasting,
 * and avoiding unsustainable instalment commitments.
 */
export default function WhenYouCannotPayFull() {
  const actionPrinciples = [
    {
      icon: <ClockCircleOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
      tag: "Priority 1 • Early Action",
      title: "Engage Early to Limit Interest & Risk",
      summary:
        "Engage early. A payment plan may be available, but approval is not automatic and interest can continue to accrue on unpaid amounts.",
      detail:
        "The practical priority is to confirm the amount owing, ensure required lodgements are current and propose payments that can be maintained alongside future tax obligations.",
    },
    {
      icon: <CalculatorOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
      tag: "Priority 2 • Financial Realism",
      title: "Avoid Promises You Cannot Sustain",
      summary:
        "If cash flow is under pressure, avoid promising an instalment simply to end a phone call. A plan that cannot be sustained may lead to another default and a more difficult discussion.",
      detail:
        "Prepare a realistic budget or cash-flow forecast, allow for upcoming tax liabilities and identify whether a lump-sum payment is genuinely available.",
    },
    {
      icon: <DollarCircleOutlined className="text-2xl text-purple-600 dark:text-purple-400" />,
      tag: "Priority 3 • Sustainable Model",
      title: "Balance Past Debt with Upcoming Tax",
      summary:
        "Payment arrangements must leave sufficient cash flow to pay future BAS and tax liabilities as they fall due.",
      detail:
        "Defaulting on a second plan due to unforeseen new debts harms your standing with the ATO. Realistic modelling from day one is essential.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="cyan" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Immediate Action Steps
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What should you do if you cannot pay an ATO debt in full?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Engage early. A payment plan may be available, but approval is not automatic and interest can continue to accrue on unpaid amounts. The practical priority is to confirm the amount owing, ensure required lodgements are current and propose payments that can be maintained alongside future tax obligations.
          </p>
        </div>

        {/* 3 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {actionPrinciples.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl p-6 sm:p-8 bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 hover:border-brand-emerald dark:hover:border-brand-emerald transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 shadow-sm border border-slate-200/60 dark:border-zinc-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-300 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/60 dark:border-emerald-800/60">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-200 font-medium leading-relaxed mb-3">
                  {item.summary}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                  {item.detail}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-zinc-700/60 flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <CheckCircleOutlined />
                <span>Verified ATO Resolution Strategy</span>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Advice Callout */}
        <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/30 dark:border-amber-500/20">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-amber-500/20 text-amber-600 dark:text-amber-400 shrink-0">
              <ExclamationCircleOutlined className="text-2xl" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                A Critical Warning for Stressed Taxpayers:
              </h4>
              <p className="text-xs sm:text-sm md:text-base text-slate-700 dark:text-zinc-300 leading-relaxed">
                If cash flow is under pressure, avoid promising an instalment simply to end a phone call. A plan that cannot be sustained may lead to another default and a more difficult discussion. Prepare a realistic budget or cash-flow forecast, allow for upcoming tax liabilities and identify whether a lump-sum payment is genuinely available.
              </p>
              <div className="mt-4 flex items-center gap-3">
                <Link
                  href="/book-an-appointment"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300"
                >
                  Need professional help formulating a proposal? Book an Appointment <ArrowRightOutlined />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
