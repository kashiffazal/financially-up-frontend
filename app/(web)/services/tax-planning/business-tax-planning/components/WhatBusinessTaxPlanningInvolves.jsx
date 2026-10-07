"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  FileSearchOutlined,
  DollarOutlined,
  CalendarOutlined,
  BankOutlined,
  AppstoreOutlined,
  AuditOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";

/**
 * WhatBusinessTaxPlanningInvolves Component
 * ==========================================
 * Section 1: What Does the Service Involve?
 * Verbatim text from Page 2 of '3rd Pillar Tax Planning & Advisory Final Content Pages 1-12.docx'.
 *
 * Provides a structured visual overview of the forward-looking scope:
 * income, deductions, PAYG instalments, GST/BAS, assets, structures, and owner transactions.
 */
export default function WhatBusinessTaxPlanningInvolves() {
  const reviewAreas = [
    {
      icon: <DollarOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Business Income & Deductions",
      desc: "Reviewing expected trading revenue and deductible expenditure against current ATO substantiation rules.",
    },
    {
      icon: <CalendarOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "PAYG Instalments & Cash Outflows",
      desc: "Evaluating instalment rates, forecasting quarterly payments, and planning for anticipated income tax obligations.",
    },
    {
      icon: <BankOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "GST and BAS Positions",
      desc: "Assessing GST liabilities and business reporting requirements to safeguard working capital and operational liquidity.",
    },
    {
      icon: <AppstoreOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Asset Purchases & Capital Timing",
      desc: "Analyzing depreciation treatments, immediate write-offs, and GST implications before committing to equipment purchases.",
    },
    {
      icon: <FileSearchOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Ownership & Structure Changes",
      desc: "Reviewing company, trust, or partnership alignment with growth goals, commercial risk, and profit distribution.",
    },
    {
      icon: <AuditOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Director & Shareholder Transactions",
      desc: "Examining drawings, loans, dividends, and trust allocations to identify potential compliance and Division 7A considerations.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Scope &amp; Methodology
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Does the Service Involve?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            The service involves reviewing the business’s current and expected financial position, identifying tax and compliance issues, and considering lawful options before transactions are completed. It can also help owners estimate tax-related cash outflows and understand which matters need separate advice.
          </p>
          <p className="mt-3 text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
            A business tax advisor may review areas such as business income, deductible expenditure, PAYG instalments, GST and BAS positions, asset purchases, ownership or structure changes, distributions, director or shareholder transactions, and the timing of significant business events. Not every item will be relevant to every business.
          </p>
        </div>

        {/* 6 Review Focus Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {reviewAreas.map((area, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between bg-white dark:bg-zinc-900 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-lg hover:border-emerald-400/60 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    {area.icon}
                  </div>
                  <span className="text-[11px] font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest">
                    Focus 0{idx + 1}
                  </span>
                </div>

                <div className="flex items-start gap-2.5 mb-2.5">
                  <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-sm mt-1 shrink-0" />
                  <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                    {area.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed pl-6 font-normal">
                  {area.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Inline Consultation Callout Card */}
        <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-emerald-800 to-teal-900 text-white shadow-lg border border-emerald-700/60 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-emerald-200 text-xs font-bold uppercase tracking-wider">
              <SafetyCertificateOutlined className="text-base" />
              <span>Forward-Looking Business Advisory</span>
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-white">
              Discuss Your Upcoming Business Transactions Early
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-normal">
              Review your expected business results, entity structure, tax obligations, upcoming transactions, current records and any decisions you are considering before year end.
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <Link href="/book-an-appointment">
              <Button
                type="primary"
                size="large"
                icon={<ArrowRightOutlined />}
                iconPosition="end"
                className="w-full md:w-auto rounded-xl font-bold bg-white text-emerald-900 hover:bg-emerald-50 hover:text-emerald-950 border-none h-11 px-6 shadow-md"
              >
                Book an Appointment
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
