"use client";

import React from "react";
import Link from "next/link";
import { Button } from "antd";
import {
  FileProtectOutlined,
  CalendarOutlined,
  CalculatorOutlined,
  BankOutlined,
  SafetyCertificateOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * ComplyingLoansAndRepayments Component
 * =====================================
 * Section 3: Statutory requirements for Section 109D written loan agreements,
 * maximum terms (7 years unsecured, 25 years secured), benchmark interest rates,
 * and minimum yearly repayment (MYR) schedules.
 * Verbatim text from Page 9 of the Tax Planning document.
 */
export default function ComplyingLoansAndRepayments() {
  const complianceSteps = [
    {
      icon: <FileProtectOutlined className="text-xl text-brand-primary dark:text-emerald-400" />,
      title: "Written Loan Agreement Before Lodgement",
      desc: "Must be formally executed before the private company’s tax return lodgement day for the income year the loan was made.",
    },
    {
      icon: <CalendarOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Statutory Interest & Maximum Term",
      desc: "Agreement must satisfy the statutory benchmark interest rate and maximum term rules (e.g. 7 years unsecured, up to 25 years secured by real property mortgage).",
    },
    {
      icon: <CalculatorOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Minimum Yearly Repayment (MYR)",
      desc: "First minimum repayment is generally due by the end of the income year after the loan was made, continuing annually over the remaining term.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-zinc-900 border-b border-slate-100 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-primary/10 text-brand-primary dark:bg-emerald-500/10 dark:text-emerald-400 mb-4 border border-brand-primary/20 dark:border-emerald-500/20">
            Section 109D Agreements
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Complying Division 7A Loans and Repayments
          </h2>
        </div>

        {/* Verbatim Paragraph 1 */}
        <div className="max-w-4xl mx-auto mb-12 bg-slate-50 dark:bg-zinc-800/60 p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-zinc-700/80 text-slate-700 dark:text-zinc-300 text-base sm:text-lg leading-relaxed shadow-sm">
          Where an eligible private company loan is not repaid before the company’s lodgement day, a written complying loan agreement entered into by that day may prevent section 109D from treating the loan as a dividend, provided the statutory requirements are met. The agreement needs to satisfy the statutory interest and maximum-term requirements. The first minimum yearly repayment is generally due by the end of the income year after the year in which the loan was made, and minimum repayments continue over the loan term.
        </div>

        {/* 3 Step Criteria Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {complianceSteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-slate-50 dark:bg-zinc-800/40 rounded-2xl p-6 border border-slate-200/70 dark:border-zinc-700/60 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 flex items-center justify-center mb-4 border border-slate-200/80 dark:border-zinc-700 shadow-xs">
                  {step.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Paragraph 2 on Holistic Planning */}
        <div className="max-w-4xl mx-auto mb-14 bg-amber-50/70 dark:bg-amber-950/20 rounded-2xl p-6 sm:p-7 border border-amber-200/80 dark:border-amber-800/50 text-slate-700 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
          <p className="font-medium">
            A complying loan agreement is not a blanket solution. Good planning still requires review of the original transaction, agreement timing, outstanding balance, interest, actual repayments and accounting records.
          </p>
        </div>

        {/* Verbatim Service Cross-Links Box */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-slate-900 to-slate-800 dark:from-zinc-900 dark:to-zinc-800 text-white rounded-3xl p-8 sm:p-10 shadow-xl">
          <div className="mb-6">
            <h3 className="text-lg sm:text-xl font-bold mb-2">
              Corporate Returns &amp; Business Tax Compliance Integration
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              For broader tax-return and compliance work involving the company, see our Company Tax Returns and Business Tax Compliance services.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-start gap-4 pt-4 border-t border-white/10">
            <Link href="/services/business-tax/company-tax-returns">
              <Button
                type="link"
                className="p-0 font-bold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1.5 text-xs sm:text-sm h-auto"
                icon={<ArrowRightOutlined className="text-xs" />}
                iconPosition="end"
              >
                Company Tax Returns
              </Button>
            </Link>
            <span className="text-slate-500 hidden sm:inline">•</span>
            <Link href="/services/business-tax/business-tax-compliance">
              <Button
                type="link"
                className="p-0 font-bold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1.5 text-xs sm:text-sm h-auto"
                icon={<ArrowRightOutlined className="text-xs" />}
                iconPosition="end"
              >
                Business Tax Compliance
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
