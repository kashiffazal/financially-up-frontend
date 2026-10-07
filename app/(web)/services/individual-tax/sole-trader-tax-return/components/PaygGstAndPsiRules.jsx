"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  ClockCircleOutlined,
  FileSyncOutlined,
  SafetyCertificateOutlined,
  ArrowRightOutlined,
  DollarOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * PaygGstAndPsiRules Component
 * ============================
 * Section 5: PAYG Instalments, GST, BAS and Personal Services Income (PSI).
 * Features 100% complete, verbatim content from Page 4 of the client document.
 */
export default function PaygGstAndPsiRules() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Tax Regulations &amp; Compliance
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            PAYG, GST, BAS and Personal Services Income
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Essential Australian tax systems that directly impact your sole trader cash flow, tax instalments, and statutory business reporting obligations.
          </p>
        </div>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1: PAYG Instalments */}
          <div className="flex flex-col justify-between bg-white dark:bg-zinc-900 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-lg transition-all">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 text-xl">
                  <ClockCircleOutlined />
                </div>
                <Tag color="green" className="font-bold text-xs uppercase px-2.5 py-0.5">
                  Tax Cash Flow
                </Tag>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                PAYG Instalments and Planning for Tax
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                Tax may not be withheld from customer payments, which can create a liability when the annual return is assessed. Setting money aside may help, but the appropriate amount depends on individual circumstances.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                PAYG instalments are payments during the year towards expected tax on business and investment income. The ATO may enter a taxpayer into the system using information from a lodged return, and voluntary entry may be available. Instalments are credited against the annual assessment and do not replace the annual return. Amounts and timing depend on ATO requirements and individual circumstances.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
              <CheckCircleOutlined className="text-[11px]" />
              <span>Instalments Credited on Assessment</span>
            </div>
          </div>

          {/* Card 2: GST BAS and the Annual Tax Return */}
          <div className="flex flex-col justify-between bg-white dark:bg-zinc-900 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-lg transition-all">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/60 border border-teal-100 dark:border-teal-800/40 flex items-center justify-center text-teal-600 dark:text-teal-400 text-xl">
                  <FileSyncOutlined />
                </div>
                <Tag color="cyan" className="font-bold text-xs uppercase px-2.5 py-0.5">
                  $75K Threshold
                </Tag>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                GST BAS and the Annual Tax Return
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-3">
                For most businesses, GST registration is required when current or projected GST turnover reaches $75,000. Different rules apply in some circumstances, so the business activity and turnover should be reviewed.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                A business activity statement, or BAS, is separate from the annual individual return. Depending on the obligations involved, it may report GST, PAYG instalments and other amounts. The annual return reports taxable income for the financial year.
              </p>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200/80 dark:border-zinc-800 text-xs text-slate-600 dark:text-zinc-300">
                <p className="font-normal mb-2">
                  If you are registered for GST, the records used for both lodgements should be consistent. Financially Up can review the connection and provide separate BAS and GST Services where required.
                </p>
                <Link href="/services/bas-gst-payroll">
                  <Button
                    type="link"
                    className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline flex items-center gap-1 h-auto"
                    icon={<ArrowRightOutlined className="text-xs" />}
                    iconPosition="end"
                  >
                    View BAS &amp; GST Services
                  </Button>
                </Link>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800 flex items-center gap-1.5 text-xs text-teal-600 dark:text-teal-400 font-medium">
              <CheckCircleOutlined className="text-[11px]" />
              <span>BAS &amp; Tax Return Consistency Review</span>
            </div>
          </div>

          {/* Card 3: Personal Services Income (PSI) */}
          <div className="flex flex-col justify-between bg-white dark:bg-zinc-900 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-lg transition-all">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-800/40 flex items-center justify-center text-blue-600 dark:text-blue-400 text-xl">
                  <SafetyCertificateOutlined />
                </div>
                <Tag color="blue" className="font-bold text-xs uppercase px-2.5 py-0.5">
                  Contractor Rules
                </Tag>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                Personal Services Income for Contractors and Professionals
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                Personal Services Income, or PSI, is income mainly produced from an individual&apos;s efforts or skills. It may apply to contractors, freelancers, consultants and professionals, including people with an ABN.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                PSI rules may affect income reporting and available deductions. Their application depends on the working arrangements and relevant tests, not occupation alone.
              </p>

              <div className="p-3.5 rounded-xl bg-blue-50/80 dark:bg-blue-950/30 border border-blue-200/80 dark:border-blue-800/50 text-xs text-blue-950 dark:text-blue-200 font-normal">
                <strong>PSI Tests We Review:</strong> Results test, 80% rule, unrelated clients test, employment test, and business premises test.
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800 flex items-center gap-1.5 text-xs text-blue-600 dark:text-blue-400 font-medium">
              <CheckCircleOutlined className="text-[11px]" />
              <span>Contractual Terms &amp; Tests Assessment</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
