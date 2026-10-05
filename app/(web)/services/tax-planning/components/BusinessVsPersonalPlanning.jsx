"use client";

import React from "react";
import { Button } from "antd";
import {
  BankOutlined,
  UserOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  ApartmentOutlined,
} from "@ant-design/icons";
import Link from "next/link";

/**
 * BusinessVsPersonalPlanning Component
 * =====================================
 * Section 5: Business and Personal Tax Planning.
 * Differentiates corporate tax planning from personal/individual tax planning
 * with clear scope points and direct navigation to specialized pathways.
 */
export default function BusinessVsPersonalPlanning() {
  const businessFocusPoints = [
    "Corporate & entity income, deductible expenditure, and loss carry-forward",
    "Cash flow forecasting, PAYG instalments, and quarterly BAS management",
    "Entity structuring (Companies, Discretionary Trusts, Partnerships)",
    "Division 7A shareholder loan review and benchmark interest compliance",
    "Trust distribution resolutions documented prior to 30 June",
    "Asset purchases, depreciation pools, and instant asset write-offs",
  ];

  const personalFocusPoints = [
    "High-salary and multi-source employment income tax optimization",
    "Investment property negative gearing, deductions, and depreciation schedules",
    "Capital Gains Tax (CGT) discount calculations on shares and real estate",
    "Concessional and non-concessional superannuation contribution caps",
    "Valid 30 June notice of intent submission for personal super contributions",
    "Proactive management of Division 293 tax for high earners",
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 border-t border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-800/60 mb-4">
            <ApartmentOutlined className="text-teal-600 dark:text-teal-400 text-xs sm:text-sm" />
            <span className="text-xs font-semibold text-teal-800 dark:text-teal-300 tracking-wide uppercase">
              Distinct Advisory Frameworks
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Business and Personal Tax Planning
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
            While this hub provides an overview across both domains, effective tax planning requires advice tailored strictly to the specific entity type and financial decision involved.
          </p>
        </div>

        {/* 2 Major Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Business Tax Planning Column */}
          <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm hover:border-teal-500/50 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-teal-50 dark:bg-teal-950/50 border border-teal-200 dark:border-teal-800 flex items-center justify-center">
                  <BankOutlined className="text-2xl text-teal-600 dark:text-teal-400" />
                </div>
                <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/50 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                  For Commercial Owners
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                Business Tax Planning
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 leading-relaxed mb-6">
                Focuses on business income, deductions, cash flow, structures, GST/BAS obligations, and timing business transactions to protect commercial solvency.
              </p>

              <div className="space-y-3 mb-8">
                {businessFocusPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                    <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 mt-1 shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link href="/services/tax-planning/business-tax-planning" className="w-full block">
              <Button
                type="primary"
                size="large"
                icon={<ArrowRightOutlined />}
                iconPosition="end"
                className="w-full h-12 rounded-xl font-semibold shadow-md shadow-brand-primary/20 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center"
              >
                Explore Business Tax Planning
              </Button>
            </Link>
          </div>

          {/* Personal Tax Planning Column */}
          <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm hover:border-emerald-500/50 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center">
                  <UserOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />
                </div>
                <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                  For Individuals & Investors
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                Personal Tax Planning
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 leading-relaxed mb-6">
                Considers employment earnings, investment income, rental portfolios, capital gains, personal deductions, and superannuation contribution rules.
              </p>

              <div className="space-y-3 mb-8">
                {personalFocusPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                    <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 mt-1 shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link href="/services/tax-planning/personal-tax-planning" className="w-full block">
              <Button
                type="primary"
                size="large"
                icon={<ArrowRightOutlined />}
                iconPosition="end"
                className="w-full h-12 rounded-xl font-semibold shadow-md shadow-brand-primary/20 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center"
              >
                Explore Personal Tax Planning
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
