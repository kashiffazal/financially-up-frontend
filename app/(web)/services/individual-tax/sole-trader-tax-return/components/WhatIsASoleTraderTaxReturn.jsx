"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  AuditOutlined,
  CalculatorOutlined,
  DollarOutlined,
  PieChartOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * WhatIsASoleTraderTaxReturn Component
 * ====================================
 * Section 1: What Is a Sole Trader Tax Return.
 * Features 100% complete, verbatim content from Page 4 of the client document.
 */
export default function WhatIsASoleTraderTaxReturn() {
  const principles = [
    {
      title: "Individual Tax Return Lodgement",
      description:
        "A sole trader's individual tax return includes income and expenses from the business they operate. The business does not lodge a separate income tax return as a company would.",
      icon: <AuditOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      tag: "Structure",
    },
    {
      title: "Net Business Profit & Personal Income",
      description:
        "Net business profit is generally assessable business income less allowable deductions. It is considered with other personal income, such as salary, investments or rent.",
      icon: <CalculatorOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      tag: "Calculation",
    },
    {
      title: "Treatment of Business Losses",
      description:
        "If the business makes a loss, the applicable rules determine whether it can be used immediately or must be deferred.",
      icon: <PieChartOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      tag: "Loss Rules",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Tax Framework
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Is a Sole Trader Tax Return
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Operating as a sole trader combines your business venture with your personal Australian tax return under your individual Tax File Number (TFN) and Australian Business Number (ABN).
          </p>
        </div>

        {/* 3 Core Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {principles.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between bg-white dark:bg-zinc-900 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-xl hover:border-emerald-400/60 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center transition-transform group-hover:scale-110">
                    {item.icon}
                  </div>
                  <Tag className="text-[11px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 border-none m-0">
                    {item.tag}
                  </Tag>
                </div>

                <div className="flex items-start gap-2 mb-3">
                  <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-sm mt-1 shrink-0" />
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed pl-5 font-normal">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800/80 flex items-center justify-between text-xs text-slate-400 dark:text-zinc-500">
                <span>Core Rule 0{idx + 1}</span>
                <span className="font-medium text-emerald-600 dark:text-emerald-400">
                  ATO Compliant
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Informational Callout */}
        <div className="rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-800/50 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xs">
          <div className="flex items-start gap-4 max-w-3xl">
            <DollarOutlined className="text-emerald-600 dark:text-emerald-400 text-2xl mt-1 shrink-0" />
            <div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-1">
                Integrated Personal &amp; Business Assessment
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
                Because sole trader business income is reported within your individual return, your marginal tax rates apply to your total combined taxable income across all personal and business sources.
              </p>
            </div>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <Link href="/book-an-appointment">
              <Button
                type="primary"
                size="large"
                icon={<ArrowRightOutlined />}
                iconPosition="end"
                className="w-full md:w-auto font-bold rounded-xl bg-brand-primary hover:bg-brand-primary-dark border-none h-11 px-6"
              >
                Book Sole Trader Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
