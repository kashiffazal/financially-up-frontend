"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  PhoneOutlined,
  ArrowRightOutlined,
  DollarOutlined,
  StockOutlined,
  LineChartOutlined,
  FileTextOutlined,
  AuditOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";

/**
 * HowFinanciallyUpHelpsShares Component
 * =====================================
 * Section 6: How Financially Up Can Help.
 * Features 100% complete, verbatim content from Page 7 of the client document.
 */
export default function HowFinanciallyUpHelpsShares() {
  const company = useCompany();

  const services = [
    {
      title: "Investment Income Tax-Return Preparation",
      icon: <FileTextOutlined className="text-emerald-500 text-lg" />,
    },
    {
      title: "Dividend and Franking Credit Reporting",
      icon: <DollarOutlined className="text-blue-500 text-lg" />,
    },
    {
      title: "Review of Share Transactions and Investment Statements",
      icon: <AuditOutlined className="text-amber-500 text-lg" />,
    },
    {
      title: "Capital Gain and Capital Loss Calculations for Share Disposals",
      icon: <LineChartOutlined className="text-purple-500 text-lg" />,
    },
    {
      title: "ETF and Managed-Fund Tax Information",
      icon: <StockOutlined className="text-teal-500 text-lg" />,
    },
    {
      title: "Review of Investor-Versus-Trader Circumstances",
      icon: <SafetyCertificateOutlined className="text-indigo-500 text-lg" />,
    },
    {
      title: "Complex Investment-Related Tax Matters",
      icon: <CheckCircleOutlined className="text-rose-500 text-lg" />,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Professional Scope
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How Financially Up Can Help
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            {company?.legalName || "Financially Up Pty Ltd"} is a registered tax agent, registration number {company?.taxAgentNumber || "26242127"}. We provide share and investment tax services to clients Australia-wide.
          </p>
        </div>

        {/* 7 Services Grid */}
        <div className="bg-slate-50/70 dark:bg-zinc-800/60 rounded-3xl p-7 sm:p-10 border border-slate-200/80 dark:border-zinc-700/80 shadow-xs mb-12">
          <div className="max-w-2xl mb-8">
            <span className="text-2xs font-bold uppercase tracking-wider text-brand-primary dark:text-emerald-400 block mb-1">
              Practice Capabilities
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              We Can Assist With
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/70 dark:border-zinc-700/70 shadow-2xs hover:shadow-xs transition-shadow"
              >
                <div className="w-9 h-9 rounded-xl bg-slate-50 dark:bg-zinc-800 flex items-center justify-center shrink-0 border border-slate-100 dark:border-zinc-700">
                  {item.icon}
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-zinc-200 pt-1 leading-snug">
                  {item.title}
                </span>
              </div>
            ))}
          </div>

          {/* Scope Note */}
          <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-zinc-700/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500 dark:text-zinc-400">
            <p className="m-0 max-w-2xl leading-relaxed">
              Tax-return preparation, calculation work and tax advice are not always the same service. Advice before selling investments, changing how you trade or dealing with complex transactions is scoped separately where required.
            </p>
            <Link
              href="/services/individual-tax/individual-tax-returns"
              className="text-brand-primary dark:text-emerald-400 font-bold hover:underline inline-flex items-center gap-1 shrink-0"
            >
              Standard Tax Return Service <ArrowRightOutlined className="text-xs" />
            </Link>
          </div>
        </div>

        {/* Dynamic Company Details */}
        <div className="text-center flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-600 dark:text-zinc-400">
          <span>Have questions about your share portfolio?</span>
          <a
            href={`tel:${company.phone?.replace(/\s/g, "")}`}
            className="font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1.5"
          >
            <PhoneOutlined /> {company.phone}
          </a>
          <span className="text-slate-300 dark:text-zinc-700 hidden sm:inline">•</span>
          <span>Registered Tax Agent #{company?.taxAgentNumber || "26242127"}</span>
        </div>
      </div>
    </section>
  );
}
