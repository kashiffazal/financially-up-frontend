"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  CalendarOutlined,
  FileDoneOutlined,
  PercentageOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * Division7ALoansLodgmentDay Component
 * =====================================
 * Section: Division 7A Loans and the Company Lodgment Day
 * Features 100% complete, verbatim content from Page 9 of client docx.
 * Covers lodgment day deadlines, complying agreements, and benchmark rates.
 */
export default function Division7ALoansLodgmentDay() {
  const compliancePathways = [
    {
      icon: <CheckCircleOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Pathway 1: Full Repayment Before Lodgment Day",
      desc: "Fully repaying the loan principal and interest before the company's lodgment day for the relevant income year, ensuring genuine bona fide settlement.",
    },
    {
      icon: <FileDoneOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Pathway 2: Written Complying Loan Agreement",
      desc: "Placing the loan under a formal written loan agreement complying with statutory terms (e.g., maximum 7 years for unsecured loans or 25 years for secured loans) before the relevant lodgment day.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="orange" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Critical Timeline &amp; Agreements
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Division 7A Loans and the Company Lodgment Day
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A private-company loan to a shareholder or associate may be treated as a dividend if it is not fully repaid before the company&apos;s lodgment day for the relevant year and no applicable exclusion applies.
          </p>
        </div>

        {/* Lodgment Day Definition Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-800/90 border border-slate-200/90 dark:border-zinc-700/80 shadow-sm mb-12 flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="w-14 h-14 rounded-2xl bg-teal-500/10 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
            <CalendarOutlined className="text-2xl" />
          </div>
          <div className="space-y-1.5 flex-1">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              Definition of Company Lodgment Day
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              The ATO defines the lodgment day as the earlier of the due date for lodgment or the date the company actually lodges its income tax return.
            </p>
          </div>
        </div>

        {/* 2 Compliance Pathways */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {compliancePathways.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-800/90 border border-slate-200/90 dark:border-zinc-700/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-100 dark:border-zinc-700 flex items-center justify-center mb-4">
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

        {/* Benchmark Interest Rate Callout */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-blue-50 dark:from-zinc-900 dark:via-zinc-850 dark:to-zinc-900 border border-emerald-200/80 dark:border-emerald-800/50 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <PercentageOutlined className="text-emerald-600 dark:text-emerald-400" />
              ATO Benchmark Interest Rates &amp; Minimum Yearly Repayments
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
              One common way a qualifying loan may avoid immediate deemed-dividend treatment is for it to be placed under a written complying loan agreement before the relevant lodgment day, with the Division 7A requirements then met. These arrangements generally involve the ATO benchmark interest rate and minimum yearly repayments. The benchmark rate can change by income year, so repayment calculations should use the rate and rules applying to the relevant period rather than a historical figure.
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <Link href="/book-an-appointment">
              <Button
                type="primary"
                className="brand-btn-primary w-full md:w-auto text-xs sm:text-sm font-semibold rounded-xl"
                icon={<ArrowRightOutlined />}
                iconPosition="end"
              >
                Set Up Loan Agreement
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
