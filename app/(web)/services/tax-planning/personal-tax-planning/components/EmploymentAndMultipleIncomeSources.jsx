"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  DollarOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
  AuditOutlined,
  WalletOutlined,
} from "@ant-design/icons";

/**
 * EmploymentAndMultipleIncomeSources Component
 * ============================================
 * Section 4: Employment Income and Multiple Income Sources.
 * Verbatim text from Page 3 of '3rd Pillar Tax Planning & Advisory Final Content Pages 1-12.docx'.
 *
 * Explains how multi-source earnings create withholding disparities, and links
 * to the Individual Tax Return service when post-year-end lodgement is the priority.
 */
export default function EmploymentAndMultipleIncomeSources() {
  const interactingSources = [
    "Salary & Wage Income (PAYG Withholding)",
    "Executive Bonuses & Commissions",
    "Interest & Term Deposit Returns",
    "Share Dividends & Franking Credits",
    "Trust & Managed Fund Distributions",
    "Net Rental Property Income",
    "Realised Net Capital Gains",
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Multi-Income Dynamics
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Employment Income and Multiple Income Sources
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Individuals with income from several sources can find that withholding from one source does not reflect their total year-end tax position. Salary, bonuses, interest, dividends, distributions, rental income and capital gains may interact in the final taxable income calculation.
          </p>
          <p className="mt-3 text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
            Planning can help estimate the overall position and identify records that should be retained. It does not change the requirement to report assessable income correctly.
          </p>
        </div>

        {/* 2 Interactive Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Block 1: Interacting Income Streams */}
          <div className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center mb-6">
                <WalletOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                Interacting Income Elements
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-6">
                When you have multiple revenue streams, standard employer PAYG withholding often assumes that single salary is your sole income. Combining all sources pushes additional earnings into higher marginal tax brackets.
              </p>

              <div className="space-y-2.5">
                {interactingSources.map((source, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-xs shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 font-medium">
                      {source}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Block 2: Lodgement Priority & Individual Tax Link */}
          <div className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/60 border border-teal-100 dark:border-teal-800/40 flex items-center justify-center mb-6">
                <AuditOutlined className="text-xl text-teal-600 dark:text-teal-400" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                Tax Planning vs Annual Lodgement
              </h3>

              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-6">
                If your main need is preparation and lodgment after the year has finished, see our Individual Tax Return service.
              </p>

              <div className="rounded-xl bg-white dark:bg-zinc-900 p-5 border border-slate-200/80 dark:border-zinc-800 space-y-3 mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                  When to Choose Which Service
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  <strong>Personal Tax Planning:</strong> Best before 30 June to review withholding variances, model tax liabilities, and evaluate upcoming transactions.<br />
                  <strong>Individual Tax Return:</strong> Best after 1 July to prepare and submit your formal return with the ATO.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200/80 dark:border-zinc-800">
              <Link href="/services/individual-tax/individual-tax-return">
                <Button
                  type="primary"
                  size="large"
                  icon={<ArrowRightOutlined />}
                  iconPosition="end"
                  className="w-full rounded-xl font-bold bg-brand-primary dark:bg-emerald-500 text-white hover:bg-brand-primary/90 h-11"
                >
                  Explore Individual Tax Return Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
