"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  IdcardOutlined,
  FileSyncOutlined,
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

/**
 * BeneficiaryReportingAndTFN Component
 * =====================================
 * Section: Beneficiary Reporting and TFN Considerations
 * Features 100% complete, verbatim content from Page 3 of client docx.
 * Explains closely held trust withholding, TFN reporting, and individual return alignment.
 */
export default function BeneficiaryReportingAndTFN() {
  const reportingPillars = [
    {
      icon: <FileSyncOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Individual Return Alignment",
      detail:
        "Trust distributions create reporting obligations for beneficiaries as well as the trust. Beneficiaries require comprehensive distribution statements detailing primary income, capital gains, and franking credits to complete their personal returns accurately.",
    },
    {
      icon: <IdcardOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Closely Held Trust TFN Rules",
      detail:
        "Closely held trusts may have beneficiary TFN reporting and withholding obligations. Trustees may need to report a beneficiary’s quoted TFN to the ATO and withhold tax at top marginal rates from certain distributions where a TFN is not provided.",
    },
    {
      icon: <SafetyCertificateOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Data Consistency & Reconciliation",
      detail:
        "Because trust and beneficiary reporting must align perfectly, distribution information used in the trust return must be complete and consistent with individual statements to prevent ATO matching discrepancies.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            ATO Reporting & Withholding
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Beneficiary Reporting and TFN Considerations
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Trust distributions can create reporting obligations for beneficiaries as well as the trust. Beneficiaries generally need the relevant trust distribution information to complete their own tax returns.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Verbatim Editorial Explanations */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-gradient-to-br from-brand-bg-lighter via-white to-slate-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-zinc-800 shadow-sm space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0 mt-1">
                  <ExclamationCircleOutlined className="text-lg" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    Closely Held Trust TFN Withholding
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                    Closely held trusts may have beneficiary TFN reporting and withholding obligations. Subject to the applicable rules and exclusions, the trustee may need to report a beneficiary’s quoted TFN to the ATO and withhold from certain distributions where the beneficiary has not quoted a TFN.
                  </p>
                </div>
              </div>

              <div className="h-px bg-slate-200 dark:bg-zinc-800 my-2" />

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-1">
                  <CheckCircleOutlined className="text-lg" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    Consistency in Lodgment Statements
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                    Because the trust and beneficiary reporting need to align, it is important that the distribution information used in the trust return is complete and consistent with the statements provided to beneficiaries.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link href="/services/individual-tax/individual-tax-return">
                <Button
                  type="default"
                  className="brand-btn-outline inline-flex items-center gap-2 text-xs sm:text-sm font-semibold rounded-xl"
                  icon={<ArrowRightOutlined className="text-xs" />}
                  iconPosition="end"
                >
                  Beneficiary Individual Tax Returns
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: 3 Structured Compliance Pillars */}
          <div className="lg:col-span-6 space-y-4">
            {reportingPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm hover:shadow-md group flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-100 dark:border-zinc-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                  {pillar.icon}
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                    {pillar.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
