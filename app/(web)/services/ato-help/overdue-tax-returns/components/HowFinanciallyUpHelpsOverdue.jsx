"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  FileSearchOutlined,
  CheckCircleOutlined,
  FileSyncOutlined,
  SolutionOutlined,
  ArrowRightOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

/**
 * HowFinanciallyUpHelpsOverdue Component
 * =====================================
 * Section 7: How Financially Up helps
 * Verbatim text from Page 4 of '11th Pillar ATO Help.docx'.
 *
 * Details our engagement steps: clarify years, agree on required info,
 * explain figures before lodgment, and distinguish between overdue returns,
 * amendments, and voluntary disclosures.
 */
export default function HowFinanciallyUpHelpsOverdue() {
  const steps = [
    {
      num: "01",
      icon: <FileSearchOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Clarify Years & Entities Involved",
      lead: "As your overdue tax return accountant, we first clarify the years and entities involved.",
      desc: "Whether you need to lodge individual, company, trust, or partnership returns across two years or ten years, we map the exact entity structure and timeline.",
    },
    {
      num: "02",
      icon: <FileSyncOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Agree on Information & Scope",
      lead: "We then agree on the information required, prepare each return in scope and explain the proposed figures before lodgment.",
      desc: "No surprises. We reconcile every year, prepare clear calculation summaries, and review every schedule with you before you sign off.",
    },
    {
      num: "03",
      icon: <SolutionOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Distinguish Returns vs Amendments",
      lead: "Where earlier lodged returns contain errors, an amendment may be required; an overdue return is not the same as correcting a return already lodged.",
      desc: "We ensure past unlodged periods are cleanly separated from prior periods requiring formal Section 170 amendments.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="cyan" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Our Client Process
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How Financially Up helps
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            As your overdue tax return accountant, we first clarify the years and entities involved. We then agree on the information required, prepare each return in scope and explain the proposed figures before lodgment. Where earlier lodged returns contain errors, an amendment may be required; an overdue return is not the same as correcting a return already lodged.
          </p>
        </div>

        {/* 3 Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-6 sm:p-8 bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 hover:border-brand-emerald dark:hover:border-brand-emerald transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-slate-300 dark:text-zinc-600">
                    {item.num}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center">
                    {item.icon}
                  </div>
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

              <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-zinc-700/60 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                <CheckCircleOutlined /> Tax Agent Managed
              </div>
            </div>
          ))}
        </div>

        {/* Cross-Link Callout to Voluntary Disclosure */}
        <div className="rounded-2xl p-6 sm:p-8 bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
              Discovered an Omission in an Already-Lodged Return?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              Some matters call for separate work, including objections, voluntary disclosures, payment arrangements or penalty remission. If you have discovered a significant omission in a return already lodged, see our voluntary disclosure page for that distinct issue.
            </p>
          </div>
          <Link
            href="/services/ato-help/voluntary-disclosure"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition-colors shadow-sm"
          >
            Explore Voluntary Disclosure <ArrowRightOutlined />
          </Link>
        </div>
      </div>
    </section>
  );
}
