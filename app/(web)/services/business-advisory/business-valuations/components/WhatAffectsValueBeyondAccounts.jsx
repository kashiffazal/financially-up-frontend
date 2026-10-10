"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  SafetyCertificateOutlined,
  UsergroupAddOutlined,
  FileDoneOutlined,
  HomeOutlined,
  UserOutlined,
  TeamOutlined,
  AuditOutlined,
  SwapOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * WhatAffectsValueBeyondAccounts Component
 * ========================================
 * Section 3: What affects the value beyond the accounts?
 * Source: 12th Pillar Business Advisory.docx (Page 5: Business Valuations)
 *
 * Implements 100% complete, verbatim SEO text detailing commercial risk factors
 * that alter valuation multiples, plus the working capital & stock inclusion distinction.
 */
export default function WhatAffectsValueBeyondAccounts() {
  const valueDrivers = [
    {
      icon: <UsergroupAddOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Customer Concentration",
      desc: "High reliance on a handful of clients introduces downside risk and depresses valuation multiples.",
    },
    {
      icon: <SafetyCertificateOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Recurring Revenue Quality",
      desc: "Contracted, predictable subscriptions or ongoing retainers command substantially higher valuations.",
    },
    {
      icon: <FileDoneOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Commercial Contracts",
      desc: "Enforceable, assignable customer and supplier agreements provide certainty for incoming purchasers.",
    },
    {
      icon: <HomeOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Lease Terms & Location",
      desc: "Security of premises tenure, renewal options, and fair market rental rates directly impact longevity.",
    },
    {
      icon: <UserOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Dependence on the Owner",
      desc: "Key-person risk is critical: businesses requiring the proprietor's daily presence sell at lower multiples.",
    },
    {
      icon: <TeamOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Staff Retention & Systems",
      desc: "Experienced management teams and documented operational processes ensure smooth continuity.",
    },
    {
      icon: <AuditOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Quality of Records",
      desc: "Clean, reconciled cloud bookkeeping and transparent tax records minimize buyer due diligence friction.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Qualitative &amp; Commercial Risk Levers
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Affects the Value Beyond the Accounts?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Financial statements are the starting point, not the entire
            picture. Customer concentration, recurring revenue, contracts,
            lease terms, dependence on the owner, staff retention and quality of
            records can change how a buyer views earnings. Liabilities, working
            capital and the assets included in the sale also matter.
          </p>
        </div>

        {/* 7 Driver Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {valueDrivers.map((item, idx) => (
            <div
              key={idx}
              className={`bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-5 border border-slate-200/80 dark:border-zinc-800 shadow-2xs hover:shadow-md transition-shadow ${
                idx === 6 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 flex items-center justify-center mb-3">
                {item.icon}
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed m-0 font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Verbatim Paragraph 2 Feature Card: Comparing Offer Basis (Stock & Working Capital) */}
        <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-slate-50 dark:from-emerald-950/30 dark:via-zinc-950 dark:to-zinc-900 rounded-2xl p-7 sm:p-10 border border-emerald-200/80 dark:border-emerald-800/40 shadow-xs mb-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                <SwapOutlined />
                <span>Headline Price vs Deal Structure</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                Stock &amp; Working Capital Inclusions in Transaction Offers
              </h3>
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed m-0 font-normal">
                For example, a price may assume that stock is included, or that
                a certain amount of cash and working capital remains at
                completion. Another offer may price those items separately. We
                help you compare the basis of each proposal so two headline
                figures are not mistaken for equivalent offers.
              </p>
            </div>

            <div className="shrink-0">
              <Link href="/book-an-appointment">
                <Button
                  type="primary"
                  icon={<ArrowRightOutlined />}
                  iconPlacement="end"
                  className="rounded-xl font-bold px-6 h-11"
                >
                  Compare Offer Structures
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
