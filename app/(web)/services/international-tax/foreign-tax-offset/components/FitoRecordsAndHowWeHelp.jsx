"use client";

import React from "react";
import Link from "next/link";
import { useCompany } from "@/context/SettingsContext";
import {
  FileTextOutlined,
  AuditOutlined,
  SafetyCertificateOutlined,
  CheckCircleFilled,
  CalendarOutlined,
  PhoneOutlined,
  MailOutlined,
  TranslationOutlined,
} from "@ant-design/icons";

/**
 * FitoRecordsAndHowWeHelp Component
 * =================================
 * Section 4: Records that support a FITO claim & How Financially Up can help
 * Exact verbatim content from Client Document (Page 6) with dynamic useCompany() hook.
 */
export default function FitoRecordsAndHowWeHelp() {
  const company = useCompany();

  const supportingRecords = [
    "Foreign income statements, payslips, dividend records or rental calculations",
    "Withholding certificates and final foreign tax assessments",
    "Evidence of payment, including dates, and details of any refund or credit",
    "Working papers linking each foreign tax amount to the related Australian income",
    "Exchange rates and calculations used to translate income, deductions and tax",
    "Ownership records where income is joint or derived through an entity",
    "Residency dates and treaty information relevant to the income",
  ];

  return (
    <section className="py-16 md:py-20 bg-white dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Records that support a FITO claim */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-teal-100 text-teal-800 dark:bg-teal-950/80 dark:text-teal-300 border border-teal-200 dark:border-teal-800/80 mb-4">
              <FileTextOutlined /> Substantiation Schedule
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
              Records That Support a FITO Claim
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-8">
              A valid FITO claim requires linking qualifying foreign taxes directly to Australian assessable items:
            </p>

            <div className="space-y-3.5 mb-8">
              {supportingRecords.map((rec, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 flex items-start gap-3.5"
                >
                  <CheckCircleFilled className="text-teal-600 dark:text-teal-400 text-lg mt-0.5 shrink-0" />
                  <span className="text-sm font-medium text-slate-800 dark:text-zinc-200 leading-snug">
                    {rec}
                  </span>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/60 flex items-start gap-3.5">
              <TranslationOutlined className="text-xl text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
              <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
                Documents in another language may need a reliable translation. If a foreign assessment is delayed, we can discuss the reporting and amendment approach supported by the timing rather than estimating an unconfirmed final tax payment.
              </p>
            </div>
          </div>

          {/* Right Column: How Financially Up can help & Company Credentials */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 shadow-sm relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/50 flex items-center justify-center text-teal-600 dark:text-teal-400 text-2xl mb-6">
                <AuditOutlined />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                How Financially Up Can Help
              </h3>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                We identify the Australian assessable income, match the foreign tax to it, review qualifying payments, translate the amounts and calculate the offset within an agreed tax return or advisory engagement. We explain why an expected foreign tax credit may be limited and identify where a refund or treaty issue should be taken to a suitably qualified adviser in the other country. Foreign law advice and foreign tax return preparation are separate unless specifically agreed.
              </p>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-6">
                Our{" "}
                <Link
                  href="/services/international-tax/foreign-rental-income"
                  className="font-semibold text-teal-600 dark:text-teal-400 hover:underline"
                >
                  foreign rental income service
                </Link>{" "}
                deals with the underlying property calculation before an offset is considered. If you recently arrived,{" "}
                <Link
                  href="/services/international-tax/new-migrants-tax"
                  className="font-semibold text-teal-600 dark:text-teal-400 hover:underline"
                >
                  new migrant tax advice
                </Link>{" "}
                focuses first on residency and the timing of foreign income. For complex remuneration and multiple personal income sources, our{" "}
                <Link
                  href="/services/individual-tax/high-income-professionals"
                  className="font-semibold text-teal-600 dark:text-teal-400 hover:underline"
                >
                  high-income professionals service
                </Link>{" "}
                addresses the wider return and planning questions.
              </p>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-6">
                {company.legalName || "Financially Up Pty Ltd"} is a registered tax agent with more than 10 years of experience and a team including CPA and IPA members. We provide online and in-person appointments across Australia and show how the foreign tax evidence supports the Australian figure without promising that all overseas tax will be recovered.
              </p>

              {/* Dynamic Company Details */}
              <div className="pt-6 border-t border-slate-200 dark:border-zinc-800 space-y-3">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-600 dark:text-zinc-400">
                  <SafetyCertificateOutlined className="text-teal-600 dark:text-teal-400" />
                  <span>Registered Tax Agent: <strong>TPB #{company.abn || "26234055"}</strong></span>
                </div>
                {company.phone && (
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-600 dark:text-zinc-400">
                    <PhoneOutlined className="text-teal-600 dark:text-teal-400" />
                    <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="hover:underline font-medium text-slate-900 dark:text-white">
                      {company.phone}
                    </a>
                  </div>
                )}
                {company.email && (
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-600 dark:text-zinc-400">
                    <MailOutlined className="text-teal-600 dark:text-teal-400" />
                    <a href={`mailto:${company.email}`} className="hover:underline font-medium text-slate-900 dark:text-white">
                      {company.email}
                    </a>
                  </div>
                )}
              </div>

              <div className="mt-8">
                <Link
                  href="/book-an-appointment"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm transition-colors shadow-sm"
                >
                  <CalendarOutlined /> Book an Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
