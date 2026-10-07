"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  CalendarOutlined,
  FileDoneOutlined,
  AlertOutlined,
  PercentageOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * WhenDivision7AAffectsCompanyLoan Component
 * ==========================================
 * Section: When can Division 7A affect a company loan?
 * Verbatim text from Page 10 of client docx.
 * Covers:
 * - Private company drawings and benefits to shareholders/associates
 * - Complying loan agreements before the company lodgment day
 * - Written agreement, benchmark interest rates, minimum yearly repayments
 * - Disregarded repayments (anti-avoidance reborrowing rules)
 * - Annual changes in the benchmark rate.
 */
export default function WhenDivision7AAffectsCompanyLoan() {
  const compliancePillars = [
    {
      icon: <CalendarOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Repayment Before Company Lodgment Day",
      desc: "A loan that would otherwise be caught may avoid being treated as a deemed dividend where, for example, it is repaid or converted to a complying loan by the relevant company lodgment day and the legislative requirements are met.",
    },
    {
      icon: <FileDoneOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Written Complying Loan Agreement",
      desc: "Complying loans generally require a written agreement, at least the benchmark interest rate and repayments that satisfy the minimum yearly repayment rules.",
    },
    {
      icon: <AlertOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Anti-Avoidance & Disregarded Repayments",
      desc: "Some repayments can be disregarded under Division 7A where the amount is reborrowed or a similar arrangement is made. The transaction history should therefore be reviewed rather than relying only on the year-end balance.",
    },
    {
      icon: <PercentageOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Variable Benchmark Interest Rates",
      desc: "The benchmark interest rate changes by income year, so it should be checked for the relevant period rather than copied from a previous year. If a minimum yearly repayment is not met, Division 7A consequences may arise depending on the facts.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50/50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Division 7A & Private Drawings
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            When can Division 7A affect a company loan?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Division 7A may apply where a private company provides a loan, payment or other benefit to a shareholder or an associate. A common example is a director drawing company funds for private use and leaving the amount outstanding in the loan account.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {compliancePillars.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Link to Dedicated Division 7A Hub */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-teal-500/10 via-white to-slate-50 dark:from-teal-950/20 dark:via-zinc-900 dark:to-zinc-950 border border-teal-500/20 dark:border-teal-500/30 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <CheckCircleOutlined className="text-teal-600 dark:text-teal-400" />
              Comprehensive Division 7A Guidance Available
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              For complete details on complying loan terms (7-year unsecured vs 25-year secured), minimum yearly repayment calculators, and the High Court Bendel decision, explore our dedicated Division 7A advisory service.
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <Link href="/services/business-tax/division-7a">
              <Button
                type="primary"
                className="brand-btn-primary w-full md:w-auto text-xs sm:text-sm font-semibold rounded-xl"
                icon={<ArrowRightOutlined />}
                iconPosition="end"
              >
                Explore Division 7A Service
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
