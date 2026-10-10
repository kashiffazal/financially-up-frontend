"use client";

import React from "react";
import { Tag } from "antd";
import {
  ClockCircleOutlined,
  CheckCircleOutlined,
  FileProtectOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";

/**
 * WhenTrusteesWindUpSmsf Component
 * ================================
 * Implements verbatim SEO content from Page 9 of 9th Pillar SMSF.docx:
 * - When might trustees wind up an SMSF?
 * - Trust deed checks and formal trustee resolutions
 */
export default function WhenTrusteesWindUpSmsf() {
  const commonReasons = [
    {
      title: "Cost & Complexity",
      desc: "The cost, administration, and regulatory obligations no longer suit the size or objectives of the fund.",
    },
    {
      title: "Changing Trustee Capacity",
      desc: "Trustees relocating overseas, ageing, or preferring to reduce their fiduciary and investment responsibilities.",
    },
    {
      title: "Member Transitions",
      desc: "Members departing the fund, relationship breakdowns, or consolidating into an Australian APRA-regulated public fund.",
    },
    {
      title: "Estate Administration",
      desc: "Final distribution of member death benefits following the death of a member/trustee in accordance with the deed.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="volcano" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Fund Closure Context
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            When might trustees wind up an SMSF?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Trustees may decide to wind up an SMSF because the fund is no longer practical to manage, members are leaving, trustee capacity has changed, the cost and administration no longer suit the fund, or the members want their benefits transferred to another superannuation arrangement. The decision is personal and can involve financial product considerations outside accounting and tax compliance.
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Before acting, trustees should check the trust deed and make sure the proposed wind-up process is consistent with the fund’s governing rules and superannuation law.
          </p>
        </div>

        {/* 4 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {commonReasons.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-md hover:border-rose-400/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800/40 flex items-center justify-center mb-4">
                  <ClockCircleOutlined className="text-xl text-rose-600 dark:text-rose-400" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Deed Review Warning Callout */}
        <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 w-full shadow-xs flex items-start gap-4">
          <FileProtectOutlined className="text-2xl text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed m-0 font-normal">
            <span className="font-bold text-slate-900 dark:text-white">Governing Trust Deed Prerequisite:</span> Every trust deed specifies exact procedures for fund dissolution, asset realization, and member notifications. Following the deed prevents legal disputes between members and beneficiaries.
          </p>
        </div>
      </div>
    </section>
  );
}
