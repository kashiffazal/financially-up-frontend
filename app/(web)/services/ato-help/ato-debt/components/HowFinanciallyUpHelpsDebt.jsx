"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  FileSearchOutlined,
  FileSyncOutlined,
  CalculatorOutlined,
  SolutionOutlined,
  MailOutlined,
  SafetyCertificateOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * HowFinanciallyUpHelpsDebt Component
 * ===================================
 * Section 7: How Financially Up can help with ATO debt
 * Verbatim text from Page 2 of '11th Pillar ATO Help.docx'.
 *
 * Implements the 6 core action deliverables provided by Financially Up,
 * plus contextual link back to broad ATO Help hub.
 */
export default function HowFinanciallyUpHelpsDebt() {
  const deliverables = [
    {
      num: "01",
      icon: <FileSearchOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Review the ATO Account & Identify Components",
      desc: "review the ATO account and identify the components of the debt",
      detail:
        "We dissect your ATO running balance, separating base tax, super liabilities, penalties, and accrued General Interest Charges (GIC).",
    },
    {
      num: "02",
      icon: <FileSyncOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Check Outstanding Returns & BAS Lodgements",
      desc: "check for outstanding returns, BAS or other lodgements to complete first",
      detail:
        "The ATO requires all lodgements to be up to date before approving arrangements. We identify and fast-track missing filings.",
    },
    {
      num: "03",
      icon: <CalculatorOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Prepare Cash-Flow & Accounting Information",
      desc: "prepare relevant cash-flow and accounting information",
      detail:
        "We draft verifiable budgets and rolling cash-flow statements that prove your proposed instalment amounts are sustainable.",
    },
    {
      num: "04",
      icon: <SolutionOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Payment-Plan Setup & Variation via Tax Agent Portal",
      desc: "assist with eligible payment-plan setup or variation as your registered tax agent",
      detail:
        "As your registered tax agent, we represent you through Online services for agents for eligible plans or negotiate terms directly.",
    },
    {
      num: "05",
      icon: <MailOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Respond to Correspondence & Record Agreed Actions",
      desc: "respond to correspondence and record agreed actions, dates and conditions",
      detail:
        "We handle official ATO communications, ensuring deadlines, agreed instalments, direct debit terms, and compliance milestones are documented.",
    },
    {
      num: "06",
      icon: <SafetyCertificateOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Identify When Legal or Insolvency Advice Is Required",
      desc: "identify when legal, insolvency or other specialist advice is required",
      detail:
        "If recovery has escalated to DPNs, statutory demands, or insolvency threats, we flag when specialized legal counsel is essential.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="cyan" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Our Service Deliverables
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How Financially Up can help with ATO debt
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            We provide structured, tax-agent-led assistance to help you regain control of your tax affairs, liaise with the ATO, and implement sustainable resolution terms.
          </p>
        </div>

        {/* 6 Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {deliverables.map((item, idx) => (
            <div
              key={idx}
              className="group rounded-2xl p-6 sm:p-7 bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 hover:border-brand-emerald dark:hover:border-brand-emerald transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-slate-300 dark:text-zinc-600 group-hover:text-emerald-500/60 transition-colors">
                    {item.num}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-200 font-medium mb-2 leading-relaxed">
                  "{item.desc}"
                </p>
                <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                  {item.detail}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200/60 dark:border-zinc-700/60 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                <CheckCircleOutlined /> Direct Tax Agent Service
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Link to Broad ATO Help Hub */}
        <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-transparent border border-emerald-500/30 dark:border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1">
              Have Broader Correspondence or Account Issues?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
              For broader correspondence or unresolved account issues not primarily about debt, start with our ATO help service.
            </p>
          </div>
          <Link
            href="/services/ato-help"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 font-semibold text-xs sm:text-sm transition-colors shadow-sm"
          >
            Visit ATO Help Hub <ArrowRightOutlined />
          </Link>
        </div>
      </div>
    </section>
  );
}
