"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  PhoneOutlined,
  ArrowRightOutlined,
  GlobalOutlined,
  FileDoneOutlined,
  DollarOutlined,
  HomeOutlined,
  CalculatorOutlined,
  StockOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";

/**
 * HowFinanciallyUpHelpsForeign Component
 * =====================================
 * Section 7: How a foreign income tax accountant can help.
 * Features 100% complete, verbatim content from Page 9 of the client document.
 */
export default function HowFinanciallyUpHelpsForeign() {
  const company = useCompany();

  const services = [
    {
      title: "Reviewing Overseas Income and Foreign Tax Documents",
      icon: <GlobalOutlined className="text-emerald-500 text-lg" />,
    },
    {
      title: "Preparing an Australian Individual Tax Return Containing Foreign Income",
      icon: <FileDoneOutlined className="text-blue-500 text-lg" />,
    },
    {
      title: "Reporting Foreign Employment, Pension, Dividend, Interest and Investment Income",
      icon: <DollarOutlined className="text-amber-500 text-lg" />,
    },
    {
      title: "Reviewing Foreign Rental Income and Related Expenses",
      icon: <HomeOutlined className="text-purple-500 text-lg" />,
    },
    {
      title: "Considering FITO Information and Currency Conversions",
      icon: <CalculatorOutlined className="text-teal-500 text-lg" />,
    },
    {
      title: "Reviewing Overseas Asset-Disposal Information Relevant to the Australian Return",
      icon: <StockOutlined className="text-rose-500 text-lg" />,
    },
    {
      title: "Identifying When Separate Residency, Treaty or Broader International Tax Advice May Be Needed",
      icon: <SafetyCertificateOutlined className="text-indigo-500 text-lg" />,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Professional Practice Scope
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How a Foreign Income Tax Accountant Can Help
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            {company?.legalName || "Financially Up Pty Ltd"} provides Australian tax services to clients Australia-wide. Depending on the agreed scope, our foreign-income assistance may include:
          </p>
        </div>

        {/* 7 Services Grid */}
        <div className="bg-slate-50/70 dark:bg-zinc-800/60 rounded-3xl p-7 sm:p-10 border border-slate-200/80 dark:border-zinc-700/80 shadow-xs mb-12">
          <div className="max-w-2xl mb-8">
            <span className="text-2xs font-bold uppercase tracking-wider text-brand-primary dark:text-emerald-400 block mb-1">
              Practice Capabilities
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Our Cross-Border Tax Capabilities
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

          {/* Scope Clarification Note */}
          <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-zinc-700/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500 dark:text-zinc-400">
            <p className="m-0 max-w-2xl leading-relaxed">
              Tax-return preparation and document review are distinct from tax planning or detailed advice. The scope and fees for additional advice are confirmed separately before that work begins. Financially Up advises on Australian tax matters within the agreed scope; advice on another country&apos;s law may require a suitably qualified adviser in that jurisdiction. For broader cross-border matters, see our International Tax service.
            </p>
            <Link
              href="/services"
              className="text-brand-primary dark:text-emerald-400 font-bold hover:underline inline-flex items-center gap-1 shrink-0"
            >
              International Tax Services <ArrowRightOutlined className="text-xs" />
            </Link>
          </div>
        </div>

        {/* Dynamic Company Details */}
        <div className="text-center flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-600 dark:text-zinc-400">
          <span>Need help with cross-border tax affairs?</span>
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
