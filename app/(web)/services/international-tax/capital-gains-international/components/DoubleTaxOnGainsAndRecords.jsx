"use client";

import React from "react";
import Link from "next/link";
import { useCompany } from "@/context/SettingsContext";
import {
  SafetyCertificateOutlined,
  AuditOutlined,
  FileTextOutlined,
  CheckCircleFilled,
  CalendarOutlined,
  PhoneOutlined,
  MailOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * DoubleTaxOnGainsAndRecords Component
 * ====================================
 * Section 4: What if another country taxes the gain? & What Financially Up needs to review
 * Exact verbatim content from Client Document (Page 7) with dynamic useCompany() hook.
 */
export default function DoubleTaxOnGainsAndRecords() {
  const company = useCompany();

  const cgtRecordsToBring = [
    "Purchase and sale contracts & settlement statements",
    "Capital improvement invoices and holding cost records",
    "Ownership details and entity title certificates",
    "Evidence of any periods of personal residence or rental use",
    "Market valuation reports at the date of residency change",
    "Travel, visa and Australian residency transition dates",
    "Foreign tax assessments and evidence of foreign tax paid",
    "Share broker transaction logs and corporate action records",
  ];

  return (
    <section className="py-16 md:py-20 bg-white dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: What Financially Up Needs to Review */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-teal-100 text-teal-800 dark:bg-teal-950/80 dark:text-teal-300 border border-teal-200 dark:border-teal-800/80 mb-4">
              <FileTextOutlined /> Evidence Schedule
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
              What Financially Up Needs to Review
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-8">
              Bring purchase and sale contracts, settlement statements, improvement invoices, ownership details and evidence of any periods of residence or rental use. A valuation at a residency change may be important. Provide travel and residency dates, foreign tax assessments and evidence of tax payment. Share transactions may require broker statements and corporate action records. We identify missing material and agree any valuation or specialist work before making a calculation based on incomplete figures.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              {cgtRecordsToBring.map((rec, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 flex items-start gap-3"
                >
                  <CheckCircleFilled className="text-teal-600 dark:text-teal-400 text-base mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-zinc-200 leading-snug">
                    {rec}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: What if another country taxes the gain? & Credentials */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 shadow-sm relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/50 flex items-center justify-center text-teal-600 dark:text-teal-400 text-2xl mb-6">
                <AuditOutlined />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                What if Another Country Taxes the Gain?
              </h3>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                A foreign income tax offset may be available where qualifying foreign tax was paid on a gain that is also included in Australian assessable income. The claim is subject to the Australian FITO rules and, in some cases, a calculation limit. The nature of the foreign tax, evidence of payment and any relevant treaty must be reviewed. Financially Up can assess the Australian treatment and coordinate with a local adviser where foreign law or foreign filings require attention.
              </p>
              <div className="space-y-2 mb-6 text-xs sm:text-sm text-slate-600 dark:text-zinc-400 font-normal">
                <p>
                  Where overseas tax and other foreign income also need Australian reporting, our{" "}
                  <Link href="/services/international-tax/foreign-income-tax" className="font-semibold text-teal-600 dark:text-teal-400 hover:underline">
                    Foreign Income Tax service
                  </Link>{" "}
                  addresses those return items separately.
                </p>
                <p>
                  If an overseas property also produced rent, our{" "}
                  <Link href="/services/international-tax/foreign-rental-income" className="font-semibold text-teal-600 dark:text-teal-400 hover:underline">
                    foreign rental income service
                  </Link>{" "}
                  addresses its income and expenses during ownership.
                </p>
                <p>
                  For a sale of Australian real estate by a person living abroad, our{" "}
                  <Link href="/services/international-tax/australians-overseas" className="font-semibold text-teal-600 dark:text-teal-400 hover:underline">
                    Australians overseas tax service
                  </Link>{" "}
                  addresses the wider residency and Australian return position.
                </p>
              </div>

              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-6">
                {company.legalName || "Financially Up Pty Ltd"} is a registered tax agent with more than 10 years of experience and a team including CPA and IPA members. We offer online and in-person appointments across Australia. Our work can cover an Australian CGT review or return preparation within the agreed engagement; foreign legal, valuation and tax work should be separately scoped where needed.
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
