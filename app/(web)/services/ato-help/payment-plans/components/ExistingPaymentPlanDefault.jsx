"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  ExclamationCircleOutlined,
  ClockCircleOutlined,
  FileSyncOutlined,
  SafetyCertificateOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * ExistingPaymentPlanDefault Component
 * =====================================
 * Section 6: What if you already have a payment plan?
 * Verbatim text from Page 7 of '11th Pillar ATO Help.docx'.
 *
 * Explains how to handle threatened defaults before payment dates,
 * variations vs replacement plans, and separating payment plans from interest remission.
 */
export default function ExistingPaymentPlanDefault() {
  const steps = [
    {
      icon: <ClockCircleOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Act Before the Payment Date",
      lead: "If you are concerned that an instalment will be missed, act before the payment date.",
      desc: "Contacting the ATO prior to direct-debit rejection prevents an automatic default flag and maintains renegotiation eligibility.",
    },
    {
      icon: <FileSyncOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Temporary vs Structural Issue",
      lead: "Check whether the issue is temporary or whether the whole arrangement is no longer sustainable.",
      desc: "We can review the account, recent payments, changed cash flow and new liabilities, then assist with the appropriate ATO contact. A variation or replacement plan depends on the ATO’s decision.",
    },
    {
      icon: <SafetyCertificateOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Separate Interest Remission Rules",
      lead: "Interest remission is separate from establishing an instalment arrangement.",
      desc: "A remission request requires its own facts and criteria; entering a payment plan does not itself remove GIC or penalties.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="red" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Plan Variations & Default Prevention
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What if you already have a payment plan?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            If you are concerned that an instalment will be missed, act before the payment date. Check whether the issue is temporary or whether the whole arrangement is no longer sustainable. We can review the account, recent payments, changed cash flow and new liabilities, then assist with the appropriate ATO contact. A variation or replacement plan depends on the ATO’s decision.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {steps.map((item, idx) => (
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
                <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-200 font-medium leading-relaxed mb-2">
                  {item.lead}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800 text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                <CheckCircleOutlined /> Action Protocol
              </div>
            </div>
          ))}
        </div>

        {/* Cross-Link Card to Penalty Remission */}
        <div className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">
              Want to Request Interest or Penalty Remission?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
              Where exceptional circumstances affected an interest or penalty amount, our ATO penalty remission page explains the different pathways. A remission request requires its own facts and criteria; entering a payment plan does not itself remove GIC or penalties.
            </p>
          </div>
          <Link
            href="/services/ato-help/penalty-remission"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition-colors shadow-sm"
          >
            Explore Penalty Remission <ArrowRightOutlined />
          </Link>
        </div>
      </div>
    </section>
  );
}
