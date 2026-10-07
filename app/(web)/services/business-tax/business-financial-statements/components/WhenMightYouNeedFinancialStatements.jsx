"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  BankOutlined,
  FileDoneOutlined,
  TeamOutlined,
  LineChartOutlined,
  AuditOutlined,
  DollarCircleOutlined,
  SafetyCertificateOutlined,
  ExclamationCircleOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * WhenMightYouNeedFinancialStatements Component
 * =============================================
 * Section: When Might You Need Financial Statements?
 * Features 100% complete, verbatim content from Page 6 of client docx.
 * 7 Common triggers, third-party lending formats, and assurance disclaimers.
 */
export default function WhenMightYouNeedFinancialStatements() {
  const triggers = [
    {
      icon: <FileDoneOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Annual Tax Preparation",
      desc: "Establishing accurate, reconciled accounting records to support company, trust, or partnership tax returns.",
    },
    {
      icon: <TeamOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Internal Management Review",
      desc: "Providing owners and management teams with reliable monthly, quarterly, or annual performance visibility.",
    },
    {
      icon: <BankOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Bank & Lender Requests",
      desc: "Satisfying commercial banking covenants, annual facility reviews, or merchant credit requirements.",
    },
    {
      icon: <DollarCircleOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Business Finance Applications",
      desc: "Providing verified balance sheets and P&L figures for equipment leasing, mortgages, or overdraft approvals.",
    },
    {
      icon: <AuditOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Shareholder & Owner Reporting",
      desc: "Presenting transparent financial accounts to investors, silent partners, directors, or family stakeholders.",
    },
    {
      icon: <LineChartOutlined className="text-xl text-cyan-600 dark:text-cyan-400" />,
      title: "Sale or Valuation Discussions",
      desc: "Supplying historical financial statements to business brokers, prospective purchasers, or independent valuers.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="blue" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Commercial Use Cases
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            When Might You Need Financial Statements?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A business may need financial statements for a range of reasons, including annual tax preparation, internal management, bank or lender requests, business finance applications, shareholder or owner reporting, sale or valuation discussions, or year-end accounting.
          </p>
        </div>

        {/* 6 Trigger Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {triggers.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-800/90 border border-slate-200/90 dark:border-zinc-700/80 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-100 dark:border-zinc-700 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Third-Party Requirements & Non-Audit Disclosure */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Lender Specifications */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-800/80 border border-slate-200 dark:border-zinc-700 shadow-sm flex flex-col justify-between">
            <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
              Lender &amp; Third-Party Specifications
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              A lender or other third party may specify its own reporting format, period, supporting information or assurance requirements, so those requirements should be confirmed before the engagement is finalized.
            </p>
          </div>

          {/* Assurance & Audit Disclaimer */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-800/80 border border-slate-200 dark:border-zinc-700 shadow-sm flex flex-col justify-between">
            <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <ExclamationCircleOutlined className="text-teal-600 dark:text-teal-400" />
              Non-Audit &amp; Compilation Basis
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Not every set of financial statements is audited or independently assured. Financially Up does not imply an audit or assurance engagement unless that work is specifically agreed and legally appropriate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
