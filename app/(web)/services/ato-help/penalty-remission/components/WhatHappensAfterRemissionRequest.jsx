"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  CheckCircleOutlined,
  IssuesCloseOutlined,
  CloseCircleOutlined,
  ArrowRightOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";

/**
 * WhatHappensAfterRemissionRequest Component
 * ==========================================
 * Section 6: What happens after the request?
 * Verbatim text from Page 5 of '11th Pillar ATO Help.docx'.
 *
 * Explains potential ATO decisions (full allowance, partial, decline),
 * notes that underlying tax is not cancelled, and cross-links to Voluntary Disclosure.
 */
export default function WhatHappensAfterRemissionRequest() {
  const outcomes = [
    {
      icon: <CheckCircleOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
      tag: "Best Outcome",
      title: "Allowed in Full",
      lead: "The ATO cancels 100% of the penalty amount.",
      desc: "The entire penalty is credited back against your running balance account, reducing the outstanding liability.",
    },
    {
      icon: <IssuesCloseOutlined className="text-2xl text-amber-600 dark:text-amber-400" />,
      tag: "Partial Relief",
      title: "Allowed in Part",
      lead: "The ATO reduces the penalty by a proportion.",
      desc: "The ATO acknowledges extenuating circumstances for part of the delay while maintaining a residual penalty for unexcused delays.",
    },
    {
      icon: <CloseCircleOutlined className="text-2xl text-red-600 dark:text-red-400" />,
      tag: "Declined Decision",
      title: "Declined with Review Rights",
      lead: "The ATO refuses remission and gives written reasons.",
      desc: "Its decision and any available review rights should be considered against the notice received to evaluate further administrative review.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="purple" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            ATO Decision & Next Steps
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What happens after the request?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            The ATO may allow the request in full, allow it in part or decline it. Its decision and any available review rights should be considered against the notice received. A remission request does not, by itself, cancel the underlying tax or suspend every other obligation.
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
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-zinc-800 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-xs font-semibold text-slate-700 dark:text-zinc-300 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-zinc-800">
                    {item.tag}
                  </span>
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
                <SafetyCertificateOutlined /> Formal ATO Notice
              </div>
            </div>
          ))}
        </div>

        {/* Cross-Link Card to Voluntary Disclosure */}
        <div className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">
              Did an Inaccurate Return Cause a Tax Shortfall?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
              Where an inaccurate return caused a tax shortfall, a voluntary disclosure may involve a distinct penalty outcome. Our voluntary disclosure page addresses how to tell the ATO about an error; it is not a substitute for a remission request about an already imposed penalty.
            </p>
          </div>
          <Link
            href="/services/ato-help/voluntary-disclosure"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 font-semibold text-xs sm:text-sm transition-colors shadow-sm"
          >
            Explore Voluntary Disclosure <ArrowRightOutlined />
          </Link>
        </div>
      </div>
    </section>
  );
}
